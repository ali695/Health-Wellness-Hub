const batch1 = require('./svgs/batch1.js');
const batch2 = require('./svgs/batch2.js');
const batch3 = require('./svgs/batch3.js');
const batch4 = require('./svgs/batch4.js');
const batch5 = require('./svgs/batch5.js');

const allSvgs = { ...batch1, ...batch2, ...batch3, ...batch4, ...batch5 };

const defaultSvg = `<svg viewBox="0 0 600 340" class="calc-hero-svg" role="img" aria-labelledby="default-title" fill="none">
<title id="default-title">Health Calculator</title>
<defs>
<linearGradient id="defBg" x1="0" y1="0" x2="600" y2="340"><stop offset="0%" stop-color="#d8f3dc"/><stop offset="100%" stop-color="#f0faf2"/></linearGradient>
<linearGradient id="defAccent" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#52b788"/><stop offset="100%" stop-color="#2d6a4f"/></linearGradient>
</defs>
<rect width="600" height="340" rx="24" fill="url(#defBg)"/>
<circle cx="200" cy="170" r="80" fill="#b7e4c7" opacity="0.5"/>
<circle cx="200" cy="170" r="55" fill="#fff" stroke="#2d6a4f" stroke-width="2"/>
<path d="M185 155v30l25-15z" fill="url(#defAccent)"/>
<rect x="340" y="100" width="200" height="140" rx="16" fill="#fff" stroke="#d8f3dc" stroke-width="2"/>
<text x="440" y="145" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="16" fill="#2d6a4f" font-weight="700">Your Result</text>
<rect x="370" y="160" width="140" height="14" rx="7" fill="#d8f3dc"/>
<rect x="370" y="160" width="95" height="14" rx="7" fill="#52b788"/>
<rect x="370" y="185" width="140" height="14" rx="7" fill="#d8f3dc"/>
<rect x="370" y="185" width="70" height="14" rx="7" fill="#f4a261"/>
<text x="440" y="225" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="13" fill="#52b788" font-weight="600">Calculate Now</text>
<circle cx="100" cy="60" r="6" fill="#f4a261" opacity="0.5"/>
<circle cx="500" cy="50" r="8" fill="#52b788" opacity="0.3"/>
<circle cx="520" cy="290" r="5" fill="#f4a261" opacity="0.4"/>
</svg>`;

function getCalcHeroSvg(slug) {
  return allSvgs[slug] || defaultSvg;
}

module.exports = { getCalcHeroSvg };
