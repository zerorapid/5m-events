<?php
/* Template Name: Services Page */
if ( ! defined( 'ABSPATH' ) ) exit;

$services     = fivem_get_services();
$service_slug = get_query_var( 'service_slug' );

get_header();

if ( $service_slug && isset( $services[ $service_slug ] ) ) :
	/* ---------------- SERVICE DETAIL VIEW ---------------- */
	$s = $services[ $service_slug ];
	$related = array_slice( array_diff( array_keys( $services ), array( $service_slug ) ), 0, 3 );
	?>
	<section class="page-hero">
	  <div class="container">
	    <?php fivem_breadcrumb( array( 'Services' => home_url( '/services/' ), $s['name'] => '' ) ); ?>
	    <h1><?php echo esc_html( $s['title'] ); ?></h1>
	    <p style="font-size: 20px; color: #5a6b82;"><?php echo esc_html( $s['tagline'] ); ?></p>
	  </div>
	</section>

	<section>
	  <div class="container">
	    <div class="service-detail-grid">
	      <div>
	        <div style="background: #e8ecf1; aspect-ratio: 16/9; border-radius: 16px; overflow: hidden; margin-bottom: 40px;">
	          <img src="<?php echo esc_url( $s['image'] ); ?>" alt="<?php echo esc_attr( $s['title'] ); ?>" style="width: 100%; height: 100%; object-fit: cover;">
	        </div>

	        <h2 style="font-size: 32px; margin-bottom: 25px;">Service Overview</h2>
	        <p style="color: #5a6b82; font-size: 16px; line-height: 1.8;"><?php echo esc_html( $s['description'] ); ?></p>

	        <h3 style="margin-top: 50px; font-size: 26px; margin-bottom: 25px;">What We Offer</h3>
	        <ul class="feature-list">
	          <?php foreach ( $s['features'] as $f ) : ?><li><?php echo esc_html( $f ); ?></li><?php endforeach; ?>
	        </ul>

	        <h3 style="margin-top: 50px; font-size: 26px; margin-bottom: 25px;">Our Process</h3>
	        <div class="grid-4" style="margin-top: 30px;">
	          <?php
	          $steps = array( array( '1', 'Consultation', 'Understanding your objectives' ), array( '2', 'Concept', 'Creating theme & mood boards' ), array( '3', 'Planning', 'Timeline & vendor coordination' ), array( '4', 'Execution', 'Flawless on-ground management' ) );
	          foreach ( $steps as $step ) : ?>
	          <div class="card">
	            <div style="color: #d4af37; font-size: 32px; font-weight: 700; margin-bottom: 15px;"><?php echo esc_html( $step[0] ); ?></div>
	            <h4 style="font-size: 18px;"><?php echo esc_html( $step[1] ); ?></h4>
	            <p style="color: #5a6b82; font-size: 14px;"><?php echo esc_html( $step[2] ); ?></p>
	          </div>
	          <?php endforeach; ?>
	        </div>
	      </div>

	      <div>
	        <div class="sidebar-box">
	          <h3 style="font-size: 22px; margin-bottom: 25px;">Quick Inquiry</h3>
	          <?php $notice = fivem_handle_contact_post(); ?>
	          <?php if ( $notice['message'] ) : ?>
	            <div class="form-notice <?php echo esc_attr( $notice['type'] ); ?>"><?php echo esc_html( $notice['message'] ); ?></div>
	          <?php endif; ?>
	          <form method="post">
	            <?php wp_nonce_field( 'fivem_contact', 'fivem_contact_nonce' ); ?>
	            <input type="hidden" name="event_type" value="<?php echo esc_attr( $s['name'] ); ?>">
	            <div class="form-group"><label>Name</label><input type="text" name="name" required></div>
	            <div class="form-group"><label>Phone</label><input type="tel" name="phone" required></div>
	            <div class="form-group"><label>Email</label><input type="email" name="email" required></div>
	            <div class="form-group"><label>Event Date</label><input type="date" name="event_date" required></div>
	            <div class="form-group"><label>Message</label><textarea name="message" rows="4"></textarea></div>
	            <button type="submit" class="btn" style="width: 100%;">Send Inquiry</button>
	          </form>
	        </div>

	        <div class="sidebar-box">
	          <h3 style="font-size: 22px; margin-bottom: 25px;">Related Services</h3>
	          <ul>
	            <?php foreach ( $related as $rslug ) : ?>
	              <li style="margin-bottom: 12px;"><a href="<?php echo esc_url( home_url( '/services/' . $rslug . '/' ) ); ?>" style="color: #5a6b82;"><?php echo esc_html( $services[ $rslug ]['name'] ); ?></a></li>
	            <?php endforeach; ?>
	          </ul>
	        </div>
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

<?php else :
	/* ---------------- SERVICES LISTING VIEW ---------------- */
	$groups = array();
	foreach ( $services as $slug => $s ) { $groups[ $s['group'] ][ $slug ] = $s; }
	$counter = 0;
	?>
	<section class="page-hero">
	  <div class="container">
	    <?php fivem_breadcrumb( array( 'Services' => '' ) ); ?>
	    <h1>Our Services</h1>
	    <p style="font-size: 20px; color: #5a6b82;">Excellence in every moment.</p>
	  </div>
	</section>

	<section>
	  <div class="container">
	    <?php foreach ( $groups as $group_name => $group_services ) : ?>
	      <h2 style="font-size: 32px; margin-bottom: 40px;"><?php echo esc_html( $group_name ); ?></h2>
	      <div class="grid-3" style="margin-bottom: 80px;">
	        <?php foreach ( $group_services as $slug => $s ) : $counter++; ?>
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
	    <?php endforeach; ?>

	    <h2 style="font-size: 32px; margin-bottom: 40px;">End-to-End Capabilities</h2>
	    <div class="grid-4">
	      <div class="card">
	        <div style="color: var(--gold); margin-bottom: 20px; display: inline-flex; background: var(--bg-card-alt); padding: 12px; border-radius: 10px; border: 1px solid var(--border-color);">
	          <i data-lucide="clipboard-list" style="width: 24px; height: 24px;"></i>
	        </div>
	        <h3 style="font-size: 20px;">Strategic Planning</h3>
	        <p style="color: var(--text-secondary);">Event consultation, budget planning, timeline management, concept development, and risk planning.</p>
	      </div>
	      <div class="card">
	        <div style="color: var(--gold); margin-bottom: 20px; display: inline-flex; background: var(--bg-card-alt); padding: 12px; border-radius: 10px; border: 1px solid var(--border-color);">
	          <i data-lucide="palette" style="width: 24px; height: 24px;"></i>
	        </div>
	        <h3 style="font-size: 20px;">Creative Design</h3>
	        <p style="color: var(--text-secondary);">Theme development, stage design, venue styling, floral decoration, custom installations, and lighting.</p>
	      </div>
	      <div class="card">
	        <div style="color: var(--gold); margin-bottom: 20px; display: inline-flex; background: var(--bg-card-alt); padding: 12px; border-radius: 10px; border: 1px solid var(--border-color);">
	          <i data-lucide="sliders" style="width: 24px; height: 24px;"></i>
	        </div>
	        <h3 style="font-size: 20px;">Production &amp; Technical</h3>
	        <p style="color: var(--text-secondary);">Stage fabrication, professional lighting, audio systems, LED walls, live streaming, and special effects.</p>
	      </div>
	      <div class="card">
	        <div style="color: var(--gold); margin-bottom: 20px; display: inline-flex; background: var(--bg-card-alt); padding: 12px; border-radius: 10px; border: 1px solid var(--border-color);">
	          <i data-lucide="camera" style="width: 24px; height: 24px;"></i>
	        </div>
	        <h3 style="font-size: 20px;">Content Production</h3>
	        <p style="color: var(--text-secondary);">Event photography, cinematic videography, live coverage, highlight films, and social media reels.</p>
	      </div>
	    </div>
	  </div>
	</section>

	<section class="image-gallery-section">
	  <div class="container">
	    <span class="eyebrow" style="text-align: center; display: block; margin-bottom: 20px;">Production Showcase</span>
	    <h2 style="text-align: center; margin-bottom: 50px;">Precision execution at scale.</h2>
	    <div class="gallery-grid">
	      <div class="gallery-item">
	        <img src="https://images.unsplash.com/photo-1482440308425-276ad0f28b19?w=800&h=500&fit=crop" alt="High-Density Visual Rigging">
	        <div class="gallery-caption">High-Density Visual Rigging</div>
	      </div>
	      <div class="gallery-item">
	        <img src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=500&fit=crop" alt="Immersive Stage Structures">
	        <div class="gallery-caption">Immersive Stage Structures</div>
	      </div>
	      <div class="gallery-item">
	        <img src="https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?w=800&h=500&fit=crop" alt="Bespoke Banquet Atmospheres">
	        <div class="gallery-caption">Bespoke Banquet Atmospheres</div>
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
<?php endif; ?>

<?php get_footer(); ?>
