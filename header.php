<?php if ( ! defined( 'ABSPATH' ) ) exit; ?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/logo.svg" type="image/svg+xml">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="header">
  <div class="container">
    <div class="nav">
      <div class="logo">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="display: flex; align-items: center;">
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/logo.svg" alt="5M Events Logo" style="height: 45px; width: auto; display: block;">
        </a>
      </div>

      <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false" style="display: flex; align-items: center; justify-content: center; padding: 10px;"><i data-lucide="menu" style="width: 20px; height: 20px;"></i></button>

      <?php
      if ( has_nav_menu( 'primary' ) ) {
        wp_nav_menu( array(
          'theme_location' => 'primary',
          'container'      => false,
          'menu_id'        => 'navMenu',
          'menu_class'     => 'nav-menu',
        ) );
      } else {
        fivem_default_menu();
      }
      ?>

      <button class="btn open-quote-popup" data-popup="quotePopup">Get Quote</button>
    </div>
  </div>
</header>

<main id="main-content">
