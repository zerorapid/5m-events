<?php
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
while ( have_posts() ) : the_post();
?>
<section class="page-hero">
  <div class="container">
    <?php fivem_breadcrumb( array( get_the_title() => '' ) ); ?>
    <h1><?php the_title(); ?></h1>
  </div>
</section>
<section>
  <div class="container" style="max-width: 900px;">
    <div class="entry-content"><?php the_content(); ?></div>
  </div>
</section>
<?php endwhile; ?>
<?php get_footer(); ?>
