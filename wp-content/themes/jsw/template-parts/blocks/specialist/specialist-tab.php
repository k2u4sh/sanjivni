<?php if (have_rows('our_specialists_as_category')) { ?>
    <div class="tab-scrollable-view-2 position-relative">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <?php
            while (have_rows('our_specialists_as_category')):the_row();
                $index = get_row_index();
                $active_class = '';
                $show_class = '';
                if ($index == 1) {
                    $active_class = ' active';
                    $show_class = ' show';
                }
                ?>
                <li class="nav-item" role="presentation">
                    <button class="nav-link<?=$active_class?>" id="mos-<?= $index ?>-tab" data-bs-toggle="pill" data-bs-target="#mos-<?= $index ?>"
                            type="button" role="tab" aria-controls="mos-<?= $index ?>" aria-selected="true">
                        <?= get_sub_field('specialist_tab')->name ?>
                    </button>
                </li>
            <?php endwhile; ?>
        </ul>
        <div class="line"></div>
    </div>
    <div class="tab-content" id="pills-tabContent">
        <?php
        while (have_rows('our_specialists_as_category')):the_row();
            $index = get_row_index();
            $active_class = '';
            $show_class = '';
            if ($index == 1) {
                $active_class = ' active';
                $show_class = ' show';
            }
            ?>
            <div class="tab-pane fade<?= $show_class . $active_class ?>" id="mos-<?= $index ?>" role="tabpanel" aria-labelledby="mos-<?= $index ?>-tab">
                <div class="row carsl-wrapp gap-top-md cs">
                    <div class="col-md-12 ms-auto">
                        <?php
                        $posts = get_sub_field('posts');
                        if ($posts) { ?>
                            <div class="mos-carousel owl-carousel dark">
                                <?php foreach ($posts as $post){   ?>
                                    <div class="carsl-item">
                                        <?php
                                        $url = get_stylesheet_directory_uri() . "/assets/img/our-specialist-no-img.png";
                                        if (has_post_thumbnail($post)) {
                                            $url = get_the_post_thumbnail_url($post);
                                        }
                                        ?>
                                        <div class="carsl-img-block">
                                            <img src="<?= $url ?>" alt="">
                                        </div>
                                        <div class="carsl-item-cnt-block">
                                            <h4 class="bt"><a href="<?=get_permalink($post)?>" class="bt"><?=get_the_title($post)?></a></h4>
                                            <div class="team-designation"><?= get_field('specialty', $post) ?></div>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        <?php endwhile; ?>

    </div>
    <?php
}