<?php
/**
 * The template for displaying archive pages of FAQ
 * Template Name: FAQ Template
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
get_header($header_footer_template);
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
        <section class="gap-top-lg gap-bottom-lg">
            <div class="container">
                <div class="serach-wrap d-flex justify-content-start gap-bottom-sm">
                    <div class="search-block position-relative">
                        <input type="text" class="jsw-search" placeholder="Enter Keyword to search..">
                        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div class="row accodiaon-wrap">
                    <div class="col-md-12">
                        <?php
                        $args = [
                            'post_type' => 'faqs',
                            'posts_per_page' => -1,
                            'post_status' => 'publish',
                        ];
                        if(isset($_GET['search'])){
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
                        if (have_posts()) {
                            ?>
                            <div class="accordion" id="accordionExample">
                                <?php
                                $index = 1;
                                while (have_posts()):the_post();
                                    $expand = false;
                                    $active_class = '';
                                    $inactive_class = ' collapsed';
                                    if ($index == 1) {
                                        $expand = true;
                                        $active_class = ' show';
                                        $inactive_class = '';
                                    }
                                    ?>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading-<?= $index ?>">
                                            <button class="accordion-button<?= $inactive_class ?>" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-<?= $index ?>"
                                                    aria-expanded="<?= $expand ?>" aria-controls="collapse-<?= $index ?>">
                                                <?= get_the_title() ?>
                                                <i class="fa-solid fa-plus"></i>
                                                <i class="fa-solid fa-minus"></i>
                                            </button>
                                        </h2>
                                        <div id="collapse-<?= $index ?>" class="accordion-collapse collapse<?= $active_class ?>" aria-labelledby="heading-<?= $index ?>"
                                             data-bs-parent="#accordionExample">
                                            <div class="accordion-body"><?= get_the_content() ?></div>
                                        </div>
                                    </div>
                                    <?php
                                    $index++;
                                endwhile; ?>
                            </div>
                        <?php } else {
                            get_template_part('template-parts/content', 'none');
                        } ?>
                    </div>
                </div>
            </div>
        </section>

    </main><!-- #main -->

<?php
get_footer($header_footer_template);
