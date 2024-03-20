<?php
/**
 * @see source_file jsw/template-parts/blocks/galleries.php
 * @var array $args
 */
$gallery = $args['data'];
if ($gallery) {
    $last = array_pop($gallery);
    ?>
    <div class="row zoom-gallery gallery-inner-block-btm-gap">
        <?php if ($gallery) {
            $gallery = array_chunk($gallery, 2);
            ?>
            <div class="col-md-6">
                <div class="row">
                    <?php foreach ($gallery as $image_ids) { ?>
                        <div class="col-md-6">
                            <div class="row">
                                <?php if (isset($image_ids[0])) { ?>
                                    <div class="col-md-12 gallery-inner-block-btm-gap">
                                        <a href="<?= wp_get_attachment_image_url($image_ids[0], 'full'); ?>">
                                            <img src="<?= wp_get_attachment_image_url($image_ids[0], 'large'); ?>" alt="">
                                        </a>
                                    </div>
                                <?php } ?>
                                <?php if (isset($image_ids[1])) { ?>
                                    <div class="col-md-12">
                                        <a href="<?= wp_get_attachment_image_url($image_ids[1], 'full'); ?>">
                                            <img src="<?= wp_get_attachment_image_url($image_ids[1], 'large'); ?>" alt="">
                                        </a>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        <?php } ?>
        <?php if ($last) { ?>
            <div class="col-md-6 gallery-lg">
                <a href="<?= wp_get_attachment_image_url($last, 'full'); ?>">
                    <img src="<?= wp_get_attachment_image_url($last, 'large'); ?>" alt="">
                </a>
            </div>
        <?php } ?>
    </div>
    <?php
}