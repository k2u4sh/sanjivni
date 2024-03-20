<?php
add_filter('nav_menu_css_class', 'special_nav_class', 10, 2);

function special_nav_class($classes, $item)
{
    $classes[] = 'nav-item';
    if (in_array('current-menu-item', $classes)) {
        $classes[] = 'active ';
    }
    return $classes;
}

add_filter('get_custom_logo', 'change_logo_class');


function change_logo_class($html)
{

    //$html = str_replace( 'custom-logo', 'your-custom-class', $html );
    $html = str_replace('custom-logo-link', 'navbar-brand', $html);
    $html = str_replace('width', 'data-width', $html);
    $html = str_replace('height', 'data-height', $html);

    return $html;
}


/**
 * Modify Login
 */

function _login_logo()
{
    echo '<style type="text/css">
        .login h1 a { background-image:url(' . get_bloginfo('template_directory') . '/assets/img/logo.png) !important;background-size: 80% !important; margin-bottom: 5px; height: 50px; width: 110px; }
        .login h1 a:hover,
        .login h1 a:focus {
            box-shadow: none;
            outline: 0;
        }
    </style>';
}

add_action('login_head', '_login_logo');

/**
 * To change the login logo url
 * @param $url
 * @return string -> home url
 */
function custom_loginLogo_url($url)
{
    return esc_url(home_url('/'));
}

add_filter('login_headerurl', 'custom_loginLogo_url');

function cc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}

add_filter('upload_mimes', 'cc_mime_types');

function custom_type_archive_display($query)
{
    if (
        is_post_type_archive('departments') || is_post_type_archive('testimonials') ||
        is_post_type_archive('ourspecialist') || is_post_type_archive('services') || is_tax('services-category')
    ) {
        /*if (isset($_GET['search']) && $_GET['search']) {
            $query->set('s', $_GET['search']);
        }*/
        $query->set('posts_per_page', 20);
        return $query;
    }
}

add_action('pre_get_posts', 'custom_type_archive_display');

function search_jsw_keyword()
{
    ini_set('display_errors', '1');
    ini_set('display_startup_errors', '1');
    error_reporting(E_ALL);
    $searchText = $_POST['keyword'];
    $args = [
        'post_type' => array('departments', 'ourspecialist', 'services'),
        'post_status' => 'publish',
        'posts_per_page' => 20,
        's' => $searchText,
    ];
    $slug = $_POST['hospital'] ?? '';
    $hospital = get_posts(array(
        'name' => $slug,
        'post_type' => 'hospital',
        'post_status' => 'publish',
        'posts_per_page' => 1,
        'fields' => 'ids'
    ));
    if ($hospital) {
        $meta_query = ['relation' => 'OR'];
        foreach ($hospital as $id) {
            $meta_query = array_merge($meta_query, [
                [
                    'key' => 'hospital',
                    'value' => $id,
                    'compare' => 'LIKE'
                ]
            ]);
        }
        $args['meta_query'] = $meta_query;
    }
    $s_query = new WP_Query($args);
    $html = '<ul class="dropdown-jsw dropdown-lists">';
    if ($s_query->have_posts()) {
        while ($s_query->have_posts()) : $s_query->the_post();
            $title = get_the_title();
            $url = get_permalink();
            $html .= "<li><a href='{$url}'>{$title}</a></li>";
        endwhile;
    } else {
        $html .= "<li>No result found!</li>";
    }
    $html .= '</ul>';
    echo $html;
    exit;
}

add_action('wp_ajax_nopriv_search_jsw_keyword', 'search_jsw_keyword');
add_action('wp_ajax_search_jsw_keyword', 'search_jsw_keyword');

add_action('redirect_canonical', '__return_false');


add_action('init', function () {
    $hospitals = get_posts(array(
        'post_type' => 'hospital',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'order' => "asc"
    ));
    if ($hospitals) {
        $replaces = [""];
        $hospitalSlugPatterns = array_map(function ($item) use (&$replaces) {
            $replaces[] = "";
            return '/' . $item->post_name . '\//i';
        }, $hospitals);

        $hospitalSlugPatterns = array_merge($hospitalSlugPatterns, ['/jsw-multi\//i']);
        $request_uri = preg_replace($hospitalSlugPatterns, $replaces, $_SERVER['REQUEST_URI']);
        $expRequestURI = array_filter(explode('/', $request_uri));
        add_rewrite_tag('%hospital%', '([^&]+)');
        foreach ($hospitals as $hospital) {
            add_rewrite_rule($hospital->post_name . '/([^/]*)[/]?$', 'index.php?pagename=$matches[1]&hospital=' . $hospital->post_name, 'top');
            if (count($expRequestURI) > 1 && strpos($expRequestURI[1], '-category') !== false) {
                add_rewrite_rule($hospital->post_name . '/([^/]*)/([^/]*)[/]?$', 'index.php?$matches[1]=$matches[2]&hospital=' . $hospital->post_name, 'top');
            } else {
                add_rewrite_rule($hospital->post_name . '/([^/]*)/page/([^/]*)?$', 'index.php?pagename=$matches[1]&hospital=' . $hospital->post_name.'&paged=$matches[2]', 'top');
                add_rewrite_rule($hospital->post_name . '/([^/]*)/([^/]*)[/]?$', 'index.php?name=$matches[2]&post_type=$matches[1]&hospital=' . $hospital->post_name, 'top');
            }
        }
        flush_rewrite_rules();
    }
});

add_filter('post_link', 'change_link', 10, 2);
add_filter('post_type_link', 'change_link', 10, 2);
function change_link($link, $post)
{
    return changeUrlAsHospital($link, $post->ID);
}

function changeUrlAsHospital($url, $post_id = 0)
{
    global $current_hospital;
    if ($post_id < 1) {
        $post_id = get_the_ID();
    }
    $hospital = get_query_var('hospital');
    if (!$hospital && $post_id) {
        $hospital = get_field('hospital', $post_id);
        $hospital = $hospital ? reset($hospital)->post_name : '';
    }
    if ($current_hospital) {
        $hospital = $current_hospital;
    }
    if (untrailingslashit(site_url($hospital)) != untrailingslashit($url) && strpos($url, $hospital) == false) {
        return str_replace(site_url(), site_url($hospital), $url);
    }
    return $url;
}
