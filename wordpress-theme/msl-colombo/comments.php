<?php
/**
 * Comments template.
 *
 * @package MSL_Colombo
 */

if ( post_password_required() ) {
	return;
}
?>
<div id="comments" class="msl-comments" style="margin-top:3rem;">
	<?php if ( have_comments() ) : ?>
		<h3><?php echo esc_html( get_the_title() ); ?> &mdash; <?php comments_number(); ?></h3>
		<ol class="comment-list" style="list-style:none;padding:0;">
			<?php
			wp_list_comments(
				array(
					'style'      => 'ol',
					'short_ping' => true,
					'avatar_size' => 48,
				)
			);
			?>
		</ol>
		<?php the_comments_pagination(); ?>
	<?php endif; ?>

	<?php comment_form(); ?>
</div>
