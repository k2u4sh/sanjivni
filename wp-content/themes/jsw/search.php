<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
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
get_header($header_footer_template);
?>

    <main id="primary" class="site-main">
        <section class="gap-bottom-lg testimonial-wrap gap-top-lg">
            <div class="container">
                <?php if (have_posts()) : ?>

                    <header class="page-header">
                        <h1 class="page-title">
                            <?php
                            /* translators: %s: search query. */
                            printf(esc_html__('Search Results for: %s', 'jsw'), '<span>' . get_search_query() . '</span>');
                            ?>
                        </h1>
                    </header><!-- .page-header -->
                    <div class="row opt-block-wrap gap-top-md">
                        <?php
                        /* Start the Loop */
                        while (have_posts()) :
                            the_post();

                            /**
                             * Run the loop for the search to output the results.
                             * If you want to overload this in a child theme then include a file
                             * called content-search.php and that will be used instead.
                             */
                            get_template_part('template-parts/archive/content', get_post_type());

                        endwhile;
                        //the_posts_navigation();
                        ?>
                    </div>
                <?php
                else :
                    get_template_part('template-parts/content', 'none');
                endif;
                ?>
            </div>
        </section>
    </main><!-- #main -->

<?php
//get_sidebar();
get_footer($header_footer_template);
