// ===== SUPABASE CONFIG =====
const SUPA_URL = 'https://wamwesbnyvflajmkeqhg.supabase.co';
const SUPA_KEY = 'sb_publishable_A39ksXNasaS7Qj5khpgRBg_rw9bhW0y';

// ===== LEAD FORM =====
(function initLeadForm() {
  const form = document.getElementById('lead-form');
  if (!form) return;

  const successEl = document.getElementById('form-success');
  const errorEl   = document.getElementById('form-error');
  const submitBtn = form.querySelector('.form-submit-btn');

  function setError(field) {
    field.classList.add('error');
    field.addEventListener('input', () => field.classList.remove('error'), { once: true });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome     = document.getElementById('f-nome');
    const whatsapp = document.getElementById('f-whatsapp');
    const segmento = document.getElementById('f-segmento');

    let valid = true;
    if (!nome.value.trim())     { setError(nome);     valid = false; }
    if (!whatsapp.value.trim()) { setError(whatsapp);  valid = false; }
    if (!segmento.value)        { setError(segmento); valid = false; }
    if (!valid) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando…';
    successEl.style.display = 'none';
    errorEl.style.display   = 'none';

    try {
      const res = await fetch(`${SUPA_URL}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          'apikey':        SUPA_KEY,
          'Authorization': `Bearer ${SUPA_KEY}`,
          'Content-Type':  'application/json',
          'Prefer':        'return=minimal',
        },
        body: JSON.stringify({
          nome:     nome.value.trim(),
          whatsapp: whatsapp.value.trim(),
          segmento: segmento.value,
        }),
      });

      if (res.ok || res.status === 201) {
        form.reset();
        successEl.style.display = 'block';
        successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        const err = await res.json().catch(() => ({}));
        console.error('Supabase error:', err);
        errorEl.style.display = 'block';
      }
    } catch (err) {
      console.error('Network error:', err);
      errorEl.style.display = 'block';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'QUERO ATIVAR O KAIROS AGORA →';
    }
  });
})();

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

// ===== CTA BUTTON PULSE =====
document.querySelectorAll('.btn-cta').forEach(btn => {
  setInterval(() => {
    btn.style.boxShadow = '0 0 60px rgba(21,101,255,0.75), 0 4px 20px rgba(0,0,0,0.4)';
    setTimeout(() => {
      btn.style.boxShadow = '0 0 30px rgba(21,101,255,0.5), 0 4px 20px rgba(0,0,0,0.4)';
    }, 600);
  }, 2500);
});

// ===== COUNTDOWN TIMER =====
(function initCountdown() {
  const KEY = 'kairos_cd_target';
  let target = sessionStorage.getItem(KEY);
  if (!target) {
    target = Date.now() + (23 * 3600 + 59 * 60 + 59) * 1000;
    sessionStorage.setItem(KEY, target);
  } else {
    target = parseInt(target, 10);
  }

  function tick() {
    let diff = Math.max(0, target - Date.now());
    const h = Math.floor(diff / 3600000); diff %= 3600000;
    const m = Math.floor(diff / 60000);   diff %= 60000;
    const s = Math.floor(diff / 1000);
    const pad = n => String(n).padStart(2, '0');

    ['cd-h', 'cd-h2'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = pad(h); });
    ['cd-m', 'cd-m2'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = pad(m); });
    ['cd-s', 'cd-s2'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = pad(s); });
  }

  tick();
  setInterval(tick, 1000);
})();

// ===== VAGAS COUNTER =====
(function initVagas() {
  let remaining = 7;
  const total = 10;

  function update() {
    ['vagas-count', 'vagas-count2'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = remaining;
    });
    const fill = document.getElementById('vagas-fill');
    if (fill) fill.style.width = (((total - remaining) / total) * 100) + '%';
  }

  update();
  // Visual urgency: drop one after 45s
  setTimeout(() => {
    if (remaining > 3) { remaining--; update(); }
  }, 45000);
})();

// ===== JACOB & CO WATCH CANVAS =====
(function drawWatch() {
  const canvas = document.getElementById('watch-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;
  const R = W / 2 - 5;

  function frame() {
    ctx.clearRect(0, 0, W, H);

    const now   = new Date();
    const ms    = now.getMilliseconds();
    const secs  = now.getSeconds() + ms / 1000;
    const mins  = now.getMinutes() + secs / 60;
    const hrs   = (now.getHours() % 12) + mins / 60;

    // --- Dial background ---
    const bgGrad = ctx.createRadialGradient(cx, cy - 30, 30, cx, cy, R);
    bgGrad.addColorStop(0, '#0E1930');
    bgGrad.addColorStop(1, '#050814');
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fillStyle = bgGrad;
    ctx.fill();

    // --- Gold outer bezel ---
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.strokeStyle = '#C9A84C';
    ctx.lineWidth = 7;
    ctx.stroke();

    // --- Inner bezel rings ---
    [R - 9, R - 14].forEach((r, i) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = i === 0 ? 'rgba(201,168,76,0.35)' : 'rgba(21,101,255,0.3)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
    });

    // --- Hour & minute indices ---
    for (let i = 0; i < 60; i++) {
      const angle = (i / 60) * Math.PI * 2 - Math.PI / 2;
      const isHour = i % 5 === 0;
      const r1 = R - 16;
      const r2 = r1 - (isHour ? 10 : 5);
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1);
      ctx.lineTo(cx + Math.cos(angle) * r2, cy + Math.sin(angle) * r2);
      ctx.strokeStyle = isHour ? '#C9A84C' : 'rgba(201,168,76,0.3)';
      ctx.lineWidth = isHour ? (i % 15 === 0 ? 3 : 2) : 0.8;
      ctx.stroke();
    }

    // --- Sub-dial 1: Small seconds (6 o'clock) ---
    const d1x = cx, d1y = cy + 58, d1r = 26;
    ctx.beginPath();
    ctx.arc(d1x, d1y, d1r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(4,6,16,0.9)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(201,168,76,0.45)';
    ctx.lineWidth = 1;
    ctx.stroke();
    // ticks
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(d1x + Math.cos(a) * (d1r - 4), d1y + Math.sin(a) * (d1r - 4));
      ctx.lineTo(d1x + Math.cos(a) * (d1r - 8), d1y + Math.sin(a) * (d1r - 8));
      ctx.strokeStyle = 'rgba(201,168,76,0.4)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }
    const ssAngle = (secs / 60) * Math.PI * 2 - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(d1x - Math.cos(ssAngle) * 6, d1y - Math.sin(ssAngle) * 6);
    ctx.lineTo(d1x + Math.cos(ssAngle) * (d1r - 7), d1y + Math.sin(ssAngle) * (d1r - 7));
    ctx.strokeStyle = '#4A9EFF';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(d1x, d1y, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#C9A84C';
    ctx.fill();

    // --- Sub-dial 2: Power reserve (10 o'clock) ---
    const d2x = cx - 52, d2y = cy - 40, d2r = 20;
    ctx.beginPath();
    ctx.arc(d2x, d2y, d2r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(4,6,16,0.9)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(21,101,255,0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();
    const prNeedle = -Math.PI * 0.7 + Math.sin(secs * 0.05) * 0.12;
    ctx.beginPath();
    ctx.moveTo(d2x, d2y);
    ctx.lineTo(d2x + Math.cos(prNeedle) * (d2r - 5), d2y + Math.sin(prNeedle) * (d2r - 5));
    ctx.strokeStyle = '#C9A84C';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(d2x, d2y, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = '#C9A84C';
    ctx.fill();
    ctx.font = '5px Inter';
    ctx.fillStyle = 'rgba(201,168,76,0.65)';
    ctx.textAlign = 'center';
    ctx.fillText('POWER', d2x, d2y + d2r + 9);

    // --- Sub-dial 3: Date (2 o'clock) ---
    const d3x = cx + 52, d3y = cy - 40, d3r = 20;
    ctx.beginPath();
    ctx.arc(d3x, d3y, d3r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(4,6,16,0.9)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(21,101,255,0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.font = 'bold 11px Inter';
    ctx.fillStyle = '#4A9EFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(now.getDate(), d3x, d3y);
    ctx.textBaseline = 'alphabetic';
    ctx.font = '5px Inter';
    ctx.fillStyle = 'rgba(74,158,255,0.65)';
    ctx.fillText('DATE', d3x, d3y + d3r + 9);

    // --- Tourbillon cage (center, slight offset down) ---
    const tbAngle = (secs / 60) * Math.PI * 2;
    ctx.save();
    ctx.translate(cx, cy + 18);
    ctx.rotate(tbAngle);
    ctx.beginPath();
    ctx.arc(0, 0, 9, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(201,168,76,0.35)';
    ctx.lineWidth = 0.8;
    ctx.stroke();
    [0, 90, 180, 270].forEach(deg => {
      const rad = deg * Math.PI / 180;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(rad) * 9, Math.sin(rad) * 9);
      ctx.strokeStyle = 'rgba(201,168,76,0.25)';
      ctx.lineWidth = 0.6;
      ctx.stroke();
    });
    ctx.restore();

    // --- Brand text ---
    ctx.font = 'bold 8.5px Inter';
    ctx.fillStyle = 'rgba(201,168,76,0.95)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('KAIROS', cx, cy - 20);
    ctx.font = '5px Inter';
    ctx.fillStyle = 'rgba(74,158,255,0.65)';
    ctx.fillText('AI CONVERSION ENGINE', cx, cy - 11);

    // --- Minute hand ---
    const minAngle = (mins / 60) * Math.PI * 2 - Math.PI / 2;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(minAngle);
    ctx.beginPath();
    ctx.moveTo(-2.5, 6);
    ctx.lineTo(-1.5, -(R - 30));
    ctx.lineTo(1.5, -(R - 30));
    ctx.lineTo(2.5, 6);
    ctx.closePath();
    ctx.fillStyle = '#D8E4F0';
    ctx.fill();
    ctx.restore();

    // --- Hour hand ---
    const hrAngle = (hrs / 12) * Math.PI * 2 - Math.PI / 2;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(hrAngle);
    ctx.beginPath();
    ctx.moveTo(-3.5, 8);
    ctx.lineTo(-2.5, -(R - 52));
    ctx.lineTo(2.5, -(R - 52));
    ctx.lineTo(3.5, 8);
    ctx.closePath();
    ctx.fillStyle = '#D8E4F0';
    ctx.fill();
    ctx.restore();

    // --- Second hand (sweep, gold) ---
    const secAngle = (secs / 60) * Math.PI * 2 - Math.PI / 2;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(secAngle);
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(0, -(R - 22));
    ctx.strokeStyle = '#C9A84C';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 18);
    ctx.strokeStyle = '#C9A84C';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();

    // --- Centre cap ---
    ctx.beginPath();
    ctx.arc(cx, cy, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#C9A84C';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = '#050814';
    ctx.fill();

    requestAnimationFrame(frame);
  }

  frame();
})();

// ===== RPM GAUGE CANVAS =====
function startRPM() {
  const canvas = document.getElementById('rpm-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2 + 8;
  const R = 44;

  let val = 0.6, target = 0.75;

  function frame() {
    ctx.clearRect(0, 0, W, H);

    val += (target - val) * 0.04;
    if (Math.abs(val - target) < 0.015) target = 0.35 + Math.random() * 0.55;

    // Track arc
    ctx.beginPath();
    ctx.arc(cx, cy, R, Math.PI * 0.75, Math.PI * 2.25);
    ctx.strokeStyle = 'rgba(255,255,255,0.07)';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Value arc
    const grad = ctx.createLinearGradient(cx - R, cy, cx + R, cy);
    grad.addColorStop(0, '#1565FF');
    grad.addColorStop(0.55, '#4A9EFF');
    grad.addColorStop(1, '#C9A84C');
    ctx.beginPath();
    ctx.arc(cx, cy, R, Math.PI * 0.75, Math.PI * 0.75 + val * Math.PI * 1.5);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Tick marks
    for (let i = 0; i <= 8; i++) {
      const a = Math.PI * 0.75 + (i / 8) * Math.PI * 1.5;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * (R - 8), cy + Math.sin(a) * (R - 8));
      ctx.lineTo(cx + Math.cos(a) * (R - 13), cy + Math.sin(a) * (R - 13));
      ctx.strokeStyle = (i / 8) <= val ? '#4A9EFF' : 'rgba(255,255,255,0.12)';
      ctx.lineWidth = i % 2 === 0 ? 2 : 1;
      ctx.stroke();
    }

    // Needle
    const na = Math.PI * 0.75 + val * Math.PI * 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(na) * (R - 12), cy + Math.sin(na) * (R - 12));
    ctx.strokeStyle = '#C9A84C';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#C9A84C';
    ctx.fill();

    ctx.font = 'bold 11px Inter';
    ctx.fillStyle = '#4A9EFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('∞', cx, cy - R + 16);
    ctx.textBaseline = 'alphabetic';

    requestAnimationFrame(frame);
  }

  frame();
}

// ===== FERRARI PISTON ANIMATION =====
function startPistons() {
  const pistons = [
    { bodyId: 'p1-body', rodId: 'p1-rod', sparkId: 'spark1', baseY: 90, rodBase: 162, phase: 0 },
    { bodyId: 'p2-body', rodId: 'p2-rod', sparkId: 'spark2', baseY: 90, rodBase: 162, phase: Math.PI / 2 },
    { bodyId: 'p3-body', rodId: 'p3-rod', sparkId: 'spark3', baseY: 90, rodBase: 162, phase: Math.PI },
    { bodyId: 'p4-body', rodId: 'p4-rod', sparkId: 'spark4', baseY: 90, rodBase: 162, phase: Math.PI * 1.5 },
  ];

  let t = 0;
  const STROKE = 22;
  const SPEED = 0.045;

  function frame() {
    t += SPEED;
    pistons.forEach(p => {
      const offset = Math.sin(t + p.phase) * STROKE;
      const body = document.getElementById(p.bodyId);
      if (body) body.setAttribute('y', p.baseY + offset);
      const rod = document.getElementById(p.rodId);
      if (rod) rod.setAttribute('y1', p.rodBase + offset);
      const spark = document.getElementById(p.sparkId);
      if (spark) {
        const atTop = offset < -STROKE * 0.78;
        spark.setAttribute('opacity', atTop ? '1' : '0');
        if (atTop) spark.setAttribute('r', '7');
        else spark.setAttribute('r', '4');
      }
    });
    requestAnimationFrame(frame);
  }

  frame();
}

// Start engine animations when section enters viewport
const engineEl = document.querySelector('.engine-section');
if (engineEl) {
  let engineStarted = false;
  const engObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !engineStarted) {
      engineStarted = true;
      startPistons();
      startRPM();
      engObs.disconnect();
    }
  }, { threshold: 0.2 });
  engObs.observe(engineEl);
}
