<div class="col-lg-3 col-md-4 col-sm-6 card-block">
    <div>
        <?php if (has_post_thumbnail()) { ?>
            <div class="card-img-block">
                <img src="<?= get_the_post_thumbnail_url(get_the_ID(), 'archive-image-department') ?>" alt="">
            </div>
        <?php } ?>
        <div class="card-cnt-block">
            <h4 class="bt"><a href="<?= get_permalink() ?>" class="bt"><?= get_the_title() ?></a></h4>
            <?php
            $content_slice1 = get_the_excerpt();
            $content_slice2 = '';
            if($content_slice1) {
                $content_array = explode(' ', $content_slice1);
                if (count($content_array) > 18) {
                    $content_slice1 = implode(' ', array_slice($content_array, 0, 18));
                    $content_slice2 = implode(' ', array_slice($content_array, 18, count($content_array)));
                }
            }
            ?>
            <p>
                <?= $content_slice1 ?>
                <?php if ($content_slice2) { ?>
                    <span class="more-text"><?= $content_slice2 ?></span>
                    <a href="javascript:void(0);" class="read-more">Read More...</a>
                <?php } ?>
            </p>
        </div>
    </div>
</div>