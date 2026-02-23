document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const backToTop = document.querySelector('.back-to-top');
  const fadeElements = document.querySelectorAll('.fade-in');
  const faqItems = document.querySelectorAll('.faq-item');
  const readingProgress = document.querySelector('.reading-progress-fill');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }

  var ddWrap = document.querySelector('.nav-dropdown-wrap');
  var ddTrigger = document.querySelector('.nav-dropdown-trigger');
  if (ddWrap && ddTrigger) {
    var isMobile = function() { return window.innerWidth <= 768; };
    ddTrigger.addEventListener('click', function(e) {
      if (isMobile()) {
        e.preventDefault();
        ddWrap.classList.toggle('open');
      }
    });
    document.addEventListener('click', function(e) {
      if (!ddWrap.contains(e.target)) {
        ddWrap.classList.remove('open');
      }
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') ddWrap.classList.remove('open');
    });
    if (window.location.pathname.indexOf('/calculators/') !== -1) {
      ddTrigger.classList.add('active');
    }
  }

  window.addEventListener('scroll', function() {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    if (backToTop) {
      backToTop.classList.toggle('show', window.scrollY > 400);
    }
    if (readingProgress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var s = (window.scrollY / h) * 100;
      readingProgress.style.width = Math.min(s, 100) + '%';
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(function(el) { observer.observe(el); });

  faqItems.forEach(function(item) {
    var q = item.querySelector('.faq-question');
    if (q) {
      q.addEventListener('click', function() {
        var wasActive = item.classList.contains('active');
        faqItems.forEach(function(i) { i.classList.remove('active'); });
        if (!wasActive) item.classList.add('active');
      });
    }
  });

  var counterDone = false;
  var statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    var statsObserver = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting && !counterDone) {
        counterDone = true;
        document.querySelectorAll('.stat-number').forEach(function(el) {
          var target = parseInt(el.getAttribute('data-target'));
          var suffix = el.getAttribute('data-suffix') || '';
          var duration = 2000;
          var start = 0;
          var step = target / (duration / 16);
          var timer = setInterval(function() {
            start += step;
            if (start >= target) { start = target; clearInterval(timer); }
            el.textContent = Math.floor(start) + suffix;
          }, 16);
        });
      }
    }, { threshold: 0.5 });
    statsObserver.observe(statsBar);
  }
});

const vhChat = {

  isOpen: false,

  knowledge: {

    greetings: {
      triggers: ['hello','hi','hey','good morning',
                 'good evening','howdy','sup','greetings'],
      response: `👋 Hello! I'm the <strong>VitalHealth Assistant</strong> — your free health Q&A bot.<br><br>
      I can answer questions about:<br>
      • BMI & body weight<br>
      • Calories & nutrition<br>
      • Sleep & recovery<br>
      • Heart health & vitals<br>
      • Exercise & fitness<br>
      • Mental health & stress<br><br>
      What health topic can I help you with today?`
    },

    bmi: {
      triggers: ['bmi','body mass index','am i overweight',
                 'am i obese','healthy weight','weight category'],
      response: `⚖️ <strong>BMI (Body Mass Index)</strong> measures body weight relative to height.<br><br>
      <strong>BMI Ranges:</strong><br>
      • Under 18.5 — Underweight<br>
      • 18.5–24.9 — ✅ Normal/Healthy<br>
      • 25.0–29.9 — Overweight<br>
      • 30.0+ — Obese<br><br>
      <strong>Formula:</strong> Weight(kg) ÷ Height(m)²<br><br>
      💡 Note: BMI doesn't account for muscle mass. Athletes may have high BMI but low body fat.<br><br>
      👉 Use our <a href="/calculators/bmi-calculator.html" style="color:#2d6a4f;font-weight:600;">BMI Calculator</a> for your exact score!`
    },

    calories: {
      triggers: ['calories','calorie','how many calories',
                 'caloric intake','energy intake',
                 'daily calories','kcal'],
      response: `🔥 <strong>Daily Calorie Needs</strong> depend on your age, gender, weight, height and activity level.<br><br>
      <strong>General Guidelines:</strong><br>
      • Women: 1,600–2,400 cal/day<br>
      • Men: 2,000–3,000 cal/day<br><br>
      <strong>Goals:</strong><br>
      • Lose weight: eat 300–500 less than TDEE<br>
      • Maintain: eat at your TDEE<br>
      • Gain muscle: eat 200–300 more than TDEE<br><br>
      👉 Get your exact number with our <a href="/calculators/calorie-calculator.html" style="color:#2d6a4f;font-weight:600;">Calorie Calculator</a>!`
    },

    protein: {
      triggers: ['protein','how much protein','protein intake',
                 'protein per day','daily protein',
                 'protein for muscle'],
      response: `💪 <strong>Daily Protein Intake</strong> recommendations:<br><br>
      • Sedentary adults: 0.8g per kg bodyweight<br>
      • Active people: 1.2–1.6g per kg<br>
      • Athletes/muscle building: 1.6–2.2g per kg<br><br>
      <strong>Best protein sources:</strong><br>
      🥚 Eggs • 🍗 Chicken • 🐟 Fish • 🫘 Legumes • 🥛 Greek yogurt • 🌰 Nuts<br><br>
      👉 Try our <a href="/calculators/protein-intake-calculator.html" style="color:#2d6a4f;font-weight:600;">Protein Calculator</a> for your exact needs!`
    },

    water: {
      triggers: ['water','hydration','drink water',
                 'how much water','daily water',
                 'water intake','dehydrated'],
      response: `💧 <strong>Daily Water Intake</strong>:<br><br>
      • General rule: 8 glasses (2 litres) per day<br>
      • Better rule: 35ml per kg of bodyweight<br>
      • Hot weather: add 500ml–1L extra<br>
      • Exercise: add 500ml per hour of activity<br><br>
      <strong>Signs of dehydration:</strong><br>
      😵 Dark urine • Headache • Fatigue • Dry mouth • Dizziness<br><br>
      💡 Tip: Check your urine — pale yellow means well hydrated!<br><br>
      👉 <a href="/calculators/water-intake-calculator.html" style="color:#2d6a4f;font-weight:600;">Calculate your exact water needs →</a>`
    },

    sleep: {
      triggers: ['sleep','how much sleep','sleep hours',
                 'sleep deprivation','insomnia',
                 'can\'t sleep','tired','fatigue'],
      response: `😴 <strong>Recommended Sleep Duration</strong> by age:<br><br>
      • Babies (0–1yr): 14–17 hours<br>
      • Children (6–12): 9–12 hours<br>
      • Teenagers (13–18): 8–10 hours<br>
      • Adults (18–64): <strong>7–9 hours</strong><br>
      • Seniors (65+): 7–8 hours<br><br>
      <strong>Better sleep tips:</strong><br>
      🌙 Same bedtime daily • 📱 No screens 1hr before bed • ❄️ Cool room (18°C) • ☕ No caffeine after 2pm • 🧘 Relaxation routine<br><br>
      👉 <a href="/calculators/sleep-calculator.html" style="color:#2d6a4f;font-weight:600;">Calculate your ideal sleep schedule →</a>`
    },

    heartrate: {
      triggers: ['heart rate','pulse','bpm','resting heart',
                 'heart beat','normal heart rate',
                 'target heart rate'],
      response: `❤️ <strong>Heart Rate Guide:</strong><br><br>
      <strong>Resting Heart Rate (adults):</strong><br>
      • Athletes: 40–60 BPM<br>
      • Normal: 60–100 BPM<br>
      • High (concerning): 100+ BPM<br><br>
      <strong>Target Heart Rate during exercise:</strong><br>
      • Moderate intensity: 50–70% of max HR<br>
      • Vigorous intensity: 70–85% of max HR<br>
      • Max HR = 220 minus your age<br><br>
      💡 Measure your pulse at your wrist or neck for 15 seconds, multiply by 4.<br><br>
      👉 <a href="/calculators/heart-rate-calculator.html" style="color:#2d6a4f;font-weight:600;">Heart Rate Calculator →</a>`
    },

    weightloss: {
      triggers: ['lose weight','weight loss','fat loss',
                 'how to lose','losing weight',
                 'reduce weight','slim down','burn fat'],
      response: `📉 <strong>Evidence-Based Weight Loss:</strong><br><br>
      <strong>The fundamentals:</strong><br>
      1. Calorie deficit (eat less than you burn)<br>
      2. High protein diet (keeps you full)<br>
      3. Strength training (preserve muscle)<br>
      4. Cardio exercise (burn extra calories)<br>
      5. Quality sleep (controls hunger hormones)<br>
      6. Manage stress (reduces cortisol/fat storage)<br><br>
      <strong>Safe rate of loss:</strong><br>
      • 0.5–1kg per week is sustainable<br>
      • Crash diets cause muscle loss — avoid!<br><br>
      👉 Start with our <a href="/calculators/calorie-calculator.html" style="color:#2d6a4f;font-weight:600;">Calorie Calculator</a> to find your deficit!`
    },

    bloodpressure: {
      triggers: ['blood pressure','bp','hypertension',
                 'high blood pressure','systolic',
                 'diastolic','normal bp'],
      response: `🩺 <strong>Blood Pressure Ranges:</strong><br><br>
      • Normal: below 120/80 mmHg ✅<br>
      • Elevated: 120–129 / below 80<br>
      • High Stage 1: 130–139 / 80–89<br>
      • High Stage 2: 140+ / 90+<br>
      • Crisis: 180+ / 120+ 🚨<br><br>
      <strong>Ways to lower blood pressure naturally:</strong><br>
      🥗 DASH diet • 🚶 Regular exercise • 🧂 Reduce sodium • 🚭 Quit smoking • 🍷 Limit alcohol • 😌 Reduce stress<br><br>
      👉 <a href="/calculators/blood-pressure-checker.html" style="color:#2d6a4f;font-weight:600;">Check your BP risk →</a>`
    },

    diabetes: {
      triggers: ['diabetes','blood sugar','glucose',
                 'diabetic','prediabetes','insulin',
                 'type 2 diabetes'],
      response: `🩸 <strong>Blood Sugar Levels:</strong><br><br>
      <strong>Fasting glucose:</strong><br>
      • Normal: 70–99 mg/dL ✅<br>
      • Prediabetes: 100–125 mg/dL ⚠️<br>
      • Diabetes: 126+ mg/dL 🚨<br><br>
      <strong>Prevention tips:</strong><br>
      • Maintain healthy weight<br>
      • Exercise 150 min/week minimum<br>
      • Eat whole foods, limit sugar<br>
      • Avoid processed carbs<br>
      • Get regular blood tests<br><br>
      👉 <a href="/calculators/diabetes-risk-calculator.html" style="color:#2d6a4f;font-weight:600;">Check your diabetes risk →</a>`
    },

    stress: {
      triggers: ['stress','stressed','anxiety','anxious',
                 'worry','overwhelmed','mental health',
                 'depression','burnout'],
      response: `🧠 <strong>Managing Stress & Anxiety:</strong><br><br>
      <strong>Immediate relief techniques:</strong><br>
      • Box breathing: 4s in, 4s hold, 4s out, 4s hold<br>
      • 5-4-3-2-1 grounding technique<br>
      • Cold water on face/wrists<br>
      • 10 min walk outdoors<br><br>
      <strong>Long-term strategies:</strong><br>
      🧘 Daily meditation (even 10 mins) • 🏃 Regular exercise • 😴 Prioritise sleep • 👥 Social connections • 📵 Limit news/social media<br><br>
      ⚠️ If stress is severe or persistent, please consult a mental health professional.<br><br>
      👉 <a href="/calculators/stress-level-calculator.html" style="color:#2d6a4f;font-weight:600;">Check your stress level →</a>`
    },

    cholesterol: {
      triggers: ['cholesterol','ldl','hdl',
                 'high cholesterol','triglycerides',
                 'cholesterol levels'],
      response: `💊 <strong>Cholesterol Levels Guide:</strong><br><br>
      <strong>Total Cholesterol:</strong><br>
      • Desirable: below 200 mg/dL ✅<br>
      • Borderline: 200–239 mg/dL<br>
      • High: 240+ mg/dL 🚨<br><br>
      <strong>LDL (bad) Cholesterol:</strong><br>
      • Optimal: below 100 mg/dL<br>
      • Near optimal: 100–129<br><br>
      <strong>HDL (good) Cholesterol:</strong><br>
      • Good: 60+ mg/dL (protective)<br>
      • Low risk: 40–59 mg/dL<br><br>
      <strong>Lower cholesterol naturally:</strong><br>
      🐟 Omega-3s • 🌾 Oats & fiber • 🫒 Olive oil • 🚭 Quit smoking • 🏃 Exercise regularly<br><br>
      👉 <a href="/calculators/cholesterol-risk-calculator.html" style="color:#2d6a4f;font-weight:600;">Check cholesterol risk →</a>`
    },

    macros: {
      triggers: ['macros','macronutrients','protein carbs fat',
                 'macro split','macro ratio',
                 'carbs fat protein'],
      response: `🥗 <strong>Macronutrient Guide:</strong><br><br>
      <strong>Standard balanced split:</strong><br>
      • Protein: 25–30% of calories<br>
      • Carbohydrates: 45–55%<br>
      • Fats: 20–30%<br><br>
      <strong>For weight loss:</strong><br>
      Protein: 35% • Carbs: 35% • Fat: 30%<br><br>
      <strong>For muscle gain:</strong><br>
      Protein: 30% • Carbs: 50% • Fat: 20%<br><br>
      <strong>Keto diet split:</strong><br>
      Fat: 70% • Protein: 25% • Carbs: 5%<br><br>
      👉 <a href="/calculators/macro-calculator.html" style="color:#2d6a4f;font-weight:600;">Calculate your exact macros →</a>`
    },

    keto: {
      triggers: ['keto','ketosis','ketogenic',
                 'low carb diet','keto diet'],
      response: `🥑 <strong>Ketogenic Diet Guide:</strong><br><br>
      <strong>Keto macro split:</strong><br>
      • Fat: 70–75% of calories<br>
      • Protein: 20–25%<br>
      • Carbs: 5% (20–50g net carbs/day)<br><br>
      <strong>Best keto foods:</strong><br>
      🥑 Avocado • 🥚 Eggs • 🥩 Meat & fish • 🧀 Cheese • 🥦 Non-starchy vegetables • 🫒 Olive oil • 🌰 Nuts & seeds<br><br>
      <strong>Foods to avoid:</strong><br>
      ❌ Bread, rice, pasta, sugar, fruit juice, starchy vegetables, most fruit<br><br>
      ⚠️ Consult a doctor before starting keto if you have any medical conditions.<br><br>
      👉 <a href="/calculators/keto-calculator.html" style="color:#2d6a4f;font-weight:600;">Keto Calculator →</a>`
    },

    intermittentfasting: {
      triggers: ['intermittent fasting','if','16 8',
                 'fasting','16:8','18:6','omad',
                 'fasting window','eating window'],
      response: `⏰ <strong>Intermittent Fasting Guide:</strong><br><br>
      <strong>Popular IF methods:</strong><br>
      • 16:8 — Fast 16hrs, eat in 8hr window<br>
      • 18:6 — Fast 18hrs, eat in 6hr window<br>
      • 5:2 — Normal 5 days, 500 cal x 2 days<br>
      • OMAD — One Meal A Day<br><br>
      <strong>Benefits of IF:</strong><br>
      ✅ Fat burning • Insulin sensitivity • Mental clarity • Cellular autophagy • Simplified meal planning<br><br>
      <strong>Who should avoid IF:</strong><br>
      ❌ Pregnant women • People with eating disorders • Type 1 diabetics • Those on certain medications<br><br>
      👉 <a href="/calculators/intermittent-fasting-calculator.html" style="color:#2d6a4f;font-weight:600;">IF Schedule Calculator →</a>`
    },

    exercise: {
      triggers: ['exercise','workout','gym','training',
                 'fitness','how to exercise','hiit',
                 'cardio','strength training'],
      response: `🏋️ <strong>Exercise Recommendations:</strong><br><br>
      <strong>WHO Guidelines (adults):</strong><br>
      • 150–300 min moderate cardio/week, OR<br>
      • 75–150 min vigorous cardio/week<br>
      • Plus: 2+ strength sessions per week<br><br>
      <strong>Best exercises for weight loss:</strong><br>
      🏃 Running • 🚴 Cycling • 🏊 Swimming • 💪 HIIT • 🏋️ Weight training<br><br>
      <strong>Beginner tip:</strong><br>
      Start with 3 x 30 min sessions per week. Consistency beats intensity — show up first!<br><br>
      👉 <a href="/calculators/tdee-calculator.html" style="color:#2d6a4f;font-weight:600;">Calculate your calorie burn →</a>`
    },

    vitamin_d: {
      triggers: ['vitamin d','vitamin d3','vit d',
                 'sunshine vitamin','vitamin d deficiency'],
      response: `☀️ <strong>Vitamin D Guide:</strong><br><br>
      <strong>Optimal blood levels:</strong><br>
      • Deficient: below 20 ng/mL<br>
      • Insufficient: 20–29 ng/mL<br>
      • Sufficient: 30–60 ng/mL ✅<br>
      • Optimal: 40–60 ng/mL<br><br>
      <strong>Deficiency symptoms:</strong><br>
      😔 Fatigue • Bone pain • Muscle weakness • Depression • Frequent illness<br><br>
      <strong>Sources of Vitamin D:</strong><br>
      ☀️ Sunlight (15–30 min/day) • 🐟 Fatty fish • 🥚 Egg yolks • 🥛 Fortified milk • 💊 Supplements<br><br>
      👉 <a href="/calculators/vitamin-d-calculator.html" style="color:#2d6a4f;font-weight:600;">Vitamin D Calculator →</a>`
    },

    bodyfat: {
      triggers: ['body fat','body fat percentage',
                 'fat percentage','lean mass',
                 'fat vs muscle'],
      response: `📊 <strong>Body Fat % Reference Ranges:</strong><br><br>
      <strong>Women:</strong><br>
      • Essential fat: 10–13%<br>
      • Athletic: 14–20% ✅<br>
      • Fitness: 21–24%<br>
      • Average: 25–31%<br>
      • Obese: 32%+<br><br>
      <strong>Men:</strong><br>
      • Essential fat: 2–5%<br>
      • Athletic: 6–13% ✅<br>
      • Fitness: 14–17%<br>
      • Average: 18–24%<br>
      • Obese: 25%+<br><br>
      👉 <a href="/calculators/body-fat-calculator.html" style="color:#2d6a4f;font-weight:600;">Calculate your body fat % →</a>`
    },

    pregnancy: {
      triggers: ['pregnancy','pregnant','due date',
                 'baby','trimester','conception',
                 'prenatal'],
      response: `🤰 <strong>Pregnancy Health Guide:</strong><br><br>
      <strong>Trimesters:</strong><br>
      • 1st: Weeks 1–13 (organ development)<br>
      • 2nd: Weeks 14–26 (growth, movement)<br>
      • 3rd: Weeks 27–40 (final development)<br><br>
      <strong>Key prenatal nutrients:</strong><br>
      💊 Folic acid (neural tube) • Iron (blood) • Calcium (bones) • Omega-3 (brain) • Vitamin D (immunity)<br><br>
      <strong>Foods to avoid:</strong><br>
      ❌ Raw fish/meat • Unpasteurised dairy • Alcohol • High-mercury fish • Excess caffeine (200mg max/day)<br><br>
      👉 <a href="/calculators/pregnancy-due-date-calculator.html" style="color:#2d6a4f;font-weight:600;">Due Date Calculator →</a>`
    },

    gut: {
      triggers: ['gut health','gut','microbiome',
                 'digestion','bloating','probiotics',
                 'digestive'],
      response: `🦠 <strong>Gut Health Guide:</strong><br><br>
      <strong>Signs of poor gut health:</strong><br>
      😣 Bloating • Constipation • Diarrhoea • Food intolerances • Fatigue • Skin issues<br><br>
      <strong>Best foods for gut health:</strong><br>
      🫙 Yogurt & kefir (probiotics) • 🧅 Garlic & onions (prebiotics) • 🌾 Whole grains (fiber) • 🥦 Broccoli & leafy greens • 🫐 Berries (antioxidants) • 🍵 Green tea<br><br>
      <strong>Gut health habits:</strong><br>
      ✅ Eat diverse foods • Stay hydrated • Exercise regularly • Manage stress • Limit processed foods & alcohol`
    },

    aging: {
      triggers: ['aging','ageing','anti aging',
                 'longevity','life expectancy',
                 'live longer','healthy aging'],
      response: `🌿 <strong>Healthy Aging & Longevity:</strong><br><br>
      <strong>Evidence-based longevity habits:</strong><br>
      1. 🏃 Stay physically active daily<br>
      2. 🥗 Eat predominantly plants<br>
      3. 😴 Prioritise 7–9 hours sleep<br>
      4. 👥 Maintain strong social connections<br>
      5. 🧘 Manage stress effectively<br>
      6. 🚭 Never smoke<br>
      7. 🍷 Limit or avoid alcohol<br>
      8. 🧠 Keep your mind active (learn, read)<br>
      9. 🩺 Regular health check-ups<br>
      10. 😊 Maintain sense of purpose<br><br>
      👉 <a href="/calculators/life-expectancy-calculator.html" style="color:#2d6a4f;font-weight:600;">Life Expectancy Calculator →</a>`
    },

    calculator: {
      triggers: ['calculator','calculate','tool',
                 'which calculator','what calculator'],
      response: `🛠️ <strong>Our Free Health Calculators:</strong><br><br>
      <strong>⚖️ Weight & Body:</strong><br>
      BMI • Body Fat • Ideal Weight • Lean Mass<br><br>
      <strong>🍎 Nutrition:</strong><br>
      Calories • Macros • TDEE • BMR • Protein<br><br>
      <strong>❤️ Heart & Vitals:</strong><br>
      Heart Rate • Blood Pressure • Cholesterol<br><br>
      <strong>👩 Women's Health:</strong><br>
      Pregnancy • Ovulation • Menstrual Cycle<br><br>
      <strong>🏋️ Fitness:</strong><br>
      VO2 Max • 1 Rep Max • Steps to Calories<br><br>
      👉 <a href="/calculators/index.html" style="color:#2d6a4f;font-weight:600;">Browse all 50+ free calculators →</a>`
    },

    fallback: [
      `I don't have specific information about that, but I can help with topics like BMI, calories, sleep, heart health, nutrition, and exercise. What would you like to know? 💚`,
      `That's a great question! For detailed medical advice on that topic, I'd recommend consulting a healthcare professional. Meanwhile, I can help with general health topics — try asking about <strong>BMI, calories, sleep, or water intake</strong>! 🌿`,
      `I'm best at answering general health and wellness questions. Try asking me about weight loss, nutrition, heart health, or sleep! Or browse our <a href="/calculators/index.html" style="color:#2d6a4f;font-weight:600;">free calculators →</a> 💪`
    ]
  },

  init() {
    this.bindEvents();
    setTimeout(() => this.addMessage('bot',
      `👋 Hi! I'm your <strong>VitalHealth Assistant</strong>. Ask me anything about health, nutrition, or wellness — or click a topic below to get started! 💚`
    ), 500);
  },

  bindEvents() {
    document.getElementById('vh-chat-toggle')
      .addEventListener('click', () => this.toggle());
    document.getElementById('vh-chat-minimize')
      .addEventListener('click', () => this.toggle());
    document.getElementById('vh-chat-send')
      .addEventListener('click', () => this.send());
    document.getElementById('vh-chat-input')
      .addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.send();
      });
  },

  toggle() {
    this.isOpen = !this.isOpen;
    const win = document.getElementById('vh-chat-window');
    const chatIcon = document.getElementById('vh-chat-icon');
    const closeIcon = document.getElementById('vh-close-icon');
    const badge = document.getElementById('vh-chat-badge');

    if (this.isOpen) {
      win.style.display = 'flex';
      win.style.flexDirection = 'column';
      chatIcon.style.display = 'none';
      closeIcon.style.display = 'block';
      badge.style.display = 'none';
      document.getElementById('vh-chat-input').focus();
    } else {
      win.style.display = 'none';
      chatIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  },

  send() {
    const input = document.getElementById('vh-chat-input');
    const text = input.value.trim();
    if (!text) return;

    this.addMessage('user', text);
    input.value = '';
    this.showTyping();

    setTimeout(() => {
      this.removeTyping();
      const response = this.getResponse(text.toLowerCase());
      this.addMessage('bot', response);
    }, 900 + Math.random() * 600);
  },

  quickAsk(topic) {
    document.getElementById('vh-chat-input').value = topic;
    this.send();
  },

  getResponse(input) {
    for (const key in this.knowledge) {
      if (key === 'fallback') continue;
      const item = this.knowledge[key];
      if (item.triggers &&
          item.triggers.some(t => input.includes(t))) {
        return item.response;
      }
    }
    const fb = this.knowledge.fallback;
    return fb[Math.floor(Math.random() * fb.length)];
  },

  addMessage(type, text) {
    const msgs = document.getElementById('vh-chat-messages');
    const div = document.createElement('div');
    div.className = `vh-msg vh-msg-${type}`;
    div.innerHTML = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  },

  showTyping() {
    const msgs = document.getElementById('vh-chat-messages');
    const div = document.createElement('div');
    div.className = 'vh-typing';
    div.id = 'vh-typing-indicator';
    div.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  },

  removeTyping() {
    const t = document.getElementById('vh-typing-indicator');
    if (t) t.remove();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('vh-chatbot')) {
    vhChat.init();
  }
});

function showResult(boxId, value, label, suggestion, color) {
  var box = document.getElementById(boxId);
  if (!box) return;
  box.className = 'result-box show ' + color;
  box.querySelector('.result-value').textContent = value;
  box.querySelector('.result-label').textContent = label;
  box.querySelector('.result-suggestion').textContent = suggestion;
  var pf = box.querySelector('.progress-fill');
  if (pf) {
    pf.className = 'progress-fill ' + color;
    var pct = Math.min(parseFloat(value) / 50 * 100, 100);
    pf.style.width = pct + '%';
  }
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
