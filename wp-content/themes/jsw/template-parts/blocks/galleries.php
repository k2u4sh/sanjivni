<section class="gallery-wrap gray-bg py-md">
    <div class="container">
        <h2 class="bt text-center mb-0"><?= get_field('section_title') ?></h2>
        <?php if (have_rows('contents')) { ?>
            <div class="tab-scrollable-view-2 position-relative">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="g-all-tab" data-bs-toggle="pill" data-bs-target="#g-all" type="button" role="tab"
                                aria-controls="g-all"
                                aria-selected="true">All
                        </button>
                    </li>
                    <?php while (have_rows('contents')):the_row();
                        $index = get_row_index();
                        $active = '';//$index == 1 ? ' active' : '';
                        $title = get_sub_field('title');
                        ?>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link<?= $active ?>" id="g-<?= $index ?>-tab" data-bs-toggle="pill" data-bs-target="#g-<?= $index ?>" type="button" role="tab"
                                    aria-controls="g-<?= $index ?>"
                                    aria-selected="true"><?= $title ?></button>
                        </li>
                    <?php endwhile; ?>
                </ul>
                <div class="line"></div>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <?php
                $all = [];
                ob_start();
                if (have_rows('contents')) {
                    while (have_rows('contents')):the_row();
                        $index = get_row_index();
                        $active = '';//$index == 1 ? ' show active' : '';
                        ?>
                        <div class="tab-pane fade<?= $active ?>" id="g-<?= $index ?>" role="tabpanel" aria-labelledby="g-<?= $index ?>-tab">
                            <div class="row gap-top-md">
                                <div class="col-md-12">
                                    <?php
                                    $galleries = get_sub_field('gallery');
                                    if ($galleries) {
                                        array_push($all, $galleries);
                                        $galleries = array_chunk($galleries, 28);
                                        foreach ($galleries as $galls) {
                                            $gall = array_chunk($galls, 14);
                                            foreach ($gall as $key => $gal) {
                                                $gal = array_chunk($gal, 5);
                                                if ($key == 1 && count($gal) > 2) {
                                                    $gal = [$gal[0], $gal[2], $gal[1]];
                                                }
                                                foreach ($gal as $k => $gallery) {
                                                    get_template_part("/template-parts/blocks/gallery-layout/layout-{$key}/{$k}", null, ['data' => $gallery]);
                                                }
                                            }
                                        }
                                    }
                                    /*if (have_rows('gallery')) {
                                        while (have_rows('gallery')):the_row();
                                            include get_stylesheet_directory() . '/template-parts/blocks/gallery-layout/' . get_sub_field('layout') . '.php';
                                        endwhile;
                                    }*/
                                    ?>
                                </div>
                            </div>
                        </div>
                    <?php
                    endwhile;
                }
                $galleryHtml = ob_get_clean();
                ?>
                <div class="tab-pane fade show active" id="g-all" role="tabpanel" aria-labelledby="g-all-tab">
                    <div class="row gap-top-md">
                        <div class="col-md-12">
                            <?php
                            if ($all) {
                                $all = array_merge(...$all);
                                if ($all) {
                                    $galleries = array_chunk($all, 28);
                                    foreach ($galleries as $galls) {
                                        $gall = array_chunk($galls, 14);
                                        foreach ($gall as $key => $gal) {
                                            $gal = array_chunk($gal, 5);
                                            if ($key == 1 && count($gal) > 2) {
                                                if (count($gal[2]) == 4) {
                                                    $gal = [$gal[0], $gal[2], $gal[1]];
                                                } else {
                                                    $last_arr = $gal[1];
                                                    $last_end = array_shift($last_arr);
                                                    $second = $gal[2];
                                                    array_push($second, $last_end);
                                                    $gal = [$gal[0], $second, $last_arr];
                                                }
                                            }
                                            foreach ($gal as $k => $gallery) {
                                                get_template_part("/template-parts/blocks/gallery-layout/layout-{$key}/{$k}", null, ['data' => $gallery]);
                                            }
                                        }
                                    }
                                }
                            }
                            ?>
                        </div>
                    </div>
                </div>
                <?php echo $galleryHtml; ?>
            </div>
        <?php } ?>
        <?php $cta = get_field('cta');
        if ($cta) { ?>
            <div class="text-center gap-top-md">
                <a class="btn-v transparent sm" href="<?= changeUrlAsHospital($cta['url']) ?>" target="<?= $cta['target'] ?>"><?= $cta['title'] ?></a>
            </div>
        <?php } ?>
    </div>
</section>