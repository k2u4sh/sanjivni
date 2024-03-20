<?php if (have_rows('doctor_list')) { ?>
    <div class="name-infor-wrap mt-4">
        <?php while (have_rows('doctor_list')):the_row(); ?>
            <div>
                <div class="name-title"><?= get_sub_field('name') ?></div>
                <div class="name-info"><?= get_sub_field('available_time') ?></div>
            </div>
        <?php endwhile; ?>
    </div>
    <?php
}