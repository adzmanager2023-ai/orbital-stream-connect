<?php
/**
 * Footer template.
 *
 * @package MSL_Colombo
 */

$msl_phone   = get_theme_mod( 'msl_phone', '+94 77 373 8440' );
$msl_email   = get_theme_mod( 'msl_email', 'Info@mslcolombo.com' );
$msl_address = get_theme_mod( 'msl_address', 'Moratuwa, Sri Lanka' );
?>

<footer class="msl-footer">
	<div class="msl-container">
		<div class="msl-footer__grid">
			<div>
				<?php msl_brand(); ?>
				<p style="margin-top:1rem;max-width:34ch;">
					<?php echo esc_html( get_theme_mod( 'msl_footer_blurb', __( 'Sea cargo, air cargo, transport and printing services delivered with intelligent digital infrastructure.', 'msl-colombo' ) ) ); ?>
				</p>
			</div>

			<div>
				<h4><?php esc_html_e( 'Navigate', 'msl-colombo' ); ?></h4>
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'footer',
						'container'      => false,
						'depth'          => 1,
						'fallback_cb'    => 'msl_fallback_menu',
					)
				);
				?>
			</div>

			<div>
				<h4><?php esc_html_e( 'Contact', 'msl-colombo' ); ?></h4>
				<ul>
					<li><a href="tel:<?php echo esc_attr( preg_replace( '/\s+/', '', $msl_phone ) ); ?>"><?php echo esc_html( $msl_phone ); ?></a></li>
					<li><a href="mailto:<?php echo esc_attr( $msl_email ); ?>"><?php echo esc_html( $msl_email ); ?></a></li>
					<li><?php echo esc_html( $msl_address ); ?></li>
				</ul>
			</div>
		</div>

		<div class="msl-footer__bottom">
			<span>&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved.', 'msl-colombo' ); ?></span>
			<span><?php esc_html_e( 'Sea Cargo · Air Cargo · Transport · Printing Services', 'msl-colombo' ); ?></span>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
