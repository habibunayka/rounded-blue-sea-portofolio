# Habibunayka Miftah Al-Rizqi — Portfolio

A responsive personal portfolio built with plain HTML, CSS, and JavaScript.

## Preview locally

From this directory, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Project structure

- `index.html` — page content and sections
- `styles/css/style.css` — visual design and responsive breakpoints
- `styles/js/script.js` — mobile navigation, sticky header, and reveal animations
- `styles/js/send_email.js` — contact-form validation and EmailJS integration
- `assets/img/` — profile portrait, favorite character illustration, and site icon
- `assets/icon/` — original social icon assets retained from the source project

## Contact form

The contact form continues to use the EmailJS service and template configuration from the original project. Sending real email requires network access and valid configuration in the EmailJS dashboard. If EmailJS cannot load, the page provides a direct email fallback.

## Projects section

Project cards are styled as visual showcases for the areas described on the page. They are not live demos or external project links; add actual project URLs and case-study content when available.

## Notes

- No framework or build step is required.
- Google Fonts and EmailJS are external services; local fallback fonts are defined in the stylesheet.
- The original profile image, character illustration, logo, and social-icon assets are retained.
