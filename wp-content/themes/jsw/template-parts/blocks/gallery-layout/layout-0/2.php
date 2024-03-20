<?php
/**
 * @see source_file jsw/template-parts/blocks/galleries.php
 * @var array $args
 */
$gallery = $args['data'];
if ($gallery) {
    ?>
    <div class="row zoom-gallery gallery-inner-block-btm-gap">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <?php foreach ($gallery as $image_id) { ?>
                            <div class="col-md-3 gallery-inner-block-btm-gap">
                                <a href="<?= wp_get_attachment_image_url($image_id, 'full'); ?>">
                                    <img src="<?= wp_get_attachment_image_url($image_id, 'large'); ?>" alt="">
                                </a>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php
}