<?php
/* Template Name: Contact Page */
if ( ! defined( 'ABSPATH' ) ) exit;

$notice = fivem_handle_contact_post();
get_header();

$faqs = fivem_get_faqs();
?>

<section class="page-hero">
  <div class="container">
    <?php fivem_breadcrumb( array( 'Contact' => '' ) ); ?>
    <h1>Let the fun begin with you!</h1>
    <p style="font-size: 20px; color: #5a6b82;">We want to hear from you. Let us know how we can help!</p>
  </div>
</section>

<section>
  <div class="container">
    <div class="grid-2">
      <div>
        <h2 style="font-size: 32px; margin-bottom: 25px;">Get In Touch</h2>
        <p style="color: #5a6b82; font-size: 16px; line-height: 1.8; margin-bottom: 50px;">
          Have an event in mind? We're here to make it happen. Whether it's a corporate conference, wedding celebration, or brand launch, our team is ready to design and deliver it flawlessly.
        </p>

        <div style="margin-bottom: 40px; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); aspect-ratio: 16/9;">
          <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=450&fit=crop" alt="Celebrate with 5M Events" style="width: 100%; height: 100%; object-fit: cover;">
        </div>

        <div style="margin-top: 30px;">
          <div style="margin-bottom: 35px; padding-bottom: 35px; border-bottom: 1.5px solid #e8ecf1; display: flex; gap: 20px; align-items: flex-start;">
            <div style="background: var(--bg-card-alt); padding: 15px; border-radius: 10px; border: 1px solid var(--border-color); color: var(--gold);">
              <i data-lucide="phone" style="width: 24px; height: 24px;"></i>
            </div>
            <div>
              <div style="color: #d4af37; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 5px; font-weight: 700;">Call Us</div>
              <div style="font-family: 'Playfair Display', serif; font-size: 24px;"><a href="tel:+917981636962" style="color: #2c3e50;">+91 79816 36962</a></div>
            </div>
          </div>
          <div style="margin-bottom: 35px; padding-bottom: 35px; border-bottom: 1.5px solid #e8ecf1; display: flex; gap: 20px; align-items: flex-start;">
            <div style="background: var(--bg-card-alt); padding: 15px; border-radius: 10px; border: 1px solid var(--border-color); color: var(--gold);">
              <i data-lucide="mail" style="width: 24px; height: 24px;"></i>
            </div>
            <div>
              <div style="color: #d4af37; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 5px; font-weight: 700;">Email</div>
              <div style="font-family: 'Playfair Display', serif; font-size: 24px;"><a href="mailto:hello@5mevents.com" style="color: #2c3e50;">hello@5mevents.com</a></div>
            </div>
          </div>
          <div style="margin-bottom: 35px; padding-bottom: 35px; border-bottom: 1.5px solid #e8ecf1; display: flex; gap: 20px; align-items: flex-start;">
            <div style="background: var(--bg-card-alt); padding: 15px; border-radius: 10px; border: 1px solid var(--border-color); color: var(--gold);">
              <i data-lucide="map-pin" style="width: 24px; height: 24px;"></i>
            </div>
            <div>
              <div style="color: #d4af37; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 5px; font-weight: 700;">Visit</div>
              <div style="font-family: 'Playfair Display', serif; font-size: 24px; color: #2c3e50;">Hyderabad, Telangana, India</div>
            </div>
          </div>
          <div style="display: flex; gap: 20px; align-items: flex-start;">
            <div style="background: var(--bg-card-alt); padding: 15px; border-radius: 10px; border: 1px solid var(--border-color); color: var(--gold);">
              <i data-lucide="clock" style="width: 24px; height: 24px;"></i>
            </div>
            <div>
              <div style="color: #d4af37; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 5px; font-weight: 700;">Hours</div>
              <div style="font-family: 'Playfair Display', serif; font-size: 24px; color: #2c3e50;">Mon &ndash; Sat &middot; 10:00 AM &ndash; 7:00 PM</div>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar-box">
        <h3 style="font-size: 26px; margin-bottom: 30px;">Send Us a Message</h3>
        <?php if ( $notice['message'] ) : ?>
          <div class="form-notice <?php echo esc_attr( $notice['type'] ); ?>"><?php echo esc_html( $notice['message'] ); ?></div>
        <?php endif; ?>
        <form method="post">
          <?php wp_nonce_field( 'fivem_contact', 'fivem_contact_nonce' ); ?>
          <div class="form-row">
            <div class="form-group"><label>Full Name *</label><input type="text" name="name" required></div>
            <div class="form-group"><label>Phone *</label><input type="tel" name="phone" required></div>
          </div>
          <div class="form-group"><label>Email *</label><input type="email" name="email" required></div>
          <div class="form-row">
            <div class="form-group">
              <label>Event Type *</label>
              <select name="event_type" required>
                <option value="">Select event type</option>
                <option>Corporate Event</option><option>M.I.C.E</option><option>Wedding</option>
                <option>Product Launch</option><option>Private Party</option><option>Anniversary</option>
                <option>Concert / Festival</option><option>Award Function</option><option>Fashion Show</option>
                <option>Brand Activation</option><option>Other</option>
              </select>
            </div>
            <div class="form-group"><label>Event Date *</label><input type="date" name="event_date" required></div>
          </div>
          <div class="form-group">
            <label>Estimated Budget</label>
            <select name="budget">
              <option value="">Select budget range</option>
              <option>Under &#8377;5 Lakhs</option><option>&#8377;5 &ndash; 15 Lakhs</option>
              <option>&#8377;15 &ndash; 50 Lakhs</option><option>&#8377;50 Lakhs &ndash; 1 Crore</option>
              <option>Above &#8377;1 Crore</option><option>Prefer to discuss</option>
            </select>
          </div>
          <div class="form-group"><label>Tell Us About Your Event</label><textarea name="message" rows="4" placeholder="Share your vision, venue preferences, guest count..."></textarea></div>
          <button type="submit" class="btn" style="width: 100%;">Send Inquiry &rarr;</button>
        </form>
      </div>
    </div>
  </div>
</section>

<section style="padding: 80px 0;">
  <div class="container">
    <h2 style="font-size: 36px; margin-bottom: 50px;">Frequently Asked Questions</h2>
    <div style="max-width: 900px;">
      <?php foreach ( $faqs as $faq ) : ?>
        <div class="faq-item">
          <button class="faq-question"><?php echo esc_html( $faq['q'] ); ?> <span>+</span></button>
          <div class="faq-answer"><?php echo esc_html( $faq['a'] ); ?></div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php get_footer(); ?>
