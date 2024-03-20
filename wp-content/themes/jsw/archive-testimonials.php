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

        <section class="sub-page-banner cover no-repeat" style="background-image: url('<?= get_field('banner_image_testimonials', 'options') ?>');">
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
        <section class="gap-bottom-lg testimonial-wrap gap-top-lg">
            <div class="container">
                <div class="row">
                    <div class="text-center col-md-8 mx-auto">
                        <h2 class="bt">Our Patients Testimonials</h2>
                    </div>
                </div>
                <div class="row opt-block-wrap gap-top-md">
                    <div class="col-md-12 mx-auto">
                        <div class="grid">
                            <?php if (have_posts()):
                                /* Start the Loop */
                                while (have_posts()) : the_post();
                                    get_template_part('template-parts/archive/content', get_post_type());
                                endwhile;
                            else :
                                get_template_part('template-parts/content', 'none');
                            endif;
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main><!-- #main -->

<?php
get_footer();