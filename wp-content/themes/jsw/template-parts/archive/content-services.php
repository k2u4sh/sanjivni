<div class="col-lg-4 col-md-4 col-sm-6 card-block">
    <div>
        <?php
        $url = get_stylesheet_directory_uri()."/assets/img/our-specialist-no-img.png";
        if (has_post_thumbnail()) {
            $url = get_the_post_thumbnail_url(get_the_ID(), 'archive-image-service');
        }
        ?>
        <div class="card-img-block">
            <img src="<?= $url ?>" alt="">
        </div>
        <div class="card-cnt-block text-center">
            <h3 class="bt"><a href="<?=get_permalink()?>" class="bt"><?=get_the_title()?></a></h3>
            <div class="gt text-20"><?=wp_trim_words(get_the_excerpt(), 20)?></div>
            <div class="text-center mt-5">
                <a href="<?=get_permalink()?>" class="btn-v transparent sm">Learn More</a>
            </div>
        </div>
    </div>
</div>