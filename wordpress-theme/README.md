# MSL Colombo — WordPress Theme

Folder to zip: `msl-colombo/` (zip the folder itself, so the archive contains `msl-colombo/style.css`).

## Files

```
msl-colombo/
├── style.css              Theme header + full design system
├── functions.php          Setup, enqueue, menus, widgets, helpers
├── index.php              Blog/archive/search fallback
├── header.php             Sticky glass header + primary nav
├── footer.php             Footer with Customizer contact details
├── front-page.php         Homepage: hero, services, CTA
├── page.php               Static pages
├── single.php             Blog posts
├── 404.php                Not found
├── comments.php           Comments
├── searchform.php         Search form
├── inc/customizer.php     Customizer settings
├── assets/js/main.js      Mobile nav, scroll reveal, smooth anchors
└── assets/js/customizer.js Live preview bindings
```

Optionally add `screenshot.png` (1200×900) to the theme root for the admin preview.

## Install

1. Zip the `msl-colombo` folder.
2. WP Admin → Appearance → Themes → Add New → Upload Theme → Activate.
3. Settings → Reading → set a static front page (front-page.php takes over the homepage).
4. Appearance → Menus → create a menu, assign to **Primary** and **Footer**.
   Nest Sea Cargo, Air Cargo, Transport and **Printing Services** under a top-level "Services" item.
5. Appearance → Customize:
   - **Site Identity** → upload the MSL logo.
   - **MSL Brand** → navy `#25265F`, indigo `#6f73d2`.
   - **MSL Hero** → eyebrow, headline, sub-headline, hero background image.
   - **MSL Header Button** → label and link (e.g. `/contact-us/`).
   - **MSL Contact Details** → phone `+94 77 373 8440`, email `Info@mslcolombo.com`, address.
   - **MSL Services Section** → pick the Services parent page; its child pages become the homepage cards (featured image + first lines of content are used).

## Notes

- Fonts (Space Grotesk + Inter) load from Google Fonts via `wp_enqueue_style`.
- No page builder, Bootstrap, or build step required — plain PHP, CSS and vanilla JS.
- Contact forms: use a plugin (e.g. WPForms/Contact Form 7) and place the shortcode on the contact page.
