<?php 

/**
 * Theme Support Settings
 */

function ecw_theme_setup(){
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('menus');
    add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'ecw_theme_setup');

function add_custom_css_js(){
    wp_enqueue_style('style', get_template_directory_uri() . '/dist/css/main.css');
    wp_enqueue_script('main', get_template_directory_uri() . '/dist/js/main.js', [], null, true);
}

add_action('wp_enqueue_scripts', 'add_custom_css_js');

function add_admin_css_js(){
    wp_enqueue_style('admin-style', get_template_directory_uri() . '/dist/css/admin.css');
}
