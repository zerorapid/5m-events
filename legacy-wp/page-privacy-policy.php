<?php
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>
<section class="page-hero">
  <div class="container">
    <?php fivem_breadcrumb( array( 'Privacy Policy' => '' ) ); ?>
    <h1>Privacy Policy</h1>
    <p style="color: #7f8c9a;">Last updated: July 29, 2026</p>
  </div>
</section>

<section>
  <div class="container" style="max-width: 800px;">
    <?php while ( have_posts() ) : the_post();
      the_content();
    endwhile; ?>

    <?php if ( ! get_the_content() ) : // Default content shown until the admin edits this page in wp-admin ?>
    <h2 style="font-size: 26px; margin-bottom: 20px;">1. Introduction</h2>
    <p style="color: #5a6b82; line-height: 1.8;">5M Events ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

    <h2 style="font-size: 26px; margin: 40px 0 20px;">2. Information We Collect</h2>
    <p style="color: #5a6b82; line-height: 1.8; margin-bottom: 15px;">We may collect personal information that you provide directly to us, including:</p>
    <ul style="list-style: disc; padding-left: 25px; color: #5a6b82;">
      <li style="margin-bottom: 10px;">Name and contact details (email, phone number)</li>
      <li style="margin-bottom: 10px;">Event details and preferences</li>
      <li style="margin-bottom: 10px;">Billing and payment information</li>
      <li>Communications with our team</li>
    </ul>

    <h2 style="font-size: 26px; margin: 40px 0 20px;">3. How We Use Your Information</h2>
    <p style="color: #5a6b82; line-height: 1.8; margin-bottom: 15px;">We use the information we collect to:</p>
    <ul style="list-style: disc; padding-left: 25px; color: #5a6b82;">
      <li style="margin-bottom: 10px;">Provide, maintain, and improve our services</li>
      <li style="margin-bottom: 10px;">Process transactions and send related information</li>
      <li style="margin-bottom: 10px;">Send technical notices and support messages</li>
      <li style="margin-bottom: 10px;">Respond to your comments, questions, and requests</li>
      <li>Communicate about events, services, and offers</li>
    </ul>

    <h2 style="font-size: 26px; margin: 40px 0 20px;">4. Data Sharing</h2>
    <p style="color: #5a6b82; line-height: 1.8;">We do not sell your personal information. We may share information with trusted vendors and partners who assist in operating our business, subject to confidentiality obligations.</p>

    <h2 style="font-size: 26px; margin: 40px 0 20px;">5. Data Security</h2>
    <p style="color: #5a6b82; line-height: 1.8;">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

    <h2 style="font-size: 26px; margin: 40px 0 20px;">6. Your Rights</h2>
    <p style="color: #5a6b82; line-height: 1.8;">You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at hello@5mevents.com.</p>

    <h2 style="font-size: 26px; margin: 40px 0 20px;">7. Contact Us</h2>
    <p style="color: #5a6b82; line-height: 1.8;">If you have questions about this Privacy Policy, please contact us at:</p>
    <p style="color: #5a6b82; line-height: 1.8;">Email: hello@5mevents.com<br>Phone: +91 79816 36962<br>Address: Hyderabad, Telangana, India</p>
    <?php endif; ?>
  </div>
</section>
<?php get_footer(); ?>
