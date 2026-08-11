<?php
/**
 * MSL Colombo theme functions.
 *
 * @package MSL_Colombo
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'MSL_VERSION', '1.0.0' );

/**
 * Theme setup.
 */
function msl_setup() {
	load_theme_textdomain( 'msl-colombo', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 60,
			'width'       => 220,
			'flex-height' => true,
			'flex-width'  => true,
		)
	);

	register_nav_menus(
		array(
			'primary' => __( 'Primary Menu', 'msl-colombo' ),
			'footer'  => __( 'Footer Menu', 'msl-colombo' ),
		)
	);

	add_image_size( 'msl-card', 800, 500, true );
}
add_action( 'after_setup_theme', 'msl_setup' );

/**
 * Content width.
 */
function msl_content_width() {
	$GLOBALS['content_width'] = 1200;
}
add_action( 'after_setup_theme', 'msl_content_width', 0 );

/**
 * Enqueue styles and scripts.
 */
function msl_scripts() {
	wp_enqueue_style(
		'msl-fonts',
		'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap',
		array(),
		null
	);

	wp_enqueue_style( 'msl-style', get_stylesheet_uri(), array( 'msl-fonts' ), MSL_VERSION );

	wp_enqueue_script( 'msl-main', get_template_directory_uri() . '/assets/js/main.js', array(), MSL_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	// Inline accent override from the Customizer.
	$accent = get_theme_mod( 'msl_accent_color', '#6f73d2' );
	$navy   = get_theme_mod( 'msl_primary_color', '#25265f' );
	wp_add_inline_style( 'msl-style', ':root{--msl-indigo:' . esc_attr( $accent ) . ';--msl-navy:' . esc_attr( $navy ) . ';}' );
}
add_action( 'wp_enqueue_scripts', 'msl_scripts' );

/**
 * Widget areas.
 */
function msl_widgets_init() {
	register_sidebar(
		array(
			'name'          => __( 'Sidebar', 'msl-colombo' ),
			'id'            => 'sidebar-1',
			'before_widget' => '<section id="%1$s" class="msl-card widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);
}
add_action( 'widgets_init', 'msl_widgets_init' );

/**
 * Body classes.
 */
function msl_body_classes( $classes ) {
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}
	return $classes;
}
add_filter( 'body_class', 'msl_body_classes' );

/**
 * Fallback menu when no menu is assigned.
 */
function msl_fallback_menu() {
	echo '<ul>';
	wp_list_pages(
		array(
			'title_li' => '',
			'depth'    => 2,
		)
	);
	echo '</ul>';
}

/**
 * Site brand mark (logo or text).
 */
function msl_brand() {
	echo '<a class="msl-brand" href="' . esc_url( home_url( '/' ) ) . '" rel="home">';
	if ( has_custom_logo() ) {
		$logo_id = get_theme_mod( 'custom_logo' );
		echo wp_get_attachment_image( $logo_id, 'full', false, array( 'alt' => esc_attr( get_bloginfo( 'name' ) ) ) );
	} else {
		echo '<span><span class="msl-brand__text">' . esc_html( get_bloginfo( 'name' ) ) . '</span><br>';
		echo '<span class="msl-brand__tagline">' . esc_html( get_bloginfo( 'description' ) ) . '</span></span>';
	}
	echo '</a>';
}

/**
 * Pagination.
 */
function msl_pagination() {
	$links = paginate_links( array( 'type' => 'array' ) );
	if ( ! $links ) {
		return;
	}
	echo '<nav class="msl-pagination" aria-label="' . esc_attr__( 'Posts navigation', 'msl-colombo' ) . '">';
	foreach ( $links as $link ) {
		echo wp_kses_post( $link );
	}
	echo '</nav>';
}

/**
 * Excerpt tweaks.
 */
add_filter( 'excerpt_more', function () { return '&hellip;'; } );
add_filter( 'excerpt_length', function () { return 26; }, 999 );

require_once get_template_directory() . '/inc/customizer.php';
