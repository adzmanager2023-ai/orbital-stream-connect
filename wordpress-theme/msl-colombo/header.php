<?php
/**
 * Header template.
 *
 * @package MSL_Colombo
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'msl-colombo' ); ?></a>

<header class="msl-header">
	<div class="msl-container msl-header__inner">
		<?php msl_brand(); ?>

		<nav class="msl-nav" id="msl-primary-nav" aria-label="<?php esc_attr_e( 'Primary', 'msl-colombo' ); ?>">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'container'      => false,
					'depth'          => 2,
					'fallback_cb'    => 'msl_fallback_menu',
				)
			);
			?>
		</nav>

		<div class="msl-header__actions">
			<?php
			$cta_text = get_theme_mod( 'msl_header_cta_text', __( 'Request a Quote', 'msl-colombo' ) );
			$cta_url  = get_theme_mod( 'msl_header_cta_url', '#contact' );
			if ( $cta_text ) :
				?>
				<a class="msl-btn msl-btn--primary" href="<?php echo esc_url( $cta_url ); ?>"><?php echo esc_html( $cta_text ); ?></a>
			<?php endif; ?>

			<button class="msl-menu-toggle" aria-expanded="false" aria-controls="msl-primary-nav">
				<?php esc_html_e( 'Menu', 'msl-colombo' ); ?>
			</button>
		</div>
	</div>
</header>
