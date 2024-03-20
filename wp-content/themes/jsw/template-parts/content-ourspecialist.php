<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package jsw
 */

if (is_single()) {
    $url = get_field('sub_page_banner');
    if (get_field('use_in_single_page_our_specialist', 'options')) {
        $url = get_field('banner_image_our_specialist', 'options');
    }
    ?>
  <!--  <section class="sub-page-banner cover no-repeat dd" style="background-image: url('<?= $url ?>');">
        <div class="container d-flex align-items-center">
            <div>
                <div class="row">
                    <div class="col-lg-7">
                        <h1 class="bt"><?= preg_replace('/<span>/i', '<span class="ms-4">', get_post_type_object(get_post_type())->label) ?></h1>
                        <div class="breadcrumb-wrap">
                            <span class="gt"><span>Home</span> <span class="mx-3">></span> </span> <span class="rt"><?= ucwords(strtolower(strip_tags(get_post_type_object(get_post_type())->label))) ?></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
<section class="sub-page-banner cover no-repeat our-speclist-page-banner-wrap">
            <div class="sub-banner-img-wrap position-relative">
                <div class="sub-banner-slider-wrap owl-carousel">
                    <!--<div class="sub-banner-item-block">
                        <img src="<?= get_field('banner_image_our_specialist', $hospital ? $hospital->ID : 'options') ?>" alt="" />
                    </div>-->
                    
                    <?php if (have_rows('banner_image', 'option')): while (have_rows('banner_image', 'option')): the_row(); ?>
                    <div class="sub-banner-item-block">
                        <img src="<?php the_sub_field("upload", 'option'); ?>" alt="">
                    </div> 
                    <?php endwhile; endif; ?>
                </div>
                <div class="sub-banner-cnt-block">
                <div class="container d-flex align-items-center position-relative">
                <div class="w-100">
                    <div class="row">
                        <div class="col-lg-7">
                            <h1 class="bt"><?= preg_replace('/<span>/i', '<span class="ms-4">', get_the_title()) //get_queried_object()->label    ?></h1>
                            <div class="breadcrumb-wrap">
                                <span class="gt"><span>Home</span> <span class="mx-3">></span> </span> <span
                                        class="rt"><?= ucwords(get_the_title())//ucwords(strtolower(strip_tags(get_queried_object()->label)))     ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            
        </section>
    <?php
}
?>
<section class="gap-bottom-lg gap-top-lg">
    <div class="container">
        <div class="row gx-5">
            <div class="col-md-3 os-detail-side-block">
                <?php if (has_post_thumbnail()) { ?>
                    <img src="<?= get_the_post_thumbnail_url(get_the_ID(), 'archive-image-specialist') ?>" alt="" class="mb--3">
                <?php } ?>
                <div class="mb--3">
                    <div class="fw-bold bt mb--2">Specialty</div>
                    <div class="gt"><?= get_field('specialty') ?></div>
                </div>
                <div class="mb--3">
                    <div class="fw-bold bt mb--2">ESI /KMC</div>
                    <div class="gt"><?= get_field('esi_kmc') ?></div>
                </div>
                <?php if (have_rows('doctor_schedule')) { ?>
                    <div class="mb--3">
                        <div class="fw-bold bt mb--2">Doctor Schedule</div>
                        <?php while (have_rows('doctor_schedule')):the_row(); ?>
                            <div class="d-flex align-items-center justify-content-between mb--2">
                                <div class="gt"><?= get_sub_field('day') ?></div>
                                <div class="gt"><?= get_sub_field('time') ?></div>
                            </div>
                        <?php endwhile; ?>
                    </div>
                <?php } ?>
            </div>
            <div class="col-md-9 pl-5--lg os-detail-info-block">
                <div>
                    <h3 class="bt"><?= get_the_title() ?></h3>
                    <div class="doctor-info-wrap mb--3">
                        <?php if (get_field('profession')) { ?>
                            <div class="d-flex align-items-center mb--2">
                                <div class="text-24 fw-semibold bt">Profession:</div>
                                <div class="gt text-24"><?= get_field('profession') ?></div>
                            </div>
                        <?php } ?>
                        <?php if (get_field('experience')) { ?>
                        <div class="d-flex align-items-center mb--2">
                            <div class="text-24 fw-semibold bt">Experience:</div>
                            <div class="gt text-24"><?= get_field('experience') ?></div>
                        </div>
                        <?php } ?>
                        <?php if (get_field('phone')) { ?>
                        <div class="d-flex align-items-center mb--2">
                            <div class="text-24 fw-semibold bt">Phone:</div>
                            <div class="gt text-24"><?= get_field('phone') ?></div>
                        </div>
                        <?php } ?>
                        <?php if (get_field('email')) { ?>
                        <div class="d-flex align-items-center mb--2">
                            <div class="text-24 fw-semibold bt">Email:</div>
                            <div class="gt text-24"><?= get_field('email') ?></div>
                        </div>
                        <?php } ?>
                        <?php if (get_field('address')) { ?>
                        <div class="d-flex align-items-center mb--2">
                            <div class="text-24 fw-semibold bt">Address:</div>
                            <div class="gt text-24"><?= get_field('address') ?></div>
                        </div>
                        <?php }?>
                    </div>
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
    </div>
</section>
