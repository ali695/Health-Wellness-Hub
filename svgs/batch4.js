module.exports = {
  'protein-intake-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="proteinTitle">
    <title id="proteinTitle">Protein Intake Calculator</title>
    <defs>
      <linearGradient id="protBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#f0faf2"/>
      </linearGradient>
      <linearGradient id="protBar" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#52b788"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </linearGradient>
      <radialGradient id="protGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#52b788" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#52b788" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#protBg)"/>
    <circle cx="300" cy="170" r="140" fill="url(#protGlow)"/>
    <rect x="40" y="60" width="160" height="220" rx="16" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="120" y="95" text-anchor="middle" font-size="14" font-weight="bold" fill="#2d6a4f">Daily Protein</text>
    <ellipse cx="120" cy="150" rx="45" ry="30" fill="#f4a261" opacity="0.9"/>
    <ellipse cx="100" cy="145" rx="12" ry="16" fill="#ffd166"/>
    <ellipse cx="140" cy="145" rx="12" ry="16" fill="#ffd166"/>
    <rect x="80" y="185" width="80" height="12" rx="6" fill="#e9ecef"/>
    <rect x="80" y="185" width="60" height="12" rx="6" fill="url(#protBar)"/>
    <text x="120" y="220" text-anchor="middle" font-size="11" fill="#1b1f1e">Meat</text>
    <rect x="80" y="235" width="80" height="12" rx="6" fill="#e9ecef"/>
    <rect x="80" y="235" width="45" height="12" rx="6" fill="#52b788"/>
    <text x="120" y="265" text-anchor="middle" font-size="11" fill="#1b1f1e">Eggs</text>
    <circle cx="340" cy="140" r="80" fill="#ffffff" stroke="#52b788" stroke-width="6"/>
    <circle cx="340" cy="140" r="80" fill="none" stroke="#2d6a4f" stroke-width="6" stroke-dasharray="380 503" stroke-dashoffset="0" transform="rotate(-90 340 140)"/>
    <text x="340" y="133" text-anchor="middle" font-size="36" font-weight="bold" fill="#2d6a4f">150g</text>
    <text x="340" y="158" text-anchor="middle" font-size="14" fill="#52b788">Protein</text>
    <rect x="290" y="235" width="100" height="28" rx="14" fill="#d8f3dc"/>
    <text x="340" y="254" text-anchor="middle" font-size="12" font-weight="bold" fill="#2d6a4f">✓ On Target</text>
    <rect x="430" y="70" width="140" height="50" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <circle cx="455" cy="95" r="12" fill="#e76f51"/>
    <text x="455" y="99" text-anchor="middle" font-size="10" fill="#fff">🥩</text>
    <text x="510" y="92" text-anchor="middle" font-size="11" fill="#1b1f1e">Chicken</text>
    <text x="510" y="106" text-anchor="middle" font-size="10" fill="#52b788">31g/100g</text>
    <rect x="430" y="130" width="140" height="50" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <circle cx="455" cy="155" r="12" fill="#ffd166"/>
    <text x="510" y="152" text-anchor="middle" font-size="11" fill="#1b1f1e">Eggs</text>
    <text x="510" y="166" text-anchor="middle" font-size="10" fill="#52b788">13g/100g</text>
    <rect x="430" y="190" width="140" height="50" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <circle cx="455" cy="215" r="12" fill="#90e0ef"/>
    <text x="510" y="212" text-anchor="middle" font-size="11" fill="#1b1f1e">Fish</text>
    <text x="510" y="226" text-anchor="middle" font-size="10" fill="#52b788">26g/100g</text>
    <circle cx="50" cy="40" r="5" fill="#52b788" opacity="0.4"/>
    <circle cx="560" cy="300" r="4" fill="#f4a261" opacity="0.4"/>
    <circle cx="520" cy="40" r="6" fill="#d8f3dc"/>
    <rect x="430" y="260" width="140" height="50" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <circle cx="455" cy="285" r="12" fill="#52b788"/>
    <text x="510" y="282" text-anchor="middle" font-size="11" fill="#1b1f1e">Lentils</text>
    <text x="510" y="296" text-anchor="middle" font-size="10" fill="#52b788">9g/100g</text>
  </svg>`,

  'carb-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="carbTitle">
    <title id="carbTitle">Carbohydrate Calculator</title>
    <defs>
      <linearGradient id="carbBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fef3e2"/>
        <stop offset="100%" stop-color="#fff8f0"/>
      </linearGradient>
      <linearGradient id="carbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f4a261"/>
        <stop offset="100%" stop-color="#ffd166"/>
      </linearGradient>
      <radialGradient id="carbGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd166" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#ffd166" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#carbBg)"/>
    <circle cx="150" cy="170" r="120" fill="url(#carbGlow)"/>
    <path d="M80 180 Q120 100 160 180 Q120 160 80 180Z" fill="#f4a261" opacity="0.8"/>
    <path d="M90 175 Q120 115 150 175" fill="none" stroke="#e76f51" stroke-width="2"/>
    <path d="M100 170 Q120 130 140 170" fill="none" stroke="#e76f51" stroke-width="1.5"/>
    <ellipse cx="120" cy="195" rx="55" ry="15" fill="#f4a261" opacity="0.5"/>
    <text x="120" y="235" text-anchor="middle" font-size="12" fill="#1b1f1e">Whole Grains</text>
    <rect x="200" y="55" width="180" height="230" rx="16" fill="#ffffff" stroke="#ffd166" stroke-width="2"/>
    <text x="290" y="85" text-anchor="middle" font-size="15" font-weight="bold" fill="#1b1f1e">Daily Carbs</text>
    <circle cx="290" cy="155" r="60" fill="none" stroke="#e9ecef" stroke-width="10"/>
    <circle cx="290" cy="155" r="60" fill="none" stroke="url(#carbGrad)" stroke-width="10" stroke-dasharray="240 377" stroke-dashoffset="0" transform="rotate(-90 290 155)"/>
    <text x="290" y="150" text-anchor="middle" font-size="28" font-weight="bold" fill="#f4a261">225g</text>
    <text x="290" y="170" text-anchor="middle" font-size="12" fill="#1b1f1e">Carbs</text>
    <rect x="230" y="230" width="120" height="24" rx="12" fill="#ffd166" opacity="0.3"/>
    <text x="290" y="247" text-anchor="middle" font-size="11" font-weight="bold" fill="#f4a261">45% of Calories</text>
    <text x="290" y="270" text-anchor="middle" font-size="11" fill="#1b1f1e">900 kcal from carbs</text>
    <rect x="410" y="70" width="160" height="55" rx="10" fill="#ffffff" stroke="#ffd166" stroke-width="1"/>
    <rect x="425" y="85" width="50" height="10" rx="5" fill="#e9ecef"/>
    <rect x="425" y="85" width="40" height="10" rx="5" fill="#52b788"/>
    <text x="540" y="94" text-anchor="end" font-size="11" fill="#1b1f1e">Complex 80%</text>
    <rect x="410" y="140" width="160" height="55" rx="10" fill="#ffffff" stroke="#ffd166" stroke-width="1"/>
    <rect x="425" y="155" width="50" height="10" rx="5" fill="#e9ecef"/>
    <rect x="425" y="155" width="10" height="10" rx="5" fill="#f4a261"/>
    <text x="540" y="164" text-anchor="end" font-size="11" fill="#1b1f1e">Simple 20%</text>
    <rect x="410" y="210" width="160" height="55" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <rect x="425" y="225" width="50" height="10" rx="5" fill="#e9ecef"/>
    <rect x="425" y="225" width="30" height="10" rx="5" fill="#90e0ef"/>
    <text x="540" y="234" text-anchor="end" font-size="11" fill="#1b1f1e">Fiber 25g</text>
    <circle cx="55" cy="40" r="4" fill="#ffd166" opacity="0.5"/>
    <circle cx="560" cy="310" r="5" fill="#f4a261" opacity="0.4"/>
    <circle cx="480" cy="300" r="8" fill="#d8f3dc" opacity="0.5"/>
    <ellipse cx="480" cy="310" rx="30" ry="10" fill="#ffd166" opacity="0.15"/>
  </svg>`,

  'fat-intake-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fatTitle">
    <title id="fatTitle">Fat Intake Calculator</title>
    <defs>
      <linearGradient id="fatBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff8e8"/>
        <stop offset="100%" stop-color="#fef5d4"/>
      </linearGradient>
      <linearGradient id="fatDrop" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffd166"/>
        <stop offset="100%" stop-color="#f4a261"/>
      </linearGradient>
      <radialGradient id="fatGlow" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="#ffd166" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#ffd166" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#fatBg)"/>
    <circle cx="150" cy="150" r="100" fill="url(#fatGlow)"/>
    <path d="M150 60 Q110 120 110 160 Q110 200 150 210 Q190 200 190 160 Q190 120 150 60Z" fill="url(#fatDrop)" stroke="#f4a261" stroke-width="2"/>
    <ellipse cx="140" cy="130" rx="10" ry="15" fill="#ffffff" opacity="0.3"/>
    <text x="150" y="175" text-anchor="middle" font-size="22" font-weight="bold" fill="#ffffff">65g</text>
    <text x="150" y="195" text-anchor="middle" font-size="11" fill="#ffffff">Daily Fat</text>
    <text x="150" y="245" text-anchor="middle" font-size="12" fill="#1b1f1e">25% of calories</text>
    <rect x="240" y="50" width="160" height="70" rx="12" fill="#ffffff" stroke="#52b788" stroke-width="2"/>
    <circle cx="270" cy="85" r="14" fill="#d8f3dc"/>
    <text x="270" y="89" text-anchor="middle" font-size="12" fill="#2d6a4f">✓</text>
    <text x="340" y="78" text-anchor="middle" font-size="12" font-weight="bold" fill="#2d6a4f">Unsaturated</text>
    <text x="340" y="96" text-anchor="middle" font-size="11" fill="#52b788">44g — Healthy fats</text>
    <rect x="240" y="130" width="160" height="70" rx="12" fill="#ffffff" stroke="#f4a261" stroke-width="2"/>
    <circle cx="270" cy="165" r="14" fill="#fef3e2"/>
    <text x="270" y="169" text-anchor="middle" font-size="12" fill="#f4a261">!</text>
    <text x="340" y="158" text-anchor="middle" font-size="12" font-weight="bold" fill="#f4a261">Saturated</text>
    <text x="340" y="176" text-anchor="middle" font-size="11" fill="#f4a261">18g — Limit intake</text>
    <rect x="240" y="210" width="160" height="70" rx="12" fill="#ffffff" stroke="#e76f51" stroke-width="2"/>
    <circle cx="270" cy="245" r="14" fill="#fce4e4"/>
    <text x="270" y="249" text-anchor="middle" font-size="12" fill="#e76f51">✗</text>
    <text x="340" y="238" text-anchor="middle" font-size="12" font-weight="bold" fill="#e76f51">Trans Fat</text>
    <text x="340" y="256" text-anchor="middle" font-size="11" fill="#e76f51">0g — Avoid</text>
    <rect x="430" y="60" width="140" height="220" rx="14" fill="#ffffff" stroke="#ffd166" stroke-width="1.5"/>
    <text x="500" y="90" text-anchor="middle" font-size="13" font-weight="bold" fill="#1b1f1e">Fat Sources</text>
    <ellipse cx="460" cy="120" rx="14" ry="10" fill="#52b788"/>
    <text x="510" y="124" text-anchor="middle" font-size="11" fill="#1b1f1e">Avocado</text>
    <circle cx="460" cy="155" r="10" fill="#ffd166"/>
    <text x="510" y="159" text-anchor="middle" font-size="11" fill="#1b1f1e">Olive Oil</text>
    <ellipse cx="460" cy="190" rx="12" ry="8" fill="#f4a261"/>
    <text x="510" y="194" text-anchor="middle" font-size="11" fill="#1b1f1e">Nuts</text>
    <ellipse cx="460" cy="225" rx="14" ry="7" fill="#90e0ef"/>
    <text x="510" y="229" text-anchor="middle" font-size="11" fill="#1b1f1e">Fish</text>
    <circle cx="50" cy="310" r="4" fill="#ffd166" opacity="0.4"/>
    <circle cx="560" cy="30" r="5" fill="#f4a261" opacity="0.3"/>
    <rect x="440" y="250" width="120" height="20" rx="10" fill="#d8f3dc"/>
    <text x="500" y="264" text-anchor="middle" font-size="10" font-weight="bold" fill="#2d6a4f">585 kcal total</text>
  </svg>`,

  'fiber-intake-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fiberTitle">
    <title id="fiberTitle">Fiber Intake Calculator</title>
    <defs>
      <linearGradient id="fiberBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#f0faf2"/>
      </linearGradient>
      <linearGradient id="fiberBar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#2d6a4f"/>
        <stop offset="100%" stop-color="#52b788"/>
      </linearGradient>
      <radialGradient id="fiberGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#52b788" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#52b788" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#fiberBg)"/>
    <circle cx="130" cy="160" r="110" fill="url(#fiberGlow)"/>
    <path d="M110 200 Q100 150 120 120 Q130 100 140 120 Q150 90 160 120 Q170 100 170 130 Q180 160 170 200Z" fill="#52b788" opacity="0.8"/>
    <path d="M125 195 Q120 160 130 135 Q135 120 140 135 Q145 110 150 135 Q155 125 155 145 Q160 170 155 195Z" fill="#2d6a4f" opacity="0.6"/>
    <line x1="140" y1="200" x2="140" y2="240" stroke="#2d6a4f" stroke-width="3"/>
    <text x="140" y="265" text-anchor="middle" font-size="12" fill="#2d6a4f" font-weight="bold">Whole Foods</text>
    <rect x="230" y="55" width="160" height="230" rx="16" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="310" y="85" text-anchor="middle" font-size="14" font-weight="bold" fill="#2d6a4f">Daily Fiber</text>
    <circle cx="310" cy="155" r="55" fill="none" stroke="#e9ecef" stroke-width="8"/>
    <circle cx="310" cy="155" r="55" fill="none" stroke="url(#fiberBar)" stroke-width="8" stroke-dasharray="260 346" stroke-dashoffset="0" transform="rotate(-90 310 155)"/>
    <text x="310" y="150" text-anchor="middle" font-size="26" font-weight="bold" fill="#2d6a4f">28g</text>
    <text x="310" y="170" text-anchor="middle" font-size="11" fill="#52b788">of 30g goal</text>
    <rect x="260" y="225" width="100" height="24" rx="12" fill="#d8f3dc"/>
    <text x="310" y="241" text-anchor="middle" font-size="11" font-weight="bold" fill="#2d6a4f">93% Complete</text>
    <text x="310" y="270" text-anchor="middle" font-size="10" fill="#1b1f1e">Great progress!</text>
    <rect x="420" y="55" width="150" height="55" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <rect x="435" y="73" width="80" height="8" rx="4" fill="#e9ecef"/>
    <rect x="435" y="73" width="65" height="8" rx="4" fill="#52b788"/>
    <text x="435" y="96" font-size="10" fill="#1b1f1e">Soluble: 12g</text>
    <rect x="420" y="120" width="150" height="55" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <rect x="435" y="138" width="80" height="8" rx="4" fill="#e9ecef"/>
    <rect x="435" y="138" width="55" height="8" rx="4" fill="#2d6a4f"/>
    <text x="435" y="161" font-size="10" fill="#1b1f1e">Insoluble: 16g</text>
    <rect x="420" y="195" width="150" height="110" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="495" y="218" text-anchor="middle" font-size="12" font-weight="bold" fill="#2d6a4f">Top Sources</text>
    <text x="435" y="240" font-size="10" fill="#1b1f1e">🥦 Broccoli — 5g</text>
    <text x="435" y="258" font-size="10" fill="#1b1f1e">🫘 Lentils — 8g</text>
    <text x="435" y="276" font-size="10" fill="#1b1f1e">🍎 Apple — 4g</text>
    <text x="435" y="294" font-size="10" fill="#1b1f1e">🌾 Oats — 4g</text>
    <circle cx="50" cy="30" r="4" fill="#52b788" opacity="0.3"/>
    <circle cx="570" cy="320" r="5" fill="#2d6a4f" opacity="0.3"/>
  </svg>`,

  'vitamin-d-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="vitdTitle">
    <title id="vitdTitle">Vitamin D Calculator</title>
    <defs>
      <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd166"/>
        <stop offset="70%" stop-color="#f4a261"/>
        <stop offset="100%" stop-color="#f4a261" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="vitdBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#90e0ef" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#fef9e7"/>
      </linearGradient>
      <radialGradient id="sunRays" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stop-color="#ffd166" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#ffd166" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#vitdBg)"/>
    <circle cx="130" cy="110" r="80" fill="url(#sunRays)"/>
    <circle cx="130" cy="110" r="45" fill="url(#sunGrad)"/>
    <line x1="130" y1="45" x2="130" y2="25" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>
    <line x1="130" y1="175" x2="130" y2="195" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>
    <line x1="65" y1="110" x2="45" y2="110" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>
    <line x1="195" y1="110" x2="215" y2="110" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>
    <line x1="84" y1="64" x2="70" y2="50" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>
    <line x1="176" y1="156" x2="190" y2="170" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>
    <line x1="84" y1="156" x2="70" y2="170" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>
    <line x1="176" y1="64" x2="190" y2="50" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>
    <text x="130" y="115" text-anchor="middle" font-size="16" font-weight="bold" fill="#ffffff">Vit D</text>
    <rect x="50" y="220" width="160" height="30" rx="15" fill="#ffd166" opacity="0.3"/>
    <text x="130" y="240" text-anchor="middle" font-size="12" font-weight="bold" fill="#f4a261">☀️ Sunshine Vitamin</text>
    <rect x="250" y="45" width="170" height="250" rx="16" fill="#ffffff" stroke="#ffd166" stroke-width="2"/>
    <text x="335" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="#1b1f1e">Your Level</text>
    <rect x="310" y="90" width="50" height="150" rx="8" fill="#e9ecef"/>
    <rect x="310" y="130" width="50" height="110" rx="8" fill="#ffd166"/>
    <text x="285" y="100" text-anchor="end" font-size="9" fill="#e76f51">100+</text>
    <text x="285" y="140" text-anchor="end" font-size="9" fill="#52b788">50</text>
    <text x="285" y="175" text-anchor="end" font-size="9" fill="#f4a261">30</text>
    <text x="285" y="235" text-anchor="end" font-size="9" fill="#e76f51">0</text>
    <line x1="305" y1="140" x2="365" y2="140" stroke="#52b788" stroke-width="1" stroke-dasharray="4"/>
    <text x="335" y="260" text-anchor="middle" font-size="22" font-weight="bold" fill="#f4a261">45</text>
    <text x="335" y="280" text-anchor="middle" font-size="11" fill="#1b1f1e">ng/mL</text>
    <rect x="450" y="55" width="130" height="60" rx="10" fill="#ffffff" stroke="#52b788" stroke-width="1.5"/>
    <circle cx="475" cy="85" r="10" fill="#d8f3dc"/>
    <text x="475" y="89" text-anchor="middle" font-size="10" fill="#2d6a4f">☀</text>
    <text x="525" y="80" text-anchor="middle" font-size="11" fill="#1b1f1e">Sunlight</text>
    <text x="525" y="95" text-anchor="middle" font-size="10" fill="#52b788">15 min/day</text>
    <rect x="450" y="125" width="130" height="60" rx="10" fill="#ffffff" stroke="#f4a261" stroke-width="1.5"/>
    <circle cx="475" cy="155" r="10" fill="#fef3e2"/>
    <text x="475" y="159" text-anchor="middle" font-size="10" fill="#f4a261">💊</text>
    <text x="525" y="150" text-anchor="middle" font-size="11" fill="#1b1f1e">Supplement</text>
    <text x="525" y="165" text-anchor="middle" font-size="10" fill="#f4a261">1000 IU</text>
    <rect x="450" y="195" width="130" height="60" rx="10" fill="#ffffff" stroke="#90e0ef" stroke-width="1.5"/>
    <circle cx="475" cy="225" r="10" fill="#e0f7fa"/>
    <text x="475" y="229" text-anchor="middle" font-size="10" fill="#0077b6">🐟</text>
    <text x="525" y="220" text-anchor="middle" font-size="11" fill="#1b1f1e">Fatty Fish</text>
    <text x="525" y="235" text-anchor="middle" font-size="10" fill="#90e0ef">570 IU/srv</text>
    <rect x="450" y="270" width="130" height="30" rx="15" fill="#d8f3dc"/>
    <text x="515" y="290" text-anchor="middle" font-size="11" font-weight="bold" fill="#2d6a4f">✓ Sufficient</text>
  </svg>`,

  'iron-intake-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="ironTitle">
    <title id="ironTitle">Iron Intake Calculator</title>
    <defs>
      <linearGradient id="ironBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fce4e4"/>
        <stop offset="100%" stop-color="#fff5f5"/>
      </linearGradient>
      <linearGradient id="ironRed" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#e76f51"/>
        <stop offset="100%" stop-color="#c1121f"/>
      </linearGradient>
      <radialGradient id="ironGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#e76f51" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#e76f51" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#ironBg)"/>
    <circle cx="130" cy="150" r="100" fill="url(#ironGlow)"/>
    <circle cx="130" cy="130" r="50" fill="url(#ironRed)" opacity="0.9"/>
    <circle cx="115" cy="115" r="8" fill="#ffffff" opacity="0.3"/>
    <text x="130" y="125" text-anchor="middle" font-size="16" font-weight="bold" fill="#ffffff">Fe</text>
    <text x="130" y="145" text-anchor="middle" font-size="10" fill="#ffffff">Iron</text>
    <circle cx="90" cy="190" r="12" fill="#e76f51" opacity="0.5"/>
    <circle cx="170" cy="185" r="10" fill="#e76f51" opacity="0.4"/>
    <circle cx="110" cy="210" r="8" fill="#e76f51" opacity="0.3"/>
    <circle cx="155" cy="215" r="9" fill="#e76f51" opacity="0.35"/>
    <text x="130" y="255" text-anchor="middle" font-size="11" fill="#1b1f1e">Red Blood Cells</text>
    <rect x="240" y="50" width="150" height="240" rx="16" fill="#ffffff" stroke="#e76f51" stroke-width="2"/>
    <text x="315" y="80" text-anchor="middle" font-size="14" font-weight="bold" fill="#1b1f1e">Iron Level</text>
    <rect x="285" y="95" width="60" height="140" rx="8" fill="#e9ecef"/>
    <rect x="285" y="155" width="60" height="80" rx="8" fill="url(#ironRed)"/>
    <text x="265" y="105" text-anchor="end" font-size="9" fill="#e76f51">High</text>
    <text x="265" y="155" text-anchor="end" font-size="9" fill="#52b788">Normal</text>
    <text x="265" y="230" text-anchor="end" font-size="9" fill="#f4a261">Low</text>
    <line x1="280" y1="155" x2="350" y2="155" stroke="#52b788" stroke-width="1" stroke-dasharray="3"/>
    <text x="315" y="258" text-anchor="middle" font-size="22" font-weight="bold" fill="#e76f51">18mg</text>
    <text x="315" y="278" text-anchor="middle" font-size="11" fill="#1b1f1e">Daily Need</text>
    <rect x="420" y="50" width="150" height="60" rx="10" fill="#ffffff" stroke="#e76f51" stroke-width="1"/>
    <text x="495" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#e76f51">Heme Iron</text>
    <text x="495" y="95" text-anchor="middle" font-size="10" fill="#1b1f1e">Red meat, poultry</text>
    <rect x="420" y="120" width="150" height="60" rx="10" fill="#ffffff" stroke="#52b788" stroke-width="1"/>
    <text x="495" y="145" text-anchor="middle" font-size="11" font-weight="bold" fill="#52b788">Non-Heme Iron</text>
    <text x="495" y="165" text-anchor="middle" font-size="10" fill="#1b1f1e">Spinach, lentils</text>
    <rect x="420" y="195" width="150" height="95" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="495" y="218" text-anchor="middle" font-size="12" font-weight="bold" fill="#2d6a4f">Benefits</text>
    <text x="435" y="240" font-size="10" fill="#1b1f1e">🩸 O₂ Transport</text>
    <text x="435" y="258" font-size="10" fill="#1b1f1e">⚡ Energy</text>
    <text x="435" y="276" font-size="10" fill="#1b1f1e">🧠 Brain Function</text>
    <circle cx="50" cy="30" r="4" fill="#e76f51" opacity="0.3"/>
    <circle cx="560" cy="310" r="5" fill="#e76f51" opacity="0.25"/>
  </svg>`,

  'calcium-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="calciumTitle">
    <title id="calciumTitle">Calcium Calculator</title>
    <defs>
      <linearGradient id="caBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8f9fa"/>
        <stop offset="100%" stop-color="#e9ecef"/>
      </linearGradient>
      <linearGradient id="boneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#f8f9fa"/>
        <stop offset="100%" stop-color="#d8f3dc"/>
      </linearGradient>
      <radialGradient id="caGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#d8f3dc" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#d8f3dc" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#caBg)"/>
    <circle cx="130" cy="170" r="110" fill="url(#caGlow)"/>
    <rect x="105" y="60" width="50" height="180" rx="25" fill="url(#boneGrad)" stroke="#c9d1d9" stroke-width="2"/>
    <circle cx="130" cy="85" r="18" fill="url(#boneGrad)" stroke="#c9d1d9" stroke-width="2"/>
    <circle cx="130" cy="215" r="18" fill="url(#boneGrad)" stroke="#c9d1d9" stroke-width="2"/>
    <ellipse cx="115" cy="130" rx="12" ry="6" fill="url(#boneGrad)" stroke="#c9d1d9" stroke-width="1.5"/>
    <ellipse cx="145" cy="165" rx="12" ry="6" fill="url(#boneGrad)" stroke="#c9d1d9" stroke-width="1.5"/>
    <text x="130" y="145" text-anchor="middle" font-size="14" font-weight="bold" fill="#2d6a4f">Ca</text>
    <text x="130" y="270" text-anchor="middle" font-size="12" fill="#2d6a4f" font-weight="bold">Strong Bones</text>
    <rect x="230" y="55" width="160" height="240" rx="16" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="310" y="85" text-anchor="middle" font-size="14" font-weight="bold" fill="#1b1f1e">Daily Calcium</text>
    <circle cx="310" cy="155" r="55" fill="none" stroke="#e9ecef" stroke-width="8"/>
    <circle cx="310" cy="155" r="55" fill="none" stroke="#52b788" stroke-width="8" stroke-dasharray="276 346" stroke-dashoffset="0" transform="rotate(-90 310 155)"/>
    <text x="310" y="150" text-anchor="middle" font-size="24" font-weight="bold" fill="#2d6a4f">1000</text>
    <text x="310" y="170" text-anchor="middle" font-size="11" fill="#52b788">mg / day</text>
    <rect x="260" y="225" width="100" height="24" rx="12" fill="#d8f3dc"/>
    <text x="310" y="241" text-anchor="middle" font-size="11" font-weight="bold" fill="#2d6a4f">80% Met</text>
    <text x="310" y="275" text-anchor="middle" font-size="10" fill="#1b1f1e">Need 200mg more</text>
    <rect x="420" y="55" width="150" height="55" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="495" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#1b1f1e">🥛 Milk</text>
    <text x="495" y="96" text-anchor="middle" font-size="10" fill="#52b788">300mg / cup</text>
    <rect x="420" y="120" width="150" height="55" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="495" y="143" text-anchor="middle" font-size="11" font-weight="bold" fill="#1b1f1e">🧀 Cheese</text>
    <text x="495" y="161" text-anchor="middle" font-size="10" fill="#52b788">200mg / oz</text>
    <rect x="420" y="185" width="150" height="55" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="495" y="208" text-anchor="middle" font-size="11" font-weight="bold" fill="#1b1f1e">🥬 Kale</text>
    <text x="495" y="226" text-anchor="middle" font-size="10" fill="#52b788">180mg / cup</text>
    <rect x="420" y="250" width="150" height="55" rx="10" fill="#ffffff" stroke="#d8f3dc" stroke-width="1"/>
    <text x="495" y="273" text-anchor="middle" font-size="11" font-weight="bold" fill="#1b1f1e">🐟 Sardines</text>
    <text x="495" y="291" text-anchor="middle" font-size="10" fill="#52b788">325mg / can</text>
    <circle cx="50" cy="30" r="5" fill="#d8f3dc"/>
    <circle cx="570" cy="310" r="4" fill="#52b788" opacity="0.3"/>
  </svg>`,

  'caffeine-intake-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="caffTitle">
    <title id="caffTitle">Caffeine Intake Calculator</title>
    <defs>
      <linearGradient id="caffBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f5e6d3"/>
        <stop offset="100%" stop-color="#fdf6ee"/>
      </linearGradient>
      <linearGradient id="coffeeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#8B4513"/>
        <stop offset="100%" stop-color="#5C3317"/>
      </linearGradient>
      <radialGradient id="caffGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#f4a261" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="#f4a261" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#caffBg)"/>
    <circle cx="130" cy="160" r="100" fill="url(#caffGlow)"/>
    <rect x="85" y="110" width="90" height="100" rx="8" fill="#ffffff" stroke="#d4a574" stroke-width="3"/>
    <rect x="175" y="140" width="25" height="40" rx="12" fill="none" stroke="#d4a574" stroke-width="3"/>
    <rect x="95" y="125" width="70" height="60" rx="4" fill="url(#coffeeGrad)" opacity="0.8"/>
    <path d="M100 125 Q115 115 130 125 Q145 115 160 125" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.5"/>
    <path d="M115 100 Q118 85 115 75" fill="none" stroke="#c9b99a" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <path d="M130 95 Q133 78 130 65" fill="none" stroke="#c9b99a" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <path d="M145 100 Q148 85 145 75" fill="none" stroke="#c9b99a" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <text x="130" y="245" text-anchor="middle" font-size="12" fill="#5C3317" font-weight="bold">Coffee</text>
    <rect x="250" y="45" width="160" height="250" rx="16" fill="#ffffff" stroke="#d4a574" stroke-width="2"/>
    <text x="330" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="#1b1f1e">Daily Caffeine</text>
    <path d="M330 105 L290 200 L370 200 Z" fill="none" stroke="#e9ecef" stroke-width="8" stroke-linejoin="round"/>
    <rect x="295" y="160" width="70" height="40" fill="#f4a261" opacity="0.7" rx="4"/>
    <text x="330" y="145" text-anchor="middle" font-size="9" fill="#52b788">Safe</text>
    <text x="330" y="210" text-anchor="middle" font-size="9" fill="#e76f51">Over</text>
    <text x="330" y="240" text-anchor="middle" font-size="24" font-weight="bold" fill="#5C3317">240mg</text>
    <text x="330" y="260" text-anchor="middle" font-size="11" fill="#1b1f1e">of 400mg limit</text>
    <rect x="280" y="270" width="100" height="20" rx="10" fill="#d8f3dc"/>
    <text x="330" y="284" text-anchor="middle" font-size="10" font-weight="bold" fill="#2d6a4f">✓ Within Safe Range</text>
    <rect x="440" y="55" width="130" height="50" rx="10" fill="#ffffff" stroke="#d4a574" stroke-width="1"/>
    <text x="505" y="75" text-anchor="middle" font-size="11" font-weight="bold" fill="#5C3317">☕ Coffee</text>
    <text x="505" y="93" text-anchor="middle" font-size="10" fill="#f4a261">95mg / cup</text>
    <rect x="440" y="115" width="130" height="50" rx="10" fill="#ffffff" stroke="#52b788" stroke-width="1"/>
    <text x="505" y="135" text-anchor="middle" font-size="11" font-weight="bold" fill="#2d6a4f">🍵 Green Tea</text>
    <text x="505" y="153" text-anchor="middle" font-size="10" fill="#52b788">28mg / cup</text>
    <rect x="440" y="175" width="130" height="50" rx="10" fill="#ffffff" stroke="#e76f51" stroke-width="1"/>
    <text x="505" y="195" text-anchor="middle" font-size="11" font-weight="bold" fill="#e76f51">⚡ Energy Drink</text>
    <text x="505" y="213" text-anchor="middle" font-size="10" fill="#e76f51">160mg / can</text>
    <rect x="440" y="235" width="130" height="50" rx="10" fill="#ffffff" stroke="#1b1f1e" stroke-width="1"/>
    <text x="505" y="255" text-anchor="middle" font-size="11" font-weight="bold" fill="#1b1f1e">🍫 Dark Choc</text>
    <text x="505" y="273" text-anchor="middle" font-size="10" fill="#1b1f1e">12mg / oz</text>
    <circle cx="50" cy="310" r="4" fill="#d4a574" opacity="0.4"/>
    <circle cx="560" cy="30" r="5" fill="#f4a261" opacity="0.3"/>
  </svg>`,

  'alcohol-unit-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="alcTitle">
    <title id="alcTitle">Alcohol Unit Calculator</title>
    <defs>
      <linearGradient id="alcBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f5f0ff"/>
        <stop offset="100%" stop-color="#faf5ff"/>
      </linearGradient>
      <linearGradient id="wineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#c77dff"/>
        <stop offset="100%" stop-color="#7b2cbf"/>
      </linearGradient>
      <linearGradient id="beerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffd166"/>
        <stop offset="100%" stop-color="#f4a261"/>
      </linearGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#alcBg)"/>
    <path d="M90 200 L100 100 L120 80 L140 100 L150 200Z" fill="none" stroke="#c9b99a" stroke-width="2.5"/>
    <path d="M100 200 L108 130 L130 130 L138 200Z" fill="url(#wineGrad)" opacity="0.7"/>
    <ellipse cx="120" cy="130" rx="22" ry="5" fill="#c77dff" opacity="0.5"/>
    <line x1="120" y1="200" x2="120" y2="220" stroke="#c9b99a" stroke-width="2.5"/>
    <ellipse cx="120" cy="225" rx="25" ry="6" fill="none" stroke="#c9b99a" stroke-width="2"/>
    <text x="120" y="260" text-anchor="middle" font-size="10" fill="#7b2cbf">Wine 175ml</text>
    <text x="120" y="275" text-anchor="middle" font-size="10" font-weight="bold" fill="#c77dff">2.1 units</text>
    <rect x="210" y="120" width="50" height="90" rx="6" fill="none" stroke="#c9b99a" stroke-width="2.5"/>
    <rect x="215" y="140" width="40" height="65" rx="4" fill="url(#beerGrad)" opacity="0.7"/>
    <rect x="208" y="115" width="54" height="10" rx="3" fill="#c9b99a"/>
    <ellipse cx="235" cy="145" rx="16" ry="3" fill="#ffffff" opacity="0.3"/>
    <text x="235" y="250" text-anchor="middle" font-size="10" fill="#f4a261">Beer 330ml</text>
    <text x="235" y="265" text-anchor="middle" font-size="10" font-weight="bold" fill="#f4a261">1.7 units</text>
    <rect x="320" y="55" width="155" height="230" rx="16" fill="#ffffff" stroke="#c77dff" stroke-width="2"/>
    <text x="397" y="82" text-anchor="middle" font-size="14" font-weight="bold" fill="#1b1f1e">Weekly Units</text>
    <circle cx="397" cy="150" r="50" fill="none" stroke="#e9ecef" stroke-width="8"/>
    <circle cx="397" cy="150" r="50" fill="none" stroke="#c77dff" stroke-width="8" stroke-dasharray="210 314" stroke-dashoffset="0" transform="rotate(-90 397 150)"/>
    <text x="397" y="147" text-anchor="middle" font-size="24" font-weight="bold" fill="#7b2cbf">9.4</text>
    <text x="397" y="165" text-anchor="middle" font-size="10" fill="#1b1f1e">of 14 units</text>
    <rect x="347" y="215" width="100" height="22" rx="11" fill="#d8f3dc"/>
    <text x="397" y="230" text-anchor="middle" font-size="10" font-weight="bold" fill="#2d6a4f">✓ Within Limit</text>
    <text x="397" y="268" text-anchor="middle" font-size="10" fill="#1b1f1e">4.6 units remaining</text>
    <rect x="500" y="60" width="80" height="40" rx="8" fill="#d8f3dc"/>
    <text x="540" y="76" text-anchor="middle" font-size="9" fill="#2d6a4f">Low Risk</text>
    <text x="540" y="92" text-anchor="middle" font-size="9" fill="#52b788">≤14/week</text>
    <rect x="500" y="110" width="80" height="40" rx="8" fill="#fef3e2"/>
    <text x="540" y="126" text-anchor="middle" font-size="9" fill="#f4a261">Moderate</text>
    <text x="540" y="142" text-anchor="middle" font-size="9" fill="#f4a261">15-21/wk</text>
    <rect x="500" y="160" width="80" height="40" rx="8" fill="#fce4e4"/>
    <text x="540" y="176" text-anchor="middle" font-size="9" fill="#e76f51">High Risk</text>
    <text x="540" y="192" text-anchor="middle" font-size="9" fill="#e76f51">22+/week</text>
    <circle cx="50" cy="30" r="4" fill="#c77dff" opacity="0.3"/>
    <circle cx="560" cy="310" r="5" fill="#ffd166" opacity="0.3"/>
    <circle cx="45" cy="310" r="3" fill="#ffd166" opacity="0.3"/>
  </svg>`,

  'smoking-cost-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="smokeTitle">
    <title id="smokeTitle">Smoking Cost Calculator</title>
    <defs>
      <linearGradient id="smokeBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8f9fa"/>
        <stop offset="100%" stop-color="#e9ecef"/>
      </linearGradient>
      <linearGradient id="cigGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f5f0e1"/>
        <stop offset="70%" stop-color="#f5f0e1"/>
        <stop offset="70%" stop-color="#f4a261"/>
        <stop offset="100%" stop-color="#e76f51"/>
      </linearGradient>
      <linearGradient id="moneyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#52b788"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </linearGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#smokeBg)"/>
    <rect x="50" y="130" width="140" height="16" rx="4" fill="url(#cigGrad)" stroke="#c9b99a" stroke-width="1"/>
    <line x1="50" y1="133" x2="50" y2="143" stroke="#c9b99a" stroke-width="0.5"/>
    <circle cx="48" cy="138" r="3" fill="#e76f51" opacity="0.8"/>
    <path d="M45 125 Q50 110 45 95" fill="none" stroke="#c9b99a" stroke-width="1.5" opacity="0.4"/>
    <path d="M50 125 Q55 105 48 85" fill="none" stroke="#c9b99a" stroke-width="1.5" opacity="0.3"/>
    <line x1="55" y1="138" x2="190" y2="138" stroke="#e76f51" stroke-width="0.5" stroke-dasharray="2" opacity="0.3"/>
    <circle cx="120" cy="138" r="40" fill="none" stroke="#e76f51" stroke-width="2" opacity="0.5"/>
    <line x1="90" y1="108" x2="150" y2="168" stroke="#e76f51" stroke-width="3" stroke-linecap="round"/>
    <text x="120" y="200" text-anchor="middle" font-size="13" font-weight="bold" fill="#e76f51">Quit & Save</text>
    <rect x="230" y="40" width="170" height="260" rx="16" fill="#ffffff" stroke="#52b788" stroke-width="2"/>
    <text x="315" y="70" text-anchor="middle" font-size="14" font-weight="bold" fill="#2d6a4f">Money Saved</text>
    <circle cx="315" cy="120" r="35" fill="url(#moneyGrad)"/>
    <text x="315" y="117" text-anchor="middle" font-size="18" font-weight="bold" fill="#ffffff">$</text>
    <text x="315" y="135" text-anchor="middle" font-size="10" fill="#d8f3dc">savings</text>
    <rect x="250" y="168" width="130" height="35" rx="8" fill="#d8f3dc"/>
    <text x="315" y="183" text-anchor="middle" font-size="11" fill="#1b1f1e">Monthly</text>
    <text x="315" y="197" text-anchor="middle" font-size="14" font-weight="bold" fill="#2d6a4f">$330</text>
    <rect x="250" y="210" width="130" height="35" rx="8" fill="#d8f3dc"/>
    <text x="315" y="225" text-anchor="middle" font-size="11" fill="#1b1f1e">Yearly</text>
    <text x="315" y="239" text-anchor="middle" font-size="14" font-weight="bold" fill="#2d6a4f">$3,960</text>
    <rect x="250" y="252" width="130" height="35" rx="8" fill="#52b788"/>
    <text x="315" y="267" text-anchor="middle" font-size="11" fill="#ffffff">10 Years</text>
    <text x="315" y="281" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">$39,600</text>
    <rect x="430" y="50" width="145" height="120" rx="12" fill="#ffffff" stroke="#d8f3dc" stroke-width="1.5"/>
    <text x="502" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#2d6a4f">Health Timeline</text>
    <text x="445" y="100" font-size="10" fill="#52b788">20min</text>
    <text x="495" y="100" font-size="9" fill="#1b1f1e">BP normalizes</text>
    <text x="445" y="118" font-size="10" fill="#52b788">48hr</text>
    <text x="495" y="118" font-size="9" fill="#1b1f1e">Taste returns</text>
    <text x="445" y="136" font-size="10" fill="#52b788">1yr</text>
    <text x="495" y="136" font-size="9" fill="#1b1f1e">Heart risk ½</text>
    <text x="445" y="154" font-size="10" fill="#52b788">10yr</text>
    <text x="495" y="154" font-size="9" fill="#1b1f1e">Cancer risk ½</text>
    <rect x="430" y="185" width="145" height="80" rx="12" fill="#ffffff" stroke="#e76f51" stroke-width="1.5"/>
    <text x="502" y="210" text-anchor="middle" font-size="12" font-weight="bold" fill="#e76f51">Cost Per Pack</text>
    <text x="502" y="235" text-anchor="middle" font-size="22" font-weight="bold" fill="#e76f51">$11</text>
    <text x="502" y="255" text-anchor="middle" font-size="10" fill="#1b1f1e">avg. US price</text>
    <circle cx="55" cy="30" r="4" fill="#52b788" opacity="0.3"/>
    <circle cx="555" cy="310" r="5" fill="#e76f51" opacity="0.3"/>
    <rect x="430" y="280" width="145" height="35" rx="10" fill="#d8f3dc"/>
    <text x="502" y="302" text-anchor="middle" font-size="11" font-weight="bold" fill="#2d6a4f">🫁 Breathe Free</text>
  </svg>`
};
