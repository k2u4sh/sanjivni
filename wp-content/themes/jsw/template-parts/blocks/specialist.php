<?php
if (have_rows('specialists')) {
    while (have_rows('specialists')):the_row();
        $section_desc = get_sub_field('section_description', false, false);
        ?>
        <section class="gap-bottom-lg mos-wrap">
            <div class="container">
                <div class="row">
                    <div class="text-center col-md-8 mx-auto">
                        <h2 class="bt"><?= get_sub_field('section_title') ?></h2>
                        <?php if ($section_desc) { ?>
                            <div class="section-sub-title"><?= $section_desc ?></div>
                        <?php } ?>
                    </div>
                </div>
                <?php
                $style = get_sub_field('style');
                $style = ($style != 'simple') ? $style : null;
                get_template_part("/template-parts/blocks/specialist/specialist", $style);
                ?>
            </div>
        </section>
    <?php
    endwhile;
}