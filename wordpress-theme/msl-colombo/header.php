<?php
/**
 * Header template.
 *
 * @package MSL_Colombo
 */

$msl_services_nav = array(
	'sea-cargo'         => __( 'Sea Cargo', 'msl-colombo' ),
	'air-cargo'         => __( 'Air Cargo', 'msl-colombo' ),
	'transport'         => __( 'Transport', 'msl-colombo' ),
	'printing-services' => __( 'Printing Services', 'msl-colombo' ),
);
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'msl-colombo' ); ?></a>

<header class="site-header" id="msl-header">
	<div class="wrap header-bar">
		<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="<?php esc_attr_e( 'MSL Colombo Home', 'msl-colombo' ); ?>">
			<?php
			if ( has_custom_logo() ) {
				$msl_logo_id = get_theme_mod( 'custom_logo' );
				echo wp_get_attachment_image( $msl_logo_id, 'full', false, array( 'alt' => esc_attr( get_bloginfo( 'name' ) ) ) );
			} else {
				?>
				<img src="<?php echo esc_url( msl_img( 'msl-logo.png' ) ); ?>" alt="<?php esc_attr_e( 'MSL Colombo logo', 'msl-colombo' ); ?>" width="620" height="300" />
				<?php
			}
			?>
		</a>

		<nav class="nav-desktop" aria-label="<?php esc_attr_e( 'Main', 'msl-colombo' ); ?>">
			<a class="nav-link<?php echo is_front_page() ? ' is-current' : ''; ?>" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Home', 'msl-colombo' ); ?></a>
			<a class="nav-link" href="<?php echo esc_url( msl_url( 'about-us' ) ); ?>"><?php esc_html_e( 'About Us', 'msl-colombo' ); ?></a>

			<div class="has-drop">
				<a class="nav-link" href="<?php echo esc_url( msl_url( 'services' ) ); ?>" aria-haspopup="true">
					<?php esc_html_e( 'Services', 'msl-colombo' ); ?><?php msl_icon( 'chevron', 'chev' ); ?>
				</a>
				<div class="drop">
					<div class="drop-inner">
						<p class="eyebrow drop-label"><?php esc_html_e( 'Our Divisions', 'msl-colombo' ); ?></p>
						<?php foreach ( $msl_services_nav as $msl_slug => $msl_label ) : ?>
							<a href="<?php echo esc_url( msl_url( $msl_slug ) ); ?>">
								<span><?php echo esc_html( $msl_label ); ?></span><?php msl_icon( 'up-right' ); ?>
							</a>
						<?php endforeach; ?>
					</div>
				</div>
			</div>

			<a class="nav-link" href="<?php echo esc_url( msl_url( 'contact-us' ) ); ?>"><?php esc_html_e( 'Contact Us', 'msl-colombo' ); ?></a>
		</nav>

		<div class="header-actions">
			<a class="btn btn--accent header-cta" href="<?php echo esc_url( msl_quote_url() ); ?>">
				<?php esc_html_e( 'Get a Quote', 'msl-colombo' ); ?><?php msl_icon( 'right' ); ?>
			</a>
			<button class="menu-toggle" id="msl-menu-toggle" aria-expanded="false" aria-controls="msl-mobile" aria-label="<?php esc_attr_e( 'Toggle menu', 'msl-colombo' ); ?>">
				<?php msl_icon( 'menu' ); ?>
			</button>
		</div>
	</div>

	<div class="mobile-panel" id="msl-mobile">
		<div class="wrap">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Home', 'msl-colombo' ); ?></a>
			<a href="<?php echo esc_url( msl_url( 'about-us' ) ); ?>"><?php esc_html_e( 'About Us', 'msl-colombo' ); ?></a>
			<a href="<?php echo esc_url( msl_url( 'services' ) ); ?>"><?php esc_html_e( 'Services', 'msl-colombo' ); ?></a>
			<div class="sub">
				<?php foreach ( $msl_services_nav as $msl_slug => $msl_label ) : ?>
					<a href="<?php echo esc_url( msl_url( $msl_slug ) ); ?>"><?php echo esc_html( $msl_label ); ?></a>
				<?php endforeach; ?>
			</div>
			<a href="<?php echo esc_url( msl_url( 'contact-us' ) ); ?>"><?php esc_html_e( 'Contact Us', 'msl-colombo' ); ?></a>
			<a class="btn btn--accent" style="margin-top:1.5rem;width:100%;" href="<?php echo esc_url( msl_quote_url() ); ?>">
				<?php esc_html_e( 'Get a Quote', 'msl-colombo' ); ?><?php msl_icon( 'right' ); ?>
			</a>
		</div>
	</div>
</header>

<main id="main">
