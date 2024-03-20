<?php

if (!defined('_S_VERSION')) {
    // Replace the version number of the theme on each release.
    define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function jsw_setup()
{
    /*
        * Make theme available for translation.
        * Translations can be filed in the /languages/ directory.
        * If you're building a theme based on jsw, use a find and replace
        * to change 'jsw' to the name of your theme in all the template files.
        */
    load_theme_textdomain('jsw', get_template_directory() . '/languages');

    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    /*
        * Let WordPress manage the document title.
        * By adding theme support, we declare that this theme does not use a
        * hard-coded <title> tag in the document head, and expect WordPress to
        * provide it for us.
        */
    add_theme_support('title-tag');

    /*
        * Enable support for Post Thumbnails on posts and pages.
        *
        * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
        */
    add_theme_support('post-thumbnails');

    $hospitals = get_posts(['post_type'=>'hospital', 'status'=>'publish']);

    $menus = [
        'top-menu' => esc_html__('Top Header', 'jsw'),
        'primary' => esc_html__('Primary', 'jsw'),
        'footer-menu' => esc_html__('Footer Menu', 'jsw'),
        'department-sidebar-menu' => esc_html__('Department Sidebar', 'jsw'),
        'services-sidebar-menu' => esc_html__('Services Sidebar', 'jsw'),
    ];
    $hospitalMenu = [];
    foreach ($menus as $slug=>$title){
        array_walk($hospitals, function ($hospital) use (&$hospitalMenu, $slug, $title){
            $hospitalMenu[sprintf('%s-%s', $slug, $hospital->post_name)] = sprintf('%s (%s)', $title, $hospital->post_title);
        });
    }
    // This theme uses wp_nav_menu() in one location.
    register_nav_menus(
        array_merge($menus, $hospitalMenu)
    );

    /*
        * Switch default core markup for search form, comment form, and comments
        * to output valid HTML5.
        */
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );

    // Set up the WordPress core custom background feature.
    add_theme_support(
        'custom-background',
        apply_filters(
            'jsw_custom_background_args',
            array(
                'default-color' => 'ffffff',
                'default-image' => '',
            )
        )
    );

    // Add theme support for selective refresh for widgets.
    add_theme_support('customize-selective-refresh-widgets');

    /**
     * Add support for core custom logo.
     *
     * @link https://codex.wordpress.org/Theme_Logo
     */
    add_theme_support(
        'custom-logo',
        array(
            'height' => 250,
            'width' => 250,
            'flex-width' => true,
            'flex-height' => true,
        )
    );

    add_image_size( 'archive-image-department', 515, 305, true );
    add_image_size( 'archive-image-service', 540, 320, true );
    add_image_size( 'archive-image-specialist', 378, 478, true );
}

add_action('after_setup_theme', 'jsw_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function jsw_content_width()
{
    $GLOBALS['content_width'] = apply_filters('jsw_content_width', 640);
}

add_action('after_setup_theme', 'jsw_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function jsw_widgets_init()
{
    register_sidebar(
        array(
            'name' => esc_html__('Sidebar', 'jsw'),
            'id' => 'sidebar-1',
            'description' => esc_html__('Add widgets here.', 'jsw'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget' => '</section>',
            'before_title' => '<h2 class="widget-title">',
            'after_title' => '</h2>',
        )
    );
    register_sidebar(
        array(
            'name' => esc_html__('Department Sidebar', 'jsw'),
            'id' => 'department-sidebar',
            'description' => esc_html__('Add widgets here.', 'jsw'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget' => '</section>',
            'before_title' => '<h2 class="widget-title">',
            'after_title' => '</h2>',
        )
    );
    register_sidebar(
        array(
            'name' => esc_html__('Services Sidebar', 'jsw'),
            'id' => 'services-sidebar',
            'description' => esc_html__('Add widgets here.', 'jsw'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget' => '</section>',
            'before_title' => '<h2 class="widget-title">',
            'after_title' => '</h2>',
        )
    );

    // Faq Searc Widget

    register_sidebar(
        array(
            'name' => esc_html__('JSW FAQ Search Box', 'jsw'),
            'id' => 'faq-search-box',
            'description' => esc_html__('Add widgets here.', 'jsw'),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget' => '</section>',
            'before_title' => '<h2 class="widget-title">',
            'after_title' => '</h2>',
        )
    );
}

add_action('widgets_init', 'jsw_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function jsw_scripts()
{
    wp_enqueue_style('jsw-style', get_stylesheet_uri(), array(), _S_VERSION);
    wp_style_add_data('jsw-style', 'rtl', 'replace');
    wp_enqueue_style('fonts-style', get_template_directory_uri() . '/assets/fonts/lato/stylesheet.css', array('jsw-style'), _S_VERSION);
    wp_enqueue_style('plug-style', get_template_directory_uri() . '/assets/css/plugin.css', array('jsw-style'), _S_VERSION);
    wp_enqueue_style('theme-style', get_template_directory_uri() . '/assets/css/main.css', array('jsw-style'), _S_VERSION);
    wp_enqueue_style('custom-style', get_template_directory_uri() . '/assets/css/custom.css', array('jsw-style'), _S_VERSION);

    wp_enqueue_script('jsw-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array('jquery'), _S_VERSION, true);
    wp_enqueue_script('plug-script', get_template_directory_uri() . '/assets/js/plugin.js', array('jquery'), _S_VERSION, true);
    wp_enqueue_script('main-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), _S_VERSION, true);
    wp_enqueue_script('custom-script', get_template_directory_uri() . '/assets/js/custom.js', array('jquery'), _S_VERSION, true);

    wp_localize_script('custom-script', 'jsw', [
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
    ]);

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}

add_action('wp_enqueue_scripts', 'jsw_scripts');


/**
 * Implement the Custom Functions.
 */
require get_template_directory() . '/inc/acf-settings.php';

/**
 * Implement the Custom Post type.
 */
require get_template_directory() . '/inc/class/class-post-type.php';

/**
 * Implement the Custom Post type create.
 */
require get_template_directory() . '/inc/cpt.php';

/**
 * Implement the Menu Walker.
 */
require get_template_directory() . '/inc/class/class-menu.php';

/**
 * @param int $totalPages
 * @param int $currentPage
 * @param int $range
 * @return false|string
 */
function getPagination(int $totalPages, int $currentPage, int $range = 4)
{
    if ($totalPages <= 1) {
        return '';
    }

    $parsedUrl = wp_parse_url(get_pagenum_link());
    $query = (isset($parsedUrl['query']) && $parsedUrl['query']) ? ('?' . $parsedUrl['query']) : '';
    $query = ($query && isset($parsedUrl['fragment'])) ? $query . $parsedUrl['fragment'] : '';
    $url = esc_url($parsedUrl['host'] . $parsedUrl['path']);

    ob_start();
    $min = 1;
    /** minimum page number to be shown */
    $max = $totalPages;
    /** max page number to be shown */
    if ($totalPages > $range) {
        if ($currentPage <= ceil($range / 2)) {
            $min = 1;
            $max = $range;
        } else {
            $min = ($currentPage - ceil($range / 2)) + 1;
            if ($range % 2 === 0) {
                $max = $currentPage + ceil($range / 2);
            } else {
                $max = ($currentPage + ceil($range / 2)) - 1;
            }

            if ($currentPage > ($totalPages - ceil($range / 2))) {
                $min = $totalPages - ($range - 1);
                $max = $totalPages;
            }
        }
    }

    ?>
    <ul class="pagination">
        <?php
        if (!empty($min) && !empty($max)) {
            if ($min > 1) {
                echo '<li><a href="' . trailingslashit($url) . '/' . $query . '" class="first">&lt;&lt;</a></li>';
            }
            if ($currentPage > 1) {
                echo '<li><a href="' . untrailingslashit($url) . '/page/' . ($currentPage - 1) . '/' . $query . '" class="prev">&lt;</a></li>';
            }
            if ($min > 1) {
                echo '<li><a href="' . trailingslashit($url) . '/' . $query . '"> 1</a></li>';
                if ($min > 2) {
                    echo '<li><span class="dot">.....</span></li>';
                }
            }

            for ($i = $min; $i <= $max; $i++) {
                echo '<li class="' . (($currentPage == $i) ? 'active' : '') . '"><a href="' . untrailingslashit($url) . '/page/' . $i . '/' . $query . '">' . $i . '</a></li>';
            }

            if ($max < $totalPages) {
                if ($max != $totalPages - 1) {
                    echo '<li><span class="dot">.....</span></li>';
                }
                echo '<li><a href="' . untrailingslashit($url) . '/page/' . $totalPages . '/' . $query . '">' . $totalPages . '</a></li>';
            }
            if ($currentPage < $totalPages) {
                echo '<li><a href="' . untrailingslashit($url) . '/page/' . ($currentPage + 1) . '/' . $query . '" class="next">&gt;</a></li>';
            }
            if ($max < $totalPages) {
                echo '<li><a href="' . untrailingslashit($url) . '/page/' . $totalPages . '/' . $query . '" class="last">&gt;&gt;</a></li>';
            }
        }
        ?>

    </ul>
    <!-- end pagination -->
    <?php

    return ob_get_clean();
}