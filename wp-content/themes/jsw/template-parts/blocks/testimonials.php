<section class="gap-bottom-lg testimonial-wrap">
    <div class="container">
        <div class="row">
            <div class="text-center col-md-8 mx-auto">
                <h2 class="bt"><?= get_field('section_title') ?></h2>
            </div>
        </div>
        <?php
        $testimonials = get_field('testimonials');
        if ($testimonials) { ?>
            <div class="row opt-block-wrap gap-top-md">
                <div class="col-md-12 mx-auto">
                    <div class="grid">
                        <?php foreach ($testimonials as $testimonial) {
                            $testimonial_id = $testimonial->ID;
                            $content = apply_filters('the_content', $testimonial->post_content);
                            $content = str_replace(']]>', ']]&gt;', $content);
                            $show_headline = get_field('show_headline', $testimonial_id);
                            $class = $show_headline ? 'lg' : 'sm';
                            ?>
                            <div class="grid-item opt-blocks <?= $class ?>-block">
                                <div>
                                    <div>
                                        <?php
                                        if ($show_headline && have_rows('headline', $testimonial_id)) {
                                            while (have_rows('headline', $testimonial_id)):the_row();
                                                $icon_image = get_stylesheet_directory_uri() . "/assets/img/opt-lg.png";
                                                if (!get_sub_field('default_icon')) {
                                                    $icon_image = get_sub_field('icon_image', $testimonial_id);
                                                }
                                                ?>
                                                <div class="opt-big-title-block d-flex align-items-center">
                                                    <div class="opt-big-title"><?= get_sub_field('text') ?></div>
                                                    <div class="opt-bt-image-block">
                                                        <img src="<?= $icon_image ?>" alt="">
                                                    </div>
                                                </div>
                                            <?php
                                            endwhile;
                                        }
                                        ?>
                                        <div class="opt-cnt-block position-relative">
                                            <h4 class="bt"><?= get_the_title($testimonial_id) ?></h4>
                                            <div class="star-block">
                                                <?php $ratings = get_field('ratings', $testimonial_id)?:1;
                                                    for($i=1;$i<= $ratings;$i++){
                                                        echo "<i class='fa-solid fa-star'></i>";
                                                    }
                                                ?>
                                            </div>
                                            <?= $content ?>
                                            <div class="opt-intro-block d-flex ">
                                                <?php if (has_post_thumbnail($testimonial_id)) { ?>
                                                    <div class="opt-intro-image-block">
                                                        <img src="<?= get_the_post_thumbnail_url($testimonial_id) ?>" alt="">
                                                    </div>
                                                <?php } ?>
                                                <div class="opt-intro-cnt-block">
                                                    <div class="fw-bold"><?= get_field('name', $testimonial_id) ?></div>
                                                    <div><?= get_field('designation', $testimonial_id) ?></div>
                                                </div>
                                            </div>
                                            <div class="top-comma-block">
                                                <img src="<?= get_stylesheet_directory_uri() ?>/assets/img/top-comma.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php }?>
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
</section>