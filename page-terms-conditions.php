<?php
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>
<section class="page-hero">
  <div class="container">
    <?php fivem_breadcrumb( array( 'Terms & Conditions' => '' ) ); ?>
    <h1>Terms &amp; Conditions</h1>
    <p style="color: #7f8c9a;">Last updated: July 29, 2026</p>
  </div>
</section>

<section>
  <div class="container" style="max-width: 800px;">
    <?php while ( have_posts() ) : the_post();
      the_content();
    endwhile; ?>

    <?php if ( ! get_the_content() ) : ?>
    <h2 style="font-size: 26px; margin-bottom: 20px;">1. Acceptance of Terms</h2>
    <p style="color: #5a6b82; line-height: 1.8;">By accessing and using the 5M Events website and services, you accept and agree to be bound by these Terms &amp; Conditions.</p>

    <h2 style="font-size: 26px; margin: 40px 0 20px;">2. Services</h2>
    <p style="color: #5a6b82; line-height: 1.8;">5M Events provides event management and creative production services. Specific terms for each engagement will be outlined in a separate service agreement.</p>

    <h2 style="font-size: 26px; margin: 40px 0 20px;">3. Booking &amp; Cancellation</h2>
    <p style="color: #5a6b82; line-height: 1.8;">All bookings are subject to availability. Cancellation policies, deposit requirements, and refund terms will be specified in your service agreement.</p>

    <h2 style="font-size: 26px; margin: 40px 0 20px;">4. Intellectual Property</h2>
    <p style="color: #5a6b82; line-height: 1.8;">All content on this website, including text, graphics, logos, and images, is the property of 5M Events and is protected by copyright laws.</p>

    <h2 style="font-size: 26px; margin: 40px 0 20px;">5. Limitation of Liability</h2>
    <p style="color: #5a6b82; line-height: 1.8;">5M Events shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our services or website.</p>

    <h2 style="font-size: 26px; margin: 40px 0 20px;">6. Governing Law</h2>
    <p style="color: #5a6b82; line-height: 1.8;">These terms shall be governed by and construed in accordance with the laws of India.</p>

    <h2 style="font-size: 26px; margin: 40px 0 20px;">7. Contact</h2>
    <p style="color: #5a6b82; line-height: 1.8;">For questions about these Terms, contact us at hello@5mevents.com.</p>
    <?php endif; ?>
  </div>
</section>
<?php get_footer(); ?>
