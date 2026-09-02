<?php
/**
 * 5M Events theme functions
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( '_5M_VERSION', '1.0.0' );

/* -------------------------------------------------
   THEME SETUP
------------------------------------------------- */
function fivem_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'responsive-embeds' );

	register_nav_menus( array(
		'primary' => __( 'Primary Menu', '5m-events' ),
		'footer'  => __( 'Footer Quick Links', '5m-events' ),
	) );

	set_post_thumbnail_size( 800, 450, true );
	add_image_size( 'fivem-square', 600, 450, true );
}
add_action( 'after_setup_theme', 'fivem_setup' );

/* -------------------------------------------------
   ASSETS
------------------------------------------------- */
function fivem_enqueue_assets() {
	wp_enqueue_style( 'fivem-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap', array(), null );
	wp_enqueue_style( 'fivem-style', get_stylesheet_uri(), array(), _5M_VERSION );
	wp_enqueue_script( 'lucide-icons', 'https://unpkg.com/lucide@latest', array(), null, true );
	wp_enqueue_script( 'fivem-main', get_template_directory_uri() . '/assets/js/main.js', array( 'lucide-icons' ), _5M_VERSION, true );

	wp_localize_script( 'fivem-main', 'fivemData', array(
		'ajaxUrl' => admin_url( 'admin-ajax.php' ),
		'nonce'   => wp_create_nonce( 'fivem_quote_form' ),
	) );

	// Enqueue React App
	$asset_file = get_template_directory() . '/build/index.asset.php';
	if ( file_exists( $asset_file ) ) {
		$assets = require $asset_file;
		wp_enqueue_script(
			'fivem-react-app',
			get_template_directory_uri() . '/build/index.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}
}
add_action( 'wp_enqueue_scripts', 'fivem_enqueue_assets' );

/* -------------------------------------------------
   PRETTY URLS FOR SERVICE DETAIL PAGES
   /services/weddings/  ->  services page template, $_GET style query var
------------------------------------------------- */
function fivem_rewrite_rules() {
	add_rewrite_rule( '^services/([^/]+)/?$', 'index.php?pagename=services&service_slug=$matches[1]', 'top' );
}
add_action( 'init', 'fivem_rewrite_rules' );

function fivem_query_vars( $vars ) {
	$vars[] = 'service_slug';
	return $vars;
}
add_filter( 'query_vars', 'fivem_query_vars' );

// Automatically run full theme activation setup on next admin page load
function fivem_auto_setup_theme() {
	if ( is_admin() && ! get_option( 'fivem_setup_completed_v12' ) ) {
		fivem_theme_activation();
		update_option( 'fivem_setup_completed_v12', 1 );
	}
}
add_action( 'admin_init', 'fivem_auto_setup_theme' );

/* -------------------------------------------------
   CONTENT DATA
   Services / Portfolio / Team / Testimonials / FAQs / Client logos
   Kept as simple, well-organized PHP arrays (mirrors the original
   JS data objects) so a developer can edit them directly without
   needing a page-builder or custom post types. Blog content, by
   contrast, uses real WordPress posts (see single.php / home.php).
------------------------------------------------- */
function fivem_get_services() {
	static $services = null;
	if ( $services !== null ) return $services;

	$services = array(
		'mice' => array(
			'group' => 'Corporate & Business Events', 'name' => 'M.I.C.E', 'title' => 'M.I.C.E Events',
			'tagline' => 'Meetings, Incentives, Conferences & Exhibitions',
			'description' => 'Orchestrated with precision at any scale. We handle meetings, incentives, conferences, exhibitions, and trade shows with comprehensive planning and flawless execution.',
			'features' => array( 'Venue sourcing and management', 'Delegate registration systems', 'Conference logistics', 'Exhibition stand design', 'Incentive travel planning', 'Speaker management', 'Technical production', 'Post-event reporting' ),
			'image' => 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=450&fit=crop',
		),
		'corporate' => array(
			'group' => 'Corporate & Business Events', 'name' => 'Corporate Events', 'title' => 'Corporate Events',
			'tagline' => 'Professional event solutions for your business',
			'description' => 'Townhalls, annual days, offsites, dealer/distributor meets, inaugurations, and retreats with stage design, AV, scripting, and showcalling for seamless delivery and measurable outcomes.',
			'features' => array( 'Stage design and fabrication', 'Audio-visual production', 'Script writing and showcalling', 'Artist and speaker management', 'Guest registration and hospitality', 'Vendor coordination', 'On-site event management', 'Post-event content creation' ),
			'image' => 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=450&fit=crop',
		),
		'launches' => array(
			'group' => 'Corporate & Business Events', 'name' => 'Product Launches', 'title' => 'Product Launches',
			'tagline' => 'Launch events that command attention',
			'description' => 'Launch events that command attention through experiential design, multimedia production, and seamless execution. From press meets to influencer engagements to live showcases and digital coverage.',
			'features' => array( 'Concept and theme development', 'Stage and set design', 'Multimedia presentations', 'Influencer and media management', 'Live streaming setup', 'Product demonstration zones', 'Press conference organization', 'Post-launch amplification' ),
			'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop',
		),
		'awards' => array(
			'group' => 'Corporate & Business Events', 'name' => 'Award Functions', 'title' => 'Award Functions',
			'tagline' => 'Gala nights that honor achievement',
			'description' => 'Gala nights with scripting, stage design, and flawless run-of-show that honor achievement and celebrate success.',
			'features' => array( 'Concept and theme design', 'Stage and set fabrication', 'Script writing and hosting', 'Trophy and memento design', 'Celebrity anchoring', 'Audio-visual production', 'Guest management', 'Post-event coverage' ),
			'image' => 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=450&fit=crop',
		),
		'activations' => array(
			'group' => 'Corporate & Business Events', 'name' => 'Brand Activations', 'title' => 'Brand Activations',
			'tagline' => 'Experiential marketing that connects',
			'description' => 'Experiential marketing that creates meaningful connections between brands and audiences through immersive, memorable experiences.',
			'features' => array( 'Experiential concept design', 'Pop-up installations', 'Interactive experiences', 'Brand integration', 'Consumer engagement', 'Social media amplification', 'Data capture and analytics', 'Post-activation reporting' ),
			'image' => 'https://images.unsplash.com/photo-1560167016-022b78a0258e?w=800&h=450&fit=crop',
		),
		'weddings' => array(
			'group' => 'Social & Personal Events', 'name' => 'Weddings', 'title' => 'Wedding Planning',
			'tagline' => 'End-to-end wedding planning and execution',
			'description' => 'Complete wedding planning across ceremonies, sangeet, reception, decor, artists, thematic choreography, baraat/entry concepts, and complete guest management. Destination setups on request.',
			'features' => array( 'Mehendi, Sangeet, Wedding, Reception', 'Thematic décor and mandap design', 'Floral arrangements', 'Artist and entertainer booking', 'Guest management and hospitality', 'Destination wedding coordination', 'Catering and menu planning', 'Photography and videography' ),
			'image' => 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=450&fit=crop',
		),
		'parties' => array(
			'group' => 'Social & Personal Events', 'name' => 'Private Parties', 'title' => 'Private Parties',
			'tagline' => 'Birthdays and themed celebrations',
			'description' => 'From birthdays and family gatherings to themed celebrations, we craft unforgettable private parties that reflect your personality and preferences. Every detail is handled with precision.',
			'features' => array( 'Theme conceptualization', 'Venue styling and décor', 'Entertainment and activities', 'Catering and bar services', 'Photography and videography', 'Guest coordination', 'Custom installations', 'Return gifts and favors' ),
			'image' => 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=450&fit=crop',
		),
		'anniversaries' => array(
			'group' => 'Social & Personal Events', 'name' => 'Anniversaries', 'title' => 'Anniversary Celebrations',
			'tagline' => 'Milestones that combine emotion and elegance',
			'description' => 'Milestone celebrations that combine emotion and elegance — from venue styling and entertainment to curated dining and visual storytelling.',
			'features' => array( 'Theme development', 'Venue styling', 'Entertainment curation', 'Dining experiences', 'Visual storytelling', 'Memory lanes and tributes', 'Photography and videography', 'Guest coordination' ),
			'image' => 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=450&fit=crop',
		),
		'concerts' => array(
			'group' => 'Entertainment & Large-Scale Events', 'name' => 'Concerts & Festivals', 'title' => 'Concerts & Festivals',
			'tagline' => 'Large-scale entertainment productions',
			'description' => 'Large-scale entertainment productions with artist management, stage design, technical precision, and crowd management for memorable experiences.',
			'features' => array( 'Artist booking and management', 'Stage and sound design', 'Lighting and visual production', 'Crowd management and security', 'Ticketing and access control', 'Backstage hospitality', 'Technical rehearsals', 'Live streaming and broadcast' ),
			'image' => 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=450&fit=crop',
		),
		'fashion' => array(
			'group' => 'Entertainment & Large-Scale Events', 'name' => 'Fashion Shows', 'title' => 'Fashion Shows',
			'tagline' => 'Runway productions that bring collections to life',
			'description' => 'Runway productions with lighting, styling, and showcalling that bring collections to life with dramatic impact.',
			'features' => array( 'Runway design', 'Lighting and sound', 'Model coordination', 'Backstage management', 'Makeup and styling', 'Front-row seating', 'Media and press management', 'Live streaming' ),
			'image' => 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=450&fit=crop',
		),
		'college' => array(
			'group' => 'Entertainment & Large-Scale Events', 'name' => 'College Events', 'title' => 'College Events',
			'tagline' => 'Fests and cultural events with energy',
			'description' => 'Fests, cultural events, and educational gatherings managed with energy and precision.',
			'features' => array( 'Event conceptualization', 'Artist booking', 'Stage production', 'Sponsorship management', 'Student coordination', 'Security and logistics', 'Technical production', 'Post-event coverage' ),
			'image' => 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=450&fit=crop',
		),
		'government' => array(
			'group' => 'Entertainment & Large-Scale Events', 'name' => 'Government Events', 'title' => 'Government Events',
			'tagline' => 'Public functions with protocol and dignity',
			'description' => 'Public functions and official ceremonies executed with protocol, dignity, and scale.',
			'features' => array( 'Protocol management', 'VIP handling', 'Security coordination', 'Stage and AV production', 'Media management', 'Guest registration', 'Documentation', 'Post-event reporting' ),
			'image' => 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=450&fit=crop',
		),
	);
	return $services;
}

function fivem_get_portfolio() {
	return array(
		array( 'title' => 'Grand S Brand Debut', 'category' => 'launch', 'category_label' => 'Product Launch', 'client' => 'Grand S', 'location' => 'Hyderabad', 'date' => '2025', 'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=394&fit=crop', 'overview' => 'A spectacular product launch event featuring immersive stage design, multimedia presentations, and seamless execution that commanded attention and created lasting impact.', 'highlights' => array( 'Custom stage fabrication with LED integration', 'Professional lighting and sound design', 'Live streaming to 10,000+ online viewers', 'Post-event content production' ) ),
		array( 'title' => 'Yon Kolors Festival', 'category' => 'concert', 'category_label' => 'Live Concert', 'location' => 'Hyderabad', 'date' => '', 'attendance' => '5,000+', 'image' => 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=700&h=394&fit=crop', 'overview' => 'A vibrant music festival featuring multiple artists, immersive stage design, and flawless technical production that created an unforgettable experience for attendees.', 'highlights' => array() ),
		array( 'title' => 'Annual Leadership Summit', 'category' => 'corporate', 'category_label' => 'Corporate Event', 'location' => 'Hyderabad', 'date' => '', 'attendance' => '500+ executives', 'image' => 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&h=394&fit=crop', 'overview' => 'A high-impact corporate summit featuring keynote speakers, breakout sessions, networking opportunities, and seamless execution from start to finish.', 'highlights' => array() ),
		array( 'title' => 'Destination Wedding – Udaipur', 'category' => 'wedding', 'category_label' => 'Destination Wedding', 'location' => 'Udaipur, Rajasthan', 'date' => '', 'duration' => '3 days', 'image' => 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&h=394&fit=crop', 'overview' => 'A luxurious destination wedding featuring multiple ceremonies, themed décor, curated dining experiences, and flawless guest management across three magical days.', 'highlights' => array() ),
		array( 'title' => 'Product Showcase', 'category' => 'launch', 'category_label' => 'Product Launch', 'image' => 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&h=394&fit=crop', 'overview' => 'An experiential product showcase built around interactive demo zones and a striking centrepiece stage.', 'highlights' => array() ),
		array( 'title' => 'Dealer Meet', 'category' => 'corporate', 'category_label' => 'Corporate Event', 'image' => 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=700&h=394&fit=crop', 'overview' => 'A nationwide dealer meet with themed staging, recognition ceremonies, and seamless multi-day logistics.', 'highlights' => array() ),
		array( 'title' => 'Milestone Anniversary', 'category' => 'private', 'category_label' => 'Private Event', 'image' => 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&h=394&fit=crop', 'overview' => 'An intimate milestone anniversary celebration styled with warm, elegant décor and curated dining.', 'highlights' => array() ),
		array( 'title' => 'Open-Air Concert', 'category' => 'concert', 'category_label' => 'Live Concert', 'image' => 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=700&h=394&fit=crop', 'overview' => 'A large-scale open-air concert production with full technical rigging and crowd management.', 'highlights' => array() ),
		array( 'title' => 'Traditional Wedding Celebration', 'category' => 'wedding', 'category_label' => 'Wedding', 'image' => 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&h=394&fit=crop', 'overview' => 'A traditional multi-ceremony wedding brought to life with thematic mandap design and full guest hospitality.', 'highlights' => array() ),
	);
}

function fivem_get_portfolio_categories() {
	return array( 'all' => 'All', 'corporate' => 'Corporate', 'wedding' => 'Weddings', 'launch' => 'Product Launches', 'concert' => 'Concerts', 'private' => 'Private Events' );
}

function fivem_get_team() {
	return array(
		array( 'name' => 'Jaideep Raviprakash', 'role' => 'Founder & Creative Director', 'bio' => 'Visionary leader with over a decade of experience crafting unforgettable events across corporate and social domains.', 'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=533&fit=crop', 'social' => array( 'FB' => '#', 'X' => '#', 'IN' => '#' ) ),
		array( 'name' => 'Jahnavi', 'role' => 'Head of Design', 'bio' => 'Transforms briefs into immersive environments through thoughtful thematic design and meticulous attention to detail.', 'image' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=533&fit=crop', 'social' => array( 'IG' => '#', 'IN' => '#' ) ),
		array( 'name' => 'Yogendra', 'role' => 'Head of Production', 'bio' => 'Ensures flawless execution with precision technical direction, vendor coordination, and on-ground showcalling mastery.', 'image' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=533&fit=crop', 'social' => array( 'IG' => '#', 'IN' => '#' ) ),
	);
}

function fivem_get_testimonials() {
	return array(
		array( 'quote' => "5M Events transformed our product launch into a grand spectacle. Every detail was flawless, and feedback from our attendees was overwhelmingly positive.", 'name' => 'Rajesh Sinha', 'title' => 'CEO, Innovatech', 'initials' => 'RS' ),
		array( 'quote' => "Our corporate gala was an unforgettable experience. The 5M team delivered beyond expectations with seamless execution from briefing to curtain call.", 'name' => 'Rajasree Vaidya', 'title' => 'Marketing Director, Fintech Co.', 'initials' => 'RV' ),
	);
}

function fivem_get_client_logos() {
	return array( 'KOLORS<br>HEALTHCARE', '360D<br>SPORTS', 'LEGAXY', 'TECH<br>GAMING', 'MEDIA<br>AGE', 'HYDERABAD<br>ANGELS', 'INDOVATION<br>FUND', 'WEBUI11', 'SPORTS<br>NETWORK', 'PRESS<br>AC', 'NTX<br>PLAY', 'AKAR<br>TECH' );
}

function fivem_get_faqs() {
	return array(
		array( 'q' => 'What types of events do you manage?', 'a' => 'We handle a wide range of events including corporate conferences, product launches, weddings, private parties, MICE events, exhibitions, concerts, fashion shows, award functions, and large-scale entertainment shows. Our team is equipped to manage events of any size and complexity.' ),
		array( 'q' => 'How early should I book your services?', 'a' => 'For large-scale events like weddings and corporate galas, we recommend booking 3–6 months in advance. For smaller gatherings, 4–8 weeks is usually sufficient. However, we always encourage reaching out as early as possible to secure your preferred dates and venues.' ),
		array( 'q' => 'Do you offer end-to-end event solutions?', 'a' => 'Absolutely. From strategic planning and creative design to venue management, technical production, on-site execution, and post-event content — we handle every aspect under one roof so you can focus on enjoying the occasion.' ),
		array( 'q' => 'What is your pricing or budgeting process?', 'a' => 'Every event is unique. After an initial consultation to understand your vision, guest count, and objectives, we provide a detailed, transparent costed plan. We work with you to optimize the budget without compromising on quality or experience.' ),
		array( 'q' => 'Can you manage destination events?', 'a' => 'Yes. We regularly execute destination weddings, corporate offsites, and experiential events across India and internationally. Our logistics team handles travel, vendor coordination, permits, and on-ground management seamlessly.' ),
		array( 'q' => 'Do you provide photography and videography?', 'a' => 'Yes. Our in-house content production team delivers cinematic photography, videography, highlight films, social media reels, and post-event editing — extending the life of every event long after the curtains close.' ),
	);
}

function fivem_get_timeline() {
	return array(
		array( 'year' => '2013', 'title' => 'Foundation', 'text' => '5M Events was founded in Hyderabad with a vision to transform the event management industry through creativity and operational excellence.' ),
		array( 'year' => '2015', 'title' => 'First Major Corporate Event', 'text' => 'Successfully executed our first large-scale corporate conference for a Fortune 500 company, establishing our reputation in the corporate events segment.' ),
		array( 'year' => '2017', 'title' => 'Expansion into Weddings', 'text' => 'Launched our luxury wedding division, delivering destination weddings across India and building partnerships with premium venues.' ),
		array( 'year' => '2019', 'title' => 'MICE Division Launch', 'text' => 'Established dedicated MICE (Meetings, Incentives, Conferences & Exhibitions) vertical, serving international clients and expanding our service portfolio.' ),
		array( 'year' => '2021', 'title' => 'Content Production Studio', 'text' => 'In-house content production studio launched, offering end-to-end photography, videography, and digital content creation services.' ),
		array( 'year' => '2023', 'title' => '10 Years of Excellence', 'text' => 'Celebrated a decade of creating memorable experiences, having successfully delivered over 200 events and earned industry recognition.' ),
		array( 'year' => '2025', 'title' => 'National Expansion', 'text' => 'Expanded operations to multiple cities across India, establishing regional offices and strengthening our pan-India presence.' ),
		array( 'year' => '2026', 'title' => 'Technology Integration', 'text' => 'Launched AI-powered event planning tools and immersive technology solutions, positioning 5M Events at the forefront of innovation.' ),
	);
}

/* -------------------------------------------------
   BREADCRUMB HELPER
------------------------------------------------- */
function fivem_breadcrumb( $trail = array() ) {
	echo '<div class="breadcrumb"><a href="' . esc_url( home_url( '/' ) ) . '">Home</a>';
	foreach ( $trail as $label => $url ) {
		echo ' / ';
		if ( $url ) {
			echo '<a href="' . esc_url( $url ) . '">' . esc_html( $label ) . '</a>';
		} else {
			echo '<span>' . esc_html( $label ) . '</span>';
		}
	}
	echo '</div>';
}

/* -------------------------------------------------
   CONTACT / QUICK-INQUIRY FORM (regular POST, no JS required)
   Used on the Contact page and the service-detail sidebar form.
------------------------------------------------- */
function fivem_handle_contact_post() {
	$notice = array( 'type' => '', 'message' => '' );

	if ( isset( $_POST['fivem_contact_nonce'] ) && wp_verify_nonce( $_POST['fivem_contact_nonce'], 'fivem_contact' ) ) {
		$name    = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
		$phone   = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
		$email   = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
		$event_type = isset( $_POST['event_type'] ) ? sanitize_text_field( wp_unslash( $_POST['event_type'] ) ) : '';
		$event_date = isset( $_POST['event_date'] ) ? sanitize_text_field( wp_unslash( $_POST['event_date'] ) ) : '';
		$budget  = isset( $_POST['budget'] ) ? sanitize_text_field( wp_unslash( $_POST['budget'] ) ) : '';
		$message = isset( $_POST['message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['message'] ) ) : '';

		if ( $name && $phone && is_email( $email ) ) {
			$to      = get_option( 'admin_email' );
			$subject = sprintf( '[5M Events] New enquiry from %s', $name );
			$body    = "New event enquiry received:\n\n"
				. "Name: {$name}\nPhone: {$phone}\nEmail: {$email}\n"
				. "Event Type: {$event_type}\nEvent Date: {$event_date}\nBudget: {$budget}\n\nMessage:\n{$message}";
			$headers = array( "Reply-To: {$name} <{$email}>" );

			wp_mail( $to, $subject, $body, $headers );

			$notice = array( 'type' => 'success', 'message' => "Thank you! Your inquiry has been submitted. We'll be in touch within 24 hours." );
		} else {
			$notice = array( 'type' => 'error', 'message' => 'Please fill in your name, phone, and a valid email address.' );
		}
	}

	return $notice;
}

/* -------------------------------------------------
   QUOTE POPUP FORM (AJAX — appears on every page)
------------------------------------------------- */
function fivem_ajax_quote_form() {
	check_ajax_referer( 'fivem_quote_form', 'nonce' );

	$name  = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
	$phone = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
	$email = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
	$event_type = isset( $_POST['event_type'] ) ? sanitize_text_field( wp_unslash( $_POST['event_type'] ) ) : '';
	$event_date = isset( $_POST['event_date'] ) ? sanitize_text_field( wp_unslash( $_POST['event_date'] ) ) : '';
	$budget = isset( $_POST['budget'] ) ? sanitize_text_field( wp_unslash( $_POST['budget'] ) ) : '';
	$details = isset( $_POST['details'] ) ? sanitize_textarea_field( wp_unslash( $_POST['details'] ) ) : '';

	if ( ! $name || ! $phone || ! is_email( $email ) ) {
		wp_send_json_error( array( 'message' => 'Please fill in your name, phone, and a valid email address.' ) );
	}

	$to      = get_option( 'admin_email' );
	$subject = sprintf( '[5M Events] Quote request from %s', $name );
	$body    = "New quote request:\n\nName: {$name}\nPhone: {$phone}\nEmail: {$email}\n"
		. "Event Type: {$event_type}\nEvent Date: {$event_date}\nBudget: {$budget}\n\nDetails:\n{$details}";
	$headers = array( "Reply-To: {$name} <{$email}>" );

	wp_mail( $to, $subject, $body, $headers );

	wp_send_json_success( array( 'message' => "Thank you! Your inquiry has been submitted. We will contact you within 24 hours." ) );
}
add_action( 'wp_ajax_fivem_quote_form', 'fivem_ajax_quote_form' );
add_action( 'wp_ajax_nopriv_fivem_quote_form', 'fivem_ajax_quote_form' );

/* -------------------------------------------------
   NAV MENU FALLBACK (in case no menu is assigned yet)
------------------------------------------------- */
function fivem_default_menu() {
	$items = array(
		'Home'     => home_url( '/' ),
		'About'    => home_url( '/about/' ),
		'Services' => home_url( '/services/' ),
		'Portfolio'=> home_url( '/portfolio/' ),
		'Team'     => home_url( '/team/' ),
		'Blog'     => home_url( '/blog/' ),
		'Contact'  => home_url( '/contact/' ),
	);
	echo '<ul id="navMenu" class="nav-menu">';
	foreach ( $items as $label => $url ) {
		echo '<li><a href="' . esc_url( $url ) . '">' . esc_html( $label ) . '</a></li>';
	}
	echo '</ul>';
}

/* -------------------------------------------------
   ONE-CLICK SETUP ON THEME ACTIVATION
   Creates all required pages with the right templates,
   builds the primary menu, and configures the homepage
   / posts page in Settings > Reading — so the theme works
   immediately after activation.
------------------------------------------------- */
function fivem_theme_activation() {
	$pages = array(
		'home'     => array( 'title' => 'Home', 'template' => '' ), // front-page.php is used automatically
		'about'    => array( 'title' => 'About', 'template' => 'template-about.php' ),
		'services' => array( 'title' => 'Services', 'template' => 'template-services.php' ),
		'portfolio'=> array( 'title' => 'Portfolio', 'template' => 'template-portfolio.php' ),
		'team'     => array( 'title' => 'Team', 'template' => 'template-team.php' ),
		'blog'     => array( 'title' => 'Blog', 'template' => '' ), // used as the Posts page
		'contact'  => array( 'title' => 'Contact', 'template' => 'template-contact.php' ),
		'privacy-policy'      => array( 'title' => 'Privacy Policy', 'template' => '' ),
		'terms-conditions'    => array( 'title' => 'Terms & Conditions', 'template' => '' ),
	);

	$page_ids = array();

	foreach ( $pages as $slug => $data ) {
		$existing = get_page_by_path( $slug );
		if ( $existing ) {
			$page_ids[ $slug ] = $existing->ID;
			continue;
		}
		$id = wp_insert_post( array(
			'post_title'   => $data['title'],
			'post_name'    => $slug,
			'post_status'  => 'publish',
			'post_type'    => 'page',
			'post_content' => '',
		) );
		if ( $id && ! is_wp_error( $id ) ) {
			$page_ids[ $slug ] = $id;
			if ( ! empty( $data['template'] ) ) {
				update_post_meta( $id, '_wp_page_template', $data['template'] );
			}
		}
	}

	// Front page + posts page
	if ( ! empty( $page_ids['home'] ) && ! empty( $page_ids['blog'] ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $page_ids['home'] );
		update_option( 'page_for_posts', $page_ids['blog'] );
	}

	// Primary menu
	if ( ! wp_get_nav_menu_object( '5M Events Menu' ) ) {
		$menu_id = wp_create_nav_menu( '5M Events Menu' );
		if ( $menu_id && ! is_wp_error( $menu_id ) ) {
			$menu_items = array(
				'Home' => $page_ids['home'] ?? 0, 'About' => $page_ids['about'] ?? 0,
				'Services' => $page_ids['services'] ?? 0, 'Portfolio' => $page_ids['portfolio'] ?? 0,
				'Team' => $page_ids['team'] ?? 0, 'Blog' => $page_ids['blog'] ?? 0, 'Contact' => $page_ids['contact'] ?? 0,
			);
			foreach ( $menu_items as $label => $page_id ) {
				if ( ! $page_id ) continue;
				wp_update_nav_menu_item( $menu_id, 0, array(
					'menu-item-title'     => $label,
					'menu-item-object'    => 'page',
					'menu-item-object-id' => $page_id,
					'menu-item-type'      => 'post_type',
					'menu-item-status'    => 'publish',
				) );
			}
			$locations = get_theme_mod( 'nav_menu_locations' );
			$locations['primary'] = $menu_id;
			set_theme_mod( 'nav_menu_locations', $locations );
		}
	}

	$dummy_posts = array(
		array(
			'title' => 'Event Management Tips: The Blueprint for Flawless Execution',
			'category' => 'Tips & Guides',
			'content' => 'Orchestrating an event requires balancing design aspirations with technical parameters. The blueprint for flawless execution starts with comprehensive scripting, AV testing, and risk mitigation. Ensure your production schedules contain generous margins for setup and rehearsal. From line-array calibrations to emergency power backups and speaker timing, a structured operational checklist guarantees your show runs smoothly from start to finish.',
		),
		array(
			'title' => 'Top Events in Hyderabad: Landmarks of Staging & Showmanship',
			'category' => 'Live Productions',
			'content' => 'Hyderabad has grown into a hub for premium live entertainment, massive music festivals, and luxury weddings. The scale of modern staging in the city has set new records. By analyzing key landmark productions, we see how custom scenic structures, LED visual displays, and high-performance audio systems are integrated to deliver unforgettable experiences for thousands of attendees at outdoor arenas and convention centers.',
		),
		array(
			'title' => 'Why Store Launches are Important: Creating a Landmark Brand Debut',
			'category' => 'Brand Launches',
			'content' => 'A retail brand launch is more than opening doors—it is a critical debut that defines your brand in the local market. Creating a memorable store launch requires experiential set design, interactive staging, media coverage, and strategic local influencer campaigns. By turning your physical space into an immersive showcase, you command attention and build a loyal audience from day one.',
		),
	);

	foreach ( $dummy_posts as $post_data ) {
		$existing = get_posts( array(
			'title'       => $post_data['title'],
			'post_type'   => 'post',
			'post_status' => 'any',
			'numberposts' => 1,
		) );

		if ( empty( $existing ) ) {
			$post_id = wp_insert_post( array(
				'post_title'   => $post_data['title'],
				'post_content' => $post_data['content'],
				'post_status'  => 'publish',
				'post_type'    => 'post',
			) );

			if ( $post_id && ! is_wp_error( $post_id ) ) {
				if ( ! function_exists( 'wp_create_category' ) ) {
					require_once ABSPATH . 'wp-admin/includes/taxonomy.php';
				}
				$cat_id = wp_create_category( $post_data['category'] );
				if ( $cat_id && ! is_wp_error( $cat_id ) ) {
					wp_set_post_categories( $post_id, array( $cat_id ) );
				}
			}
		}
	}

	fivem_rewrite_rules();
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'fivem_theme_activation' );

// Helper to return beautiful, relevant Unsplash images based on post content/title
function fivem_get_post_image_url( $post_id ) {
	if ( has_post_thumbnail( $post_id ) ) {
		return get_the_post_thumbnail_url( $post_id, 'large' );
	}
	$title = get_the_title( $post_id );
	if ( stripos( $title, 'Tips' ) !== false || stripos( $title, 'Management' ) !== false ) {
		return 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop';
	}
	if ( stripos( $title, 'Hyderabad' ) !== false || stripos( $title, 'Events' ) !== false ) {
		return 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=500&fit=crop';
	}
	if ( stripos( $title, 'Launch' ) !== false || stripos( $title, 'Store' ) !== false ) {
		return 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop';
	}
	return 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop';
}

// Helper to return relatable Lucide icons for each service slug
function fivem_get_service_icon( $slug ) {
	$map = array(
		'corporate'  => 'briefcase',
		'weddings'   => 'heart',
		'mice'       => 'users',
		'launches'   => 'rocket',
		'concerts'   => 'music',
		'production' => 'hammer',
	);
	return $map[ $slug ] ?? 'sparkles';
}

/* -------------------------------------------------
   MISC
------------------------------------------------- */
// Excerpt length/more for blog cards
add_filter( 'excerpt_length', function() { return 24; } );
add_filter( 'excerpt_more', function() { return '&hellip;'; } );

// Allow SVG-free safety: nothing extra needed. Keep comments closed off on pages by default.
add_action( 'init', function() { remove_post_type_support( 'page', 'comments' ); } );

add_action('shutdown', function() {
    $error = error_get_last();
    if ($error && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
        echo "<div style='background: red; color: white; padding: 20px; z-index: 9999; position: relative;'>";
        echo "<strong>FATAL ERROR:</strong> " . $error['message'] . " in " . $error['file'] . " on line " . $error['line'];
        echo "</div>";
    }
});
