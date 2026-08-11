<?php
/**
 * Main template file.
 *
 * @package MSL_Colombo
 */

get_header();
?>

<section class="msl-page-hero">
	<div class="msl-container">
		<span class="msl-eyebrow"><?php esc_html_e( 'MSL Colombo', 'msl-colombo' ); ?></span>
		<h1>
			<?php
			if ( is_home() && ! is_front_page() ) {
				single_post_title();
			} elseif ( is_archive() ) {
				the_archive_title();
			} elseif ( is_search() ) {
				printf( esc_html__( 'Results for "%s"', 'msl-colombo' ), esc_html( get_search_query() ) );
			} else {
				esc_html_e( 'Insights & Updates', 'msl-colombo' );
			}
			?>
		</h1>
		<p><?php esc_html_e( 'Global logistics meets intelligent digital infrastructure.', 'msl-colombo' ); ?></p>
	</div>
</section>

<main id="main" class="msl-section">
	<div class="msl-container">
		<?php if ( have_posts() ) : ?>
			<div class="msl-grid msl-grid--3">
				<?php
				while ( have_posts() ) :
					the_post();
					?>
					<article id="post-<?php the_ID(); ?>" <?php post_class( 'msl-card msl-reveal' ); ?>>
						<?php if ( has_post_thumbnail() ) : ?>
							<div class="msl-card__thumb">
								<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'msl-card' ); ?></a>
							</div>
						<?php endif; ?>
						<p class="msl-entry__meta"><?php echo esc_html( get_the_date() ); ?></p>
						<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
						<p><?php echo esc_html( get_the_excerpt() ); ?></p>
						<a class="msl-card__link" href="<?php the_permalink(); ?>"><?php esc_html_e( 'Read more', 'msl-colombo' ); ?> &rarr;</a>
					</article>
					<?php
				endwhile;
				?>
			</div>
			<?php msl_pagination(); ?>
		<?php else : ?>
			<h2><?php esc_html_e( 'Nothing found', 'msl-colombo' ); ?></h2>
			<p><?php esc_html_e( 'Try a different search or head back to the homepage.', 'msl-colombo' ); ?></p>
			<?php get_search_form(); ?>
		<?php endif; ?>
	</div>
</main>

<?php
get_footer();
