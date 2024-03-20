<?php if (have_rows('accordion')) { ?>
    <div class="row gap-top-sm accodiaon-wrap">
        <div class="col-md-12">
            <div class="accordion" id="accordionExample">
                <?php while (have_rows('accordion')):the_row();
                    $index = get_row_index();
                    $expand = false;
                    $active_class = '';
                    $inactive_class = ' collapsed';
                    if ($index == 1) {
                        $expand = true;
                        $active_class = ' show';
                        $inactive_class = '';
                    }
                    ?>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading-<?=$index?>">
                            <button class="accordion-button<?=$inactive_class?>" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-<?=$index?>" aria-expanded="<?=$expand?>" aria-controls="collapse-<?=$index?>">
                                <?=get_sub_field('title')?>
                                <i class="fa-solid fa-plus"></i>
                                <i class="fa-solid fa-minus"></i>
                            </button>
                        </h2>
                        <div id="collapse-<?=$index?>" class="accordion-collapse collapse<?=$active_class?>" aria-labelledby="heading-<?=$index?>" data-bs-parent="#accordionExample">
                            <div class="accordion-body"><?=get_sub_field('description')?></div>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
        </div>
    </div>
    <?php
}