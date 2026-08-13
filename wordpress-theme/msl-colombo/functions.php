<?php
/**
 * MSL Colombo theme functions.
 *
 * @package MSL_Colombo
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'MSL_VERSION', '2.0.0' );

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
			'height'      => 300,
			'width'       => 620,
			'flex-height' => true,
			'flex-width'  => true,
		)
	);

	register_nav_menus(
		array(
			'primary' => __( 'Primary Menu', 'msl-colombo' ),
		)
	);
}
add_action( 'after_setup_theme', 'msl_setup' );

/**
 * Content width.
 */
function msl_content_width() {
	$GLOBALS['content_width'] = 1400;
}
add_action( 'after_setup_theme', 'msl_content_width', 0 );

/**
 * Enqueue styles and scripts.
 */
function msl_scripts() {
	wp_enqueue_style(
		'msl-fonts',
		'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap',
		array(),
		null
	);

	wp_enqueue_style( 'msl-style', get_stylesheet_uri(), array( 'msl-fonts' ), MSL_VERSION );
	wp_enqueue_script( 'msl-main', get_template_directory_uri() . '/assets/js/main.js', array(), MSL_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	$accent = get_theme_mod( 'msl_accent_color', '#6f73d2' );
	$navy   = get_theme_mod( 'msl_primary_color', '#25265f' );
	wp_add_inline_style( 'msl-style', ':root{--accent:' . esc_attr( $accent ) . ';--primary:' . esc_attr( $navy ) . ';--navy:' . esc_attr( $navy ) . ';}' );
}
add_action( 'wp_enqueue_scripts', 'msl_scripts' );

/* ---------------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------------- */

/**
 * Theme image URL.
 *
 * @param string $file File name inside assets/img.
 * @return string
 */
function msl_img( $file ) {
	return get_template_directory_uri() . '/assets/img/' . $file;
}

/**
 * Contact details from the Customizer.
 *
 * @param string $key phone|phone_link|email|address.
 * @return string
 */
function msl_contact( $key ) {
	$defaults = array(
		'phone'      => '+94 77 373 8440',
		'phone_link' => '+94773738440',
		'email'      => 'info@mslcolombo.com',
		'address'    => 'Moratuwa, Sri Lanka',
	);

	$value = get_theme_mod( 'msl_' . $key, isset( $defaults[ $key ] ) ? $defaults[ $key ] : '' );

	if ( 'phone_link' === $key ) {
		$value = preg_replace( '/[^0-9+]/', '', get_theme_mod( 'msl_phone', $defaults['phone'] ) );
	}

	return $value;
}

/**
 * Permalink for a page by its slug, with a home fallback.
 *
 * @param string $slug Page slug.
 * @return string
 */
function msl_url( $slug ) {
	$page = get_page_by_path( $slug );
	return $page ? get_permalink( $page->ID ) : home_url( '/' . $slug . '/' );
}

/**
 * Quote link (contact page + #quote).
 *
 * @return string
 */
function msl_quote_url() {
	return msl_url( 'contact-us' ) . '#quote';
}

/**
 * Inline arrow icon.
 *
 * @param string $type right|down|up-right|check|chevron|menu.
 * @param string $class CSS class.
 */
function msl_icon( $type = 'right', $class = '' ) {
	$paths = array(
		'right'    => '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
		'down'     => '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
		'up-right' => '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
		'check'    => '<path d="M20 6 9 17l-5-5"/>',
		'chevron'  => '<path d="m6 9 6 6 6-6"/>',
		'menu'     => '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
		'close'    => '<path d="M18 6 6 18"/><path d="M6 6l12 12"/>',
	);

	$d = isset( $paths[ $type ] ) ? $paths[ $type ] : $paths['right'];

	echo '<svg class="' . esc_attr( $class ) . '" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' . $d . '</svg>'; // phpcs:ignore WordPress.Security.EscapeOutput
}

/**
 * Decorative animated logistics network.
 *
 * @param string $class CSS class.
 */
function msl_route_map( $class = '' ) {
	$nodes = array(
		array( 120, 150 ),
		array( 300, 110 ),
		array( 430, 190 ),
		array( 585, 130 ),
		array( 700, 215 ),
		array( 845, 160 ),
		array( 520, 275 ),
		array( 245, 250 ),
	);

	$paths = array(
		'M120 150 C 210 90, 250 90, 300 110',
		'M300 110 C 360 130, 390 170, 430 190',
		'M430 190 C 500 140, 540 120, 585 130',
		'M585 130 C 640 160, 660 195, 700 215',
		'M700 215 C 760 200, 800 170, 845 160',
		'M245 250 C 350 300, 450 300, 520 275',
		'M520 275 C 580 260, 640 240, 700 215',
		'M120 150 C 140 200, 190 235, 245 250',
	);

	$uid = wp_unique_id( 'routeGrad-' );
	?>
	<svg viewBox="0 0 960 380" class="<?php echo esc_attr( $class ); ?>" role="img" aria-label="<?php esc_attr_e( 'Decorative illustration of a connected logistics network', 'msl-colombo' ); ?>">
		<defs>
			<linearGradient id="<?php echo esc_attr( $uid ); ?>" x1="0" x2="1">
				<stop offset="0%" stop-color="var(--accent)" stop-opacity="0.15" />
				<stop offset="50%" stop-color="var(--accent)" stop-opacity="0.9" />
				<stop offset="100%" stop-color="var(--accent)" stop-opacity="0.15" />
			</linearGradient>
		</defs>
		<?php foreach ( $paths as $i => $d ) : ?>
			<g>
				<path d="<?php echo esc_attr( $d ); ?>" fill="none" stroke="var(--hairline-navy)" stroke-width="1" />
				<path d="<?php echo esc_attr( $d ); ?>" fill="none" stroke="url(#<?php echo esc_attr( $uid ); ?>)" stroke-width="1.6" stroke-dasharray="26 174"
					style="animation: dash <?php echo esc_attr( 7 + $i ); ?>s linear infinite; animation-delay: <?php echo esc_attr( $i * -0.9 ); ?>s;" />
			</g>
		<?php endforeach; ?>
		<?php foreach ( $nodes as $i => $n ) : ?>
			<g>
				<circle cx="<?php echo esc_attr( $n[0] ); ?>" cy="<?php echo esc_attr( $n[1] ); ?>" r="3.5" fill="var(--accent)" opacity="0.5" class="node-ping"
					style="transform-origin: <?php echo esc_attr( $n[0] ); ?>px <?php echo esc_attr( $n[1] ); ?>px; animation-delay: <?php echo esc_attr( $i * 0.45 ); ?>s;" />
				<circle cx="<?php echo esc_attr( $n[0] ); ?>" cy="<?php echo esc_attr( $n[1] ); ?>" r="3" fill="var(--on-navy)" />
			</g>
		<?php endforeach; ?>
	</svg>
	<?php
}

/**
 * Interior page hero.
 *
 * @param array $args eyebrow,title,subtitle,image,alt.
 */
function msl_page_hero( $args ) {
	$args = wp_parse_args(
		$args,
		array(
			'eyebrow'  => '',
			'title'    => '',
			'subtitle' => '',
			'image'    => msl_img( 'hero-port.jpg' ),
			'alt'      => '',
		)
	);
	?>
	<section class="page-hero">
		<img class="hero__img" src="<?php echo esc_url( $args['image'] ); ?>" alt="<?php echo esc_attr( $args['alt'] ); ?>" width="1920" height="1080" />
		<span class="page-hero__scrim" aria-hidden="true"></span>
		<span class="hero__grid grid-tech op-70" aria-hidden="true"></span>
		<div class="wrap inner" style="padding-bottom:4rem;">
			<p class="eyebrow t-accent reveal"><?php echo esc_html( $args['eyebrow'] ); ?></p>
			<h1 class="display-2 mt-5 maxw-3xl t-on-navy reveal" data-delay="90"><?php echo esc_html( $args['title'] ); ?></h1>
			<?php if ( $args['subtitle'] ) : ?>
				<p class="lede mt-6 maxw-xl t-on-navy-muted reveal" data-delay="170"><?php echo esc_html( $args['subtitle'] ); ?></p>
			<?php endif; ?>
		</div>
	</section>
	<?php
}

/**
 * Service panel card.
 *
 * @param array $item index,title,description,image,alt,slug.
 * @param int   $delay Reveal delay.
 */
function msl_service_panel( $item, $delay = 0 ) {
	?>
	<article class="reveal" data-delay="<?php echo esc_attr( $delay ); ?>">
		<a class="service-panel" href="<?php echo esc_url( msl_url( $item['slug'] ) ); ?>">
			<div class="service-panel__media">
				<img src="<?php echo esc_url( $item['image'] ); ?>" alt="<?php echo esc_attr( $item['alt'] ); ?>" width="1280" height="960" loading="lazy" />
				<span class="service-panel__scrim" aria-hidden="true"></span>
				<svg viewBox="0 0 400 300" class="service-panel__route" aria-hidden="true" preserveAspectRatio="none">
					<path d="M20 250 C 130 180, 250 210, 380 60" fill="none" stroke="var(--accent)" stroke-width="1.4" stroke-dasharray="8 8" class="animate-dash" />
					<circle cx="380" cy="60" r="4" fill="var(--accent)" />
				</svg>
				<span class="eyebrow service-panel__index"><?php echo esc_html( $item['index'] ); ?></span>
			</div>
			<div class="service-panel__body">
				<h3><?php echo esc_html( $item['title'] ); ?></h3>
				<p class="small mt-4 t-on-navy-muted"><?php echo esc_html( $item['description'] ); ?></p>
				<span class="eyebrow service-panel__cta"><?php esc_html_e( 'Explore', 'msl-colombo' ); ?><?php msl_icon( 'right' ); ?></span>
			</div>
		</a>
	</article>
	<?php
}

/**
 * The three core services.
 *
 * @return array
 */
function msl_services() {
	return array(
		array(
			'index'       => '01',
			'title'       => __( 'Sea Cargo', 'msl-colombo' ),
			'description' => __( 'Professional sea freight and cargo coordination for reliable movement of goods.', 'msl-colombo' ),
			'image'       => msl_img( 'sea-cargo.jpg' ),
			'alt'         => __( 'Container vessel loaded with cargo at sea', 'msl-colombo' ),
			'slug'        => 'sea-cargo',
		),
		array(
			'index'       => '02',
			'title'       => __( 'Air Cargo', 'msl-colombo' ),
			'description' => __( 'Efficient air freight solutions for time-sensitive business requirements.', 'msl-colombo' ),
			'image'       => msl_img( 'air-cargo.jpg' ),
			'alt'         => __( 'Cargo aircraft being loaded on the apron at night', 'msl-colombo' ),
			'slug'        => 'air-cargo',
		),
		array(
			'index'       => '03',
			'title'       => __( 'Transport', 'msl-colombo' ),
			'description' => __( 'Reliable transportation solutions for moving cargo efficiently between destinations.', 'msl-colombo' ),
			'image'       => msl_img( 'transport.jpg' ),
			'alt'         => __( 'Logistics truck moving on a highway at dusk', 'msl-colombo' ),
			'slug'        => 'transport',
		),
	);
}

/**
 * Closing CTA band.
 */
function msl_cta_band() {
	?>
	<section class="cta-band">
		<span class="layer grid-tech op-60" aria-hidden="true"></span>
		<?php msl_route_map( 'layer' ); ?>
		<span class="glow-blob" style="right:0;bottom:-10rem;height:24rem;width:24rem;" aria-hidden="true"></span>
		<div class="wrap">
			<div class="cta-band__inner">
				<div class="reveal">
					<p class="eyebrow t-accent"><?php esc_html_e( 'Next Step', 'msl-colombo' ); ?></p>
					<h2 class="display-2 mt-5 maxw-2xl t-on-navy"><?php esc_html_e( 'Tell us what needs moving.', 'msl-colombo' ); ?></h2>
				</div>
				<div class="reveal" data-delay="120">
					<a class="btn btn--ghost-accent" href="<?php echo esc_url( msl_quote_url() ); ?>">
						<?php esc_html_e( 'Request a Quote', 'msl-colombo' ); ?><?php msl_icon( 'right' ); ?>
					</a>
				</div>
			</div>
		</div>
	</section>
	<?php
}

/**
 * Pagination.
 */
function msl_pagination() {
	$links = paginate_links( array( 'type' => 'array' ) );
	if ( ! $links ) {
		return;
	}
	echo '<nav class="pagination" aria-label="' . esc_attr__( 'Posts navigation', 'msl-colombo' ) . '">';
	foreach ( $links as $link ) {
		echo wp_kses_post( $link );
	}
	echo '</nav>';
}

add_filter( 'excerpt_more', function () { return '&hellip;'; } );
add_filter( 'excerpt_length', function () { return 26; }, 999 );

require_once get_template_directory() . '/inc/customizer.php';
require_once get_template_directory() . '/inc/starter-content.php';
require_once get_template_directory() . '/inc/contact-form.php';
