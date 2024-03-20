<div class="col-lg-3 col-md-4 col-sm-6 card-block">
    <div>
        <?php
        $url = get_stylesheet_directory_uri()."/assets/img/our-specialist-no-img.png";
        if (has_post_thumbnail()) {
            $url = get_the_post_thumbnail_url(get_the_ID(), 'archive-image-specialist');
        }
        ?>
        <div class="card-img-block">
            <img src="<?= $url ?>" alt="">
        </div>
        <div class="card-cnt-block text-center">
            <h4 class="bt mb--1"><a href="<?=get_permalink()?>" class="bt"><?=get_the_title()?></a></h4>
            <p class="team-designation"><?=get_post_meta(get_the_ID(), 'specialty', true)?></p>
        </div>
    </div>
</div>