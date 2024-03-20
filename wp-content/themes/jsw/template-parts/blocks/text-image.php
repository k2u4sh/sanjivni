<?php
$bottom_gap = get_field('bottom_gap')?:'none';
?>
<div class="row gap-top-lg gx-5 gap-bottom-<?=$bottom_gap?>">
    <?php if (!get_field('column_sort')) { ?>
        <div class="col-md-6 mb-30-sm">
            <img src="<?=get_field('image')?>" alt="">
        </div>
    <?php } ?>
    <div class="col-md-6">
        <div>
            <?php
            $content = preg_replace('/<h([1-6]).*?>/i','<h${1} class="bt">', get_field('text'));
            $content = preg_replace('/<ul>/i','<ul class="tick-list mt-5">', $content);
            echo $content;
            ?>
        </div>
    </div>
    <?php if (get_field('column_sort')) { ?>
        <div class="col-md-6 mb-30-sm">
            <img src="<?=get_field('image')?>" alt="">
        </div>
    <?php } ?>
</div>