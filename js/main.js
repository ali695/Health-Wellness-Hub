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
