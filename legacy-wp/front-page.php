<?php
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();

$services    = fivem_get_services();
$featured    = array( 'mice', 'corporate', 'weddings', 'launches', 'parties', 'concerts' );
$portfolio   = array_slice( fivem_get_portfolio(), 0, 3 );
$portfolio_all = fivem_get_portfolio();
$testimonials = fivem_get_testimonials();
$client_logos = fivem_get_client_logos();

$process_steps = array(
	array( '01', 'Discover', 'Understanding your vision' ),
	array( '02', 'Design', 'Creative concepts & 3D' ),
	array( '03', 'Plan', 'Timelines & logistics' ),
	array( '04', 'Produce', 'Stage fabrication' ),
	array( '05', 'Execute', 'Flawless on-site' ),
	array( '06', 'Celebrate', 'Post-event media' ),
);
?>

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Premier Event Management &middot; Hyderabad</span>
    <h1>Make moments that <em>move</em> people.</h1>
    <p style="font-size: 18px; color: #5a6b82; max-width: 700px; line-height: 1.8;">Step into experiences where imagination meets meticulous craft — stage by stage, light by light, story by story. 5M Events blends strategy, design, and flawless production to transform your vision into an unforgettable show.</p>
    <div style="margin-top: 40px; display: flex; gap: 20px; flex-wrap: wrap;">
      <button class="btn open-quote-popup" data-popup="quotePopup">Plan Your Event &rarr;</button>
      <a class="btn btn-outline" href="<?php echo esc_url( home_url( '/portfolio/' ) ); ?>">View Our Work</a>
    </div>
  </div>
</section>

<!-- React Mount Point -->
<div class="container" style="margin-top: 40px; margin-bottom: 40px;">
  <div id="react-root"></div>
</div>

<section>
  <div class="container">
    <div class="grid-3">
      <div class="card">
        <h4 style="font-family: 'Playfair Display', serif; font-size: 22px; margin-bottom: 15px;">Personable Team</h4>
        <p style="color: #5a6b82; font-size: 15px;">A friendly, detail-obsessed crew that listens first and plans with clarity — so your event feels uniquely yours.</p>
      </div>
      <div class="card">
        <h4 style="font-family: 'Playfair Display', serif; font-size: 22px; margin-bottom: 15px;">Unforgettable Experience</h4>
        <p style="color: #5a6b82; font-size: 15px;">From immersive décor and precision lighting to live entertainment — every element is designed to spark emotion.</p>
      </div>
      <div class="card">
        <h4 style="font-family: 'Playfair Display', serif; font-size: 22px; margin-bottom: 15px;">Top-Rated Venues</h4>
        <p style="color: #5a6b82; font-size: 15px;">Access a trusted network of premium hotels, convention centers, outdoor arenas, and boutique spaces.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="stats">
      <div><div class="stat-number">11+</div><div class="stat-label">Years Experience</div></div>
      <div><div class="stat-number">250+</div><div class="stat-label">Events Delivered</div></div>
      <div><div class="stat-number">500+</div><div class="stat-label">Happy Clients</div></div>
      <div><div class="stat-number">75+</div><div class="stat-label">Trusted Vendors</div></div>
    </div>
  </div>
</section>

<section class="client-logos">
  <div class="container">
    <span class="eyebrow" style="text-align: center; display: block; margin-bottom: 50px;">Trusted By Industry Leaders</span>
    <div class="client-logos-grid">
      <?php foreach ( $client_logos as $logo ) : ?>
        <div class="client-logo" style="padding: 20px;">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/client-placeholder.svg" alt="Client Logo Placeholder" style="max-height: 100%; max-width: 100%; object-fit: contain; opacity: 0.8; transition: opacity 0.3s ease;">
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section style="padding: 80px 0;">
  <div class="container">
    <span class="eyebrow">What We Do</span>
    <h2 style="margin-bottom: 20px;">Excellence in every moment.</h2>
    <p style="max-width: 700px; margin-bottom: 50px; color: #5a6b82; font-size: 16px;">From corporate summits to grand celebrations, we deliver end-to-end event solutions.</p>
    <div class="grid-3">
      <?php foreach ( $featured as $i => $slug ) : $s = $services[ $slug ]; ?>
        <div class="card">
          <div style="color: var(--gold); margin-bottom: 20px; display: inline-flex; background: var(--bg-card-alt); padding: 12px; border-radius: 10px; border: 1px solid var(--border-color);">
            <i data-lucide="<?php echo esc_attr( fivem_get_service_icon( $slug ) ); ?>" style="width: 24px; height: 24px;"></i>
          </div>
          <h3><?php echo esc_html( $s['name'] ); ?></h3>
          <p style="color: var(--text-secondary);"><?php echo esc_html( $s['tagline'] ); ?></p>
          <a href="<?php echo esc_url( home_url( '/services/' . $slug . '/' ) ); ?>" style="font-weight: 600; color: var(--gold);">Learn More &rarr;</a>
        </div>
      <?php endforeach; ?>
    </div>
    <div style="text-align: center; margin-top: 50px;">
      <a class="btn btn-outline" href="<?php echo esc_url( home_url( '/services/' ) ); ?>">View All Services &rarr;</a>
    </div>
  </div>
</section>

<section style="padding: 80px 0; background: linear-gradient(135deg, #f5f9fc 0%, #e8f4f8 100%);">
  <div class="container">
    <span class="eyebrow">Our Methodology</span>
    <h2 style="margin-bottom: 50px;">Six steps to an unforgettable event.</h2>
    <div class="grid-6">
      <?php foreach ( $process_steps as $step ) : ?>
        <div class="process-step">
          <div class="process-number"><?php echo esc_html( $step[0] ); ?></div>
          <h4 style="font-size: 18px;"><?php echo esc_html( $step[1] ); ?></h4>
          <p style="color: #5a6b82; font-size: 14px; margin: 0;"><?php echo esc_html( $step[2] ); ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section style="padding: 80px 0;">
  <div class="container">
    <span class="eyebrow">Our Work</span>
    <h2 style="margin-bottom: 50px;">A showcase of event excellence.</h2>
    <div class="grid-3">
      <?php foreach ( $portfolio as $item ) :
        $index = array_search( $item, $portfolio_all, true );
      ?>
        <button class="portfolio-item" data-popup="projectPopup<?php echo esc_attr( $index ); ?>">
          <img src="<?php echo esc_url( $item['image'] ); ?>" alt="<?php echo esc_attr( $item['title'] ); ?>">
        </button>
      <?php endforeach; ?>
    </div>
    <div style="text-align: center; margin-top: 50px;">
      <a class="btn btn-outline" href="<?php echo esc_url( home_url( '/portfolio/' ) ); ?>">View Full Portfolio &rarr;</a>
    </div>
  </div>
</section>

<section style="padding: 80px 0; background: linear-gradient(135deg, #f5f9fc 0%, #e8f4f8 100%);">
  <div class="container">
    <span class="eyebrow">Client Voices</span>
    <h2 style="margin-bottom: 50px;">What they say about us.</h2>
    <div style="display: flex; align-items: center; gap: 25px; margin-bottom: 50px;">
      <div style="font-family: 'Playfair Display', serif; font-size: 56px; font-weight: 700; color: #d4af37;">4.9</div>
      <div>
        <div style="color: #d4af37; font-size: 24px; letter-spacing: 3px;">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div style="font-size: 14px; color: #7f8c9a; font-weight: 600;">Based on 240+ verified reviews</div>
      </div>
    </div>
    <div class="grid-2">
      <?php foreach ( $testimonials as $t ) : ?>
        <div class="testimonial">
          <div class="quote">&ldquo;</div>
          <p style="font-size: 16px; color: #5a6b82; line-height: 1.8;"><?php echo esc_html( $t['quote'] ); ?></p>
          <div class="author">
            <div class="avatar"><?php echo esc_html( $t['initials'] ); ?></div>
            <div>
              <strong style="font-size: 16px; color: #2c3e50;"><?php echo esc_html( $t['name'] ); ?></strong>
              <div style="font-size: 13px; color: #7f8c9a;"><?php echo esc_html( $t['title'] ); ?></div>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="image-gallery-section">
  <div class="container">
    <span class="eyebrow" style="text-align: center; display: block; margin-bottom: 20px;">Visual Moments</span>
    <h2 style="text-align: center; margin-bottom: 50px;">Crafting sights that linger.</h2>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=500&fit=crop" alt="Spectacular Live Productions">
        <div class="gallery-caption">Spectacular Live Productions</div>
      </div>
      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop" alt="Corporate & M.I.C.E Summits">
        <div class="gallery-caption">Corporate & M.I.C.E Summits</div>
      </div>
      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=500&fit=crop" alt="Curated Luxury Weddings">
        <div class="gallery-caption">Curated Luxury Weddings</div>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Ready to plan your event?</h2>
    <p>Let's collaborate to make your next occasion extraordinary.</p>
    <button class="btn open-quote-popup" data-popup="quotePopup">Get Started &rarr;</button>
  </div>
</section>

<?php get_footer(); ?>
