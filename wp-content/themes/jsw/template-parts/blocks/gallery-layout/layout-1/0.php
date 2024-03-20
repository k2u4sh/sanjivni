<?php
/**
 * @see source_file jsw/template-parts/blocks/galleries.php
 * @var array $args
 */
$gallery = $args['data'];
if ($gallery) {
    $gallery = array_chunk($gallery, 2);
    if (count($gallery) > 2)
        $gallery = [$gallery[0], $gallery[2], $gallery[1]];
    ?>
    <div class="row zoom-gallery gallery-inner-block-btm-gap">
        <div class="col-md-12">
            <div class="row">
                <?php
                foreach ($gallery as $image_ids) {
                    if (count($image_ids) > 1) {
                        ?>
                        <div class="col-md-3">
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
                        <?php
                    } else {
                        ?>
                        <div class="col-md-6">
                            <div class="row h-100">
                                <?php if (isset($image_ids[0])) { ?>
                                    <div class="col-md-12 gallery-lg">
                                        <a href="<?= wp_get_attachment_image_url($image_ids[0], 'full'); ?>">
                                            <img src="<?= wp_get_attachment_image_url($image_ids[0], 'large'); ?>" alt="">
                                        </a>
                                    </div>
                                <?php } ?>
                            </div>
                        </div>
                        <?php
                    }
                }
                ?>
            </div>
        </div>
    </div>
    <?php
}