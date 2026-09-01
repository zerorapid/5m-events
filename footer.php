<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
</main>

<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="logo" style="margin-bottom: 20px;">
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="display: inline-block;">
            <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/logo.svg" alt="5M Events Logo" style="height: 55px; width: auto; display: block;">
          </a>
        </div>
        <p style="font-size: 15px; color: #5a6b82; line-height: 1.8; margin-bottom: 25px;">
          A full-scale event management and creative production company that transforms ideas into unforgettable experiences. Based in Hyderabad, delivering excellence across India.
        </p>
        <div class="social-links">
          <a href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
        </div>
      </div>
      <div>
        <h5>Quick Links</h5>
        <?php
        if ( has_nav_menu( 'footer' ) ) {
          wp_nav_menu( array( 'theme_location' => 'footer', 'container' => false, 'menu_class' => '' ) );
        } else {
          ?>
          <ul>
            <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li>
            <li><a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About Us</a></li>
            <li><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Services</a></li>
            <li><a href="<?php echo esc_url( home_url( '/portfolio/' ) ); ?>">Portfolio</a></li>
            <li><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Contact</a></li>
          </ul>
          <?php
        }
        ?>
      </div>
      <div>
        <h5>Services</h5>
        <ul>
          <li><a href="<?php echo esc_url( home_url( '/services/corporate/' ) ); ?>">Corporate Events</a></li>
          <li><a href="<?php echo esc_url( home_url( '/services/weddings/' ) ); ?>">Weddings</a></li>
          <li><a href="<?php echo esc_url( home_url( '/services/mice/' ) ); ?>">M.I.C.E</a></li>
          <li><a href="<?php echo esc_url( home_url( '/services/launches/' ) ); ?>">Product Launches</a></li>
          <li><a href="<?php echo esc_url( home_url( '/services/concerts/' ) ); ?>">Concerts</a></li>
        </ul>
      </div>
      <div>
        <h5>Get In Touch</h5>
        <p style="font-size: 14px; color: #5a6b82; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="phone" style="width: 16px; height: 16px; color: var(--gold);"></i>
          <a href="tel:+917981636962" style="color: #5a6b82;">+91 79816 36962</a>
        </p>
        <p style="font-size: 14px; color: #5a6b82; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="mail" style="width: 16px; height: 16px; color: var(--gold);"></i>
          <a href="mailto:hello@5mevents.com" style="color: #5a6b82;">hello@5mevents.com</a>
        </p>
        <p style="font-size: 14px; color: #5a6b82; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="map-pin" style="width: 16px; height: 16px; color: var(--gold);"></i>
          <span>Hyderabad, Telangana</span>
        </p>
        <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); height: 130px; margin-top: 20px; box-shadow: var(--shadow-sm);">
          <iframe 
            src="https://maps.google.com/maps?q=5M%20Events%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; <?php echo esc_html( date( 'Y' ) ); ?> 5M Events. All rights reserved.</div>
      <div>
        <a href="<?php echo esc_url( home_url( '/privacy-policy/' ) ); ?>">Privacy Policy</a> ·
        <a href="<?php echo esc_url( home_url( '/terms-conditions/' ) ); ?>">Terms &amp; Conditions</a>
      </div>
    </div>
  </div>
</footer>

<!-- SITE-WIDE POPUPS -->
<div id="quotePopup" class="popup">
  <div class="popup-content">
    <button class="popup-close" data-popup="quotePopup">&times;</button>
    <h2 style="font-size: 32px; margin-bottom: 15px;">Get a Free Quote</h2>
    <p style="color: #5a6b82; margin-bottom: 30px; font-size: 16px;">Tell us about your event and we'll get back to you within 24 hours.</p>
    <div class="form-notice-slot"></div>
    <form id="quoteForm" class="fivem-ajax-form">
      <div class="form-row">
        <div class="form-group">
          <label>Full Name *</label>
          <input type="text" name="name" required>
        </div>
        <div class="form-group">
          <label>Phone *</label>
          <input type="tel" name="phone" required>
        </div>
      </div>
      <div class="form-group">
        <label>Email *</label>
        <input type="email" name="email" required>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Event Type *</label>
          <select name="event_type" required>
            <option value="">Select event type</option>
            <option>Corporate Event</option>
            <option>Wedding</option>
            <option>Product Launch</option>
            <option>Private Party</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group">
          <label>Event Date *</label>
          <input type="date" name="event_date" required>
        </div>
      </div>
      <div class="form-group">
        <label>Budget Range</label>
        <select name="budget">
          <option value="">Select budget</option>
          <option>Under &#8377;5 Lakhs</option>
          <option>&#8377;5 - 15 Lakhs</option>
          <option>&#8377;15 - 50 Lakhs</option>
          <option>Above &#8377;50 Lakhs</option>
        </select>
      </div>
      <div class="form-group">
        <label>Event Details</label>
        <textarea name="details" rows="4" placeholder="Tell us about your event..."></textarea>
      </div>
      <button type="submit" class="btn" style="width: 100%;">Submit Inquiry</button>
    </form>
  </div>
</div>

<?php
// Portfolio detail popups, generated from the portfolio data so they're
// available site-wide (the Portfolio page links into these by index).
$fivem_portfolio_items = fivem_get_portfolio();
foreach ( $fivem_portfolio_items as $i => $item ) :
	$popup_id = 'projectPopup' . $i;
	?>
	<div id="<?php echo esc_attr( $popup_id ); ?>" class="popup">
	  <div class="popup-content" style="max-width: 750px;">
	    <button class="popup-close" data-popup="<?php echo esc_attr( $popup_id ); ?>">&times;</button>
	    <h2 style="font-size: 32px; margin-bottom: 20px;"><?php echo esc_html( $item['title'] ); ?></h2>
	    <div style="background: #e8ecf1; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; margin: 25px 0;">
	      <img src="<?php echo esc_url( $item['image'] ); ?>" alt="<?php echo esc_attr( $item['title'] ); ?>" style="width: 100%; height: 100%; object-fit: cover;">
	    </div>
	    <?php if ( ! empty( $item['client'] ) ) : ?><p style="color: #5a6b82;"><strong>Client:</strong> <?php echo esc_html( $item['client'] ); ?></p><?php endif; ?>
	    <p style="color: #5a6b82;"><strong>Event Type:</strong> <?php echo esc_html( $item['category_label'] ); ?></p>
	    <?php if ( ! empty( $item['location'] ) ) : ?><p style="color: #5a6b82;"><strong>Location:</strong> <?php echo esc_html( $item['location'] ); ?></p><?php endif; ?>
	    <?php if ( ! empty( $item['date'] ) ) : ?><p style="color: #5a6b82;"><strong>Date:</strong> <?php echo esc_html( $item['date'] ); ?></p><?php endif; ?>
	    <?php if ( ! empty( $item['attendance'] ) ) : ?><p style="color: #5a6b82;"><strong>Attendance:</strong> <?php echo esc_html( $item['attendance'] ); ?></p><?php endif; ?>
	    <?php if ( ! empty( $item['duration'] ) ) : ?><p style="color: #5a6b82;"><strong>Duration:</strong> <?php echo esc_html( $item['duration'] ); ?></p><?php endif; ?>
	    <h3 style="margin-top: 30px; font-size: 24px;">Project Overview</h3>
	    <p style="color: #5a6b82; line-height: 1.8;"><?php echo esc_html( $item['overview'] ); ?></p>
	    <?php if ( ! empty( $item['highlights'] ) ) : ?>
	    <h3 style="margin-top: 25px; font-size: 24px;">Key Highlights</h3>
	    <ul style="list-style: disc; padding-left: 25px; color: #5a6b82;">
	      <?php foreach ( $item['highlights'] as $h ) : ?><li style="margin-bottom: 10px;"><?php echo esc_html( $h ); ?></li><?php endforeach; ?>
	    </ul>
	    <?php endif; ?>
	  </div>
	</div>
<?php endforeach; ?>

<?php wp_footer(); ?>
</body>
</html>
