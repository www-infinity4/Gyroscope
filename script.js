(() => {
  const menuButton = document.getElementById('menuButton');
  const mobileNav = document.getElementById('mobileNav');

  menuButton?.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  // Gyro canvas demo
  const canvas = document.getElementById('gyroCanvas');
  const ctx = canvas?.getContext('2d');
  let animationTime = 0;

  function drawGyro() {
    if (!ctx || !canvas) return;
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#061230';
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;

    for (let i = 0; i < 3; i++) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(animationTime * 0.012 + i * 1.047);
      ctx.strokeStyle = ['#62d4ff', '#8d70ff', '#39f9b8'][i];
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(0, 0, 110 - i * 20, 52 + i * 8, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    ctx.fillStyle = '#d8f3ff';
    ctx.beginPath();
    ctx.arc(cx, cy, 9, 0, Math.PI * 2);
    ctx.fill();

    animationTime++;
    requestAnimationFrame(drawGyro);
  }
  drawGyro();

  // Scope waveform demo
  const waveA = document.getElementById('waveA');
  const waveB = document.getElementById('waveB');
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
    const phase = animationTime * 2;
    if (waveA && waveB && waveLock) {
      waveA.setAttribute('d', buildWave(phase, 42, -10));
      waveB.setAttribute('d', buildWave(phase + 45, 34, 12));
      waveLock.setAttribute('d', buildWave(phase + 20, 20, 0));

      waveA.setAttribute('stroke', '#62d4ff');
      waveB.setAttribute('stroke', '#8d70ff');
      waveLock.setAttribute('stroke', '#39f9b8');
      [waveA, waveB, waveLock].forEach((p) => {
        p.setAttribute('fill', 'none');
        p.setAttribute('stroke-width', '2.6');
      });
    }
    requestAnimationFrame(drawScope);
  }
  drawScope();

  // Bars chart
  const bars = document.getElementById('confidenceBars');
  const barData = [
    ['Static 141', 97],
    ['Pilot 84', 91],
    ['Gyro Lock', 88],
    ['Reference', 95],
  ];

  if (bars) {
    bars.innerHTML = barData
      .map(([label, value]) => `
        <div class="bar-row">
          <span>${label}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${value}%"></div></div>
          <strong>${value}</strong>
        </div>
      `)
      .join('');
  }

  // Radar chart
  const radar = document.getElementById('radar');
  if (radar) {
    const values = [0.87, 0.91, 0.84, 0.9, 0.86];
    const labels = ['Alignment', 'Stability', 'Direction', 'Safety', 'Lock'];
    const cx = 160;
    const cy = 160;
    const r = 120;

    const ring = (rad) =>
      `<circle cx="${cx}" cy="${cy}" r="${rad}" fill="none" stroke="rgba(255,255,255,.14)" />`;

    const radarPoints = values
      .map((v, i) => {
        const a = -Math.PI / 2 + (i * Math.PI * 2) / values.length;
        return [cx + Math.cos(a) * r * v, cy + Math.sin(a) * r * v, a];
      });

    const polygon = radarPoints.map(([x, y]) => `${x},${y}`).join(' ');

    const spokes = radarPoints
      .map(([x, y]) => `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="rgba(255,255,255,.2)"/>`)
      .join('');

    const text = radarPoints
      .map(([x, y, a], i) => {
        const tx = cx + Math.cos(a) * (r + 20);
        const ty = cy + Math.sin(a) * (r + 20);
        return `<text x="${tx}" y="${ty}" fill="#c9d7ff" font-size="11" text-anchor="middle">${labels[i]}</text>`;
      })
      .join('');

    radar.innerHTML = `
      ${ring(24)}${ring(48)}${ring(72)}${ring(96)}${ring(120)}
      ${spokes}
      <polygon points="${polygon}" fill="rgba(98,212,255,.35)" stroke="#62d4ff" stroke-width="2" />
      ${text}
    `;
  }
})();
