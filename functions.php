<?php
/**
 *gregorio s
 *
 * @link  
 *
 * @package WordPress
 * @subpackage timoGipfel
 * @since 1.0.0
 */
//ADD MENU 1
function wpb_custom_new_menu() {
  register_nav_menu('my-custom-menu',__( 'My Custom Menu' ));
}
 add_action( 'init', 'wpb_custom_new_menu' );

 //ADD MENU 2?
function wpb_custom_new_menu2() {
  register_nav_menu('my-custom-menu2',__( 'My Custom Menu2' ));
}
 add_action( 'init', 'wpb_custom_new_menu2' );

class My_Walker_Nav_Menu extends Walker_Nav_Menu {
  function start_lvl( &$output, $depth = 0, $args = array() )
 {
    $indent = str_repeat("\t", $depth);
    $output .= "\n$indent<ul class=\"dl2-submenu\">\n";
  }
} 


 
 //ADD MENU 3
function wpb_custom_new_menu3() {
  register_nav_menu('my-custom-menu3',__( 'My Custom Menu3' ));
}
 add_action( 'init', 'wpb_custom_new_menu3' );

 //ADD JS
 function add_js_scripts() {
  wp_enqueue_script( 'script', 
       get_template_directory_uri().'/js/script.js?v=1.0');
}
add_action('wp_enqueue_scripts', 'add_js_scripts');

//ADD JS
function add_js_modernize() {
  wp_enqueue_script( 'modernizr.custom.js', 
       get_template_directory_uri().'/js/modernizr.custom.js?v=1.0');

}
add_action('wp_enqueue_scripts', 'add_js_modernize');

//ADD youtubeJS
function add_js_youtube() {
  wp_enqueue_script( 'https://www.youtube.com/player_api', 'https://www.youtube.com/player_api');

}

add_action('wp_enqueue_scripts', 'add_js_youtube');