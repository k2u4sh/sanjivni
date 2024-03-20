<?php
$type = get_field('header_footer_template', 'options');
if (have_rows('about_us')) {
    while (have_rows('about_us')):the_row();
        $top = get_sub_field('space_top')?:'sm';
        $bottom = get_sub_field('space_bottom')?:'sm';
        ?>
        <section class="home-about-wrap gap-top-<?=$top?> gap-bottom-<?=$bottom?>">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row gx-5">
                            <div class="col-md-<?=($type=='landing')?5:6?> abt-intro-cnt-wrap">
                                <div>
                                    <?php $section_title = get_sub_field('section_title'); ?>
                                    <div class="page-title"><?= $section_title ?></div>
                                    <h2><?= get_sub_field('title') ?></h2>
                                    <?php $image = get_sub_field('image');
                                    if ($image) {
                                        ?>
                                        <img src="<?= $image ?>" alt="<?= $section_title ?>" class="mobile-only my-5">
                                    <?php } ?>
                                    <?= get_sub_field('description') ?>
                                    <?php $cta = get_sub_field('cta');
                                    if ($cta) { ?>
                                        <a class="btn-v transparent sm" href="<?= changeUrlAsHospital($cta['url']) ?>" target="<?= $cta['target'] ?>"><?= $cta['title'] ?></a>
                                    <?php } ?>
                                </div>
                            </div>
                            <?php if ($image) { ?>
                                <div class="col-md-5 abt-intro-img-block ms-auto desktop-only">
                                    <img src="<?= $image ?>" alt="<?= $section_title ?>">
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <?php
    endwhile;
}