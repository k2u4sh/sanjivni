<?php
/**
 * The template for displaying archive pages
 * Template Name: Vijay Nagar Faq Template
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

        <section class="sub-page-banner cover no-repeat" style="background-image: url('<?= get_field('sub_page_banner') ?>');">
            <div class="container d-flex align-items-center">
                <div>
                    <div class="row">
                        <div class="col-lg-7">
                            <h1 class="bt"><?= preg_replace('/<span>/i', '<span class="ms-4">', get_the_title()) ?></h1>
                            <div class="breadcrumb-wrap">
                                <span class="gt"><span>Home</span> <span class="mx-3">></span> </span> <span class="rt"><?= ucwords(strtolower(strip_tags(get_the_title()))) ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="cmsFaq gap-bottom-lg testimonial-wrap gap-top-lg">
            <div class="container">
                
                <div class="row opt-block-wrap gap-top-md">
                    <div class="col-md-12 mx-auto">
                        <div class="grid">
                            <div class="searchBox">
                                <?php if( is_active_sidebar( 'faq-search-box' ) ) : ?>
                                    <aside class="widgetized-page-before-content-widget-area">
                                        <?php dynamic_sidebar( 'faq-search-box' ); ?>
                                    </aside>
                                <?php endif; ?>
                                
                            </div>
                            
                            <div  class="accordionBox">
                                <?php echo do_shortcode('[sp_easyaccordion id="1185"]'); ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main><!-- #main -->

<style>
.cmsFaq.gap-bottom-lg.testimonial-wrap .grid {
	margin: 0 auto;
	display: grid;
	grid-template-columns: inherit;
}
</style>


<?php
get_footer();