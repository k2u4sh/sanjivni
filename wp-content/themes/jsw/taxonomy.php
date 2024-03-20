<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package jsw
 */

get_header();
?>
    <main id="primary" class="site-main">
        <section class="sub-page-banner cover no-repeat" style="background-image: url('<?= get_field('banner_image_services', 'options') ?>');">
            <div class="container d-flex align-items-center">
                <div>
                    <div class="row">
                        <div class="col-lg-7">
                            <h1 class="bt"><?= preg_replace('/<span>/i', '<span class="ms-4">', get_queried_object()->name) ?></h1>
                            <div class="breadcrumb-wrap">
                                <span class="gt"><span>Home</span> <span class="mx-3">></span> </span> <span class="rt"><?= ucwords(strtolower(strip_tags(get_queried_object()->name))) ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="gap-bottom-lg gap-top-lg">
            <div class="container">
                <div class="row">
                    <div class="text-center col-md-10 mx-auto">
                        <?php if (get_queried_object()->name) { ?>
                            <h2 class="bt"><?= get_queried_object()->name ?></h2>
                        <?php } ?>

                        <?php if (get_queried_object()->description) { ?>
                            <div class="section-sub-title"><?= get_queried_object()->description ?></div>
                        <?php } ?>
                    </div>
                </div>
                <div class="serach-wrap d-flex justify-content-end gap-top-lg">
                    <div class="search-block position-relative">
                        <input type="text" class="jsw-search" placeholder="Enter specialist to search..">
                        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div class="row card-block-wrap gap-top-sm gx-5">
                    <?php
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
                    global $wp_query;
                    $page = max(1, get_query_var('paged'));
                    if ($wp_query->max_num_pages > 1) {
                        echo '<div class="paginiation-wrap">';
                        echo getPagination($wp_query->max_num_pages, $page);
                        echo '</div>';
                    }
                }
                ?>
            </div>
        </section>

    </main><!-- #main -->

<?php
get_footer();
