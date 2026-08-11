<?php
/**
 * Search form.
 *
 * @package MSL_Colombo
 */
?>
<form role="search" method="get" class="msl-search" action="<?php echo esc_url( home_url( '/' ) ); ?>" style="display:flex;gap:10px;flex-wrap:wrap;">
	<label class="screen-reader-text" for="msl-s"><?php esc_html_e( 'Search for:', 'msl-colombo' ); ?></label>
	<input type="search" id="msl-s" name="s" value="<?php echo esc_attr( get_search_query() ); ?>"
		placeholder="<?php esc_attr_e( 'Search…', 'msl-colombo' ); ?>"
		style="flex:1 1 260px;padding:.85rem 1.1rem;border:1px solid var(--msl-border);border-radius:999px;font:inherit;">
	<button type="submit" class="msl-btn msl-btn--primary"><?php esc_html_e( 'Search', 'msl-colombo' ); ?></button>
</form>
