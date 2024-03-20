<section class="vm-wrap gap-bottom-lg">
    <div class="row gx-0">
        <div class="col-md-6 vm-title-block no-repeat cover" style="background-image: url('<?=get_field('left_column_background')?>');">
            <div>
                <div>
                    <div class="vmtb-image-block">
                        <img src="<?=get_stylesheet_directory_uri()?>/assets/img/vision.png" alt="">
                    </div>
                    <h2 class="text-white">OUR VISION</h2>
                    <div class="text-white"><?=get_field('our_vision', false, false)?></div>
                </div>
                <div>
                    <div class="vmtb-image-block">
                        <img src="<?=get_stylesheet_directory_uri()?>/assets/img/mission.png" alt="">
                    </div>
                    <h2 class="text-white">OUR MISSION</h2>
                    <div class="text-white"><?=get_field('our_mission', false, false)?></div>
                </div>
            </div>
        </div>
        <div class="col-md-6 vm-cnt-block">
            <div>
                <h2 class="bt">Unit Highlights</h2>
                <?=preg_replace('/<ul>/i', '<ul class="tick-list">', get_field('unit_highlights', false, false))?>
            </div>
        </div>
    </div>
</section>