<?php
if (have_rows('featured_departments')) {
    while (have_rows('featured_departments')):the_row();
        $featured_department_posts = get_sub_field('featured_department_posts');
        $headerAlign = '';
        if(get_sub_field('title_align') != 'center'){
            $headerAlign = ' style="text-align:'.get_sub_field('title_align').'"';
        }
        ?>
        <section class="fd-wrap cover no-repeat gap-bottom-lg fd-wrap-cp" style="background-image: url('<?= get_stylesheet_directory_uri() ?>/assets/img/fd-bg.jpg');">
            <div class="container">
                <div class="text-<?=get_sub_field('title_align')?>"<?=$headerAlign?>>
                    <h2 class="text-white"><?= get_sub_field('section_title') ?></h2>
                    <div class="section-sub-title text-white"><?= get_sub_field('section_description', false, false) ?></div>
                </div>
                <?php if ($featured_department_posts) { ?>
                    <div class="row carsl-wrapp gap-top-md cs">
                        <div class="col-md-12 ms-auto">
                            <div class="fd-carousel owl-carousel">
                                <?php foreach ($featured_department_posts as $post_id) { ?>
                                    <div class="carsl-item">
                                        <?php if (has_post_thumbnail($post_id)) { ?>
                                            <div class="carsl-img-block">
                                                <img src="<?= get_the_post_thumbnail_url($post_id) ?>" alt="">
                                            </div>
                                        <?php } ?>
                                        <div class="carsl-item-cnt-block">
                                            <h4><?= get_the_title($post_id) ?></h4>
                                            <a href="<?= get_the_permalink($post_id) ?>" class="simple-btn">Learn More
                                                <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/red-right-arrow.png" alt="">
                                            </a>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                        <?php $cta = get_sub_field('cta');
                        if ($cta) { ?>
                            <div class="col-md-12 gap-top-md text-center">
                                <a class="btn-v on-hover-white" href="<?= changeUrlAsHospital($cta['url']) ?>" target="<?= $cta['target'] ?>"><?= $cta['title'] ?>
                                    <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/right-white-arrow.png" alt="" class="arrow-to-hide-on-hover">
                                    <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/red-right-arrow.png" alt="" class="arrow-to-show-on-hover">
                                </a>
                            </div>
                        <?php } ?>
                    </div>
                <?php } ?>
            </div>
        </section>
    <?php
    endwhile;
}