// ===== REVEAL ON SCROLL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== SMOOTH CTA SCROLL =====
document.querySelectorAll('a[href="#cta"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#cta').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== TYPING INDICATOR SIMULATION (hero) =====
const headline = document.querySelector('.headline');
if (headline) {
  setTimeout(() => {
    headline.style.opacity = '0';
    headline.style.transition = 'opacity 0.3s';
    setTimeout(() => {
      headline.style.opacity = '1';
    }, 300);
  }, 100);
}

// ===== CTA BUTTON PULSE =====
const ctaButtons = document.querySelectorAll('.btn-cta');
ctaButtons.forEach(btn => {
  setInterval(() => {
    btn.style.boxShadow = '0 0 60px rgba(255,107,53,0.6)';
    setTimeout(() => {
      btn.style.boxShadow = '0 0 40px rgba(255,107,53,0.35)';
    }, 600);
  }, 2500);
});
