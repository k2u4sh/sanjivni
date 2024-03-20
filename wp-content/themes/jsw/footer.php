<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package jsw
 */

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
if ($hospital) {
    $hospital = reset($hospital);
}

$current_hospital = $hospital ? $hospital->post_name : '';
$GLOBALS['current_hospital'] = $current_hospital;

?>
</section>
<footer class="cover no-repeat" style="background-image: url('<?= get_stylesheet_directory_uri() ?>/assets/img/footer-bg.png');">
    <div class="container">
        <h2 class="text-center text-white">Contact Us</h2>
        <div class="row gx-0">
            <div class="col-md-4 footer-contact">
                <div>
                    <?php
		              	if ($current_hospital == "dolvi"){
											$email = get_field('email', $hospital ? $hospital->ID : 'options');
											$contact = '8591415281';
											$address = 'SW Sanjeevani Hospital ,Dharamtar,Taluka Pen ,Dolvi, Maharashtra 402107';
						} elseif ($current_hospital == "vijaynagar") {
										 $email = 'helpdesk.jsmshvjnr@jsw.in';
											$contact = '+919449598201 / +919448286201';
											$address = get_field('address', $hospital ? $hospital->ID : 'options');

						} else {
										 $email = get_field('email', $hospital ? $hospital->ID : 'options');
											$contact = get_field('contact_number', $hospital ? $hospital->ID : 'options');
											$address = get_field('address', $hospital ? $hospital->ID : 'options');
						}
                    ?>
                    <?php if ($email) { ?>
                        <div>
                            <div class="footer-c-image-block">
                                <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/footer-mail.png" alt="">
                            </div>
                            <a href="mailto:<?= $email ?>" class="footer-c-title"><?= $email ?></a>
                        </div>
                    <?php } ?>
                    <?php if ($contact) { ?>
                        <div>
                            <div class="footer-c-image-block">
                                <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/footer-call.png" alt="">
                            </div>
                            <a href="tel:<?= $current_hospital == 'dolvi' ? '8591415281' : $contact ?>" class="footer-c-title"><?= $current_hospital == "dolvi" ? "8591415281" : $contact ?></a>
                        </div>
                    <?php } ?>
                    <?php if ($address) { ?>
                        <div>
                            <div class="footer-c-image-block">
                                <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/footer-map.png" alt="">
                            </div>
                            <div class="footer-c-title"><?= $current_hospital == "dolvi" ? "JSW Sanjeevani Hospital ,Dharamtar,Taluka Pen ,Dolvi, Maharashtra 402107" : $address ?></div>
                        </div>
                    <?php } ?>
                </div>
            </div>
            <?php
            $map = get_field('map', $hospital ? $hospital->ID : 'options');
            if ($map) {
                ?>
                <div class="col-md-8 footer-map">
                    <div class="position-relative">
                        <img src="<?= $map ?>" alt="">
                        <a href="<?= get_field('map_link', $hospital ? $hospital->ID : 'options') ?>" target="_jsw" class="btn-v on-hover-white">Get Directions</a>
                    </div>
                </div>
            <?php } ?>
            <?php
            $menuSlug = 'footer-menu';
            if ($hospital) {
                $menuSlug = $menuSlug . '-' . $hospital->post_name;
            }
            echo wp_nav_menu([
                'menu_class' => '',
                'menu_id' => '',
                'container' => 'div',
                'container_class' => 'footer-menu '.$menuSlug,
                'container_id' => 'navbarNavDropdown',
                'theme_location' => $menuSlug,
                'fallback_cb' => false,
                'walker' => new ClassMenu_Walker_Nav_Menu()
            ]);
            ?>
            <?php
            $footer_logo = get_field('footer_logo', $hospital ? $hospital->ID : 'options');
            $copyright_text = get_field('copyright_text', $hospital ? $hospital->ID : 'options', false);
            if ($footer_logo) {
                ?>
                <div class="text-center footer-logo-block">
                    <a href="<?= site_url('/') ?>"><img src="<?= $footer_logo ?>" alt=""></a>
                </div>
            <?php } ?>
            <?php if ($copyright_text) { ?>
                <div class="copyright-text-block text-white text-center"><?= $copyright_text ?></div>
            <?php } ?>
        </div>
    </div>
</footer>
<div class="top-to-bottom">
    <i class="fa-solid fa-chevron-up"></i>
</div>
<?php wp_footer(); ?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>


<script>
jQuery(function($){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayHoverPause:true,
        items:4,
        responsive:{
          0:{
            items:1
          },
            480:{
        items:2
          },
            768 :{
        items:4  
          }
        }
    })
});
</script>

</body>
</html>