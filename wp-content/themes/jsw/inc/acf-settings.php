<?php
/**
 * add options page
 */
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Theme Options',
        'menu_title' => 'Theme Options',
        'redirect' => false
    ));
}

/**
 * Advanced Custom Fields Options function
 * Always fetch an Options field value from the default language
 */
function app_acf_set_language()
{
    return acf_get_setting('default_language');
}


function get_global_option($name)
{
    add_filter('acf/settings/current_language', 'app_acf_set_language', 100);
    $option = get_field($name, 'option');
    remove_filter('acf/settings/current_language', 'app_acf_set_language', 100);
    return $option;
}


/**
 * API key for google map
 */

function _acf_init()
{
    $apiKey = !empty(get_global_option('google_api_key')) ? get_global_option('google_api_key') : '';
    acf_update_setting('google_api_key', $apiKey);
    $logo = !empty(get_global_option('logo')) ? get_global_option('logo') : '';
    acf_update_setting('logo', $logo);
}

add_action('acf/init', '_acf_init');
