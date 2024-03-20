<?php
$our_specialists = get_sub_field('our_specialists');
if ($our_specialists) {
    ?>
    <div class="row carsl-wrapp gap-top-md cs">
        <div class="col-md-12 ms-auto">
            <div class="mos-carousel owl-carousel dark">
                <?php foreach ($our_specialists as $specialist) { ?>
                    <div class="carsl-item">
                        <div class="carsl-img-block">
                            <?php
                            $url = get_stylesheet_directory_uri() . "/assets/img/our-specialist-no-img.png";
                            if (has_post_thumbnail($specialist)) {
                                $url = get_the_post_thumbnail_url($specialist);
                            }
                            ?>
                            <img src="<?= $url ?>" alt="">
                        </div>
                        <div class="carsl-item-cnt-block">
                            <h4 class="bt"><a href="<?= get_the_permalink($specialist) ?>" class="bt"><?= get_the_title($specialist) ?></a></h4>
                            <div class="team-designation"><?= get_field('specialty', $specialist) ?></div>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
    <?php
}