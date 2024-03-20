<section class="gap-bottom-lg gap-top-lg">
    <div class="container">
        <?php
        $section_title = get_field('section_title');
        $section_desc = get_field('section_description', false, false);
        if ($section_title || $section_desc) {
            ?>
            <div class="row">
                <div class="text-center col-md-10 mx-auto">
                    <h2 class="bt"><?= $section_title ?></h2>
                    <div class="section-sub-title"><?= $section_desc ?></div>
                </div>
            </div>
        <?php } ?>
        <div class="row card-block-wrap gap-top-lg gx-5 justify-content-center">
            <div class="col-md-6">
                <div class="row gx-5">
                    <div class="col-md-12 gap-bottom-sm">
                        <img src="<?= get_field('image_1') ?>" alt="">
                    </div>
                    <div class="col-md-6">
                        <img src="<?= get_field('image_2') ?>" alt="">
                    </div>
                    <div class="col-md-6">
                        <img src="<?= get_field('image_3') ?>" alt="">
                    </div>
                </div>
            </div>
            <?php
            $beds = get_field('beds');
            if ($beds) {
                $beds = array_chunk($beds, 2);
                ?>
                <div class="col-md-6 pl-3--lg">
                    <div class="service-info-block with-shadow sib-sub">
                        <div>
                            <?php
                            $total_bed = 0;
                            foreach ($beds as $bed) { ?>
                                <div class="d-flex">
                                    <?php foreach ($bed as $item) {
                                        $total_bed += $item['number_of_bed'];
                                        ?>
                                        <div><?= $item['ward'] ?> <span class="bt mt-3"><?= $item['number_of_bed'] ?></span></div>
                                    <?php } ?>
                                </div>
                            <?php } ?>
                            <div class="d-flex">
                                <div class="w-100">TOTAL BEDS <span class="bt mt-3"><?= $total_bed ?></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</section>