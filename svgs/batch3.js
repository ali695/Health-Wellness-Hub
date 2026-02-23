module.exports = {
  'body-surface-area-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="bsa-title">
    <title id="bsa-title">Body Surface Area Calculator</title>
    <defs>
      <linearGradient id="bsa-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#f8f9fa"/>
      </linearGradient>
      <linearGradient id="bsa-body" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#52b788"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </linearGradient>
      <radialGradient id="bsa-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#90e0ef" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#90e0ef" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#bsa-bg)"/>
    <circle cx="200" cy="170" r="130" fill="url(#bsa-glow)"/>
    <path d="M200,50 C215,50 225,60 225,75 C225,90 215,100 200,100 C185,100 175,90 175,75 C175,60 185,50 200,50 Z" fill="url(#bsa-body)" opacity="0.9"/>
    <path d="M200,100 L200,200 M200,130 L155,160 M200,130 L245,160 M200,200 L165,270 M200,200 L235,270" stroke="url(#bsa-body)" stroke-width="8" stroke-linecap="round" fill="none"/>
    <line x1="140" y1="50" x2="140" y2="270" stroke="#2d6a4f" stroke-width="2" stroke-dasharray="5,5"/>
    <line x1="135" y1="50" x2="145" y2="50" stroke="#2d6a4f" stroke-width="2"/>
    <line x1="135" y1="270" x2="145" y2="270" stroke="#2d6a4f" stroke-width="2"/>
    <text x="130" y="165" font-size="11" fill="#2d6a4f" text-anchor="end" font-family="Arial">175 cm</text>
    <line x1="165" y1="285" x2="235" y2="285" stroke="#f4a261" stroke-width="2" stroke-dasharray="5,5"/>
    <text x="200" y="300" font-size="11" fill="#f4a261" text-anchor="middle" font-family="Arial">75 kg</text>
    <rect x="350" y="60" width="200" height="120" rx="16" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="450" y="95" font-size="14" fill="#1b1f1e" text-anchor="middle" font-family="Arial" font-weight="bold">Body Surface Area</text>
    <text x="450" y="135" font-size="38" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">1.91</text>
    <text x="450" y="160" font-size="16" fill="#52b788" text-anchor="middle" font-family="Arial">m²</text>
    <rect x="370" y="200" width="160" height="40" rx="10" fill="#d8f3dc"/>
    <text x="450" y="225" font-size="13" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">DuBois Formula</text>
    <rect x="370" y="250" width="75" height="50" rx="8" fill="#ffffff" stroke="#52b788" stroke-width="1"/>
    <text x="407" y="272" font-size="11" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Height</text>
    <text x="407" y="290" font-size="13" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">175cm</text>
    <rect x="455" y="250" width="75" height="50" rx="8" fill="#ffffff" stroke="#f4a261" stroke-width="1"/>
    <text x="492" y="272" font-size="11" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Weight</text>
    <text x="492" y="290" font-size="13" fill="#f4a261" text-anchor="middle" font-family="Arial" font-weight="bold">75kg</text>
    <circle cx="80" cy="60" r="6" fill="#90e0ef" opacity="0.5"/>
    <circle cx="530" cy="40" r="4" fill="#c77dff" opacity="0.4"/>
    <circle cx="320" cy="310" r="5" fill="#ffd166" opacity="0.5"/>
    <rect x="60" y="300" width="30" height="4" rx="2" fill="#52b788" opacity="0.3"/>
  </svg>`,

  'one-rep-max-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="orm-title">
    <title id="orm-title">One Rep Max Calculator</title>
    <defs>
      <linearGradient id="orm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8f9fa"/>
        <stop offset="100%" stop-color="#d8f3dc"/>
      </linearGradient>
      <linearGradient id="orm-bar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1b1f1e"/>
        <stop offset="100%" stop-color="#555"/>
      </linearGradient>
      <linearGradient id="orm-plate" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#e76f51"/>
        <stop offset="100%" stop-color="#c1121f"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#orm-bg)"/>
    <rect x="80" y="155" width="280" height="12" rx="6" fill="url(#orm-bar)"/>
    <rect x="90" y="120" width="18" height="82" rx="4" fill="#e76f51"/>
    <rect x="112" y="105" width="22" height="112" rx="4" fill="url(#orm-plate)"/>
    <rect x="138" y="115" width="18" height="92" rx="3" fill="#f4a261"/>
    <rect x="310" y="120" width="18" height="82" rx="4" fill="#e76f51"/>
    <rect x="285" y="105" width="22" height="112" rx="4" fill="url(#orm-plate)"/>
    <rect x="263" y="115" width="18" height="92" rx="3" fill="#f4a261"/>
    <circle cx="73" cy="161" r="14" fill="#1b1f1e" stroke="#555" stroke-width="2"/>
    <circle cx="347" cy="161" r="14" fill="#1b1f1e" stroke="#555" stroke-width="2"/>
    <rect x="400" y="50" width="170" height="100" rx="16" fill="#ffffff" stroke="#2d6a4f" stroke-width="2"/>
    <text x="485" y="82" font-size="13" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Estimated 1RM</text>
    <text x="485" y="120" font-size="36" fill="#e76f51" text-anchor="middle" font-family="Arial" font-weight="bold">225</text>
    <text x="485" y="140" font-size="14" fill="#52b788" text-anchor="middle" font-family="Arial">lbs</text>
    <rect x="400" y="170" width="80" height="35" rx="8" fill="#d8f3dc"/>
    <text x="440" y="185" font-size="10" fill="#2d6a4f" text-anchor="middle" font-family="Arial">5 Reps</text>
    <text x="440" y="198" font-size="12" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">195 lbs</text>
    <rect x="490" y="170" width="80" height="35" rx="8" fill="#d8f3dc"/>
    <text x="530" y="185" font-size="10" fill="#2d6a4f" text-anchor="middle" font-family="Arial">10 Reps</text>
    <text x="530" y="198" font-size="12" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">170 lbs</text>
    <text x="400" y="240" font-size="11" fill="#1b1f1e" font-family="Arial">% of 1RM Breakdown:</text>
    <rect x="400" y="250" width="150" height="10" rx="5" fill="#f8f9fa"/>
    <rect x="400" y="250" width="150" height="10" rx="5" fill="#52b788"/>
    <text x="555" y="259" font-size="10" fill="#2d6a4f" font-family="Arial">100%</text>
    <rect x="400" y="268" width="127" height="10" rx="5" fill="#f8f9fa"/>
    <rect x="400" y="268" width="127" height="10" rx="5" fill="#90e0ef"/>
    <text x="532" y="277" font-size="10" fill="#2d6a4f" font-family="Arial">85%</text>
    <rect x="400" y="286" width="105" height="10" rx="5" fill="#f8f9fa"/>
    <rect x="400" y="286" width="105" height="10" rx="5" fill="#ffd166"/>
    <text x="510" y="295" font-size="10" fill="#2d6a4f" font-family="Arial">70%</text>
    <path d="M210,260 L195,290 L225,290 Z" fill="#ffd166" opacity="0.6"/>
    <circle cx="60" cy="40" r="5" fill="#c77dff" opacity="0.4"/>
    <circle cx="340" cy="30" r="4" fill="#f4a261" opacity="0.5"/>
    <rect x="100" y="300" width="25" height="4" rx="2" fill="#e76f51" opacity="0.3"/>
  </svg>`,

  'vo2-max-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="vo2-title">
    <title id="vo2-title">VO2 Max Calculator</title>
    <defs>
      <linearGradient id="vo2-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#90e0ef" stop-opacity="0.3"/>
      </linearGradient>
      <linearGradient id="vo2-lung" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#90e0ef"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </linearGradient>
      <radialGradient id="vo2-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#52b788" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#52b788" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#vo2-bg)"/>
    <circle cx="180" cy="160" r="120" fill="url(#vo2-glow)"/>
    <path d="M160,100 C130,100 110,130 110,160 C110,200 140,230 160,230 C170,230 175,220 180,220 C185,220 190,230 200,230 C220,230 250,200 250,160 C250,130 230,100 200,100 C190,100 185,110 180,110 C175,110 170,100 160,100 Z" fill="url(#vo2-lung)" opacity="0.8"/>
    <path d="M180,110 L180,240" stroke="#ffffff" stroke-width="2" stroke-dasharray="4,3" opacity="0.5"/>
    <circle cx="150" cy="140" r="5" fill="#ffffff" opacity="0.3"/>
    <circle cx="210" cy="145" r="4" fill="#ffffff" opacity="0.25"/>
    <circle cx="165" cy="190" r="6" fill="#ffffff" opacity="0.2"/>
    <circle cx="195" cy="180" r="3" fill="#ffffff" opacity="0.35"/>
    <text x="180" y="280" font-size="12" fill="#2d6a4f" text-anchor="middle" font-family="Arial">O₂ Uptake</text>
    <path d="M350,170 C360,170 365,130 380,130 C395,130 395,170 400,170 C405,170 405,90 420,90 C435,90 435,200 440,200 C445,200 445,145 460,145 C475,145 475,170 490,170" stroke="#52b788" stroke-width="3" fill="none" stroke-linecap="round"/>
    <line x1="340" y1="170" x2="500" y2="170" stroke="#1b1f1e" stroke-width="1" opacity="0.2"/>
    <rect x="370" y="50" width="160" height="90" rx="14" fill="#ffffff" stroke="#52b788" stroke-width="2"/>
    <text x="450" y="78" font-size="12" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Your VO2 Max</text>
    <text x="450" y="112" font-size="34" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">48.5</text>
    <text x="450" y="130" font-size="12" fill="#52b788" text-anchor="middle" font-family="Arial">mL/kg/min</text>
    <rect x="380" y="220" width="42" height="60" rx="6" fill="#90e0ef" opacity="0.3"/>
    <rect x="380" y="250" width="42" height="30" rx="0" fill="#90e0ef"/>
    <text x="401" y="295" font-size="9" fill="#2d6a4f" text-anchor="middle" font-family="Arial">Poor</text>
    <rect x="428" y="220" width="42" height="60" rx="6" fill="#ffd166" opacity="0.3"/>
    <rect x="428" y="235" width="42" height="45" rx="0" fill="#ffd166"/>
    <text x="449" y="295" font-size="9" fill="#2d6a4f" text-anchor="middle" font-family="Arial">Good</text>
    <rect x="476" y="220" width="42" height="60" rx="6" fill="#52b788" opacity="0.3"/>
    <rect x="476" y="225" width="42" height="55" rx="0" fill="#52b788"/>
    <text x="497" y="295" font-size="9" fill="#2d6a4f" text-anchor="middle" font-family="Arial">Elite</text>
    <circle cx="80" cy="30" r="5" fill="#ffd166" opacity="0.5"/>
    <circle cx="550" cy="310" r="4" fill="#c77dff" opacity="0.4"/>
    <rect x="50" y="310" width="30" height="4" rx="2" fill="#52b788" opacity="0.3"/>
  </svg>`,

  'steps-to-calories-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="steps-title">
    <title id="steps-title">Steps to Calories Calculator</title>
    <defs>
      <linearGradient id="steps-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#f8f9fa"/>
      </linearGradient>
      <linearGradient id="steps-ring" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#52b788"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </linearGradient>
      <linearGradient id="steps-fire" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="#e76f51"/>
        <stop offset="50%" stop-color="#f4a261"/>
        <stop offset="100%" stop-color="#ffd166"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#steps-bg)"/>
    <circle cx="180" cy="170" r="100" fill="none" stroke="#d8f3dc" stroke-width="14"/>
    <circle cx="180" cy="170" r="100" fill="none" stroke="url(#steps-ring)" stroke-width="14" stroke-dasharray="471" stroke-dashoffset="118" stroke-linecap="round" transform="rotate(-90 180 170)"/>
    <text x="180" y="155" font-size="32" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">7,500</text>
    <text x="180" y="178" font-size="14" fill="#52b788" text-anchor="middle" font-family="Arial">steps</text>
    <text x="180" y="198" font-size="11" fill="#1b1f1e" text-anchor="middle" font-family="Arial" opacity="0.6">of 10,000 goal</text>
    <path d="M115,285 L120,270 L130,275 L135,260 L145,265 L150,250 L155,255" stroke="#52b788" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.5"/>
    <path d="M195,285 L200,270 L210,275 L215,260 L225,265 L230,250 L235,255" stroke="#52b788" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.5"/>
    <rect x="370" y="60" width="190" height="90" rx="14" fill="#ffffff" stroke="#f4a261" stroke-width="2"/>
    <path d="M405,100 C405,85 415,78 420,78 C425,78 430,85 430,92 C430,100 420,112 417,115 C415,112 405,100 405,100 Z" fill="url(#steps-fire)"/>
    <text x="480" y="98" font-size="28" fill="#e76f51" text-anchor="middle" font-family="Arial" font-weight="bold">320</text>
    <text x="480" y="118" font-size="13" fill="#f4a261" text-anchor="middle" font-family="Arial">kcal burned</text>
    <text x="370" y="185" font-size="12" fill="#1b1f1e" font-family="Arial" font-weight="bold">Daily Progress</text>
    <rect x="370" y="195" width="190" height="12" rx="6" fill="#f8f9fa"/>
    <rect x="370" y="195" width="142" height="12" rx="6" fill="#52b788"/>
    <text x="565" y="205" font-size="10" fill="#2d6a4f" font-family="Arial">75%</text>
    <rect x="370" y="225" width="58" height="65" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="399" y="260" font-size="16" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">5.2</text>
    <text x="399" y="278" font-size="10" fill="#52b788" text-anchor="middle" font-family="Arial">km</text>
    <rect x="436" y="225" width="58" height="65" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="465" y="260" font-size="16" fill="#f4a261" text-anchor="middle" font-family="Arial" font-weight="bold">62</text>
    <text x="465" y="278" font-size="10" fill="#f4a261" text-anchor="middle" font-family="Arial">min</text>
    <rect x="502" y="225" width="58" height="65" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="531" y="260" font-size="16" fill="#e76f51" text-anchor="middle" font-family="Arial" font-weight="bold">320</text>
    <text x="531" y="278" font-size="10" fill="#e76f51" text-anchor="middle" font-family="Arial">cal</text>
    <circle cx="60" cy="40" r="5" fill="#ffd166" opacity="0.5"/>
    <circle cx="540" cy="30" r="4" fill="#c77dff" opacity="0.4"/>
    <circle cx="330" cy="310" r="3" fill="#90e0ef" opacity="0.5"/>
  </svg>`,

  'running-pace-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="run-title">
    <title id="run-title">Running Pace Calculator</title>
    <defs>
      <linearGradient id="run-bg" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#f8f9fa"/>
      </linearGradient>
      <linearGradient id="run-person" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2d6a4f"/>
        <stop offset="100%" stop-color="#52b788"/>
      </linearGradient>
      <linearGradient id="run-speed" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f4a261" stop-opacity="0"/>
        <stop offset="100%" stop-color="#f4a261"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#run-bg)"/>
    <line x1="0" y1="270" x2="600" y2="270" stroke="#52b788" stroke-width="3"/>
    <line x1="0" y1="270" x2="600" y2="270" stroke="#2d6a4f" stroke-width="1" stroke-dasharray="20,20"/>
    <circle cx="200" cy="115" r="22" fill="url(#run-person)"/>
    <path d="M200,137 L200,190 M200,160 L170,185 M200,160 L235,145 M200,190 L165,240 L155,265 M200,190 L240,230 L260,265" stroke="url(#run-person)" stroke-width="7" stroke-linecap="round" fill="none"/>
    <line x1="130" y1="168" x2="170" y2="168" stroke="#f4a261" stroke-width="3" opacity="0.6" stroke-linecap="round"/>
    <line x1="120" y1="178" x2="165" y2="178" stroke="#f4a261" stroke-width="2" opacity="0.4" stroke-linecap="round"/>
    <line x1="125" y1="188" x2="160" y2="188" stroke="#f4a261" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
    <rect x="370" y="45" width="190" height="100" rx="14" fill="#ffffff" stroke="#2d6a4f" stroke-width="2"/>
    <text x="465" y="77" font-size="12" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Running Pace</text>
    <text x="465" y="110" font-size="30" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">5:30</text>
    <text x="465" y="130" font-size="13" fill="#52b788" text-anchor="middle" font-family="Arial">min/km</text>
    <rect x="370" y="165" width="90" height="55" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="415" y="188" font-size="10" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Distance</text>
    <text x="415" y="208" font-size="16" fill="#f4a261" text-anchor="middle" font-family="Arial" font-weight="bold">10 km</text>
    <rect x="470" y="165" width="90" height="55" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="515" y="188" font-size="10" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Time</text>
    <text x="515" y="208" font-size="16" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">55:00</text>
    <text x="370" y="250" font-size="11" fill="#1b1f1e" font-family="Arial" font-weight="bold">Split Times</text>
    <rect x="370" y="258" width="190" height="10" rx="5" fill="#d8f3dc"/>
    <rect x="370" y="258" width="95" height="10" rx="5" fill="#52b788"/>
    <text x="565" y="267" font-size="9" fill="#2d6a4f" font-family="Arial">5 km</text>
    <rect x="370" y="275" width="190" height="10" rx="5" fill="#d8f3dc"/>
    <rect x="370" y="275" width="142" height="10" rx="5" fill="#f4a261"/>
    <text x="565" y="284" font-size="9" fill="#f4a261" font-family="Arial">7.5 km</text>
    <rect x="370" y="292" width="190" height="10" rx="5" fill="#d8f3dc"/>
    <rect x="370" y="292" width="190" height="10" rx="5" fill="#e76f51"/>
    <text x="565" y="301" font-size="9" fill="#e76f51" font-family="Arial">10 km</text>
    <circle cx="80" cy="50" r="5" fill="#ffd166" opacity="0.5"/>
    <circle cx="320" cy="30" r="4" fill="#c77dff" opacity="0.4"/>
    <circle cx="100" cy="300" r="3" fill="#90e0ef" opacity="0.5"/>
  </svg>`,

  'cycling-calories-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="cycle-title">
    <title id="cycle-title">Cycling Calories Calculator</title>
    <defs>
      <linearGradient id="cycle-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#90e0ef" stop-opacity="0.2"/>
      </linearGradient>
      <linearGradient id="cycle-frame" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#2d6a4f"/>
        <stop offset="100%" stop-color="#52b788"/>
      </linearGradient>
      <linearGradient id="cycle-fire" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="#e76f51"/>
        <stop offset="100%" stop-color="#ffd166"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#cycle-bg)"/>
    <line x1="0" y1="280" x2="600" y2="280" stroke="#52b788" stroke-width="2"/>
    <circle cx="130" cy="230" r="48" fill="none" stroke="#1b1f1e" stroke-width="5"/>
    <circle cx="130" cy="230" r="38" fill="none" stroke="#1b1f1e" stroke-width="1" opacity="0.3"/>
    <circle cx="130" cy="230" r="5" fill="#1b1f1e"/>
    <circle cx="280" cy="230" r="48" fill="none" stroke="#1b1f1e" stroke-width="5"/>
    <circle cx="280" cy="230" r="38" fill="none" stroke="#1b1f1e" stroke-width="1" opacity="0.3"/>
    <circle cx="280" cy="230" r="5" fill="#1b1f1e"/>
    <line x1="130" y1="230" x2="205" y2="170" stroke="url(#cycle-frame)" stroke-width="5" stroke-linecap="round"/>
    <line x1="205" y1="170" x2="280" y2="230" stroke="url(#cycle-frame)" stroke-width="5" stroke-linecap="round"/>
    <line x1="205" y1="170" x2="240" y2="155" stroke="url(#cycle-frame)" stroke-width="5" stroke-linecap="round"/>
    <line x1="240" y1="155" x2="280" y2="230" stroke="url(#cycle-frame)" stroke-width="3" stroke-linecap="round"/>
    <line x1="130" y1="230" x2="170" y2="165" stroke="url(#cycle-frame)" stroke-width="4" stroke-linecap="round"/>
    <line x1="170" y1="165" x2="205" y2="170" stroke="url(#cycle-frame)" stroke-width="4" stroke-linecap="round"/>
    <circle cx="240" cy="155" r="6" fill="url(#cycle-frame)"/>
    <line x1="232" y1="145" x2="248" y2="145" stroke="#1b1f1e" stroke-width="3" stroke-linecap="round"/>
    <circle cx="205" cy="170" r="8" fill="none" stroke="#1b1f1e" stroke-width="2"/>
    <rect x="390" y="50" width="180" height="95" rx="14" fill="#ffffff" stroke="#f4a261" stroke-width="2"/>
    <path d="M420,90 C420,78 428,72 432,72 C436,72 440,78 440,85 C440,92 432,102 430,104 C428,102 420,92 420,90 Z" fill="url(#cycle-fire)"/>
    <text x="505" y="92" font-size="28" fill="#e76f51" text-anchor="middle" font-family="Arial" font-weight="bold">480</text>
    <text x="505" y="114" font-size="13" fill="#f4a261" text-anchor="middle" font-family="Arial">kcal burned</text>
    <rect x="390" y="165" width="85" height="50" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="432" y="185" font-size="10" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Speed</text>
    <text x="432" y="205" font-size="15" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">25 km/h</text>
    <rect x="485" y="165" width="85" height="50" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="527" y="185" font-size="10" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Duration</text>
    <text x="527" y="205" font-size="15" fill="#f4a261" text-anchor="middle" font-family="Arial" font-weight="bold">45 min</text>
    <text x="390" y="245" font-size="11" fill="#1b1f1e" font-family="Arial" font-weight="bold">Intensity</text>
    <rect x="390" y="255" width="180" height="12" rx="6" fill="#d8f3dc"/>
    <rect x="390" y="255" width="120" height="12" rx="6" fill="#52b788"/>
    <text x="515" y="264" font-size="9" fill="#2d6a4f" font-family="Arial">Moderate</text>
    <rect x="390" y="280" width="55" height="22" rx="6" fill="#90e0ef" opacity="0.5"/>
    <text x="417" y="295" font-size="9" fill="#2d6a4f" text-anchor="middle" font-family="Arial">18.7 km</text>
    <circle cx="60" cy="40" r="5" fill="#ffd166" opacity="0.5"/>
    <circle cx="340" cy="320" r="4" fill="#c77dff" opacity="0.4"/>
  </svg>`,

  'swimming-calories-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="swim-title">
    <title id="swim-title">Swimming Calories Calculator</title>
    <defs>
      <linearGradient id="swim-bg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#f8f9fa"/>
        <stop offset="100%" stop-color="#90e0ef" stop-opacity="0.3"/>
      </linearGradient>
      <linearGradient id="swim-water" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#90e0ef"/>
        <stop offset="100%" stop-color="#0077b6"/>
      </linearGradient>
      <linearGradient id="swim-fire" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="#e76f51"/>
        <stop offset="100%" stop-color="#ffd166"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#swim-bg)"/>
    <rect x="40" y="180" width="300" height="140" rx="10" fill="url(#swim-water)" opacity="0.4"/>
    <path d="M40,190 Q70,180 100,190 Q130,200 160,190 Q190,180 220,190 Q250,200 280,190 Q310,180 340,190" stroke="#90e0ef" stroke-width="3" fill="none"/>
    <path d="M40,205 Q70,195 100,205 Q130,215 160,205 Q190,195 220,205 Q250,215 280,205 Q310,195 340,205" stroke="#90e0ef" stroke-width="2" fill="none" opacity="0.5"/>
    <circle cx="160" cy="185" r="14" fill="#f4a261"/>
    <line x1="160" y1="199" x2="160" y2="230" stroke="#f4a261" stroke-width="5" stroke-linecap="round"/>
    <line x1="160" y1="210" x2="130" y2="195" stroke="#f4a261" stroke-width="4" stroke-linecap="round"/>
    <line x1="160" y1="210" x2="195" y2="200" stroke="#f4a261" stroke-width="4" stroke-linecap="round"/>
    <line x1="160" y1="230" x2="140" y2="260" stroke="#f4a261" stroke-width="4" stroke-linecap="round"/>
    <line x1="160" y1="230" x2="180" y2="260" stroke="#f4a261" stroke-width="4" stroke-linecap="round"/>
    <rect x="60" y="280" width="40" height="8" rx="4" fill="#ffffff" opacity="0.4"/>
    <rect x="120" y="290" width="50" height="8" rx="4" fill="#ffffff" opacity="0.3"/>
    <rect x="200" y="285" width="45" height="8" rx="4" fill="#ffffff" opacity="0.35"/>
    <rect x="270" y="278" width="35" height="8" rx="4" fill="#ffffff" opacity="0.3"/>
    <rect x="390" y="50" width="180" height="95" rx="14" fill="#ffffff" stroke="#90e0ef" stroke-width="2"/>
    <path d="M418,88 C418,76 426,70 430,70 C434,70 438,76 438,83 C438,90 430,100 428,102 C426,100 418,90 418,88 Z" fill="url(#swim-fire)"/>
    <text x="505" y="90" font-size="28" fill="#e76f51" text-anchor="middle" font-family="Arial" font-weight="bold">550</text>
    <text x="505" y="112" font-size="13" fill="#f4a261" text-anchor="middle" font-family="Arial">kcal burned</text>
    <rect x="390" y="165" width="85" height="50" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="432" y="185" font-size="10" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Stroke</text>
    <text x="432" y="203" font-size="12" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">Freestyle</text>
    <rect x="485" y="165" width="85" height="50" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="527" y="185" font-size="10" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Duration</text>
    <text x="527" y="203" font-size="14" fill="#90e0ef" text-anchor="middle" font-family="Arial" font-weight="bold">60 min</text>
    <text x="390" y="245" font-size="11" fill="#1b1f1e" font-family="Arial" font-weight="bold">Laps Completed</text>
    <rect x="390" y="255" width="180" height="12" rx="6" fill="#d8f3dc"/>
    <rect x="390" y="255" width="135" height="12" rx="6" fill="#90e0ef"/>
    <text x="530" y="264" font-size="9" fill="#2d6a4f" font-family="Arial">40 laps</text>
    <rect x="390" y="280" width="85" height="28" rx="6" fill="#d8f3dc"/>
    <text x="432" y="299" font-size="10" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">1,000m</text>
    <circle cx="50" cy="40" r="5" fill="#ffd166" opacity="0.5"/>
    <circle cx="550" cy="320" r="4" fill="#c77dff" opacity="0.4"/>
  </svg>`,

  'yoga-calories-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="yoga-title">
    <title id="yoga-title">Yoga Calories Calculator</title>
    <defs>
      <linearGradient id="yoga-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#c77dff" stop-opacity="0.15"/>
      </linearGradient>
      <radialGradient id="yoga-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#c77dff" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#c77dff" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="yoga-person" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#c77dff"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#yoga-bg)"/>
    <circle cx="200" cy="180" r="120" fill="url(#yoga-glow)"/>
    <circle cx="200" cy="105" r="18" fill="url(#yoga-person)"/>
    <line x1="200" y1="123" x2="200" y2="195" stroke="url(#yoga-person)" stroke-width="6" stroke-linecap="round"/>
    <line x1="200" y1="150" x2="160" y2="130" stroke="url(#yoga-person)" stroke-width="5" stroke-linecap="round"/>
    <line x1="200" y1="150" x2="240" y2="130" stroke="url(#yoga-person)" stroke-width="5" stroke-linecap="round"/>
    <line x1="200" y1="195" x2="165" y2="250" stroke="url(#yoga-person)" stroke-width="5" stroke-linecap="round"/>
    <line x1="200" y1="195" x2="235" y2="250" stroke="url(#yoga-person)" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="200" cy="265" rx="55" ry="8" fill="#c77dff" opacity="0.15"/>
    <circle cx="200" cy="170" r="60" fill="none" stroke="#c77dff" stroke-width="1" opacity="0.2" stroke-dasharray="6,4"/>
    <circle cx="200" cy="170" r="80" fill="none" stroke="#52b788" stroke-width="1" opacity="0.15" stroke-dasharray="4,6"/>
    <path d="M135,75 C140,65 148,60 155,65" stroke="#ffd166" stroke-width="2" fill="none" opacity="0.5"/>
    <path d="M245,75 C250,65 258,60 265,65" stroke="#ffd166" stroke-width="2" fill="none" opacity="0.5"/>
    <path d="M125,95 C130,85 138,80 145,85" stroke="#ffd166" stroke-width="2" fill="none" opacity="0.3"/>
    <rect x="380" y="55" width="185" height="90" rx="14" fill="#ffffff" stroke="#c77dff" stroke-width="2"/>
    <text x="472" y="85" font-size="12" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Calories Burned</text>
    <text x="472" y="118" font-size="30" fill="#c77dff" text-anchor="middle" font-family="Arial" font-weight="bold">210</text>
    <text x="472" y="136" font-size="12" fill="#52b788" text-anchor="middle" font-family="Arial">kcal</text>
    <rect x="380" y="165" width="85" height="48" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="422" y="185" font-size="10" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Style</text>
    <text x="422" y="203" font-size="12" fill="#c77dff" text-anchor="middle" font-family="Arial" font-weight="bold">Vinyasa</text>
    <rect x="475" y="165" width="85" height="48" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="517" y="185" font-size="10" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Duration</text>
    <text x="517" y="203" font-size="14" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">60 min</text>
    <text x="380" y="240" font-size="11" fill="#1b1f1e" font-family="Arial" font-weight="bold">Intensity Levels</text>
    <rect x="380" y="250" width="55" height="22" rx="6" fill="#d8f3dc"/>
    <text x="407" y="265" font-size="9" fill="#2d6a4f" text-anchor="middle" font-family="Arial">Gentle</text>
    <rect x="442" y="250" width="55" height="22" rx="6" fill="#c77dff"/>
    <text x="469" y="265" font-size="9" fill="#ffffff" text-anchor="middle" font-family="Arial">Flow</text>
    <rect x="504" y="250" width="55" height="22" rx="6" fill="#d8f3dc"/>
    <text x="531" y="265" font-size="9" fill="#2d6a4f" text-anchor="middle" font-family="Arial">Power</text>
    <circle cx="65" cy="45" r="5" fill="#ffd166" opacity="0.5"/>
    <circle cx="550" cy="310" r="4" fill="#90e0ef" opacity="0.4"/>
    <rect x="380" y="290" width="180" height="4" rx="2" fill="#c77dff" opacity="0.15"/>
  </svg>`,

  'sleep-debt-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="slpd-title">
    <title id="slpd-title">Sleep Debt Calculator</title>
    <defs>
      <linearGradient id="slpd-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1b1f1e"/>
        <stop offset="100%" stop-color="#2d6a4f" stop-opacity="0.5"/>
      </linearGradient>
      <linearGradient id="slpd-moon" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffd166"/>
        <stop offset="100%" stop-color="#f4a261"/>
      </linearGradient>
      <radialGradient id="slpd-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd166" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#ffd166" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#slpd-bg)"/>
    <circle cx="120" cy="80" r="60" fill="url(#slpd-glow)"/>
    <circle cx="120" cy="80" r="30" fill="url(#slpd-moon)"/>
    <circle cx="108" cy="70" r="22" fill="url(#slpd-bg)"/>
    <circle cx="200" cy="40" r="2" fill="#ffffff" opacity="0.7"/>
    <circle cx="300" cy="25" r="1.5" fill="#ffffff" opacity="0.5"/>
    <circle cx="400" cy="45" r="2" fill="#ffffff" opacity="0.6"/>
    <circle cx="500" cy="30" r="1.5" fill="#ffffff" opacity="0.4"/>
    <circle cx="250" cy="60" r="1" fill="#ffffff" opacity="0.5"/>
    <circle cx="450" cy="55" r="1.5" fill="#ffffff" opacity="0.3"/>
    <circle cx="350" cy="70" r="1" fill="#ffffff" opacity="0.45"/>
    <rect x="60" y="140" width="200" height="160" rx="14" fill="#ffffff" opacity="0.1"/>
    <text x="160" y="170" font-size="13" fill="#ffffff" text-anchor="middle" font-family="Arial" opacity="0.8">Weekly Sleep Log</text>
    <rect x="80" y="185" width="22" height="50" rx="4" fill="#e76f51" opacity="0.7"/>
    <rect x="108" y="175" width="22" height="60" rx="4" fill="#f4a261" opacity="0.7"/>
    <rect x="136" y="180" width="22" height="55" rx="4" fill="#f4a261" opacity="0.7"/>
    <rect x="164" y="168" width="22" height="67" rx="4" fill="#52b788" opacity="0.7"/>
    <rect x="192" y="190" width="22" height="45" rx="4" fill="#e76f51" opacity="0.7"/>
    <rect x="220" y="172" width="22" height="63" rx="4" fill="#52b788" opacity="0.7"/>
    <line x1="80" y1="193" x2="242" y2="193" stroke="#ffd166" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
    <text x="255" y="197" font-size="8" fill="#ffd166" font-family="Arial" opacity="0.7">8h goal</text>
    <text x="91" y="250" font-size="8" fill="#ffffff" text-anchor="middle" font-family="Arial" opacity="0.5">M</text>
    <text x="119" y="250" font-size="8" fill="#ffffff" text-anchor="middle" font-family="Arial" opacity="0.5">T</text>
    <text x="147" y="250" font-size="8" fill="#ffffff" text-anchor="middle" font-family="Arial" opacity="0.5">W</text>
    <text x="175" y="250" font-size="8" fill="#ffffff" text-anchor="middle" font-family="Arial" opacity="0.5">T</text>
    <text x="203" y="250" font-size="8" fill="#ffffff" text-anchor="middle" font-family="Arial" opacity="0.5">F</text>
    <text x="231" y="250" font-size="8" fill="#ffffff" text-anchor="middle" font-family="Arial" opacity="0.5">S</text>
    <rect x="350" y="100" width="210" height="110" rx="16" fill="#ffffff" opacity="0.1" stroke="#e76f51" stroke-width="1"/>
    <text x="455" y="135" font-size="13" fill="#ffffff" text-anchor="middle" font-family="Arial" opacity="0.8">Sleep Debt</text>
    <text x="455" y="175" font-size="36" fill="#e76f51" text-anchor="middle" font-family="Arial" font-weight="bold">-5.5h</text>
    <text x="455" y="198" font-size="12" fill="#f4a261" text-anchor="middle" font-family="Arial">this week</text>
    <rect x="370" y="230" width="85" height="45" rx="10" fill="#ffffff" opacity="0.1"/>
    <text x="412" y="250" font-size="10" fill="#ffffff" text-anchor="middle" font-family="Arial" opacity="0.7">Needed</text>
    <text x="412" y="268" font-size="14" fill="#52b788" text-anchor="middle" font-family="Arial" font-weight="bold">8h/night</text>
    <rect x="465" y="230" width="85" height="45" rx="10" fill="#ffffff" opacity="0.1"/>
    <text x="507" y="250" font-size="10" fill="#ffffff" text-anchor="middle" font-family="Arial" opacity="0.7">Actual</text>
    <text x="507" y="268" font-size="14" fill="#e76f51" text-anchor="middle" font-family="Arial" font-weight="bold">6.5h avg</text>
  </svg>`,

  'life-expectancy-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="life-title">
    <title id="life-title">Life Expectancy Calculator</title>
    <defs>
      <linearGradient id="life-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#f8f9fa"/>
      </linearGradient>
      <linearGradient id="life-line" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#52b788"/>
        <stop offset="40%" stop-color="#2d6a4f"/>
        <stop offset="70%" stop-color="#f4a261"/>
        <stop offset="100%" stop-color="#e76f51"/>
      </linearGradient>
      <radialGradient id="life-heart" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#e76f51"/>
        <stop offset="100%" stop-color="#c1121f"/>
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#life-bg)"/>
    <line x1="60" y1="220" x2="540" y2="220" stroke="#d8f3dc" stroke-width="8" stroke-linecap="round"/>
    <line x1="60" y1="220" x2="400" y2="220" stroke="url(#life-line)" stroke-width="8" stroke-linecap="round"/>
    <circle cx="60" cy="220" r="8" fill="#52b788"/>
    <text x="60" y="248" font-size="10" fill="#2d6a4f" text-anchor="middle" font-family="Arial">Birth</text>
    <circle cx="150" cy="220" r="5" fill="#52b788"/>
    <text x="150" y="248" font-size="9" fill="#2d6a4f" text-anchor="middle" font-family="Arial">20</text>
    <circle cx="250" cy="220" r="5" fill="#2d6a4f"/>
    <text x="250" y="248" font-size="9" fill="#2d6a4f" text-anchor="middle" font-family="Arial">40</text>
    <circle cx="350" cy="220" r="5" fill="#f4a261"/>
    <text x="350" y="248" font-size="9" fill="#f4a261" text-anchor="middle" font-family="Arial">60</text>
    <circle cx="400" cy="220" r="10" fill="#2d6a4f" stroke="#ffffff" stroke-width="3"/>
    <text x="400" y="258" font-size="10" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">You: 45</text>
    <circle cx="540" cy="220" r="5" fill="#e76f51" opacity="0.4"/>
    <text x="540" y="248" font-size="9" fill="#e76f51" text-anchor="middle" font-family="Arial">100</text>
    <rect x="350" y="40" width="210" height="100" rx="16" fill="#ffffff" stroke="#2d6a4f" stroke-width="2"/>
    <text x="455" y="70" font-size="12" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Estimated Life Expectancy</text>
    <text x="455" y="108" font-size="36" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">82.4</text>
    <text x="455" y="128" font-size="13" fill="#52b788" text-anchor="middle" font-family="Arial">years</text>
    <path d="M120,90 C120,75 132,65 138,65 C144,65 150,75 150,85 C150,95 138,110 135,114 C132,110 120,95 120,90 Z" fill="url(#life-heart)"/>
    <rect x="60" y="55" width="120" height="35" rx="10" fill="#d8f3dc"/>
    <text x="120" y="78" font-size="12" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">37.4 yrs left</text>
    <text x="60" y="160" font-size="11" fill="#1b1f1e" font-family="Arial" font-weight="bold">Positive Factors</text>
    <rect x="60" y="170" width="100" height="22" rx="6" fill="#d8f3dc"/>
    <text x="110" y="185" font-size="9" fill="#2d6a4f" text-anchor="middle" font-family="Arial">✓ Non-smoker</text>
    <rect x="168" y="170" width="100" height="22" rx="6" fill="#d8f3dc"/>
    <text x="218" y="185" font-size="9" fill="#2d6a4f" text-anchor="middle" font-family="Arial">✓ Active</text>
    <rect x="60" y="198" width="100" height="22" rx="6" fill="#d8f3dc"/>
    <text x="110" y="213" font-size="9" fill="#2d6a4f" text-anchor="middle" font-family="Arial">✓ Healthy BMI</text>
    <circle cx="500" cy="300" r="4" fill="#ffd166" opacity="0.5"/>
    <circle cx="40" cy="300" r="5" fill="#c77dff" opacity="0.4"/>
    <rect x="400" y="160" width="30" height="4" rx="2" fill="#52b788" opacity="0.3"/>
  </svg>`,

  'biological-age-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="bio-title">
    <title id="bio-title">Biological Age Calculator</title>
    <defs>
      <linearGradient id="bio-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#c77dff" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="bio-ring1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#52b788"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </linearGradient>
      <linearGradient id="bio-ring2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#c77dff"/>
        <stop offset="100%" stop-color="#9d4edd"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="600" height="340" rx="20" fill="url(#bio-bg)"/>
    <circle cx="200" cy="170" r="105" fill="none" stroke="#d8f3dc" stroke-width="16"/>
    <circle cx="200" cy="170" r="105" fill="none" stroke="url(#bio-ring1)" stroke-width="16" stroke-dasharray="440" stroke-dashoffset="132" stroke-linecap="round" transform="rotate(-90 200 170)"/>
    <circle cx="200" cy="170" r="82" fill="none" stroke="#f8f9fa" stroke-width="12"/>
    <circle cx="200" cy="170" r="82" fill="none" stroke="url(#bio-ring2)" stroke-width="12" stroke-dasharray="380" stroke-dashoffset="95" stroke-linecap="round" transform="rotate(-90 200 170)"/>
    <text x="200" y="155" font-size="11" fill="#1b1f1e" text-anchor="middle" font-family="Arial" opacity="0.6">Bio Age</text>
    <text x="200" y="185" font-size="38" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">34</text>
    <text x="200" y="205" font-size="11" fill="#c77dff" text-anchor="middle" font-family="Arial">Actual: 40</text>
    <rect x="130" y="285" width="140" height="28" rx="14" fill="#d8f3dc"/>
    <text x="200" y="304" font-size="12" fill="#2d6a4f" text-anchor="middle" font-family="Arial" font-weight="bold">6 years younger!</text>
    <rect x="380" y="50" width="185" height="80" rx="14" fill="#ffffff" stroke="#52b788" stroke-width="2"/>
    <text x="472" y="78" font-size="12" fill="#1b1f1e" text-anchor="middle" font-family="Arial">Chronological Age</text>
    <text x="472" y="110" font-size="30" fill="#c77dff" text-anchor="middle" font-family="Arial" font-weight="bold">40</text>
    <text x="380" y="160" font-size="11" fill="#1b1f1e" font-family="Arial" font-weight="bold">Health Markers</text>
    <rect x="380" y="175" width="180" height="10" rx="5" fill="#d8f3dc"/>
    <rect x="380" y="175" width="155" height="10" rx="5" fill="#52b788"/>
    <text x="380" y="200" font-size="9" fill="#2d6a4f" font-family="Arial">Cardiovascular</text>
    <text x="560" y="184" font-size="9" fill="#2d6a4f" font-family="Arial">86%</text>
    <rect x="380" y="210" width="180" height="10" rx="5" fill="#d8f3dc"/>
    <rect x="380" y="210" width="144" height="10" rx="5" fill="#90e0ef"/>
    <text x="380" y="235" font-size="9" fill="#2d6a4f" font-family="Arial">Metabolic</text>
    <text x="560" y="219" font-size="9" fill="#2d6a4f" font-family="Arial">80%</text>
    <rect x="380" y="245" width="180" height="10" rx="5" fill="#d8f3dc"/>
    <rect x="380" y="245" width="162" height="10" rx="5" fill="#ffd166"/>
    <text x="380" y="270" font-size="9" fill="#2d6a4f" font-family="Arial">Immune System</text>
    <text x="560" y="254" font-size="9" fill="#2d6a4f" font-family="Arial">90%</text>
    <rect x="380" y="280" width="180" height="10" rx="5" fill="#d8f3dc"/>
    <rect x="380" y="280" width="135" height="10" rx="5" fill="#c77dff"/>
    <text x="380" y="305" font-size="9" fill="#2d6a4f" font-family="Arial">Cognitive</text>
    <text x="560" y="289" font-size="9" fill="#2d6a4f" font-family="Arial">75%</text>
    <circle cx="70" cy="40" r="5" fill="#ffd166" opacity="0.5"/>
    <circle cx="540" cy="320" r="4" fill="#90e0ef" opacity="0.4"/>
  </svg>`
};
