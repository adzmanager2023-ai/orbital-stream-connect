<?php
/**
 * Theme Customizer settings.
 *
 * @package MSL_Colombo
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Customizer panels, sections and controls.
 *
 * @param WP_Customize_Manager $wp_customize Customizer object.
 */
function msl_customize_register( $wp_customize ) {

	$wp_customize->get_setting( 'blogname' )->transport        = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';

	/* ---------------- Brand colors ---------------- */
	$wp_customize->add_section(
		'msl_brand',
		array(
			'title'    => __( 'MSL Brand', 'msl-colombo' ),
			'priority' => 25,
		)
	);

	$colors = array(
		'msl_primary_color' => array( __( 'Primary navy', 'msl-colombo' ), '#25265f' ),
		'msl_accent_color'  => array( __( 'Accent indigo', 'msl-colombo' ), '#6f73d2' ),
	);

	foreach ( $colors as $id => $data ) {
		$wp_customize->add_setting(
			$id,
			array(
				'default'           => $data[1],
				'sanitize_callback' => 'sanitize_hex_color',
				'transport'         => 'refresh',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				$id,
				array(
					'label'   => $data[0],
					'section' => 'msl_brand',
				)
			)
		);
	}

	/* ---------------- Hero ---------------- */
	$wp_customize->add_section(
		'msl_hero',
		array(
			'title'    => __( 'MSL Hero', 'msl-colombo' ),
			'priority' => 26,
		)
	);

	$hero_texts = array(
		'msl_hero_eyebrow' => array( __( 'Eyebrow label', 'msl-colombo' ), __( 'Freight Forwarding · Sri Lanka', 'msl-colombo' ), 'text' ),
		'msl_hero_title'   => array( __( 'Headline', 'msl-colombo' ), __( 'Global logistics meets intelligent digital infrastructure', 'msl-colombo' ), 'text' ),
		'msl_hero_text'    => array( __( 'Sub headline', 'msl-colombo' ), __( 'MSL Colombo moves cargo by sea, air and road — supported by an in-house printing division.', 'msl-colombo' ), 'textarea' ),
	);

	foreach ( $hero_texts as $id => $data ) {
		$wp_customize->add_setting(
			$id,
			array(
				'default'           => $data[1],
				'sanitize_callback' => 'textarea' === $data[2] ? 'sanitize_textarea_field' : 'sanitize_text_field',
				'transport'         => 'postMessage',
			)
		);
		$wp_customize->add_control(
			$id,
			array(
				'label'   => $data[0],
				'section' => 'msl_hero',
				'type'    => $data[2],
			)
		);
	}

	$wp_customize->add_setting(
		'msl_hero_image',
		array(
			'default'           => '',
			'sanitize_callback' => 'esc_url_raw',
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Image_Control(
			$wp_customize,
			'msl_hero_image',
			array(
				'label'       => __( 'Hero background image', 'msl-colombo' ),
				'description' => __( 'Wide, dark port or cargo imagery works best.', 'msl-colombo' ),
				'section'     => 'msl_hero',
			)
		)
	);

	/* ---------------- Header CTA ---------------- */
	$wp_customize->add_section(
		'msl_header_cta',
		array(
			'title'    => __( 'MSL Header Button', 'msl-colombo' ),
			'priority' => 27,
		)
	);

	$wp_customize->add_setting(
		'msl_header_cta_text',
		array(
			'default'           => __( 'Request a Quote', 'msl-colombo' ),
			'sanitize_callback' => 'sanitize_text_field',
		)
	);
	$wp_customize->add_control( 'msl_header_cta_text', array( 'label' => __( 'Button label', 'msl-colombo' ), 'section' => 'msl_header_cta', 'type' => 'text' ) );

	$wp_customize->add_setting(
		'msl_header_cta_url',
		array(
			'default'           => '#contact',
			'sanitize_callback' => 'sanitize_text_field',
		)
	);
	$wp_customize->add_control( 'msl_header_cta_url', array( 'label' => __( 'Button link', 'msl-colombo' ), 'section' => 'msl_header_cta', 'type' => 'text' ) );

	/* ---------------- Contact details ---------------- */
	$wp_customize->add_section(
		'msl_contact',
		array(
			'title'    => __( 'MSL Contact Details', 'msl-colombo' ),
			'priority' => 28,
		)
	);

	$contact = array(
		'msl_phone'        => array( __( 'Phone', 'msl-colombo' ), '+94 77 373 8440', 'text', 'sanitize_text_field' ),
		'msl_email'        => array( __( 'Email', 'msl-colombo' ), 'Info@mslcolombo.com', 'email', 'sanitize_email' ),
		'msl_address'      => array( __( 'Address', 'msl-colombo' ), 'Moratuwa, Sri Lanka', 'textarea', 'sanitize_textarea_field' ),
		'msl_footer_blurb' => array( __( 'Footer blurb', 'msl-colombo' ), __( 'Sea cargo, air cargo, transport and printing services.', 'msl-colombo' ), 'textarea', 'sanitize_textarea_field' ),
	);

	foreach ( $contact as $id => $data ) {
		$wp_customize->add_setting( $id, array( 'default' => $data[1], 'sanitize_callback' => $data[3] ) );
		$wp_customize->add_control( $id, array( 'label' => $data[0], 'section' => 'msl_contact', 'type' => $data[2] ) );
	}

	/* ---------------- Services source ---------------- */
	$wp_customize->add_section(
		'msl_services',
		array(
			'title'    => __( 'MSL Services Section', 'msl-colombo' ),
			'priority' => 29,
		)
	);

	$wp_customize->add_setting(
		'msl_services_parent',
		array(
			'default'           => 0,
			'sanitize_callback' => 'absint',
		)
	);
	$wp_customize->add_control(
		'msl_services_parent',
		array(
			'label'       => __( 'Services parent page', 'msl-colombo' ),
			'description' => __( 'Child pages of this page become the service cards on the homepage. Keep Printing Services as a child so it stays a division, not a top-level item.', 'msl-colombo' ),
			'section'     => 'msl_services',
			'type'        => 'dropdown-pages',
		)
	);
}
add_action( 'customize_register', 'msl_customize_register' );

/**
 * Live preview script.
 */
function msl_customize_preview_js() {
	wp_enqueue_script(
		'msl-customizer-preview',
		get_template_directory_uri() . '/assets/js/customizer.js',
		array( 'customize-preview' ),
		MSL_VERSION,
		true
	);
}
add_action( 'customize_preview_init', 'msl_customize_preview_js' );
