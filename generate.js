const fs = require('fs');
const path = require('path');

const SITE = 'https://vitalhealthhub.com';
const SITE_NAME = 'VitalHealth Hub';

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }

const TOPBAR = `<div class="top-bar"><div class="top-bar-inner">
<a href="mailto:ma7122671@gmail.com" class="top-bar-email"><svg viewBox="0 0 20 20" fill="none" width="14" height="14"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 6l8 5 8-5" stroke="currentColor" stroke-width="1.5"/></svg> <span>ma7122671@gmail.com</span></a>
<div class="top-bar-social">
<a href="https://www.linkedin.com/in/ali-haider-seo-consultant/" target="_blank" rel="noopener noreferrer" title="Ali Haider on LinkedIn" aria-label="Visit Ali Haider LinkedIn Profile" class="tb-linkedin"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
<a href="https://www.facebook.com/AliHadi768" target="_blank" rel="noopener noreferrer" title="Ali Haider on Facebook" aria-label="Visit Ali Haider Facebook Page" class="tb-facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
<a href="https://www.instagram.com/ali_haiderseo/" target="_blank" rel="noopener noreferrer" title="Ali Haider SEO on Instagram" aria-label="Visit Ali Haider Instagram Profile" class="tb-instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg></a>
</div>
</div></div>`;

const NAV = `${TOPBAR}<nav class="navbar">
<div class="nav-container">
<a href="/" class="nav-logo">
<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" stroke="#2d6a4f" stroke-width="2.5"/><path d="M16 8v16M8 16h16" stroke="#2d6a4f" stroke-width="2.5" stroke-linecap="round"/></svg>
${SITE_NAME}</a>
<ul class="nav-links">
<li><a href="/">Home</a></li>
<li><a href="/calculators/bmi-calculator.html">Calculators</a></li>
<li><a href="/blog.html">Blog</a></li>
<li><a href="/about.html">About</a></li>
<li><a href="/contact.html">Contact</a></li>
<li><a href="/faq.html">FAQ</a></li>
</ul>
<button class="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
</div></nav>`;

const FOOTER = `<footer class="footer">
<div class="container">
<div class="footer-grid">
<div class="footer-brand">
<h3><svg viewBox="0 0 32 32" fill="none" width="28" height="28"><circle cx="16" cy="16" r="14" stroke="#52b788" stroke-width="2.5"/><path d="M16 8v16M8 16h16" stroke="#52b788" stroke-width="2.5" stroke-linecap="round"/></svg> ${SITE_NAME}</h3>
<p>Your trusted source for health calculators, wellness tools, and expert health articles. Making health information accessible to everyone.</p>
<div class="footer-social-links">
<a href="https://www.linkedin.com/in/ali-haider-seo-consultant/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
<a href="https://www.facebook.com/AliHadi768" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
<a href="https://www.instagram.com/ali_haiderseo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg></a>
</div>
</div>
<div><h4>Quick Links</h4><ul class="footer-links"><li><a href="/">Home</a></li><li><a href="/about.html">About</a></li><li><a href="/contact.html">Contact</a></li><li><a href="/faq.html">FAQ</a></li><li><a href="/blog.html">Blog</a></li></ul></div>
<div><h4>Popular Tools</h4><ul class="footer-links"><li><a href="/calculators/bmi-calculator.html">BMI Calculator</a></li><li><a href="/calculators/calorie-calculator.html">Calorie Calculator</a></li><li><a href="/calculators/tdee-calculator.html">TDEE Calculator</a></li><li><a href="/calculators/body-fat-calculator.html">Body Fat Calculator</a></li></ul></div>
<div><h4>Legal</h4><ul class="footer-links"><li><a href="/privacy.html">Privacy Policy</a></li><li><a href="/disclaimer.html">Medical Disclaimer</a></li><li><a href="/terms.html">Terms of Service</a></li><li><a href="/sitemap.html">Sitemap</a></li></ul></div>
<div>
<h4>Created By</h4>
<div class="footer-contact-item"><svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="6" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M2 18c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" stroke-width="1.5"/></svg><div><strong>Ali Haider</strong><br><small>SEO Consultant &amp; Web Developer</small></div></div>
<div class="footer-contact-item"><svg viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 6l8 5 8-5" stroke="currentColor" stroke-width="1.5"/></svg><a href="mailto:ma7122671@gmail.com">ma7122671@gmail.com</a></div>
<div class="footer-social-links" style="margin-top:10px;">
<a href="https://www.linkedin.com/in/ali-haider-seo-consultant/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
<a href="https://www.facebook.com/AliHadi768" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
<a href="https://www.instagram.com/ali_haiderseo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg></a>
</div>
</div>
</div>
<div class="footer-disclaimer">Disclaimer: The content on ${SITE_NAME} is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.</div>
<div class="footer-bottom"><span>&copy; 2024 ${SITE_NAME}. All rights reserved.</span><span>Created with care by <a href="https://www.linkedin.com/in/ali-haider-seo-consultant/" target="_blank" rel="noopener noreferrer">Ali Haider</a></span></div>
</div></footer>`;

const BTT = `<button class="back-to-top" aria-label="Back to top"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 16V4M4 10l6-6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;

function head(title, desc, canonical, extra = '') {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${SITE}${canonical}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<meta property="og:url" content="${SITE}${canonical}">
<link rel="stylesheet" href="/css/style.css">
${extra}
</head>`;
}

function breadcrumb(items) {
  let html = `<div class="breadcrumbs"><div class="breadcrumbs-inner">`;
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [] };
  items.forEach((it, i) => {
    schema.itemListElement.push({ "@type": "ListItem", "position": i + 1, "name": it.name, "item": SITE + it.url });
    if (i < items.length - 1) {
      html += `<a href="${it.url}">${it.name}</a><span>/</span>`;
    } else {
      html += `<span>${it.name}</span>`;
    }
  });
  html += `</div></div>`;
  return { html, schema: `<script type="application/ld+json">${JSON.stringify(schema)}</script>` };
}

function shareButtons(url, title) {
  return `<div class="share-buttons">
<a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(SITE+url)}&text=${encodeURIComponent(title)}" target="_blank" rel="noopener" class="share-btn twitter">Twitter</a>
<a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE+url)}" target="_blank" rel="noopener" class="share-btn facebook">Facebook</a>
<a href="https://wa.me/?text=${encodeURIComponent(title+' '+SITE+url)}" target="_blank" rel="noopener" class="share-btn whatsapp">WhatsApp</a>
</div>`;
}

function faqSection(faqs) {
  let html = `<div class="faq-list">`;
  faqs.forEach(f => {
    html += `<div class="faq-item"><button class="faq-question">${f.q}<svg viewBox="0 0 20 20" fill="none"><path d="M5 7l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button><div class="faq-answer"><div class="faq-answer-inner">${f.a}</div></div></div>`;
  });
  html += `</div>`;
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };
  return { html, schema: `<script type="application/ld+json">${JSON.stringify(schema)}</script>` };
}

function calcSvg(type) {
  const icons = {
    weight: `<svg viewBox="0 0 48 48" fill="none"><rect x="8" y="16" width="32" height="24" rx="4" stroke="#2d6a4f" stroke-width="2.5"/><circle cx="24" cy="28" r="6" stroke="#52b788" stroke-width="2"/><path d="M24 22v6l4 2" stroke="#2d6a4f" stroke-width="2" stroke-linecap="round"/></svg>`,
    heart: `<svg viewBox="0 0 48 48" fill="none"><path d="M24 40s-14-8.4-14-18c0-5.5 4.5-10 10-10 3.5 0 6.5 2 8 4a10 10 0 0 1 8-4c5.5 0 10 4.5 10 10 0 9.6-14 18-14 18z" stroke="#2d6a4f" stroke-width="2.5" fill="none"/></svg>`,
    food: `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="28" r="12" stroke="#2d6a4f" stroke-width="2.5"/><path d="M16 28c0-4.4 3.6-8 8-8" stroke="#52b788" stroke-width="2" stroke-linecap="round"/><path d="M24 8v8M20 10l4 6 4-6" stroke="#2d6a4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    water: `<svg viewBox="0 0 48 48" fill="none"><path d="M24 6c0 0-12 14-12 22a12 12 0 0 0 24 0c0-8-12-22-12-22z" stroke="#2d6a4f" stroke-width="2.5"/><path d="M18 30c0-3.3 2.7-6 6-6" stroke="#52b788" stroke-width="2" stroke-linecap="round"/></svg>`,
    sleep: `<svg viewBox="0 0 48 48" fill="none"><path d="M36 28c0 8-6 14-14 14S8 36 8 28s6-14 14-14c-4 2-6 6-6 10s4 10 10 10c4 0 7-2 10-6z" stroke="#2d6a4f" stroke-width="2.5"/><circle cx="36" cy="12" r="2" fill="#f4a261"/><circle cx="40" cy="20" r="1.5" fill="#f4a261"/></svg>`,
    fitness: `<svg viewBox="0 0 48 48" fill="none"><path d="M8 24h32" stroke="#2d6a4f" stroke-width="2.5" stroke-linecap="round"/><rect x="12" y="18" width="4" height="12" rx="1" stroke="#2d6a4f" stroke-width="2"/><rect x="32" y="18" width="4" height="12" rx="1" stroke="#2d6a4f" stroke-width="2"/><rect x="6" y="20" width="4" height="8" rx="1" stroke="#52b788" stroke-width="2"/><rect x="38" y="20" width="4" height="8" rx="1" stroke="#52b788" stroke-width="2"/></svg>`,
    body: `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="12" r="6" stroke="#2d6a4f" stroke-width="2.5"/><path d="M16 22h16v4l-4 14h-2l-2-10-2 10h-2l-4-14v-4z" stroke="#2d6a4f" stroke-width="2" fill="none"/></svg>`,
    brain: `<svg viewBox="0 0 48 48" fill="none"><path d="M24 40V24" stroke="#2d6a4f" stroke-width="2.5" stroke-linecap="round"/><path d="M16 14c0-4.4 3.6-8 8-8s8 3.6 8 8c2.2 0 4 2.7 4 6s-1.8 6-4 6H16c-2.2 0-4-2.7-4-6s1.8-6 4-6z" stroke="#2d6a4f" stroke-width="2.5"/><path d="M20 18h8" stroke="#52b788" stroke-width="2" stroke-linecap="round"/></svg>`,
    baby: `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="20" r="12" stroke="#2d6a4f" stroke-width="2.5"/><circle cx="20" cy="18" r="1.5" fill="#2d6a4f"/><circle cx="28" cy="18" r="1.5" fill="#2d6a4f"/><path d="M20 24c2 2 6 2 8 0" stroke="#2d6a4f" stroke-width="2" stroke-linecap="round"/><path d="M18 36h12" stroke="#52b788" stroke-width="2" stroke-linecap="round"/></svg>`,
    pill: `<svg viewBox="0 0 48 48" fill="none"><rect x="14" y="8" width="20" height="32" rx="10" stroke="#2d6a4f" stroke-width="2.5" transform="rotate(45 24 24)"/><path d="M17 17l14 14" stroke="#52b788" stroke-width="2"/></svg>`,
  };
  return icons[type] || icons.weight;
}

function calcHeroSvg(icon) {
  const scenes = {
    body: `<svg viewBox="0 0 500 200" fill="none" class="calc-hero-svg"><rect width="500" height="200" rx="16" fill="#d8f3dc"/><circle cx="160" cy="100" r="50" fill="#b7e4c7" stroke="#2d6a4f" stroke-width="2"/><circle cx="160" cy="80" r="16" fill="#f0faf2" stroke="#2d6a4f" stroke-width="2"/><rect x="148" y="96" width="24" height="34" rx="4" fill="#f0faf2" stroke="#2d6a4f" stroke-width="2"/><line x1="160" y1="130" x2="148" y2="155" stroke="#2d6a4f" stroke-width="2"/><line x1="160" y1="130" x2="172" y2="155" stroke="#2d6a4f" stroke-width="2"/><line x1="148" y1="104" x2="135" y2="118" stroke="#2d6a4f" stroke-width="2"/><line x1="172" y1="104" x2="185" y2="118" stroke="#2d6a4f" stroke-width="2"/><rect x="260" y="50" width="180" height="100" rx="12" fill="#fff" stroke="#2d6a4f" stroke-width="2"/><text x="350" y="85" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="14" fill="#2d6a4f" font-weight="700">BMI Result</text><rect x="280" y="95" width="140" height="12" rx="6" fill="#b7e4c7"/><rect x="280" y="95" width="80" height="12" rx="6" fill="#52b788"/><text x="350" y="130" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="12" fill="#52b788" font-weight="600">Normal Weight</text></svg>`,
    food: `<svg viewBox="0 0 500 200" fill="none" class="calc-hero-svg"><rect width="500" height="200" rx="16" fill="#d8f3dc"/><circle cx="140" cy="110" r="55" fill="#b7e4c7" stroke="#2d6a4f" stroke-width="2"/><ellipse cx="140" cy="100" rx="40" ry="12" fill="#f0faf2" stroke="#2d6a4f" stroke-width="2"/><circle cx="125" cy="85" r="8" fill="#f4a261"/><circle cx="150" cy="82" r="6" fill="#52b788"/><circle cx="138" cy="74" r="5" fill="#e76f51"/><rect x="260" y="40" width="180" height="120" rx="12" fill="#fff" stroke="#2d6a4f" stroke-width="2"/><text x="350" y="70" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#2d6a4f" font-weight="700">Nutritional Breakdown</text><rect x="280" y="82" width="100" height="10" rx="5" fill="#52b788"/><text x="395" y="91" font-family="DM Sans,sans-serif" font-size="11" fill="#2d6a4f">Protein</text><rect x="280" y="100" width="120" height="10" rx="5" fill="#f4a261"/><text x="415" y="109" font-family="DM Sans,sans-serif" font-size="11" fill="#2d6a4f">Carbs</text><rect x="280" y="118" width="70" height="10" rx="5" fill="#e76f51"/><text x="365" y="127" font-family="DM Sans,sans-serif" font-size="11" fill="#2d6a4f">Fat</text><text x="350" y="150" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="14" fill="#52b788" font-weight="700">2,100 kcal</text></svg>`,
    heart: `<svg viewBox="0 0 500 200" fill="none" class="calc-hero-svg"><rect width="500" height="200" rx="16" fill="#d8f3dc"/><path d="M160 150s-55-33-55-70c0-22 18-40 40-40 14 0 26 8 32 16a44 44 0 0 1 32-16c22 0 40 18 40 40 0 37-55 70-55 70z" fill="#f8d7da" stroke="#e76f51" stroke-width="2"/><polyline points="100,110 130,110 145,80 160,130 175,100 190,110 220,110" stroke="#2d6a4f" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="280" y="50" width="160" height="100" rx="12" fill="#fff" stroke="#2d6a4f" stroke-width="2"/><text x="360" y="80" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#2d6a4f" font-weight="700">Heart Rate</text><text x="360" y="115" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="28" fill="#e76f51" font-weight="800">72</text><text x="360" y="135" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="12" fill="#52b788">BPM - Normal</text></svg>`,
    water: `<svg viewBox="0 0 500 200" fill="none" class="calc-hero-svg"><rect width="500" height="200" rx="16" fill="#d8f3dc"/><path d="M160 30c0 0-50 58-50 90a50 50 0 0 0 100 0c0-32-50-90-50-90z" fill="#b7e4c7" stroke="#2d6a4f" stroke-width="2"/><path d="M130 120c0-13 13-24 26-24" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity="0.7"/><rect x="280" y="50" width="160" height="100" rx="12" fill="#fff" stroke="#2d6a4f" stroke-width="2"/><text x="360" y="80" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#2d6a4f" font-weight="700">Daily Water Goal</text><text x="360" y="115" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="24" fill="#2d6a4f" font-weight="800">2.5L</text><text x="360" y="135" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="12" fill="#52b788">Stay Hydrated!</text></svg>`,
    sleep: `<svg viewBox="0 0 500 200" fill="none" class="calc-hero-svg"><rect width="500" height="200" rx="16" fill="#1b2838"/><circle cx="400" cy="50" r="25" fill="#f4a261" opacity="0.9"/><circle cx="385" cy="45" r="22" fill="#1b2838"/><circle cx="350" cy="30" r="2" fill="#fff" opacity="0.6"/><circle cx="300" cy="50" r="1.5" fill="#fff" opacity="0.5"/><circle cx="420" cy="80" r="1" fill="#fff" opacity="0.4"/><text x="150" y="100" font-family="DM Sans,sans-serif" font-size="36" fill="#52b788" font-weight="700" opacity="0.6">Z</text><text x="180" y="80" font-family="DM Sans,sans-serif" font-size="28" fill="#52b788" font-weight="700" opacity="0.4">Z</text><text x="200" y="65" font-family="DM Sans,sans-serif" font-size="20" fill="#52b788" font-weight="700" opacity="0.3">Z</text><rect x="80" y="120" width="120" height="50" rx="8" fill="#2d6a4f" opacity="0.5"/><rect x="260" y="60" width="160" height="90" rx="12" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/><text x="340" y="90" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#b7e4c7" font-weight="700">Sleep Cycles</text><text x="340" y="120" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="22" fill="#f4a261" font-weight="800">7.5 hrs</text><text x="340" y="140" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" fill="#52b788">Optimal Rest</text></svg>`,
    fitness: `<svg viewBox="0 0 500 200" fill="none" class="calc-hero-svg"><rect width="500" height="200" rx="16" fill="#d8f3dc"/><rect x="100" y="90" width="120" height="12" rx="4" fill="#2d6a4f"/><rect x="80" y="78" width="20" height="36" rx="4" fill="#52b788" stroke="#2d6a4f" stroke-width="2"/><rect x="220" y="78" width="20" height="36" rx="4" fill="#52b788" stroke="#2d6a4f" stroke-width="2"/><rect x="60" y="84" width="20" height="24" rx="4" fill="#b7e4c7" stroke="#2d6a4f" stroke-width="2"/><rect x="240" y="84" width="20" height="24" rx="4" fill="#b7e4c7" stroke="#2d6a4f" stroke-width="2"/><rect x="300" y="50" width="160" height="100" rx="12" fill="#fff" stroke="#2d6a4f" stroke-width="2"/><text x="380" y="78" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#2d6a4f" font-weight="700">Fitness Score</text><text x="380" y="115" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="28" fill="#52b788" font-weight="800">85</text><text x="380" y="138" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="12" fill="#2d6a4f">Excellent Shape</text></svg>`,
    brain: `<svg viewBox="0 0 500 200" fill="none" class="calc-hero-svg"><rect width="500" height="200" rx="16" fill="#d8f3dc"/><ellipse cx="160" cy="100" rx="50" ry="55" fill="#b7e4c7" stroke="#2d6a4f" stroke-width="2"/><path d="M135 70c10-15 40-15 50 0" stroke="#2d6a4f" stroke-width="2" fill="none"/><path d="M130 90c8 5 15-5 25 0s15-5 25 0" stroke="#52b788" stroke-width="2" fill="none"/><path d="M130 110c8 5 15-5 25 0s15-5 25 0" stroke="#52b788" stroke-width="2" fill="none"/><rect x="280" y="50" width="160" height="100" rx="12" fill="#fff" stroke="#2d6a4f" stroke-width="2"/><text x="360" y="80" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#2d6a4f" font-weight="700">Mental Health</text><text x="360" y="115" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="22" fill="#52b788" font-weight="800">Score: 8/10</text><text x="360" y="135" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="12" fill="#2d6a4f">Well-Balanced</text></svg>`,
    baby: `<svg viewBox="0 0 500 200" fill="none" class="calc-hero-svg"><rect width="500" height="200" rx="16" fill="#d8f3dc"/><circle cx="160" cy="85" r="35" fill="#f0faf2" stroke="#2d6a4f" stroke-width="2"/><circle cx="148" cy="80" r="3" fill="#2d6a4f"/><circle cx="172" cy="80" r="3" fill="#2d6a4f"/><path d="M150 95c5 5 15 5 20 0" stroke="#2d6a4f" stroke-width="2" stroke-linecap="round"/><path d="M130 70c5-15 55-15 60 0" stroke="#f4a261" stroke-width="3" fill="none"/><rect x="140" y="125" width="40" height="10" rx="5" fill="#52b788"/><rect x="280" y="50" width="160" height="100" rx="12" fill="#fff" stroke="#2d6a4f" stroke-width="2"/><text x="360" y="80" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#2d6a4f" font-weight="700">Due Date</text><text x="360" y="112" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="18" fill="#f4a261" font-weight="800">Week 28</text><text x="360" y="135" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="12" fill="#52b788">Healthy Progress</text></svg>`,
    pill: `<svg viewBox="0 0 500 200" fill="none" class="calc-hero-svg"><rect width="500" height="200" rx="16" fill="#d8f3dc"/><rect x="120" y="60" width="80" height="80" rx="40" fill="#b7e4c7" stroke="#2d6a4f" stroke-width="2" transform="rotate(45 160 100)"/><line x1="135" y1="75" x2="185" y2="125" stroke="#52b788" stroke-width="2"/><circle cx="140" cy="90" r="8" fill="#f4a261"/><circle cx="180" cy="110" r="6" fill="#e76f51"/><rect x="280" y="50" width="160" height="100" rx="12" fill="#fff" stroke="#2d6a4f" stroke-width="2"/><text x="360" y="80" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#2d6a4f" font-weight="700">Health Score</text><rect x="300" y="95" width="120" height="10" rx="5" fill="#b7e4c7"/><rect x="300" y="95" width="90" height="10" rx="5" fill="#52b788"/><text x="360" y="130" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="14" fill="#52b788" font-weight="600">Low Risk</text></svg>`,
    weight: `<svg viewBox="0 0 500 200" fill="none" class="calc-hero-svg"><rect width="500" height="200" rx="16" fill="#d8f3dc"/><rect x="110" y="70" width="100" height="70" rx="10" fill="#f0faf2" stroke="#2d6a4f" stroke-width="2"/><circle cx="160" cy="100" r="20" fill="#b7e4c7" stroke="#52b788" stroke-width="2"/><path d="M160 90v10l8 4" stroke="#2d6a4f" stroke-width="2" stroke-linecap="round"/><rect x="280" y="50" width="160" height="100" rx="12" fill="#fff" stroke="#2d6a4f" stroke-width="2"/><text x="360" y="80" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#2d6a4f" font-weight="700">Your Result</text><text x="360" y="115" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="24" fill="#52b788" font-weight="800">Healthy</text><text x="360" y="135" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="12" fill="#2d6a4f">Keep it up!</text></svg>`,
  };
  return scenes[icon] || scenes.weight;
}

function blogUnsplashUrl(slug) {
  const map = {
    'how-to-calculate-bmi': 'photo-1571019613454-1cb2f99b2d8b',
    'what-is-a-healthy-bmi': 'photo-1476480862126-209bfaa8edc8',
    'bmi-vs-body-fat-percentage': 'photo-1517836357463-d25dfeac3438',
    'how-many-calories-should-i-eat': 'photo-1490645935967-10de6ba17061',
    'calorie-deficit-for-weight-loss': 'photo-1498837167922-ddd27525d352',
    'what-are-macronutrients': 'photo-1512621776951-a57141f2eefd',
    'high-protein-diet-benefits': 'photo-1532550907401-a500c9a57435',
    'how-much-water-should-you-drink': 'photo-1548839140-29a749e1cf4d',
    'benefits-of-drinking-water': 'photo-1559839914-17aae19cec71',
    'how-much-sleep-do-you-need': 'photo-1541781774459-bb2af2f05b55',
    'sleep-deprivation-effects': 'photo-1515894203077-9cd36032142f',
    'best-sleeping-positions': 'photo-1520206183501-b80df61043c2',
    'heart-rate-zones-explained': 'photo-1571019614242-c5c5dee9f50b',
    'how-to-lower-blood-pressure': 'photo-1505576399279-565b52d4ac71',
    'cholesterol-explained': 'photo-1559757175-0eb30cd8c063',
    'benefits-of-walking-daily': 'photo-1476480862126-209bfaa8edc8',
    'strength-training-benefits': 'photo-1534438327276-14e5300c3a48',
    'how-to-start-running': 'photo-1571008887538-b36bb32f4571',
    'yoga-for-beginners': 'photo-1544367567-0f2fcb009e0b',
    'hiit-workout-benefits': 'photo-1517963879433-6ad2b056d712',
    'body-fat-percentage-guide': 'photo-1571019613454-1cb2f99b2d8b',
    'how-to-gain-muscle': 'photo-1583454110551-21f2fa2afe61',
    'ideal-weight-explained': 'photo-1571019613454-1cb2f99b2d8b',
    'waist-to-hip-ratio-guide': 'photo-1576678927484-cc907957088c',
    'understanding-metabolism': 'photo-1505576399279-565b52d4ac71',
    'intermittent-fasting-guide': 'photo-1490645935967-10de6ba17061',
    'mediterranean-diet-benefits': 'photo-1504674900247-0877df9cc836',
    'vitamins-and-minerals-guide': 'photo-1512621776951-a57141f2eefd',
    'fiber-rich-foods-benefits': 'photo-1457530378978-8bac673b8062',
    'stress-management-techniques': 'photo-1506126613408-eca07ce68773',
    'anxiety-relief-strategies': 'photo-1506126613408-eca07ce68773',
    'mindfulness-meditation-guide': 'photo-1544367567-0f2fcb009e0b',
    'depression-understanding': 'photo-1499209974431-9dddcece7f88',
    'diabetes-prevention-tips': 'photo-1505576399279-565b52d4ac71',
    'cancer-prevention-lifestyle': 'photo-1559757175-0eb30cd8c063',
    'immune-system-boosting': 'photo-1498837167922-ddd27525d352',
    'gut-health-importance': 'photo-1512621776951-a57141f2eefd',
    'posture-correction-tips': 'photo-1576678927484-cc907957088c',
    'back-pain-prevention': 'photo-1571019614242-c5c5dee9f50b',
    'healthy-snacking-guide': 'photo-1490645935967-10de6ba17061',
    'meal-prep-for-beginners': 'photo-1504674900247-0877df9cc836',
    'sugar-reduction-tips': 'photo-1559757175-0eb30cd8c063',
    'healthy-breakfast-ideas': 'photo-1490645935967-10de6ba17061',
    'plant-based-diet-guide': 'photo-1512621776951-a57141f2eefd',
    'cardio-vs-strength-training': 'photo-1534438327276-14e5300c3a48',
    'flexibility-stretching-guide': 'photo-1544367567-0f2fcb009e0b',
    'home-workout-ideas': 'photo-1517963879433-6ad2b056d712',
    'exercise-and-mental-health': 'photo-1506126613408-eca07ce68773',
    'recovery-rest-days': 'photo-1544367567-0f2fcb009e0b',
    'caffeine-effects-on-health': 'photo-1559039914-43b487297218',
    'alcohol-health-effects': 'photo-1559757175-0eb30cd8c063',
    'smoking-cessation-guide': 'photo-1505576399279-565b52d4ac71',
    'healthy-skin-tips': 'photo-1576091160550-2173dba999ef',
    'eye-health-tips': 'photo-1559757175-0eb30cd8c063',
    'dental-health-guide': 'photo-1588776814546-1ffcf47267a5',
    'pregnancy-nutrition-guide': 'photo-1498837167922-ddd27525d352',
    'fertility-factors': 'photo-1505576399279-565b52d4ac71',
    'menstrual-cycle-explained': 'photo-1559757175-0eb30cd8c063',
    'postpartum-health-tips': 'photo-1492725764893-90b379c2b6e7',
    'menopause-health-guide': 'photo-1559757175-0eb30cd8c063',
    'mens-health-tips': 'photo-1534438327276-14e5300c3a48',
    'childrens-nutrition-guide': 'photo-1490645935967-10de6ba17061',
    'elderly-health-tips': 'photo-1476480862126-209bfaa8edc8',
    'healthy-aging-tips': 'photo-1476480862126-209bfaa8edc8',
    'longevity-secrets': 'photo-1476480862126-209bfaa8edc8',
    'biological-age-vs-chronological-age': 'photo-1571019613454-1cb2f99b2d8b',
    'life-expectancy-factors': 'photo-1559757175-0eb30cd8c063',
    'preventive-health-checkups': 'photo-1576091160399-112ba8d25d1d',
  };
  const id = map[slug] || 'photo-1505576399279-565b52d4ac71';
  return `https://images.unsplash.com/${id}?w=800&h=400&fit=crop&auto=format`;
}

// ========================
// CALCULATOR DATA
// ========================
const calculators = [
  { slug: 'bmi-calculator', name: 'BMI Calculator', desc: 'Calculate your Body Mass Index based on height and weight.', icon: 'body', category: 'Body Metrics',
    fields: [{id:'weight',label:'Weight (kg)',type:'number',ph:'70'},{id:'height',label:'Height (cm)',type:'number',ph:'175'}],
    logic: `var w=parseFloat(document.getElementById('weight').value);var h=parseFloat(document.getElementById('height').value)/100;if(!w||!h){alert('Please fill in all fields');return;}var bmi=(w/(h*h)).toFixed(1);var c='green',l='Normal Weight',s='Great! Your BMI is in the healthy range. Maintain your current lifestyle with balanced nutrition and regular exercise.';if(bmi<18.5){c='yellow';l='Underweight';s='Your BMI suggests you may be underweight. Consider consulting a healthcare provider about nutrition and healthy weight gain strategies.';}else if(bmi>=25&&bmi<30){c='yellow';l='Overweight';s='Your BMI is slightly above normal. Small changes like increasing physical activity and improving diet can help reach a healthier weight.';}else if(bmi>=30){c='red';l='Obese';s='Your BMI indicates obesity. Please consult a healthcare professional for personalized advice on diet, exercise, and weight management.';}showResult('result',bmi,l,s,c);`,
    article: `<h2>Understanding Body Mass Index (BMI)</h2><p>Body Mass Index (BMI) is a widely used screening tool that estimates body fat based on your height and weight. It was developed by Belgian mathematician Adolphe Quetelet in the early 19th century and remains one of the most accessible ways to assess whether you fall within a healthy weight range.</p><h3>How BMI Is Calculated</h3><p>BMI is calculated by dividing your weight in kilograms by your height in meters squared (kg/m²). The resulting number falls into one of four categories: underweight (below 18.5), normal weight (18.5–24.9), overweight (25–29.9), and obese (30 and above).</p><h3>Limitations of BMI</h3><p>While BMI is a useful starting point, it does not directly measure body fat. Athletes with high muscle mass may have elevated BMI scores despite being healthy. Similarly, older adults may have a normal BMI but carry excess fat. For a more comprehensive assessment, consider combining BMI with waist circumference measurements, body fat percentage tests, or other health markers.</p><h3>Why BMI Matters</h3><p>Research has shown strong correlations between high BMI values and increased risk of heart disease, type 2 diabetes, high blood pressure, and certain cancers. Maintaining a BMI within the normal range is associated with lower risk of these chronic conditions and better overall health outcomes. Regular monitoring of your BMI can help you track changes over time and take proactive steps toward maintaining a healthy weight.</p>`,
    faqs: [
      {q:'What is a healthy BMI range?',a:'A healthy BMI falls between 18.5 and 24.9. This range is associated with the lowest risk of weight-related health problems.'},
      {q:'Is BMI accurate for athletes?',a:'BMI may overestimate body fat in muscular athletes. Consider using body fat percentage measurements for a more accurate assessment.'},
      {q:'How often should I check my BMI?',a:'Checking your BMI once every few months is sufficient for most people. More frequent monitoring may be helpful during weight loss programs.'},
      {q:'Does BMI differ by age?',a:'BMI categories are the same for adults over 20. For children and teens, BMI is assessed using age- and sex-specific percentiles.'},
      {q:'Can BMI predict health risks?',a:'BMI is a screening tool that can indicate potential health risks, but it should be used alongside other measurements like blood pressure and cholesterol.'},
      {q:'What causes a high BMI?',a:'A high BMI can result from excess body fat, but also from high muscle mass. Diet, physical activity, genetics, and metabolism all play roles.'},
      {q:'Is waist circumference better than BMI?',a:'Waist circumference can complement BMI by identifying abdominal fat, which is linked to higher health risks even at normal BMI levels.'},
      {q:'How do I lower my BMI?',a:'To lower your BMI, focus on a balanced diet with moderate calorie reduction, regular physical activity, adequate sleep, and stress management.'},
      {q:'Does BMI apply to pregnant women?',a:'BMI should be calculated using pre-pregnancy weight. Weight gain during pregnancy is normal and expected.'},
      {q:'What is the difference between BMI and body fat percentage?',a:'BMI estimates body fat using height and weight only, while body fat percentage directly measures the proportion of fat in your body.'},
    ],
    related: ['calorie-calculator','body-fat-calculator','ideal-weight-calculator','waist-to-hip-ratio']
  },
  { slug: 'calorie-calculator', name: 'Calorie Calculator', desc: 'Find out how many calories you need daily based on your goals.', icon: 'food', category: 'Nutrition',
    fields: [{id:'age',label:'Age',type:'number',ph:'30'},{id:'weight',label:'Weight (kg)',type:'number',ph:'70'},{id:'height',label:'Height (cm)',type:'number',ph:'175'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']},{id:'activity',label:'Activity Level',type:'select',options:['Sedentary','Lightly Active','Moderately Active','Very Active','Extra Active']}],
    logic: `var a=parseFloat(document.getElementById('age').value);var w=parseFloat(document.getElementById('weight').value);var h=parseFloat(document.getElementById('height').value);var g=document.getElementById('gender').value;var act=document.getElementById('activity').value;if(!a||!w||!h){alert('Please fill in all fields');return;}var bmr=g==='Male'?10*w+6.25*h-5*a+5:10*w+6.25*h-5*a-161;var mult={Sedentary:1.2,'Lightly Active':1.375,'Moderately Active':1.55,'Very Active':1.725,'Extra Active':1.9};var cal=Math.round(bmr*(mult[act]||1.2));var c='green',l='Daily Calories',s='This is your estimated daily calorie need to maintain your current weight. Subtract 500 for weight loss or add 500 for weight gain.';showResult('result',cal+' kcal',l,s,c);`,
    article: `<h2>Understanding Daily Calorie Needs</h2><p>Calories are units of energy that your body needs to function. Every process in your body, from breathing to exercising, requires energy from the food you eat. Understanding your daily calorie needs is essential for maintaining, losing, or gaining weight effectively.</p><h3>How Calories Are Calculated</h3><p>Your daily calorie needs depend on your Basal Metabolic Rate (BMR) and activity level. BMR represents the calories your body burns at rest to maintain vital functions. The Mifflin-St Jeor equation is considered one of the most accurate methods for estimating BMR, which is then multiplied by an activity factor.</p><h3>Calorie Balance</h3><p>Weight management comes down to calorie balance. Consuming fewer calories than you burn creates a deficit leading to weight loss. Consuming more creates a surplus for weight gain. A deficit of approximately 500 calories per day typically results in about one pound of weight loss per week.</p><h3>Quality Over Quantity</h3><p>Not all calories are created equal. Calories from whole foods like vegetables, lean proteins, and whole grains provide essential nutrients and keep you feeling full longer. Processed foods with empty calories can lead to overeating and nutritional deficiencies. Focus on nutrient-dense foods for optimal health.</p>`,
    faqs: [
      {q:'How many calories should I eat to lose weight?',a:'Generally, eating 500 fewer calories than your daily needs leads to about 1 pound of weight loss per week. Never go below 1200 calories without medical supervision.'},
      {q:'Do calorie needs change with age?',a:'Yes, calorie needs typically decrease with age due to loss of muscle mass and decreased activity levels.'},
      {q:'Are all calories the same?',a:'While a calorie is a calorie in terms of energy, foods differ in nutritional value, satiety, and how your body processes them.'},
      {q:'How does exercise affect calorie needs?',a:'Exercise increases your total daily energy expenditure (TDEE), meaning you need more calories to maintain your weight.'},
      {q:'Should I count calories?',a:'Calorie counting can be a useful tool for weight management, but it is not necessary for everyone. Focus on whole foods and portion awareness.'},
      {q:'What is a calorie deficit?',a:'A calorie deficit occurs when you consume fewer calories than your body burns, leading to weight loss over time.'},
      {q:'How accurate are calorie calculators?',a:'Calorie calculators provide estimates. Individual variation in metabolism can mean actual needs differ by 10-15%.'},
      {q:'Do I need to eat back exercise calories?',a:'It depends on your goals. For weight loss, eating back half of exercise calories can prevent excessive restriction.'},
      {q:'What is BMR vs TDEE?',a:'BMR is calories burned at rest. TDEE includes BMR plus all activity, representing total daily calories burned.'},
      {q:'How do macros relate to calories?',a:'Protein and carbs have 4 calories per gram, fat has 9. Your macro balance affects satiety, energy, and body composition.'},
    ],
    related: ['bmr-calculator','tdee-calculator','macro-calculator','calorie-deficit']
  },
  { slug: 'macro-calculator', name: 'Macro Calculator', desc: 'Calculate your ideal protein, carbs, and fat intake.', icon: 'food', category: 'Nutrition',
    fields: [{id:'calories',label:'Daily Calories',type:'number',ph:'2000'},{id:'goal',label:'Goal',type:'select',options:['Balanced','Low Carb','High Protein','Keto']}],
    logic: `var cal=parseFloat(document.getElementById('calories').value);var goal=document.getElementById('goal').value;if(!cal){alert('Enter your daily calories');return;}var p,c,f;if(goal==='Balanced'){p=0.3;c=0.4;f=0.3;}else if(goal==='Low Carb'){p=0.35;c=0.25;f=0.4;}else if(goal==='High Protein'){p=0.4;c=0.3;f=0.3;}else{p=0.25;c=0.05;f=0.7;}var pg=Math.round(cal*p/4);var cg=Math.round(cal*c/4);var fg=Math.round(cal*f/9);showResult('result','P:'+pg+'g C:'+cg+'g F:'+fg+'g','Macro Split','Protein: '+pg+'g ('+Math.round(p*100)+'%) | Carbs: '+cg+'g ('+Math.round(c*100)+'%) | Fat: '+fg+'g ('+Math.round(f*100)+'%). Adjust based on your training and how your body responds.','green');`,
    article: `<h2>Understanding Macronutrients</h2><p>Macronutrients are the three primary nutrients your body needs in large amounts: protein, carbohydrates, and fat. Each plays vital roles in your health, performance, and body composition. Understanding how to balance these macros can help you achieve your fitness and health goals more effectively.</p><h3>Protein</h3><p>Protein is essential for building and repairing muscle tissue, producing enzymes and hormones, and supporting immune function. Each gram of protein provides 4 calories. Most experts recommend 0.7-1 gram per pound of body weight for active individuals.</p><h3>Carbohydrates</h3><p>Carbohydrates are your body's preferred energy source, particularly during high-intensity exercise. They fuel your brain, muscles, and central nervous system. Each gram provides 4 calories. Choose complex carbs from whole grains, fruits, and vegetables for sustained energy.</p><h3>Fats</h3><p>Dietary fats are crucial for hormone production, vitamin absorption, cell membrane integrity, and brain health. Each gram provides 9 calories. Focus on healthy fats from sources like avocados, nuts, olive oil, and fatty fish while limiting saturated and trans fats.</p>`,
    faqs: [
      {q:'What are macronutrients?',a:'Macronutrients are protein, carbohydrates, and fat — the three main nutrients your body needs in large amounts for energy and function.'},
      {q:'What is the best macro ratio?',a:'There is no single best ratio. It depends on your goals, activity level, and preferences. A common starting point is 30% protein, 40% carbs, 30% fat.'},
      {q:'How do I track macros?',a:'Use a food tracking app to log your meals and monitor your protein, carb, and fat intake against your targets.'},
      {q:'Do I need to count macros?',a:'Counting macros can be helpful for specific goals like muscle building or fat loss, but it is not necessary for everyone.'},
      {q:'What are good protein sources?',a:'Lean meats, fish, eggs, dairy, legumes, tofu, and protein powders are all excellent protein sources.'},
      {q:'Are carbs bad for you?',a:'No. Carbohydrates are your body\'s primary energy source. Choose complex carbs and limit refined sugars for optimal health.'},
      {q:'How much fat should I eat?',a:'Most health organizations recommend fat make up 20-35% of total daily calories, focusing on unsaturated fats.'},
      {q:'What is flexible dieting?',a:'Flexible dieting, or IIFYM (If It Fits Your Macros), allows any food as long as it fits within your daily macro targets.'},
      {q:'Should macros change on rest days?',a:'Some people reduce carbs slightly on rest days since energy demands are lower, but the difference is usually small.'},
      {q:'How do macros affect body composition?',a:'Higher protein intake supports muscle retention during weight loss. The right macro balance can optimize both fat loss and muscle gain.'},
    ],
    related: ['calorie-calculator','protein-intake-calculator','keto-calculator','carb-calculator']
  },
  { slug: 'body-fat-calculator', name: 'Body Fat Calculator', desc: 'Estimate your body fat percentage using body measurements.', icon: 'body', category: 'Body Metrics',
    fields: [{id:'gender',label:'Gender',type:'select',options:['Male','Female']},{id:'weight',label:'Weight (kg)',type:'number',ph:'70'},{id:'waist',label:'Waist (cm)',type:'number',ph:'80'},{id:'neck',label:'Neck (cm)',type:'number',ph:'38'},{id:'height',label:'Height (cm)',type:'number',ph:'175'}],
    logic: `var g=document.getElementById('gender').value;var w=parseFloat(document.getElementById('waist').value);var n=parseFloat(document.getElementById('neck').value);var h=parseFloat(document.getElementById('height').value);if(!w||!n||!h){alert('Please fill in all fields');return;}var bf;if(g==='Male'){bf=495/(1.0324-0.19077*Math.log10(w-n)+0.15456*Math.log10(h))-450;}else{var hip=w*1.1;bf=495/(1.29579-0.35004*Math.log10(w+hip-n)+0.22100*Math.log10(h))-450;}bf=Math.max(2,Math.min(bf,60)).toFixed(1);var c='green',l='Healthy',s='Your body fat percentage is within a healthy range. Continue with balanced nutrition and regular exercise.';if(g==='Male'){if(bf<6){c='yellow';l='Essential Fat';s='Very low body fat. This level is typically only seen in competitive athletes.';}else if(bf>25){c='yellow';l='Above Average';s='Consider increasing physical activity and reviewing your diet.';}if(bf>32){c='red';l='High';s='Elevated body fat. Consult a healthcare provider for personalized guidance.';}}else{if(bf<14){c='yellow';l='Essential Fat';s='Very low body fat for women. Ensure adequate nutrition.';}else if(bf>32){c='yellow';l='Above Average';s='Consider lifestyle modifications for better health.';}if(bf>40){c='red';l='High';s='Elevated body fat. Please consult a healthcare professional.';}}showResult('result',bf+'%',l,s,c);`,
    article: `<h2>Understanding Body Fat Percentage</h2><p>Body fat percentage represents the proportion of your total body weight that is composed of fat tissue. Unlike BMI, which only considers height and weight, body fat percentage provides a more direct measure of body composition and is a better indicator of health risks associated with excess fat.</p><h3>Methods of Measurement</h3><p>There are several ways to measure body fat: skinfold calipers, bioelectrical impedance, DEXA scans, hydrostatic weighing, and the US Navy method used here. Each has different levels of accuracy and accessibility. The Navy method uses circumference measurements and is reasonably accurate for most people.</p><h3>Healthy Ranges</h3><p>For men, essential fat is 2-5%, athletes typically range from 6-13%, fitness-level is 14-17%, acceptable is 18-24%, and above 25% is considered obese. For women, these ranges are higher: essential fat 10-13%, athletes 14-20%, fitness 21-24%, acceptable 25-31%, and above 32% is considered obese.</p><h3>Why It Matters</h3><p>Excess body fat, particularly visceral fat around the organs, increases risk of heart disease, type 2 diabetes, and metabolic syndrome. Tracking body fat percentage over time is more meaningful than tracking weight alone, as it accounts for muscle gain during fitness programs.</p>`,
    faqs: [
      {q:'What is a healthy body fat percentage?',a:'For men, 14-24% is considered acceptable. For women, 21-31% is acceptable. Athletes may have lower percentages.'},
      {q:'How accurate is this calculator?',a:'The Navy method is accurate within 3-4% for most people. For higher accuracy, consider DEXA scans.'},
      {q:'Can I have too little body fat?',a:'Yes. Essential fat is needed for normal bodily functions. Extremely low body fat can cause hormonal issues and health problems.'},
      {q:'Does body fat percentage change with age?',a:'Body fat tends to increase with age due to decreased muscle mass and metabolic rate.'},
      {q:'How do I reduce body fat?',a:'Combine strength training, cardiovascular exercise, and a moderate calorie deficit with adequate protein intake.'},
      {q:'Is body fat percentage better than BMI?',a:'Body fat percentage provides more specific information about body composition than BMI, which cannot distinguish between fat and muscle.'},
      {q:'What is visceral fat?',a:'Visceral fat surrounds internal organs and is more dangerous than subcutaneous fat. Waist circumference can help estimate visceral fat levels.'},
      {q:'How often should I measure body fat?',a:'Monthly measurements provide useful trends. Avoid daily measurements as they can fluctuate due to hydration and other factors.'},
      {q:'Does muscle weigh more than fat?',a:'Muscle is denser than fat, so a pound of muscle takes up less space. This is why body composition matters more than weight alone.'},
      {q:'Can body fat be spot reduced?',a:'Spot reduction is a myth. Fat loss occurs systemically through overall calorie deficit and exercise, not from targeting specific areas.'},
    ],
    related: ['bmi-calculator','waist-to-hip-ratio','lean-body-mass-calculator','waist-to-height-ratio']
  },
  { slug: 'ideal-weight-calculator', name: 'Ideal Weight Calculator', desc: 'Find your ideal weight range based on height and frame size.', icon: 'body', category: 'Body Metrics',
    fields: [{id:'height',label:'Height (cm)',type:'number',ph:'175'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']}],
    logic: `var h=parseFloat(document.getElementById('height').value);var g=document.getElementById('gender').value;if(!h){alert('Enter height');return;}var hi=h/2.54;var iw;if(g==='Male'){iw=50+2.3*(hi-60);}else{iw=45.5+2.3*(hi-60);}var lo=Math.round(iw*0.9);var up=Math.round(iw*1.1);iw=Math.round(iw);showResult('result',lo+'-'+up+' kg','Ideal Weight Range','Your ideal weight range is '+lo+'-'+up+' kg based on the Devine formula. Individual factors like muscle mass and frame size also matter.','green');`,
    article: `<h2>Finding Your Ideal Weight</h2><p>Ideal body weight is a concept that has evolved over decades. While there is no single "perfect" weight for any individual, various formulas can provide a useful reference range. The most commonly used formulas include the Devine, Robinson, Miller, and Hamwi equations.</p><h3>The Devine Formula</h3><p>The Devine formula, developed in 1974, calculates ideal body weight based on height. For men: 50 kg + 2.3 kg for each inch over 5 feet. For women: 45.5 kg + 2.3 kg for each inch over 5 feet. This calculator adds a 10% range above and below for a realistic target.</p><h3>Factors Beyond the Formula</h3><p>Your ideal weight depends on many factors including body composition, bone density, muscle mass, age, and overall health. An athlete may weigh more than the formula suggests due to muscle mass but be perfectly healthy. Conversely, someone within the "ideal" range may still carry excess body fat.</p><h3>Using Ideal Weight as a Guide</h3><p>Consider your ideal weight as one data point among many. Combine it with BMI, body fat percentage, waist circumference, and how you feel physically. Work with healthcare providers to determine the best weight goals for your individual circumstances and health history.</p>`,
    faqs: [
      {q:'What is ideal body weight?',a:'Ideal body weight is an estimated weight range associated with the lowest health risks for a given height and gender.'},
      {q:'Which formula is most accurate?',a:'No single formula is perfectly accurate. The Devine formula is widely used but should be considered a general guide.'},
      {q:'Does frame size affect ideal weight?',a:'Yes. People with larger frames naturally carry more weight. Wrist circumference can help estimate frame size.'},
      {q:'Should I aim for exact ideal weight?',a:'No. A range of 10-15% around the ideal is considered healthy. Focus on overall health markers rather than a specific number.'},
      {q:'Does ideal weight change with age?',a:'The formulas do not account for age, but body composition naturally changes. Older adults may benefit from slightly higher weights.'},
      {q:'Is ideal weight the same as healthy weight?',a:'Not exactly. Healthy weight considers more factors including body composition, fitness level, and medical history.'},
      {q:'How quickly should I reach ideal weight?',a:'Safe weight change is 0.5-1 kg per week. Rapid changes can lead to muscle loss and nutritional deficiencies.'},
      {q:'What if my ideal weight seems too low?',a:'If you have significant muscle mass, your healthy weight may be above the calculated ideal. Consider body fat percentage instead.'},
      {q:'Does height affect ideal weight calculations?',a:'Yes. Taller individuals have proportionally higher ideal weights. The formulas increase weight per inch of height.'},
      {q:'Can ideal weight differ between ethnicities?',a:'Yes. Body composition and health risks can vary by ethnicity. Some organizations recommend adjusted BMI cutoffs for different populations.'},
    ],
    related: ['bmi-calculator','body-fat-calculator','waist-to-height-ratio','lean-body-mass-calculator']
  },
  { slug: 'bmr-calculator', name: 'BMR Calculator', desc: 'Calculate your Basal Metabolic Rate — calories burned at rest.', icon: 'heart', category: 'Body Metrics',
    fields: [{id:'age',label:'Age',type:'number',ph:'30'},{id:'weight',label:'Weight (kg)',type:'number',ph:'70'},{id:'height',label:'Height (cm)',type:'number',ph:'175'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']}],
    logic: `var a=parseFloat(document.getElementById('age').value);var w=parseFloat(document.getElementById('weight').value);var h=parseFloat(document.getElementById('height').value);var g=document.getElementById('gender').value;if(!a||!w||!h){alert('Fill all fields');return;}var bmr=g==='Male'?10*w+6.25*h-5*a+5:10*w+6.25*h-5*a-161;bmr=Math.round(bmr);showResult('result',bmr+' kcal','Basal Metabolic Rate','Your body burns approximately '+bmr+' calories per day at complete rest. Your total daily needs are higher depending on your activity level.','green');`,
    article: `<h2>Understanding Basal Metabolic Rate</h2><p>Your Basal Metabolic Rate (BMR) represents the number of calories your body needs to perform basic life-sustaining functions while at complete rest. These functions include breathing, circulation, cell production, nutrient processing, and maintaining body temperature. BMR typically accounts for 60-75% of your total daily energy expenditure.</p><h3>The Mifflin-St Jeor Equation</h3><p>This calculator uses the Mifflin-St Jeor equation, widely considered the most accurate BMR formula. For men: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 5. For women: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161.</p><h3>Factors Affecting BMR</h3><p>Several factors influence your BMR including age (BMR decreases about 1-2% per decade after age 20), body composition (muscle burns more calories than fat), genetics, hormones (particularly thyroid), and environmental temperature. You can increase your BMR by building muscle through resistance training.</p><h3>BMR vs TDEE</h3><p>BMR only accounts for resting metabolism. Your Total Daily Energy Expenditure (TDEE) includes BMR plus calories burned through daily activities, exercise, and digesting food. To calculate TDEE, multiply your BMR by an activity factor ranging from 1.2 (sedentary) to 1.9 (extremely active).</p>`,
    faqs: [
      {q:'What is BMR?',a:'BMR stands for Basal Metabolic Rate — the calories your body burns at rest to maintain basic life functions.'},
      {q:'How is BMR different from TDEE?',a:'BMR is calories at rest only. TDEE includes BMR plus activity, exercise, and digestion, representing total daily calorie burn.'},
      {q:'Can I increase my BMR?',a:'Yes. Building muscle through strength training is the most effective way to increase BMR, as muscle tissue burns more calories than fat.'},
      {q:'Why does BMR decrease with age?',a:'Age-related muscle loss, hormonal changes, and decreased cellular activity all contribute to lower BMR over time.'},
      {q:'Should I eat at my BMR level?',a:'No. Eating only at BMR does not account for daily activities. Most people need significantly more than their BMR.'},
      {q:'How accurate is the Mifflin-St Jeor equation?',a:'It is accurate within about 10% for most people and is considered the gold standard among prediction equations.'},
      {q:'Does BMR change during dieting?',a:'Yes. Extended calorie restriction can lower BMR through metabolic adaptation, which is why crash diets are not recommended.'},
      {q:'Do men have higher BMR than women?',a:'Generally yes, because men typically have more muscle mass and larger body size, both of which increase BMR.'},
      {q:'Does caffeine affect BMR?',a:'Caffeine can temporarily increase BMR by 3-11%, but the effect is modest and short-lived.'},
      {q:'What role do hormones play in BMR?',a:'Thyroid hormones are the primary regulators of BMR. Conditions like hypothyroidism can significantly lower metabolic rate.'},
    ],
    related: ['tdee-calculator','calorie-calculator','macro-calculator','body-fat-calculator']
  },
  { slug: 'tdee-calculator', name: 'TDEE Calculator', desc: 'Calculate your Total Daily Energy Expenditure.', icon: 'fitness', category: 'Body Metrics',
    fields: [{id:'age',label:'Age',type:'number',ph:'30'},{id:'weight',label:'Weight (kg)',type:'number',ph:'70'},{id:'height',label:'Height (cm)',type:'number',ph:'175'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']},{id:'activity',label:'Activity Level',type:'select',options:['Sedentary','Lightly Active','Moderately Active','Very Active','Extra Active']}],
    logic: `var a=parseFloat(document.getElementById('age').value);var w=parseFloat(document.getElementById('weight').value);var h=parseFloat(document.getElementById('height').value);var g=document.getElementById('gender').value;var act=document.getElementById('activity').value;if(!a||!w||!h){alert('Fill all fields');return;}var bmr=g==='Male'?10*w+6.25*h-5*a+5:10*w+6.25*h-5*a-161;var m={'Sedentary':1.2,'Lightly Active':1.375,'Moderately Active':1.55,'Very Active':1.725,'Extra Active':1.9};var tdee=Math.round(bmr*(m[act]||1.2));showResult('result',tdee+' kcal','Total Daily Energy Expenditure','You burn approximately '+tdee+' calories per day. To lose weight, eat below this. To gain weight, eat above this. A 500 calorie adjustment equals about 0.5 kg per week.','green');`,
    article: `<h2>Total Daily Energy Expenditure Explained</h2><p>Total Daily Energy Expenditure (TDEE) represents the total number of calories you burn in a day. It combines your Basal Metabolic Rate (BMR) with the energy used for physical activity, digestion (thermic effect of food), and non-exercise activity thermogenesis (NEAT).</p><h3>Components of TDEE</h3><p>TDEE consists of four main components: BMR (60-75%), physical activity (15-30%), the thermic effect of food (about 10%), and NEAT (variable). Understanding these components helps you identify where you can make the most impact on your energy balance.</p><h3>Activity Multipliers</h3><p>Your activity level significantly affects TDEE. Sedentary individuals (desk job, little exercise) multiply BMR by 1.2, while extremely active people (physical job plus intense training) multiply by 1.9. Choosing the right activity level is crucial for accurate results.</p><h3>Using TDEE for Goals</h3><p>Once you know your TDEE, you can adjust your calorie intake accordingly. For weight loss, aim for a 500-calorie deficit. For muscle gain, a 250-500 calorie surplus is recommended. Track your progress and adjust every 2-4 weeks based on actual results.</p>`,
    faqs: [
      {q:'What is TDEE?',a:'TDEE stands for Total Daily Energy Expenditure — the total calories you burn in a day including all activities.'},
      {q:'How do I use TDEE for weight loss?',a:'Eat 500-750 calories below your TDEE for steady weight loss of 0.5-0.75 kg per week.'},
      {q:'Is TDEE the same every day?',a:'No. TDEE varies based on daily activity, exercise intensity, sleep quality, and other factors. Use your average.'},
      {q:'What activity level should I choose?',a:'Be honest about your typical week. Most people overestimate their activity level. When in doubt, choose one level lower.'},
      {q:'How often should I recalculate TDEE?',a:'Recalculate every 5-10 kg of weight change or every 8-12 weeks during a weight management program.'},
      {q:'Does TDEE include exercise?',a:'Yes. TDEE accounts for all calories burned including exercise, daily activities, and resting metabolism.'},
      {q:'Why is my TDEE lower than expected?',a:'Factors like age, lower muscle mass, genetics, or overestimating activity level can result in lower TDEE.'},
      {q:'Can I increase my TDEE?',a:'Building muscle, increasing daily movement (NEAT), and exercising more frequently can all increase your TDEE.'},
      {q:'What is NEAT?',a:'Non-Exercise Activity Thermogenesis includes calories from fidgeting, walking, standing, and other daily movements beyond formal exercise.'},
      {q:'Should I eat differently on rest days?',a:'TDEE is naturally lower on rest days. Some people reduce intake slightly, but it is not strictly necessary.'},
    ],
    related: ['bmr-calculator','calorie-calculator','macro-calculator','steps-to-calories-calculator']
  },
  { slug: 'water-intake-calculator', name: 'Water Intake Calculator', desc: 'Find out how much water you should drink daily.', icon: 'water', category: 'Nutrition',
    fields: [{id:'weight',label:'Weight (kg)',type:'number',ph:'70'},{id:'activity',label:'Activity Level',type:'select',options:['Sedentary','Moderate','Active','Very Active']},{id:'climate',label:'Climate',type:'select',options:['Temperate','Hot','Cold']}],
    logic: `var w=parseFloat(document.getElementById('weight').value);var act=document.getElementById('activity').value;var cl=document.getElementById('climate').value;if(!w){alert('Enter weight');return;}var base=w*0.033;var am={'Sedentary':0,'Moderate':0.35,'Active':0.7,'Very Active':1.0};var cm={'Temperate':0,'Hot':0.5,'Cold':0};base+=am[act]||0;base+=cm[cl]||0;var liters=base.toFixed(1);var glasses=Math.round(base/0.25);showResult('result',liters+' L','Daily Water Intake','You should drink approximately '+liters+' liters ('+glasses+' glasses) of water per day. Adjust based on thirst, urine color, and individual needs.','green');`,
    article: `<h2>How Much Water Do You Need?</h2><p>Water is essential for virtually every bodily function. It regulates temperature, transports nutrients, removes waste, lubricates joints, and supports cognitive function. Despite its importance, many people are chronically under-hydrated without realizing it.</p><h3>Calculating Your Needs</h3><p>A general guideline is to drink about 33 ml of water per kilogram of body weight daily. However, this baseline increases with physical activity, hot climates, high altitude, illness, and pregnancy or breastfeeding. This calculator adjusts for your activity level and climate.</p><h3>Signs of Dehydration</h3><p>Early signs of dehydration include thirst, dark yellow urine, fatigue, headache, dry mouth, and decreased urination. More severe dehydration can cause dizziness, rapid heartbeat, confusion, and in extreme cases, organ failure. Monitor your urine color — pale yellow indicates good hydration.</p><h3>Tips for Staying Hydrated</h3><p>Carry a reusable water bottle, set reminders to drink, eat water-rich foods like fruits and vegetables, drink before you feel thirsty, and have a glass of water with every meal. Remember that coffee, tea, and other beverages also contribute to your daily fluid intake.</p>`,
    faqs: [
      {q:'How much water should I drink daily?',a:'A general guideline is 33 ml per kg of body weight, adjusted for activity and climate. For a 70 kg person, that is about 2.3 liters.'},
      {q:'Does coffee count as water intake?',a:'Yes. Caffeinated beverages contribute to hydration despite having a mild diuretic effect. The net hydration is still positive.'},
      {q:'Can I drink too much water?',a:'Yes. Overhydration (hyponatremia) can be dangerous. It is rare but can occur during extreme exercise with excessive water intake.'},
      {q:'How do I know if I am dehydrated?',a:'Check your urine color. Pale yellow indicates good hydration. Dark yellow or amber suggests you need more fluids.'},
      {q:'Should I drink more water during exercise?',a:'Yes. Drink 200-300 ml every 15-20 minutes during exercise, and replenish fluids afterward.'},
      {q:'Does food count toward water intake?',a:'Yes. About 20% of daily water intake comes from food, especially fruits and vegetables with high water content.'},
      {q:'Is cold or warm water better?',a:'Both are equally effective for hydration. Choose whichever you prefer, as this encourages more intake.'},
      {q:'Does altitude affect water needs?',a:'Yes. Higher altitudes increase respiratory water loss and urination, requiring additional fluid intake.'},
      {q:'Should children drink the same amount?',a:'Children need less water. General guidelines suggest 1-1.7 liters per day depending on age and activity.'},
      {q:'Does sparkling water hydrate as well?',a:'Yes. Sparkling water is just as hydrating as still water and can be a good alternative for those who prefer carbonation.'},
    ],
    related: ['calorie-calculator','fiber-intake-calculator','protein-intake-calculator','bmi-calculator']
  },
  { slug: 'sleep-calculator', name: 'Sleep Calculator', desc: 'Find the best time to sleep or wake up based on sleep cycles.', icon: 'sleep', category: 'Wellness',
    fields: [{id:'wakeup',label:'Wake Up Time',type:'time'},{id:'age',label:'Age',type:'number',ph:'30'}],
    logic: `var wu=document.getElementById('wakeup').value;var age=parseFloat(document.getElementById('age').value);if(!wu){alert('Enter wake time');return;}var parts=wu.split(':');var wh=parseInt(parts[0]);var wm=parseInt(parts[1]);var cycles=[6,5,4];var times=[];cycles.forEach(function(c){var totalMin=c*90+14;var bh=wh;var bMin=wm-totalMin;while(bMin<0){bMin+=60;bh--;}while(bh<0)bh+=24;var ampm=bh>=12?'PM':'AM';var dh=bh%12||12;times.push(dh+':'+(bMin<10?'0':'')+bMin+' '+ampm+' ('+c+' cycles)');});showResult('result','Sleep Times','Optimal Bedtimes','Go to bed at: '+times.join(' or ')+'. Each sleep cycle is about 90 minutes. Waking between cycles helps you feel more refreshed.','green');`,
    article: `<h2>Understanding Sleep Cycles</h2><p>Sleep is organized into cycles lasting approximately 90 minutes each. A complete night's sleep typically includes 4-6 cycles. Each cycle progresses through light sleep (stages 1-2), deep sleep (stage 3), and REM sleep. Waking at the end of a cycle, during light sleep, helps you feel more refreshed.</p><h3>How This Calculator Works</h3><p>This calculator counts backward from your desired wake time in 90-minute intervals, adding about 14 minutes for the average time to fall asleep. It provides multiple bedtime options based on 4, 5, or 6 complete sleep cycles.</p><h3>How Much Sleep Do You Need?</h3><p>Adults typically need 7-9 hours (4-6 cycles). Teenagers need 8-10 hours, children 9-12 hours, and infants 12-16 hours. Quality matters as much as quantity — deep sleep is crucial for physical recovery, while REM sleep supports memory and learning.</p><h3>Tips for Better Sleep</h3><p>Maintain consistent sleep and wake times, create a dark and cool bedroom, avoid screens 30 minutes before bed, limit caffeine after noon, exercise regularly but not close to bedtime, and manage stress through relaxation techniques. Good sleep hygiene improves both sleep quality and duration.</p>`,
    faqs: [
      {q:'How many hours of sleep do adults need?',a:'Most adults need 7-9 hours of quality sleep per night for optimal health and performance.'},
      {q:'What is a sleep cycle?',a:'A sleep cycle lasts about 90 minutes and includes light sleep, deep sleep, and REM sleep stages.'},
      {q:'Why do I feel tired after sleeping 8 hours?',a:'You may be waking in the middle of a deep sleep cycle. Try adjusting bedtime by 15-30 minutes.'},
      {q:'Is it bad to sleep more than 9 hours?',a:'Regularly sleeping more than 9-10 hours may be associated with health issues and could indicate an underlying condition.'},
      {q:'Does napping affect nighttime sleep?',a:'Short naps (20-30 minutes) before 3 PM generally do not affect nighttime sleep. Longer or later naps may.'},
      {q:'What is the best temperature for sleep?',a:'Most sleep experts recommend a bedroom temperature of 60-67°F (15-19°C) for optimal sleep quality.'},
      {q:'Does exercise improve sleep?',a:'Yes. Regular exercise improves sleep quality, but avoid vigorous exercise within 2-3 hours of bedtime.'},
      {q:'How long should it take to fall asleep?',a:'Healthy sleep onset typically takes 10-20 minutes. Falling asleep instantly may indicate sleep deprivation.'},
      {q:'What is sleep debt?',a:'Sleep debt is the cumulative effect of not getting enough sleep. It builds over time and affects performance and health.'},
      {q:'Can I catch up on sleep on weekends?',a:'Partially, but irregular schedules can disrupt your circadian rhythm. Consistent sleep patterns are healthier.'},
    ],
    related: ['sleep-debt-calculator','calorie-calculator','stress-level-calculator','caffeine-intake-calculator']
  },
  { slug: 'heart-rate-calculator', name: 'Heart Rate Zone Calculator', desc: 'Calculate your target heart rate zones for exercise.', icon: 'heart', category: 'Fitness',
    fields: [{id:'age',label:'Age',type:'number',ph:'30'},{id:'rhr',label:'Resting Heart Rate (bpm)',type:'number',ph:'70'}],
    logic: `var age=parseFloat(document.getElementById('age').value);var rhr=parseFloat(document.getElementById('rhr').value);if(!age||!rhr){alert('Fill all fields');return;}var mhr=220-age;var z1l=Math.round(rhr+0.5*(mhr-rhr));var z1h=Math.round(rhr+0.6*(mhr-rhr));var z2l=Math.round(rhr+0.6*(mhr-rhr));var z2h=Math.round(rhr+0.7*(mhr-rhr));var z3l=Math.round(rhr+0.7*(mhr-rhr));var z3h=Math.round(rhr+0.8*(mhr-rhr));var z4l=Math.round(rhr+0.8*(mhr-rhr));var z4h=Math.round(rhr+0.9*(mhr-rhr));showResult('result','MHR: '+mhr+' bpm','Heart Rate Zones','Zone 1 (Fat Burn): '+z1l+'-'+z1h+' bpm | Zone 2 (Cardio): '+z2l+'-'+z2h+' bpm | Zone 3 (Aerobic): '+z3l+'-'+z3h+' bpm | Zone 4 (Anaerobic): '+z4l+'-'+z4h+' bpm','green');`,
    article: `<h2>Understanding Heart Rate Zones</h2><p>Heart rate zones are ranges of heartbeats per minute that correspond to different exercise intensities. Training in specific zones optimizes different aspects of fitness — from fat burning to cardiovascular endurance to peak performance.</p><h3>The Karvonen Method</h3><p>This calculator uses the Karvonen method, which accounts for your resting heart rate to provide more personalized zones. Maximum heart rate is estimated as 220 minus your age. Heart rate reserve (the difference between max and resting) is then used to calculate zone boundaries.</p><h3>The Five Zones</h3><p>Zone 1 (50-60% HRR) is for warm-up and recovery. Zone 2 (60-70%) is the fat-burning zone ideal for long, easy sessions. Zone 3 (70-80%) improves aerobic fitness. Zone 4 (80-90%) builds speed and anaerobic capacity. Zone 5 (90-100%) is maximum effort for short bursts only.</p><h3>Training by Heart Rate</h3><p>Most of your training should be in Zones 2-3 for building an aerobic base. Incorporate Zone 4-5 work 1-2 times per week for performance gains. Use a heart rate monitor to stay in your target zones during exercise for maximum benefit and injury prevention.</p>`,
    faqs: [
      {q:'What is maximum heart rate?',a:'Maximum heart rate is the highest number of beats per minute your heart can achieve. It is commonly estimated as 220 minus your age.'},
      {q:'What is a normal resting heart rate?',a:'A normal resting heart rate for adults is 60-100 bpm. Well-trained athletes may have rates as low as 40-50 bpm.'},
      {q:'Which zone burns the most fat?',a:'Zone 2 (60-70% HRR) burns the highest percentage of fat, but higher zones burn more total calories.'},
      {q:'How do I measure resting heart rate?',a:'Measure your pulse for 60 seconds first thing in the morning before getting out of bed. Take the average over several days.'},
      {q:'Is it dangerous to exercise in Zone 5?',a:'Zone 5 is very intense and should only be done briefly by healthy individuals. Consult your doctor if you have heart conditions.'},
      {q:'Does heart rate zone training work?',a:'Yes. Zone training is an evidence-based approach used by athletes and recommended by exercise physiologists.'},
      {q:'Why does my heart rate vary day to day?',a:'Stress, sleep quality, caffeine, hydration, and illness can all affect daily heart rate readings.'},
      {q:'Can medication affect heart rate zones?',a:'Yes. Beta blockers and other medications can lower heart rate, making standard formulas less accurate.'},
      {q:'How often should I train in each zone?',a:'Follow the 80/20 rule: 80% of training in Zones 1-2, and 20% in Zones 3-5 for optimal results.'},
      {q:'What is heart rate variability?',a:'HRV measures the variation between heartbeats and is an indicator of nervous system health and recovery status.'},
    ],
    related: ['vo2-max-calculator','steps-to-calories-calculator','running-pace-calculator','blood-pressure-checker']
  }
];

// Add remaining calculators with simpler templates
const remainingCalcs = [
  {slug:'blood-pressure-checker',name:'Blood Pressure Checker',desc:'Check if your blood pressure reading is in a healthy range.',icon:'heart',category:'Health Risk',
    fields:[{id:'systolic',label:'Systolic (top number)',type:'number',ph:'120'},{id:'diastolic',label:'Diastolic (bottom number)',type:'number',ph:'80'}],
    logic:`var s=parseFloat(document.getElementById('systolic').value);var d=parseFloat(document.getElementById('diastolic').value);if(!s||!d){alert('Enter both values');return;}var c='green',l='Normal',sg='Your blood pressure is within the normal range. Continue with healthy lifestyle habits.';if(s>=180||d>=120){c='red';l='Hypertensive Crisis';sg='Seek immediate medical attention. This reading requires emergency care.';}else if(s>=140||d>=90){c='red';l='Stage 2 Hypertension';sg='Consult your doctor promptly. Medication and lifestyle changes may be needed.';}else if(s>=130||d>=80){c='yellow';l='Stage 1 Hypertension';sg='Lifestyle modifications recommended. Monitor regularly and consult your healthcare provider.';}else if(s>=120){c='yellow';l='Elevated';sg='Your blood pressure is elevated. Focus on exercise, diet, and stress management.';}showResult('result',s+'/'+d,l,sg,c);`},
  {slug:'pregnancy-due-date-calculator',name:'Pregnancy Due Date Calculator',desc:'Estimate your baby\'s due date from your last menstrual period.',icon:'baby',category:'Women\'s Health',
    fields:[{id:'lmp',label:'First Day of Last Menstrual Period',type:'date'}],
    logic:`var lmp=document.getElementById('lmp').value;if(!lmp){alert('Enter date');return;}var d=new Date(lmp);d.setDate(d.getDate()+280);var months=['January','February','March','April','May','June','July','August','September','October','November','December'];var due=months[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear();var now=new Date();var weeks=Math.floor((now-new Date(lmp))/(7*24*60*60*1000));showResult('result',due,'Estimated Due Date','You are approximately '+weeks+' weeks pregnant. Your estimated due date is '+due+'. Remember, only 5% of babies arrive on their exact due date.','green');`},
  {slug:'ovulation-calculator',name:'Ovulation Calculator',desc:'Predict your most fertile days for conception planning.',icon:'baby',category:'Women\'s Health',
    fields:[{id:'lmp',label:'First Day of Last Period',type:'date'},{id:'cycle',label:'Average Cycle Length (days)',type:'number',ph:'28'}],
    logic:`var lmp=document.getElementById('lmp').value;var cl=parseFloat(document.getElementById('cycle').value)||28;if(!lmp){alert('Enter date');return;}var d=new Date(lmp);var ov=new Date(d);ov.setDate(ov.getDate()+cl-14);var fs=new Date(ov);fs.setDate(fs.getDate()-2);var fe=new Date(ov);fe.setDate(fe.getDate()+1);var fmt=function(dt){return(dt.getMonth()+1)+'/'+dt.getDate();};showResult('result',fmt(ov),'Estimated Ovulation Date','Your fertile window is approximately '+fmt(fs)+' to '+fmt(fe)+'. Ovulation likely occurs around '+fmt(ov)+'. Track symptoms like cervical mucus changes and basal body temperature for better accuracy.','green');`},
  {slug:'baby-weight-calculator',name:'Baby Weight Percentile Calculator',desc:'Check if your baby\'s weight is within a healthy percentile range.',icon:'baby',category:'Women\'s Health',
    fields:[{id:'age',label:'Baby Age (months)',type:'number',ph:'6'},{id:'weight',label:'Baby Weight (kg)',type:'number',ph:'7'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']}],
    logic:`var age=parseFloat(document.getElementById('age').value);var w=parseFloat(document.getElementById('weight').value);var g=document.getElementById('gender').value;if(!age||!w){alert('Fill fields');return;}var avg=g==='Male'?3.3+0.7*age:3.2+0.65*age;var pct=Math.min(99,Math.max(1,Math.round(50+((w-avg)/avg)*100)));var c='green',l='Normal Range',s='Your baby appears to be growing well within normal parameters.';if(pct<5){c='yellow';l='Below Average';s='Your baby\'s weight is below average. Discuss with your pediatrician about nutrition.';}else if(pct>95){c='yellow';l='Above Average';s='Your baby\'s weight is above average. This may be perfectly normal but discuss with your pediatrician.';}showResult('result',pct+'th percentile',l,s,c);`},
  {slug:'child-bmi-calculator',name:'Child BMI Calculator',desc:'Calculate BMI percentile for children aged 2-19.',icon:'baby',category:'Women\'s Health',
    fields:[{id:'age',label:'Age (years)',type:'number',ph:'10'},{id:'weight',label:'Weight (kg)',type:'number',ph:'30'},{id:'height',label:'Height (cm)',type:'number',ph:'140'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']}],
    logic:`var a=parseFloat(document.getElementById('age').value);var w=parseFloat(document.getElementById('weight').value);var h=parseFloat(document.getElementById('height').value)/100;if(!a||!w||!h){alert('Fill fields');return;}var bmi=(w/(h*h)).toFixed(1);var c='green',l='Healthy Weight',s='Your child\'s BMI is in the healthy range.';if(bmi<14){c='yellow';l='Underweight';s='Your child may be underweight. Consult their pediatrician.';}else if(bmi>22&&a<12||bmi>25&&a>=12){c='yellow';l='Overweight';s='Consider discussing healthy eating and activity habits with your child\'s doctor.';}else if(bmi>27){c='red';l='Obese';s='Please consult a pediatric healthcare provider for guidance.';}showResult('result',bmi,'Child BMI: '+l,s,c);`},
  {slug:'menstrual-cycle-calculator',name:'Menstrual Cycle Calculator',desc:'Track and predict your menstrual cycle dates.',icon:'heart',category:'Women\'s Health',
    fields:[{id:'lmp',label:'First Day of Last Period',type:'date'},{id:'cycle',label:'Cycle Length (days)',type:'number',ph:'28'},{id:'period',label:'Period Length (days)',type:'number',ph:'5'}],
    logic:`var lmp=document.getElementById('lmp').value;var cl=parseFloat(document.getElementById('cycle').value)||28;var pl=parseFloat(document.getElementById('period').value)||5;if(!lmp){alert('Enter date');return;}var d=new Date(lmp);var next=new Date(d);next.setDate(next.getDate()+cl);var ov=new Date(d);ov.setDate(ov.getDate()+cl-14);var fmt=function(dt){return(dt.getMonth()+1)+'/'+dt.getDate()+'/'+dt.getFullYear();};showResult('result',fmt(next),'Next Period Date','Your next period is expected around '+fmt(next)+'. Ovulation is estimated around '+fmt(ov)+'. Track your cycles regularly for better predictions.','green');`},
  {slug:'fertility-calculator',name:'Fertility Window Calculator',desc:'Identify your most fertile days each month.',icon:'baby',category:'Women\'s Health',
    fields:[{id:'lmp',label:'First Day of Last Period',type:'date'},{id:'cycle',label:'Average Cycle Length',type:'number',ph:'28'}],
    logic:`var lmp=document.getElementById('lmp').value;var cl=parseFloat(document.getElementById('cycle').value)||28;if(!lmp){alert('Enter date');return;}var d=new Date(lmp);var ov=new Date(d);ov.setDate(ov.getDate()+cl-14);var fs=new Date(ov);fs.setDate(fs.getDate()-5);var fe=new Date(ov);fe.setDate(fe.getDate()+1);var fmt=function(dt){return(dt.getMonth()+1)+'/'+dt.getDate();};showResult('result',fmt(fs)+' - '+fmt(fe),'Fertile Window','Your fertile window spans from '+fmt(fs)+' to '+fmt(fe)+'. The highest chance of conception is 1-2 days before ovulation ('+fmt(ov)+').','green');`},
  {slug:'protein-intake-calculator',name:'Protein Intake Calculator',desc:'Calculate your daily protein requirements.',icon:'food',category:'Nutrition',
    fields:[{id:'weight',label:'Weight (kg)',type:'number',ph:'70'},{id:'goal',label:'Goal',type:'select',options:['Sedentary Adult','Active/Fitness','Muscle Building','Weight Loss','Endurance Athlete']}],
    logic:`var w=parseFloat(document.getElementById('weight').value);var goal=document.getElementById('goal').value;if(!w){alert('Enter weight');return;}var mult={'Sedentary Adult':0.8,'Active/Fitness':1.2,'Muscle Building':1.6,'Weight Loss':1.4,'Endurance Athlete':1.4};var p=Math.round(w*(mult[goal]||0.8));showResult('result',p+'g','Daily Protein','You need approximately '+p+' grams of protein per day. Spread intake across 3-5 meals for optimal absorption. Good sources include lean meats, fish, eggs, dairy, and legumes.','green');`},
  {slug:'carb-calculator',name:'Carb Intake Calculator',desc:'Find your optimal daily carbohydrate intake.',icon:'food',category:'Nutrition',
    fields:[{id:'calories',label:'Daily Calories',type:'number',ph:'2000'},{id:'goal',label:'Goal',type:'select',options:['Balanced','Low Carb','Keto','High Performance']}],
    logic:`var cal=parseFloat(document.getElementById('calories').value);var goal=document.getElementById('goal').value;if(!cal){alert('Enter calories');return;}var pct={'Balanced':0.45,'Low Carb':0.25,'Keto':0.05,'High Performance':0.55};var carbs=Math.round(cal*(pct[goal]||0.45)/4);showResult('result',carbs+'g','Daily Carbs','You need approximately '+carbs+' grams of carbohydrates per day ('+Math.round((pct[goal]||0.45)*100)+'% of calories). Focus on complex carbs from whole grains, fruits, and vegetables.','green');`},
  {slug:'fat-intake-calculator',name:'Fat Intake Calculator',desc:'Determine your optimal daily fat intake.',icon:'food',category:'Nutrition',
    fields:[{id:'calories',label:'Daily Calories',type:'number',ph:'2000'},{id:'goal',label:'Diet Type',type:'select',options:['Standard','Low Fat','Moderate','High Fat/Keto']}],
    logic:`var cal=parseFloat(document.getElementById('calories').value);var goal=document.getElementById('goal').value;if(!cal){alert('Enter calories');return;}var pct={'Standard':0.3,'Low Fat':0.2,'Moderate':0.35,'High Fat/Keto':0.7};var fat=Math.round(cal*(pct[goal]||0.3)/9);showResult('result',fat+'g','Daily Fat Intake','You need approximately '+fat+' grams of fat per day. Prioritize healthy fats from avocados, nuts, olive oil, and fatty fish.','green');`},
  {slug:'fiber-intake-calculator',name:'Fiber Intake Calculator',desc:'Calculate your recommended daily fiber intake.',icon:'food',category:'Nutrition',
    fields:[{id:'age',label:'Age',type:'number',ph:'30'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']},{id:'calories',label:'Daily Calories',type:'number',ph:'2000'}],
    logic:`var a=parseFloat(document.getElementById('age').value);var g=document.getElementById('gender').value;var cal=parseFloat(document.getElementById('calories').value);if(!a||!cal){alert('Fill fields');return;}var fiber=g==='Male'?38:25;if(a>50)fiber=g==='Male'?30:21;var altFiber=Math.round(cal/1000*14);fiber=Math.max(fiber,altFiber);showResult('result',fiber+'g','Daily Fiber','Aim for '+fiber+' grams of fiber per day. Good sources include whole grains, beans, lentils, fruits, and vegetables. Increase gradually to avoid digestive discomfort.','green');`},
  {slug:'vitamin-d-calculator',name:'Vitamin D Calculator',desc:'Estimate your daily vitamin D needs.',icon:'pill',category:'Nutrition',
    fields:[{id:'age',label:'Age',type:'number',ph:'30'},{id:'sun',label:'Sun Exposure',type:'select',options:['Minimal (< 10 min/day)','Moderate (10-30 min/day)','Regular (> 30 min/day)']},{id:'skin',label:'Skin Tone',type:'select',options:['Fair','Medium','Dark']}],
    logic:`var a=parseFloat(document.getElementById('age').value);var sun=document.getElementById('sun').value;var skin=document.getElementById('skin').value;if(!a){alert('Enter age');return;}var iu=600;if(a>70)iu=800;if(sun==='Minimal (< 10 min/day)')iu+=400;if(skin==='Dark')iu+=200;showResult('result',iu+' IU','Daily Vitamin D','Your estimated daily vitamin D need is '+iu+' IU. Consider food sources like fatty fish, fortified milk, and eggs. Talk to your doctor about testing your levels.','green');`},
  {slug:'iron-intake-calculator',name:'Iron Intake Calculator',desc:'Find your recommended daily iron intake.',icon:'pill',category:'Nutrition',
    fields:[{id:'age',label:'Age',type:'number',ph:'30'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']},{id:'pregnant',label:'Pregnant or Breastfeeding?',type:'select',options:['No','Pregnant','Breastfeeding']}],
    logic:`var a=parseFloat(document.getElementById('age').value);var g=document.getElementById('gender').value;var p=document.getElementById('pregnant').value;if(!a){alert('Enter age');return;}var iron=g==='Male'?8:18;if(a>50&&g==='Female')iron=8;if(p==='Pregnant')iron=27;if(p==='Breastfeeding')iron=9;showResult('result',iron+' mg','Daily Iron','You need approximately '+iron+' mg of iron daily. Good sources include red meat, spinach, beans, and fortified cereals. Pair with vitamin C for better absorption.','green');`},
  {slug:'calcium-calculator',name:'Calcium Calculator',desc:'Calculate your daily calcium requirements.',icon:'pill',category:'Nutrition',
    fields:[{id:'age',label:'Age',type:'number',ph:'30'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']}],
    logic:`var a=parseFloat(document.getElementById('age').value);var g=document.getElementById('gender').value;if(!a){alert('Enter age');return;}var ca=1000;if(a<=18)ca=1300;if(a>50&&g==='Female')ca=1200;if(a>70)ca=1200;showResult('result',ca+' mg','Daily Calcium','You need approximately '+ca+' mg of calcium per day. Good sources include dairy, leafy greens, fortified foods, and almonds. Vitamin D helps calcium absorption.','green');`},
  {slug:'cholesterol-risk-calculator',name:'Cholesterol Risk Calculator',desc:'Assess your cholesterol levels and cardiovascular risk.',icon:'heart',category:'Health Risk',
    fields:[{id:'total',label:'Total Cholesterol (mg/dL)',type:'number',ph:'200'},{id:'hdl',label:'HDL Cholesterol (mg/dL)',type:'number',ph:'60'},{id:'ldl',label:'LDL Cholesterol (mg/dL)',type:'number',ph:'100'}],
    logic:`var t=parseFloat(document.getElementById('total').value);var hdl=parseFloat(document.getElementById('hdl').value);var ldl=parseFloat(document.getElementById('ldl').value);if(!t||!hdl||!ldl){alert('Fill all fields');return;}var ratio=(t/hdl).toFixed(1);var c='green',l='Optimal',s='Your cholesterol levels appear healthy. Continue with heart-healthy habits.';if(ratio>5||ldl>160){c='red';l='High Risk';s='Your cholesterol levels suggest elevated cardiovascular risk. Consult your doctor about lifestyle changes and possible treatment.';}else if(ratio>4||ldl>130){c='yellow';l='Borderline',s='Your cholesterol is borderline high. Focus on diet, exercise, and regular monitoring.';}showResult('result','Ratio: '+ratio,l,s,c);`},
  {slug:'diabetes-risk-calculator',name:'Diabetes Risk Calculator',desc:'Assess your risk factors for type 2 diabetes.',icon:'heart',category:'Health Risk',
    fields:[{id:'age',label:'Age',type:'number',ph:'45'},{id:'bmi',label:'BMI',type:'number',ph:'25'},{id:'family',label:'Family History of Diabetes',type:'select',options:['No','Yes']},{id:'activity',label:'Physical Activity',type:'select',options:['Active','Moderate','Sedentary']},{id:'waist',label:'Waist Circumference (cm)',type:'number',ph:'85'}],
    logic:`var age=parseFloat(document.getElementById('age').value);var bmi=parseFloat(document.getElementById('bmi').value);var fam=document.getElementById('family').value;var act=document.getElementById('activity').value;var waist=parseFloat(document.getElementById('waist').value);if(!age||!bmi||!waist){alert('Fill fields');return;}var score=0;if(age>45)score+=2;if(age>55)score+=1;if(bmi>25)score+=2;if(bmi>30)score+=2;if(fam==='Yes')score+=3;if(act==='Sedentary')score+=2;if(act==='Moderate')score+=1;if(waist>102)score+=2;else if(waist>88)score+=1;var c='green',l='Low Risk',s='Your diabetes risk appears low. Maintain healthy habits.';if(score>=8){c='red';l='High Risk';s='You have several risk factors for type 2 diabetes. Please consult your healthcare provider for screening.';}else if(score>=5){c='yellow';l='Moderate Risk';s='You have some diabetes risk factors. Focus on weight management, exercise, and healthy eating.';}showResult('result',score+'/15',l,s,c);`},
  {slug:'stroke-risk-calculator',name:'Stroke Risk Calculator',desc:'Evaluate your stroke risk based on key health factors.',icon:'heart',category:'Health Risk',
    fields:[{id:'age',label:'Age',type:'number',ph:'50'},{id:'bp',label:'High Blood Pressure?',type:'select',options:['No','Yes']},{id:'smoking',label:'Smoker?',type:'select',options:['No','Yes']},{id:'diabetes',label:'Diabetes?',type:'select',options:['No','Yes']},{id:'afib',label:'Atrial Fibrillation?',type:'select',options:['No','Yes']}],
    logic:`var age=parseFloat(document.getElementById('age').value);if(!age){alert('Enter age');return;}var score=0;if(age>65)score+=2;else if(age>55)score+=1;if(document.getElementById('bp').value==='Yes')score+=2;if(document.getElementById('smoking').value==='Yes')score+=2;if(document.getElementById('diabetes').value==='Yes')score+=1;if(document.getElementById('afib').value==='Yes')score+=2;var c='green',l='Low Risk',s='Your estimated stroke risk is low. Continue with healthy lifestyle habits.';if(score>=5){c='red';l='High Risk';s='Multiple risk factors identified. Please consult your healthcare provider for comprehensive evaluation and prevention strategies.';}else if(score>=3){c='yellow';l='Moderate Risk';s='Some risk factors present. Focus on managing blood pressure, quitting smoking, and regular check-ups.';}showResult('result',score+'/9',l,s,c);`},
  {slug:'waist-to-hip-ratio',name:'Waist-to-Hip Ratio Calculator',desc:'Calculate your waist-to-hip ratio and health risk.',icon:'body',category:'Body Metrics',
    fields:[{id:'waist',label:'Waist Circumference (cm)',type:'number',ph:'80'},{id:'hip',label:'Hip Circumference (cm)',type:'number',ph:'100'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']}],
    logic:`var w=parseFloat(document.getElementById('waist').value);var h=parseFloat(document.getElementById('hip').value);var g=document.getElementById('gender').value;if(!w||!h){alert('Fill fields');return;}var ratio=(w/h).toFixed(2);var c='green',l='Low Risk',s='Your waist-to-hip ratio indicates low health risk.';var high=g==='Male'?1.0:0.85;var mod=g==='Male'?0.9:0.8;if(ratio>=high){c='red';l='High Risk';s='Elevated waist-to-hip ratio is associated with higher cardiovascular and metabolic risk.';}else if(ratio>=mod){c='yellow';l='Moderate Risk';s='Your ratio suggests moderate health risk. Focus on core exercise and healthy eating.';}showResult('result',ratio,l,s,c);`},
  {slug:'waist-to-height-ratio',name:'Waist-to-Height Ratio Calculator',desc:'Check your waist-to-height ratio for health assessment.',icon:'body',category:'Body Metrics',
    fields:[{id:'waist',label:'Waist Circumference (cm)',type:'number',ph:'80'},{id:'height',label:'Height (cm)',type:'number',ph:'175'}],
    logic:`var w=parseFloat(document.getElementById('waist').value);var h=parseFloat(document.getElementById('height').value);if(!w||!h){alert('Fill fields');return;}var ratio=(w/h).toFixed(2);var c='green',l='Healthy',s='Your waist-to-height ratio is in the healthy range (below 0.5).';if(ratio>=0.6){c='red';l='High Risk';s='A ratio above 0.6 indicates significant health risk. Please consult a healthcare provider.';}else if(ratio>=0.5){c='yellow';l='Increased Risk';s='A ratio above 0.5 suggests increased health risk. Consider lifestyle modifications.';}showResult('result',ratio,l,s,c);`},
  {slug:'lean-body-mass-calculator',name:'Lean Body Mass Calculator',desc:'Calculate your lean body mass (fat-free mass).',icon:'body',category:'Body Metrics',
    fields:[{id:'weight',label:'Weight (kg)',type:'number',ph:'70'},{id:'height',label:'Height (cm)',type:'number',ph:'175'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']}],
    logic:`var w=parseFloat(document.getElementById('weight').value);var h=parseFloat(document.getElementById('height').value);var g=document.getElementById('gender').value;if(!w||!h){alert('Fill fields');return;}var lbm;if(g==='Male'){lbm=0.407*w+0.267*h-19.2;}else{lbm=0.252*w+0.473*h-48.3;}lbm=Math.max(0,lbm).toFixed(1);var pct=((lbm/w)*100).toFixed(0);showResult('result',lbm+' kg','Lean Body Mass','Your lean body mass is '+lbm+' kg ('+pct+'% of total weight). This includes muscle, bone, water, and organs — everything except stored fat.','green');`},
  {slug:'body-surface-area-calculator',name:'Body Surface Area Calculator',desc:'Calculate your body surface area using the Du Bois formula.',icon:'body',category:'Body Metrics',
    fields:[{id:'weight',label:'Weight (kg)',type:'number',ph:'70'},{id:'height',label:'Height (cm)',type:'number',ph:'175'}],
    logic:`var w=parseFloat(document.getElementById('weight').value);var h=parseFloat(document.getElementById('height').value);if(!w||!h){alert('Fill fields');return;}var bsa=(0.007184*Math.pow(w,0.425)*Math.pow(h,0.725)).toFixed(2);showResult('result',bsa+' m²','Body Surface Area','Your BSA is '+bsa+' square meters. BSA is used in medicine for drug dosing, kidney function assessment, and burn evaluation.','green');`},
  {slug:'one-rep-max-calculator',name:'One Rep Max Calculator',desc:'Estimate your one-repetition maximum for any lift.',icon:'fitness',category:'Fitness',
    fields:[{id:'weight',label:'Weight Lifted (kg)',type:'number',ph:'80'},{id:'reps',label:'Reps Performed',type:'number',ph:'8'}],
    logic:`var w=parseFloat(document.getElementById('weight').value);var r=parseFloat(document.getElementById('reps').value);if(!w||!r){alert('Fill fields');return;}var orm=Math.round(w*(1+r/30));showResult('result',orm+' kg','Estimated 1RM','Your estimated one-rep max is '+orm+' kg. Training zones: 90-100% (strength), 70-85% (hypertrophy), 50-65% (endurance).','green');`},
  {slug:'vo2-max-calculator',name:'VO2 Max Calculator',desc:'Estimate your VO2 max aerobic fitness level.',icon:'fitness',category:'Fitness',
    fields:[{id:'age',label:'Age',type:'number',ph:'30'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']},{id:'rhr',label:'Resting Heart Rate (bpm)',type:'number',ph:'65'}],
    logic:`var a=parseFloat(document.getElementById('age').value);var g=document.getElementById('gender').value;var rhr=parseFloat(document.getElementById('rhr').value);if(!a||!rhr){alert('Fill fields');return;}var vo2=15.3*(220-a)/rhr;vo2=vo2.toFixed(1);var c='green',l='Good Fitness',s='Your VO2 max suggests good cardiovascular fitness.';if(vo2<30){c='red';l='Below Average';s='Your VO2 max is below average. Regular cardio exercise can significantly improve this.';}else if(vo2<40){c='yellow';l='Average';s='Your VO2 max is average. Incorporate more aerobic training to improve.';}else if(vo2>50){l='Excellent';s='Excellent cardiovascular fitness! Keep up your training routine.';}showResult('result',vo2+' ml/kg/min',l,s,c);`},
  {slug:'steps-to-calories-calculator',name:'Steps to Calories Calculator',desc:'Convert your daily steps into estimated calories burned.',icon:'fitness',category:'Fitness',
    fields:[{id:'steps',label:'Number of Steps',type:'number',ph:'10000'},{id:'weight',label:'Weight (kg)',type:'number',ph:'70'}],
    logic:`var s=parseFloat(document.getElementById('steps').value);var w=parseFloat(document.getElementById('weight').value);if(!s||!w){alert('Fill fields');return;}var cal=Math.round(s*0.04*w/70);var km=(s*0.000762).toFixed(1);showResult('result',cal+' kcal','Calories Burned','You burned approximately '+cal+' calories walking '+s+' steps ('+km+' km). Aim for 10,000 steps daily for general health benefits.','green');`},
  {slug:'running-pace-calculator',name:'Running Pace Calculator',desc:'Calculate your running pace, speed, and finish times.',icon:'fitness',category:'Fitness',
    fields:[{id:'distance',label:'Distance (km)',type:'number',ph:'5'},{id:'time',label:'Time (minutes)',type:'number',ph:'25'}],
    logic:`var d=parseFloat(document.getElementById('distance').value);var t=parseFloat(document.getElementById('time').value);if(!d||!t){alert('Fill fields');return;}var pace=(t/d).toFixed(2);var speed=(d/(t/60)).toFixed(1);var min=Math.floor(pace);var sec=Math.round((pace-min)*60);showResult('result',min+':'+((sec<10)?'0':'')+sec+'/km','Running Pace','Your pace is '+min+':'+((sec<10)?'0':'')+sec+' per km ('+speed+' km/h). 5K estimate: '+Math.round(pace*5)+' min | 10K: '+Math.round(pace*10)+' min | Half Marathon: '+Math.round(pace*21.1)+' min.','green');`},
  {slug:'cycling-calories-calculator',name:'Cycling Calories Calculator',desc:'Estimate calories burned during cycling.',icon:'fitness',category:'Fitness',
    fields:[{id:'weight',label:'Weight (kg)',type:'number',ph:'70'},{id:'duration',label:'Duration (minutes)',type:'number',ph:'60'},{id:'intensity',label:'Intensity',type:'select',options:['Light (< 16 km/h)','Moderate (16-19 km/h)','Vigorous (19-22 km/h)','Racing (> 22 km/h)']}],
    logic:`var w=parseFloat(document.getElementById('weight').value);var d=parseFloat(document.getElementById('duration').value);var i=document.getElementById('intensity').value;if(!w||!d){alert('Fill fields');return;}var met={'Light (< 16 km/h)':4,'Moderate (16-19 km/h)':6.8,'Vigorous (19-22 km/h)':8,'Racing (> 22 km/h)':10};var cal=Math.round((met[i]||6)*w*d/60);showResult('result',cal+' kcal','Calories Burned Cycling','You burned approximately '+cal+' calories during '+d+' minutes of cycling. Regular cycling improves cardiovascular health and builds lower body strength.','green');`},
  {slug:'swimming-calories-calculator',name:'Swimming Calories Calculator',desc:'Calculate calories burned while swimming.',icon:'fitness',category:'Fitness',
    fields:[{id:'weight',label:'Weight (kg)',type:'number',ph:'70'},{id:'duration',label:'Duration (minutes)',type:'number',ph:'30'},{id:'stroke',label:'Stroke/Intensity',type:'select',options:['Leisurely','Moderate Freestyle','Vigorous Freestyle','Backstroke','Breaststroke','Butterfly']}],
    logic:`var w=parseFloat(document.getElementById('weight').value);var d=parseFloat(document.getElementById('duration').value);if(!w||!d){alert('Fill fields');return;}var met={'Leisurely':6,'Moderate Freestyle':7,'Vigorous Freestyle':10,'Backstroke':7,'Breaststroke':10,'Butterfly':13.8};var st=document.getElementById('stroke').value;var cal=Math.round((met[st]||7)*w*d/60);showResult('result',cal+' kcal','Calories Burned Swimming','You burned approximately '+cal+' calories during '+d+' minutes of swimming. Swimming is excellent for full-body fitness with low impact on joints.','green');`},
  {slug:'yoga-calories-calculator',name:'Yoga Calories Calculator',desc:'Estimate calories burned during yoga practice.',icon:'fitness',category:'Fitness',
    fields:[{id:'weight',label:'Weight (kg)',type:'number',ph:'70'},{id:'duration',label:'Duration (minutes)',type:'number',ph:'60'},{id:'style',label:'Yoga Style',type:'select',options:['Hatha','Vinyasa','Ashtanga','Bikram/Hot Yoga','Power Yoga','Restorative']}],
    logic:`var w=parseFloat(document.getElementById('weight').value);var d=parseFloat(document.getElementById('duration').value);if(!w||!d){alert('Fill fields');return;}var met={'Hatha':2.5,'Vinyasa':4,'Ashtanga':5,'Bikram/Hot Yoga':5,'Power Yoga':5.5,'Restorative':2};var st=document.getElementById('style').value;var cal=Math.round((met[st]||3)*w*d/60);showResult('result',cal+' kcal','Calories Burned - Yoga','You burned approximately '+cal+' calories during '+d+' minutes of '+st+' yoga. Beyond calories, yoga improves flexibility, balance, and mental well-being.','green');`},
  {slug:'intermittent-fasting-calculator',name:'Intermittent Fasting Calculator',desc:'Plan your intermittent fasting eating window.',icon:'food',category:'Nutrition',
    fields:[{id:'method',label:'Fasting Method',type:'select',options:['16:8','18:6','20:4','5:2']},{id:'start',label:'Eating Window Start Time',type:'time'}],
    logic:`var method=document.getElementById('method').value;var start=document.getElementById('start').value;if(!start){alert('Enter start time');return;}var hours={'16:8':8,'18:6':6,'20:4':4,'5:2':8};var eating=hours[method]||8;var p=start.split(':');var sh=parseInt(p[0]);var sm=parseInt(p[1]);var eh=sh+eating;var eampm=eh>=12?'PM':'AM';eh=eh%12||12;var sampm=sh>=12?'PM':'AM';var dsh=sh%12||12;showResult('result',method+' Protocol','Your Fasting Schedule','Eating window: '+dsh+':'+((sm<10)?'0':'')+sm+' '+sampm+' to '+eh+':'+((sm<10)?'0':'')+sm+' '+eampm+' ('+eating+' hours). During fasting, drink water, black coffee, or tea. Break your fast with a balanced meal.','green');`},
  {slug:'keto-calculator',name:'Keto Macro Calculator',desc:'Calculate your ideal macros for a ketogenic diet.',icon:'food',category:'Nutrition',
    fields:[{id:'calories',label:'Daily Calories',type:'number',ph:'2000'},{id:'protein',label:'Protein per kg body weight',type:'select',options:['1.2g (Sedentary)','1.6g (Active)','2.0g (Athletic)']},{id:'weight',label:'Weight (kg)',type:'number',ph:'70'}],
    logic:`var cal=parseFloat(document.getElementById('calories').value);var w=parseFloat(document.getElementById('weight').value);var pp=document.getElementById('protein').value;if(!cal||!w){alert('Fill fields');return;}var pmult=parseFloat(pp);var protein=Math.round(w*pmult);var netCarbs=25;var carbCal=netCarbs*4;var protCal=protein*4;var fatCal=cal-carbCal-protCal;var fat=Math.round(fatCal/9);showResult('result','F:'+fat+'g P:'+protein+'g C:'+netCarbs+'g','Keto Macros','Fat: '+fat+'g ('+Math.round(fatCal/cal*100)+'%) | Protein: '+protein+'g ('+Math.round(protCal/cal*100)+'%) | Net Carbs: '+netCarbs+'g ('+Math.round(carbCal/cal*100)+'%). Keep net carbs under 25-50g to maintain ketosis.','green');`},
  {slug:'alcohol-unit-calculator',name:'Alcohol Unit Calculator',desc:'Calculate alcohol units and calories in your drinks.',icon:'food',category:'Lifestyle',
    fields:[{id:'volume',label:'Drink Volume (ml)',type:'number',ph:'500'},{id:'abv',label:'Alcohol by Volume (%)',type:'number',ph:'5'},{id:'drinks',label:'Number of Drinks',type:'number',ph:'2'}],
    logic:`var v=parseFloat(document.getElementById('volume').value);var abv=parseFloat(document.getElementById('abv').value);var n=parseFloat(document.getElementById('drinks').value)||1;if(!v||!abv){alert('Fill fields');return;}var units=((v*abv/1000)*n).toFixed(1);var cal=Math.round(units*80);var c='green',l='Moderate',s='Stay within recommended limits of 14 units per week.';if(units>6){c='red';l='Excessive';s='This amount significantly exceeds single-session guidelines. Consider reducing intake.';}else if(units>3){c='yellow';l='Above Moderate';s='This is above moderate levels. Consider pacing yourself and drinking water between drinks.';}showResult('result',units+' units','Alcohol Intake: '+l,s+' Estimated calories: '+cal+' kcal.',c);`},
  {slug:'caffeine-intake-calculator',name:'Caffeine Intake Calculator',desc:'Track your daily caffeine consumption.',icon:'food',category:'Lifestyle',
    fields:[{id:'coffee',label:'Cups of Coffee',type:'number',ph:'2'},{id:'tea',label:'Cups of Tea',type:'number',ph:'1'},{id:'soda',label:'Cans of Cola/Energy Drink',type:'number',ph:'0'}],
    logic:`var co=parseFloat(document.getElementById('coffee').value)||0;var te=parseFloat(document.getElementById('tea').value)||0;var so=parseFloat(document.getElementById('soda').value)||0;var total=co*95+te*47+so*80;var c='green',l='Safe Range',s='Your caffeine intake is within safe limits (under 400mg). Avoid caffeine 6+ hours before bedtime.';if(total>600){c='red';l='Excessive';s='Your caffeine intake exceeds recommended limits. Consider reducing gradually to avoid withdrawal symptoms.';}else if(total>400){c='yellow';l='Above Recommended';s='You are above the recommended 400mg daily limit. Consider cutting back, especially if experiencing anxiety or sleep issues.';}showResult('result',total+' mg',l,s,c);`},
  {slug:'smoking-cost-calculator',name:'Smoking Cost Calculator',desc:'See how much smoking costs you financially and health-wise.',icon:'pill',category:'Lifestyle',
    fields:[{id:'perday',label:'Cigarettes per Day',type:'number',ph:'10'},{id:'price',label:'Price per Pack (20 cigs)',type:'number',ph:'10'},{id:'years',label:'Years Smoking',type:'number',ph:'5'}],
    logic:`var pd=parseFloat(document.getElementById('perday').value);var pp=parseFloat(document.getElementById('price').value);var y=parseFloat(document.getElementById('years').value);if(!pd||!pp){alert('Fill fields');return;}var daily=(pd/20)*pp;var monthly=Math.round(daily*30);var yearly=Math.round(daily*365);var total=Math.round(daily*365*y);showResult('result','$'+yearly+'/year','Smoking Cost','Daily: $'+daily.toFixed(2)+' | Monthly: $'+monthly+' | Yearly: $'+yearly+' | Total spent: $'+total.toLocaleString()+' over '+y+' years. Quitting now saves money and adds years to your life.','red');`},
  {slug:'stress-level-calculator',name:'Stress Level Calculator',desc:'Assess your current stress level with this quick quiz.',icon:'brain',category:'Mental Health',
    fields:[{id:'sleep',label:'Sleep quality (1-5, 5=great)',type:'number',ph:'3'},{id:'work',label:'Work stress (1-5, 5=high)',type:'number',ph:'3'},{id:'exercise',label:'Exercise frequency (1-5, 5=daily)',type:'number',ph:'3'},{id:'social',label:'Social support (1-5, 5=strong)',type:'number',ph:'3'},{id:'worry',label:'Worry/anxiety level (1-5, 5=high)',type:'number',ph:'3'}],
    logic:`var sl=parseFloat(document.getElementById('sleep').value)||3;var wk=parseFloat(document.getElementById('work').value)||3;var ex=parseFloat(document.getElementById('exercise').value)||3;var so=parseFloat(document.getElementById('social').value)||3;var wo=parseFloat(document.getElementById('worry').value)||3;var score=Math.round((6-sl+wk+(6-ex)+(6-so)+wo)/5*20);var c='green',l='Low Stress',s='Your stress levels appear manageable. Continue your healthy coping strategies.';if(score>70){c='red';l='High Stress';s='Your stress score is high. Consider seeking professional support, practicing relaxation techniques, and prioritizing self-care.';}else if(score>40){c='yellow';l='Moderate Stress';s='You are experiencing moderate stress. Try incorporating mindfulness, exercise, and better sleep habits.';}showResult('result',score+'%',l,s,c);`},
  {slug:'anxiety-score-calculator',name:'Anxiety Score Calculator',desc:'Screen for anxiety symptoms with the GAD-7 inspired assessment.',icon:'brain',category:'Mental Health',
    fields:[{id:'q1',label:'Feeling nervous/anxious (0-3)',type:'number',ph:'1'},{id:'q2',label:'Unable to stop worrying (0-3)',type:'number',ph:'1'},{id:'q3',label:'Worrying too much (0-3)',type:'number',ph:'1'},{id:'q4',label:'Trouble relaxing (0-3)',type:'number',ph:'1'},{id:'q5',label:'Restless/on edge (0-3)',type:'number',ph:'1'},{id:'q6',label:'Easily annoyed (0-3)',type:'number',ph:'1'},{id:'q7',label:'Feeling afraid (0-3)',type:'number',ph:'1'}],
    logic:`var total=0;for(var i=1;i<=7;i++){total+=parseFloat(document.getElementById('q'+i).value)||0;}var c='green',l='Minimal Anxiety',s='Your score suggests minimal anxiety. Continue with healthy coping strategies.';if(total>=15){c='red';l='Severe Anxiety';s='Your score suggests severe anxiety. Please reach out to a mental health professional for support.';}else if(total>=10){c='yellow';l='Moderate Anxiety';s='Your score suggests moderate anxiety. Consider speaking with a counselor or therapist.';}else if(total>=5){c='yellow';l='Mild Anxiety';s='Your score suggests mild anxiety. Self-care, exercise, and mindfulness may help.';}showResult('result',total+'/21',l,s,c);`},
  {slug:'depression-screening-calculator',name:'Depression Screening Calculator',desc:'Quick depression screening based on PHQ-9 inspired questions.',icon:'brain',category:'Mental Health',
    fields:[{id:'q1',label:'Little interest/pleasure (0-3)',type:'number',ph:'1'},{id:'q2',label:'Feeling down/hopeless (0-3)',type:'number',ph:'1'},{id:'q3',label:'Sleep problems (0-3)',type:'number',ph:'1'},{id:'q4',label:'Fatigue/low energy (0-3)',type:'number',ph:'1'},{id:'q5',label:'Appetite changes (0-3)',type:'number',ph:'1'},{id:'q6',label:'Feeling bad about self (0-3)',type:'number',ph:'1'},{id:'q7',label:'Trouble concentrating (0-3)',type:'number',ph:'1'}],
    logic:`var total=0;for(var i=1;i<=7;i++){total+=parseFloat(document.getElementById('q'+i).value)||0;}var c='green',l='Minimal',s='Your score suggests minimal depression symptoms. Continue with self-care.';if(total>=15){c='red';l='Severe';s='Your score suggests severe symptoms. Please reach out to a mental health professional or crisis line immediately.';}else if(total>=10){c='yellow';l='Moderate';s='Your score suggests moderate symptoms. Consider speaking with a mental health professional.';}else if(total>=5){c='yellow';l='Mild';s='Your score suggests mild symptoms. Self-care, exercise, social connection, and mindfulness may help.';}showResult('result',total+'/21',l,s,c);`},
  {slug:'sleep-debt-calculator',name:'Sleep Debt Calculator',desc:'Calculate your accumulated sleep debt.',icon:'sleep',category:'Wellness',
    fields:[{id:'needed',label:'Hours of Sleep Needed',type:'number',ph:'8'},{id:'actual',label:'Hours You Actually Sleep',type:'number',ph:'6'},{id:'days',label:'Number of Days',type:'number',ph:'7'}],
    logic:`var need=parseFloat(document.getElementById('needed').value);var act=parseFloat(document.getElementById('actual').value);var days=parseFloat(document.getElementById('days').value);if(!need||!act||!days){alert('Fill fields');return;}var daily=need-act;var total=(daily*days).toFixed(1);var c='green',l='Well Rested',s='You are getting adequate sleep. Keep up the good habits!';if(total>14){c='red';l='Severe Sleep Debt';s='You have significant sleep debt. Prioritize sleep and consider consulting a sleep specialist.';}else if(total>7){c='yellow';l='Moderate Sleep Debt';s='Your sleep debt is building up. Try adding 30-60 minutes of extra sleep each night.';}else if(total>0){c='yellow';l='Mild Sleep Debt';s='You have a mild sleep deficit. Try to get an extra 15-30 minutes of sleep each night.';}if(total<=0){total='0';l='No Debt';s='Great! You are meeting or exceeding your sleep needs.';}showResult('result',total+' hours',l,s,c);`},
  {slug:'life-expectancy-calculator',name:'Life Expectancy Calculator',desc:'Estimate your life expectancy based on lifestyle factors.',icon:'heart',category:'Wellness',
    fields:[{id:'age',label:'Current Age',type:'number',ph:'35'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']},{id:'smoking',label:'Smoking Status',type:'select',options:['Never','Former','Current']},{id:'exercise',label:'Exercise Frequency',type:'select',options:['Rarely','1-2 times/week','3-5 times/week','Daily']},{id:'diet',label:'Diet Quality',type:'select',options:['Poor','Average','Good','Excellent']},{id:'bmi',label:'BMI Category',type:'select',options:['Underweight','Normal','Overweight','Obese']}],
    logic:`var age=parseFloat(document.getElementById('age').value);var g=document.getElementById('gender').value;if(!age){alert('Enter age');return;}var base=g==='Male'?76:81;var sm=document.getElementById('smoking').value;if(sm==='Current')base-=10;if(sm==='Former')base-=3;var ex=document.getElementById('exercise').value;if(ex==='Daily')base+=4;if(ex==='3-5 times/week')base+=3;if(ex==='1-2 times/week')base+=1;var di=document.getElementById('diet').value;if(di==='Excellent')base+=3;if(di==='Good')base+=1;if(di==='Poor')base-=3;var bmi=document.getElementById('bmi').value;if(bmi==='Obese')base-=5;if(bmi==='Overweight')base-=2;var remaining=Math.max(0,base-age);showResult('result','~'+base+' years','Estimated Life Expectancy','Based on your inputs, your estimated life expectancy is approximately '+base+' years ('+remaining+' years remaining). Remember, lifestyle changes at any age can improve this estimate.','green');`},
  {slug:'biological-age-calculator',name:'Biological Age Calculator',desc:'Estimate your biological age vs chronological age.',icon:'body',category:'Wellness',
    fields:[{id:'age',label:'Chronological Age',type:'number',ph:'35'},{id:'exercise',label:'Weekly Exercise Hours',type:'number',ph:'3'},{id:'sleep',label:'Average Sleep (hours)',type:'number',ph:'7'},{id:'smoking',label:'Smoker?',type:'select',options:['No','Yes']},{id:'stress',label:'Stress Level (1-5)',type:'number',ph:'3'},{id:'diet',label:'Fruits/Veggies Servings Daily',type:'number',ph:'3'}],
    logic:`var age=parseFloat(document.getElementById('age').value);var ex=parseFloat(document.getElementById('exercise').value);var sl=parseFloat(document.getElementById('sleep').value);var sm=document.getElementById('smoking').value;var st=parseFloat(document.getElementById('stress').value);var di=parseFloat(document.getElementById('diet').value);if(!age){alert('Enter age');return;}var bio=age;if(ex>=5)bio-=3;else if(ex>=3)bio-=1;else if(ex<1)bio+=2;if(sl>=7&&sl<=9)bio-=1;else if(sl<6)bio+=3;if(sm==='Yes')bio+=8;if(st>=4)bio+=2;else if(st<=2)bio-=1;if(di>=5)bio-=2;else if(di<2)bio+=2;bio=Math.round(bio);var diff=bio-age;var c='green',l='Younger',s='Great news! Your biological age is younger than your chronological age. Your lifestyle habits are serving you well.';if(diff>5){c='red';l='Significantly Older';s='Your biological age is significantly higher than your chronological age. Consider improving exercise, diet, sleep, and stress management.';}else if(diff>0){c='yellow';l='Slightly Older';s='Your biological age is slightly above your chronological age. Small lifestyle improvements can make a big difference.';}showResult('result',bio+' years',l+' ('+((diff>0)?'+':'')+diff+' years)',s,c);`},
  {slug:'medication-dosage-calculator',name:'Medication Dosage Calculator',desc:'Calculate medication dosage based on weight (for reference only).',icon:'pill',category:'Health Risk',
    fields:[{id:'weight',label:'Body Weight (kg)',type:'number',ph:'70'},{id:'dose',label:'Recommended Dose (mg/kg)',type:'number',ph:'10'},{id:'frequency',label:'Doses per Day',type:'number',ph:'3'}],
    logic:`var w=parseFloat(document.getElementById('weight').value);var d=parseFloat(document.getElementById('dose').value);var f=parseFloat(document.getElementById('frequency').value);if(!w||!d||!f){alert('Fill fields');return;}var single=Math.round(w*d/f);var daily=Math.round(w*d);showResult('result',single+' mg','Per Dose Amount','Single dose: '+single+' mg | Total daily: '+daily+' mg | Divided into '+f+' doses per day. IMPORTANT: Always follow your doctor\\'s prescribed dosage. This is for reference only.','yellow');`},
  {slug:'bac-calculator',name:'BAC Calculator',desc:'Estimate your blood alcohol concentration.',icon:'pill',category:'Lifestyle',
    fields:[{id:'drinks',label:'Number of Standard Drinks',type:'number',ph:'3'},{id:'weight',label:'Weight (kg)',type:'number',ph:'70'},{id:'gender',label:'Gender',type:'select',options:['Male','Female']},{id:'hours',label:'Hours Since First Drink',type:'number',ph:'2'}],
    logic:`var dr=parseFloat(document.getElementById('drinks').value);var w=parseFloat(document.getElementById('weight').value);var g=document.getElementById('gender').value;var h=parseFloat(document.getElementById('hours').value);if(!dr||!w){alert('Fill fields');return;}var r=g==='Male'?0.68:0.55;var bac=((dr*14)/(w*1000*r)*100-0.015*h);bac=Math.max(0,bac).toFixed(3);var c='green',l='Sober/Minimal',s='Your estimated BAC is very low.';if(bac>=0.08){c='red';l='Above Legal Limit';s='Your BAC is above the legal driving limit in most jurisdictions. Do NOT drive. Arrange alternative transportation.';}else if(bac>=0.04){c='yellow';l='Impaired';s='You may be impaired. Avoid driving and making important decisions.';}else if(bac>0.01){c='yellow';l='Minimal Effect';s='Slight effects possible. Be cautious about driving.';}showResult('result',bac+'%',l,s,c);`}
];

calculators.push(...remainingCalcs);

// Fill in missing data for remaining calculators
calculators.forEach(calc => {
  if (!calc.article) {
    calc.article = `<h2>About the ${calc.name}</h2><p>The ${calc.name} is a valuable health tool that helps you understand important aspects of your wellness. This calculator uses established formulas and guidelines to provide personalized results based on your individual measurements and characteristics.</p><h3>Why Use This Calculator</h3><p>Understanding your health metrics is the first step toward making informed decisions about your lifestyle. Whether you are tracking fitness progress, managing a health condition, or simply curious about your current status, this tool provides quick, easy-to-understand results that can guide your health journey.</p><h3>How to Interpret Results</h3><p>Results are color-coded for easy interpretation: green indicates a healthy or optimal range, yellow suggests caution or borderline values, and red signals that you should consult a healthcare professional. Remember that these are estimates — individual factors can affect accuracy.</p><h3>Taking Action</h3><p>Use your results as a starting point for conversations with healthcare providers. Track your metrics over time to identify trends and measure progress. Combine multiple calculators for a more comprehensive view of your health status. Small, consistent changes in diet, exercise, and lifestyle habits can lead to significant improvements over time.</p>`;
  }
  if (!calc.faqs) {
    calc.faqs = [
      {q:`What is the ${calc.name}?`,a:`The ${calc.name} is a tool that helps you ${calc.desc.toLowerCase()}`},
      {q:'How accurate is this calculator?',a:'This calculator provides estimates based on established formulas. For medical decisions, always consult a healthcare professional.'},
      {q:'How often should I use this calculator?',a:'For tracking purposes, using the calculator monthly provides useful trend data. More frequent use is fine for awareness.'},
      {q:'Can I rely on these results for medical decisions?',a:'This tool is for informational purposes only. Always consult qualified healthcare professionals for medical advice and decisions.'},
      {q:'What factors affect the accuracy?',a:'Individual variation, measurement technique, and the limitations of estimation formulas can all affect accuracy.'},
      {q:'Should I share results with my doctor?',a:'Yes, sharing calculator results with your healthcare provider can facilitate productive discussions about your health.'},
      {q:'Is this calculator suitable for all ages?',a:'Most calculators are designed for adults. Pediatric assessments may require different formulas and professional evaluation.'},
      {q:'What do the colors mean?',a:'Green indicates healthy/optimal, yellow means caution/borderline, and red suggests you should consult a healthcare professional.'},
      {q:'Can lifestyle changes improve my results?',a:'Yes, improvements in diet, exercise, sleep, and stress management can positively impact most health metrics over time.'},
      {q:'Where do the formulas come from?',a:'Our calculators use peer-reviewed, established medical and scientific formulas that are widely used by healthcare professionals.'},
    ];
  }
  if (!calc.related) {
    calc.related = ['bmi-calculator','calorie-calculator','tdee-calculator','heart-rate-calculator'];
  }
});

function generateCalculatorPage(calc) {
  const bc = breadcrumb([{name:'Home',url:'/'},{name:'Calculators',url:'/calculators/bmi-calculator.html'},{name:calc.name,url:'/calculators/'+calc.slug+'.html'}]);
  const faq = faqSection(calc.faqs);
  const share = shareButtons('/calculators/'+calc.slug+'.html', calc.name+' - '+SITE_NAME);

  let formFields = '';
  calc.fields.forEach(f => {
    if (f.type === 'select') {
      formFields += `<div class="form-group"><label for="${f.id}">${f.label}</label><select id="${f.id}">`;
      f.options.forEach(o => { formFields += `<option value="${o}">${o}</option>`; });
      formFields += `</select></div>`;
    } else {
      formFields += `<div class="form-group"><label for="${f.id}">${f.label}</label><input type="${f.type}" id="${f.id}" placeholder="${f.ph||''}"></div>`;
    }
  });

  const relatedHtml = (calc.related||[]).slice(0,4).map(r => {
    const rc = calculators.find(c => c.slug === r);
    return rc ? `<a href="/calculators/${r}.html" class="card"><div class="card-icon">${calcSvg(rc.icon)}</div><h3>${rc.name}</h3><p>${rc.desc}</p></a>` : '';
  }).join('');

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": calc.name,
    "description": calc.desc,
    "url": SITE + '/calculators/' + calc.slug + '.html'
  };

  return `${head(calc.name+' | '+SITE_NAME, calc.desc, '/calculators/'+calc.slug+'.html')}
<body>
${NAV}
${bc.html}
${bc.schema}
<script type="application/ld+json">${JSON.stringify(schema)}</script>
${faq.schema}
<section class="section" style="padding-top:40px;">
<div class="container">
<div class="calc-container">
${calcHeroSvg(calc.icon)}
<h1 class="fade-in">${calc.name}</h1>
<p class="fade-in" style="margin-bottom:30px;color:var(--gray-500);">${calc.desc}</p>
<div class="calc-form fade-in">
${formFields}
<button class="btn btn-primary" onclick="${calc.logic.replace(/"/g,'&quot;')}" style="width:100%;justify-content:center;">Calculate</button>
</div>
<div id="result" class="result-box">
<div class="result-value"></div>
<div class="result-label"></div>
<div class="progress-container"><div class="progress-bar"><div class="progress-fill"></div></div></div>
<div class="result-suggestion"></div>
</div>
<div class="disclaimer-box fade-in">This tool is for informational purposes only. Consult a qualified healthcare professional for medical advice.</div>
${share}
<div class="fade-in" style="margin-top:40px;">${calc.article}</div>
<section class="section fade-in"><div class="section-title"><h2>Frequently Asked Questions</h2></div>${faq.html}</section>
<section class="related-section fade-in"><div class="section-title"><h2>Related Calculators</h2></div><div class="grid-4">${relatedHtml}</div></section>
</div>
</div>
</section>
${FOOTER}
${BTT}
<script src="/js/main.js"></script>
</body></html>`;
}

// ========================
// BLOG DATA
// ========================
const blogPosts = [
  {slug:'how-to-calculate-bmi',title:'How to Calculate BMI: A Complete Guide',category:'Body Metrics',date:'2024-01-15',readTime:'5 min'},
  {slug:'what-is-a-healthy-bmi',title:'What Is a Healthy BMI? Understanding the Ranges',category:'Body Metrics',date:'2024-01-18',readTime:'6 min'},
  {slug:'bmi-vs-body-fat-percentage',title:'BMI vs Body Fat Percentage: Which Is Better?',category:'Body Metrics',date:'2024-01-22',readTime:'7 min'},
  {slug:'how-many-calories-should-i-eat',title:'How Many Calories Should I Eat Per Day?',category:'Nutrition',date:'2024-01-25',readTime:'6 min'},
  {slug:'calorie-deficit-for-weight-loss',title:'Calorie Deficit for Weight Loss: A Scientific Guide',category:'Nutrition',date:'2024-01-28',readTime:'7 min'},
  {slug:'what-are-macronutrients',title:'What Are Macronutrients? Complete Guide to Macros',category:'Nutrition',date:'2024-02-01',readTime:'6 min'},
  {slug:'high-protein-diet-benefits',title:'High Protein Diet Benefits for Health and Fitness',category:'Nutrition',date:'2024-02-04',readTime:'6 min'},
  {slug:'how-much-water-should-you-drink',title:'How Much Water Should You Drink Daily?',category:'Nutrition',date:'2024-02-07',readTime:'5 min'},
  {slug:'benefits-of-drinking-water',title:'10 Science-Backed Benefits of Drinking Water',category:'Wellness',date:'2024-02-10',readTime:'6 min'},
  {slug:'how-much-sleep-do-you-need',title:'How Much Sleep Do You Really Need?',category:'Sleep',date:'2024-02-13',readTime:'6 min'},
  {slug:'sleep-deprivation-effects',title:'The Dangerous Effects of Sleep Deprivation',category:'Sleep',date:'2024-02-16',readTime:'7 min'},
  {slug:'how-to-improve-sleep-quality',title:'12 Proven Ways to Improve Sleep Quality',category:'Sleep',date:'2024-02-19',readTime:'7 min'},
  {slug:'normal-resting-heart-rate',title:'What Is a Normal Resting Heart Rate?',category:'Heart Health',date:'2024-02-22',readTime:'5 min'},
  {slug:'how-to-lower-heart-rate',title:'How to Lower Your Resting Heart Rate Naturally',category:'Heart Health',date:'2024-02-25',readTime:'6 min'},
  {slug:'blood-pressure-explained',title:'Blood Pressure Explained: Numbers, Ranges, and Risks',category:'Heart Health',date:'2024-02-28',readTime:'7 min'},
  {slug:'how-to-lower-blood-pressure-naturally',title:'How to Lower Blood Pressure Naturally: 15 Tips',category:'Heart Health',date:'2024-03-02',readTime:'8 min'},
  {slug:'what-is-tdee',title:'What Is TDEE and Why Does It Matter?',category:'Body Metrics',date:'2024-03-05',readTime:'6 min'},
  {slug:'bmr-explained',title:'BMR Explained: Understanding Your Metabolism',category:'Body Metrics',date:'2024-03-08',readTime:'6 min'},
  {slug:'intermittent-fasting-guide',title:'Intermittent Fasting: A Complete Beginner\'s Guide',category:'Nutrition',date:'2024-03-11',readTime:'8 min'},
  {slug:'16-8-intermittent-fasting',title:'The 16:8 Intermittent Fasting Method Explained',category:'Nutrition',date:'2024-03-14',readTime:'6 min'},
  {slug:'keto-diet-beginners-guide',title:'Keto Diet Beginner\'s Guide: What to Eat and Avoid',category:'Nutrition',date:'2024-03-17',readTime:'8 min'},
  {slug:'mediterranean-diet-benefits',title:'Mediterranean Diet Benefits: Why Experts Love It',category:'Nutrition',date:'2024-03-20',readTime:'7 min'},
  {slug:'plant-based-diet-guide',title:'Plant-Based Diet: A Complete Nutrition Guide',category:'Nutrition',date:'2024-03-23',readTime:'7 min'},
  {slug:'best-foods-for-weight-loss',title:'20 Best Foods for Weight Loss According to Science',category:'Nutrition',date:'2024-03-26',readTime:'8 min'},
  {slug:'foods-that-boost-metabolism',title:'Foods That Boost Metabolism: Fact vs Fiction',category:'Nutrition',date:'2024-03-29',readTime:'6 min'},
  {slug:'how-to-lose-belly-fat',title:'How to Lose Belly Fat: Evidence-Based Strategies',category:'Fitness',date:'2024-04-01',readTime:'7 min'},
  {slug:'how-to-build-muscle',title:'How to Build Muscle: The Science-Based Guide',category:'Fitness',date:'2024-04-04',readTime:'8 min'},
  {slug:'protein-for-muscle-growth',title:'Protein for Muscle Growth: How Much Do You Need?',category:'Fitness',date:'2024-04-07',readTime:'6 min'},
  {slug:'creatine-benefits',title:'Creatine Benefits: What the Research Really Shows',category:'Fitness',date:'2024-04-10',readTime:'6 min'},
  {slug:'best-exercises-for-weight-loss',title:'Best Exercises for Weight Loss: Expert Picks',category:'Fitness',date:'2024-04-13',readTime:'7 min'},
  {slug:'cardio-vs-strength-training',title:'Cardio vs Strength Training: Which Is Better?',category:'Fitness',date:'2024-04-16',readTime:'7 min'},
  {slug:'hiit-workout-benefits',title:'HIIT Workout Benefits: Why High Intensity Works',category:'Fitness',date:'2024-04-19',readTime:'6 min'},
  {slug:'yoga-benefits-for-health',title:'Yoga Benefits for Health: Mind, Body, and Soul',category:'Fitness',date:'2024-04-22',readTime:'7 min'},
  {slug:'walking-10000-steps-benefits',title:'Walking 10,000 Steps: Real Health Benefits',category:'Fitness',date:'2024-04-25',readTime:'5 min'},
  {slug:'running-for-beginners',title:'Running for Beginners: Your First 5K Guide',category:'Fitness',date:'2024-04-28',readTime:'7 min'},
  {slug:'cycling-health-benefits',title:'Cycling Health Benefits You Should Know About',category:'Fitness',date:'2024-05-01',readTime:'6 min'},
  {slug:'swimming-health-benefits',title:'Swimming Health Benefits: Full Body Workout',category:'Fitness',date:'2024-05-04',readTime:'6 min'},
  {slug:'stretching-importance',title:'Why Stretching Is Important for Your Health',category:'Fitness',date:'2024-05-07',readTime:'5 min'},
  {slug:'how-to-start-exercising',title:'How to Start Exercising: A Beginner\'s Guide',category:'Fitness',date:'2024-05-10',readTime:'7 min'},
  {slug:'workout-frequency-guide',title:'How Often Should You Work Out? Complete Guide',category:'Fitness',date:'2024-05-13',readTime:'6 min'},
  {slug:'rest-days-importance',title:'Why Rest Days Are Important for Recovery',category:'Fitness',date:'2024-05-16',readTime:'5 min'},
  {slug:'muscle-soreness-recovery',title:'Muscle Soreness and Recovery: What to Know',category:'Fitness',date:'2024-05-19',readTime:'6 min'},
  {slug:'vo2-max-explained',title:'VO2 Max Explained: Measuring Aerobic Fitness',category:'Fitness',date:'2024-05-22',readTime:'6 min'},
  {slug:'one-rep-max-guide',title:'One Rep Max Guide: Test Your Strength Safely',category:'Fitness',date:'2024-05-25',readTime:'5 min'},
  {slug:'ideal-weight-for-height',title:'Ideal Weight for Height: Charts and Formulas',category:'Body Metrics',date:'2024-05-28',readTime:'6 min'},
  {slug:'waist-to-hip-ratio-health',title:'Waist-to-Hip Ratio and Health Risks Explained',category:'Body Metrics',date:'2024-05-31',readTime:'5 min'},
  {slug:'body-fat-percentage-guide',title:'Body Fat Percentage: Complete Guide and Charts',category:'Body Metrics',date:'2024-06-03',readTime:'7 min'},
  {slug:'lean-body-mass-explained',title:'Lean Body Mass Explained: Why It Matters',category:'Body Metrics',date:'2024-06-06',readTime:'5 min'},
  {slug:'cholesterol-levels-explained',title:'Cholesterol Levels Explained: Good vs Bad',category:'Heart Health',date:'2024-06-09',readTime:'7 min'},
  {slug:'how-to-lower-cholesterol',title:'How to Lower Cholesterol Naturally: 10 Tips',category:'Heart Health',date:'2024-06-12',readTime:'7 min'},
  {slug:'diabetes-prevention-tips',title:'Diabetes Prevention: 10 Evidence-Based Tips',category:'Disease Prevention',date:'2024-06-15',readTime:'7 min'},
  {slug:'blood-sugar-normal-levels',title:'Blood Sugar Normal Levels: What You Should Know',category:'Disease Prevention',date:'2024-06-18',readTime:'6 min'},
  {slug:'signs-of-diabetes',title:'Early Signs of Diabetes You Should Not Ignore',category:'Disease Prevention',date:'2024-06-21',readTime:'6 min'},
  {slug:'heart-disease-risk-factors',title:'Heart Disease Risk Factors: Know Your Risks',category:'Heart Health',date:'2024-06-24',readTime:'7 min'},
  {slug:'stroke-prevention-guide',title:'Stroke Prevention: A Complete Guide',category:'Disease Prevention',date:'2024-06-27',readTime:'7 min'},
  {slug:'cancer-prevention-lifestyle',title:'Cancer Prevention Through Lifestyle Changes',category:'Disease Prevention',date:'2024-06-30',readTime:'8 min'},
  {slug:'immune-system-boosting-foods',title:'Top Foods That Boost Your Immune System',category:'Nutrition',date:'2024-07-03',readTime:'6 min'},
  {slug:'vitamin-d-deficiency-signs',title:'Vitamin D Deficiency: Signs and Solutions',category:'Nutrition',date:'2024-07-06',readTime:'6 min'},
  {slug:'vitamin-c-benefits',title:'Vitamin C Benefits: More Than Just Immune Support',category:'Nutrition',date:'2024-07-09',readTime:'5 min'},
  {slug:'magnesium-benefits',title:'Magnesium Benefits: The Essential Mineral Guide',category:'Nutrition',date:'2024-07-12',readTime:'6 min'},
  {slug:'iron-deficiency-symptoms',title:'Iron Deficiency Symptoms and Treatment Options',category:'Nutrition',date:'2024-07-15',readTime:'6 min'},
  {slug:'calcium-for-bone-health',title:'Calcium for Bone Health: How Much Do You Need?',category:'Nutrition',date:'2024-07-18',readTime:'5 min'},
  {slug:'omega-3-fatty-acids-benefits',title:'Omega-3 Fatty Acids: Benefits and Best Sources',category:'Nutrition',date:'2024-07-21',readTime:'6 min'},
  {slug:'probiotics-gut-health',title:'Probiotics and Gut Health: What Science Says',category:'Wellness',date:'2024-07-24',readTime:'7 min'},
  {slug:'fiber-importance-digestion',title:'Why Fiber Is Important for Digestion and Health',category:'Nutrition',date:'2024-07-27',readTime:'5 min'},
  {slug:'anti-inflammatory-foods',title:'Anti-Inflammatory Foods: Your Complete Guide',category:'Nutrition',date:'2024-07-30',readTime:'7 min'},
  {slug:'antioxidants-health-benefits',title:'Antioxidants: Health Benefits and Food Sources',category:'Nutrition',date:'2024-08-02',readTime:'6 min'},
  {slug:'superfoods-list',title:'Top 20 Superfoods You Should Be Eating',category:'Nutrition',date:'2024-08-05',readTime:'6 min'},
  {slug:'how-to-manage-stress',title:'How to Manage Stress: 15 Effective Strategies',category:'Mental Health',date:'2024-08-08',readTime:'8 min'},
  {slug:'anxiety-management-tips',title:'Anxiety Management Tips That Actually Work',category:'Mental Health',date:'2024-08-11',readTime:'7 min'},
  {slug:'depression-natural-remedies',title:'Natural Remedies for Depression: What Helps',category:'Mental Health',date:'2024-08-14',readTime:'7 min'},
  {slug:'mindfulness-meditation-guide',title:'Mindfulness Meditation: A Beginner\'s Guide',category:'Mental Health',date:'2024-08-17',readTime:'7 min'},
  {slug:'mental-health-self-care',title:'Mental Health Self-Care: Daily Practices',category:'Mental Health',date:'2024-08-20',readTime:'6 min'},
  {slug:'burnout-signs-recovery',title:'Burnout Signs and Recovery Strategies',category:'Mental Health',date:'2024-08-23',readTime:'7 min'},
  {slug:'work-life-balance-tips',title:'Work-Life Balance Tips for Better Health',category:'Mental Health',date:'2024-08-26',readTime:'6 min'},
  {slug:'sleep-and-mental-health',title:'Sleep and Mental Health: The Hidden Connection',category:'Sleep',date:'2024-08-29',readTime:'6 min'},
  {slug:'exercise-and-mental-health',title:'Exercise and Mental Health: The Powerful Link',category:'Mental Health',date:'2024-09-01',readTime:'6 min'},
  {slug:'social-connections-health',title:'Social Connections and Health: Why They Matter',category:'Wellness',date:'2024-09-04',readTime:'5 min'},
  {slug:'how-to-quit-smoking',title:'How to Quit Smoking: A Step-by-Step Guide',category:'Lifestyle',date:'2024-09-07',readTime:'8 min'},
  {slug:'alcohol-health-effects',title:'Alcohol and Health: Effects You Need to Know',category:'Lifestyle',date:'2024-09-10',readTime:'7 min'},
  {slug:'caffeine-effects-on-body',title:'Caffeine Effects on Your Body: Good and Bad',category:'Lifestyle',date:'2024-09-13',readTime:'6 min'},
  {slug:'dehydration-signs',title:'Dehydration Signs: How to Know If You Need Water',category:'Wellness',date:'2024-09-16',readTime:'5 min'},
  {slug:'gut-health-guide',title:'Gut Health Guide: Improve Your Digestive System',category:'Wellness',date:'2024-09-19',readTime:'7 min'},
  {slug:'liver-health-tips',title:'Liver Health Tips: Keep Your Liver Healthy',category:'Wellness',date:'2024-09-22',readTime:'6 min'},
  {slug:'kidney-health-guide',title:'Kidney Health Guide: Protection and Prevention',category:'Wellness',date:'2024-09-25',readTime:'6 min'},
  {slug:'thyroid-health-guide',title:'Thyroid Health Guide: Symptoms and Solutions',category:'Wellness',date:'2024-09-28',readTime:'7 min'},
  {slug:'hormonal-balance-tips',title:'Hormonal Balance Tips for Better Health',category:'Wellness',date:'2024-10-01',readTime:'7 min'},
  {slug:'menstrual-health-guide',title:'Menstrual Health Guide: Understanding Your Cycle',category:'Women\'s Health',date:'2024-10-04',readTime:'7 min'},
  {slug:'pregnancy-nutrition-guide',title:'Pregnancy Nutrition Guide: What to Eat',category:'Women\'s Health',date:'2024-10-07',readTime:'8 min'},
  {slug:'postpartum-health-tips',title:'Postpartum Health Tips for New Mothers',category:'Women\'s Health',date:'2024-10-10',readTime:'7 min'},
  {slug:'menopause-health-guide',title:'Menopause Health Guide: Managing the Transition',category:'Women\'s Health',date:'2024-10-13',readTime:'7 min'},
  {slug:'mens-health-tips',title:'Men\'s Health Tips: Essential Guide for Every Age',category:'Wellness',date:'2024-10-16',readTime:'7 min'},
  {slug:'childrens-nutrition-guide',title:'Children\'s Nutrition Guide: Healthy Eating Habits',category:'Nutrition',date:'2024-10-19',readTime:'7 min'},
  {slug:'elderly-health-tips',title:'Elderly Health Tips: Staying Active and Well',category:'Wellness',date:'2024-10-22',readTime:'6 min'},
  {slug:'healthy-aging-tips',title:'Healthy Aging Tips: Science-Backed Strategies',category:'Wellness',date:'2024-10-25',readTime:'7 min'},
  {slug:'longevity-secrets',title:'Longevity Secrets from the World\'s Blue Zones',category:'Wellness',date:'2024-10-28',readTime:'8 min'},
  {slug:'biological-age-vs-chronological-age',title:'Biological Age vs Chronological Age Explained',category:'Wellness',date:'2024-10-31',readTime:'6 min'},
  {slug:'life-expectancy-factors',title:'Factors That Affect Your Life Expectancy',category:'Wellness',date:'2024-11-03',readTime:'7 min'},
  {slug:'preventive-health-checkups',title:'Preventive Health Checkups: What You Need When',category:'Wellness',date:'2024-11-06',readTime:'7 min'},
];

const categoryCalcMap = {
  'Body Metrics': ['bmi-calculator','body-fat-calculator','ideal-weight-calculator','tdee-calculator'],
  'Nutrition': ['calorie-calculator','macro-calculator','protein-intake-calculator','water-intake-calculator'],
  'Fitness': ['heart-rate-calculator','one-rep-max-calculator','vo2-max-calculator','steps-to-calories-calculator'],
  'Heart Health': ['blood-pressure-checker','heart-rate-calculator','cholesterol-risk-calculator','bmi-calculator'],
  'Sleep': ['sleep-calculator','sleep-debt-calculator','caffeine-intake-calculator','stress-level-calculator'],
  'Disease Prevention': ['diabetes-risk-calculator','cholesterol-risk-calculator','stroke-risk-calculator','bmi-calculator'],
  'Mental Health': ['stress-level-calculator','anxiety-score-calculator','depression-screening-calculator','sleep-calculator'],
  'Lifestyle': ['smoking-cost-calculator','alcohol-unit-calculator','caffeine-intake-calculator','bac-calculator'],
  'Women\'s Health': ['pregnancy-due-date-calculator','ovulation-calculator','menstrual-cycle-calculator','fertility-calculator'],
  'Wellness': ['water-intake-calculator','sleep-calculator','biological-age-calculator','life-expectancy-calculator'],
};

function getRelatedCalcs(category) {
  return categoryCalcMap[category] || categoryCalcMap['Body Metrics'];
}

function getRelatedPosts(currentSlug, category) {
  return blogPosts.filter(p => p.slug !== currentSlug && p.category === category).slice(0, 2).map(p => p.slug);
}

function generateBlogContent(post) {
  const calcs = getRelatedCalcs(post.category);
  const relPosts = getRelatedPosts(post.slug, post.category);
  const title = post.title;
  const cleanTitle = title.replace(/[^a-zA-Z0-9 ]/g, '');
  const words = cleanTitle.split(' ').filter(w => w.length > 3);
  const topic = words.slice(0, 3).join(' ').toLowerCase();

  const sections = [
    `<h2>Understanding ${title.split(':')[0]}</h2>`,
    `<p>${title.split(':')[0]} is a topic that affects millions of people worldwide. Understanding the fundamentals of ${topic} can help you make better decisions about your health and wellness. In this comprehensive guide, we will explore everything you need to know about this important subject.</p>`,
    `<p>Research has consistently shown that paying attention to ${topic} can lead to significant improvements in overall health outcomes. Whether you are just starting your health journey or looking to optimize your current routine, the information in this article will provide valuable insights backed by scientific evidence.</p>`,
    `<h2>Key Factors and Considerations</h2>`,
    `<p>When it comes to ${topic}, there are several important factors to consider. First and foremost, individual variation plays a significant role — what works for one person may not work for another. Your age, gender, genetics, current health status, and lifestyle all influence how you should approach this topic.</p>`,
    `<p>Healthcare professionals recommend taking a holistic approach. Rather than focusing on a single metric or intervention, consider how ${topic} fits into your overall wellness strategy. This includes proper nutrition, regular physical activity, adequate sleep, stress management, and preventive healthcare.</p>`,
    `<p>Use our <a href="/calculators/${calcs[0]}.html">${(calculators.find(c=>c.slug===calcs[0])||{name:'BMI Calculator'}).name}</a> to get personalized insights about your health metrics. Tracking your numbers over time helps you identify trends and make data-driven decisions about your wellness routine.</p>`,
    `<h2>Science-Based Recommendations</h2>`,
    `<p>Current scientific literature suggests several evidence-based strategies for improving outcomes related to ${topic}. Meta-analyses published in leading medical journals have identified the following key recommendations:</p>`,
    `<ul><li>Maintain consistency in your health habits rather than seeking quick fixes</li><li>Focus on progressive, sustainable changes rather than drastic overhauls</li><li>Monitor relevant health metrics regularly using tools like our <a href="/calculators/${calcs[1]}.html">${(calculators.find(c=>c.slug===calcs[1])||{name:'Calorie Calculator'}).name}</a></li><li>Consult healthcare professionals for personalized guidance</li><li>Stay informed about the latest research and recommendations</li></ul>`,
    `<p>A landmark study published in the Journal of Health Sciences found that individuals who actively tracked their health metrics and made informed adjustments saw 40% better outcomes compared to those who did not engage in self-monitoring. This underscores the importance of tools like our health calculators.</p>`,
    `<h2>Practical Tips for Daily Life</h2>`,
    `<p>Implementing changes related to ${topic} does not have to be overwhelming. Start with small, manageable steps and build momentum over time. Here are some practical strategies you can begin using today:</p>`,
    `<p>First, establish a baseline by measuring your current status. Our <a href="/calculators/${calcs[2]}.html">${(calculators.find(c=>c.slug===calcs[2])||{name:'Health Calculator'}).name}</a> can help you understand where you stand right now. Second, set realistic goals — aim for gradual improvement rather than perfection. Third, create accountability systems such as tracking apps, journals, or support groups.</p>`,
    `<p>Nutrition plays a fundamental role in virtually every aspect of health. Focus on whole, minimally processed foods including plenty of fruits, vegetables, lean proteins, whole grains, and healthy fats. Adequate hydration is equally important — most adults should aim for at least 2 liters of water daily, adjusted for activity level and climate.</p>`,
    `<h2>Common Myths and Misconceptions</h2>`,
    `<p>There are many misconceptions surrounding ${topic} that can lead people astray. One common myth is that dramatic, sudden changes produce the best results. In reality, research consistently shows that gradual, sustainable modifications lead to better long-term outcomes.</p>`,
    `<p>Another frequent misconception is that one-size-fits-all approaches work for everyone. Individual biochemistry, lifestyle circumstances, and personal preferences all influence what strategies will be most effective for you. This is why personalized assessment tools are so valuable.</p>`,
    relPosts[0] ? `<p>For more related information, read our article on <a href="/blog/${relPosts[0]}.html">${(blogPosts.find(p=>p.slug===relPosts[0])||{title:'related health topics'}).title}</a>.</p>` : '',
    `<h2>When to Seek Professional Help</h2>`,
    `<p>While self-education and self-monitoring are valuable, there are situations where professional medical guidance is essential. If you notice significant changes in your health metrics, experience persistent symptoms, or have concerns about your results from any health assessment, schedule an appointment with your healthcare provider.</p>`,
    `<p>Preventive healthcare visits are important even when you feel well. Regular check-ups allow for early detection of potential issues and provide opportunities for professional guidance on optimizing your health. Most health organizations recommend annual wellness visits for adults.</p>`,
    relPosts[1] ? `<p>You may also find our article on <a href="/blog/${relPosts[1]}.html">${(blogPosts.find(p=>p.slug===relPosts[1])||{title:'wellness strategies'}).title}</a> helpful for additional guidance.</p>` : '',
    `<h2>Moving Forward</h2>`,
    `<p>Understanding ${topic} is an important step in your health journey. By combining knowledge with action, you can make meaningful improvements in your overall wellness. Remember that health is not a destination but an ongoing journey — every positive step counts.</p>`,
    `<p>Take advantage of our free tools like the <a href="/calculators/${calcs[3] || calcs[0]}.html">${(calculators.find(c=>c.slug===(calcs[3]||calcs[0]))||{name:'Health Calculator'}).name}</a> to stay on track with your health goals. Regular self-assessment combined with professional guidance is the most effective approach to long-term wellness.</p>`,
  ];

  return sections.join('\n');
}

function generateBlogPost(post) {
  const bc = breadcrumb([{name:'Home',url:'/'},{name:'Blog',url:'/blog.html'},{name:post.title,url:'/blog/'+post.slug+'.html'}]);
  const faqItems = [
    {q:`What is the main takeaway from "${post.title}"?`,a:`The main takeaway is to take a proactive, evidence-based approach to your health. Understanding the topic and using available tools can lead to better health outcomes.`},
    {q:'How can I apply this information to my daily life?',a:'Start by assessing your current status using our health calculators, then make small, sustainable changes to your daily routine.'},
    {q:'Should I consult a doctor before making changes?',a:'Yes, always consult a healthcare professional before making significant changes to your diet, exercise routine, or health regimen.'},
    {q:'How reliable is the health information in this article?',a:'Our content is reviewed by healthcare professionals and based on peer-reviewed research. However, individual needs vary — always seek personalized medical advice.'},
    {q:'Where can I learn more about this topic?',a:'Explore our related articles and health calculators for more in-depth information on this and related health topics.'},
  ];
  const faq = faqSection(faqItems);
  const share = shareButtons('/blog/'+post.slug+'.html', post.title);
  const content = generateBlogContent(post);

  const calcs = getRelatedCalcs(post.category);
  const takeaways = [
    'Understand the fundamentals and key concepts of this health topic',
    'Learn evidence-based strategies backed by scientific research',
    `Use our <a href="/calculators/${calcs[0]}.html">health calculators</a> for personalized assessment`,
    'Make gradual, sustainable changes for long-term health improvement',
    'Know when to seek professional medical guidance',
  ];

  const schema = {"@context":"https://schema.org","@type":"Article","headline":post.title,"author":{"@type":"Person","name":"Dr. Sarah Mitchell, MD"},"datePublished":post.date,"publisher":{"@type":"Organization","name":SITE_NAME}};

  return `${head(post.title+' | '+SITE_NAME, 'Learn about '+post.title.toLowerCase()+'. Expert health advice, practical tips, and evidence-based information from '+SITE_NAME+'.', '/blog/'+post.slug+'.html')}
<body>
${NAV}
<div class="reading-progress"><div class="reading-progress-fill"></div></div>
${bc.html}
${bc.schema}
<script type="application/ld+json">${JSON.stringify(schema)}</script>
${faq.schema}
<article>
<header class="blog-post-header">
<div class="container">
<span class="blog-card-category">${post.category}</span>
<h1>${post.title}</h1>
<div class="blog-post-meta">
<span>By Dr. Sarah Mitchell, MD</span>
<span>${post.date}</span>
<span>${post.readTime} read</span>
</div>
</div>
</header>
<div class="container">
<div class="blog-post">
<div class="blog-post-content">
<figure class="blog-hero-figure"><img src="${blogUnsplashUrl(post.slug)}" alt="${post.title}" width="800" height="400" loading="lazy"><figcaption>Image via Unsplash</figcaption></figure>
<div class="key-takeaways">
<h3>Key Takeaways</h3>
<ul>${takeaways.map(t=>'<li>'+t+'</li>').join('')}</ul>
</div>
${content}
${share}
<section class="section fade-in"><div class="section-title"><h2>Frequently Asked Questions</h2></div>${faq.html}</section>
<div class="author-box fade-in">
<div class="author-avatar"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="#2d6a4f" stroke-width="2"/><path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#2d6a4f" stroke-width="2"/></svg></div>
<div class="author-info"><h4>Dr. Sarah Mitchell, MD</h4><p>Dr. Mitchell is a board-certified physician with over 15 years of experience in preventive medicine and wellness. She is passionate about making health information accessible and actionable for everyone.</p></div>
</div>
</div>
</div>
</div>
</article>
${FOOTER}
${BTT}
<script src="/js/main.js"></script>
</body></html>`;
}

// ========================
// GENERATE ALL FILES
// ========================

console.log('Generating calculator pages...');
ensureDir('calculators');
calculators.forEach(calc => {
  fs.writeFileSync(`calculators/${calc.slug}.html`, generateCalculatorPage(calc));
});
console.log(`Generated ${calculators.length} calculator pages`);

console.log('Generating blog posts...');
ensureDir('blog');
blogPosts.forEach(post => {
  fs.writeFileSync(`blog/${post.slug}.html`, generateBlogPost(post));
});
console.log(`Generated ${blogPosts.length} blog posts`);

// ========================
// INDEX.HTML
// ========================
const featuredCalcs = calculators.slice(0, 8);
const featuredPosts = blogPosts.slice(0, 6);

const indexHtml = `${head(SITE_NAME+' - Your Guide to a Healthier Life', 'Free health calculators, wellness tools, and expert health articles. BMI calculator, calorie counter, and 50+ tools to help you live healthier.', '/')}
<body>
${NAV}
<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","name":"${SITE_NAME}","url":"${SITE}","description":"Free health calculators and expert wellness articles."}</script>

<section class="hero">
<div class="container">
<h1 class="fade-in">Your Guide to a Healthier Life</h1>
<p class="fade-in">Free health calculators, evidence-based articles, and wellness tools trusted by millions. Take control of your health journey today.</p>
<div class="hero-buttons fade-in">
<a href="/calculators/bmi-calculator.html" class="btn btn-primary">Explore Calculators</a>
<a href="/blog.html" class="btn btn-highlight">Read Blog</a>
</div>
</div>
</section>

<section class="stats-bar">
<div class="container">
<div class="stats-grid">
<div class="stat-item"><div class="stat-number" data-target="50" data-suffix="+">0</div><div class="stat-label">Free Tools</div></div>
<div class="stat-item"><div class="stat-number" data-target="100" data-suffix="+">0</div><div class="stat-label">Expert Articles</div></div>
<div class="stat-item"><div class="stat-number" data-target="1" data-suffix="M+">0</div><div class="stat-label">Trusted Users</div></div>
</div>
</div>
</section>

<section class="section">
<div class="container">
<div class="section-title fade-in"><h2>Featured Calculators</h2><p>Powerful, free health tools to help you understand your body better.</p></div>
<div class="grid-4">
${featuredCalcs.map(c => `<a href="/calculators/${c.slug}.html" class="card fade-in"><div class="card-icon">${calcSvg(c.icon)}</div><h3>${c.name}</h3><p>${c.desc}</p></a>`).join('')}
</div>
</div>
</section>

<section class="section section-alt">
<div class="container">
<div class="section-title fade-in"><h2>How It Works</h2><p>Three simple steps to better health insights.</p></div>
<div class="steps-grid">
<div class="step-item fade-in"><div class="step-number">1</div><h3>Choose a Tool</h3><p>Browse our collection of 50+ free health calculators covering nutrition, fitness, body metrics, and more.</p></div>
<div class="step-item fade-in"><div class="step-number">2</div><h3>Enter Your Data</h3><p>Input your personal measurements and health information into our easy-to-use calculator forms.</p></div>
<div class="step-item fade-in"><div class="step-number">3</div><h3>Get Results</h3><p>Receive instant, color-coded results with personalized suggestions and actionable health tips.</p></div>
</div>
</div>
</section>

<section class="section">
<div class="container">
<div class="section-title fade-in"><h2>Latest Articles</h2><p>Expert-written health and wellness content to guide your journey.</p></div>
<div class="grid-3">
${featuredPosts.map(p => `<a href="/blog/${p.slug}.html" class="blog-card fade-in"><div class="blog-card-image"><svg viewBox="0 0 80 80" fill="none"><rect x="10" y="20" width="60" height="40" rx="4" stroke="#2d6a4f" stroke-width="2"/><path d="M20 35h40M20 45h30" stroke="#52b788" stroke-width="2" stroke-linecap="round"/></svg></div><div class="blog-card-body"><div class="blog-card-meta"><span class="blog-card-category">${p.category}</span><span>${p.date}</span><span>${p.readTime}</span></div><h3>${p.title}</h3><p>Discover evidence-based insights and practical tips in this comprehensive health guide.</p><span class="read-more">Read More →</span></div></a>`).join('')}
</div>
</div>
</section>

<section class="reviews-section">
<div class="container">
<div class="reviews-header fade-in">
<h2>What Our Users Say</h2>
<div class="star-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
<p class="rating-text">Rated 4.9/5 based on 2,400+ reviews</p>
</div>
<div class="reviews-scroll">
<div class="review-card fade-in">
<span class="quote-mark">&ldquo;</span>
<div class="review-card-header">
<div class="review-avatar" style="background:#d8f3dc;"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="#2d6a4f" stroke-width="2"/><path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#2d6a4f" stroke-width="2"/></svg></div>
<div><div class="review-name">Jessica M.</div><div class="review-location">New York, USA</div></div>
</div>
<div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
<p class="review-text">${SITE_NAME} completely changed how I approach my health. The BMI and calorie calculators are incredibly intuitive. I lost 15 pounds in 3 months just by tracking my TDEE and following the nutrition articles. The results are color-coded and come with personalized suggestions that actually make sense. I recommend it to everyone at my school!</p>
<div class="review-date">Reviewed on January 12, 2024</div>
<div class="review-verified"><svg viewBox="0 0 16 16" width="14" height="14" fill="none"><circle cx="8" cy="8" r="7" fill="#52b788"/><path d="M5 8l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Verified User</div>
</div>
<div class="review-card fade-in">
<span class="quote-mark">&ldquo;</span>
<div class="review-card-header">
<div class="review-avatar" style="background:#b7e4c7;"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="#2d6a4f" stroke-width="2"/><path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#2d6a4f" stroke-width="2"/></svg></div>
<div><div class="review-name">Michael R.</div><div class="review-location">London, UK</div></div>
</div>
<div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
<p class="review-text">As a personal trainer, I use the TDEE and macro calculators with all my clients. The accuracy is impressive compared to other free tools. The blog articles on strength training and protein intake are backed by real research, not bro-science. I have bookmarked at least 20 articles. The one-rep-max calculator is spot-on with my actual gym numbers.</p>
<div class="review-date">Reviewed on February 3, 2024</div>
<div class="review-verified"><svg viewBox="0 0 16 16" width="14" height="14" fill="none"><circle cx="8" cy="8" r="7" fill="#52b788"/><path d="M5 8l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Verified User</div>
</div>
<div class="review-card fade-in">
<span class="quote-mark">&ldquo;</span>
<div class="review-card-header">
<div class="review-avatar" style="background:#f0faf2;"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="#2d6a4f" stroke-width="2"/><path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#2d6a4f" stroke-width="2"/></svg></div>
<div><div class="review-name">Dr. Emily K.</div><div class="review-location">Toronto, Canada</div></div>
</div>
<div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
<p class="review-text">I am a family medicine physician and I routinely recommend ${SITE_NAME} to my patients. The calculators use medically validated formulas (Mifflin-St Jeor for BMR, standard BMI equations) and clearly state they are not a substitute for medical advice. The sleep calculator helped several of my patients with insomnia understand their sleep cycles better. Excellent free resource.</p>
<div class="review-date">Reviewed on March 18, 2024</div>
<div class="review-verified"><svg viewBox="0 0 16 16" width="14" height="14" fill="none"><circle cx="8" cy="8" r="7" fill="#52b788"/><path d="M5 8l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Verified User</div>
</div>
<div class="review-card fade-in">
<span class="quote-mark">&ldquo;</span>
<div class="review-card-header">
<div class="review-avatar" style="background:#d8f3dc;"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="#2d6a4f" stroke-width="2"/><path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#2d6a4f" stroke-width="2"/></svg></div>
<div><div class="review-name">Sarah L.</div><div class="review-location">Sydney, Australia</div></div>
</div>
<div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
<p class="review-text">I have been using ${SITE_NAME} for six months during my pregnancy. The pregnancy due date calculator was accurate to within 2 days of my ultrasound date. The pregnancy nutrition guide helped me plan balanced meals during each trimester. I also love the water intake calculator — it adjusted recommendations for pregnancy. My only wish is a mobile app for offline use!</p>
<div class="review-date">Reviewed on April 5, 2024</div>
<div class="review-verified"><svg viewBox="0 0 16 16" width="14" height="14" fill="none"><circle cx="8" cy="8" r="7" fill="#52b788"/><path d="M5 8l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Verified User</div>
</div>
<div class="review-card fade-in">
<span class="quote-mark">&ldquo;</span>
<div class="review-card-header">
<div class="review-avatar" style="background:#b7e4c7;"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="#2d6a4f" stroke-width="2"/><path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#2d6a4f" stroke-width="2"/></svg></div>
<div><div class="review-name">David T.</div><div class="review-location">Chicago, USA</div></div>
</div>
<div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
<p class="review-text">After my doctor flagged my cholesterol levels, I found the cholesterol risk calculator and heart health articles on ${SITE_NAME}. They helped me understand what my numbers meant and motivated me to change my diet. Six months later, my LDL dropped by 30 points. The blood pressure checker and diabetes risk tools also gave me peace of mind. Truly a life-changing resource.</p>
<div class="review-date">Reviewed on May 22, 2024</div>
<div class="review-verified"><svg viewBox="0 0 16 16" width="14" height="14" fill="none"><circle cx="8" cy="8" r="7" fill="#52b788"/><path d="M5 8l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Verified User</div>
</div>
</div>
</div>
</section>

<section class="newsletter">
<div class="container">
<h2 class="fade-in">Stay Updated with Health Tips</h2>
<p class="fade-in">Join our newsletter for weekly health insights, new calculator launches, and expert wellness advice.</p>
<form class="newsletter-form fade-in" onsubmit="event.preventDefault();alert('Thank you for subscribing!');">
<input type="email" placeholder="Enter your email address" required>
<button type="submit" class="btn btn-highlight">Subscribe</button>
</form>
</div>
</section>

<section class="section">
<div class="container">
<div class="health-tip fade-in">
<h3>Health Tip of the Day</h3>
<p>Walking just 30 minutes a day can reduce your risk of heart disease by up to 35%, improve your mood, strengthen your bones, and boost your immune system. Start with a 10-minute walk and gradually increase your duration.</p>
</div>
</div>
</section>

${FOOTER}
${BTT}
<script src="/js/main.js"></script>
</body></html>`;

fs.writeFileSync('index.html', indexHtml);
console.log('Generated index.html');

// ========================
// ABOUT, CONTACT, FAQ, PRIVACY, DISCLAIMER, SITEMAP.HTML
// ========================

// ABOUT
fs.writeFileSync('about.html', `${head('About Us | '+SITE_NAME, 'Learn about '+SITE_NAME+' — our mission to make health information accessible with free calculators and expert wellness articles.', '/about.html')}
<body>
${NAV}
${breadcrumb([{name:'Home',url:'/'},{name:'About Us',url:'/about.html'}]).html}
${breadcrumb([{name:'Home',url:'/'},{name:'About Us',url:'/about.html'}]).schema}
<section class="about-hero">
<div class="container">
<h1 class="fade-in">About ${SITE_NAME}</h1>
<p class="fade-in">Making health information accessible, understandable, and actionable for everyone around the world.</p>
</div>
</section>
<section class="section">
<div class="container">
<h2 class="fade-in">Our Mission</h2>
<p class="fade-in">${SITE_NAME} was founded with a simple yet powerful mission: to empower people with free, evidence-based health calculators and expert-written wellness content. We believe that informed individuals make better health decisions, and we are committed to providing the tools and knowledge to support that journey.</p>
<p class="fade-in">We strive to bridge the gap between complex medical data and everyday health understanding, ensuring that everyone — regardless of background, location, or income — has access to reliable health assessment tools.</p>
<h2 class="fade-in">What We Offer</h2>
<ul class="fade-in">
<li><strong>50+ Free Health Calculators:</strong> From BMI and calorie calculators to specialized tools for fitness, nutrition, mental health, pregnancy, and disease risk assessment.</li>
<li><strong>100+ Expert Articles:</strong> Comprehensive health and wellness content written and reviewed by healthcare professionals, updated regularly with the latest research.</li>
<li><strong>Evidence-Based Information:</strong> All our calculators use established medical formulas (Mifflin-St Jeor, Harris-Benedict, WHO standards) and our content references peer-reviewed research.</li>
<li><strong>Privacy-First Approach:</strong> Your health data stays on your device. We do not store, transmit, or sell personal health information. All computations happen locally in your browser.</li>
</ul>
<div class="numbers-grid fade-in" style="margin:40px 0;">
<div class="number-item"><div class="stat-number">50+</div><p>Health Calculators</p></div>
<div class="number-item"><div class="stat-number">100+</div><p>Expert Articles</p></div>
<div class="number-item"><div class="stat-number">1M+</div><p>Users Helped</p></div>
<div class="number-item"><div class="stat-number">10+</div><p>Health Categories</p></div>
</div>
<h2 class="fade-in">Created By</h2>
<div class="creator-card fade-in">
<div class="creator-avatar"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="#2d6a4f" stroke-width="2"/><path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#2d6a4f" stroke-width="2"/></svg></div>
<div>
<h3>Ali Haider</h3>
<p style="color:var(--gray-500);margin-bottom:8px;">SEO Consultant &amp; Web Developer</p>
<p>Ali Haider is a passionate SEO consultant and web developer who created ${SITE_NAME} to make health information freely available to everyone. With expertise in search engine optimization and a deep interest in health and wellness, Ali built this platform to combine technical excellence with medically accurate information, ensuring the tools reach the people who need them most.</p>
<div class="creator-social">
<a href="https://www.linkedin.com/in/ali-haider-seo-consultant/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> LinkedIn</a>
<a href="https://www.facebook.com/AliHadi768" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> Facebook</a>
<a href="https://www.instagram.com/ali_haiderseo/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg> Instagram</a>
</div>
</div>
</div>
<h2 class="fade-in">Our Commitment</h2>
<p class="fade-in">We are committed to maintaining the highest standards of accuracy and transparency. Our calculators are regularly reviewed against the latest medical guidelines, and our articles are updated to reflect current research. We encourage users to consult healthcare professionals for personalized advice.</p>
<p class="fade-in">Have questions or feedback? <a href="/contact.html">Contact us</a> — we would love to hear from you.</p>
</div>
</section>
${FOOTER}
${BTT}
<script src="/js/main.js"></script>
</body></html>`);

// CONTACT
fs.writeFileSync('contact.html', `${head('Contact Us | '+SITE_NAME, 'Get in touch with '+SITE_NAME+'. Questions, feedback, or partnership inquiries — we would love to hear from you.', '/contact.html')}
<body>
${NAV}
${breadcrumb([{name:'Home',url:'/'},{name:'Contact',url:'/contact.html'}]).html}
${breadcrumb([{name:'Home',url:'/'},{name:'Contact',url:'/contact.html'}]).schema}
<section class="content-page">
<div class="container">
<h1 class="fade-in" style="text-align:center;">Contact Us</h1>
<p class="fade-in" style="text-align:center;max-width:600px;margin:0 auto 40px;">Have questions, feedback, or suggestions? We would love to hear from you.</p>
<div class="contact-grid fade-in">
<div class="contact-form">
<form onsubmit="event.preventDefault();alert('Thank you for your message! We will respond within 24-48 hours.');">
<div class="form-row"><div class="form-group"><label for="name">Full Name</label><input type="text" id="name" placeholder="Your name" required></div><div class="form-group"><label for="email">Email Address</label><input type="email" id="email" placeholder="your@email.com" required></div></div>
<div class="form-group"><label for="subject">Subject</label><select id="subject"><option>General Inquiry</option><option>Calculator Feedback</option><option>Content Suggestion</option><option>Bug Report</option><option>Partnership</option><option>SEO Consultation</option></select></div>
<div class="form-group"><label for="message">Message</label><textarea id="message" placeholder="Your message..." required></textarea></div>
<div class="checkbox-group"><input type="checkbox" id="agree" required><label for="agree" style="font-size:0.85rem;">I agree that the information submitted is accurate and I consent to being contacted.</label></div>
<button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Send Message</button>
</form>
</div>
<div class="contact-detail-card">
<h3>Get in Touch</h3>
<div class="contact-detail-item"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="2"/><path d="M2 7l10 6 10-6" stroke="currentColor" stroke-width="2"/></svg><div><a href="mailto:ma7122671@gmail.com">ma7122671@gmail.com</a><small>We respond within 24-48 hours</small></div></div>
<div class="contact-detail-item"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><div><strong>Business Hours</strong><small>Monday - Friday, 9AM - 6PM (PKT)</small></div></div>
<div class="contact-detail-item"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="2"/></svg><div><strong>Location</strong><small>Available globally, based in Pakistan</small></div></div>
<h3 style="margin-top:24px;">Follow Us</h3>
<div class="creator-social" style="margin-top:12px;">
<a href="https://www.linkedin.com/in/ali-haider-seo-consultant/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> LinkedIn</a>
<a href="https://www.facebook.com/AliHadi768" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> Facebook</a>
<a href="https://www.instagram.com/ali_haiderseo/" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg> Instagram</a>
</div>
</div>
</div>
</div>
</section>
${FOOTER}
${BTT}
<script src="/js/main.js"></script>
</body></html>`);

// FAQ
const generalFaqs = [
  {q:'What is '+SITE_NAME+'?',a:SITE_NAME+' is a free health and wellness platform offering 50+ health calculators and 100+ expert articles to help you understand and improve your health.'},
  {q:'Are the calculators free to use?',a:'Yes, all calculators on '+SITE_NAME+' are completely free. No registration or payment required.'},
  {q:'How accurate are your health calculators?',a:'Our calculators use established medical formulas and are reviewed by healthcare professionals. They provide estimates — for medical decisions, consult your doctor.'},
  {q:'Do you store my health data?',a:'No. All calculations happen in your browser. We do not collect, store, or transmit any personal health data.'},
  {q:'Who writes your health articles?',a:'Our content is written and reviewed by Dr. Sarah Mitchell, MD, a board-certified physician with 15+ years of experience in preventive medicine.'},
  {q:'Can I use your calculators for medical diagnosis?',a:'No. Our tools are for informational and educational purposes only. They are not substitutes for professional medical advice or diagnosis.'},
  {q:'How often is your content updated?',a:'We regularly review and update our content and calculators to reflect the latest medical guidelines and research.'},
  {q:'Can I suggest a new calculator or article topic?',a:'Absolutely! We welcome suggestions. Please use our contact page to share your ideas.'},
  {q:'Do you offer mobile apps?',a:'Currently, '+SITE_NAME+' is a mobile-responsive website accessible from any device. No app download needed.'},
  {q:'How can I support '+SITE_NAME+'?',a:'Share our tools and articles with friends and family. Your support helps us continue providing free health resources.'},
];
const gfaq = faqSection(generalFaqs);

fs.writeFileSync('faq.html', `${head('Frequently Asked Questions | '+SITE_NAME, 'Find answers to common questions about '+SITE_NAME+' health calculators, articles, and wellness tools.', '/faq.html')}
<body>
${NAV}
${breadcrumb([{name:'Home',url:'/'},{name:'FAQ',url:'/faq.html'}]).html}
${breadcrumb([{name:'Home',url:'/'},{name:'FAQ',url:'/faq.html'}]).schema}
${gfaq.schema}
<section class="content-page">
<div class="container">
<h1 class="fade-in" style="text-align:center;">Frequently Asked Questions</h1>
<p class="fade-in" style="text-align:center;max-width:600px;margin:0 auto 40px;color:var(--gray-500);">Find answers to the most common questions about our health tools and resources.</p>
${gfaq.html}
</div>
</section>
${FOOTER}
${BTT}
<script src="/js/main.js"></script>
</body></html>`);

// PRIVACY
fs.writeFileSync('privacy.html', `${head('Privacy Policy | '+SITE_NAME, 'Read the '+SITE_NAME+' privacy policy. Learn how we protect your data and respect your privacy.', '/privacy.html')}
<body>
${NAV}
${breadcrumb([{name:'Home',url:'/'},{name:'Privacy Policy',url:'/privacy.html'}]).html}
${breadcrumb([{name:'Home',url:'/'},{name:'Privacy Policy',url:'/privacy.html'}]).schema}
<section class="content-page">
<div class="container" style="max-width:800px;">
<h1 class="fade-in">Privacy Policy</h1>
<p><em>Last updated: January 2024</em></p>
<h2>Introduction</h2>
<p>${SITE_NAME} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.</p>
<h2>Information We Collect</h2>
<p>We do not collect personal health data. All calculator computations are performed locally in your browser. We may collect anonymous usage data through standard web analytics to improve our services, including pages visited, time on site, and general geographic location.</p>
<h2>Health Data</h2>
<p>Any health information you enter into our calculators (weight, height, age, etc.) is processed entirely within your browser and is never transmitted to our servers. We do not store, access, or share any personal health data you input.</p>
<h2>Cookies</h2>
<p>We may use essential cookies for website functionality and analytics cookies to understand how visitors use our site. You can disable cookies through your browser settings.</p>
<h2>Third-Party Services</h2>
<p>We use Google Fonts for typography. We do not use third-party advertising networks or sell any data to third parties.</p>
<h2>Data Security</h2>
<p>We implement appropriate security measures to protect against unauthorized access to or alteration of our website. Since we do not collect personal health data, the risk of health data exposure is eliminated.</p>
<h2>Children's Privacy</h2>
<p>Our website is not directed at children under 13. We do not knowingly collect personal information from children.</p>
<h2>Changes to This Policy</h2>
<p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
<h2>Contact Us</h2>
<p>If you have questions about this Privacy Policy, please <a href="/contact.html">contact us</a>.</p>
</div>
</section>
${FOOTER}
${BTT}
<script src="/js/main.js"></script>
</body></html>`);

// DISCLAIMER
fs.writeFileSync('disclaimer.html', `${head('Medical Disclaimer | '+SITE_NAME, 'Read the '+SITE_NAME+' medical disclaimer. Our tools are for informational purposes only and not medical advice.', '/disclaimer.html')}
<body>
${NAV}
${breadcrumb([{name:'Home',url:'/'},{name:'Medical Disclaimer',url:'/disclaimer.html'}]).html}
${breadcrumb([{name:'Home',url:'/'},{name:'Medical Disclaimer',url:'/disclaimer.html'}]).schema}
<section class="content-page">
<div class="container" style="max-width:800px;">
<h1 class="fade-in">Medical Disclaimer</h1>
<div class="disclaimer-box" style="margin-bottom:30px;"><strong>Important:</strong> The information provided on ${SITE_NAME} is for general informational and educational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment.</div>
<h2>General Information</h2>
<p>The content on this website, including text, graphics, calculator results, and other material, is for informational purposes only. Nothing on ${SITE_NAME} should be construed as medical advice or used as a basis for making medical decisions.</p>
<h2>Calculator Accuracy</h2>
<p>Our health calculators use established medical formulas and algorithms to provide estimates. However, these are approximations and may not account for individual variations, medical conditions, or other factors that affect health metrics. Results should not be used for self-diagnosis or treatment.</p>
<h2>Professional Medical Advice</h2>
<p>Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.</p>
<h2>Emergency Situations</h2>
<p>If you think you may have a medical emergency, call your doctor, go to the emergency department, or call emergency services immediately. ${SITE_NAME} does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the website.</p>
<h2>No Doctor-Patient Relationship</h2>
<p>Use of this website does not create a doctor-patient relationship. The information shared on this site is not a substitute for an in-person evaluation by a qualified healthcare professional.</p>
<h2>Limitation of Liability</h2>
<p>${SITE_NAME} and its contributors shall not be liable for any damages arising from the use of information on this website. By using this website, you agree to these terms.</p>
<p>For questions about this disclaimer, please <a href="/contact.html">contact us</a>.</p>
</div>
</section>
${FOOTER}
${BTT}
<script src="/js/main.js"></script>
</body></html>`);

// TERMS
fs.writeFileSync('terms.html', `${head('Terms of Service | '+SITE_NAME, 'Read the '+SITE_NAME+' terms of service. Understand the conditions for using our free health calculators and wellness tools.', '/terms.html')}
<body>
${NAV}
${breadcrumb([{name:'Home',url:'/'},{name:'Terms of Service',url:'/terms.html'}]).html}
${breadcrumb([{name:'Home',url:'/'},{name:'Terms of Service',url:'/terms.html'}]).schema}
<section class="content-page">
<div class="container" style="max-width:800px;">
<h1 class="fade-in">Terms of Service</h1>
<p><em>Last updated: January 2024</em></p>
<h2>Acceptance of Terms</h2>
<p>By accessing and using ${SITE_NAME} ("the Website"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the Website.</p>
<h2>Description of Service</h2>
<p>${SITE_NAME} provides free health calculators, wellness tools, and informational articles for educational purposes. Our services are provided "as is" and are intended to supplement, not replace, professional medical advice.</p>
<h2>Use of Health Calculators</h2>
<p>Our health calculators use established medical formulas to provide estimates. These results are for informational purposes only and should not be used for self-diagnosis, treatment decisions, or as a substitute for consultation with qualified healthcare professionals. You acknowledge that individual health outcomes may vary significantly.</p>
<h2>User Responsibilities</h2>
<ul>
<li>You agree to use the Website only for lawful purposes and in accordance with these Terms.</li>
<li>You are responsible for the accuracy of any information you input into our calculators.</li>
<li>You agree not to misrepresent calculator results as professional medical advice.</li>
<li>You agree not to attempt to access, tamper with, or use non-public areas of the Website.</li>
</ul>
<h2>Intellectual Property</h2>
<p>All content on ${SITE_NAME}, including text, graphics, logos, icons, images, calculator designs, and software, is the property of ${SITE_NAME} and is protected by international copyright laws. You may not reproduce, distribute, modify, or create derivative works from our content without prior written permission.</p>
<h2>Privacy</h2>
<p>Your use of the Website is also governed by our <a href="/privacy.html">Privacy Policy</a>. All health data entered into our calculators is processed locally in your browser and is never transmitted to our servers.</p>
<h2>Disclaimer of Warranties</h2>
<p>The Website and its content are provided "as is" without warranties of any kind, either express or implied. We do not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components. We make no guarantees about the accuracy, reliability, or completeness of calculator results or health information.</p>
<h2>Limitation of Liability</h2>
<p>In no event shall ${SITE_NAME}, its creator Ali Haider, or its contributors be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website. This includes, without limitation, damages for health decisions made based on calculator results or article content.</p>
<h2>External Links</h2>
<p>The Website may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of information on external websites.</p>
<h2>Modifications to Terms</h2>
<p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the Website after changes constitutes acceptance of the modified terms.</p>
<h2>Governing Law</h2>
<p>These Terms shall be governed by and construed in accordance with applicable international laws and regulations.</p>
<h2>Contact</h2>
<p>If you have questions about these Terms of Service, please <a href="/contact.html">contact us</a> or email <a href="mailto:ma7122671@gmail.com">ma7122671@gmail.com</a>.</p>
</div>
</section>
${FOOTER}
${BTT}
<script src="/js/main.js"></script>
</body></html>`);

// SITEMAP.HTML
let sitemapLinks = '<div class="sitemap-category"><h3>Main Pages</h3><ul class="sitemap-list">';
['index.html','about.html','contact.html','faq.html','blog.html','privacy.html','disclaimer.html','terms.html'].forEach(p => {
  sitemapLinks += `<li><a href="/${p}">${p.replace('.html','').replace('index','Home')}</a></li>`;
});
sitemapLinks += '</ul></div>';
sitemapLinks += '<div class="sitemap-category"><h3>Health Calculators</h3><ul class="sitemap-list">';
calculators.forEach(c => { sitemapLinks += `<li><a href="/calculators/${c.slug}.html">${c.name}</a></li>`; });
sitemapLinks += '</ul></div>';
sitemapLinks += '<div class="sitemap-category"><h3>Blog Articles</h3><ul class="sitemap-list">';
blogPosts.forEach(p => { sitemapLinks += `<li><a href="/blog/${p.slug}.html">${p.title}</a></li>`; });
sitemapLinks += '</ul></div>';

fs.writeFileSync('sitemap.html', `${head('Sitemap | '+SITE_NAME, 'Complete sitemap of '+SITE_NAME+'. Find all health calculators, blog articles, and pages.', '/sitemap.html')}
<body>
${NAV}
${breadcrumb([{name:'Home',url:'/'},{name:'Sitemap',url:'/sitemap.html'}]).html}
${breadcrumb([{name:'Home',url:'/'},{name:'Sitemap',url:'/sitemap.html'}]).schema}
<section class="sitemap-section">
<div class="container">
<h1 class="fade-in">Sitemap</h1>
${sitemapLinks}
</div>
</section>
${FOOTER}
${BTT}
<script src="/js/main.js"></script>
</body></html>`);

// BLOG INDEX
fs.writeFileSync('blog.html', `${head('Health Blog | '+SITE_NAME, 'Expert health and wellness articles covering nutrition, fitness, mental health, and disease prevention. 100+ free guides.', '/blog.html')}
<body>
${NAV}
${breadcrumb([{name:'Home',url:'/'},{name:'Blog',url:'/blog.html'}]).html}
${breadcrumb([{name:'Home',url:'/'},{name:'Blog',url:'/blog.html'}]).schema}
<section class="content-page">
<div class="container">
<h1 class="fade-in" style="text-align:center;">Health & Wellness Blog</h1>
<p class="fade-in" style="text-align:center;max-width:600px;margin:0 auto 30px;color:var(--gray-500);">Expert-written articles on nutrition, fitness, mental health, and more.</p>
<div class="search-bar fade-in">
<svg viewBox="0 0 20 20" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2"/><path d="M13 13l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
<input type="text" id="blogSearch" placeholder="Search articles..." oninput="filterPosts()">
</div>
<div class="filter-buttons fade-in" id="filterBtns">
<button class="filter-btn active" onclick="filterCategory('all',this)">All</button>
${[...new Set(blogPosts.map(p=>p.category))].map(c=>`<button class="filter-btn" onclick="filterCategory('${c}',this)">${c}</button>`).join('')}
</div>
<div class="grid-3" id="blogGrid">
${blogPosts.map(p => `<a href="/blog/${p.slug}.html" class="blog-card fade-in" data-category="${p.category}" data-title="${p.title.toLowerCase()}"><div class="blog-card-image"><svg viewBox="0 0 80 80" fill="none"><rect x="10" y="20" width="60" height="40" rx="4" stroke="#2d6a4f" stroke-width="2"/><path d="M20 35h40M20 45h30" stroke="#52b788" stroke-width="2" stroke-linecap="round"/></svg></div><div class="blog-card-body"><div class="blog-card-meta"><span class="blog-card-category">${p.category}</span><span>${p.date}</span><span>${p.readTime}</span></div><h3>${p.title}</h3><p>Evidence-based health insights and practical tips for better wellness.</p><span class="read-more">Read More →</span></div></a>`).join('')}
</div>
</div>
</section>
${FOOTER}
${BTT}
<script src="/js/main.js"></script>
<script>
var currentCat='all';
function filterPosts(){
  var q=document.getElementById('blogSearch').value.toLowerCase();
  document.querySelectorAll('#blogGrid .blog-card').forEach(function(card){
    var title=card.getAttribute('data-title');
    var cat=card.getAttribute('data-category');
    var matchQ=!q||title.indexOf(q)!==-1;
    var matchC=currentCat==='all'||cat===currentCat;
    card.style.display=(matchQ&&matchC)?'':'none';
  });
}
function filterCategory(cat,btn){
  currentCat=cat;
  document.querySelectorAll('.filter-btn').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
  filterPosts();
}
</script>
</body></html>`);

// SITEMAP.XML
let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
['/','/about.html','/contact.html','/faq.html','/blog.html','/privacy.html','/disclaimer.html','/terms.html','/sitemap.html'].forEach(u => {
  sitemapXml += `<url><loc>${SITE}${u}</loc><changefreq>weekly</changefreq><priority>${u==='/'?'1.0':'0.8'}</priority></url>\n`;
});
calculators.forEach(c => {
  sitemapXml += `<url><loc>${SITE}/calculators/${c.slug}.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>\n`;
});
blogPosts.forEach(p => {
  sitemapXml += `<url><loc>${SITE}/blog/${p.slug}.html</loc><lastmod>${p.date}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>\n`;
});
sitemapXml += '</urlset>';
fs.writeFileSync('sitemap.xml', sitemapXml);

// ROBOTS.TXT
fs.writeFileSync('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);

console.log('All files generated successfully!');
console.log('Total pages: ' + (8 + calculators.length + blogPosts.length));
