<?php
/**
 * Index file.
 *
 * @package Gore
 */

get_header();

$args = array(
	'post_type' => 'post',
	'posts_per_page' => 10,
);

$query_args = new WP_Query( $args );
?>
<article>
<?php
if ( $query_args->have_posts() ) :

	while ( $query_args->have_posts() ) : $query_args->the_post();

		get_template_part( 'template-parts/content', get_post_format() );

	endwhile;
endif;

?>

<button>Load More</button>
</article>

<?php
get_footer();
?>

