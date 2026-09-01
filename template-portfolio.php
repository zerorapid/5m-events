<?php
/* Template Name: Portfolio Page */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();

$portfolio  = fivem_get_portfolio();
$categories = fivem_get_portfolio_categories();
$client_logos = fivem_get_client_logos();
?>

<section class="page-hero">
  <div class="container">
    <?php fivem_breadcrumb( array( 'Portfolio' => '' ) ); ?>
    <h1>Our Portfolio</h1>
    <p style="font-size: 20px; color: #5a6b82;">A showcase of event excellence.</p>
  </div>
</section>

<section class="client-logos">
  <div class="container">
    <span class="eyebrow" style="text-align: center; display: block; margin-bottom: 50px;">Our Valued Clients</span>
    <div class="client-logos-grid">
      <?php foreach ( $client_logos as $logo ) : ?>
        <div class="client-logo"><?php echo wp_kses_post( $logo ); ?></div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="filters">
      <?php foreach ( $categories as $key => $label ) : ?>
        <button class="filter-btn<?php echo $key === 'all' ? ' active' : ''; ?>" data-filter="<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $label ); ?></button>
      <?php endforeach; ?>
    </div>

    <div class="grid-3" id="portfolioGrid">
      <?php foreach ( $portfolio as $index => $item ) : ?>
        <button class="portfolio-item" data-category="<?php echo esc_attr( $item['category'] ); ?>" data-popup="projectPopup<?php echo esc_attr( $index ); ?>">
          <img src="<?php echo esc_url( $item['image'] ); ?>" alt="<?php echo esc_attr( $item['title'] ); ?>">
        </button>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Want to see your event here?</h2>
    <p>Let's create something extraordinary together.</p>
    <button class="btn open-quote-popup" data-popup="quotePopup">Start Planning &rarr;</button>
  </div>
</section>

<?php get_footer(); ?>
