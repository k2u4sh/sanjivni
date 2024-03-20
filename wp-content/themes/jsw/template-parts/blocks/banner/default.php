<?php
global $current_hospital;
?>
<div class="hedaer-serch-wrap mobile-lg-only">
    <div class="hs-icon-block">
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="hs-input-block align-items-center">
        <input type="text" placeholder="Search For Doctors, Treatment or Faculty">
        <a href="#" class="btn-v">Search
            <img src="<?=get_stylesheet_directory_uri()?>/assets/img/right-white-arrow.png" alt="">
        </a>
    </div>
</div>
<section class="home-banner cover no-repeat position-relative" style="background-image: url('<?=get_field('background_image')?>');">
    <div class="dots-img-block top-left"><img src="<?=get_stylesheet_directory_uri()?>/assets/img/dots.png" alt=""></div>
    <div class="container d-flex align-items-center">
        <div>
            <div class="row">
                <div class="col-lg-7">
                    <h1 class="bt"><span class="d-block"><?=nl2br(get_field('title',  false, false))?></h1>
                    <div class="banner-sub-title"><?=get_field('description', false, false)?></div>
                    <?php $cta = get_field('cta');
                    if ($cta) { ?>
                        <a class="btn-v" href="<?= changeUrlAsHospital($cta['url']) ?>" target="<?= $cta['target'] ?>"><?= $cta['title'] ?>
                            <img src="<?=get_stylesheet_directory_uri()?>/assets/img/right-white-arrow.png" alt="" class="arrow-to-hide-on-hover">
                            <img src="<?=get_stylesheet_directory_uri()?>/assets/img/red-right-arrow.png" alt="" class="arrow-to-show-on-hover">
                        </a>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
    <div class="search-by-wrap">
        <a href="<?php echo site_url("/{$current_hospital}/our-specialists/")?>" class="blue-bg">
            <div class="s-by-img-block">
                <img src="<?=get_stylesheet_directory_uri()?>/assets/img/sb-doctor.png" alt="">
            </div>
            <div class="s-by-title">
                Search By Doctor
            </div>
        </a>
        <a href="<?php echo site_url("/{$current_hospital}/department/")?>" class="dark-blue-bg">
            <div class="s-by-img-block">
                <img src="<?=get_stylesheet_directory_uri()?>/assets/img/sb-department.png" alt="">
            </div>
            <div class="s-by-title">
                Search By Department
            </div>
        </a>
        <a href="#" class="blue-bg">
            <div class="s-by-img-block">
                <img src="<?=get_stylesheet_directory_uri()?>/assets/img/search-by-DiseasesSym.png" alt="">
            </div>
            <div class="s-by-title">
                Search By Diseases/Sym.
            </div>
        </a>
    </div>
    <div class="dots-img-block"><img src="<?=get_stylesheet_directory_uri()?>/assets/img/dots.png" alt=""></div>
</section>