<?php
$margin_bottom = get_field('margin_bottom');
?>
<?php if (have_rows('content')) { ?>
    <section class="home-about-wrap gap-top-sm gap-bottom-<?= $margin_bottom ?>">
        <div class="container">
            <div class="row">
                <div class="col-md-10 mx-auto">
                    <div class="row home-about-counter-wrap">
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
                                        <div class="counter-title bt"><?=$number?></div>
                                        <div class="counter-sub-title gt"><?=$title?></div>
                                    </div>
                                <?php }?>
                            </div>
                        <?php endwhile; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php
}