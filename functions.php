<?php
/**
 * Gore Themes functions
 *
 * @package Gore
 */


function gore_enqueue_scripts() {
	wp_enqueue_style( 'gore_bootstrap_css', get_stylesheet_directory_uri() . '/css/bootstrap.min.css' );
	wp_enqueue_script( 'gore_bootstrap_js', get_stylesheet_directory_uri() . '/js/bootstrap.min.js', array( 'gore_main_js' ), '', true  );
	wp_enqueue_script( 'gore_main_js', get_template_directory_uri() . '/js/main.js', array( 'jquery' ), '1.0', true );
	wp_localize_script( 'gore_main_js', 'postdata', array(
		'post_id' => get_the_ID(),
		'theme_uri' => get_stylesheet_directory_uri(),
		'rest_uri' => rest_url( 'wp/v2/' ),
	) );
}

add_action( 'wp_enqueue_scripts', 'gore_enqueue_scripts' );
