<section class="gap-top-lg gap-bottom-lg">
    <?php if (get_field('section_title')) { ?>
        <h2 class="text-center bt"><?= get_field('section_title') ?></h2>
    <?php } ?>
    <div class="container gap-top-md">
        <?php if (get_field('form_title')) { ?>
            <div class="row gap-bottom-sm">
                <div class="md-title col-md-6"><?= get_field('form_title') ?></div>
            </div>
        <?php } ?>
        <div class="row">
            <?php
            $form_id = get_field('form_shortcode');
            if ($form_id) {
                ?>
                <div class="col-md-6 cp-form">
                    <div>
                        <?= do_shortcode("[contact-form-7 id='{$form_id}']") ?>
                    </div>
                </div>
            <?php } ?>
            <?php if (get_field('image')) { ?>
                <div class="col-md-6 pl-5--lg cp-img-block">
                    <img src="<?= get_field('image') ?>" alt="" class="w-100">
                </div>
            <?php } ?>
        </div>
    </div>
</section>