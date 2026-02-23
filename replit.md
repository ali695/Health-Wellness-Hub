# VitalHealth Hub

## Overview
A complete health and wellness website built with pure HTML, CSS, and vanilla JavaScript. No frameworks or build tools. Served via Express.js static file server.

## Site Identity
- **Name**: VitalHealth Hub
- **Tagline**: "Your Guide to a Healthier Life"
- **Niche**: General Health & Wellness

## Architecture
- **Server**: Express.js static file server (`server.js`) on port 5000
- **CSS**: Single shared stylesheet (`css/style.css`)
- **JS**: Single shared script (`js/main.js`) for navbar, animations, FAQ toggles, scroll effects
- **Generator**: `generate.js` - Node.js script that generates all HTML pages programmatically

## File Structure
```
/index.html              - Homepage
/about.html              - About Us
/contact.html            - Contact Page
/faq.html                - General FAQ
/blog.html               - Blog Index (search + category filters)
/privacy.html            - Privacy Policy
/disclaimer.html         - Medical Disclaimer
/sitemap.html            - HTML Sitemap
/sitemap.xml             - XML Sitemap
/robots.txt              - Robots file
/css/style.css           - Shared styles
/js/main.js              - Shared JavaScript
/calculators/            - 51 calculator HTML pages
/blog/                   - 99 blog post HTML pages
/server.js               - Express static server
/generate.js             - Page generator script
```

## Key Features
- 51 fully functional health calculators with real JS logic
- 99 blog posts with full content, FAQs, author boxes
- Color-coded results (green/yellow/red) for calculators
- Blog search and category filtering
- Responsive design (CSS Grid + Flexbox)
- SEO: unique meta tags, canonical URLs, Open Graph, Schema.org JSON-LD
- Breadcrumb navigation with BreadcrumbList schema
- Fade-in animations via IntersectionObserver
- Animated stats counter on homepage
- FAQ accordion on all calculator and blog pages
- Social share buttons (Twitter, Facebook, WhatsApp)
- Back-to-top button
- Reading progress bar on blog posts
- Print-friendly styles
- Medical disclaimer on all calculator pages

## Color Palette
- Primary: #2d6a4f (deep green)
- Accent: #52b788 (light green)
- Highlight: #f4a261 (warm orange)
- Background: #f0faf2 (pale green-white)
- Dark: #1b1f1e

## Fonts
- Headings: Playfair Display (Google Fonts)
- Body: DM Sans (Google Fonts)

## Dependencies
- express (Node.js package)
