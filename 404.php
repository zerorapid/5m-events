<?php
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>
<section class="page-hero">
  <div class="container">
    <h1>Page Not Found</h1>
    <p style="font-size: 18px; color: #5a6b82;">Sorry, the page you're looking for doesn't exist. It may have moved, or the link may be broken.</p>
    <div style="margin-top: 30px;">
      <a class="btn" href="<?php echo esc_url( home_url( '/' ) ); ?>">Back to Home &rarr;</a>
    </div>
  </div>
</section>
<?php get_footer(); ?>
