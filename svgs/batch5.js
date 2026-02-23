module.exports = {
  'medication-dosage-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="med-dosage-title">
    <title id="med-dosage-title">Medication Dosage Calculator</title>
    <defs>
      <linearGradient id="mdPillGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#52b788"/><stop offset="100%" stop-color="#2d6a4f"/></linearGradient>
      <linearGradient id="mdBgGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d8f3dc"/><stop offset="100%" stop-color="#f8f9fa"/></linearGradient>
      <radialGradient id="mdBottleGrad" cx="0.5" cy="0.3" r="0.7"><stop offset="0%" stop-color="#90e0ef"/><stop offset="100%" stop-color="#2d6a4f"/></radialGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#mdBgGrad)"/>
    <rect x="80" y="60" width="120" height="180" rx="12" fill="url(#mdBottleGrad)" opacity="0.9"/>
    <rect x="90" y="50" width="100" height="30" rx="8" fill="#2d6a4f"/>
    <rect x="100" y="130" width="80" height="40" rx="6" fill="#ffffff" opacity="0.85"/>
    <text x="140" y="155" text-anchor="middle" font-size="14" font-weight="bold" fill="#2d6a4f">500mg</text>
    <text x="140" y="260" text-anchor="middle" font-size="11" fill="#1b1f1e">Rx Bottle</text>
    <rect x="260" y="120" width="80" height="36" rx="18" fill="url(#mdPillGrad)"/>
    <line x1="300" y1="120" x2="300" y2="156" stroke="#ffffff" stroke-width="1.5" opacity="0.5"/>
    <rect x="260" y="175" width="80" height="36" rx="18" fill="#f4a261"/>
    <line x1="300" y1="175" x2="300" y2="211" stroke="#ffffff" stroke-width="1.5" opacity="0.5"/>
    <circle cx="370" cy="138" r="16" fill="#c77dff"/>
    <circle cx="370" cy="138" r="8" fill="#ffffff" opacity="0.3"/>
    <rect x="410" y="70" width="150" height="200" rx="14" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="485" y="100" text-anchor="middle" font-size="13" font-weight="bold" fill="#2d6a4f">Dosage Schedule</text>
    <rect x="425" y="115" width="120" height="28" rx="6" fill="#d8f3dc"/>
    <text x="485" y="134" text-anchor="middle" font-size="11" fill="#2d6a4f">8:00 AM — 250mg</text>
    <rect x="425" y="150" width="120" height="28" rx="6" fill="#d8f3dc"/>
    <text x="485" y="169" text-anchor="middle" font-size="11" fill="#2d6a4f">2:00 PM — 250mg</text>
    <rect x="425" y="185" width="120" height="28" rx="6" fill="#d8f3dc"/>
    <text x="485" y="204" text-anchor="middle" font-size="11" fill="#2d6a4f">8:00 PM — 250mg</text>
    <rect x="430" y="225" width="110" height="30" rx="8" fill="#52b788"/>
    <text x="485" y="245" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">750mg / day</text>
    <circle cx="50" cy="50" r="6" fill="#52b788" opacity="0.3"/>
    <circle cx="560" cy="300" r="8" fill="#f4a261" opacity="0.3"/>
    <circle cx="240" cy="40" r="5" fill="#c77dff" opacity="0.25"/>
    <path d="M30 310 Q40 290 50 310 Q60 290 70 310" stroke="#90e0ef" stroke-width="2" fill="none" opacity="0.4"/>
  </svg>`,

  'bac-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="bac-title">
    <title id="bac-title">Blood Alcohol Content Calculator</title>
    <defs>
      <linearGradient id="bacBgGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffd166" stop-opacity="0.3"/><stop offset="100%" stop-color="#f8f9fa"/></linearGradient>
      <linearGradient id="bacLiquidGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f4a261"/><stop offset="100%" stop-color="#e76f51"/></linearGradient>
      <linearGradient id="bacGaugeGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#52b788"/><stop offset="40%" stop-color="#ffd166"/><stop offset="70%" stop-color="#f4a261"/><stop offset="100%" stop-color="#e76f51"/></linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#bacBgGrad)"/>
    <rect x="70" y="100" width="60" height="140" rx="4" fill="#f8f9fa" stroke="#1b1f1e" stroke-width="2"/>
    <rect x="74" y="160" width="52" height="76" rx="2" fill="url(#bacLiquidGrad)"/>
    <ellipse cx="100" cy="160" rx="26" ry="4" fill="#f4a261" opacity="0.6"/>
    <rect x="85" y="85" width="30" height="20" rx="3" fill="#1b1f1e" opacity="0.7"/>
    <path d="M160 130 Q175 100 190 130 L185 240 Q175 250 165 240 Z" fill="#f8f9fa" stroke="#1b1f1e" stroke-width="2"/>
    <path d="M163 180 Q175 170 187 180 L185 240 Q175 250 165 240 Z" fill="#ffd166" opacity="0.7"/>
    <ellipse cx="175" cy="110" rx="20" ry="8" fill="#f8f9fa" stroke="#1b1f1e" stroke-width="1"/>
    <path d="M250 280 A130 130 0 0 1 510 280" fill="none" stroke="#d8f3dc" stroke-width="20" stroke-linecap="round"/>
    <path d="M250 280 A130 130 0 0 1 510 280" fill="none" stroke="url(#bacGaugeGrad)" stroke-width="16" stroke-linecap="round"/>
    <line x1="380" y1="280" x2="340" y2="200" stroke="#1b1f1e" stroke-width="3" stroke-linecap="round"/>
    <circle cx="380" cy="280" r="8" fill="#1b1f1e"/>
    <text x="380" y="260" text-anchor="middle" font-size="28" font-weight="bold" fill="#2d6a4f">0.04%</text>
    <text x="380" y="310" text-anchor="middle" font-size="12" fill="#1b1f1e">BAC Level</text>
    <rect x="280" y="320" width="80" height="22" rx="11" fill="#52b788"/>
    <text x="320" y="335" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">Under Limit</text>
    <rect x="410" y="320" width="80" height="22" rx="11" fill="#e76f51" opacity="0.5"/>
    <text x="450" y="335" text-anchor="middle" font-size="10" fill="#fff">Legal: 0.08%</text>
    <circle cx="540" cy="60" r="5" fill="#f4a261" opacity="0.3"/>
    <circle cx="50" cy="300" r="7" fill="#ffd166" opacity="0.3"/>
    <circle cx="300" cy="40" r="4" fill="#e76f51" opacity="0.2"/>
  </svg>`,

  'ovulation-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ovulation-title">
    <title id="ovulation-title">Ovulation Calculator</title>
    <defs>
      <linearGradient id="ovBgGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f8f9fa"/><stop offset="100%" stop-color="#d8f3dc"/></linearGradient>
      <radialGradient id="ovEggGrad" cx="0.4" cy="0.35" r="0.6"><stop offset="0%" stop-color="#ffd166"/><stop offset="100%" stop-color="#f4a261"/></radialGradient>
      <linearGradient id="ovFertileGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#52b788"/><stop offset="100%" stop-color="#2d6a4f"/></linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#ovBgGrad)"/>
    <rect x="30" y="40" width="250" height="260" rx="16" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="155" y="72" text-anchor="middle" font-size="14" font-weight="bold" fill="#2d6a4f">March 2025</text>
    <g font-size="10" fill="#1b1f1e" text-anchor="middle">
      <text x="55" y="100">S</text><text x="85" y="100">M</text><text x="115" y="100">T</text><text x="145" y="100">W</text><text x="175" y="100">T</text><text x="205" y="100">F</text><text x="235" y="100">S</text>
    </g>
    <g font-size="11" fill="#1b1f1e" text-anchor="middle">
      <text x="175" y="125">1</text><text x="205" y="125">2</text><text x="235" y="125">3</text>
      <text x="55" y="150">4</text><text x="85" y="150">5</text><text x="115" y="150">6</text><text x="145" y="150">7</text><text x="175" y="150">8</text><text x="205" y="150">9</text><text x="235" y="150">10</text>
      <text x="55" y="175">11</text><text x="85" y="175">12</text><text x="115" y="175">13</text><text x="145" y="175">14</text><text x="175" y="175">15</text><text x="205" y="175">16</text><text x="235" y="175">17</text>
    </g>
    <rect x="128" y="160" width="34" height="20" rx="4" fill="#52b788" opacity="0.25"/>
    <rect x="158" y="160" width="34" height="20" rx="4" fill="#52b788" opacity="0.4"/>
    <circle cx="175" cy="170" r="12" fill="url(#ovFertileGrad)"/>
    <text x="175" y="174" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">15</text>
    <rect x="188" y="160" width="34" height="20" rx="4" fill="#52b788" opacity="0.25"/>
    <text x="155" y="215" text-anchor="middle" font-size="10" fill="#52b788" font-weight="bold">Fertile Window</text>
    <circle cx="420" cy="130" r="60" fill="url(#ovEggGrad)" opacity="0.9"/>
    <circle cx="420" cy="130" r="45" fill="#ffd166" opacity="0.4"/>
    <circle cx="408" cy="118" r="10" fill="#ffffff" opacity="0.35"/>
    <text x="420" y="138" text-anchor="middle" font-size="14" font-weight="bold" fill="#2d6a4f">Day 14</text>
    <text x="420" y="210" text-anchor="middle" font-size="13" fill="#1b1f1e">Ovulation Day</text>
    <rect x="350" y="230" width="140" height="36" rx="10" fill="#52b788"/>
    <text x="420" y="253" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Peak Fertility</text>
    <path d="M370 280 C380 260 390 295 400 275 C410 260 420 290 430 275 C440 260 450 290 460 275" stroke="#e76f51" stroke-width="2" fill="none" opacity="0.5"/>
    <circle cx="550" cy="50" r="6" fill="#ffd166" opacity="0.3"/>
    <circle cx="530" cy="290" r="4" fill="#c77dff" opacity="0.25"/>
    <path d="M490 140 L500 125 L510 140" stroke="#52b788" stroke-width="2" fill="none" opacity="0.4"/>
  </svg>`,

  'menstrual-cycle-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="menstrual-title">
    <title id="menstrual-title">Menstrual Cycle Calculator</title>
    <defs>
      <linearGradient id="mcBgGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f8f9fa"/><stop offset="100%" stop-color="#d8f3dc" stop-opacity="0.5"/></linearGradient>
      <linearGradient id="mcCycleGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e76f51"/><stop offset="35%" stop-color="#f4a261"/><stop offset="65%" stop-color="#52b788"/><stop offset="100%" stop-color="#c77dff"/></linearGradient>
      <radialGradient id="mcCenterGrad" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#f8f9fa"/></radialGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#mcBgGrad)"/>
    <circle cx="250" cy="170" r="120" fill="none" stroke="url(#mcCycleGrad)" stroke-width="18" stroke-linecap="round"/>
    <circle cx="250" cy="170" r="80" fill="url(#mcCenterGrad)"/>
    <text x="250" y="162" text-anchor="middle" font-size="22" font-weight="bold" fill="#2d6a4f">28</text>
    <text x="250" y="182" text-anchor="middle" font-size="12" fill="#1b1f1e">Day Cycle</text>
    <circle cx="250" cy="50" r="10" fill="#e76f51"/>
    <text x="250" y="38" text-anchor="middle" font-size="9" fill="#e76f51">Day 1</text>
    <circle cx="370" cy="170" r="10" fill="#52b788"/>
    <text x="390" y="165" font-size="9" fill="#52b788">Day 14</text>
    <circle cx="250" cy="290" r="10" fill="#c77dff"/>
    <text x="250" y="315" text-anchor="middle" font-size="9" fill="#c77dff">Day 21</text>
    <circle cx="130" cy="170" r="10" fill="#f4a261"/>
    <text x="105" y="165" text-anchor="end" font-size="9" fill="#f4a261">Day 7</text>
    <rect x="420" y="50" width="155" height="240" rx="14" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="498" y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#2d6a4f">Cycle Phases</text>
    <rect x="435" y="95" width="125" height="40" rx="8" fill="#e76f51" opacity="0.15"/>
    <circle cx="450" cy="115" r="6" fill="#e76f51"/>
    <text x="465" y="110" font-size="10" font-weight="bold" fill="#e76f51">Menstruation</text>
    <text x="465" y="125" font-size="9" fill="#1b1f1e">Days 1-5</text>
    <rect x="435" y="142" width="125" height="40" rx="8" fill="#f4a261" opacity="0.15"/>
    <circle cx="450" cy="162" r="6" fill="#f4a261"/>
    <text x="465" y="157" font-size="10" font-weight="bold" fill="#f4a261">Follicular</text>
    <text x="465" y="172" font-size="9" fill="#1b1f1e">Days 6-13</text>
    <rect x="435" y="189" width="125" height="40" rx="8" fill="#52b788" opacity="0.15"/>
    <circle cx="450" cy="209" r="6" fill="#52b788"/>
    <text x="465" y="204" font-size="10" font-weight="bold" fill="#52b788">Ovulation</text>
    <text x="465" y="219" font-size="9" fill="#1b1f1e">Day 14</text>
    <rect x="435" y="236" width="125" height="40" rx="8" fill="#c77dff" opacity="0.15"/>
    <circle cx="450" cy="256" r="6" fill="#c77dff"/>
    <text x="465" y="251" font-size="10" font-weight="bold" fill="#c77dff">Luteal</text>
    <text x="465" y="266" font-size="9" fill="#1b1f1e">Days 15-28</text>
    <circle cx="50" cy="40" r="5" fill="#c77dff" opacity="0.25"/>
    <circle cx="580" cy="310" r="6" fill="#e76f51" opacity="0.2"/>
  </svg>`,

  'fertility-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fertility-title">
    <title id="fertility-title">Fertility Calculator</title>
    <defs>
      <linearGradient id="fertBgGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d8f3dc" stop-opacity="0.5"/><stop offset="100%" stop-color="#f8f9fa"/></linearGradient>
      <radialGradient id="fertEggGrad" cx="0.4" cy="0.35" r="0.6"><stop offset="0%" stop-color="#ffd166"/><stop offset="100%" stop-color="#f4a261"/></radialGradient>
      <linearGradient id="fertHeartGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e76f51"/><stop offset="100%" stop-color="#c77dff"/></linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#fertBgGrad)"/>
    <circle cx="200" cy="150" r="75" fill="url(#fertEggGrad)" opacity="0.85"/>
    <circle cx="200" cy="150" r="55" fill="#ffd166" opacity="0.4"/>
    <circle cx="185" cy="135" r="12" fill="#ffffff" opacity="0.3"/>
    <circle cx="200" cy="150" r="20" fill="#f4a261" opacity="0.3"/>
    <circle cx="120" cy="165" r="8" fill="#52b788" opacity="0.5"/>
    <circle cx="115" cy="148" r="6" fill="#52b788" opacity="0.4"/>
    <circle cx="125" cy="180" r="5" fill="#52b788" opacity="0.3"/>
    <circle cx="135" cy="135" r="4" fill="#52b788" opacity="0.35"/>
    <path d="M300 110 C300 85 330 85 330 110 C330 85 360 85 360 110 C360 140 330 160 330 175 C330 160 300 140 300 110 Z" fill="url(#fertHeartGrad)" opacity="0.8"/>
    <rect x="380" y="50" width="180" height="240" rx="14" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="470" y="80" text-anchor="middle" font-size="14" font-weight="bold" fill="#2d6a4f">Fertility Window</text>
    <rect x="395" y="95" width="150" height="50" rx="10" fill="#52b788" opacity="0.12"/>
    <text x="470" y="117" text-anchor="middle" font-size="11" font-weight="bold" fill="#52b788">Most Fertile</text>
    <text x="470" y="135" text-anchor="middle" font-size="13" font-weight="bold" fill="#2d6a4f">Mar 12 – 16</text>
    <rect x="395" y="155" width="150" height="40" rx="8" fill="#ffd166" opacity="0.15"/>
    <text x="470" y="175" text-anchor="middle" font-size="11" fill="#f4a261">Ovulation: Mar 14</text>
    <text x="470" y="190" text-anchor="middle" font-size="9" fill="#1b1f1e">Peak Day</text>
    <rect x="395" y="205" width="150" height="70" rx="8" fill="#d8f3dc" opacity="0.5"/>
    <text x="470" y="225" text-anchor="middle" font-size="11" font-weight="bold" fill="#2d6a4f">Cycle Length</text>
    <text x="470" y="248" text-anchor="middle" font-size="22" font-weight="bold" fill="#2d6a4f">28</text>
    <text x="470" y="265" text-anchor="middle" font-size="10" fill="#1b1f1e">days</text>
    <circle cx="60" cy="60" r="12" fill="#c77dff" opacity="0.15"/>
    <circle cx="60" cy="60" r="6" fill="#c77dff" opacity="0.25"/>
    <path d="M100 290 Q120 270 140 290 Q160 270 180 290" stroke="#52b788" stroke-width="2" fill="none" opacity="0.3"/>
    <circle cx="550" cy="310" r="5" fill="#ffd166" opacity="0.3"/>
    <circle cx="340" cy="30" r="4" fill="#e76f51" opacity="0.2"/>
  </svg>`,

  'baby-weight-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="baby-weight-title">
    <title id="baby-weight-title">Baby Weight Calculator</title>
    <defs>
      <linearGradient id="bwBgGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#90e0ef" stop-opacity="0.2"/><stop offset="100%" stop-color="#f8f9fa"/></linearGradient>
      <radialGradient id="bwBabyGrad" cx="0.5" cy="0.4" r="0.5"><stop offset="0%" stop-color="#ffd166"/><stop offset="100%" stop-color="#f4a261"/></radialGradient>
      <linearGradient id="bwChartGrad" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#52b788"/><stop offset="100%" stop-color="#2d6a4f"/></linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#bwBgGrad)"/>
    <ellipse cx="150" cy="220" rx="90" ry="50" fill="#90e0ef" opacity="0.15"/>
    <circle cx="150" cy="130" r="40" fill="url(#bwBabyGrad)"/>
    <circle cx="138" cy="122" r="4" fill="#1b1f1e" opacity="0.6"/>
    <circle cx="162" cy="122" r="4" fill="#1b1f1e" opacity="0.6"/>
    <path d="M143 138 Q150 145 157 138" stroke="#e76f51" stroke-width="2" fill="none"/>
    <ellipse cx="150" cy="200" rx="35" ry="45" fill="#ffd166" opacity="0.6"/>
    <rect x="110" y="180" width="25" height="8" rx="4" fill="#ffd166" opacity="0.5" transform="rotate(-30 122 184)"/>
    <rect x="165" y="180" width="25" height="8" rx="4" fill="#ffd166" opacity="0.5" transform="rotate(30 178 184)"/>
    <rect x="100" y="260" width="100" height="35" rx="8" fill="#52b788"/>
    <text x="150" y="282" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">7.5 lbs</text>
    <rect x="290" y="50" width="270" height="230" rx="14" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="425" y="78" text-anchor="middle" font-size="13" font-weight="bold" fill="#2d6a4f">Growth Chart</text>
    <line x1="320" y1="90" x2="320" y2="250" stroke="#d8f3dc" stroke-width="1"/>
    <line x1="320" y1="250" x2="530" y2="250" stroke="#d8f3dc" stroke-width="1"/>
    <text x="310" y="100" text-anchor="end" font-size="8" fill="#1b1f1e">12lb</text>
    <text x="310" y="140" text-anchor="end" font-size="8" fill="#1b1f1e">9lb</text>
    <text x="310" y="180" text-anchor="end" font-size="8" fill="#1b1f1e">6lb</text>
    <text x="310" y="220" text-anchor="end" font-size="8" fill="#1b1f1e">3lb</text>
    <path d="M330 230 Q370 210 410 180 Q450 150 490 110 Q510 95 520 90" stroke="url(#bwChartGrad)" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M330 240 Q370 225 410 200 Q450 175 490 145 Q510 130 520 125" stroke="#52b788" stroke-width="1.5" fill="none" stroke-dasharray="4 3" opacity="0.4"/>
    <circle cx="490" cy="110" r="5" fill="#2d6a4f"/>
    <text x="490" y="103" text-anchor="middle" font-size="8" fill="#2d6a4f">Now</text>
    <text x="345" y="268" font-size="8" fill="#1b1f1e">Birth</text>
    <text x="420" y="268" font-size="8" fill="#1b1f1e">3mo</text>
    <text x="490" y="268" font-size="8" fill="#1b1f1e">6mo</text>
    <rect x="400" y="275" width="80" height="20" rx="6" fill="#52b788" opacity="0.15"/>
    <text x="440" y="289" text-anchor="middle" font-size="9" fill="#2d6a4f">50th Percentile</text>
    <circle cx="50" cy="50" r="8" fill="#ffd166" opacity="0.2"/>
    <circle cx="570" cy="310" r="6" fill="#90e0ef" opacity="0.3"/>
  </svg>`,

  'child-bmi-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="child-bmi-title">
    <title id="child-bmi-title">Child BMI Calculator</title>
    <defs>
      <linearGradient id="cbBgGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d8f3dc"/><stop offset="100%" stop-color="#f8f9fa"/></linearGradient>
      <linearGradient id="cbGaugeGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#90e0ef"/><stop offset="30%" stop-color="#52b788"/><stop offset="65%" stop-color="#ffd166"/><stop offset="100%" stop-color="#e76f51"/></linearGradient>
      <linearGradient id="cbRulerGrad" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#2d6a4f"/><stop offset="100%" stop-color="#52b788"/></linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#cbBgGrad)"/>
    <rect x="55" y="60" width="16" height="230" rx="4" fill="url(#cbRulerGrad)" opacity="0.7"/>
    <line x1="55" y1="80" x2="71" y2="80" stroke="#fff" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="120" x2="71" y2="120" stroke="#fff" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="160" x2="71" y2="160" stroke="#fff" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="200" x2="71" y2="200" stroke="#fff" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="240" x2="71" y2="240" stroke="#fff" stroke-width="1" opacity="0.5"/>
    <text x="50" y="77" text-anchor="end" font-size="8" fill="#2d6a4f">150cm</text>
    <text x="50" y="157" text-anchor="end" font-size="8" fill="#2d6a4f">120cm</text>
    <text x="50" y="237" text-anchor="end" font-size="8" fill="#2d6a4f">90cm</text>
    <circle cx="130" cy="115" r="25" fill="#ffd166"/>
    <circle cx="122" cy="110" r="3" fill="#1b1f1e" opacity="0.6"/>
    <circle cx="138" cy="110" r="3" fill="#1b1f1e" opacity="0.6"/>
    <path d="M124 122 Q130 127 136 122" stroke="#e76f51" stroke-width="1.5" fill="none"/>
    <rect x="118" y="145" width="24" height="55" rx="10" fill="#52b788"/>
    <rect x="98" y="150" width="22" height="8" rx="4" fill="#52b788" transform="rotate(-20 109 154)"/>
    <rect x="140" y="150" width="22" height="8" rx="4" fill="#52b788" transform="rotate(20 151 154)"/>
    <rect x="113" y="200" width="12" height="40" rx="5" fill="#2d6a4f"/>
    <rect x="135" y="200" width="12" height="40" rx="5" fill="#2d6a4f"/>
    <line x1="73" y1="155" x2="90" y2="155" stroke="#e76f51" stroke-width="2" stroke-dasharray="3 2"/>
    <path d="M240 250 A120 120 0 0 1 480 250" fill="none" stroke="#d8f3dc" stroke-width="18" stroke-linecap="round"/>
    <path d="M240 250 A120 120 0 0 1 480 250" fill="none" stroke="url(#cbGaugeGrad)" stroke-width="14" stroke-linecap="round"/>
    <line x1="360" y1="250" x2="330" y2="175" stroke="#1b1f1e" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="360" cy="250" r="6" fill="#1b1f1e"/>
    <text x="360" y="230" text-anchor="middle" font-size="24" font-weight="bold" fill="#2d6a4f">17.5</text>
    <text x="360" y="280" text-anchor="middle" font-size="11" fill="#1b1f1e">BMI Percentile</text>
    <rect x="310" y="290" width="100" height="24" rx="12" fill="#52b788"/>
    <text x="360" y="306" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Healthy</text>
    <rect x="430" y="80" width="140" height="155" rx="12" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="500" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#2d6a4f">Percentile Ranges</text>
    <circle cx="448" cy="125" r="5" fill="#90e0ef"/><text x="462" y="129" font-size="9" fill="#1b1f1e">Underweight &lt;5th</text>
    <circle cx="448" cy="150" r="5" fill="#52b788"/><text x="462" y="154" font-size="9" fill="#1b1f1e">Healthy 5-85th</text>
    <circle cx="448" cy="175" r="5" fill="#ffd166"/><text x="462" y="179" font-size="9" fill="#1b1f1e">Overweight 85-95th</text>
    <circle cx="448" cy="200" r="5" fill="#e76f51"/><text x="462" y="204" font-size="9" fill="#1b1f1e">Obese &gt;95th</text>
    <circle cx="550" cy="40" r="5" fill="#ffd166" opacity="0.3"/>
    <circle cx="30" cy="310" r="7" fill="#52b788" opacity="0.2"/>
  </svg>`,

  'anxiety-score-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="anxiety-title">
    <title id="anxiety-title">Anxiety Score Calculator</title>
    <defs>
      <linearGradient id="anxBgGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f8f9fa"/><stop offset="100%" stop-color="#d8f3dc" stop-opacity="0.4"/></linearGradient>
      <linearGradient id="anxBrainGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c77dff"/><stop offset="100%" stop-color="#90e0ef"/></linearGradient>
      <linearGradient id="anxMeterGrad" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#52b788"/><stop offset="40%" stop-color="#ffd166"/><stop offset="70%" stop-color="#f4a261"/><stop offset="100%" stop-color="#e76f51"/></linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#anxBgGrad)"/>
    <path d="M120 200 C120 130 160 80 200 80 C220 80 240 95 250 110 C255 100 270 80 290 80 C330 80 370 130 370 200 C370 230 350 255 320 270 C290 285 260 280 250 280 C240 280 200 285 170 270 C140 255 120 230 120 200 Z" fill="url(#anxBrainGrad)" opacity="0.7"/>
    <path d="M190 150 Q210 130 230 150 Q250 130 270 150" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.4"/>
    <path d="M170 190 Q200 170 230 190 Q260 170 290 190" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.3"/>
    <path d="M200 230 Q220 215 240 230 Q260 215 280 230" stroke="#ffffff" stroke-width="1.5" fill="none" opacity="0.25"/>
    <path d="M145 155 L155 145 M155 155 L145 145" stroke="#ffd166" stroke-width="2.5" opacity="0.7"/>
    <path d="M320 140 L330 130 M330 140 L320 130" stroke="#ffd166" stroke-width="2.5" opacity="0.7"/>
    <path d="M170 110 L175 100 M175 110 L170 100" stroke="#f4a261" stroke-width="2" opacity="0.5"/>
    <rect x="420" y="55" width="40" height="220" rx="10" fill="#f8f9fa" stroke="#d8f3dc" stroke-width="2"/>
    <rect x="425" y="165" width="30" height="105" rx="6" fill="url(#anxMeterGrad)"/>
    <text x="440" y="50" text-anchor="middle" font-size="9" fill="#e76f51">Severe</text>
    <text x="440" y="110" text-anchor="middle" font-size="9" fill="#f4a261">Moderate</text>
    <text x="440" y="195" text-anchor="middle" font-size="9" fill="#ffd166">Mild</text>
    <text x="440" y="265" text-anchor="middle" font-size="9" fill="#52b788">Minimal</text>
    <line x1="415" y1="165" x2="465" y2="165" stroke="#f4a261" stroke-width="2"/>
    <rect x="475" y="140" width="105" height="55" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="527" y="162" text-anchor="middle" font-size="22" font-weight="bold" fill="#f4a261">7</text>
    <text x="527" y="180" text-anchor="middle" font-size="10" fill="#1b1f1e">GAD-7 Score</text>
    <rect x="485" y="205" width="85" height="24" rx="12" fill="#ffd166" opacity="0.3"/>
    <text x="527" y="221" text-anchor="middle" font-size="10" font-weight="bold" fill="#f4a261">Mild Anxiety</text>
    <rect x="475" y="245" width="105" height="60" rx="8" fill="#d8f3dc" opacity="0.5"/>
    <text x="527" y="265" text-anchor="middle" font-size="9" fill="#2d6a4f">Breathing</text>
    <text x="527" y="280" text-anchor="middle" font-size="9" fill="#2d6a4f">Meditation</text>
    <text x="527" y="295" text-anchor="middle" font-size="9" fill="#2d6a4f">Exercise</text>
    <circle cx="50" cy="50" r="6" fill="#c77dff" opacity="0.2"/>
    <circle cx="560" cy="30" r="5" fill="#90e0ef" opacity="0.3"/>
  </svg>`,

  'depression-screening-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="depression-title">
    <title id="depression-title">Depression Screening Calculator</title>
    <defs>
      <linearGradient id="depBgGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c77dff" stop-opacity="0.1"/><stop offset="100%" stop-color="#f8f9fa"/></linearGradient>
      <linearGradient id="depSunGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ffd166"/><stop offset="100%" stop-color="#f4a261"/></linearGradient>
      <linearGradient id="depBarGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#52b788"/><stop offset="40%" stop-color="#ffd166"/><stop offset="70%" stop-color="#f4a261"/><stop offset="100%" stop-color="#e76f51"/></linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#depBgGrad)"/>
    <circle cx="150" cy="100" r="45" fill="url(#depSunGrad)" opacity="0.3"/>
    <circle cx="150" cy="100" r="35" fill="url(#depSunGrad)" opacity="0.5"/>
    <line x1="150" y1="45" x2="150" y2="30" stroke="#ffd166" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
    <line x1="185" y1="65" x2="196" y2="54" stroke="#ffd166" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
    <line x1="200" y1="100" x2="215" y2="100" stroke="#ffd166" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
    <line x1="115" y1="65" x2="104" y2="54" stroke="#ffd166" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
    <line x1="100" y1="100" x2="85" y2="100" stroke="#ffd166" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
    <circle cx="150" cy="230" r="55" fill="#c77dff" opacity="0.12"/>
    <circle cx="150" cy="210" r="30" fill="#c77dff" opacity="0.2"/>
    <circle cx="139" cy="205" r="3.5" fill="#1b1f1e" opacity="0.5"/>
    <circle cx="161" cy="205" r="3.5" fill="#1b1f1e" opacity="0.5"/>
    <path d="M138 222 Q150 215 162 222" stroke="#1b1f1e" stroke-width="2" fill="none" opacity="0.4"/>
    <rect x="50" y="270" width="200" height="30" rx="8" fill="#d8f3dc"/>
    <text x="150" y="290" text-anchor="middle" font-size="11" fill="#2d6a4f">PHQ-9 Assessment</text>
    <rect x="280" y="40" width="280" height="260" rx="14" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="420" y="70" text-anchor="middle" font-size="14" font-weight="bold" fill="#2d6a4f">Depression Score</text>
    <rect x="310" y="85" width="220" height="15" rx="7" fill="#f8f9fa" stroke="#d8f3dc" stroke-width="1"/>
    <rect x="310" y="85" width="80" height="15" rx="7" fill="url(#depBarGrad)"/>
    <circle cx="390" cy="92" r="8" fill="#ffffff" stroke="#ffd166" stroke-width="2"/>
    <text x="310" y="120" font-size="9" fill="#52b788">0 - None</text>
    <text x="395" y="120" font-size="9" fill="#ffd166">5-9 Mild</text>
    <text x="475" y="120" font-size="9" fill="#e76f51">20+ Severe</text>
    <text x="420" y="155" text-anchor="middle" font-size="30" font-weight="bold" fill="#ffd166">6</text>
    <text x="420" y="175" text-anchor="middle" font-size="12" fill="#1b1f1e">PHQ-9 Score</text>
    <rect x="370" y="185" width="100" height="24" rx="12" fill="#ffd166" opacity="0.2"/>
    <text x="420" y="201" text-anchor="middle" font-size="11" font-weight="bold" fill="#f4a261">Mild</text>
    <rect x="310" y="220" width="220" height="65" rx="10" fill="#d8f3dc" opacity="0.4"/>
    <text x="420" y="242" text-anchor="middle" font-size="11" font-weight="bold" fill="#2d6a4f">Recommended Actions</text>
    <text x="420" y="260" text-anchor="middle" font-size="9" fill="#1b1f1e">• Self-care & monitoring</text>
    <text x="420" y="275" text-anchor="middle" font-size="9" fill="#1b1f1e">• Regular exercise & social activity</text>
    <circle cx="40" cy="320" r="5" fill="#c77dff" opacity="0.2"/>
    <circle cx="570" cy="320" r="7" fill="#52b788" opacity="0.2"/>
  </svg>`,

  'stroke-risk-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="stroke-title">
    <title id="stroke-title">Stroke Risk Calculator</title>
    <defs>
      <linearGradient id="stBgGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f8f9fa"/><stop offset="100%" stop-color="#d8f3dc" stop-opacity="0.4"/></linearGradient>
      <linearGradient id="stBrainGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#e76f51" stop-opacity="0.3"/><stop offset="50%" stop-color="#c77dff" stop-opacity="0.1"/><stop offset="50%" stop-color="#52b788" stop-opacity="0.3"/><stop offset="100%" stop-color="#52b788" stop-opacity="0.5"/></linearGradient>
      <linearGradient id="stGaugeGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#52b788"/><stop offset="50%" stop-color="#ffd166"/><stop offset="100%" stop-color="#e76f51"/></linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#stBgGrad)"/>
    <path d="M100 200 C100 130 130 75 170 65 C190 60 210 70 220 85 C225 75 240 60 260 65 C300 75 330 130 330 200 C330 235 310 260 280 275 C250 290 240 285 220 285 C200 285 180 290 150 275 C120 260 100 235 100 200 Z" fill="url(#stBrainGrad)" stroke="#c77dff" stroke-width="1.5" opacity="0.8"/>
    <path d="M220 85 L220 275" stroke="#c77dff" stroke-width="1" stroke-dasharray="4 3" opacity="0.4"/>
    <path d="M130 160 Q160 140 190 160 Q210 145 220 160" stroke="#c77dff" stroke-width="1.5" fill="none" opacity="0.4"/>
    <path d="M220 160 Q240 145 260 160 Q280 140 310 160" stroke="#c77dff" stroke-width="1.5" fill="none" opacity="0.4"/>
    <path d="M140 200 Q170 185 200 200" stroke="#c77dff" stroke-width="1.2" fill="none" opacity="0.3"/>
    <path d="M240 200 Q270 185 300 200" stroke="#c77dff" stroke-width="1.2" fill="none" opacity="0.3"/>
    <circle cx="160" cy="170" r="12" fill="#e76f51" opacity="0.35"/>
    <path d="M155 167 L165 177 M165 167 L155 177" stroke="#e76f51" stroke-width="2" opacity="0.6"/>
    <path d="M260 175 L270 175 M265 170 L265 180" stroke="#52b788" stroke-width="2" opacity="0.5"/>
    <path d="M380 240 A100 100 0 0 1 560 240" fill="none" stroke="#d8f3dc" stroke-width="16" stroke-linecap="round"/>
    <path d="M380 240 A100 100 0 0 1 560 240" fill="none" stroke="url(#stGaugeGrad)" stroke-width="12" stroke-linecap="round"/>
    <line x1="470" y1="240" x2="440" y2="180" stroke="#1b1f1e" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="470" cy="240" r="6" fill="#1b1f1e"/>
    <text x="470" y="220" text-anchor="middle" font-size="20" font-weight="bold" fill="#2d6a4f">Low</text>
    <text x="470" y="270" text-anchor="middle" font-size="11" fill="#1b1f1e">Stroke Risk</text>
    <rect x="420" y="285" width="100" height="22" rx="11" fill="#52b788"/>
    <text x="470" y="300" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">2% / 10yr</text>
    <rect x="370" y="40" width="200" height="120" rx="12" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="470" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#2d6a4f">Risk Factors</text>
    <circle cx="390" cy="85" r="5" fill="#52b788"/><text x="403" y="89" font-size="9" fill="#1b1f1e">Normal BP ✓</text>
    <circle cx="390" cy="105" r="5" fill="#52b788"/><text x="403" y="109" font-size="9" fill="#1b1f1e">No Diabetes ✓</text>
    <circle cx="390" cy="125" r="5" fill="#52b788"/><text x="403" y="129" font-size="9" fill="#1b1f1e">Non-Smoker ✓</text>
    <circle cx="390" cy="145" r="5" fill="#ffd166"/><text x="403" y="149" font-size="9" fill="#1b1f1e">Age 55 ⚠</text>
    <circle cx="50" cy="50" r="6" fill="#c77dff" opacity="0.2"/>
    <circle cx="570" cy="30" r="4" fill="#e76f51" opacity="0.2"/>
    <path d="M40 300 Q55 285 70 300 Q85 285 100 300" stroke="#90e0ef" stroke-width="1.5" fill="none" opacity="0.3"/>
  </svg>`
};
