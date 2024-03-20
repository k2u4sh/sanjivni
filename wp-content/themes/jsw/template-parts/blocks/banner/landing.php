<section class="home-banner cover no-repeat position-relative"
         style="background-image: url('<?=get_field('background_image')?>');">
    <div class="container d-flex align-items-center w-100">
        <div class="w-100">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h1 class="text-white"><?=nl2br(get_field('title',  false, false))?></h1>
                    <div class="banner-sub-title text-white"><?=get_field('description', false, false)?></div>
                    <?php $cta = get_field('cta');
                    if ($cta) { ?>
                    <a class="btn-v on-hover-white" href="<?= changeUrlAsHospital($cta['url']) ?>" target="<?= $cta['target'] ?>"><?= $cta['title'] ?>
                        <img src="<?=get_stylesheet_directory_uri()?>/assets/img/right-white-arrow.png" alt="" class="arrow-to-hide-on-hover">
                        <img src="<?=get_stylesheet_directory_uri()?>/assets/img/red-right-arrow.png" alt="" class="arrow-to-show-on-hover">
                    </a>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</section>