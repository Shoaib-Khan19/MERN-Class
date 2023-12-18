<?php

function impact_abc_css_files(){

wp_enqueue_style("mybootstrap",get_template_directory_uri()."/assets/vendor/bootstrap/css/bootstrap.min.css",array(),"1.1.0","all");

wp_enqueue_style("aos-css",get_template_directory_uri()."/assets/vendor/aos/aos.css",array(),"2.0.0","all");

wp_enqueue_style("bootstrap-icons",get_template_directory_uri()."/assets/vendor/bootstrap-icons/bootstrap-icons.css",array(),"3.0.0","all");

wp_enqueue_style("glightbox-css",get_template_directory_uri()."/assets/vendor/glightbox/css/glightbox.min.css",array(),"3.0.0","all");

wp_enqueue_style("swiper-bundle-css",get_template_directory_uri()."/assets/vendor/swiper/swiper-bundle.min.css",array(),"4.0.0","all");

wp_enqueue_style("main-css",get_template_directory_uri()."/assets/css/main.css",array(),"1.1.0","all");

}
add_action("wp_enqueue_scripts" ,"impact_abc_css_files");

// 
add_theme_support( 'custom-logo' );

function themename_custom_logo_setup() {
	$defaults = array(
		'height'               => 100,
		'width'                => 400,
		'flex-height'          => true,
		'flex-width'           => true,
		'header-text'          => array( 'site-title', 'site-description' ),
		'unlink-homepage-logo' => true, 
	);
	add_theme_support( 'custom-logo', $defaults );
}
add_action( 'after_setup_theme', 'themename_custom_logo_setup' );

// Imapct Menus resgistration

function impact_menus(){

register_nav_menu('abc','Primary Menu');
register_nav_menu('footer','Footer Menu');

}
add_action('init','impact_menus');

// Menu li class
function add_classes_on_li($classes, $item, $args) {
  $classes[] = 'dropdown';
  return $classes;
}
add_filter('nav_menu_css_class','add_classes_on_li',1,3);

// Posts Theme Support Function
add_theme_support( 'post-formats', array( 'aside', 'gallery' , 'video' ,'image','quote') );
add_theme_support( 'post-thumbnails' );
