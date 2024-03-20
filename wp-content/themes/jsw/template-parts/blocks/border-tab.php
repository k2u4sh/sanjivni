<div class="gap-top-sm border-tabs">
    <?php if (have_rows('content')) { ?>
        <ul class="nav nav-pills mb-0" id="pills-tab" role="tablist">
            <?php while (have_rows('content')):the_row();
                $index = get_row_index();
                $class = '';
                if ($index == 1) {
                    $class = ' active';
                }
                ?>
                <li class="nav-item" role="presentation">
                    <button class="nav-link<?= $class ?>" id="tab-<?= $index ?>" data-bs-toggle="pill" data-bs-target="#tab_<?= $index ?>" type="button" role="tab" aria-controls="tab_<?= $index ?>"
                            aria-selected="true"><?=get_sub_field('title')?>
                    </button>
                </li>
            <?php endwhile; ?>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <?php while (have_rows('content')):the_row();
                $index = get_row_index();
                $class = '';
                if ($index == 1) {
                    $class = ' show active';
                }
                ?>
                <div class="tab-pane fade<?=$class?>" id="tab_<?= $index ?>" role="tabpanel" aria-labelledby="tab-<?= $index ?>">
                    <?=get_sub_field('text')?>
                </div>
            <?php endwhile; ?>
        </div>
    <?php } ?>
</div>