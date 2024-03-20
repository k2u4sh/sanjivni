<?php
/**
 * jsw functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package jsw
 */


/**
 * Implement the Custom Functions.
 */
require get_template_directory() . '/inc/custom-functions.php';

/**
 * Implement the wp hooks.
 */
require get_template_directory() . '/inc/hooks.php';

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Implement the wp blocks.
 */
require get_template_directory() . '/inc/blocks.php';




function my_wpcf7_validate_text( $result, $tag ) {

    $type = $tag['type'];
    $name = $tag['name'];
    $value = $_POST[$name] ;

    if ( strpos( $name , 'name' ) !== false ){
        $regex = '/^[a-zA-Z]+$/';
        $Valid = preg_match($regex,  $value, $matches );
        if ( $Valid > 0 ) {
        } else {
            $result->invalidate( $tag, wpcf7_get_message( 'invalid_name' ) );
        }
    }
    return $result;
}
add_filter( 'wpcf7_validate_text*', 'my_wpcf7_validate_text' , 10, 2 );

add_filter( 'wpcf7_messages', 'mywpcf7_text_messages' );
function mywpcf7_text_messages( $messages ) {
    return array_merge( $messages, array(
        'invalid_name' => array(
            'description' => __( "Name is invalid", 'contact-form-7' ),
            'default' => __( 'Name seems invalid.', 'contact-form-7' )
        )
    ));
}