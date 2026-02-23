module.exports = {
  'bmi-calculator': `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="bmi-title" class="calc-hero-svg">
    <title id="bmi-title">BMI Body Mass Index Calculator</title>
    <defs>
      <linearGradient id="bmi-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0faf2"/>
        <stop offset="100%" stop-color="#d8f3dc"/>
      </linearGradient>
      <linearGradient id="bmi-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#52b788"/>
      </linearGradient>
      <radialGradient id="bmi-gauge-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#bmi-bg)"/>
    <rect x="20" y="20" width="560" height="300" rx="16" fill="#ffffff" opacity="0.6"/>
    <ellipse cx="120" cy="170" rx="45" ry="70" fill="url(#bmi-body)" stroke="#2d6a4f" stroke-width="2"/>
    <circle cx="120" cy="85" r="22" fill="url(#bmi-body)" stroke="#2d6a4f" stroke-width="2"/>
    <line x1="75" y1="140" x2="60" y2="185" stroke="#2d6a4f" stroke-width="3" stroke-linecap="round"/>
    <line x1="165" y1="140" x2="180" y2="185" stroke="#2d6a4f" stroke-width="3" stroke-linecap="round"/>
    <line x1="105" y1="235" x2="95" y2="290" stroke="#2d6a4f" stroke-width="3" stroke-linecap="round"/>
    <line x1="135" y1="235" x2="145" y2="290" stroke="#2d6a4f" stroke-width="3" stroke-linecap="round"/>
    <line x1="55" y1="80" x2="55" y2="290" stroke="#1b1f1e" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="50" y1="80" x2="60" y2="80" stroke="#1b1f1e" stroke-width="1.5"/>
    <line x1="50" y1="185" x2="60" y2="185" stroke="#1b1f1e" stroke-width="1.5"/>
    <line x1="50" y1="290" x2="60" y2="290" stroke="#1b1f1e" stroke-width="1.5"/>
    <path d="M230,220 A120,120 0 0,1 470,220" fill="none" stroke="#90e0ef" stroke-width="18" stroke-linecap="round"/>
    <path d="M260,208 A100,100 0 0,1 350,148" fill="none" stroke="#52b788" stroke-width="18" stroke-linecap="round"/>
    <path d="M355,148 A100,100 0 0,1 420,178" fill="none" stroke="#ffd166" stroke-width="18" stroke-linecap="round"/>
    <path d="M425,182 A100,100 0 0,1 460,215" fill="none" stroke="#e76f51" stroke-width="18" stroke-linecap="round"/>
    <line x1="350" y1="220" x2="320" y2="165" stroke="#1b1f1e" stroke-width="3" stroke-linecap="round"/>
    <circle cx="350" cy="220" r="8" fill="#1b1f1e"/>
    <circle cx="350" cy="220" r="4" fill="#ffffff"/>
    <text x="350" y="210" text-anchor="middle" font-size="28" font-weight="bold" fill="#1b1f1e">22.5</text>
    <rect x="310" y="245" width="80" height="26" rx="13" fill="#52b788"/>
    <text x="350" y="263" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">Healthy Weight</text>
    <rect x="500" y="100" width="80" height="20" rx="4" fill="#90e0ef"/>
    <text x="540" y="114" text-anchor="middle" font-size="9" fill="#1b1f1e">&lt;18.5</text>
    <rect x="500" y="125" width="80" height="20" rx="4" fill="#52b788"/>
    <text x="540" y="139" text-anchor="middle" font-size="9" fill="#ffffff">18.5-24.9</text>
    <rect x="500" y="150" width="80" height="20" rx="4" fill="#ffd166"/>
    <text x="540" y="164" text-anchor="middle" font-size="9" fill="#1b1f1e">25-29.9</text>
    <rect x="500" y="175" width="80" height="20" rx="4" fill="#e76f51"/>
    <text x="540" y="189" text-anchor="middle" font-size="9" fill="#ffffff">30+</text>
    <circle cx="200" cy="50" r="3" fill="#52b788" opacity="0.5"/>
    <circle cx="480" cy="280" r="4" fill="#f4a261" opacity="0.4"/>
    <circle cx="520" cy="300" r="2" fill="#52b788" opacity="0.3"/>
  </svg>`,

  'calorie-calculator': `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="cal-title" class="calc-hero-svg">
    <title id="cal-title">Daily Calorie Calculator</title>
    <defs>
      <linearGradient id="cal-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0faf2"/>
        <stop offset="100%" stop-color="#d8f3dc"/>
      </linearGradient>
      <linearGradient id="cal-plate" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#f8f9fa"/>
      </linearGradient>
      <radialGradient id="cal-veg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#52b788"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#cal-bg)"/>
    <circle cx="200" cy="175" r="110" fill="url(#cal-plate)" stroke="#e0e0e0" stroke-width="3"/>
    <circle cx="200" cy="175" r="95" fill="none" stroke="#f8f9fa" stroke-width="1"/>
    <path d="M200,80 L200,175 L280,130 Z" fill="url(#cal-veg)" opacity="0.9"/>
    <path d="M200,80 L280,130 L280,200 L200,175 Z" fill="#f4a261" opacity="0.85"/>
    <path d="M200,175 L280,200 L240,270 L160,270 Z" fill="#ffd166" opacity="0.85"/>
    <path d="M200,175 L160,270 L120,200 L200,80 Z" fill="#52b788" opacity="0.7"/>
    <ellipse cx="170" cy="130" rx="8" ry="12" fill="#2d6a4f" opacity="0.6"/>
    <ellipse cx="185" cy="120" rx="6" ry="10" fill="#2d6a4f" opacity="0.5"/>
    <rect x="75" y="120" width="4" height="130" rx="2" fill="#adb5bd"/>
    <line x1="65" y1="125" x2="85" y2="125" stroke="#adb5bd" stroke-width="2"/>
    <line x1="70" y1="130" x2="80" y2="130" stroke="#adb5bd" stroke-width="1.5"/>
    <rect x="310" y="110" width="4" height="130" rx="2" fill="#adb5bd"/>
    <circle cx="312" cy="108" r="6" fill="#adb5bd"/>
    <rect x="400" y="80" width="170" height="100" rx="14" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <path d="M475,95 C475,85 495,85 495,95 L485,115 L475,95 Z" fill="#f4a261"/>
    <text x="485" y="140" text-anchor="middle" font-size="32" font-weight="bold" fill="#2d6a4f">2,100</text>
    <text x="485" y="160" text-anchor="middle" font-size="13" fill="#6c757d">kcal / day</text>
    <rect x="380" y="210" width="120" height="12" rx="6" fill="#e9ecef"/>
    <rect x="380" y="210" width="85" height="12" rx="6" fill="#52b788"/>
    <text x="510" y="220" font-size="10" fill="#1b1f1e">Protein</text>
    <rect x="380" y="230" width="120" height="12" rx="6" fill="#e9ecef"/>
    <rect x="380" y="230" width="95" height="12" rx="6" fill="#f4a261"/>
    <text x="510" y="240" font-size="10" fill="#1b1f1e">Carbs</text>
    <rect x="380" y="250" width="120" height="12" rx="6" fill="#e9ecef"/>
    <rect x="380" y="250" width="55" height="12" rx="6" fill="#e76f51"/>
    <text x="510" y="260" font-size="10" fill="#1b1f1e">Fat</text>
    <circle cx="350" cy="50" r="8" fill="#52b788" opacity="0.15"/>
    <circle cx="140" cy="40" r="5" fill="#f4a261" opacity="0.2"/>
    <path d="M100,300 Q105,290 110,300" stroke="#52b788" stroke-width="1.5" fill="none" opacity="0.4"/>
    <circle cx="530" cy="300" r="4" fill="#ffd166" opacity="0.3"/>
  </svg>`,

  'macro-calculator': `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="macro-title" class="calc-hero-svg">
    <title id="macro-title">Macronutrient Calculator</title>
    <defs>
      <linearGradient id="macro-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0faf2"/>
        <stop offset="100%" stop-color="#d8f3dc"/>
      </linearGradient>
      <linearGradient id="macro-protein" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#52b788"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </linearGradient>
      <linearGradient id="macro-carbs" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f4a261"/>
        <stop offset="100%" stop-color="#e76f51"/>
      </linearGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#macro-bg)"/>
    <circle cx="260" cy="165" r="105" fill="#e9ecef" opacity="0.5"/>
    <path d="M260,60 A105,105 0 0,1 355,200 L260,165 Z" fill="url(#macro-protein)"/>
    <path d="M355,200 A105,105 0 0,1 155,200 L260,165 Z" fill="url(#macro-carbs)"/>
    <path d="M155,200 A105,105 0 0,1 260,60 L260,165 Z" fill="#ffd166"/>
    <circle cx="260" cy="165" r="50" fill="#ffffff"/>
    <text x="260" y="158" text-anchor="middle" font-size="11" fill="#6c757d">Daily</text>
    <text x="260" y="178" text-anchor="middle" font-size="14" font-weight="bold" fill="#1b1f1e">Macros</text>
    <rect x="430" y="55" width="140" height="60" rx="12" fill="#ffffff" stroke="#52b788" stroke-width="2"/>
    <circle cx="455" cy="85" r="14" fill="#d8f3dc"/>
    <ellipse cx="455" cy="82" rx="8" ry="6" fill="#f8f9fa" stroke="#52b788" stroke-width="1"/>
    <text x="500" y="78" font-size="20" font-weight="bold" fill="#2d6a4f">150g</text>
    <text x="500" y="98" font-size="12" fill="#52b788">Protein</text>
    <rect x="430" y="130" width="140" height="60" rx="12" fill="#ffffff" stroke="#f4a261" stroke-width="2"/>
    <circle cx="455" cy="160" r="14" fill="#ffecd2"/>
    <rect x="448" y="154" width="14" height="10" rx="3" fill="#f4a261"/>
    <text x="500" y="153" font-size="20" font-weight="bold" fill="#e76f51">225g</text>
    <text x="500" y="173" font-size="12" fill="#f4a261">Carbs</text>
    <rect x="430" y="205" width="140" height="60" rx="12" fill="#ffffff" stroke="#ffd166" stroke-width="2"/>
    <circle cx="455" cy="235" r="14" fill="#fff3cd"/>
    <path d="M455,224 Q458,230 455,240 Q452,230 455,224 Z" fill="#ffd166"/>
    <text x="500" y="228" font-size="20" font-weight="bold" fill="#c77dff">65g</text>
    <text x="500" y="248" font-size="12" fill="#ffd166">Fat</text>
    <rect x="170" y="290" width="180" height="30" rx="15" fill="#ffffff" stroke="#e9ecef" stroke-width="1"/>
    <path d="M195,298 C195,292 207,292 207,298 L201,312 L195,298 Z" fill="#f4a261" transform="scale(0.7) translate(100,140)"/>
    <text x="260" y="310" text-anchor="middle" font-size="14" font-weight="bold" fill="#1b1f1e">2,000 kcal</text>
    <circle cx="80" cy="60" r="4" fill="#52b788" opacity="0.3"/>
    <circle cx="60" cy="280" r="3" fill="#f4a261" opacity="0.3"/>
    <circle cx="390" cy="300" r="5" fill="#ffd166" opacity="0.25"/>
  </svg>`,

  'body-fat-calculator': `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="bf-title" class="calc-hero-svg">
    <title id="bf-title">Body Fat Percentage Calculator</title>
    <defs>
      <linearGradient id="bf-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0faf2"/>
        <stop offset="100%" stop-color="#d8f3dc"/>
      </linearGradient>
      <linearGradient id="bf-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#52b788"/>
      </linearGradient>
      <radialGradient id="bf-ring" cx="50%" cy="50%" r="50%">
        <stop offset="70%" stop-color="#52b788"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#bf-bg)"/>
    <rect x="30" y="30" width="180" height="280" rx="14" fill="#ffffff" opacity="0.7"/>
    <ellipse cx="120" cy="130" rx="35" ry="55" fill="url(#bf-body)" stroke="#2d6a4f" stroke-width="1.5"/>
    <circle cx="120" cy="65" r="18" fill="url(#bf-body)" stroke="#2d6a4f" stroke-width="1.5"/>
    <line x1="85" y1="105" x2="65" y2="145" stroke="#2d6a4f" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="155" y1="105" x2="175" y2="145" stroke="#2d6a4f" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="105" y1="180" x2="95" y2="240" stroke="#2d6a4f" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="135" y1="180" x2="145" y2="240" stroke="#2d6a4f" stroke-width="2.5" stroke-linecap="round"/>
    <text x="120" y="265" text-anchor="middle" font-size="9" fill="#6c757d">Arms: 12%</text>
    <text x="120" y="280" text-anchor="middle" font-size="9" fill="#6c757d">Core: 22%</text>
    <text x="120" y="295" text-anchor="middle" font-size="9" fill="#6c757d">Legs: 14%</text>
    <circle cx="340" cy="150" r="85" fill="none" stroke="#e9ecef" stroke-width="16"/>
    <circle cx="340" cy="150" r="85" fill="none" stroke="url(#bf-ring)" stroke-width="16" stroke-dasharray="96 437" stroke-dashoffset="-109" stroke-linecap="round"/>
    <text x="340" y="142" text-anchor="middle" font-size="38" font-weight="bold" fill="#1b1f1e">18%</text>
    <text x="340" y="165" text-anchor="middle" font-size="14" fill="#6c757d">Body Fat</text>
    <rect x="300" y="250" width="80" height="24" rx="12" fill="#52b788"/>
    <text x="340" y="267" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Athletic</text>
    <rect x="470" y="80" width="110" height="180" rx="10" fill="#ffffff" stroke="#e9ecef" stroke-width="1"/>
    <circle cx="487" cy="105" r="5" fill="#e76f51"/>
    <text x="500" y="109" font-size="10" fill="#1b1f1e">Essential 3-5%</text>
    <circle cx="487" cy="130" r="5" fill="#52b788"/>
    <text x="500" y="134" font-size="10" fill="#1b1f1e">Athletic 6-13%</text>
    <rect x="470" y="120" width="110" height="22" rx="4" fill="#52b788" opacity="0.1"/>
    <circle cx="487" cy="155" r="5" fill="#ffd166"/>
    <text x="500" y="159" font-size="10" fill="#1b1f1e">Fitness 14-17%</text>
    <circle cx="487" cy="180" r="5" fill="#f4a261"/>
    <text x="500" y="184" font-size="10" fill="#1b1f1e">Average 18-25%</text>
    <circle cx="487" cy="205" r="5" fill="#e76f51"/>
    <text x="500" y="209" font-size="10" fill="#1b1f1e">Obese 25%+</text>
    <circle cx="250" cy="30" r="3" fill="#52b788" opacity="0.4"/>
    <circle cx="560" cy="290" r="4" fill="#f4a261" opacity="0.3"/>
  </svg>`,

  'ideal-weight-calculator': `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="iw-title" class="calc-hero-svg">
    <title id="iw-title">Ideal Weight Calculator</title>
    <defs>
      <linearGradient id="iw-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0faf2"/>
        <stop offset="100%" stop-color="#d8f3dc"/>
      </linearGradient>
      <linearGradient id="iw-base" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2d6a4f"/>
        <stop offset="100%" stop-color="#1b4332"/>
      </linearGradient>
      <linearGradient id="iw-pan" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffd166"/>
        <stop offset="100%" stop-color="#f4a261"/>
      </linearGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#iw-bg)"/>
    <circle cx="300" cy="170" r="130" fill="#d8f3dc" opacity="0.4"/>
    <rect x="270" y="260" width="60" height="15" rx="4" fill="url(#iw-base)"/>
    <rect x="285" y="200" width="30" height="65" rx="3" fill="#2d6a4f"/>
    <circle cx="300" cy="195" r="12" fill="#2d6a4f"/>
    <line x1="300" y1="195" x2="185" y2="170" stroke="#2d6a4f" stroke-width="4" stroke-linecap="round"/>
    <line x1="300" y1="195" x2="415" y2="170" stroke="#2d6a4f" stroke-width="4" stroke-linecap="round"/>
    <line x1="185" y1="170" x2="155" y2="200" stroke="#6c757d" stroke-width="1.5"/>
    <line x1="185" y1="170" x2="215" y2="200" stroke="#6c757d" stroke-width="1.5"/>
    <line x1="155" y1="200" x2="215" y2="200" stroke="#6c757d" stroke-width="1.5"/>
    <path d="M150,200 Q185,215 220,200" fill="url(#iw-pan)" stroke="#e9ecef" stroke-width="1"/>
    <line x1="415" y1="170" x2="385" y2="200" stroke="#6c757d" stroke-width="1.5"/>
    <line x1="415" y1="170" x2="445" y2="200" stroke="#6c757d" stroke-width="1.5"/>
    <line x1="385" y1="200" x2="445" y2="200" stroke="#6c757d" stroke-width="1.5"/>
    <path d="M380,200 Q415,215 450,200" fill="url(#iw-pan)" stroke="#e9ecef" stroke-width="1"/>
    <ellipse cx="185" cy="190" rx="15" ry="20" fill="#52b788" opacity="0.5"/>
    <text x="185" y="230" text-anchor="middle" font-size="10" fill="#1b1f1e">You: 75kg</text>
    <circle cx="415" cy="185" r="12" fill="#52b788"/>
    <path d="M409,185 L413,190 L423,178" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M410,188 L415,193 Q418,190 420,188" fill="none" stroke="#e76f51" stroke-width="1.5"/>
    <text x="415" y="230" text-anchor="middle" font-size="10" fill="#1b1f1e">Ideal: 70-80kg</text>
    <rect x="55" y="60" width="16" height="200" rx="3" fill="#ffffff" stroke="#adb5bd" stroke-width="1"/>
    <line x1="55" y1="80" x2="71" y2="80" stroke="#adb5bd" stroke-width="0.5"/>
    <line x1="55" y1="120" x2="71" y2="120" stroke="#adb5bd" stroke-width="0.5"/>
    <line x1="55" y1="160" x2="71" y2="160" stroke="#adb5bd" stroke-width="0.5"/>
    <line x1="55" y1="200" x2="71" y2="200" stroke="#adb5bd" stroke-width="0.5"/>
    <polygon points="73,160 80,155 80,165" fill="#e76f51"/>
    <text x="84" y="164" font-size="9" fill="#1b1f1e">175cm</text>
    <rect x="490" y="80" width="90" height="100" rx="8" fill="#ffffff" stroke="#e9ecef" stroke-width="1"/>
    <rect x="495" y="90" width="80" height="16" rx="3" fill="#90e0ef" opacity="0.5"/>
    <text x="535" y="102" text-anchor="middle" font-size="8" fill="#1b1f1e">&lt;18.5 Under</text>
    <rect x="495" y="110" width="80" height="16" rx="3" fill="#52b788" opacity="0.4"/>
    <text x="535" y="122" text-anchor="middle" font-size="8" font-weight="bold" fill="#2d6a4f">18.5-24.9 ✓</text>
    <rect x="495" y="130" width="80" height="16" rx="3" fill="#ffd166" opacity="0.4"/>
    <text x="535" y="142" text-anchor="middle" font-size="8" fill="#1b1f1e">25-29.9 Over</text>
    <rect x="495" y="150" width="80" height="16" rx="3" fill="#e76f51" opacity="0.3"/>
    <text x="535" y="162" text-anchor="middle" font-size="8" fill="#1b1f1e">30+ Obese</text>
    <path d="M425,155 L430,148 L432,152" fill="none" stroke="#ffd166" stroke-width="1.5"/>
    <path d="M440,145 L445,138 L447,142" fill="none" stroke="#ffd166" stroke-width="1.5"/>
    <path d="M420,140 L425,133 L427,137" fill="none" stroke="#ffd166" stroke-width="1.5"/>
    <circle cx="150" cy="40" r="3" fill="#52b788" opacity="0.3"/>
    <circle cx="500" cy="290" r="4" fill="#f4a261" opacity="0.25"/>
  </svg>`,

  'bmr-calculator': `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="bmr-title" class="calc-hero-svg">
    <title id="bmr-title">Basal Metabolic Rate Calculator</title>
    <defs>
      <linearGradient id="bmr-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1b4332"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </linearGradient>
      <linearGradient id="bmr-flame" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#e76f51"/>
        <stop offset="50%" stop-color="#f4a261"/>
        <stop offset="100%" stop-color="#ffd166"/>
      </linearGradient>
      <radialGradient id="bmr-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd166" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#ffd166" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#bmr-bg)"/>
    <circle cx="540" cy="50" r="18" fill="#ffd166" opacity="0.15"/>
    <circle cx="520" cy="35" r="3" fill="#ffd166" opacity="0.4"/>
    <circle cx="555" cy="70" r="2" fill="#ffd166" opacity="0.3"/>
    <circle cx="480" cy="25" r="2" fill="#ffd166" opacity="0.25"/>
    <circle cx="60" cy="40" r="4" fill="#ffd166" opacity="0.2"/>
    <circle cx="100" cy="60" r="2" fill="#ffd166" opacity="0.15"/>
    <path d="M530,50 Q535,35 540,50" fill="none" stroke="#ffd166" stroke-width="0.5" opacity="0.3"/>
    <rect x="60" y="120" width="220" height="80" rx="20" fill="#1b4332" opacity="0.5"/>
    <ellipse cx="170" cy="165" rx="80" ry="25" fill="#2d6a4f" opacity="0.6"/>
    <ellipse cx="170" cy="155" rx="15" ry="12" fill="#d8f3dc" opacity="0.4"/>
    <line x1="100" y1="145" x2="240" y2="145" stroke="#52b788" stroke-width="1" opacity="0.4"/>
    <path d="M140,130 Q145,115 150,130 Q155,120 160,130" fill="none" stroke="#f4a261" stroke-width="1.5" opacity="0.5"/>
    <path d="M175,125 Q180,108 185,125 Q190,112 195,125" fill="none" stroke="#ffd166" stroke-width="1.5" opacity="0.5"/>
    <path d="M115,135 Q120,122 125,135" fill="none" stroke="#f4a261" stroke-width="1" opacity="0.4"/>
    <circle cx="170" cy="160" r="50" fill="url(#bmr-glow)"/>
    <path d="M170,180 Q155,155 165,140 Q170,148 175,135 Q180,150 185,140 Q175,155 170,180 Z" fill="url(#bmr-flame)"/>
    <text x="170" y="220" text-anchor="middle" font-size="32" font-weight="bold" fill="#ffffff">1,680</text>
    <text x="170" y="245" text-anchor="middle" font-size="13" fill="#d8f3dc">cal/day at rest</text>
    <rect x="380" y="70" width="40" height="200" rx="8" fill="#1b4332" stroke="#52b788" stroke-width="1.5"/>
    <rect x="385" y="235" width="30" height="30" rx="4" fill="#90e0ef"/>
    <rect x="385" y="200" width="30" height="35" rx="0" fill="#52b788"/>
    <rect x="385" y="170" width="30" height="30" rx="0" fill="#ffd166"/>
    <rect x="385" y="140" width="30" height="30" rx="0" fill="#f4a261"/>
    <rect x="385" y="110" width="30" height="30" rx="0" fill="#e76f51"/>
    <polygon points="375,180 380,175 380,185" fill="#ffffff"/>
    <text x="430" y="250" font-size="9" fill="#90e0ef">LOW</text>
    <text x="430" y="210" font-size="9" fill="#52b788">NORMAL</text>
    <text x="430" y="155" font-size="9" fill="#ffd166">HIGH</text>
    <text x="430" y="120" font-size="9" fill="#e76f51">V.HIGH</text>
    <text x="300" y="310" text-anchor="middle" font-size="11" fill="#d8f3dc" font-style="italic" opacity="0.7">Your body burns calories even while you sleep</text>
    <circle cx="50" cy="300" r="3" fill="#52b788" opacity="0.2"/>
    <circle cx="560" cy="300" r="3" fill="#f4a261" opacity="0.2"/>
  </svg>`,

  'tdee-calculator': `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="tdee-title" class="calc-hero-svg">
    <title id="tdee-title">Total Daily Energy Expenditure Calculator</title>
    <defs>
      <linearGradient id="tdee-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f4a261" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="#d8f3dc"/>
      </linearGradient>
      <linearGradient id="tdee-gauge" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#90e0ef"/>
        <stop offset="33%" stop-color="#52b788"/>
        <stop offset="66%" stop-color="#ffd166"/>
        <stop offset="100%" stop-color="#e76f51"/>
      </linearGradient>
      <linearGradient id="tdee-runner" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#2d6a4f"/>
        <stop offset="100%" stop-color="#52b788"/>
      </linearGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#tdee-bg)"/>
    <circle cx="100" cy="170" r="70" fill="#d8f3dc" opacity="0.3"/>
    <circle cx="100" cy="115" r="15" fill="url(#tdee-runner)"/>
    <ellipse cx="95" cy="155" rx="14" ry="25" fill="url(#tdee-runner)" transform="rotate(-10, 95, 155)"/>
    <line x1="85" y1="140" x2="65" y2="160" stroke="#2d6a4f" stroke-width="3" stroke-linecap="round"/>
    <line x1="110" y1="135" x2="130" y2="120" stroke="#2d6a4f" stroke-width="3" stroke-linecap="round"/>
    <line x1="90" y1="175" x2="70" y2="215" stroke="#2d6a4f" stroke-width="3" stroke-linecap="round"/>
    <line x1="105" y1="178" x2="130" y2="200" stroke="#2d6a4f" stroke-width="3" stroke-linecap="round"/>
    <line x1="130" y1="200" x2="140" y2="215" stroke="#2d6a4f" stroke-width="3" stroke-linecap="round"/>
    <line x1="55" y1="145" x2="40" y2="145" stroke="#f4a261" stroke-width="2" opacity="0.5"/>
    <line x1="55" y1="155" x2="35" y2="155" stroke="#f4a261" stroke-width="1.5" opacity="0.4"/>
    <line x1="55" y1="165" x2="40" y2="165" stroke="#f4a261" stroke-width="2" opacity="0.5"/>
    <path d="M240,230 A110,110 0 0,1 460,230" fill="none" stroke="url(#tdee-gauge)" stroke-width="20" stroke-linecap="round"/>
    <text x="250" y="250" font-size="9" fill="#90e0ef">Sedentary</text>
    <text x="310" y="145" font-size="9" fill="#52b788">Light</text>
    <text x="370" y="145" font-size="9" fill="#ffd166">Active</text>
    <text x="430" y="250" font-size="9" fill="#e76f51">V.Active</text>
    <line x1="350" y1="230" x2="380" y2="165" stroke="#1b1f1e" stroke-width="3" stroke-linecap="round"/>
    <circle cx="350" cy="230" r="7" fill="#1b1f1e"/>
    <circle cx="350" cy="230" r="3" fill="#ffffff"/>
    <text x="350" y="210" text-anchor="middle" font-size="26" font-weight="bold" fill="#1b1f1e">2,800</text>
    <text x="350" y="198" text-anchor="middle" font-size="10" fill="#6c757d">kcal</text>
    <rect x="290" y="262" width="120" height="22" rx="11" fill="#52b788"/>
    <text x="350" y="277" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">Daily Energy Need</text>
    <rect x="500" y="75" width="85" height="185" rx="8" fill="#ffffff" stroke="#e9ecef" stroke-width="1"/>
    <text x="542" y="95" text-anchor="middle" font-size="9" fill="#6c757d">Multiplier</text>
    <rect x="507" y="102" width="70" height="22" rx="4" fill="#f8f9fa"/>
    <text x="542" y="117" text-anchor="middle" font-size="9" fill="#1b1f1e">Sedentary 1.2x</text>
    <rect x="507" y="128" width="70" height="22" rx="4" fill="#f8f9fa"/>
    <text x="542" y="143" text-anchor="middle" font-size="9" fill="#1b1f1e">Light 1.375x</text>
    <rect x="507" y="154" width="70" height="22" rx="4" fill="#d8f3dc" stroke="#52b788" stroke-width="1"/>
    <text x="542" y="169" text-anchor="middle" font-size="9" font-weight="bold" fill="#2d6a4f">Moderate 1.55x</text>
    <rect x="507" y="180" width="70" height="22" rx="4" fill="#f8f9fa"/>
    <text x="542" y="195" text-anchor="middle" font-size="9" fill="#1b1f1e">Active 1.725x</text>
    <rect x="507" y="206" width="70" height="22" rx="4" fill="#f8f9fa"/>
    <text x="542" y="221" text-anchor="middle" font-size="9" fill="#1b1f1e">V.Active 1.9x</text>
    <path d="M165,100 L172,92 L174,98" fill="none" stroke="#ffd166" stroke-width="2"/>
    <path d="M155,85 L162,77 L164,83" fill="none" stroke="#ffd166" stroke-width="1.5"/>
    <circle cx="50" cy="50" r="3" fill="#f4a261" opacity="0.3"/>
  </svg>`,

  'water-intake-calculator': `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="water-title" class="calc-hero-svg">
    <title id="water-title">Daily Water Intake Calculator</title>
    <defs>
      <linearGradient id="water-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#e0f7fa"/>
        <stop offset="100%" stop-color="#f0faf2"/>
      </linearGradient>
      <linearGradient id="water-fill" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#0077b6"/>
        <stop offset="100%" stop-color="#90e0ef"/>
      </linearGradient>
      <radialGradient id="water-drop" cx="40%" cy="30%" r="60%">
        <stop offset="0%" stop-color="#90e0ef"/>
        <stop offset="100%" stop-color="#0077b6"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#water-bg)"/>
    <rect x="230" y="50" width="100" height="240" rx="12" fill="#ffffff" stroke="#90e0ef" stroke-width="2.5"/>
    <rect x="250" y="55" width="60" height="10" rx="5" fill="#90e0ef" opacity="0.5"/>
    <rect x="235" y="110" width="90" height="175" rx="8" fill="url(#water-fill)" opacity="0.85"/>
    <path d="M235,110 Q260,100 280,110 Q300,118 325,110" fill="#90e0ef" opacity="0.5"/>
    <circle cx="260" cy="180" r="4" fill="#ffffff" opacity="0.4"/>
    <circle cx="280" cy="200" r="3" fill="#ffffff" opacity="0.35"/>
    <circle cx="255" cy="220" r="3.5" fill="#ffffff" opacity="0.3"/>
    <circle cx="290" cy="160" r="2.5" fill="#ffffff" opacity="0.4"/>
    <circle cx="270" cy="240" r="3" fill="#ffffff" opacity="0.25"/>
    <circle cx="250" cy="150" r="2" fill="#ffffff" opacity="0.35"/>
    <circle cx="300" cy="230" r="2.5" fill="#ffffff" opacity="0.3"/>
    <line x1="230" y1="110" x2="222" y2="110" stroke="#adb5bd" stroke-width="1"/>
    <text x="215" y="114" text-anchor="end" font-size="8" fill="#6c757d">75%</text>
    <line x1="230" y1="170" x2="222" y2="170" stroke="#adb5bd" stroke-width="1"/>
    <text x="215" y="174" text-anchor="end" font-size="8" fill="#6c757d">50%</text>
    <line x1="230" y1="230" x2="222" y2="230" stroke="#adb5bd" stroke-width="1"/>
    <text x="215" y="234" text-anchor="end" font-size="8" fill="#6c757d">25%</text>
    <g transform="translate(55, 80)">
      <path d="M15,0 Q20,10 15,20 Q10,10 15,0 Z" fill="#0077b6"/>
      <path d="M40,0 Q45,10 40,20 Q35,10 40,0 Z" fill="#0077b6"/>
      <path d="M15,30 Q20,40 15,50 Q10,40 15,30 Z" fill="#0077b6"/>
      <path d="M40,30 Q45,40 40,50 Q35,40 40,30 Z" fill="#0077b6"/>
      <path d="M15,60 Q20,70 15,80 Q10,70 15,60 Z" fill="#0077b6"/>
      <path d="M40,60 Q45,70 40,80 Q35,70 40,60 Z" fill="#0077b6"/>
      <path d="M15,90 Q20,100 15,110 Q10,100 15,90 Z" fill="#90e0ef" opacity="0.4" stroke="#90e0ef" stroke-width="1"/>
      <path d="M40,90 Q45,100 40,110 Q35,100 40,90 Z" fill="#90e0ef" opacity="0.4" stroke="#90e0ef" stroke-width="1"/>
    </g>
    <text x="82" y="210" text-anchor="middle" font-size="11" fill="#0077b6" font-weight="bold">6 / 8</text>
    <text x="82" y="225" text-anchor="middle" font-size="10" fill="#6c757d">glasses</text>
    <rect x="400" y="80" width="160" height="120" rx="14" fill="#ffffff" stroke="#90e0ef" stroke-width="1.5"/>
    <path d="M480,95 Q488,75 496,95 Q488,120 480,95 Z" fill="url(#water-drop)"/>
    <text x="488" y="145" text-anchor="middle" font-size="32" font-weight="bold" fill="#0077b6">2.7L</text>
    <text x="488" y="165" text-anchor="middle" font-size="12" fill="#6c757d">Daily Goal</text>
    <text x="488" y="185" text-anchor="middle" font-size="10" fill="#90e0ef">Body is 60% water</text>
    <rect x="380" y="260" width="50" height="40" rx="8" fill="#ffffff" stroke="#e9ecef" stroke-width="1"/>
    <path d="M400,268 L405,263 L407,268" fill="none" stroke="#ffd166" stroke-width="1.5"/>
    <text x="405" y="290" text-anchor="middle" font-size="7" fill="#6c757d">Energy</text>
    <rect x="440" y="260" width="50" height="40" rx="8" fill="#ffffff" stroke="#e9ecef" stroke-width="1"/>
    <circle cx="465" cy="272" r="6" fill="none" stroke="#52b788" stroke-width="1"/>
    <text x="465" y="290" text-anchor="middle" font-size="7" fill="#6c757d">Skin</text>
    <rect x="500" y="260" width="50" height="40" rx="8" fill="#ffffff" stroke="#e9ecef" stroke-width="1"/>
    <circle cx="525" cy="272" r="5" fill="none" stroke="#c77dff" stroke-width="1"/>
    <text x="525" y="290" text-anchor="middle" font-size="7" fill="#6c757d">Digest</text>
    <path d="M170,45 Q175,35 180,45 Q175,55 170,45 Z" fill="#90e0ef" opacity="0.3"/>
    <path d="M400,40 Q405,30 410,40 Q405,50 400,40 Z" fill="#90e0ef" opacity="0.25"/>
    <circle cx="550" cy="50" r="3" fill="#0077b6" opacity="0.2"/>
  </svg>`,

  'sleep-calculator': `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sleep-title" class="calc-hero-svg">
    <title id="sleep-title">Sleep Duration Calculator</title>
    <defs>
      <linearGradient id="sleep-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1a1a2e"/>
        <stop offset="100%" stop-color="#16213e"/>
      </linearGradient>
      <linearGradient id="sleep-blanket" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#c77dff"/>
        <stop offset="100%" stop-color="#7b2cbf"/>
      </linearGradient>
      <radialGradient id="sleep-moon" cx="40%" cy="40%" r="50%">
        <stop offset="0%" stop-color="#ffd166"/>
        <stop offset="100%" stop-color="#f4a261"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#sleep-bg)"/>
    <circle cx="520" cy="55" r="22" fill="url(#sleep-moon)"/>
    <circle cx="530" cy="48" r="18" fill="#1a1a2e"/>
    <circle cx="80" cy="40" r="2" fill="#ffd166" opacity="0.8"/>
    <circle cx="150" cy="25" r="1.5" fill="#ffd166" opacity="0.6"/>
    <circle cx="250" cy="35" r="1" fill="#ffd166" opacity="0.5"/>
    <circle cx="350" cy="20" r="2" fill="#ffd166" opacity="0.7"/>
    <circle cx="440" cy="40" r="1.5" fill="#ffd166" opacity="0.4"/>
    <circle cx="200" cy="55" r="1" fill="#ffd166" opacity="0.3"/>
    <circle cx="300" cy="50" r="1.5" fill="#ffd166" opacity="0.5"/>
    <rect x="40" y="180" width="200" height="90" rx="10" fill="#2d6a4f" opacity="0.6"/>
    <rect x="45" y="175" width="65" height="30" rx="8" fill="#ffffff" opacity="0.2"/>
    <rect x="50" y="200" width="180" height="60" rx="6" fill="url(#sleep-blanket)" opacity="0.7"/>
    <ellipse cx="90" cy="190" rx="20" ry="15" fill="#d8f3dc" opacity="0.5"/>
    <text x="155" y="140" font-size="22" fill="#c77dff" opacity="0.6" font-weight="bold">Z z z</text>
    <circle cx="140" cy="295" r="50" fill="none" stroke="#52b788" stroke-width="8" opacity="0.3"/>
    <circle cx="140" cy="295" r="50" fill="none" stroke="#52b788" stroke-width="8" stroke-dasharray="314 314" stroke-dashoffset="0" stroke-linecap="round"/>
    <text x="140" y="290" text-anchor="middle" font-size="18" font-weight="bold" fill="#ffffff">8h 00m</text>
    <text x="140" y="310" text-anchor="middle" font-size="9" fill="#52b788">Optimal Sleep</text>
    <g transform="translate(310, 90)">
      <text x="0" y="0" font-size="8" fill="#6c757d">Awake</text>
      <text x="0" y="50" font-size="8" fill="#6c757d">Light</text>
      <text x="0" y="100" font-size="8" fill="#6c757d">Deep</text>
      <text x="0" y="140" font-size="8" fill="#6c757d">REM</text>
      <path d="M50,0 Q70,-5 90,0 Q110,25 130,15 Q150,5 170,0 Q190,25 210,15 Q230,0 250,5" fill="none" stroke="#ffd166" stroke-width="2" opacity="0.8"/>
      <path d="M50,50 Q70,70 90,45 Q110,30 130,55 Q150,75 170,50 Q190,30 210,55 Q230,70 250,45" fill="none" stroke="#90e0ef" stroke-width="2" opacity="0.8"/>
      <path d="M50,100 Q70,120 90,95 Q110,80 130,110 Q150,120 170,100 Q190,85 210,105 Q230,115 250,95" fill="none" stroke="#2d6a4f" stroke-width="2"/>
      <path d="M50,140 Q70,155 90,135 Q110,125 130,145 Q150,160 170,140 Q190,130 210,145 Q230,155 250,135" fill="none" stroke="#c77dff" stroke-width="2"/>
    </g>
    <rect x="350" y="280" width="40" height="35" rx="6" fill="#1a1a2e" stroke="#c77dff" stroke-width="1" opacity="0.8"/>
    <circle cx="365" cy="290" r="5" fill="none" stroke="#ffd166" stroke-width="1"/>
    <text x="370" y="308" text-anchor="middle" font-size="7" fill="#d8f3dc">Moon</text>
    <rect x="400" y="280" width="40" height="35" rx="6" fill="#1a1a2e" stroke="#c77dff" stroke-width="1" opacity="0.8"/>
    <rect x="413" y="288" width="14" height="10" rx="2" fill="none" stroke="#e76f51" stroke-width="1"/>
    <text x="420" y="308" text-anchor="middle" font-size="7" fill="#d8f3dc">No Phone</text>
    <rect x="450" y="280" width="40" height="35" rx="6" fill="#1a1a2e" stroke="#c77dff" stroke-width="1" opacity="0.8"/>
    <path d="M465,286 Q468,290 475,290 L475,296 Q468,296 465,292" fill="none" stroke="#52b788" stroke-width="1.2"/>
    <text x="470" y="308" text-anchor="middle" font-size="7" fill="#d8f3dc">Tea</text>
  </svg>`,

  'heart-rate-calculator': `<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="hr-title" class="calc-hero-svg">
    <title id="hr-title">Heart Rate Calculator</title>
    <defs>
      <linearGradient id="hr-bg-left" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#1b1f1e"/>
        <stop offset="100%" stop-color="#2d3a35"/>
      </linearGradient>
      <linearGradient id="hr-heart" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#e76f51"/>
        <stop offset="100%" stop-color="#c1121f"/>
      </linearGradient>
      <radialGradient id="hr-glow" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#ff6b6b" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#e76f51" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="300" height="340" rx="20" fill="url(#hr-bg-left)"/>
    <rect x="300" y="0" width="300" height="340" rx="20" fill="#f0faf2"/>
    <rect x="285" y="0" width="30" height="340" fill="#2d3a35"/>
    <circle cx="150" cy="150" r="70" fill="url(#hr-glow)"/>
    <path d="M150,200 C150,200 90,160 90,120 C90,95 110,85 130,95 C140,100 148,112 150,120 C152,112 160,100 170,95 C190,85 210,95 210,120 C210,160 150,200 150,200 Z" fill="url(#hr-heart)" stroke="#c1121f" stroke-width="1"/>
    <path d="M120,130 Q130,115 140,130" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.3"/>
    <circle cx="140" cy="120" r="8" fill="#ffffff" opacity="0.1"/>
    <path d="M60,235 Q65,235 70,235 L80,235 L85,225 L95,250 L105,210 L115,245 L125,220 L130,235 Q140,235 180,235 L240,235" fill="none" stroke="#52b788" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="95" cy="250" r="2" fill="#52b788"/>
    <circle cx="105" cy="210" r="2" fill="#52b788"/>
    <rect x="360" y="50" width="200" height="80" rx="14" fill="#ffffff" stroke="#d8f3dc" stroke-width="2"/>
    <text x="460" y="85" text-anchor="middle" font-size="36" font-weight="bold" fill="#e76f51">72</text>
    <text x="460" y="105" text-anchor="middle" font-size="14" fill="#6c757d">BPM</text>
    <text x="460" y="120" text-anchor="middle" font-size="10" fill="#52b788">Resting Heart Rate</text>
    <rect x="430" y="30" width="60" height="20" rx="10" fill="#52b788"/>
    <text x="460" y="44" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">Normal</text>
    <rect x="370" y="160" width="180" height="150" rx="10" fill="#ffffff" stroke="#e9ecef" stroke-width="1"/>
    <text x="460" y="182" text-anchor="middle" font-size="11" font-weight="bold" fill="#1b1f1e">Target HR Zones</text>
    <rect x="385" y="195" width="150" height="22" rx="4" fill="#e76f51" opacity="0.8"/>
    <text x="460" y="210" text-anchor="middle" font-size="9" fill="#ffffff">Max HR: 170-190</text>
    <rect x="385" y="222" width="150" height="22" rx="4" fill="#f4a261" opacity="0.8"/>
    <text x="460" y="237" text-anchor="middle" font-size="9" fill="#ffffff">Cardio: 140-170</text>
    <rect x="385" y="249" width="150" height="22" rx="4" fill="#52b788"/>
    <text x="460" y="264" text-anchor="middle" font-size="9" fill="#ffffff">Fat Burn: 110-140</text>
    <polygon points="375,260 382,254 382,266" fill="#52b788"/>
    <rect x="385" y="276" width="150" height="22" rx="4" fill="#90e0ef" opacity="0.8"/>
    <text x="460" y="291" text-anchor="middle" font-size="9" fill="#1b1f1e">Warm Up: 90-110</text>
    <circle cx="40" cy="40" r="3" fill="#52b788" opacity="0.4"/>
    <circle cx="260" cy="300" r="2" fill="#e76f51" opacity="0.3"/>
    <circle cx="560" cy="320" r="3" fill="#52b788" opacity="0.2"/>
  </svg>`
};
