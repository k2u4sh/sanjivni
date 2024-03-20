<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package jsw
 */

if(!is_front_page() && !get_field('hide')){
    ?>
    <section class="sub-page-banner cover no-repeat" style="background-image: url('<?=get_field('sub_page_banner')?>');">
        <div class="container d-flex align-items-center">
            <div>
                <div class="row">
                    <div class="col-lg-7">
                        <h1 class="bt"><?=preg_replace('/<span>/i', '<span class="ms-4">', get_the_title())?></h1>
                        <div class="breadcrumb-wrap">
                            <span class="gt"><span>Home</span> <span class="mx-3">></span> </span> <span class="rt"><?=ucwords(strtolower(strip_tags(get_the_title())))?></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php
}

the_content();

/*
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<?php jsw_post_thumbnail(); ?>

	<div class="entry-content">
		<?php
		the_content();

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'jsw' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->

	<?php if ( get_edit_post_link() ) : ?>
		<footer class="entry-footer">
			<?php
			edit_post_link(
				sprintf(
					wp_kses(
						// translators: %s: Name of current post. Only visible to screen readers
						__( 'Edit <span class="screen-reader-text">%s</span>', 'jsw' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					wp_kses_post( get_the_title() )
				),
				'<span class="edit-link">',
				'</span>'
			);
			?>
		</footer><!-- .entry-footer -->
	<?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->
<?php /**/