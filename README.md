# 5M Events — WordPress Theme

A full custom WordPress theme converted from the original single-page `champaa.html` design.

## What changed from the original file

- The JS-driven single-page "router" (`showPage()`, `.page.active`) is gone — every
  section is now a real WordPress page with its own URL, so it works with browser
  back/forward, is bookmarkable, and is SEO-indexable.
- **Blog posts are real WordPress posts** (Posts admin screen) — create, edit, and
  categorize them normally in wp-admin. `home.php` lists them, `single.php` displays
  them, with the same look as the original blog cards / article layout.
- Services, Portfolio, Team, and Testimonials are kept as clean PHP data arrays in
  `functions.php` (`fivem_get_services()`, `fivem_get_portfolio()`, etc.) — same idea
  as the original JS `services` / `blogPosts` objects, just PHP instead of JS. Edit
  them directly in that file to add/change entries; no database or plugin needed.
- Contact form and the site-wide "Get Quote" popup both send real emails via
  `wp_mail()` to the WordPress admin email (Settings → General).
- The portfolio filter, FAQ accordion, and popups now run on plain vanilla JS in
  `assets/js/main.js` (no jQuery dependency).

## Install

1. Zip the `5m-events` folder (already done for you) and upload it via
   **Appearance → Themes → Add New → Upload Theme**, or unzip it into
   `wp-content/themes/`.
2. Activate the theme. On activation it automatically:
   - Creates the Home, About, Services, Portfolio, Team, Blog, Contact,
     Privacy Policy, and Terms & Conditions pages (skips any that already exist).
   - Sets Home as the static front page and Blog as the posts page
     (Settings → Reading).
   - Builds a "5M Events Menu" with all core pages and assigns it to the
     Primary Menu location.
   - Flushes rewrite rules so `/services/weddings/`-style URLs work.
3. Go to **Settings → General** and confirm the Administration Email — that's
   where contact-form and quote-popup submissions are sent.
4. Add your blog posts under **Posts → Add New** as usual (add a featured image
   for the card/hero image).

## Editing the hardcoded content (services, portfolio, team)

Open `functions.php` and edit the arrays returned by:
- `fivem_get_services()` — add/edit a service; the key (e.g. `weddings`) becomes
  the URL slug at `/services/weddings/`.
- `fivem_get_portfolio()` — each entry becomes a portfolio card + its own popup.
- `fivem_get_team()`, `fivem_get_testimonials()`, `fivem_get_faqs()`,
  `fivem_get_client_logos()`, `fivem_get_timeline()`.

## Notes

- All images currently point to the same Unsplash placeholder URLs as the
  original file — replace with your own hosted images (or WordPress Media
  Library images) before going live.
- No `screenshot.png` is included; add a 1200×900 PNG named `screenshot.png`
  to the theme root if you want a thumbnail in Appearance → Themes.
- Built with no external plugin dependencies — only core WordPress APIs
  (`wp_mail`, nav menus, rewrite rules, AJAX).
