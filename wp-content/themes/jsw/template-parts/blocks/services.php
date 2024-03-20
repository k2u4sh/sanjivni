<section class="services-tabs-wrap gap-bottom-lg gray-bg pt-md no-repeat cover">
    <div class="container position-relative">
        <!-- <img src="img/service-tab.png" alt="" class="servs-lady-image-block"> -->
        <div class="st-block">
            <?php if (have_rows('contents')) { ?>
                <div class="tab-scrollable-view-1 position-relative">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <?php while (have_rows('contents')):the_row();
                            $index = get_row_index();
                            $active = $index == 1 ? ' active' : '';
                            ?>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link<?= $active ?>" id="s-<?= $index ?>-tab" data-bs-toggle="pill" data-bs-target="#s-<?= $index ?>" type="button" role="tab"
                                        aria-controls="s-<?= $index ?>" aria-selected="true">
                                    <?= get_sub_field('title') ?>
                                </button>
                            </li>
                        <?php endwhile; ?>
                    </ul>
                    <div class="line"></div>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <?php while (have_rows('contents')):the_row();
                        $index = get_row_index();
                        $active = $index == 1 ? ' active' : '';
                        $title = strtolower(get_sub_field('title'));
                        ?>
                        <div class="tab-pane fade show <?= implode('-', explode(' ', $title)) ?> <?= $active ?>" id="s-<?= $index ?>" role="tabpanel" aria-labelledby="s-<?= $index ?>-tab">
                            <div class="sr-info-wrap ms-auto">
                                <div class="service-info-block">
                                    <div>
                                        <?php
                                        $services = get_sub_field('service');
                                        if ($services) {
                                            $services = array_chunk($services, 2);
                                            foreach ($services as $service) {
                                                $class = count($service) < 2 ? ' class="w-100"' : '';
                                                ?>
                                                <div class="d-flex">
                                                    <?php foreach ($service as $item) { ?>
                                                        <div<?= $class ?>>
                                                            <?php
                                                            $text = $item['text'];
                                                            if ($title == 'bed count') {
                                                                $text = preg_replace('/<span>/i', '<span class="bt mt-3">', $text);
                                                            }
                                                            echo $text
                                                            ?>
                                                        </div>
                                                    <?php } ?>
                                                </div>
                                            <?php } ?>
                                        <?php } ?>
                                    </div>
                                </div>
                                <div class="btns-block">
                                    <?php $cta = get_sub_field('cta_1');
                                    if ($cta) { ?>
                                        <a class="btn-v blue on-hover-white" href="<?= changeUrlAsHospital($cta['url']) ?>" target="<?= $cta['target'] ?>"><?= $cta['title'] ?></a>
                                    <?php } ?>
                                    <?php $cta = get_sub_field('cta_2');
                                    if ($cta) { ?>
                                        <a class="btn-v on-hover-white" href="<?= changeUrlAsHospital($cta['url']) ?>" target="<?= $cta['target'] ?>"><?= $cta['title'] ?></a>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
            <?php } ?>
            <?php if (get_field('image')) { ?>
                <img src="<?= get_field('image') ?>" alt="" class="ladies-d-img-block">
            <?php } ?>
        </div>
    </div>
</section>