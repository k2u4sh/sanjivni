<?php
namespace RegisterPostTypes;
if ( ! defined( 'ABSPATH' ) )
	exit;

/**
 * Class for creating custom post types
 * new JSW_Add_Post_Type(
        $post_type,
        [
            'has_archive' => true,
            'public' => true,
            'show_ui' => true,
            'menu_icon' => $icon,
            'supports' => [
            'title',
            'editor',
            'thumbnail'
        ],
            'taxonomies' => [$taxonomy],
            'rewrite' => ['slug' => $slug],
            'menu_position' => 20,
            'publicly_queryable' => true
        ],
        esc_html__(ucfirst(implode(' ', explode('-', $post_type))), 'jsw'),
        esc_html__(ucfirst(implode(' ', explode('-', $slug))), 'jsw')
    );
 */

class JSW_Add_Post_Type {

	public static function register( $name, $args, $label, $singular_label = '' ) {
		return new self( $name, $args, $label, $singular_label );
	}

	public function __construct( $name, $args, $label, $singular_label = '' ) {
		if ( empty( $name ) ) {
			throw new Exception( '$name parameter required.', 1 );
		}

		$this->name = $name;

		$this->label = $label;
		$this->singular_label = ( $singular_label ) ? $singular_label : $label;

		$this->args = array_merge_recursive(
			[
				'labels' => $this->get_labels(),
			],
			$args
		);


		$this->register_post_type();
		$this->add_revision_support();
	}

	public function get_labels() {
		return [
			'name'					=> $this->label,
			'singular_name'			=> $this->singular_label,
			'add_new'				=> sprintf( __( 'Add %s', 'jsw' ), $this->singular_label ),
			'add_new_item'			=> sprintf( __( 'Add new %s', 'jsw' ), $this->singular_label ),
			'edit_item'				=> sprintf( __( 'Edit %s', 'jsw' ), $this->singular_label ),
			'view_item'				=> sprintf( __( 'View %s', 'jsw' ), $this->singular_label ),
			'view_items'			=> sprintf( __( 'View %s', 'jsw' ), $this->label ),
			'search_items'			=> sprintf( __( 'Search %s', 'jsw' ), $this->label ),
			'not_found'				=> sprintf( __( 'No %s found', 'jsw' ), $this->label ),
			'not_found_in_trash'	=> sprintf( __( 'No %s found in trash', 'jsw' ), $this->label ),
			'parent_item_colon'		=> sprintf( __( 'Parent %s:', 'jsw' ), $this->singular_label ),
			'all_items'				=> sprintf( __( 'All %s', 'jsw' ), $this->label ),
			'menu_name'				=> $this->label,
		];
	}

	private function register_post_type() {
		register_post_type(
			$this->name,
			$this->args
		);
	}

	private function add_revision_support() {
		add_post_type_support(
			$this->name,
			'revisions'
		);
	}
}


/**
 * Example usage:
 *
 * new JSW_Add_Taxonomy(
 *	'department',
 *	'employee',
 *	[
 *		'public' => true,
 *		'publicly_queryable' => false,
 *		'show_admin_column' => true,
 *	],
 *	__( 'Departments', 'jsw' ),
 *	__( 'Department', 'jsw' )
 * );
 */

/**
 * Class for creating custom taxonomy
 *
 */

class JSW_Add_Taxonomy {

    public static function register( $name, $post_type, $args, $label, $singular_label = '' ) {
        return new self( $name, $post_type, $args, $label, $singular_label );
    }

    public function __construct( $name, $post_type, $args, $label, $singular_label = '' ) {
        if ( empty( $name ) ) {
            throw new Exception( '$name parameter required.', 1 );
        }

        $this->name = $name;
        $this->object_type = $post_type;

        $this->label = $label;
        $this->singular_label = ( $singular_label ) ? $singular_label : $label;

        $this->args = array_merge_recursive(
            [
                'labels' => $this->get_labels(),
            ],
            $args
        );

        $this->register_taxonomy();
    }

    public function get_labels() {
        return [
            'name'					=> $this->label,
            'singular_name'			=> $this->singular_label,
            'menu_name'				=> $this->label,
            'all_items'				=> sprintf( __( 'All %s', 'jsw' ), $this->label ),
            'edit_item'				=> sprintf( __( 'Edit %s', 'jsw' ), $this->singular_label ),
            'view_item'				=> sprintf( __( 'View %s', 'jsw' ), $this->singular_label ),
            'update_item'			=> sprintf( __( 'Update %s', 'jsw' ), $this->singular_label ),
            'add_new_item'			=> sprintf( __( 'Add new %s', 'jsw' ), $this->singular_label ),
            'new_item_name'			=> sprintf( __( 'New %s Name', 'jsw' ), $this->singular_label ),
            'parent_item'			=> sprintf( __( 'Parent %s', 'jsw' ), $this->singular_label ),
            'parent_item_colon'		=> sprintf( __( 'Parent %s:', 'jsw' ), $this->singular_label ),
            'search_items'			=> sprintf( __( 'Search %s', 'jsw' ), $this->label ),
            'not_found'			=> sprintf( __( 'No %s found.', 'jsw' ), $this->label ),
        ];
    }

    private function register_taxonomy() {
        register_taxonomy(
            $this->name,
            $this->object_type,
            $this->args
        );

        foreach ( (array) $this->object_type as $post_type ) {
            register_taxonomy_for_object_type(
                $this->name,
                $post_type
            );
        }
    }
}

