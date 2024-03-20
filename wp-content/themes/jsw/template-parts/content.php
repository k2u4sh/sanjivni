<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package jsw
 */

if (is_single()) {
    $url = get_field('sub_page_banner');
    if(get_field('use_in_single_page_services', 'options') && get_post_type() == 'services'){
        $url = get_field('banner_image_services', 'options');
    }
    if(get_field('use_in_single_page_departments', 'options') && get_post_type() == 'departments'){
        $url = get_field('banner_image_departments', 'options');
    }
    if(get_field('use_in_single_page_testimonials', 'options') && get_post_type() == 'testimonials'){
        $url = get_field('banner_image_testimonials', 'options');
    }
    ?>
    <section class="sub-page-banner cover no-repeat" style="background-image: url('<?= $url ?>');">
        <div class="container d-flex align-items-center">
            <div>
                <div class="row">
                    <div class="col-lg-7">
                        <h1 class="bt"><?= preg_replace('/<span>/i', '<span class="ms-4">', get_post_type_object(get_post_type())->label) ?></h1>
                        <div class="breadcrumb-wrap">
                            <span class="gt"><span>Home</span> <span class="mx-3">></span> </span> <span class="rt"><?= ucwords(strtolower(strip_tags(get_post_type_object(get_post_type())->label))) ?></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php
}
?>
    <section class="gap-top-lg gap-bottom-lg">
        <div class="container">
            <div class="row">
                <div class="col-md-3 detail-sidebar-block">
                    <div>
                        <?php
                        if (get_post_type() == 'departments' && is_active_sidebar('department-sidebar')) {
                            dynamic_sidebar('department-sidebar');
                        }
                        if (get_post_type() == 'services' && is_active_sidebar('services-sidebar')) {
                            dynamic_sidebar('services-sidebar');
                        }
                        ?>
                    </div>
                </div>
                <div class="col-md-9 detail-cnt-block pl-5--lg">
                    <div>
                        <?php the_content(); ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php
if (have_rows('specialists', get_the_ID())) {
    while (have_rows('specialists', get_the_ID())):the_row();
        ?>
        <section class="gap-bottom-lg mos-wrap">
            <div class="container">
                <div class="row">
                    <div class="text-center col-md-8 mx-auto">
                        <h2 class="bt"><?= get_sub_field('section_title') ?></h2>
                        <div class="section-sub-title"><?= get_sub_field('section_description', false, false) ?></div>
                    </div>
                </div>
                <?php
                $our_specialists = get_sub_field('our_specialists');
                if ($our_specialists) {
                    ?>
                    <div class="row carsl-wrapp gap-top-md cs">
                        <div class="col-md-12 ms-auto">
                            <div class="mos-carousel owl-carousel dark">
                                <?php foreach ($our_specialists as $specialist) { ?>
                                    <div class="carsl-item">
                                        <div class="carsl-img-block">
                                            <?php
                                            $url = get_stylesheet_directory_uri() . "/assets/img/our-specialist-no-img.png";
                                            if (has_post_thumbnail($specialist)) {
                                                $url = get_the_post_thumbnail_url($specialist);
                                            }
                                            ?>
                                            <img src="<?= $url ?>" alt="">
                                        </div>
                                        <div class="carsl-item-cnt-block">
                                            <h4 class="bt"><a href="<?= get_the_permalink($specialist) ?>" class="bt"><?= get_the_title($specialist) ?></a></h4>
                                            <div class="team-designation"><?= get_field('specialty', $specialist) ?></div>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </section>
    <?php
    endwhile;
}
/*
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;

		if ( 'post' === get_post_type() ) :
			?>
			<div class="entry-meta">
				<?php
				jsw_posted_on();
				jsw_posted_by();
				?>
			</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<?php jsw_post_thumbnail(); ?>

	<div class="entry-content">
		<?php
		the_content(
			sprintf(
				wp_kses(
					// translators: %s: Name of current post. Only visible to screen readers
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'jsw' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				wp_kses_post( get_the_title() )
			)
		);

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'jsw' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php jsw_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
<?php /**/
