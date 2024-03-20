<?php
if (!defined('ABSPATH')) exit;

use RegisterPostTypes\JSW_Add_Post_Type as add_post_types;
use RegisterPostTypes\JSW_Add_Taxonomy as add_taxonomy;

add_action('init', function () {

    $post_types = [
        ['name'=>'Departments', 'slug'=> 'departments', 'icon' => 'dashicons-grid-view', 'label'=>'Departments', 'singular_label'=>'Department'],
        ['name'=>'Our Specialist', 'slug'=> 'ourspecialist', 'icon' => 'dashicons-groups', 'label'=>'Our Specialists', 'singular_label'=>'Our Specialist'],
        ['name'=>'Services', 'slug'=> 'services', 'icon' => 'dashicons-networking', 'label'=>'Services', 'singular_label'=>'Service'],
        ['name'=>'Testimonials', 'slug'=> 'testimonials', 'icon' => 'dashicons-testimonial', 'publicly_queryable'=>false, 'label'=>'Testimonials', 'singular_label'=>'Testimonial'],
        ['name'=>'FAQs', 'slug'=> 'faqs', 'icon' => 'dashicons-editor-help', 'publicly_queryable'=>false, 'label'=> 'FAQs', 'singular_label'=>'FAQ'],
    ];

    foreach ((array)$post_types as $items){
        $post_type = $items['name'];
        $tax_title = ucfirst($post_type);
        $slug = $items['slug'];
        $icon = $items['icon'];
        $taxonomy = isset($items['taxonomy'])?$items['taxonomy']:$slug.'-category';
        $tax_rewrite = isset($items['tax_rewrite'])?$items['tax_rewrite']:$taxonomy;
        $publicly_queryable = isset($items['publicly_queryable'])?$items['publicly_queryable']:true;

        new add_taxonomy(
            $taxonomy,
            $post_type,
            [
                'hierarchical' => true,
                'show_ui' => true,
                'show_admin_column' => true,
                'query_var' => true,
                'rewrite' => ['slug' => $tax_rewrite],
            ],
            esc_html__("{$tax_title} Categories", 'jsw'),
            esc_html__("{$tax_title} Category", 'jsw')
        );

        new add_post_types(
            $post_type,
            [
                'has_archive' => true,
                'public' => true,
                'show_ui' => true,
                'menu_icon' => $icon,
                'supports' => [
                    'title',
                    'editor',
                    'thumbnail',
                    'author',
                    'excerpt',
                    'comments'
                ],
                'taxonomies' => [$taxonomy],
                'rewrite' => ['slug' => $slug],
                'menu_position' => 20,
                'publicly_queryable' => $publicly_queryable,
                'show_in_rest' => true,
            ],
            esc_html__($items['label'], 'jsw'),
            esc_html__($items['singular_label'], 'jsw')
        );
    }
});