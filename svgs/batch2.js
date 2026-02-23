module.exports = {
  'blood-pressure-checker': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="bp-title">
    <title id="bp-title">Blood Pressure Calculator</title>
    <defs>
      <linearGradient id="bp-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0faf2"/>
        <stop offset="100%" stop-color="#d8f3dc"/>
      </linearGradient>
      <linearGradient id="bp-cuff" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#2d6a4f"/>
        <stop offset="100%" stop-color="#1b4332"/>
      </linearGradient>
      <radialGradient id="bp-gauge-bg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#f8f9fa"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#bp-bg)"/>
    <rect x="30" y="60" width="140" height="220" rx="15" fill="url(#bp-cuff)" opacity="0.9"/>
    <rect x="50" y="90" width="100" height="60" rx="8" fill="#1b4332"/>
    <text x="100" y="125" text-anchor="middle" fill="#52b788" font-size="14" font-weight="bold">CUFF</text>
    <rect x="55" y="160" width="90" height="8" rx="4" fill="#52b788" opacity="0.5"/>
    <rect x="55" y="175" width="90" height="8" rx="4" fill="#52b788" opacity="0.3"/>
    <ellipse cx="100" cy="230" rx="20" ry="20" fill="#1b4332"/>
    <ellipse cx="100" cy="230" rx="14" ry="14" fill="#2d6a4f"/>
    <line x1="100" y1="195" x2="100" y2="210" stroke="#52b788" stroke-width="3" stroke-linecap="round"/>
    <circle cx="320" cy="160" r="110" fill="url(#bp-gauge-bg)" stroke="#e0e0e0" stroke-width="3"/>
    <path d="M230 160 A90 90 0 0 1 320 70" fill="none" stroke="#52b788" stroke-width="14" stroke-linecap="round"/>
    <path d="M320 70 A90 90 0 0 1 395 110" fill="none" stroke="#ffd166" stroke-width="14" stroke-linecap="round"/>
    <path d="M395 110 A90 90 0 0 1 410 160" fill="none" stroke="#f4a261" stroke-width="14" stroke-linecap="round"/>
    <path d="M410 160 A90 90 0 0 1 380 220" fill="none" stroke="#e76f51" stroke-width="14" stroke-linecap="round"/>
    <line x1="320" y1="160" x2="270" y2="120" stroke="#1b1f1e" stroke-width="3" stroke-linecap="round"/>
    <circle cx="320" cy="160" r="6" fill="#1b1f1e"/>
    <text x="320" y="195" text-anchor="middle" fill="#1b1f1e" font-size="28" font-weight="bold">120/80</text>
    <text x="320" y="215" text-anchor="middle" fill="#52b788" font-size="12">mmHg</text>
    <rect x="470" y="60" width="110" height="30" rx="6" fill="#52b788" opacity="0.15"/>
    <circle cx="485" cy="75" r="5" fill="#52b788"/>
    <text x="500" y="80" fill="#2d6a4f" font-size="11" font-weight="bold">Normal</text>
    <rect x="470" y="98" width="110" height="30" rx="6" fill="#ffd166" opacity="0.15"/>
    <circle cx="485" cy="113" r="5" fill="#ffd166"/>
    <text x="500" y="118" fill="#856404" font-size="11">Elevated</text>
    <rect x="470" y="136" width="110" height="30" rx="6" fill="#f4a261" opacity="0.15"/>
    <circle cx="485" cy="151" r="5" fill="#f4a261"/>
    <text x="500" y="156" fill="#e76f51" font-size="11">High S1</text>
    <rect x="470" y="174" width="110" height="30" rx="6" fill="#e76f51" opacity="0.15"/>
    <circle cx="485" cy="189" r="5" fill="#e76f51"/>
    <text x="500" y="194" fill="#c1121f" font-size="11">High S2</text>
    <path d="M490 240 C490 225, 510 225, 510 240 C510 255, 500 265, 500 265 C500 265, 490 255, 490 240Z" fill="#e76f51" opacity="0.6"/>
    <circle cx="50" cy="40" r="4" fill="#52b788" opacity="0.3"/>
    <circle cx="560" cy="300" r="6" fill="#52b788" opacity="0.2"/>
    <circle cx="540" cy="280" r="3" fill="#f4a261" opacity="0.3"/>
  </svg>`,

  'cholesterol-risk-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="chol-title">
    <title id="chol-title">Cholesterol Risk Calculator</title>
    <defs>
      <linearGradient id="chol-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#f0faf2"/>
      </linearGradient>
      <linearGradient id="chol-artery" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#f8f9fa"/>
        <stop offset="100%" stop-color="#e0e0e0"/>
      </linearGradient>
      <linearGradient id="chol-blood" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#e76f51"/>
        <stop offset="100%" stop-color="#c1121f"/>
      </linearGradient>
      <linearGradient id="chol-plaque" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffd166"/>
        <stop offset="100%" stop-color="#f4a261"/>
      </linearGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#chol-bg)"/>
    <rect x="150" y="100" width="300" height="80" rx="40" fill="url(#chol-artery)" stroke="#bbb" stroke-width="2"/>
    <rect x="170" y="115" width="130" height="50" rx="25" fill="url(#chol-blood)" opacity="0.8"/>
    <circle cx="200" cy="140" r="6" fill="#ff6b6b" opacity="0.7"/>
    <circle cx="220" cy="130" r="5" fill="#ff8787" opacity="0.6"/>
    <circle cx="240" cy="145" r="4" fill="#ff6b6b" opacity="0.8"/>
    <circle cx="260" cy="135" r="5" fill="#ff8787" opacity="0.5"/>
    <circle cx="280" cy="140" r="6" fill="#ff6b6b" opacity="0.7"/>
    <path d="M320 115 Q360 115, 370 125 Q380 135, 370 145 L420 145 Q430 145, 430 140 L430 115 Q430 115, 420 115 Z" fill="url(#chol-plaque)" opacity="0.85"/>
    <path d="M320 165 Q360 165, 370 155 Q375 150, 370 145 L420 145 Q430 145, 430 150 L430 165 Q430 165, 420 165 Z" fill="url(#chol-plaque)" opacity="0.75"/>
    <rect x="340" y="120" width="80" height="40" rx="20" fill="url(#chol-blood)" opacity="0.5"/>
    <circle cx="370" cy="140" r="4" fill="#ff6b6b" opacity="0.6"/>
    <circle cx="390" cy="138" r="3" fill="#ff8787" opacity="0.5"/>
    <rect x="20" y="70" width="110" height="55" rx="10" fill="#52b788" opacity="0.15" stroke="#52b788" stroke-width="1"/>
    <text x="75" y="88" text-anchor="middle" fill="#2d6a4f" font-size="10" font-weight="bold">HDL (Good)</text>
    <text x="75" y="108" text-anchor="middle" fill="#52b788" font-size="16" font-weight="bold">60+ mg/dL</text>
    <path d="M110 100 L120 90 L130 100" fill="none" stroke="#52b788" stroke-width="2" stroke-linecap="round"/>
    <rect x="20" y="140" width="110" height="55" rx="10" fill="#e76f51" opacity="0.1" stroke="#e76f51" stroke-width="1"/>
    <text x="75" y="158" text-anchor="middle" fill="#c1121f" font-size="10" font-weight="bold">LDL (Bad)</text>
    <text x="75" y="178" text-anchor="middle" fill="#e76f51" font-size="16" font-weight="bold">&lt;100 mg/dL</text>
    <path d="M110 170 L120 180 L130 170" fill="none" stroke="#e76f51" stroke-width="2" stroke-linecap="round"/>
    <rect x="470" y="210" width="110" height="100" rx="12" fill="#ffffff" stroke="#e0e0e0" stroke-width="1"/>
    <path d="M485 290 A40 40 0 0 1 485 230" fill="none" stroke="#52b788" stroke-width="8" stroke-linecap="round"/>
    <path d="M485 230 A40 40 0 0 1 525 225" fill="none" stroke="#ffd166" stroke-width="8" stroke-linecap="round"/>
    <path d="M525 225 A40 40 0 0 1 565 250" fill="none" stroke="#e76f51" stroke-width="8" stroke-linecap="round"/>
    <text x="525" y="275" text-anchor="middle" fill="#2d6a4f" font-size="11" font-weight="bold">Low Risk</text>
    <path d="M285 40 C285 25, 305 25, 305 40 C305 55, 295 65, 295 65 C295 65, 285 55, 285 40Z" fill="#e76f51" opacity="0.5"/>
    <path d="M310 35 L340 35" stroke="#52b788" stroke-width="2"/>
    <path d="M340 35 L345 30 L350 40 L355 25 L360 38 L365 32 L370 35" stroke="#52b788" stroke-width="2" fill="none"/>
    <circle cx="560" cy="50" r="5" fill="#d8f3dc"/>
    <circle cx="40" cy="300" r="4" fill="#ffd166" opacity="0.4"/>
    <text x="300" y="25" text-anchor="middle" fill="#2d6a4f" font-size="14" font-weight="bold">Artery Cross-Section</text>
    <text x="220" y="210" text-anchor="middle" fill="#52b788" font-size="10">Healthy Flow</text>
    <text x="390" y="210" text-anchor="middle" fill="#f4a261" font-size="10">Plaque Buildup</text>
  </svg>`,

  'diabetes-risk-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="diab-title">
    <title id="diab-title">Diabetes Risk Calculator</title>
    <defs>
      <linearGradient id="diab-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f8f9fa"/>
        <stop offset="100%" stop-color="#f0faf2"/>
      </linearGradient>
      <linearGradient id="diab-device" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#e0e0e0"/>
      </linearGradient>
      <linearGradient id="diab-screen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#b7e4c7"/>
      </linearGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#diab-bg)"/>
    <rect x="40" y="50" width="130" height="240" rx="16" fill="url(#diab-device)" stroke="#ccc" stroke-width="2"/>
    <rect x="55" y="70" width="100" height="70" rx="8" fill="url(#diab-screen)"/>
    <text x="105" y="100" text-anchor="middle" fill="#1b1f1e" font-size="22" font-weight="bold">99</text>
    <text x="105" y="120" text-anchor="middle" fill="#2d6a4f" font-size="10">mg/dL</text>
    <rect x="70" y="155" width="30" height="12" rx="3" fill="#bbb"/>
    <rect x="110" y="155" width="30" height="12" rx="3" fill="#bbb"/>
    <rect x="85" y="180" width="40" height="80" rx="4" fill="#e0e0e0" stroke="#ccc" stroke-width="1"/>
    <rect x="90" y="250" width="30" height="15" rx="2" fill="#f8f9fa"/>
    <circle cx="105" cy="257" r="4" fill="#e76f51"/>
    <path d="M230 200 A100 100 0 0 1 430 200" fill="none" stroke="#f8f9fa" stroke-width="20" stroke-linecap="round"/>
    <path d="M230 200 A100 100 0 0 1 280 130" fill="none" stroke="#90e0ef" stroke-width="18" stroke-linecap="round"/>
    <path d="M280 130 A100 100 0 0 1 380 130" fill="none" stroke="#52b788" stroke-width="18" stroke-linecap="round"/>
    <path d="M380 130 A100 100 0 0 1 415 165" fill="none" stroke="#ffd166" stroke-width="18" stroke-linecap="round"/>
    <path d="M415 165 A100 100 0 0 1 430 200" fill="none" stroke="#e76f51" stroke-width="18" stroke-linecap="round"/>
    <line x1="330" y1="200" x2="310" y2="145" stroke="#1b1f1e" stroke-width="3" stroke-linecap="round"/>
    <circle cx="330" cy="200" r="6" fill="#1b1f1e"/>
    <text x="330" y="235" text-anchor="middle" fill="#1b1f1e" font-size="20" font-weight="bold">99 mg/dL</text>
    <rect x="295" y="245" width="70" height="22" rx="11" fill="#52b788" opacity="0.2"/>
    <text x="330" y="260" text-anchor="middle" fill="#2d6a4f" font-size="10" font-weight="bold">Normal</text>
    <text x="250" y="220" text-anchor="middle" fill="#90e0ef" font-size="9">&lt;70</text>
    <text x="330" y="120" text-anchor="middle" fill="#52b788" font-size="9">70-99</text>
    <text x="410" y="160" text-anchor="middle" fill="#ffd166" font-size="9">100-125</text>
    <text x="440" y="205" text-anchor="middle" fill="#e76f51" font-size="9">126+</text>
    <rect x="480" y="60" width="100" height="30" rx="6" fill="#52b788" opacity="0.1"/>
    <text x="497" y="80" fill="#2d6a4f" font-size="11">✓ Healthy wt</text>
    <rect x="480" y="98" width="100" height="30" rx="6" fill="#52b788" opacity="0.1"/>
    <text x="497" y="118" fill="#2d6a4f" font-size="11">✓ Active</text>
    <rect x="480" y="136" width="100" height="30" rx="6" fill="#52b788" opacity="0.1"/>
    <text x="497" y="156" fill="#2d6a4f" font-size="11">✓ Diet</text>
    <rect x="480" y="174" width="100" height="30" rx="6" fill="#52b788" opacity="0.1"/>
    <text x="497" y="194" fill="#2d6a4f" font-size="11">✓ No history</text>
    <rect x="480" y="212" width="100" height="30" rx="6" fill="#52b788" opacity="0.1"/>
    <text x="497" y="232" fill="#2d6a4f" font-size="11">✓ Normal BP</text>
    <circle cx="550" cy="300" r="5" fill="#52b788" opacity="0.2"/>
    <circle cx="30" cy="20" r="4" fill="#ffd166" opacity="0.3"/>
  </svg>`,

  'stress-level-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="stress-title">
    <title id="stress-title">Stress Level Calculator</title>
    <defs>
      <linearGradient id="stress-bg-l" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#2d2d3d"/>
        <stop offset="100%" stop-color="#f0faf2"/>
      </linearGradient>
      <linearGradient id="stress-brain-l" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#c77dff"/>
        <stop offset="100%" stop-color="#e76f51"/>
      </linearGradient>
      <linearGradient id="stress-brain-r" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#90e0ef"/>
        <stop offset="100%" stop-color="#52b788"/>
      </linearGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#stress-bg-l)"/>
    <ellipse cx="300" cy="190" rx="85" ry="75" fill="url(#stress-brain-l)" opacity="0.5"/>
    <path d="M300 120 C250 120, 220 155, 225 190 C228 215, 245 245, 265 255 Q280 262, 300 260" fill="url(#stress-brain-l)" opacity="0.9"/>
    <path d="M300 120 C350 120, 380 155, 375 190 C372 215, 355 245, 335 255 Q320 262, 300 260" fill="url(#stress-brain-r)" opacity="0.9"/>
    <line x1="300" y1="125" x2="300" y2="255" stroke="#ffffff" stroke-width="1.5" opacity="0.4"/>
    <path d="M250 160 L240 145 L255 150" fill="none" stroke="#ffd166" stroke-width="2"/>
    <path d="M270 180 L260 165 L275 172" fill="none" stroke="#ffd166" stroke-width="2"/>
    <path d="M255 200 L245 215 L260 208" fill="none" stroke="#e76f51" stroke-width="1.5" opacity="0.7"/>
    <path d="M330 155 Q345 160, 340 175 Q335 185, 345 190" fill="none" stroke="#90e0ef" stroke-width="2"/>
    <path d="M350 165 Q360 175, 355 185" fill="none" stroke="#52b788" stroke-width="2"/>
    <ellipse cx="340" cy="220" rx="10" ry="8" fill="#52b788" opacity="0.5"/>
    <ellipse cx="355" cy="210" rx="6" ry="5" fill="#d8f3dc" opacity="0.6"/>
    <path d="M160 50 A60 60 0 0 1 280 50" fill="none" stroke="#f8f9fa" stroke-width="10" stroke-linecap="round" opacity="0.2"/>
    <path d="M175 50 A50 50 0 0 1 215 20" fill="none" stroke="#52b788" stroke-width="8" stroke-linecap="round"/>
    <path d="M215 20 A50 50 0 0 1 250 30" fill="none" stroke="#f4a261" stroke-width="8" stroke-linecap="round"/>
    <path d="M250 30 A50 50 0 0 1 265 50" fill="none" stroke="#e76f51" stroke-width="8" stroke-linecap="round"/>
    <line x1="220" y1="55" x2="225" y2="30" stroke="#1b1f1e" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="220" cy="55" r="4" fill="#1b1f1e"/>
    <rect x="185" y="65" width="70" height="20" rx="10" fill="#f4a261" opacity="0.3"/>
    <text x="220" y="79" text-anchor="middle" fill="#f4a261" font-size="10" font-weight="bold">Moderate</text>
    <rect x="30" y="100" width="85" height="35" rx="8" fill="#e76f51" opacity="0.2"/>
    <text x="72" y="122" text-anchor="middle" fill="#e76f51" font-size="10">💼 Work</text>
    <rect x="30" y="145" width="85" height="35" rx="8" fill="#e76f51" opacity="0.2"/>
    <text x="72" y="167" text-anchor="middle" fill="#e76f51" font-size="10">⏰ Time</text>
    <rect x="30" y="190" width="85" height="35" rx="8" fill="#e76f51" opacity="0.2"/>
    <text x="72" y="212" text-anchor="middle" fill="#e76f51" font-size="10">💰 Money</text>
    <rect x="485" y="100" width="85" height="35" rx="8" fill="#52b788" opacity="0.2"/>
    <text x="527" y="122" text-anchor="middle" fill="#52b788" font-size="10">🧘 Meditate</text>
    <rect x="485" y="145" width="85" height="35" rx="8" fill="#52b788" opacity="0.2"/>
    <text x="527" y="167" text-anchor="middle" fill="#52b788" font-size="10">🏃 Exercise</text>
    <rect x="485" y="190" width="85" height="35" rx="8" fill="#52b788" opacity="0.2"/>
    <text x="527" y="212" text-anchor="middle" fill="#52b788" font-size="10">🌙 Sleep</text>
    <circle cx="50" cy="300" r="4" fill="#c77dff" opacity="0.3"/>
    <circle cx="550" cy="300" r="5" fill="#52b788" opacity="0.3"/>
    <path d="M400 290 Q420 280, 440 290 Q460 300, 480 290" fill="none" stroke="#90e0ef" stroke-width="1.5" opacity="0.4"/>
  </svg>`,

  'pregnancy-due-date-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="preg-title">
    <title id="preg-title">Pregnancy Due Date Calculator</title>
    <defs>
      <linearGradient id="preg-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fff8f0"/>
        <stop offset="100%" stop-color="#ffecd2"/>
      </linearGradient>
      <linearGradient id="preg-belly" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffd166"/>
        <stop offset="100%" stop-color="#f4a261"/>
      </linearGradient>
      <radialGradient id="preg-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffd166" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#ffd166" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#preg-bg)"/>
    <circle cx="120" cy="170" r="60" fill="url(#preg-glow)"/>
    <path d="M130 100 C130 80, 115 75, 115 95 L115 110 C100 100, 85 115, 90 135 C75 135, 70 165, 90 175 C85 195, 95 225, 115 235 C120 255, 130 265, 135 265 L135 100Z" fill="#f4a261" opacity="0.7"/>
    <ellipse cx="120" cy="190" rx="35" ry="42" fill="url(#preg-belly)"/>
    <path d="M110 185 C110 175, 130 175, 130 185 C130 195, 120 200, 120 200 C120 200, 110 195, 110 185Z" fill="#e76f51" opacity="0.4"/>
    <circle cx="115" cy="105" r="18" fill="#f4a261" opacity="0.8"/>
    <rect x="220" y="50" width="180" height="170" rx="12" fill="#ffffff" stroke="#e0d5c7" stroke-width="1.5"/>
    <rect x="220" y="50" width="180" height="35" rx="12" fill="#2d6a4f"/>
    <text x="310" y="73" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">Due Date Calendar</text>
    <line x1="220" y1="85" x2="400" y2="85" stroke="#e0d5c7" stroke-width="0.5"/>
    <text x="240" y="105" fill="#999" font-size="9">S  M  T  W  T  F  S</text>
    <text x="237" y="122" fill="#666" font-size="9">1</text>
    <text x="253" y="122" fill="#666" font-size="9">2</text>
    <text x="269" y="122" fill="#666" font-size="9">3</text>
    <text x="285" y="122" fill="#666" font-size="9">4</text>
    <text x="301" y="122" fill="#666" font-size="9">5</text>
    <text x="317" y="122" fill="#666" font-size="9">6</text>
    <text x="333" y="122" fill="#666" font-size="9">7</text>
    <text x="237" y="140" fill="#666" font-size="9">8</text>
    <text x="253" y="140" fill="#666" font-size="9">9</text>
    <text x="269" y="140" fill="#666" font-size="9">10</text>
    <circle cx="287" cy="137" r="9" fill="#f4a261" opacity="0.5"/>
    <text x="285" y="140" fill="#fff" font-size="9" font-weight="bold">11</text>
    <text x="301" y="140" fill="#666" font-size="9">12</text>
    <text x="317" y="140" fill="#666" font-size="9">13</text>
    <text x="333" y="140" fill="#666" font-size="9">14</text>
    <text x="237" y="158" fill="#666" font-size="9">15</text>
    <text x="253" y="158" fill="#666" font-size="9">16</text>
    <text x="269" y="158" fill="#666" font-size="9">17</text>
    <text x="285" y="158" fill="#666" font-size="9">18</text>
    <text x="301" y="158" fill="#666" font-size="9">19</text>
    <text x="317" y="158" fill="#666" font-size="9">20</text>
    <circle cx="335" cy="155" r="10" fill="#52b788"/>
    <text x="333" y="158" fill="#fff" font-size="9" font-weight="bold">21</text>
    <text x="310" y="190" text-anchor="middle" fill="#2d6a4f" font-size="11" font-weight="bold">Week 28 of 40</text>
    <rect x="440" y="60" width="130" height="30" rx="6" fill="#f4a261" opacity="0.2"/>
    <circle cx="455" cy="75" r="5" fill="#f4a261"/>
    <text x="470" y="80" fill="#c66a10" font-size="10">1st Tri (1-13)</text>
    <rect x="440" y="100" width="130" height="30" rx="6" fill="#ffd166" opacity="0.2"/>
    <circle cx="455" cy="115" r="5" fill="#ffd166"/>
    <text x="470" y="120" fill="#856404" font-size="10">2nd Tri (14-26)</text>
    <rect x="440" y="140" width="130" height="30" rx="6" fill="#52b788" opacity="0.25" stroke="#52b788" stroke-width="1"/>
    <circle cx="455" cy="155" r="5" fill="#52b788"/>
    <text x="470" y="160" fill="#2d6a4f" font-size="10" font-weight="bold">3rd Tri (27-40)</text>
    <path d="M480 200 C480 193, 490 193, 490 200 C490 207, 485 212, 485 212 C485 212, 480 207, 480 200Z" fill="#e76f51" opacity="0.5"/>
    <path d="M510 195 C510 188, 520 188, 520 195 C520 202, 515 207, 515 207 C515 207, 510 202, 510 195Z" fill="#e76f51" opacity="0.4"/>
    <circle cx="550" cy="280" r="3" fill="#ffd166" opacity="0.5"/>
    <circle cx="30" cy="30" r="4" fill="#f4a261" opacity="0.3"/>
    <path d="M460 250 L465 240 L470 250 M462 248 L468 248" fill="none" stroke="#ffd166" stroke-width="1.5" opacity="0.4"/>
    <text x="310" y="310" text-anchor="middle" fill="#2d6a4f" font-size="12" opacity="0.5">Your journey to parenthood</text>
  </svg>`,

  'keto-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="keto-title">
    <title id="keto-title">Keto Diet Calculator</title>
    <defs>
      <linearGradient id="keto-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fffcf2"/>
        <stop offset="100%" stop-color="#ffefd5"/>
      </linearGradient>
      <linearGradient id="keto-avo" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#52b788"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </linearGradient>
      <radialGradient id="keto-pit" cx="50%" cy="45%" r="40%">
        <stop offset="0%" stop-color="#a0522d"/>
        <stop offset="100%" stop-color="#6b3410"/>
      </radialGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#keto-bg)"/>
    <ellipse cx="100" cy="150" rx="50" ry="60" fill="url(#keto-avo)"/>
    <ellipse cx="100" cy="145" rx="30" ry="35" fill="#d8f3dc"/>
    <ellipse cx="100" cy="140" rx="15" ry="18" fill="url(#keto-pit)"/>
    <ellipse cx="80" cy="230" rx="22" ry="16" fill="#fff8e8" stroke="#e0d5c7" stroke-width="1.5"/>
    <ellipse cx="80" cy="228" rx="10" ry="7" fill="#ffd166"/>
    <ellipse cx="125" cy="235" rx="20" ry="14" fill="#fff8e8" stroke="#e0d5c7" stroke-width="1.5"/>
    <ellipse cx="125" cy="233" rx="9" ry="6" fill="#ffd166"/>
    <rect x="45" y="260" width="50" height="8" rx="3" fill="#e76f51" opacity="0.7"/>
    <rect x="45" y="272" width="50" height="8" rx="3" fill="#ff8a80" opacity="0.6"/>
    <rect x="45" y="284" width="50" height="8" rx="3" fill="#e76f51" opacity="0.5"/>
    <path d="M140 265 Q155 255, 170 265 Q155 275, 140 265Z" fill="#f4a261" opacity="0.6"/>
    <circle cx="152" cy="280" r="5" fill="#a0522d" opacity="0.7"/>
    <circle cx="163" cy="278" r="4" fill="#8b6914" opacity="0.6"/>
    <circle cx="145" cy="290" r="4.5" fill="#a0522d" opacity="0.5"/>
    <circle cx="320" cy="170" r="90" fill="#ffd166" opacity="0.15"/>
    <path d="M320 80 L320 170 L395 125 Z" fill="#ffd166" opacity="0.8"/>
    <path d="M395 125 A90 90 0 1 1 320 80" fill="#ffd166" opacity="0.6"/>
    <path d="M320 80 L320 170 L253 210 Z" fill="#52b788" opacity="0.7"/>
    <path d="M253 210 L320 170 L395 125" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
    <path d="M320 170 L345 256" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
    <circle cx="320" cy="170" r="30" fill="#ffffff"/>
    <text x="320" y="167" text-anchor="middle" fill="#1b1f1e" font-size="9" font-weight="bold">Daily</text>
    <text x="320" y="180" text-anchor="middle" fill="#1b1f1e" font-size="9" font-weight="bold">Macros</text>
    <text x="380" y="100" fill="#856404" font-size="12" font-weight="bold">Fat 70%</text>
    <text x="240" y="240" fill="#2d6a4f" font-size="12" font-weight="bold">Protein 25%</text>
    <text x="340" y="270" fill="#f4a261" font-size="12" font-weight="bold">Carbs 5%</text>
    <rect x="470" y="80" width="110" height="140" rx="12" fill="#ffffff" stroke="#e0e0e0" stroke-width="1"/>
    <text x="525" y="105" text-anchor="middle" fill="#1b1f1e" font-size="11" font-weight="bold">Ketosis Meter</text>
    <rect x="510" y="115" width="30" height="90" rx="6" fill="#f0f0f0"/>
    <rect x="510" y="135" width="30" height="70" rx="6" fill="#52b788" opacity="0.7"/>
    <text x="525" y="155" text-anchor="middle" fill="#ffffff" font-size="8" font-weight="bold">IN</text>
    <text x="525" y="165" text-anchor="middle" fill="#ffffff" font-size="8" font-weight="bold">KETOSIS</text>
    <circle cx="490" cy="130" r="4" fill="#f4a261" opacity="0.5"/>
    <circle cx="490" cy="280" r="4" fill="#f4a261" opacity="0.4"/>
    <circle cx="560" cy="280" r="3" fill="#ffd166" opacity="0.4"/>
    <path d="M480 300 L485 290 L490 300" fill="#f4a261" opacity="0.4"/>
    <path d="M510 300 L515 290 L520 300" fill="#e76f51" opacity="0.3"/>
  </svg>`,

  'intermittent-fasting-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="if-title">
    <title id="if-title">Intermittent Fasting Calculator</title>
    <defs>
      <linearGradient id="if-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1b1f2e"/>
        <stop offset="100%" stop-color="#2d3250"/>
      </linearGradient>
      <linearGradient id="if-eat" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#52b788"/>
        <stop offset="100%" stop-color="#f4a261"/>
      </linearGradient>
      <linearGradient id="if-fast" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#c77dff"/>
        <stop offset="100%" stop-color="#4a1a7a"/>
      </linearGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#if-bg)"/>
    <circle cx="300" cy="165" r="105" fill="none" stroke="#444" stroke-width="3"/>
    <path d="M300 60 A105 105 0 1 1 195 165" fill="none" stroke="url(#if-fast)" stroke-width="20" stroke-linecap="round"/>
    <path d="M195 165 A105 105 0 0 1 300 60" fill="none" stroke="url(#if-eat)" stroke-width="20" stroke-linecap="round"/>
    <circle cx="300" cy="165" r="75" fill="#1b1f2e"/>
    <text x="300" y="155" text-anchor="middle" fill="#ffffff" font-size="10">16 : 8</text>
    <text x="300" y="175" text-anchor="middle" fill="#f8f9fa" font-size="22" font-weight="bold">FAST</text>
    <text x="300" y="195" text-anchor="middle" fill="#c77dff" font-size="10">/ EAT</text>
    <text x="370" y="90" fill="#c77dff" font-size="9" font-weight="bold">FAST</text>
    <text x="210" y="115" fill="#52b788" font-size="9" font-weight="bold">EAT</text>
    <line x1="300" y1="165" x2="300" y2="100" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
    <line x1="300" y1="165" x2="340" y2="145" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="300" cy="165" r="4" fill="#ffd166"/>
    <circle cx="300" cy="62" r="3" fill="#ffffff" opacity="0.8"/>
    <circle cx="405" cy="165" r="3" fill="#ffffff" opacity="0.5"/>
    <circle cx="300" cy="268" r="3" fill="#ffffff" opacity="0.5"/>
    <circle cx="195" cy="165" r="3" fill="#ffffff" opacity="0.8"/>
    <rect x="30" y="70" width="110" height="90" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <text x="85" y="95" text-anchor="middle" fill="#c77dff" font-size="10">⏳ Remaining</text>
    <text x="85" y="125" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">14:32</text>
    <text x="85" y="145" text-anchor="middle" fill="#999" font-size="9">hours left</text>
    <rect x="460" y="70" width="115" height="35" rx="8" fill="rgba(255,255,255,0.05)"/>
    <text x="475" y="92" fill="#f4a261" font-size="10">🔥 Fat Burning</text>
    <rect x="460" y="115" width="115" height="35" rx="8" fill="rgba(255,255,255,0.05)"/>
    <text x="475" y="137" fill="#c77dff" font-size="10">🧠 Clarity</text>
    <rect x="460" y="160" width="115" height="35" rx="8" fill="rgba(255,255,255,0.05)"/>
    <text x="475" y="182" fill="#52b788" font-size="10">💪 Preserve</text>
    <rect x="460" y="205" width="115" height="35" rx="8" fill="rgba(255,255,255,0.05)"/>
    <text x="475" y="227" fill="#90e0ef" font-size="10">🛡️ Repair</text>
    <rect x="60" y="290" width="480" height="20" rx="6" fill="rgba(255,255,255,0.05)"/>
    <rect x="60" y="290" width="320" height="20" rx="6" fill="url(#if-fast)" opacity="0.6"/>
    <rect x="380" y="290" width="160" height="20" rx="6" fill="url(#if-eat)" opacity="0.6"/>
    <text x="220" y="304" text-anchor="middle" fill="#ffffff" font-size="8">Fasting (16h)</text>
    <text x="460" y="304" text-anchor="middle" fill="#ffffff" font-size="8">Eating (8h)</text>
    <circle cx="50" cy="40" r="2" fill="#ffffff" opacity="0.3"/>
    <circle cx="530" cy="50" r="2" fill="#ffffff" opacity="0.4"/>
    <circle cx="570" cy="30" r="1.5" fill="#ffd166" opacity="0.5"/>
    <circle cx="40" cy="260" r="1.5" fill="#c77dff" opacity="0.3"/>
  </svg>`,

  'lean-body-mass-calculator': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="lbm-title">
    <title id="lbm-title">Lean Body Mass Calculator</title>
    <defs>
      <linearGradient id="lbm-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0faf2"/>
        <stop offset="100%" stop-color="#d8f3dc"/>
      </linearGradient>
      <linearGradient id="lbm-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#52b788"/>
        <stop offset="100%" stop-color="#2d6a4f"/>
      </linearGradient>
      <linearGradient id="lbm-ring" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#52b788"/>
        <stop offset="100%" stop-color="#d8f3dc"/>
      </linearGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#lbm-bg)"/>
    <circle cx="150" cy="105" r="25" fill="url(#lbm-body)" opacity="0.8"/>
    <rect x="135" y="130" width="30" height="70" rx="10" fill="url(#lbm-body)" opacity="0.8"/>
    <rect x="110" y="135" width="25" height="10" rx="5" fill="url(#lbm-body)" opacity="0.7" transform="rotate(-20, 122, 140)"/>
    <rect x="165" y="135" width="25" height="10" rx="5" fill="url(#lbm-body)" opacity="0.7" transform="rotate(20, 178, 140)"/>
    <rect x="130" y="200" width="14" height="50" rx="5" fill="url(#lbm-body)" opacity="0.8"/>
    <rect x="156" y="200" width="14" height="50" rx="5" fill="url(#lbm-body)" opacity="0.8"/>
    <rect x="125" y="135" width="5" height="55" rx="2" fill="#52b788" opacity="0.4"/>
    <rect x="155" y="140" width="5" height="50" rx="2" fill="#52b788" opacity="0.3"/>
    <rect x="140" y="165" width="20" height="8" rx="2" fill="#52b788" opacity="0.3"/>
    <text x="150" y="280" text-anchor="middle" fill="#2d6a4f" font-size="12" font-weight="bold">Body Composition</text>
    <circle cx="380" cy="160" r="80" fill="none" stroke="#e0e0e0" stroke-width="14"/>
    <path d="M380 80 A80 80 0 1 1 310 210" fill="none" stroke="url(#lbm-ring)" stroke-width="14" stroke-linecap="round"/>
    <text x="380" y="150" text-anchor="middle" fill="#1b1f1e" font-size="32" font-weight="bold">78%</text>
    <text x="380" y="175" text-anchor="middle" fill="#52b788" font-size="13">Lean Mass</text>
    <rect x="330" y="260" width="100" height="24" rx="12" fill="#52b788" opacity="0.2"/>
    <text x="380" y="277" text-anchor="middle" fill="#2d6a4f" font-size="11" font-weight="bold">58.5 kg LBM</text>
    <rect x="500" y="90" width="80" height="30" rx="6" fill="#52b788" opacity="0.15"/>
    <rect x="508" y="100" width="50" height="10" rx="5" fill="#52b788" opacity="0.7"/>
    <text x="540" y="108" text-anchor="middle" fill="#fff" font-size="7">Muscle</text>
    <rect x="500" y="130" width="80" height="30" rx="6" fill="#ffd166" opacity="0.15"/>
    <rect x="508" y="140" width="35" height="10" rx="5" fill="#ffd166" opacity="0.7"/>
    <text x="526" y="148" text-anchor="middle" fill="#fff" font-size="7">Bone</text>
    <rect x="500" y="170" width="80" height="30" rx="6" fill="#90e0ef" opacity="0.15"/>
    <rect x="508" y="180" width="25" height="10" rx="5" fill="#90e0ef" opacity="0.7"/>
    <text x="521" y="188" text-anchor="middle" fill="#fff" font-size="7">Water</text>
    <rect x="500" y="210" width="80" height="30" rx="6" fill="#f4a261" opacity="0.15"/>
    <rect x="508" y="220" width="18" height="10" rx="5" fill="#f4a261" opacity="0.7"/>
    <text x="517" y="228" text-anchor="middle" fill="#fff" font-size="7">Fat</text>
    <circle cx="50" cy="40" r="5" fill="#52b788" opacity="0.2"/>
    <circle cx="560" cy="300" r="4" fill="#ffd166" opacity="0.3"/>
  </svg>`,

  'waist-to-hip-ratio': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="whr-title">
    <title id="whr-title">Waist to Hip Ratio Calculator</title>
    <defs>
      <linearGradient id="whr-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0faf2"/>
        <stop offset="100%" stop-color="#d8f3dc"/>
      </linearGradient>
      <linearGradient id="whr-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#d8f3dc"/>
        <stop offset="100%" stop-color="#52b788"/>
      </linearGradient>
      <linearGradient id="whr-tape" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#ffd166"/>
        <stop offset="100%" stop-color="#f4a261"/>
      </linearGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#whr-bg)"/>
    <circle cx="155" cy="70" r="22" fill="url(#whr-body)"/>
    <path d="M140 92 L130 130 Q125 140, 135 140 L145 140 L145 190 Q145 195, 140 195 L140 260 Q140 270, 148 270 L148 270 Q155 270, 155 260 L155 195 Q155 195, 155 195 L155 260 Q155 270, 162 270 L162 270 Q170 270, 170 260 L170 195 Q170 195, 165 195 L165 140 L175 140 Q185 140, 180 130 L170 92Z" fill="url(#whr-body)" opacity="0.85"/>
    <ellipse cx="155" cy="145" rx="22" ry="6" fill="none" stroke="url(#whr-tape)" stroke-width="4" stroke-dasharray="4 2"/>
    <text x="190" y="148" fill="#f4a261" font-size="11" font-weight="bold">Waist: 76cm</text>
    <ellipse cx="155" cy="195" rx="26" ry="7" fill="none" stroke="url(#whr-tape)" stroke-width="4" stroke-dasharray="4 2"/>
    <text x="195" y="198" fill="#f4a261" font-size="11" font-weight="bold">Hip: 96cm</text>
    <line x1="100" y1="140" x2="100" y2="200" stroke="#2d6a4f" stroke-width="1.5" opacity="0.5"/>
    <path d="M95 145 L100 140 L105 145" fill="none" stroke="#2d6a4f" stroke-width="1.5"/>
    <path d="M95 195 L100 200 L105 195" fill="none" stroke="#2d6a4f" stroke-width="1.5"/>
    <text x="85" y="175" fill="#2d6a4f" font-size="9" text-anchor="middle" transform="rotate(-90, 85, 175)">Ratio</text>
    <circle cx="420" cy="155" r="90" fill="none" stroke="#e0e0e0" stroke-width="12"/>
    <path d="M420 65 A90 90 0 0 1 496 110" fill="none" stroke="#52b788" stroke-width="12" stroke-linecap="round"/>
    <path d="M496 110 A90 90 0 0 1 505 170" fill="none" stroke="#ffd166" stroke-width="12" stroke-linecap="round"/>
    <path d="M505 170 A90 90 0 0 1 470 230" fill="none" stroke="#e76f51" stroke-width="12" stroke-linecap="round"/>
    <line x1="420" y1="155" x2="475" y2="110" stroke="#1b1f1e" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="420" cy="155" r="5" fill="#1b1f1e"/>
    <text x="420" y="150" text-anchor="middle" fill="#1b1f1e" font-size="28" font-weight="bold">0.79</text>
    <text x="420" y="172" text-anchor="middle" fill="#52b788" font-size="12">WHR</text>
    <rect x="380" y="260" width="80" height="22" rx="11" fill="#52b788" opacity="0.2"/>
    <text x="420" y="275" text-anchor="middle" fill="#2d6a4f" font-size="10" font-weight="bold">Healthy</text>
    <text x="490" y="95" fill="#52b788" font-size="9">Low</text>
    <text x="510" y="165" fill="#ffd166" font-size="9">Mod</text>
    <text x="480" y="235" fill="#e76f51" font-size="9">High</text>
    <circle cx="50" cy="300" r="4" fill="#52b788" opacity="0.2"/>
    <circle cx="560" cy="40" r="5" fill="#ffd166" opacity="0.3"/>
  </svg>`,

  'waist-to-height-ratio': `<svg class="calc-hero-svg" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="wthr-title">
    <title id="wthr-title">Waist to Height Ratio Calculator</title>
    <defs>
      <linearGradient id="wthr-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f0faf2"/>
        <stop offset="100%" stop-color="#d8f3dc"/>
      </linearGradient>
      <linearGradient id="wthr-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#b7e4c7"/>
        <stop offset="100%" stop-color="#52b788"/>
      </linearGradient>
      <linearGradient id="wthr-ruler" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffd166"/>
        <stop offset="100%" stop-color="#f4a261"/>
      </linearGradient>
    </defs>
    <rect width="600" height="340" rx="20" fill="url(#wthr-bg)"/>
    <rect x="60" y="40" width="18" height="270" rx="4" fill="url(#wthr-ruler)" opacity="0.8"/>
    <line x1="60" y1="60" x2="72" y2="60" stroke="#c66a10" stroke-width="1"/>
    <line x1="60" y1="90" x2="72" y2="90" stroke="#c66a10" stroke-width="1"/>
    <line x1="60" y1="120" x2="78" y2="120" stroke="#c66a10" stroke-width="1.5"/>
    <line x1="60" y1="150" x2="72" y2="150" stroke="#c66a10" stroke-width="1"/>
    <line x1="60" y1="180" x2="78" y2="180" stroke="#c66a10" stroke-width="1.5"/>
    <line x1="60" y1="210" x2="72" y2="210" stroke="#c66a10" stroke-width="1"/>
    <line x1="60" y1="240" x2="78" y2="240" stroke="#c66a10" stroke-width="1.5"/>
    <line x1="60" y1="270" x2="72" y2="270" stroke="#c66a10" stroke-width="1"/>
    <text x="50" y="123" text-anchor="end" fill="#856404" font-size="9">170</text>
    <text x="50" y="183" text-anchor="end" fill="#856404" font-size="9">140</text>
    <text x="50" y="243" text-anchor="end" fill="#856404" font-size="9">110</text>
    <text x="50" y="63" text-anchor="end" fill="#856404" font-size="9">200</text>
    <circle cx="170" cy="60" r="22" fill="url(#wthr-body)"/>
    <path d="M155 82 L148 118 Q143 130, 153 130 L160 130 L160 175 Q160 180, 155 180 L155 260 Q155 270, 163 270 L163 260 Q163 270, 170 270 L170 175 Q170 175, 170 175 L170 260 Q170 270, 178 270 L178 260 Q178 270, 185 270 L185 180 Q180 180, 180 175 L180 130 L187 130 Q197 130, 192 118 L185 82Z" fill="url(#wthr-body)" opacity="0.85"/>
    <line x1="80" y1="42" x2="80" y2="270" stroke="#2d6a4f" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5"/>
    <path d="M85 45 L80 40 L75 45" fill="none" stroke="#2d6a4f" stroke-width="1.5"/>
    <path d="M85 268 L80 273 L75 268" fill="none" stroke="#2d6a4f" stroke-width="1.5"/>
    <text x="93" y="157" fill="#2d6a4f" font-size="10" font-weight="bold">Height</text>
    <ellipse cx="170" cy="145" rx="21" ry="6" fill="none" stroke="#e76f51" stroke-width="3.5" stroke-dasharray="4 2"/>
    <path d="M195 145 L220 138" stroke="#e76f51" stroke-width="1.5"/>
    <text x="225" y="142" fill="#e76f51" font-size="11" font-weight="bold">Waist: 82cm</text>
    <text x="225" y="157" fill="#2d6a4f" font-size="11">Height: 175cm</text>
    <rect x="370" y="60" width="200" height="220" rx="16" fill="#ffffff" stroke="#e0e0e0" stroke-width="1"/>
    <text x="470" y="90" text-anchor="middle" fill="#1b1f1e" font-size="14" font-weight="bold">WHtR Result</text>
    <text x="470" y="140" text-anchor="middle" fill="#1b1f1e" font-size="38" font-weight="bold">0.47</text>
    <rect x="430" y="155" width="80" height="24" rx="12" fill="#52b788" opacity="0.2"/>
    <text x="470" y="171" text-anchor="middle" fill="#2d6a4f" font-size="11" font-weight="bold">Healthy</text>
    <rect x="390" y="195" width="160" height="14" rx="7" fill="#f0f0f0"/>
    <rect x="390" y="195" width="40" height="14" rx="7" fill="#90e0ef"/>
    <rect x="430" y="195" width="50" height="14" rx="0" fill="#52b788"/>
    <rect x="480" y="195" width="35" height="14" rx="0" fill="#ffd166"/>
    <rect x="515" y="195" width="35" height="14" rx="7" fill="#e76f51"/>
    <circle cx="455" cy="192" r="4" fill="#1b1f1e"/>
    <line x1="455" y1="188" x2="455" y2="192" stroke="#1b1f1e" stroke-width="2"/>
    <text x="410" y="225" fill="#90e0ef" font-size="8">Slim</text>
    <text x="450" y="225" fill="#52b788" font-size="8" font-weight="bold">Healthy</text>
    <text x="493" y="225" fill="#ffd166" font-size="8">Over</text>
    <text x="525" y="225" fill="#e76f51" font-size="8">High</text>
    <text x="470" y="260" text-anchor="middle" fill="#999" font-size="9">Target: below 0.50</text>
    <circle cx="560" cy="310" r="4" fill="#52b788" opacity="0.2"/>
    <circle cx="40" cy="310" r="3" fill="#ffd166" opacity="0.3"/>
  </svg>`
};
