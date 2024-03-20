<section class="jsw-hospitals gap-bottom-lg" id="two_column_cta">
    <div class="container">
        <?php
        $sort_column = get_field('column_sort');
        $cta1 = get_field('cta_1');
        $cta2 = get_field('cta_2');
        $gap_top = '';
        if (get_field('section_title')) {
            $gap_top = ' gap-top-lg';
            ?>
            <h2 class="text-center bt"><?= get_field('section_title') ?></h2>
        <?php } ?>
        <div class="row gx-5<?= $gap_top ?>">
            <?php if ($sort_column) { ?>
                <div class="col-md-6 desktop-only">
                    <img src="<?= get_field('image') ?>" alt="">
                </div>
            <?php } ?>
            <div class="col-md-6">
                <?php
                echo preg_replace('/<h([1-6]).*?>/i', '<h${1} class="rt">', get_field('text'));
                ?>
                <img src="<?= get_field('image') ?>" alt="" class="mobile-only">
                <?php if ($cta1 || $cta2) { ?>
                    <div class="btns-block justify-content-start">
                        <?php if ($cta1) { ?>
                            <a class="btn-v on-hover-white" href="<?= changeUrlAsHospital($cta1['url']) ?>" target="<?= $cta1['target'] ?>"><?= $cta1['title'] ?></a>
                        <?php } ?>
                        <?php if ($cta2) { ?>
                            <a class="btn-v transparent" href="<?= changeUrlAsHospital($cta2['url']) ?>" target="<?= $cta2['target'] ?>"><?= $cta2['title'] ?></a>
                        <?php } ?>
                    </div>
                <?php } ?>
            </div>
            <?php if (!$sort_column) { ?>
                <div class="col-md-6 desktop-only">
                    <img src="<?= get_field('image') ?>" alt="">
                </div>
            <?php } ?>
        </div>
</section>