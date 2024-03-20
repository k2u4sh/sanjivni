<?php
function jsw_block_setup()
{
    add_theme_support('editor-styles');

    //enqueue editor styles
    //add_editor_style(get_stylesheet_directory_uri() . '/assets/fonts/lato/stylesheet.css');
    //add_editor_style(get_stylesheet_directory_uri() . '/assets/css/plugin.css');
    //add_editor_style(get_stylesheet_directory_uri() . '/assets/css/main.css');
    //add_editor_style(get_stylesheet_directory_uri() . '/assets/css/admin/admin.css');
}

add_action('after_setup_theme', 'jsw_block_setup');

/**
 * Enqueue a script in the WordPress admin on edit.php.
 *
 * @param int $hook Hook suffix for the current admin page.
 */
function custom_enqueue_admin_script( $hook ) {
    wp_enqueue_script( 'custom_script', get_stylesheet_directory_uri() . '/assets/js/admin.js', array('jquery'), _S_VERSION );
}
add_action( 'admin_enqueue_scripts', 'custom_enqueue_admin_script' );


function jsw_custom_category($categories, $post)
{
    return array_merge(
        [
            [
                'slug' => 'jsw-blocks',
                'title' => __('JSW Blocks', 'jsw')
            ]
        ]
    );
}

add_filter('block_categories', 'jsw_custom_category', 10, 2);

function jsw_acf_block_render_callback($block)
{
    $slug = str_replace('acf/', '', $block['name']);
    if (file_exists(get_stylesheet_directory()."/template-parts/blocks/{$slug}.php")) {
        include(get_stylesheet_directory()."/template-parts/blocks/{$slug}.php");
    }
}

function jsw_acf_init(){
    if(function_exists('acf_register_block')){
        acf_register_block([
           'name' => 'banner',
           'title' => 'Banner',
           'description' => __('Home page Banner', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'slides',
            'keywords' => ['banner', 'Home Banner']
        ]);
        acf_register_block([
           'name' => 'counter',
           'title' => 'Counter',
           'description' => __('Counter sections', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'analytics',
            'keywords' => ['counter', 'number']
        ]);
        acf_register_block([
           'name' => 'about',
           'title' => 'About Us',
           'description' => __('Text and image with cta', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'id-alt',
            'keywords' => ['text', 'text with image block', 'about us']
        ]);
        acf_register_block([
           'name' => 'featured-departments',
           'title' => 'Featured Departments',
           'description' => __('Featured Department posts', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'grid-view',
            'keywords' => ['featured', 'Featured Departments']
        ]);
        acf_register_block([
           'name' => 'our-advantages',
           'title' => 'Our Advantages',
           'description' => __('', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'shield',
            'keywords' => ['Our Advantages']
        ]);
        acf_register_block([
           'name' => 'services',
           'title' => 'Services',
           'description' => __('', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'networking',
            'keywords' => ['Service', 'Services tab', 'Table']
        ]);
        acf_register_block([
           'name' => 'specialist',
           'title' => 'Specialist',
           'description' => __('Meet Our Specialist Sections', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'welcome-learn-more',
            'keywords' => ['specialist', 'meet our specialist']
        ]);
        acf_register_block([
           'name' => 'testimonials',
           'title' => 'Testimonials',
           'description' => __('Our Patients Testimonials sections', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'testimonial',
            'keywords' => ['specialist', 'meet our specialist']
        ]);
        acf_register_block([
           'name' => 'galleries',
           'title' => 'Galleries',
           'description' => __('Galleries sections', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'layout',
            'keywords' => ['galleries', 'gallery']
        ]);
        acf_register_block([
           'name' => 'text-image',
           'title' => 'Text Image',
           'description' => __('Text and Image section', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'id',
            'keywords' => ['text', 'image', 'Text Image', 'image text']
        ]);
        acf_register_block([
           'name' => 'highlights',
           'title' => 'Highlights',
           'description' => __('Highlight text and image section', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'id',
            'keywords' => ['text', 'image', 'Text Image', 'Highlights']
        ]);
        acf_register_block([
           'name' => 'jsw-image',
           'title' => 'JSW Image',
           'description' => __('Single page image', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'format-image',
            'keywords' => ['image', 'jsw', 'jsw image']
        ]);
        acf_register_block([
           'name' => 'simple-text',
           'title' => 'Simple Text',
           'description' => __('Simple text section', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'text',
            'keywords' => ['text', 'simple text']
        ]);
        acf_register_block([
           'name' => 'border-tab',
           'title' => 'Bordered Tab',
           'description' => __('Bordered Tab section', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'analytics',
            'keywords' => ['border tab', 'tab', 'tab content']
        ]);
        acf_register_block([
           'name' => 'accordion',
           'title' => 'Accordion',
           'description' => __('Accordion section', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'analytics',
            'keywords' => ['accordion', 'FAQ']
        ]);
        acf_register_block([
           'name' => 'doctor-list',
           'title' => 'Doctor List',
           'description' => __('Doctor list with time', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'analytics',
            'keywords' => ['list', 'doctor list', 'name']
        ]);
        acf_register_block([
           'name' => 'contact',
           'title' => 'Contact Us',
           'description' => __('Contact Us sections', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'analytics',
            'keywords' => ['contact', 'contact us']
        ]);
        acf_register_block([
            'name' => 'bed-count',
            'title' => 'Bed Count',
            'description' => __('Bed count sections', 'jsw'),
            'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'analytics',
            'keywords' => ['Bed Count', 'Services', 'Table']
        ]);
        acf_register_block([
           'name' => 'two-column-cta',
           'title' => 'Two Column With CTA',
           'description' => __('Two Column with CTA sections', 'jsw'),
           'render_callback' => 'jsw_acf_block_render_callback',
            'category' => 'jsw-blocks',
            'icon' => 'analytics',
            'keywords' => ['two column with cta', 'CTA', 'Two Column']
        ]);
    }
}
add_action('acf/init', 'jsw_acf_init');
