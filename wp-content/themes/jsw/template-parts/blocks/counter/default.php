<section class="home-about-wrap gap-top-sm">
    <div class="container">
        <div class="row">
            <div class="col-md-10 mx-auto">
                <div class="section-sub-title text-center"><?= get_field('section_description', false, false) ?></div>
                <?php if (have_rows('content')) { ?>
                    <div class="row gap-top-md home-about-counter-wrap gap-bottom-lg">
                        <?php while (have_rows('content')):the_row(); ?>
                            <div class="col-md-3 text-center">
                                <?php
                                $icon = get_sub_field('icon');
                                $number = get_sub_field('number');
                                $title = get_sub_field('title');
                                if ($icon) {
                                    ?>
                                    <div class="counter-img-block">
                                        <img src="<?=$icon?>" alt="">
                                    </div>
                                <?php } ?>
                                <?php if($number || $title){?>
                                    <div class="counter-cnt-wrap">
                                        <div class="counter-title"><span class="count"><?=$number?></span>+</div>
                                        <div class="counter-sub-title gt"><?=$title?></div>
                                    </div>
                                <?php }?>
                            </div>
                        <?php endwhile; ?>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
</section>