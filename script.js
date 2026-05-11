(() => {
  /* ── Mobile nav ─────────────────────────────────── */
  const menuButton = document.getElementById('menuButton');
  const mobileNav  = document.getElementById('mobileNav');
  menuButton?.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  mobileNav?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
    })
  );

  /* ── Shared time counter ────────────────────────── */
  let T = 0;
  function tick() { T++; requestAnimationFrame(tick); }
  tick();

  /* ═══════════════════════════════════════════════
     ORIGINAL DEMOS
  ════════════════════════════════════════════════ */

  /* Gyro core canvas */
  const gyroCanvas = document.getElementById('gyroCanvas');
  const gCtx       = gyroCanvas?.getContext('2d');
  function drawGyro() {
    if (!gCtx || !gyroCanvas) return;
    const { width: w, height: h } = gyroCanvas;
    gCtx.clearRect(0, 0, w, h);
    gCtx.fillStyle = '#061230';
    gCtx.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    for (let i = 0; i < 3; i++) {
      gCtx.save();
      gCtx.translate(cx, cy);
      gCtx.rotate(T * 0.012 + i * 1.047);
      gCtx.strokeStyle = ['#62d4ff','#8d70ff','#39f9b8'][i];
      gCtx.lineWidth = 3;
      gCtx.beginPath();
      gCtx.ellipse(0, 0, 110 - i * 20, 52 + i * 8, 0, 0, Math.PI * 2);
      gCtx.stroke();
      gCtx.restore();
    }
    gCtx.fillStyle = '#d8f3ff';
    gCtx.beginPath();
    gCtx.arc(cx, cy, 9, 0, Math.PI * 2);
    gCtx.fill();
    requestAnimationFrame(drawGyro);
  }
  drawGyro();

  /* Phase lock scope */
  const waveA    = document.getElementById('waveA');
  const waveB    = document.getElementById('waveB');
  const waveLock = document.getElementById('waveLock');
  function buildWave(phase, amp, bias) {
    let d = 'M 0 140 ';
    for (let x = 0; x <= 420; x += 6) {
      const y = 140 + Math.sin((x + phase) / 34) * amp + bias;
      d += `L ${x} ${y} `;
    }
    return d;
  }
  function drawScope() {
    const phase = T * 2;
    if (waveA && waveB && waveLock) {
      waveA.setAttribute('d', buildWave(phase, 42, -10));
      waveB.setAttribute('d', buildWave(phase + 45, 34, 12));
      waveLock.setAttribute('d', buildWave(phase + 20, 20, 0));
      waveA.setAttribute('stroke', '#62d4ff');
      waveB.setAttribute('stroke', '#8d70ff');
      waveLock.setAttribute('stroke', '#39f9b8');
      [waveA, waveB, waveLock].forEach(p => {
        p.setAttribute('fill', 'none');
        p.setAttribute('stroke-width', '2.6');
      });
    }
    requestAnimationFrame(drawScope);
  }
  drawScope();

  /* Mode confidence bars */
  const barsEl  = document.getElementById('confidenceBars');
  const barData = [
    ['Static 141', 97],
    ['Pilot 84',   91],
    ['Gyro Lock',  88],
    ['Reference',  95],
  ];
  if (barsEl) {
    barsEl.innerHTML = barData
      .map(([label, val]) => `
        <div class="bar-row">
          <span>${label}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${val}%"></div></div>
          <strong>${val}</strong>
        </div>`).join('');
  }

  /* Radar chart */
  const radar = document.getElementById('radar');
  if (radar) {
    const vals   = [0.87, 0.91, 0.84, 0.9, 0.86];
    const labels = ['Alignment','Stability','Direction','Safety','Lock'];
    const cx = 160, cy = 160, r = 120;
    const ring = rad =>
      `<circle cx="${cx}" cy="${cy}" r="${rad}" fill="none" stroke="rgba(255,255,255,.14)"/>`;
    const pts = vals.map((v, i) => {
      const a = -Math.PI / 2 + (i * Math.PI * 2) / vals.length;
      return [cx + Math.cos(a) * r * v, cy + Math.sin(a) * r * v, a];
    });
    const polygon = pts.map(([x,y]) => `${x},${y}`).join(' ');
    const spokes  = pts.map(([x,y]) =>
      `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="rgba(255,255,255,.2)"/>`
    ).join('');
    const text = pts.map(([,,a], i) => {
      const tx = cx + Math.cos(a) * (r + 20);
      const ty = cy + Math.sin(a) * (r + 20);
      return `<text x="${tx}" y="${ty}" fill="#c9d7ff" font-size="11" text-anchor="middle">${labels[i]}</text>`;
    }).join('');
    radar.innerHTML = `
      ${ring(24)}${ring(48)}${ring(72)}${ring(96)}${ring(120)}
      ${spokes}
      <polygon points="${polygon}" fill="rgba(98,212,255,.35)" stroke="#62d4ff" stroke-width="2"/>
      ${text}`;
  }

  /* ═══════════════════════════════════════════════
     NEW SECTION ANIMATIONS
  ════════════════════════════════════════════════ */

  /* ── 1 · Colder Cavity — 47-46 interference pattern ── */
  const cavCvs = document.getElementById('cavityCanvas');
  const cavCtx = cavCvs?.getContext('2d');
  function drawCavity() {
    if (!cavCtx || !cavCvs) return;
    const { width: w, height: h } = cavCvs;
    cavCtx.clearRect(0, 0, w, h);
    cavCtx.fillStyle = '#050c25';
    cavCtx.fillRect(0, 0, w, h);

    /* Wave 47 (Silver — cyan) */
    cavCtx.beginPath();
    cavCtx.strokeStyle = '#62d4ff';
    cavCtx.lineWidth   = 2.5;
    for (let x = 0; x <= w; x++) {
      const y = h / 2 + Math.sin((x / w) * Math.PI * 6 + T * 0.08) * 30;
      x === 0 ? cavCtx.moveTo(x, y) : cavCtx.lineTo(x, y);
    }
    cavCtx.stroke();

    /* Wave 46 (Palladium — violet, opposing phase) */
    cavCtx.beginPath();
    cavCtx.strokeStyle = '#8d70ff';
    cavCtx.lineWidth   = 2.5;
    for (let x = 0; x <= w; x++) {
      const y = h / 2 - Math.sin((x / w) * Math.PI * 6 + T * 0.08) * 30;
      x === 0 ? cavCtx.moveTo(x, y) : cavCtx.lineTo(x, y);
    }
    cavCtx.stroke();

    /* Cold spot — central interference minimum */
    const spotX = w / 2;
    const grad  = cavCtx.createRadialGradient(spotX, h / 2, 0, spotX, h / 2, 60);
    grad.addColorStop(0,   'rgba(57,249,184,0.28)');
    grad.addColorStop(0.6, 'rgba(57,249,184,0.06)');
    grad.addColorStop(1,   'rgba(57,249,184,0)');
    cavCtx.fillStyle = grad;
    cavCtx.beginPath();
    cavCtx.arc(spotX, h / 2, 60, 0, Math.PI * 2);
    cavCtx.fill();

    /* Label */
    cavCtx.fillStyle = '#39f9b8';
    cavCtx.font      = '11px Inter, sans-serif';
    cavCtx.fillText('Cold Spot (47-46 interference minimum)', spotX - 120, h / 2 + 70);
    requestAnimationFrame(drawCavity);
  }
  drawCavity();

  /* ── 2 · Volume Key — 81 chaos compressing into 82 ── */
  const volCvs = document.getElementById('volumeCanvas');
  const volCtx = volCvs?.getContext('2d');
  function drawVolume() {
    if (!volCtx || !volCvs) return;
    const { width: w, height: h } = volCvs;
    volCtx.clearRect(0, 0, w, h);
    volCtx.fillStyle = '#050c25';
    volCtx.fillRect(0, 0, w, h);

    /* 81 — wide, chaotic, warm */
    const amp81 = 34 + Math.sin(T * 0.03) * 8;
    volCtx.beginPath();
    volCtx.strokeStyle = 'rgba(255,140,60,0.9)';
    volCtx.lineWidth   = 2;
    for (let x = 0; x <= w / 2 - 20; x++) {
      const y = h / 2 + Math.sin((x / 40) + T * 0.07) * amp81
                       + Math.sin((x / 17) - T * 0.13) * (amp81 * 0.4);
      x === 0 ? volCtx.moveTo(x, y) : volCtx.lineTo(x, y);
    }
    volCtx.stroke();
    volCtx.fillStyle = 'rgba(255,140,60,0.7)';
    volCtx.font      = '11px Inter, sans-serif';
    volCtx.fillText('81 · Thallium — Chaos (loose, hot)', 8, 18);

    /* Arrow */
    volCtx.strokeStyle = '#afbcdf';
    volCtx.lineWidth   = 2;
    volCtx.beginPath();
    volCtx.moveTo(w / 2 - 10, h / 2);
    volCtx.lineTo(w / 2 + 10, h / 2);
    volCtx.stroke();
    volCtx.fillStyle = '#afbcdf';
    volCtx.beginPath();
    volCtx.moveTo(w / 2 + 10, h / 2 - 5);
    volCtx.lineTo(w / 2 + 18, h / 2);
    volCtx.lineTo(w / 2 + 10, h / 2 + 5);
    volCtx.fill();

    /* 82 — tight, stable, cool */
    const amp82 = 14 + Math.sin(T * 0.025) * 2;
    volCtx.beginPath();
    volCtx.strokeStyle = '#62d4ff';
    volCtx.lineWidth   = 2.5;
    for (let x = w / 2 + 20; x <= w; x++) {
      const lx = x - (w / 2 + 20);
      const y  = h / 2 + Math.sin((lx / 30) + T * 0.05) * amp82;
      lx === 0 ? volCtx.moveTo(x, y) : volCtx.lineTo(x, y);
    }
    volCtx.stroke();
    volCtx.fillStyle = '#62d4ff';
    volCtx.fillText('82 · Lead — Stable anchor (tight, cool)', w / 2 + 22, 18);

    requestAnimationFrame(drawVolume);
  }
  drawVolume();

  /* ── 3 · Regulator — heat-flow pulse 47 → 46 → 84 → 4 ── */
  const regCvs = document.getElementById('regulatorCanvas');
  const regCtx = regCvs?.getContext('2d');
  const regNodes = [
    { label: '47 Silver',    x: 0.12, color: '#62d4ff' },
    { label: '46 Palladium', x: 0.37, color: '#8d70ff' },
    { label: '84 Pilot',     x: 0.62, color: '#39f9b8' },
    { label: '4 Beryllium',  x: 0.87, color: '#ffd580' },
  ];
  function drawRegulator() {
    if (!regCtx || !regCvs) return;
    const { width: w, height: h } = regCvs;
    regCtx.clearRect(0, 0, w, h);
    regCtx.fillStyle = '#050c25';
    regCtx.fillRect(0, 0, w, h);
    const cy = h / 2 - 10;

    /* Connecting line */
    regCtx.strokeStyle = 'rgba(255,255,255,.12)';
    regCtx.lineWidth   = 2;
    regCtx.beginPath();
    regCtx.moveTo(regNodes[0].x * w, cy);
    regCtx.lineTo(regNodes[3].x * w, cy);
    regCtx.stroke();

    /* Animated heat pulse */
    const prog   = (T * 0.007) % 1;
    const pulseX = regNodes[0].x * w + prog * (regNodes[3].x - regNodes[0].x) * w;
    const pGrad  = regCtx.createRadialGradient(pulseX, cy, 0, pulseX, cy, 22);
    pGrad.addColorStop(0,   'rgba(255,160,60,0.9)');
    pGrad.addColorStop(0.5, 'rgba(255,100,40,0.3)');
    pGrad.addColorStop(1,   'rgba(255,100,40,0)');
    regCtx.fillStyle = pGrad;
    regCtx.beginPath();
    regCtx.arc(pulseX, cy, 22, 0, Math.PI * 2);
    regCtx.fill();

    /* Nodes */
    regNodes.forEach(({ label, x, color }) => {
      const nx = x * w;
      regCtx.fillStyle = color;
      regCtx.beginPath();
      regCtx.arc(nx, cy, 10, 0, Math.PI * 2);
      regCtx.fill();
      regCtx.fillStyle = '#e9f0ff';
      regCtx.font      = '11px Inter, sans-serif';
      regCtx.textAlign = 'center';
      regCtx.fillText(label, nx, cy + 26);
    });

    regCtx.textAlign = 'left';
    regCtx.fillStyle = 'rgba(255,160,60,0.8)';
    regCtx.fillText('heat pulse →', pulseX + 6, cy - 16);

    requestAnimationFrame(drawRegulator);
  }
  drawRegulator();

  /* ── 4 · Static Bottling — 9/10 oscillator ── */
  const stCvs = document.getElementById('staticCanvas');
  const stCtx = stCvs?.getContext('2d');
  function drawStatic() {
    if (!stCtx || !stCvs) return;
    const { width: w, height: h } = stCvs;
    stCtx.clearRect(0, 0, w, h);
    stCtx.fillStyle = '#050c25';
    stCtx.fillRect(0, 0, w, h);
    const cy = h / 2;

    /* Neon-10 container ring */
    const containerR = 50 + Math.sin(T * 0.015) * 2;
    stCtx.strokeStyle = 'rgba(98,212,255,0.5)';
    stCtx.lineWidth   = 2.5;
    stCtx.beginPath();
    stCtx.arc(w / 2, cy, containerR, 0, Math.PI * 2);
    stCtx.stroke();
    stCtx.fillStyle = '#62d4ff';
    stCtx.font      = '10px Inter, sans-serif';
    stCtx.textAlign = 'center';
    stCtx.fillText('Neon 10 — Grip', w / 2, cy + containerR + 16);

    /* Fluorine-9 inner wave — high tension */
    const tension = 0.78 + Math.sin(T * 0.04) * 0.1;
    const fR      = containerR * tension;
    const fGrad   = stCtx.createRadialGradient(w / 2, cy, 0, w / 2, cy, fR);
    fGrad.addColorStop(0,   'rgba(255,80,80,0.7)');
    fGrad.addColorStop(0.7, 'rgba(255,80,80,0.15)');
    fGrad.addColorStop(1,   'rgba(255,80,80,0)');
    stCtx.fillStyle = fGrad;
    stCtx.beginPath();
    stCtx.arc(w / 2, cy, fR, 0, Math.PI * 2);
    stCtx.fill();
    stCtx.fillStyle = '#ff8080';
    stCtx.fillText('Fluorine 9 — Weapon (synched, held)', w / 2, cy + 6);

    /* Lightning discharge indicator */
    stCtx.strokeStyle = 'rgba(255,220,60,0.7)';
    stCtx.lineWidth   = 2;
    const bolt = 30 + Math.abs(Math.sin(T * 0.025)) * 40;
    stCtx.beginPath();
    stCtx.moveTo(80, cy - bolt * 0.6);
    stCtx.lineTo(65, cy);
    stCtx.lineTo(80, cy);
    stCtx.lineTo(55, cy + bolt * 0.7);
    stCtx.stroke();
    stCtx.fillStyle = 'rgba(255,220,60,0.8)';
    stCtx.textAlign = 'left';
    stCtx.fillText('Lightning — tension overflow', 88, cy + 4);

    requestAnimationFrame(drawStatic);
  }
  drawStatic();

  /* ── 5 · Nucleosynthesis — weaving animation ── */
  const nucCvs = document.getElementById('nucleoCanvas');
  const nucCtx = nucCvs?.getContext('2d');
  function drawNucleo() {
    if (!nucCtx || !nucCvs) return;
    const { width: w, height: h } = nucCvs;
    nucCtx.clearRect(0, 0, w, h);
    nucCtx.fillStyle = '#050c25';
    nucCtx.fillRect(0, 0, w, h);
    const cy = h / 2;

    /* Raw radiation — left */
    for (let i = 0; i < 3; i++) {
      nucCtx.beginPath();
      nucCtx.strokeStyle = `rgba(255,${160 - i * 40},${80 + i * 30},0.7)`;
      nucCtx.lineWidth   = 1.8;
      for (let x = 0; x < w * 0.32; x++) {
        const y = cy + Math.sin((x / 20) + T * 0.09 + i * 1.2) * (28 - i * 6);
        x === 0 ? nucCtx.moveTo(x, y) : nucCtx.lineTo(x, y);
      }
      nucCtx.stroke();
    }
    nucCtx.fillStyle = 'rgba(255,180,80,0.7)';
    nucCtx.font      = '10px Inter, sans-serif';
    nucCtx.textAlign = 'left';
    nucCtx.fillText('Raw Radiation (free proton threads)', 6, 14);

    /* Cold cavity — centre */
    const cavX  = w * 0.5;
    const cavGr = nucCtx.createRadialGradient(cavX, cy, 0, cavX, cy, 58);
    cavGr.addColorStop(0,   'rgba(57,249,184,0.22)');
    cavGr.addColorStop(0.6, 'rgba(57,249,184,0.06)');
    cavGr.addColorStop(1,   'rgba(57,249,184,0)');
    nucCtx.fillStyle = cavGr;
    nucCtx.beginPath();
    nucCtx.arc(cavX, cy, 58, 0, Math.PI * 2);
    nucCtx.fill();
    nucCtx.strokeStyle = 'rgba(57,249,184,0.4)';
    nucCtx.lineWidth   = 1.5;
    nucCtx.beginPath();
    nucCtx.arc(cavX, cy, 58, 0, Math.PI * 2);
    nucCtx.stroke();
    nucCtx.fillStyle = '#39f9b8';
    nucCtx.textAlign = 'center';
    nucCtx.fillText('Cold Cavity', cavX, cy + 70);
    nucCtx.fillText('(47-46 Cold Spot)', cavX, cy + 83);

    /* Woven element — right */
    const eX = w * 0.78;
    for (let ring = 0; ring < 3; ring++) {
      nucCtx.beginPath();
      nucCtx.strokeStyle = ['#62d4ff','#8d70ff','#39f9b8'][ring];
      nucCtx.lineWidth   = 2;
      nucCtx.ellipse(eX, cy, 36 - ring * 9, 18 + ring * 5,
                     T * 0.01 + ring * 1.05, 0, Math.PI * 2);
      nucCtx.stroke();
    }
    nucCtx.fillStyle = '#d8f3ff';
    nucCtx.beginPath();
    nucCtx.arc(eX, cy, 7, 0, Math.PI * 2);
    nucCtx.fill();
    nucCtx.fillStyle = '#e9f0ff';
    nucCtx.textAlign = 'center';
    nucCtx.fillText('Woven Element', eX, cy + 70);
    nucCtx.fillText('(stable knot)', eX, cy + 83);

    /* Arrows: radiation → cavity → element */
    [[w * 0.32, w * 0.42], [w * 0.58, w * 0.68]].forEach(([x1, x2]) => {
      nucCtx.strokeStyle = 'rgba(175,188,223,0.5)';
      nucCtx.lineWidth   = 1.5;
      nucCtx.beginPath();
      nucCtx.moveTo(x1, cy);
      nucCtx.lineTo(x2, cy);
      nucCtx.stroke();
      nucCtx.fillStyle = 'rgba(175,188,223,0.5)';
      nucCtx.beginPath();
      nucCtx.moveTo(x2 - 6, cy - 4);
      nucCtx.lineTo(x2, cy);
      nucCtx.lineTo(x2 - 6, cy + 4);
      nucCtx.fill();
    });

    nucCtx.textAlign = 'left';
    requestAnimationFrame(drawNucleo);
  }
  drawNucleo();

  /* ═══════════════════════════════════════════════
     CALIBRATION CHECKLIST
  ════════════════════════════════════════════════ */
  const listItems = document.querySelectorAll('#calibrationList li');
  const statusEl  = document.getElementById('checklistStatus');
  const total     = listItems.length;

  function updateStatus() {
    const done = document.querySelectorAll('#calibrationList li.done').length;
    if (statusEl) statusEl.textContent = `${done} / ${total} complete`;
  }

  listItems.forEach(li => {
    li.querySelector('.check-btn')?.addEventListener('click', () => {
      li.classList.toggle('done');
      updateStatus();
    });
  });
  updateStatus();
})();
