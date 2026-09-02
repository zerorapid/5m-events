<?php
/* Template Name: Team Page */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();

$team = fivem_get_team();
$testimonials = fivem_get_testimonials();
?>

<section class="page-hero">
  <div class="container">
    <?php fivem_breadcrumb( array( 'Team' => '' ) ); ?>
    <h1>Our Team</h1>
    <p style="font-size: 20px; color: #5a6b82;">The crew behind every extraordinary experience.</p>
  </div>
</section>

<section>
  <div class="container">
    <p style="max-width: 700px; margin-bottom: 60px; color: #5a6b82; font-size: 17px; line-height: 1.8;">
      At 5M Events, our strength lies in our people — a dynamic team of event strategists, creative designers, production specialists, and technical experts who share one goal: delivering excellence. From concept ideation to live execution, every member contributes skill, innovation, and attention to detail.
    </p>

    <div class="grid-3">
      <?php foreach ( $team as $member ) : ?>
        <div class="team-card">
          <div class="team-photo">
            <img src="<?php echo esc_url( $member['image'] ); ?>" alt="<?php echo esc_attr( $member['name'] ); ?>">
          </div>
          <h3 style="font-size: 22px;"><?php echo esc_html( $member['name'] ); ?></h3>
          <div class="role"><?php echo esc_html( $member['role'] ); ?></div>
          <p style="color: #5a6b82; font-size: 15px;"><?php echo esc_html( $member['bio'] ); ?></p>
          <div style="margin-top: 20px; display: flex; gap: 12px; justify-content: center;">
            <?php foreach ( $member['social'] as $label => $url ) : ?>
              <a href="<?php echo esc_url( $url ); ?>" style="color: #7f8c9a; font-weight: 600;"><?php echo esc_html( $label ); ?></a>
            <?php endforeach; ?>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section style="padding: 80px 0; background: linear-gradient(135deg, #f5f9fc 0%, #e8f4f8 100%); margin-top: 80px;">
  <div class="container">
    <h2 style="margin-bottom: 50px; font-size: 36px;">What They Say About Us</h2>
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

<?php get_footer(); ?>
