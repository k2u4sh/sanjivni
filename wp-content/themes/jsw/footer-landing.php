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

?>
</section>


<footer class="cover no-repeat" style="background-image: url('<?= get_stylesheet_directory_uri() ?>/assets/img/footer-bg.png');">
    <div class="container">
        <?php
        $email = get_field('email', 'options');
        $contact = get_field('contact_number', 'options');
        $address = get_field('address', 'options');
        ?>
        <h2 class="text-center text-white">Hospital Locations</h2>
        <?php if (have_rows('hospital_locations', 'options')) { ?>
            <div class="tab-scrollable-view-1 position-relative light">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <?php while (have_rows('hospital_locations', 'options')):the_row();
                        $index = get_row_index();
                        $active_class = ($index == 1) ? ' active' : '';
                        $select_attr = ($index == 1) ? 'true' : 'false';
                        ?>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link<?= $active_class ?>" id="hl-<?= $index ?>-tab" data-bs-toggle="pill" data-bs-target="#hl-<?= $index ?>" type="button"
                                    role="tab" aria-controls="hl-<?= $index ?>" aria-selected="<?= $select_attr ?>">
                                <?= get_sub_field('title') ?>
                            </button>
                        </li>
                    <?php endwhile; ?>
                </ul>
                <div class="line"></div>
            </div>
            <div class="tab-content gap-top-md" id="pills-tabContent">
                <?php while (have_rows('hospital_locations', 'options')):the_row();
                    $index = get_row_index();
                    $active_class = ($index == 1) ? ' show active' : '';
                    $email = get_sub_field('email')?get_sub_field('email'):$email;
                    $contact = get_sub_field('contact_number')?get_sub_field('contact_number'):$contact;
                    $address = get_sub_field('address')?get_sub_field('address'):$address;
                    ?>
                    <div class="tab-pane fade<?=$active_class?>" id="hl-<?= $index ?>" role="tabpanel" aria-labelledby="hl-<?= $index ?>-tab">
                        <div class="row gx-0">
                            <div class="col-md-4 footer-contact">
                                <div>
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
                                            <a href="tel:<?=$contact?>" class="footer-c-title"><?=$contact?></a>
                                        </div>
                                    <?php } ?>
                                    <?php if ($address) { ?>
                                        <div>
                                            <div class="footer-c-image-block">
                                                <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/footer-map.png" alt="">
                                            </div>
                                            <div class="footer-c-title"><?=$address?></div>
                                        </div>
                                    <?php } ?>
                                </div>
                            </div>
                            <?php
                            $map = get_sub_field('map')?get_sub_field('map'):get_field('map', 'optiond');
                            if($map){
                                ?>
                                <div class="col-md-8 footer-map">
                                    <div class="position-relative">
                                        <img src="<?=$map?>" alt="">
                                        <a href="<?=get_sub_field('map_link')?get_sub_field('map_link'):get_field('map_link', 'options')?>" target="_jsw" class="btn-v on-hover-white">Get Directions</a>
                                    </div>
                                </div>
                            <?php }?>
                            <?php
                            echo wp_nav_menu([
                                'menu_class' => '',
                                'menu_id' => 'footer-menu',
                                'container' => 'div',
                                'container_class' => 'footer-menu',
                                'container_id' => 'navbarNavDropdown',
                                'theme_location' => 'footer-menu-'.trim(str_replace('hospital', '', strtolower(get_sub_field('title')))),
                                'fallback_cb' => false
                            ]);
                            ?>
                            <?php
                            $footer_logo = get_field('footer_logo', 'options');
                            $copyright_text = get_field('copyright_text', 'options', false);
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
                <?php endwhile; ?>
            </div>
        <?php } ?>
    </div>
</footer>
<div class="top-to-bottom"><i class="fa-solid fa-chevron-up"></i></div>
</div>




 
 


</body>
</html>


<script src="https://ikokasdev.com/jsw-multi/wp-content/themes/jsw/assets/js/plugin.js?ver=1.0.0" id="plug-script-js"></script>

<?php wp_footer(); ?>