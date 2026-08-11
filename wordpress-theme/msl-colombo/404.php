<?php
/**
 * 404 template.
 *
 * @package MSL_Colombo
 */

get_header();
?>
<section class="msl-page-hero">
	<div class="msl-container">
		<span class="msl-eyebrow">404</span>
		<h1><?php esc_html_e( 'Route not found', 'msl-colombo' ); ?></h1>
		<p><?php esc_html_e( 'This page has left the port. Try a search or return home.', 'msl-colombo' ); ?></p>
	</div>
</section>

<main id="main" class="msl-section">
	<div class="msl-container">
		<?php get_search_form(); ?>
		<p style="margin-top:2rem;"><a class="msl-btn msl-btn--primary" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Back to homepage', 'msl-colombo' ); ?></a></p>
	</div>
</main>
<?php
get_footer();
