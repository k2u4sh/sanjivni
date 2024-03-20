<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package jsw
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/ea16b2b73c.js" crossorigin="anonymous"></script>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<?php
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
<header>
    <div class="hedaer-info-block text-white d-flex align-items-center text-md">
        <div class="header-loaction d-flex align-items-center">
            <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/loaction.svg" alt="">
            <?php               	if ($current_hospital == "dolvi"){
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
            <div class="ms-3"><?= $current_hospital == "dolvi" ? "JSW Sanjeevani Hospital ,Dharamtar,Taluka Pen ,Dolvi, Maharashtra 402107" : $address ?></div>
        </div>
        <div class="header-contact-block d-flex align-items-center justify-content-between">
            <?php
            $theme_locations = get_nav_menu_locations();
            $menuSlug = 'top-menu';
            if ($hospital) {
                $menuSlug = $menuSlug . '-' . $hospital->post_name;
            }
            $menu_obj = get_term($theme_locations[$menuSlug], 'nav_menu');
            $menu_items = wp_get_nav_menu_items($menu_obj);
            if ($menu_items) {
                foreach ($menu_items as $menu_item) {
                    $image_url = get_field('icon', $menu_item->ID);
                    $image = $image_url ? "<img src='$image_url' alt=''>" : '';
                    $title = '<span class="ms-3 fw-semibold">' . strtoupper($menu_item->title) . '</span>';
                    echo '<a href="' . $menu_item->url . '" target="_blank" class="d-flex align-items-center text-white">' . $image . $title . '</a>';
                }
            } ?>
            <?php
            if ($contact) {
                ?>
                <a href="tel:<?= $contact ?>" class="d-flex align-items-center text-white"><img src="<?= get_stylesheet_directory_uri() ?>/assets/img/call.png" alt=""> <span
                            class="ms-3 fw-semibold"><?= $current_hospital == "dolvi" ? "8591415281" : $contact ?></span></a>
            <?php } ?>
        </div>
    </div>
    <div class="logo-and-menu">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg">
                <?php if ($hospital) { ?>
                    <a class="navbar-brand jsw-logo" href="<?= site_url($hospital->post_name) ?>">
                        <img src="<?= get_field('logo', $hospital->ID) ?>" alt="">
                    </a>
                <?php } else {
                    echo get_custom_logo();
                } ?>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/menu-icon.svg" alt="">
                        </span>
                </button>
                <div class="collapse navbar-collapse main-menu-block" id="navbarNavDropdown">
                    <?php
                    $menuSlug = 'primary';
                    if ($hospital) {
                        $menuSlug = $menuSlug . '-' . $hospital->post_name;
                    }
                    echo wp_nav_menu([
                        'menu_class' => 'navbar-nav ms-auto',
                        'menu_id' => '',
                        'container' => '',
                        'container_class' => '',
                        'container_id' => '',
                        'theme_location' => $menuSlug,
                        'fallback_cb' => false,
                        'walker' => new ClassMenu_Walker_Nav_Menu()
                    ]);
                    ?>
                    <div class="hedaer-serch-wrap position-relative desktop-lg-only">
                        <div class="hs-icon-block">
                            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div class="hs-input-block align-items-center">
                            <input type="text" class="search-jsw-keyword" data-hospital="<?=$current_hospital?>" placeholder="Search For Doctors, Treatment or Faculty">
                            <?php ?>
                            <a href="#" class="btn-v">Search
                                <img src="<?=get_stylesheet_directory_uri()?>/assets/img/right-white-arrow.png" alt="">
                            </a><?php  ?>
                        </div>
                    </div>
                    <a href="javascript:void(0);" class="menu-close sm"><img src="<?= get_stylesheet_directory_uri() ?>/assets/img/menu-close.png" alt=""></a>
                </div>
            </nav>

        </div>
    </div>
</header>
<section class="main-wrap home-page-wrap">