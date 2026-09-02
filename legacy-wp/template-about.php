<?php
/* Template Name: About Page */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();

$timeline = fivem_get_timeline();
$values = array( 'Creativity', 'Excellence', 'Innovation', 'Integrity', 'Collaboration', 'Reliability', 'Transparency', 'Customer Satisfaction', 'Attention to Detail', 'Continuous Improvement' );
$approach = array(
	array( 'Strategy First', 'Clear objectives, audience insights, and format design to align the event with business and emotional outcomes.' ),
	array( 'Design That Moves', 'Thematic decor, scenic builds, lighting, SFX, AV, and staging that transform venues into immersive spaces.' ),
	array( 'Flawless Execution', 'Program scripting, artist and speaker management, hospitality, and run-of-show precision.' ),
	array( 'Content That Lives On', 'Cinematic photography, videography, and social amplification post-event.' ),
);
$process = array(
	array( '01', 'Discover', 'Understanding your vision, audience, goals, and budget.' ),
	array( '02', 'Design', 'Creative concepts, themes, 3D visualizations, and layouts.' ),
	array( '03', 'Plan', 'Timelines, logistics, vendor coordination, and risk planning.' ),
	array( '04', 'Produce', 'Stage fabrication, technical setup, rehearsals, and final prep.' ),
	array( '05', 'Execute', 'Flawless on-site management, showcalling, and guest experience.' ),
	array( '06', 'Celebrate', 'Post-event media, highlight films, and ongoing support.' ),
);
?>

<section class="page-hero">
  <div class="container">
    <?php fivem_breadcrumb( array( 'About Us' => '' ) ); ?>
    <h1>About 5M Events</h1>
    <p style="font-size: 20px; color: #5a6b82;">Creating lasting impressions since day one.</p>
  </div>
</section>

<section>
  <div class="container">
    <div class="grid-2">
      <div>
        <h2 style="font-size: 32px; margin-bottom: 25px;">Our Story</h2>
        <p style="color: #5a6b82; font-size: 16px; line-height: 1.8;">5M Events is a premier event management and creative production company based in Hyderabad. We specialize in planning, designing, and executing events that seamlessly blend creativity, innovation, and operational excellence.</p>
        <p style="color: #5a6b82; font-size: 16px; line-height: 1.8;">From intimate celebrations to large-scale corporate productions, we deliver memorable experiences that inspire, engage, and leave lasting impressions. Every project is handled with passion, professionalism, and precision.</p>

        <h3 style="margin-top: 40px; font-size: 24px;">Our Vision</h3>
        <p style="color: #5a6b82; font-size: 16px; line-height: 1.8;">To become one of India's most trusted and innovative event management companies, known for creating unforgettable experiences through creativity, flawless execution, and exceptional client service.</p>

        <h3 style="margin-top: 30px; font-size: 24px;">Our Mission</h3>
        <p style="color: #5a6b82; font-size: 16px; line-height: 1.8;">To provide end-to-end event solutions that combine strategic planning, innovative design, premium production, and seamless execution while building long-term relationships based on trust, quality, and excellence.</p>
      </div>
      <div style="background: #e8ecf1; aspect-ratio: 4/5; border-radius: 16px; overflow: hidden;">
        <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=750&fit=crop" alt="About 5M Events" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
    </div>
  </div>
</section>

<section class="timeline">
  <div class="container">
    <span class="eyebrow">Our Journey</span>
    <h2 style="margin-bottom: 60px; font-size: 36px;">Company History &amp; Milestones</h2>
    <?php foreach ( $timeline as $t ) : ?>
      <div class="timeline-item">
        <div class="timeline-year"><?php echo esc_html( $t['year'] ); ?></div>
        <div class="timeline-content">
          <h3><?php echo esc_html( $t['title'] ); ?></h3>
          <p><?php echo esc_html( $t['text'] ); ?></p>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</section>

<section style="padding: 80px 0;">
  <div class="container">
    <h2 style="margin-bottom: 20px; font-size: 36px;">Our Approach</h2>
    <p style="margin-bottom: 50px; color: #5a6b82; font-size: 18px;">Strategic Planning, Memorable Results</p>
    <div class="grid-2">
      <?php foreach ( $approach as $a ) : ?>
        <div class="card">
          <h3 style="color: #d4af37; margin-bottom: 15px;">&#10003; <?php echo esc_html( $a[0] ); ?></h3>
          <p style="color: #5a6b82;"><?php echo esc_html( $a[1] ); ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section style="padding: 80px 0; background: linear-gradient(135deg, #f5f9fc 0%, #e8f4f8 100%);">
  <div class="container">
    <h2 style="margin-bottom: 20px; font-size: 36px;">Our 6-Step Process</h2>
    <p style="margin-bottom: 50px; color: #5a6b82; font-size: 18px;">Every 5M event follows a proven methodology</p>
    <div class="grid-6">
      <?php foreach ( $process as $p ) : ?>
        <div class="process-step">
          <div class="process-number"><?php echo esc_html( $p[0] ); ?></div>
          <h4 style="font-size: 18px;"><?php echo esc_html( $p[1] ); ?></h4>
          <p style="color: #5a6b82; font-size: 14px; margin: 0;"><?php echo esc_html( $p[2] ); ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section style="padding: 80px 0;">
  <div class="container">
    <h2 style="margin-bottom: 20px; font-size: 36px;">Our Core Values</h2>
    <div class="values-grid">
      <?php foreach ( $values as $v ) : ?>
        <div class="value-item"><?php echo esc_html( $v ); ?></div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="image-gallery-section">
  <div class="container">
    <span class="eyebrow" style="text-align: center; display: block; margin-bottom: 20px;">Behind The Scenes</span>
    <h2 style="text-align: center; margin-bottom: 50px;">Where the magic is made.</h2>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=500&fit=crop" alt="Staging & Technical Rigging">
        <div class="gallery-caption">Staging & Technical Rigging</div>
      </div>
      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop" alt="Show Control & Scripting">
        <div class="gallery-caption">Show Control & Scripting</div>
      </div>
      <div class="gallery-item">
        <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop" alt="Experiential Designing & Drafting">
        <div class="gallery-caption">Experiential Designing & Drafting</div>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <h2>Ready to work with us?</h2>
    <p>Let's create something extraordinary together.</p>
    <button class="btn open-quote-popup" data-popup="quotePopup">Get Started &rarr;</button>
  </div>
</section>

<?php get_footer(); ?>
