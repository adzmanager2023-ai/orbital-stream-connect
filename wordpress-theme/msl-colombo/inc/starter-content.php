<?php
/**
 * One-click starter content.
 *
 * Creates Home, Services (+ children), About, Contact and Quote pages with
 * demo copy the first time the theme is activated, assigns the static front
 * page and builds the primary navigation menu.
 *
 * @package MSL_Colombo
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Demo page definitions.
 *
 * @return array
 */
function msl_starter_pages() {
	return array(
		'home'     => array(
			'title'   => __( 'Home', 'msl-colombo' ),
			'slug'    => 'home',
			'menu'    => false,
			'content' => '<p>MSL Colombo is a Sri Lankan freight forwarding and logistics company moving cargo by sea, air and road — supported by an in-house printing division.</p>',
		),
		'services' => array(
			'title'   => __( 'Services', 'msl-colombo' ),
			'slug'    => 'services',
			'menu'    => true,
			'content' => '<h2>Four divisions, one operating standard</h2>
<p>From port to door, and from artwork to print, every shipment and every job is handled by specialists under one roof. Our teams work across Colombo Port, Bandaranaike International Airport and the island road network.</p>
<h3>What you get with every booking</h3>
<ul>
<li>A named coordinator from quotation to final delivery</li>
<li>Documentation prepared and checked before cargo moves</li>
<li>Milestone updates at booking, departure, arrival and clearance</li>
<li>Transparent pricing with no surprise line items</li>
</ul>',
		),
		'about'    => array(
			'title'   => __( 'About Us', 'msl-colombo' ),
			'slug'    => 'about-us',
			'menu'    => true,
			'content' => '<h2>Built in Colombo, trusted across trade lanes</h2>
<p>MSL Colombo was founded on a simple idea: logistics should feel calm. Shipping is complex enough without chasing updates, so we built a team and a set of systems that keep clients informed before they have to ask.</p>
<h3>How we work</h3>
<p>We operate as an extension of your supply chain team. That means direct access to the people handling your cargo, honest advice when a route or mode is not the right fit, and documentation discipline that keeps cargo out of demurrage.</p>
<h3>Our divisions</h3>
<ul>
<li><strong>Sea Freight</strong> — FCL, LCL and project cargo through Colombo Port.</li>
<li><strong>Air Freight</strong> — time-critical consignments with consolidated and direct options.</li>
<li><strong>Transport &amp; Distribution</strong> — island-wide trucking, warehousing and last-mile delivery.</li>
<li><strong>Printing Services</strong> — labels, packaging, shipping documentation and marketing print.</li>
</ul>',
		),
		'contact'  => array(
			'title'   => __( 'Contact Us', 'msl-colombo' ),
			'slug'    => 'contact-us',
			'menu'    => true,
			'content' => '<h2>Talk to a coordinator</h2>
<p>Tell us what you are moving and where it needs to go. We reply to enquiries within one working day.</p>
<ul>
<li><strong>Phone:</strong> <a href="tel:+94773738440">+94 77 373 8440</a></li>
<li><strong>Email:</strong> <a href="mailto:Info@mslcolombo.com">Info@mslcolombo.com</a></li>
<li><strong>Address:</strong> Moratuwa, Sri Lanka</li>
<li><strong>Hours:</strong> Monday to Friday, 08:30 – 17:30 (+05:30)</li>
</ul>
<p>Need pricing instead? Head to our <a href="/quote/">quote request page</a>.</p>',
		),
		'quote'    => array(
			'title'   => __( 'Request a Quote', 'msl-colombo' ),
			'slug'    => 'quote',
			'menu'    => true,
			'content' => '<h2>Get a rate for your shipment</h2>
<p>Share the details below and we will come back with an itemised quotation, transit time and the documents required.</p>
<h3>What to include</h3>
<ul>
<li>Mode: sea, air or road</li>
<li>Origin and destination (port, airport or door address)</li>
<li>Commodity, weight and dimensions or container type</li>
<li>Incoterms and target readiness date</li>
<li>Any special handling: temperature, hazardous, oversized</li>
</ul>
<p>Email <a href="mailto:Info@mslcolombo.com">Info@mslcolombo.com</a> or call <a href="tel:+94773738440">+94 77 373 8440</a>. Add a contact form plugin and drop its shortcode on this page to collect requests automatically.</p>',
		),
	);
}

/**
 * Child pages created under Services.
 *
 * @return array
 */
function msl_starter_service_children() {
	return array(
		array(
			'title'   => __( 'Sea Freight', 'msl-colombo' ),
			'slug'    => 'sea-freight',
			'content' => '<p>FCL, LCL and project cargo through Colombo Port with competitive carrier allocations on Asia, Middle East, Europe and East Africa lanes.</p>
<ul><li>Full and part container loads</li><li>Consolidation and deconsolidation</li><li>Customs clearance and documentation</li><li>Break-bulk and out-of-gauge handling</li></ul>',
		),
		array(
			'title'   => __( 'Air Freight', 'msl-colombo' ),
			'slug'    => 'air-freight',
			'content' => '<p>Time-critical consignments handled end to end from Bandaranaike International Airport, with direct, consolidated and charter options.</p>
<ul><li>Express and standard air services</li><li>Perishables and temperature-sensitive cargo</li><li>Dangerous goods handling</li><li>Airport-to-door delivery</li></ul>',
		),
		array(
			'title'   => __( 'Transport &amp; Distribution', 'msl-colombo' ),
			'slug'    => 'transport-distribution',
			'content' => '<p>Island-wide trucking, bonded and general warehousing, and last-mile delivery coordinated against your inbound schedule.</p>
<ul><li>Container haulage and general cargo trucking</li><li>Warehousing and inventory handling</li><li>Cross-docking and distribution runs</li><li>Last-mile delivery with proof of delivery</li></ul>',
		),
		array(
			'title'   => __( 'Printing Services', 'msl-colombo' ),
			'slug'    => 'printing-services',
			'content' => '<p>Our second business division produces the printed material your supply chain runs on — from shipping labels to retail-ready packaging.</p>
<ul><li>Labels, barcodes and carton marking</li><li>Packaging and corrugated print</li><li>Shipping and export documentation</li><li>Brochures, catalogues and marketing collateral</li></ul>',
		),
	);
}

/**
 * Create a page if a page with the slug does not already exist.
 *
 * @param array $args Page arguments.
 * @return int Page ID.
 */
function msl_create_starter_page( $args ) {
	$existing = get_page_by_path( $args['slug'], OBJECT, 'page' );
	if ( $existing ) {
		return (int) $existing->ID;
	}

	$page_id = wp_insert_post(
		array(
			'post_title'   => $args['title'],
			'post_name'    => $args['slug'],
			'post_content' => $args['content'],
			'post_status'  => 'publish',
			'post_type'    => 'page',
			'post_parent'  => isset( $args['parent'] ) ? (int) $args['parent'] : 0,
			'menu_order'   => isset( $args['order'] ) ? (int) $args['order'] : 0,
		)
	);

	return is_wp_error( $page_id ) ? 0 : (int) $page_id;
}

/**
 * Install demo pages, menu and reading settings on first activation.
 */
function msl_install_starter_content() {
	if ( get_option( 'msl_starter_content_installed' ) ) {
		return;
	}
	update_option( 'msl_starter_content_installed', 1 );

	$ids   = array();
	$order = 0;

	foreach ( msl_starter_pages() as $key => $page ) {
		$order++;
		$page['order'] = $order;
		$ids[ $key ]   = msl_create_starter_page( $page );
	}

	// Service detail pages.
	if ( ! empty( $ids['services'] ) ) {
		$child_order = 0;
		foreach ( msl_starter_service_children() as $child ) {
			$child_order++;
			$child['parent'] = $ids['services'];
			$child['order']  = $child_order;
			msl_create_starter_page( $child );
		}
		set_theme_mod( 'msl_services_parent', $ids['services'] );
	}

	// Static front page.
	if ( ! empty( $ids['home'] ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $ids['home'] );
	}

	// Quote button in the header.
	if ( ! empty( $ids['quote'] ) ) {
		set_theme_mod( 'msl_header_cta_url', get_permalink( $ids['quote'] ) );
	}

	msl_build_starter_menu( $ids );
}
add_action( 'after_switch_theme', 'msl_install_starter_content' );

/**
 * Build the primary menu from the starter pages.
 *
 * @param array $ids Map of key => page ID.
 */
function msl_build_starter_menu( $ids ) {
	$menu_name = __( 'Primary', 'msl-colombo' );
	$menu      = wp_get_nav_menu_object( $menu_name );

	if ( ! $menu ) {
		$menu_id = wp_create_nav_menu( $menu_name );
		if ( is_wp_error( $menu_id ) ) {
			return;
		}
	} else {
		$menu_id = (int) $menu->term_id;
		if ( wp_get_nav_menu_items( $menu_id ) ) {
			return; // Respect an existing menu.
		}
	}

	// Home first, then the rest of the top-level pages.
	$position = 0;

	if ( ! empty( $ids['home'] ) ) {
		$position++;
		wp_update_nav_menu_item(
			$menu_id,
			0,
			array(
				'menu-item-title'     => __( 'Home', 'msl-colombo' ),
				'menu-item-object'    => 'page',
				'menu-item-object-id' => $ids['home'],
				'menu-item-type'      => 'post_type',
				'menu-item-status'    => 'publish',
				'menu-item-position'  => $position,
			)
		);
	}

	$services_item_id = 0;

	foreach ( array( 'services', 'about', 'contact', 'quote' ) as $key ) {
		if ( empty( $ids[ $key ] ) ) {
			continue;
		}
		$position++;
		$item_id = wp_update_nav_menu_item(
			$menu_id,
			0,
			array(
				'menu-item-title'     => get_the_title( $ids[ $key ] ),
				'menu-item-object'    => 'page',
				'menu-item-object-id' => $ids[ $key ],
				'menu-item-type'      => 'post_type',
				'menu-item-status'    => 'publish',
				'menu-item-position'  => $position,
			)
		);
		if ( 'services' === $key && ! is_wp_error( $item_id ) ) {
			$services_item_id = (int) $item_id;
		}
	}

	// Nest the service detail pages (including Printing Services) under Services.
	if ( $services_item_id && ! empty( $ids['services'] ) ) {
		$children = get_pages(
			array(
				'child_of'    => $ids['services'],
				'sort_column' => 'menu_order',
			)
		);
		foreach ( $children as $child ) {
			$position++;
			wp_update_nav_menu_item(
				$menu_id,
				0,
				array(
					'menu-item-title'      => $child->post_title,
					'menu-item-object'     => 'page',
					'menu-item-object-id'  => $child->ID,
					'menu-item-type'       => 'post_type',
					'menu-item-status'     => 'publish',
					'menu-item-parent-id'  => $services_item_id,
					'menu-item-position'   => $position,
				)
			);
		}
	}

	$locations            = get_theme_mod( 'nav_menu_locations', array() );
	$locations['primary'] = $menu_id;
	set_theme_mod( 'nav_menu_locations', $locations );
}

/**
 * Admin notice confirming the demo content was installed.
 */
function msl_starter_content_notice() {
	if ( ! current_user_can( 'edit_theme_options' ) || ! get_option( 'msl_starter_content_installed' ) ) {
		return;
	}
	if ( get_option( 'msl_starter_notice_dismissed' ) ) {
		return;
	}
	update_option( 'msl_starter_notice_dismissed', 1 );
	echo '<div class="notice notice-success is-dismissible"><p>';
	echo esc_html__( 'MSL Colombo: starter pages (Home, Services, About, Contact, Quote) and the primary menu have been created. Edit them under Pages, then set your logo and colours in Appearance → Customize.', 'msl-colombo' );
	echo '</p></div>';
}
add_action( 'admin_notices', 'msl_starter_content_notice' );
