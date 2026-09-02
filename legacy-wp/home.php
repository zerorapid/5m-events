<?php
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>

<section class="page-hero">
  <div class="container">
    <?php fivem_breadcrumb( array( 'Blog' => '' ) ); ?>
    <h1>Our Blog</h1>
    <p style="font-size: 20px; color: var(--text-secondary); max-width: 600px; line-height: 1.8;">Insights, trends, and stories from the world of events</p>
  </div>
</section>

<section>
  <div class="container">
    <?php if ( have_posts() ) : ?>
      <div class="grid-2">
        <?php while ( have_posts() ) : the_post(); ?>
          <div class="blog-card">
            <a href="<?php the_permalink(); ?>" class="blog-image">
              <img src="<?php echo esc_url( fivem_get_post_image_url( get_the_ID() ) ); ?>" alt="<?php the_title_attribute(); ?>">
            </a>
            <div class="blog-content">
              <div class="blog-meta">
                <?php $cats = get_the_category(); ?>
                <span class="blog-category"><?php echo $cats ? esc_html( $cats[0]->name ) : 'Events'; ?></span>
                <span><?php echo esc_html( get_the_date() ); ?></span>
              </div>
              <h3 style="font-size: 24px; margin-bottom: 15px;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
              <p style="color: #5a6b82; font-size: 15px; line-height: 1.7;"><?php echo esc_html( wp_trim_words( get_the_excerpt(), 22 ) ); ?></p>
              <a href="<?php the_permalink(); ?>" class="read-more">Read More &rarr;</a>
            </div>
          </div>
        <?php endwhile; ?>
      </div>

      <div class="pagination">
        <?php
        echo paginate_links( array(
          'prev_text' => '&larr; Previous',
          'next_text' => 'Next &rarr;',
        ) );
        ?>
      </div>
    <?php else : ?>
      <p style="color: #5a6b82;">No blog posts yet. Add your first post from the WordPress admin.</p>
    <?php endif; ?>
  </div>
</section>

<?php get_footer(); ?>
