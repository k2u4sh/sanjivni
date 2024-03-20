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
    
    
    <!--<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>-->
    
 
    
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div class="common-page-wrap">
    <header>
        <div class="hedaer-info-block text-white d-flex align-items-center text-md">
            <div class="header-contact-block d-flex align-items-center justify-content-between">
                <?php
                $theme_locations = get_nav_menu_locations();
                $menu_obj = get_term($theme_locations['top-menu'], 'nav_menu');
                $menu_items = wp_get_nav_menu_items($menu_obj);
                $new_arr = [];
                $old_key = 0;
                array_walk($menu_items, function ($item, $key) use(&$new_arr, &$old_key) {
                    $item = (array)$item;
                    if ($item['menu_item_parent'] <= 0){
                        $old_key = $key;
                        $new_arr[$old_key] = $item;
                    }
                    if ($item['menu_item_parent'] > 0){
                        $new_arr[$old_key][$item['menu_item_parent']][] = $item;
                    }

                });
                if ($new_arr) {
                    foreach ($new_arr as $menu_item) {
                        $image_url = get_field('icon', $menu_item['ID']);
                        $image = $image_url ? "<img src='$image_url' alt=''>" : '';
                        $title = '<span class="ms-3 fw-semibold">' . $menu_item['title'] . '</span>';
                        $down_arrow = isset($menu_item[$menu_item['ID']])?'<img src="'.get_stylesheet_directory_uri().'/assets/img/down-arrow.svg" alt="" class="ht-down-arrow">':'';
                        echo '<a href="' . $menu_item['url'] . '" class="d-flex align-items-center text-white sub-menu-link">' . $image .$title . $down_arrow . '</a>';
                        if(isset($menu_item[$menu_item['ID']])){
                            echo '<ul class="dropdown-menu sub-menu-block" aria-labelledby="navbarDropdownMenuLink">';
                            foreach ($menu_item[$menu_item['ID']] as $subItem){
                                echo "<li><a href='{$subItem['url']}' class='dropdown-item'>{$subItem['title']}</a></li>";
                            }
                            echo '</ul>';
                        }
                    }
                } ?>
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
                if ($contact) {
                    ?>
                    <a href="tel:<?= $contact ?>" target="_blank" class="d-flex align-items-center text-white">
                        <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/call.png" alt="">
                        <span class="ms-3 fw-semibold"><?= $contact ?></span>
                    </a>
                <?php } ?>
            </div>
        </div>
        <div class="logo-and-menu">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-6 text--center--sm">
                        <?php echo get_custom_logo(); ?>
                    </div>
                    <div class="col-md-6 mt--sm--10 pb--sm--10">
                        <div class="hs-commoan-page position-relative">
                            <input type="text" placeholder="Search for JSW Hospitals..">
                            <div class="hs-icon-common-block">
                                <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/search-icon.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>
    <section class="main-wrap home-page-wrap">