<?php
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>
<section style="padding: 80px 0;">
  <div class="container">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <article style="margin-bottom: 40px;">
        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <div class="entry-content"><?php the_excerpt(); ?></div>
      </article>
    <?php endwhile; else : ?>
      <p>Nothing found.</p>
    <?php endif; ?>
  </div>
</section>
<?php get_footer(); ?>
