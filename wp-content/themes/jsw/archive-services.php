<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package jsw
 */

$header_footer_template = get_field('header_footer_template', 'options');
$header_footer_template = ('default' != $header_footer_template) ? $header_footer_template : '';
$hospital = get_field('hospital');
$slug = get_query_var('hospital');
if($slug){
    $hospital = get_posts( array(
        'name' => $slug,
        'post_type' => 'hospital',
        'post_status' => 'publish',
        'posts_per_page' => 1
    ) );
}
if($hospital){
    $hospital = reset($hospital);
    $header_footer_template = get_field('header_footer_template', $hospital->ID);
    $header_footer_template = ('default' != $header_footer_template) ? $header_footer_template : '';
}
$GLOBALS['current_hospital'] = $hospital ? $hospital->post_name : '';
get_header();
?>
    <main id="primary" class="site-main">
        <section class="sub-page-banner cover no-repeat" style="background-image: url('<?= get_field('banner_image_services', 'options') ?>');">
            <div class="container d-flex align-items-center">
                <div>
                    <div class="row">
                        <div class="col-lg-7">
                            <h1 class="bt"><?= preg_replace('/<span>/i', '<span class="ms-4">', get_queried_object()->label) ?></h1>
                            <div class="breadcrumb-wrap">
                                <span class="gt"><span>Home</span> <span class="mx-3">></span> </span> <span class="rt"><?= ucwords(strtolower(strip_tags(get_queried_object()->label))) ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="gap-bottom-lg gap-top-lg">
            <div class="container">
                <?php if (have_rows('services', 'options')) { ?>
                    <div class="row">
                        <div class="text-center col-md-10 mx-auto">
                            <?php while (have_rows('services', 'options')):the_row() ?>
                                <?php if (get_sub_field('title')) { ?>
                                    <h2 class="bt"><?= get_sub_field('title') ?></h2>
                                <?php } ?>

                                <?php if (get_sub_field('title')) { ?>
                                    <div class="section-sub-title"><?= get_sub_field('descriptions') ?></div>
                                <?php } ?>
                            <?php endwhile; ?>
                        </div>
                    </div>
                <?php } ?>
                <div class="serach-wrap d-flex justify-content-end gap-top-lg">
                    <div class="search-block position-relative">
                        <input type="text" class="jsw-search" placeholder="Enter services to search..">
                        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div class="row card-block-wrap gap-top-sm gx-5">
                    <?php
                    $currentPage = max(1, get_query_var('paged'));
                    $args = [
                        'post_type' => get_queried_object()->name,
                        'posts_per_page' => 4,
                        'post_status' => 'publish',
                        'paged' => $currentPage
                    ];
                    if (isset($_GET['search']) && $_GET['search']) {
                        $args['s'] = $_GET['search'];
                    }
                    if ($hospital) {
                        $args['meta_query'] =  [
                            [
                                'key' => 'hospital',
                                'value' => $hospital->ID,
                                'compare' => 'LIKE'
                            ]
                        ];
                    }
                    $wp_query = new WP_Query($args);
                    if (have_posts()) :
                        /* Start the Loop */
                        while (have_posts()) : the_post();
                            get_template_part('template-parts/archive/content', get_post_type());
                        endwhile;
                    else :
                        get_template_part('template-parts/content', 'none');
                    endif;
                    ?>
                </div>
                <?php
                if (have_posts()) {
                    if ($wp_query->max_num_pages > 1) {
                        echo '<div class="paginiation-wrap">';
                        echo getPagination($wp_query->max_num_pages, $currentPage);
                        echo '</div>';
                    }
                }
                ?>
            </div>
        </section>

    </main><!-- #main -->

<?php
get_footer();
