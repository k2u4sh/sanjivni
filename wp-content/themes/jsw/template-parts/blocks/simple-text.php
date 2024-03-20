<?php
$mt = '';
if (get_field('margin_top')) {
    $mt = ' mt--3';
}
if (get_field('title')) { ?>
    <h3 class="bt<?= $mt ?>"><?= get_field('title') ?></h3>
<?php } ?>
<?php
$content = preg_replace('/<h([1-6]).*?>/i', '<h${1} class="bt' . $mt . '">', get_field('text'));
$content = preg_replace('/<ul>/i', '<ul class="tick-list mb--3 lh-1">', $content);
echo $content;
?>