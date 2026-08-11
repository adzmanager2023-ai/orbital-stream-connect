<?php
/**
 * Single page template.
 *
 * @package MSL_Colombo
 */

get_header();

while ( have_posts() ) :
	the_post();
	?>
	<section class="msl-page-hero">
		<div class="msl-container">
			<span class="msl-eyebrow"><?php esc_html_e( 'MSL Colombo', 'msl-colombo' ); ?></span>
			<h1><?php the_title(); ?></h1>
		</div>
	</section>

	<main id="main" class="msl-entry">
		<div class="msl-container">
			<?php if ( has_post_thumbnail() ) : ?>
				<div class="msl-entry__thumb"><?php the_post_thumbnail( 'full' ); ?></div>
			<?php endif; ?>
			<div class="msl-entry__content">
				<?php
				the_content();
				wp_link_pages();
				?>
			</div>
			<?php
			if ( comments_open() || get_comments_number() ) {
				comments_template();
			}
			?>
		</div>
	</main>
	<?php
endwhile;

get_footer();
