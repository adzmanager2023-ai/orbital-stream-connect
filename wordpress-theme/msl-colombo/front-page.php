<?php
/**
 * Front page template.
 *
 * @package MSL_Colombo
 */

get_header();

$hero_eyebrow = get_theme_mod( 'msl_hero_eyebrow', __( 'Freight Forwarding · Sri Lanka', 'msl-colombo' ) );
$hero_title   = get_theme_mod( 'msl_hero_title', __( 'Global logistics meets intelligent digital infrastructure', 'msl-colombo' ) );
$hero_text    = get_theme_mod( 'msl_hero_text', __( 'MSL Colombo moves cargo by sea, air and road — supported by an in-house printing division and a team that treats every shipment as a commitment.', 'msl-colombo' ) );
$hero_image   = get_theme_mod( 'msl_hero_image', '' );
$cta_url      = get_theme_mod( 'msl_header_cta_url', '#contact' );
?>

<section class="msl-hero">
	<?php if ( $hero_image ) : ?>
		<div class="msl-hero__media" style="background-image:url('<?php echo esc_url( $hero_image ); ?>');"></div>
	<?php endif; ?>
	<div class="msl-container msl-hero__inner">
		<span class="msl-eyebrow"><?php echo esc_html( $hero_eyebrow ); ?></span>
		<h1><?php echo esc_html( $hero_title ); ?></h1>
		<p><?php echo esc_html( $hero_text ); ?></p>
		<div class="msl-hero__actions">
			<a class="msl-btn msl-btn--primary" href="<?php echo esc_url( $cta_url ); ?>"><?php esc_html_e( 'Request a Quote', 'msl-colombo' ); ?></a>
			<a class="msl-btn msl-btn--ghost" href="#services"><?php esc_html_e( 'Explore Services', 'msl-colombo' ); ?></a>
		</div>
	</div>
</section>

<main id="main">

	<?php
	// Services: pulls child pages of the page set as "Services", else static fallback.
	$services_parent = (int) get_theme_mod( 'msl_services_parent', 0 );
	$service_pages   = $services_parent ? get_pages( array( 'child_of' => $services_parent, 'sort_column' => 'menu_order' ) ) : array();
	?>
	<section id="services" class="msl-section">
		<div class="msl-container">
			<div class="msl-section__head msl-reveal">
				<span class="msl-eyebrow"><?php esc_html_e( 'What we do', 'msl-colombo' ); ?></span>
				<h2><?php esc_html_e( 'Four divisions, one operating standard', 'msl-colombo' ); ?></h2>
				<p><?php esc_html_e( 'From port to door, and from artwork to print — handled by specialists under one roof.', 'msl-colombo' ); ?></p>
			</div>

			<div class="msl-grid msl-grid--3">
				<?php if ( $service_pages ) : ?>
					<?php foreach ( $service_pages as $service_page ) : ?>
						<article class="msl-card msl-reveal">
							<?php if ( has_post_thumbnail( $service_page->ID ) ) : ?>
								<div class="msl-card__thumb">
									<a href="<?php echo esc_url( get_permalink( $service_page->ID ) ); ?>">
										<?php echo get_the_post_thumbnail( $service_page->ID, 'msl-card' ); ?>
									</a>
								</div>
							<?php endif; ?>
							<h3><a href="<?php echo esc_url( get_permalink( $service_page->ID ) ); ?>"><?php echo esc_html( get_the_title( $service_page->ID ) ); ?></a></h3>
							<p><?php echo esc_html( wp_trim_words( wp_strip_all_tags( $service_page->post_content ), 24 ) ); ?></p>
							<a class="msl-card__link" href="<?php echo esc_url( get_permalink( $service_page->ID ) ); ?>"><?php esc_html_e( 'View service', 'msl-colombo' ); ?> &rarr;</a>
						</article>
					<?php endforeach; ?>
				<?php else : ?>
					<?php
					$fallback = array(
						array( __( 'Sea Cargo', 'msl-colombo' ), __( 'FCL and LCL ocean freight with consolidation, documentation and port handling from Colombo to the world.', 'msl-colombo' ) ),
						array( __( 'Air Cargo', 'msl-colombo' ), __( 'Time-critical air freight with airline coordination, customs paperwork and door delivery.', 'msl-colombo' ) ),
						array( __( 'Transport', 'msl-colombo' ), __( 'Inland container haulage and distribution across Sri Lanka, tracked end to end.', 'msl-colombo' ) ),
						array( __( 'Printing Services', 'msl-colombo' ), __( 'Our second division: commercial printing, packaging and branded material produced in-house.', 'msl-colombo' ) ),
					);
					foreach ( $fallback as $item ) :
						?>
						<article class="msl-card msl-reveal">
							<h3><?php echo esc_html( $item[0] ); ?></h3>
							<p><?php echo esc_html( $item[1] ); ?></p>
						</article>
					<?php endforeach; ?>
				<?php endif; ?>
			</div>
		</div>
	</section>

	<?php
	// Optional editable intro from the front page content itself.
	if ( have_posts() ) :
		while ( have_posts() ) :
			the_post();
			if ( trim( get_the_content() ) ) :
				?>
				<section class="msl-section msl-section--muted">
					<div class="msl-container msl-entry__content msl-reveal">
						<?php the_content(); ?>
					</div>
				</section>
				<?php
			endif;
		endwhile;
	endif;
	?>

	<section id="contact" class="msl-section">
		<div class="msl-container">
			<div class="msl-cta msl-reveal">
				<div>
					<h2><?php esc_html_e( 'Have cargo to move?', 'msl-colombo' ); ?></h2>
					<p><?php esc_html_e( 'Tell us the route and the cargo — we will come back with a clear plan and price.', 'msl-colombo' ); ?></p>
				</div>
				<a class="msl-btn msl-btn--ghost" href="mailto:<?php echo esc_attr( get_theme_mod( 'msl_email', 'Info@mslcolombo.com' ) ); ?>">
					<?php esc_html_e( 'Talk to our team', 'msl-colombo' ); ?>
				</a>
			</div>
		</div>
	</section>

</main>

<?php
get_footer();
