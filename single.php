<?php
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();

while ( have_posts() ) : the_post();
	$cats = get_the_category();
	$recent = new WP_Query( array( 'posts_per_page' => 4, 'post__not_in' => array( get_the_ID() ), 'ignore_sticky_posts' => true ) );
	?>

	<section class="page-hero">
	  <div class="container">
	    <?php fivem_breadcrumb( array( 'Blog' => home_url( '/blog/' ), ( $cats ? $cats[0]->name : 'Post' ) => '' ) ); ?>
	    <h1 style="max-width: 850px; line-height: 1.25; margin-bottom: 20px; font-size: 2.8rem;"><?php the_title(); ?></h1>
	    <p style="color: var(--text-secondary); font-size: 15px; display: flex; align-items: center; gap: 8px;">
	      <i data-lucide="calendar" style="width: 16px; height: 16px; color: var(--gold);"></i>
	      <span><?php echo esc_html( get_the_date() ); ?></span>
	      <span style="opacity: 0.5;">&middot;</span>
	      <i data-lucide="user" style="width: 16px; height: 16px; color: var(--gold);"></i>
	      <span>By <?php the_author(); ?></span>
	    </p>
	  </div>
 	</section>

	<section>
	  <div class="container">
	    <div class="grid-2" style="grid-template-columns: 2.2fr 1fr; gap: 60px;">
	      <div>
	        <div style="background: var(--bg-card-alt); border: 1px solid var(--border-color); aspect-ratio: 16/9; border-radius: 20px; overflow: hidden; margin-bottom: 40px; box-shadow: var(--shadow-sm);">
	          <img src="<?php echo esc_url( fivem_get_post_image_url( get_the_ID() ) ); ?>" alt="<?php the_title_attribute(); ?>" style="width:100%;height:100%;object-fit:cover;">
	        </div>
	        <div class="entry-content" style="font-size: 17px; line-height: 1.8; color: var(--text-secondary);">
	          <?php the_content(); ?>
	        </div>
	      </div>

	      <div>
	        <div class="sidebar-box">
	          <h3 style="font-size: 22px; margin-bottom: 25px; border-bottom: 1.5px solid var(--border-color); padding-bottom: 15px;">Recent Posts</h3>
	          <ul>
	            <?php while ( $recent->have_posts() ) : $recent->the_post(); ?>
	              <li style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--border-color);">
	                <a href="<?php the_permalink(); ?>" style="color: var(--text-primary); font-weight: 600; display: block; line-height: 1.4; transition: color 0.3s ease;"><?php the_title(); ?></a>
	                <span style="font-size: 12px; color: var(--text-secondary); margin-top: 5px; display: block;"><?php echo esc_html( get_the_date() ); ?></span>
	              </li>
	            <?php endwhile; wp_reset_postdata(); ?>
	          </ul>
	        </div>
	        <div class="sidebar-box">
	          <h3 style="font-size: 22px; margin-bottom: 25px; border-bottom: 1.5px solid var(--border-color); padding-bottom: 15px;">Categories</h3>
	          <ul style="display: flex; flex-direction: column; gap: 12px;">
	            <?php foreach ( get_categories( array( 'hide_empty' => true ) ) as $cat ) : ?>
	              <li><a href="<?php echo esc_url( get_category_link( $cat ) ); ?>" style="color: var(--text-secondary); display: flex; justify-content: space-between; align-items: center; transition: color 0.3s ease;"><span><?php echo esc_html( $cat->name ); ?></span> <span style="background: var(--bg-card-alt); font-size: 11px; padding: 4px 8px; border-radius: 6px; border: 1px solid var(--border-color);"><?php echo esc_html( $cat->count ); ?></span></a></li>
	            <?php endforeach; ?>
	          </ul>
	        </div>
	        <div class="sidebar-box">
	          <h3 style="font-size: 22px; margin-bottom: 25px; border-bottom: 1.5px solid var(--border-color); padding-bottom: 15px;">Subscribe</h3>
	          <p style="color: var(--text-secondary); font-size: 14px; margin-bottom: 20px; line-height: 1.6;">Get the latest insights delivered to your inbox.</p>
	          <form method="post" action="<?php echo esc_url( admin_url( 'admin-ajax.php' ) ); ?>">
	            <div class="form-group"><input type="email" name="email" placeholder="Your email" required></div>
	            <button type="submit" class="btn" style="width: 100%;">Subscribe</button>
	          </form>
	        </div>
	      </div>
	    </div>
	  </div>
	</section>

<?php endwhile; ?>

<?php get_footer(); ?>
