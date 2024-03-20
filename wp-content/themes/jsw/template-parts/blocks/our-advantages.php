<?php
if (have_rows('advantages')) {
    while (have_rows('advantages')):the_row();
        ?>
        <section class="oa-wrap gap-bottom-lg">
            <div class="container">
                <div class="text-center">
                    <h2 class="bt"><?= get_sub_field('section_title') ?></h2>
                    <div class="section-sub-title"><?= get_sub_field('section_description', false, false) ?></div>
                </div>
                <?php if (have_rows('contents')) { ?>
                    <div class="row gx-5 gap-top-md">
                        <?php while (have_rows('contents')):the_row(); ?>
                            <div class="col-md-4 text-center oa-block">
                                <div>
                                    <?php
                                    $icon = get_sub_field('icon');
                                    $title = get_sub_field('title');
                                    if ($icon) {
                                        ?>
                                        <div class="oa-img-block">
                                            <img src="<?= $icon ?>" alt="<?= $title ?>">
                                        </div>
                                    <?php } ?>
                                    <?php if ($title) { ?><h3 class="bt"><?= $title ?></h3><?php } ?>
                                    <?php echo get_sub_field('description')?>
                                </div>
                            </div>
                        <?php endwhile; ?>

                        <?php $cta = get_sub_field('cta');
                        if ($cta) { ?>
                        <div class="col-md-12 gap-top-lg text-center">
                            <a class="btn-v on-hover-white" href="<?= changeUrlAsHospital($cta['url']) ?>" target="<?= $cta['target'] ?>"><?= $cta['title'] ?>
                                <img src="<?=get_stylesheet_directory_uri()?>/assets/img/right-white-arrow.png" alt="" class="arrow-to-hide-on-hover">
                                <img src="<?=get_stylesheet_directory_uri()?>/assets/img/red-right-arrow.png" alt="" class="arrow-to-show-on-hover">
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