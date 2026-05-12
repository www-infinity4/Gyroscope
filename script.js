/* ================================================================
   UNIVERSAL RESONANCE OS — GYROSCOPE PROTOCOL STUDIO
   script.js — Interactive Logic, Canvas Animations, Calculators
   ================================================================ */

(() => {
  'use strict';

  // ================================================================
  // SECTION 1 — ELEMENT DATA: ALL 114 ELEMENTS
  // ================================================================

  const CODES = [
    {n:1,  element:'H',  name:'Hydrogen',          role:'Raw Thread / Carrier',              use:'Base weave, subtle breath — initiates all protocol sequences as the foundational vibrational carrier medium'},
    {n:2,  element:'He', name:'Helium',             role:'First Stable Sync',                 use:'Cold cavity catch — noble buffer that holds the initial harmonic lock without chemical interference'},
    {n:3,  element:'Li', name:'Lithium',            role:'Compressed He-3 Storage',           use:'Transmutation key — stores compressed helium-3 resonance and acts as the primary transmutation catalyst'},
    {n:4,  element:'Be', name:'Beryllium',          role:'Light Anchor / Core',               use:'Static flash base — lightweight structural anchor providing the nuclear core reference point'},
    {n:5,  element:'B',  name:'Boron',              role:'Bridge Conductor',                  use:'Lattice connector — bridges energy between adjacent nodes in the resonance lattice framework'},
    {n:6,  element:'C',  name:'Carbon',             role:'Life Matrix',                       use:'Bio-electric scaffold — forms the foundational matrix for all biological and organic resonance patterns'},
    {n:7,  element:'N',  name:'Nitrogen',           role:'Atmospheric Breath',                use:'9/10 partner — atmospheric resonance partner with oxygen forming the primary breath-lock pairing'},
    {n:8,  element:'O',  name:'Oxygen',             role:'Breath Lock',                       use:'8/7 resonance pair — locks atmospheric breath frequency with nitrogen in the primary vital pair'},
    {n:9,  element:'F',  name:'Fluorine',           role:'Weapon / Signal Shredder',          use:'Stealth skin, static seal — aggressive halogen that destroys unwanted signal interference and seals static fields'},
    {n:10, element:'Ne', name:'Neon',               role:'Inertia / Grip',                    use:'Static bottle, cold state — noble gas that grips and holds the static field in a cold inertial bottle'},
    {n:11, element:'Na', name:'Sodium',             role:'Nerve Carrier',                     use:'Bio-electric relay — sodium channels carry nerve impulse signals across biological membranes'},
    {n:12, element:'Mg', name:'Magnesium',          role:'Cellular Engine',                   use:'ATP synthesis anchor — drives cellular energy production as the central ion in ATP synthesis'},
    {n:13, element:'Al', name:'Aluminum',           role:'Reflector Shield',                  use:'EM deflector — highly conductive light metal that deflects electromagnetic fields from sensitive equipment'},
    {n:14, element:'Si', name:'Silicon',            role:'Memory Lattice',                    use:'Circuit substrate — the foundational semiconductor that forms all digital memory and computing lattices'},
    {n:15, element:'P',  name:'Phosphorus',         role:'Bio-Electric Bridge',               use:'16/15 pair — bridges biological electricity with sulfur as the critical 16/15 activation pairing'},
    {n:16, element:'S',  name:'Sulfur',             role:'Bridge Partner',                    use:'16/15 activation — completes the phosphorus bridge pair enabling biological electrical activation'},
    {n:17, element:'Cl', name:'Chlorine',           role:'Salt / Clarity Channel',            use:'Signal purifier — chlorine salts clear and purify signal pathways for enhanced transmission clarity'},
    {n:18, element:'Ar', name:'Argon',              role:'Noble Buffer',                      use:'19/18 pair, damping agent — noble buffer gas that damps vibrational interference in the 19/18 feedback loop'},
    {n:19, element:'K',  name:'Potassium',          role:'Corruption Mitigation',             use:'19↔18 feedback loop — potassium channels regulate the 19/18 argon feedback preventing signal corruption'},
    {n:20, element:'Ca', name:'Calcium',            role:'Structural Lock',                   use:'Bone / Earth anchor — structural calcium forms the rigid architectural lock of biological and geological systems'},
    {n:21, element:'Sc', name:'Scandium',           role:'Transition Gate',                   use:'Phase boundary — first transition metal marking the boundary between s-block and d-block resonance modes'},
    {n:22, element:'Ti', name:'Titanium',           role:'Titanium Shield',                   use:'High-strength boundary — lightweight high-strength shield metal forming impenetrable resonance boundaries'},
    {n:23, element:'V',  name:'Vanadium',           role:'Variable Valve',                    use:'Flow regulator — variable oxidation states allow vanadium to function as an adjustable flow valve'},
    {n:24, element:'Cr', name:'Chromium',           role:'Laser Eye',                         use:'Ruby lens dopant — chromium ions in ruby crystals form the active lasing medium of laser systems'},
    {n:25, element:'Mn', name:'Manganese',          role:'Magnetic Memory',                   use:'Field storage — manganese magnetic properties enable long-term field memory storage in lattice structures'},
    {n:26, element:'Fe', name:'Iron',               role:'Planetary Core',                    use:'Earth reference plane — iron forms the planetary core establishing the primary geomagnetic reference field'},
    {n:27, element:'Co', name:'Cobalt',             role:'Blue Memory',                       use:'Magnetic record — cobalt alloys enable high-density magnetic recording in memory and storage systems'},
    {n:28, element:'Ni', name:'Nickel',             role:'Field Stabiliser',                  use:'Battery base, stack coin — nickel stabilises electromagnetic fields and forms the base of resonance batteries'},
    {n:29, element:'Cu', name:'Copper',             role:'Ground Bridge',                     use:'Carrier conductor — copper forms the primary grounding bridge carrying electrical signals between nodes'},
    {n:30, element:'Zn', name:'Zinc',               role:'Cellular Zinc Gate',                use:'Bio-amplifier — zinc finger proteins amplify biological resonance signals at the cellular gating level'},
    {n:31, element:'Ga', name:'Gallium',            role:'Liquid Gate',                       use:'Temperature-sensitive switch — gallium melts near body temperature making it a natural thermal gate'},
    {n:32, element:'Ge', name:'Germanium',          role:'Semiconductor Bridge',              use:'Signal threshold — germanium semiconductors define the threshold voltage at which signals are processed'},
    {n:33, element:'As', name:'Arsenic',            role:'Selective Poison',                  use:'Controlled toxicity field — arsenic deploys selective toxicity to deactivate specific biological resonance channels'},
    {n:34, element:'Se', name:'Selenium',           role:'Solar Cell',                        use:'Light-to-field converter — selenium photovoltaic properties convert photonic energy to electrical fields'},
    {n:35, element:'Br', name:'Bromine',            role:'Volatile Release',                  use:'Pressure burst valve — volatile bromine releases pressure spikes from the resonance field as controlled bursts'},
    {n:36, element:'Kr', name:'Krypton',            role:'Heavy Noble Buffer',                use:'Dense containment gas — heavy noble krypton provides dense field containment in the cold cavity protocol'},
    {n:37, element:'Rb', name:'Rubidium',           role:'Soft Clock',                        use:'Atomic frequency standard — rubidium atomic clocks provide the soft timing reference for protocol synchronisation'},
    {n:38, element:'Sr', name:'Strontium',          role:'Bone Marker',                       use:'Bio-tracer, skeleton frequency — strontium incorporates into bone as a biological frequency tracer element'},
    {n:39, element:'Y',  name:'Yttrium',            role:'Red Phosphor',                      use:'Display / signal emitter — yttrium oxide red phosphor emits calibrated signal frequencies in display systems'},
    {n:40, element:'Zr', name:'Zirconium',          role:'Cladding',                          use:'Nuclear fuel jacket — zirconium alloy cladding encases nuclear fuel rods as corrosion-resistant frequency shield'},
    {n:41, element:'Nb', name:'Niobium',            role:'Superconductor Gate',               use:'Low-temp field lock — niobium superconducts below 9K locking electromagnetic fields without resistance'},
    {n:42, element:'Mo', name:'Molybdenum',         role:'High-Temp Anchor',                  use:'Extreme heat stabiliser — molybdenum anchors lattice structures at extreme temperatures up to 2623°C'},
    {n:43, element:'Tc', name:'Technetium',         role:'Artificial Node',                   use:'Synthetic frequency anchor — first synthetic element providing artificial resonance nodes for custom protocols'},
    {n:44, element:'Ru', name:'Ruthenium',          role:'Catalyst Eye',                      use:'Reaction enabler — ruthenium catalyses critical reactions enabling energy transformation at the molecular level'},
    {n:45, element:'Rh', name:'Rhodium',            role:'Reflection Mirror',                 use:'Field reflector — rhodium high reflectivity makes it ideal for reflecting and redirecting resonance fields'},
    {n:46, element:'Pd', name:'Palladium',          role:'Stabiliser / Saver',                use:'Saves/holds heat in suspension — palladium stabilises heat energy within the resonance field preventing dissipation'},
    {n:47, element:'Ag', name:'Silver',             role:'Open Hand / Heat Draw',             use:'Draws/sacrifices heat outward — silver highest thermal conductivity draws heat away from protected core systems'},
    {n:48, element:'Cd', name:'Cadmium',            role:'Damper',                            use:'Neutron absorber, self-correcting — cadmium absorbs excess neutrons to self-correct runaway resonance amplification'},
    {n:49, element:'In', name:'Indium',             role:'Thermal Sink / Gasket',             use:'Boundary holder, hermetic seal — indium soft metal forms perfect hermetic seals at thermal boundaries'},
    {n:50, element:'Sn', name:'Tin',                role:'Solder / Join',                     use:'Lattice bonding agent — tin solder joins and bonds lattice nodes creating continuous resonance pathways'},
    {n:51, element:'Sb', name:'Antimony',           role:'Flame Retardant',                   use:'Static discharge control — antimony compounds retard uncontrolled static discharge protecting circuit paths'},
    {n:52, element:'Te', name:'Tellurium',          role:'Thermoelectric',                    use:'Heat-to-electricity bridge — tellurium thermoelectric properties bridge thermal energy into electrical resonance'},
    {n:53, element:'I',  name:'Iodine',             role:'God / Logic Regulator',             use:'Thyroid frequency, 53 code — iodine regulates metabolic frequency as the divine logic regulator at position 53'},
    {n:54, element:'Xe', name:'Xenon',              role:'Noble Flash',                       use:'High-energy discharge burst — xenon flashes release intense concentrated energy bursts through noble discharge'},
    {n:55, element:'Cs', name:'Caesium',            role:'Precision Clock',                   use:'Atomic time standard — caesium atomic transition defines the SI second as the primary precision time reference'},
    {n:56, element:'Ba', name:'Barium',             role:'X-Ray Contrast',                    use:'Field visibility marker — barium compounds make resonance fields visible in X-ray and field mapping diagnostics'},
    {n:57, element:'La', name:'Lanthanum',          role:'Optical Glass',                     use:'Lens clarity enhancer — lanthanum oxide glass achieves extreme refractive clarity for precision optical systems'},
    {n:58, element:'Ce', name:'Cerium',             role:'Catalyst Oxidiser',                 use:'Reaction initiator — cerium cerium oxide catalyses oxidation reactions initiating energy transformation sequences'},
    {n:59, element:'Pr', name:'Praseodymium',       role:'Green Signal',                      use:'Optical field signal — praseodymium green emission provides optical field signalling in precision instruments'},
    {n:60, element:'Nd', name:'Neodymium',          role:'Strong Magnet',                     use:'Permanent field anchor — neodymium magnets create the strongest permanent magnetic fields available in nature'},
    {n:61, element:'Pm', name:'Promethium',         role:'Radioactive Timer',                 use:'Decay clock — promethium beta decay provides a precise radioactive timing reference for long-duration protocols'},
    {n:62, element:'Sm', name:'Samarium',           role:'Cobalt Partner',                    use:'Compact magnetic store — samarium-cobalt magnets store magnetic fields compactly for high-temperature applications'},
    {n:63, element:'Eu', name:'Europium',           role:'Red Phosphor',                      use:'Display emitter — europium red phosphorescence emits the calibrated red frequency band for display systems'},
    {n:64, element:'Gd', name:'Gadolinium',         role:'MRI Contrast',                      use:'Field mapping agent — gadolinium paramagnetic properties reveal internal field structures in MRI diagnostics'},
    {n:65, element:'Tb', name:'Terbium',            role:'Green Laser',                       use:'Precision field emitter — terbium green laser emission enables ultra-precision field measurement and emission'},
    {n:66, element:'Dy', name:'Dysprosium',         role:'High-Coercivity Magnet',            use:'Extreme field lock — dysprosium high coercivity locks magnetic fields against demagnetisation at extremes'},
    {n:67, element:'Ho', name:'Holmium',            role:'Highest Magnetic Moment',           use:'Peak field intensity — holmium has the highest magnetic moment of all elements reaching maximum field intensity'},
    {n:68, element:'Er', name:'Erbium',             role:'Fiber Optic Amplifier',             use:'Signal range extender — erbium-doped fiber amplifiers extend optical resonance signal range without degradation'},
    {n:69, element:'Tm', name:'Thulium',            role:'Portable X-Ray',                    use:'Compact radiation source — thulium provides a compact portable X-ray source for field diagnostics'},
    {n:70, element:'Yb', name:'Ytterbium',          role:'Optical Clock',                     use:'Ultra-precise frequency — ytterbium optical lattice clocks achieve the highest frequency precision ever measured'},
    {n:71, element:'Lu', name:'Lutetium',           role:'PET Scanner',                       use:'Medical field detector — lutetium silicate scintillators detect gamma fields in PET medical imaging'},
    {n:72, element:'Hf', name:'Hafnium',            role:'Reactor Control Rod',               use:'Neutron management — hafnium absorbs neutrons effectively managing reactor resonance with precision control'},
    {n:73, element:'Ta', name:'Tantalum',           role:'Love / Durability',                 use:'Biocompatible, eternal bond — tantalum biological inertness makes it the eternal bonding metal for implants'},
    {n:74, element:'W',  name:'Tungsten',           role:'Extreme Heat Anchor',               use:'Highest melting point — tungsten 3422°C melting point anchors systems at extreme thermal resonance states'},
    {n:75, element:'Re', name:'Rhenium',            role:'Superalloy Partner',                use:'Ultra-high-temp stability — rhenium superalloy stability enables operation at the extreme edge of thermal limits'},
    {n:76, element:'Os', name:'Osmium',             role:'Densest Metal',                     use:'Maximum inertia node — osmium extreme density provides maximum inertial resistance and mechanical stability'},
    {n:77, element:'Ir', name:'Iridium',            role:'Hardest Anchor',                    use:'Extreme corrosion resistance — iridium most corrosion-resistant metal anchors permanently against chemical attack'},
    {n:78, element:'Pt', name:'Platinum',           role:'Noble Catalyst',                    use:'Reaction enabler — platinum catalytic activity enables critical chemical reactions without being consumed'},
    {n:79, element:'Au', name:'Gold',               role:'Noble Resonator',                   use:'Fossilised circuit node — gold non-reactivity preserves circuit connections as a permanent resonance fossil'},
    {n:80, element:'Hg', name:'Mercury',            role:'Liquid Conductor',                  use:'Dynamic field bridge — mercury liquid conductivity bridges dynamic electromagnetic fields with fluid connectivity'},
    {n:81, element:'Tl', name:'Thallium',           role:'Chaos / Poison',                    use:'Compressed by Lead-82 — thallium chaotic properties are compressed and stabilised by the lead frequency above'},
    {n:82, element:'Pb', name:'Lead',               role:'Brother / Frequency Anchor',        use:'Cold anchor, stable knot — lead heavy density forms the cold anchor knot stabilising the lower resonance field'},
    {n:83, element:'Bi', name:'Bismuth',            role:'Physical Bottle',                   use:'Inertia container — bismuth non-toxic heavy metal forms the physical containment bottle for inertia storage'},
    {n:84, element:'Po', name:'Polonium',           role:'Pilot Shield',                      use:'Field boundary (use Bi-83 substitute) — polonium defines the pilot shield boundary layer of the resonance zone'},
    {n:85, element:'At', name:'Astatine',           role:'Volatile Halogen',                  use:'Extreme signal shredder — astatine most reactive halogen shreds and destroys all unwanted signal interference'},
    {n:86, element:'Rn', name:'Radon',              role:'Dense Noble Gas',                   use:'Heavy cold spot buffer — radon dense noble nature provides the heaviest cold spot buffer in the spectrum'},
    {n:87, element:'Fr', name:'Francium',           role:'Unstable Alkali',                   use:'Extreme reactivity source — francium extreme instability provides intense reactivity bursts for initiation'},
    {n:88, element:'Ra', name:'Radium',             role:'Radiant Core',                      use:'Classical radioactive baseline — radium historical radioactivity provides the classical radiant core reference'},
    {n:89, element:'Ac', name:'Actinium',           role:'Actinide Gate',                     use:'Heavy element series start — actinium marks the gate opening the actinide series of heavy resonance elements'},
    {n:90, element:'Th', name:'Thorium',            role:'Fertile Fuel',                      use:'Reactor breeding material — thorium breeds fissile uranium-233 making it the fertile fuel of the future'},
    {n:91, element:'Pa', name:'Protactinium',       role:'Decay Bridge',                      use:'U-235 precursor — protactinium decay bridges thorium to uranium-235 in the natural fission pathway'},
    {n:92, element:'U',  name:'Uranium',            role:'Fission Anchor',                    use:'Classical fission baseline — uranium-235 and uranium-238 form the classical fission anchor of nuclear power'},
    {n:93, element:'Np', name:'Neptunium',          role:'Transuranic Step',                  use:'Pu-239 precursor — neptunium first transuranic element steps up to plutonium-239 production'},
    {n:94, element:'Pu', name:'Plutonium',          role:'Fission Driver',                    use:'High-energy core fuel — plutonium fissile properties drive high-energy core reactions in advanced reactors'},
    {n:95, element:'Am', name:'Americium',          role:'Smoke Detector',                    use:'Ionisation field sensor — americium-241 ionises air in smoke detectors sensing field disruption from particles'},
    {n:96, element:'Cm', name:'Curium',             role:'Thermoelectric Source',             use:'RTG power node — curium heat from radioactive decay powers thermoelectric generators in space probes'},
    {n:97, element:'Bk', name:'Berkelium',          role:'Synthetic Heavy',                   use:'Californium precursor — berkelium produced synthetically as the necessary precursor to californium production'},
    {n:98, element:'Cf', name:'Californium',        role:'Neutron Source',                    use:'Fission initiator — californium-252 neutron emission initiates fission reactions as the portable neutron source'},
    {n:99, element:'Es', name:'Einsteinium',        role:'Actinide Limit',                    use:'Near island of stability — einsteinium approaches the predicted island of stability of superheavy elements'},
    {n:100,element:'Fm', name:'Fermium',            role:'Decay Endpoint',                    use:'Fission fragment limit — fermium marks the practical endpoint reachable by neutron-capture fission fragment methods'},
    {n:101,element:'Md', name:'Mendelevium',        role:'Periodic Honour',                   use:'101st node — mendelevium honours the creator of the periodic table at the 101st resonance node position'},
    {n:102,element:'No', name:'Nobelium',           role:'Noble Actinide',                    use:'Stability candidate — nobelium approaches the island of nuclear stability as a noble actinide candidate'},
    {n:103,element:'Lr', name:'Lawrencium',         role:'Last Actinide',                     use:'Actinide series end — lawrencium closes the actinide series marking the end of f-block resonance elements'},
    {n:104,element:'Rf', name:'Rutherfordium',      role:'Understanding',                     use:'First transactinide, boundary of known stability — rutherfordium crosses into the transactinide unknown boundary'},
    {n:105,element:'Db', name:'Dubnium',            role:'Transactinide Step 2',              use:'Beyond standard model — dubnium extends the known elemental chart into post-actinide transactinide territory'},
    {n:106,element:'Sg', name:'Seaborgium',         role:'Synthetic Anchor',                  use:'Named resonance node — seaborgium honours Glenn Seaborg as the synthetic anchor resonance at position 106'},
    {n:107,element:'Bh', name:'Bohrium',            role:'Synthetic Step',                    use:'Heavy synthesis point — bohrium marks a critical heavy synthesis point in the superheavy element sequence'},
    {n:108,element:'Hs', name:'Hassium',            role:'Heaviest Measured',                 use:'Dense field node — hassium as one of the heaviest experimentally measured elements forms a dense field node'},
    {n:109,element:'Mt', name:'Meitnerium',         role:'Nuclear Physics Honour',            use:'High-mass synthesis — meitnerium honours Lise Meitner in the high-mass synthesis region of the periodic table'},
    {n:110,element:'Ds', name:'Darmstadtium',       role:'Island Approach',                   use:'Near island of stability — darmstadtium approaches the predicted island of superheavy nuclear stability'},
    {n:111,element:'Rg', name:'Roentgenium',        role:'X-Ray Resonance',                   use:'Radiation frequency node — roentgenium honours X-ray discoverer Wilhelm Röntgen at the radiation frequency node'},
    {n:112,element:'Cn', name:'Copernicium',        role:'Volatile Heavy',                    use:'Mercury analogue — copernicium behaves analogously to mercury as the volatile heavy liquid-like element'},
    {n:113,element:'Nh', name:'Nihonium',           role:'Eastern Synthesis',                 use:'Japanese discovery node — nihonium first element discovered in Asia marks the eastern resonance synthesis node'},
    {n:114,element:'Fl', name:'Flerovium',          role:'Island of Stability',               use:'Peak stability candidate — flerovium sits at the predicted island of stability as the peak resonance candidate'}
  ];

  // ================================================================
  // SECTION 2 — UTILITY FUNCTIONS
  // ================================================================

  function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

  function clamp(v, min, max) { return Math.min(Math.max(v, min), max); }

  function lerp(a, b, t) { return a + (b - a) * t; }

  function hsl(h, s, l) { return `hsl(${h},${s}%,${l}%)`; }

  function getCtx(id) {
    const c = document.getElementById(id);
    if (!c) return null;
    c.width  = c.offsetWidth  || 400;
    c.height = c.offsetHeight || 200;
    return c.getContext('2d');
  }

  function resizeCanvas(canvas) {
    if (!canvas) return;
    canvas.width  = canvas.offsetWidth  || 400;
    canvas.height = canvas.offsetHeight || 200;
  }

  // ================================================================
  // SECTION 3 — CALCULATORS
  // ================================================================

  function calcRatio(el1Id, el2Id, resultId) {
    const a = parseInt(document.getElementById(el1Id) && document.getElementById(el1Id).value);
    const b = parseInt(document.getElementById(el2Id) && document.getElementById(el2Id).value);
    const resEl = document.getElementById(resultId);
    if (!resEl) return;
    if (!a || !b || a < 1 || a > 114 || b < 1 || b > 114) {
      resEl.textContent = 'Enter valid atomic numbers (1–114) for both elements.';
      return;
    }
    const ca = CODES[a - 1], cb = CODES[b - 1];
    const ratio  = (b / a).toFixed(4);
    const gv     = gcd(a, b);
    const aSimp  = a / gv, bSimp = b / gv;
    const coupling = (a % 2 === 0 && b % 2 === 0)
      ? 'Harmonic Double-Even — strong lattice lock, stable cold field'
      : (a % 2 !== 0 && b % 2 !== 0)
      ? 'Harmonic Double-Odd — dynamic resonance, warm oscillating field'
      : 'Cross-parity — phase-bridge coupling, transitional flux state';
    const sumAB  = a + b;
    const prodAB = a * b;
    const freqHz = (a * b * 1.618).toFixed(2);
    resEl.innerHTML = `
      <strong>${ca.name} (${a}) ↔ ${cb.name} (${b})</strong><br>
      Ratio: <em>${a}:${b}</em> → simplified <em>${aSimp}:${bSimp}</em><br>
      Decimal: ${ratio} &nbsp;|&nbsp; GCD node: ${gv} &nbsp;|&nbsp; Sum: ${sumAB} &nbsp;|&nbsp; Product: ${prodAB}<br>
      Coupling type: <em>${coupling}</em><br>
      Predicted resonance freq (Golden): <em>${freqHz} Hz</em><br>
      A — ${ca.name} role: ${ca.role}<br>
      B — ${cb.name} role: ${cb.role}<br>
      A activation: ${ca.use}<br>
      B activation: ${cb.use}
    `;
  }

  function interpretCodes(inputId, resultId) {
    const inputEl  = document.getElementById(inputId);
    const resEl    = document.getElementById(resultId);
    if (!inputEl || !resEl) return;
    const raw = inputEl.value.trim();
    if (!raw) { resEl.textContent = 'Enter a code number or sequence of codes separated by spaces.'; return; }
    const nums = raw.split(/[\s,]+/).map(Number).filter(n => n >= 1 && n <= 114);
    if (!nums.length) { resEl.textContent = 'No valid codes found. Use numbers 1–114 separated by spaces.'; return; }
    const lines = nums.map(n => {
      const c = CODES[n - 1];
      return `<div style="margin:4px 0"><strong style="color:var(--a)">${n} · ${c.element} — ${c.name}</strong><br>
        <span style="color:var(--b)">${c.role}</span><br>
        <small style="color:var(--sub)">${c.use}</small></div>`;
    });
    const totalSum = nums.reduce((s, n) => s + n, 0);
    const avgN     = (totalSum / nums.length).toFixed(1);
    const fieldChar = totalSum % 2 === 0 ? 'Even — stable, cold, lattice-locked' : 'Odd — dynamic, warm, oscillating';
    resEl.innerHTML = lines.join('<hr style="border-color:rgba(255,255,255,.08);margin:4px 0">') +
      `<hr style="border-color:rgba(255,255,255,.15);margin:8px 0">
       <strong>Sequence Analysis:</strong> ${nums.length} code(s) | Sum: ${totalSum} | Avg: ${avgN}<br>
       Field character: <em>${fieldChar}</em>`;
  }

  function calcVFD(elId, voltId, resultId) {
    const elInput   = document.getElementById(elId);
    const voltInput = document.getElementById(voltId);
    const resEl     = document.getElementById(resultId);
    if (!elInput || !voltInput || !resEl) return;
    const el = parseInt(elInput.value);
    const v  = parseFloat(voltInput.value);
    if (!el || el < 1 || el > 114 || isNaN(v) || v <= 0 || v > 5) {
      resEl.textContent = 'Enter element (1–114) and voltage (0.01–5 V) for VFD shell activation.';
      return;
    }
    const c      = CODES[el - 1];
    const shells = [2, 8, 18, 32, 50, 72, 98];
    let cumulative = 0, shellNum = 0;
    for (let i = 0; i < shells.length; i++) {
      cumulative += shells[i];
      if (el <= cumulative) { shellNum = i + 1; break; }
    }
    if (shellNum === 0) shellNum = 7;
    const vPerShell  = (v / shellNum).toFixed(3);
    const freq       = (el * v * 141).toFixed(1);
    const period     = (1000 / parseFloat(freq)).toFixed(4);
    const wavelength = (299792458 / parseFloat(freq)).toFixed(2);
    const energy     = (parseFloat(freq) * 6.626e-34 * 1e20).toFixed(6);
    resEl.innerHTML = `
      <strong>${c.name} (${el}) at ${v} V</strong><br>
      Shell count: ${shellNum} &nbsp;|&nbsp; V per shell: ${vPerShell} V<br>
      Predicted resonance freq: <em>${freq} Hz</em><br>
      Period: ${period} ms &nbsp;|&nbsp; Wavelength: ${wavelength} m<br>
      Photon energy (scaled): ${energy} ×10⁻²⁰ J<br>
      Role: ${c.role}<br>
      Activation: ${c.use}
    `;
  }

  // ================================================================
  // SECTION 4 — STACK BUILDER
  // ================================================================

  const stack = [];

  function addLayer() {
    const elEl  = document.getElementById('stackEl');
    const ratEl = document.getElementById('stackRatio');
    if (!elEl) return;
    const el  = parseInt(elEl.value);
    const qty = parseInt(ratEl && ratEl.value) || 1;
    if (!el || el < 1 || el > 114) return;
    const c = CODES[el - 1];
    stack.push({ el, qty, name: c.name, role: c.role, use: c.use, element: c.element });
    renderStack();
  }

  function clearStack() { stack.length = 0; renderStack(); }

  function removeLayer(i) { stack.splice(i, 1); renderStack(); }

  function renderStack() {
    const layersEl = document.getElementById('stackLayers');
    const outEl    = document.getElementById('stackOutput');
    if (!layersEl || !outEl) return;
    if (!stack.length) {
      layersEl.innerHTML = '<p style="color:var(--sub);font-size:.85rem;padding:12px 0">No layers added yet. Select an element and quantity above.</p>';
      outEl.innerHTML    = '';
      return;
    }
    layersEl.innerHTML = stack.map((l, i) => `
      <div class="stack-layer">
        <span class="stack-el-num">${l.el}</span>
        <span class="stack-el-sym">${l.element}</span>
        <span class="stack-el-name">${l.name}</span>
        <span class="stack-qty">×${l.qty}</span>
        <span class="stack-role">${l.role}</span>
        <button onclick="window._removeLayer(${i})" class="stack-remove" title="Remove layer">✕</button>
      </div>`).join('');

    const totalEl   = stack.reduce((s, l) => s + l.el * l.qty, 0);
    const totalQty  = stack.reduce((s, l) => s + l.qty, 0);
    const topLayer  = stack[stack.length - 1];
    const botLayer  = stack[0];
    const fieldChar = totalEl % 2 === 0 ? 'Even — stable, cold, lattice-locked' : 'Odd — dynamic, warm, oscillating';
    const avgEl     = (totalEl / totalQty).toFixed(1);
    const dominantEl= stack.reduce((prev, curr) => curr.qty > prev.qty ? curr : prev);
    outEl.innerHTML = `
      <strong>Stack Analysis</strong><br>
      Layers: ${stack.length} &nbsp;|&nbsp; Total units: ${totalQty}<br>
      Weighted element sum: ${totalEl} &nbsp;|&nbsp; Average element: ${avgEl}<br>
      Dominant: <em>${dominantEl.name} (${dominantEl.el}) ×${dominantEl.qty}</em><br>
      Bottom layer: ${botLayer.name} (${botLayer.el}) — ${botLayer.role}<br>
      Top layer: ${topLayer.name} (${topLayer.el}) — ${topLayer.role}<br>
      Predicted output: ${topLayer.use}<br>
      Field character: <em>${fieldChar}</em>
    `;
  }

  // expose for inline onclick
  window._removeLayer = removeLayer;

  // ================================================================
  // SECTION 5 — CANVAS & SVG ANIMATION ENGINE
  // ================================================================

  let T = 0; // global frame counter

  // ---- Canvas contexts (initialised after DOM ready) ----
  let gyroCanvas, gyroCTX;
  let cavityCanvas, cavityCTX;
  let volumeCanvas, volumeCTX;
  let regulatorCanvas, regulatorCTX;
  let staticCanvas, staticCTX;
  let nucleoCanvas, nucleoCTX;
  let geologyCanvas, geologyCTX;
  let qMicCanvas, qMicCTX;
  let triCanvas, triCTX;
  let stackCanvas, stackCTX;
  let batteryCanvas, batteryCTX;
  let gridCanvas, gridCTX;
  let vfdCanvas, vfdCTX;

  // ---- Triangle dragging state ----
  let triVerts    = [{ x: 200, y: 40 }, { x: 360, y: 230 }, { x: 40, y: 230 }];
  let draggingTri = -1;

  // ---- drawGyro ----
  function drawGyro() {
    const ctx = gyroCTX, c = gyroCanvas;
    if (!ctx) return;
    const w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);

    // Background glow
    const bg = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, Math.min(w,h)*0.5);
    bg.addColorStop(0, 'rgba(99,102,241,.12)');
    bg.addColorStop(1, 'transparent');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    const cx = w / 2, cy = h / 2;
    const ellipseColors = ['#818cf8', '#c084fc', '#34d399'];
    const speeds = [0.018, 0.026, 0.011];
    const radiusX = [w * 0.40, w * 0.32, w * 0.24];
    const radiusY = [h * 0.12, h * 0.18, h * 0.22];

    for (let i = 0; i < 3; i++) {
      const angle = T * speeds[i] + (i * Math.PI / 2.5);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      // Shadow/glow pass
      ctx.shadowColor = ellipseColors[i];
      ctx.shadowBlur  = 14;
      ctx.beginPath();
      ctx.ellipse(0, 0, radiusX[i], radiusY[i], 0, 0, Math.PI * 2);
      ctx.strokeStyle = ellipseColors[i];
      ctx.lineWidth   = i === 1 ? 2.5 : 1.5;
      ctx.globalAlpha = 0.75 + 0.25 * Math.sin(T * 0.03 + i);
      ctx.stroke();
      ctx.restore();
    }

    // Axis lines
    ctx.save();
    ctx.globalAlpha = 0.18;
    ctx.strokeStyle = '#a78bfa';
    ctx.setLineDash([4, 8]);
    ctx.beginPath(); ctx.moveTo(cx, 10); ctx.lineTo(cx, h - 10); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(10, cy); ctx.lineTo(w - 10, cy); ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    // Center dot pulse
    const pulse = 4 + 2 * Math.sin(T * 0.06);
    const cGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, pulse * 3);
    cGrad.addColorStop(0, '#ffffff');
    cGrad.addColorStop(0.4, '#a78bfa');
    cGrad.addColorStop(1, 'transparent');
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, pulse, 0, Math.PI * 2);
    ctx.fillStyle = cGrad;
    ctx.fill();

    // Angular velocity readout
    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = 'rgba(199,210,254,.6)';
    ctx.fillText('ω₁=' + (speeds[0] * 1000).toFixed(0) + ' | ω₂=' + (speeds[1] * 1000).toFixed(0) + ' | ω₃=' + (speeds[2] * 1000).toFixed(0), 8, h - 8);
  }

  // ---- drawScope (SVG) ----
  function drawScope() {
    const ids = ['waveA', 'waveB', 'waveLock'];
    const amplitudes = [30, 20, 10];
    const freqs      = [4,  6,  8];
    const phases     = [0, Math.PI / 3, Math.PI * 0.7];
    const W = 420, H = 80;
    ids.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      let d = `M 0 ${H / 2}`;
      for (let x = 0; x <= W; x += 3) {
        const y = H / 2 + Math.sin((x / W) * Math.PI * freqs[i] + T * 0.04 * (i + 1) + phases[i]) * amplitudes[i];
        d += ` L ${x} ${y}`;
      }
      el.setAttribute('d', d);
    });
  }

  // ---- drawCavity ----
  function drawCavity() {
    const ctx = cavityCTX, c = cavityCanvas;
    if (!ctx) return;
    const w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);

    // Draw silver wave (top)
    ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const y = h * 0.25 + Math.sin((x / w) * Math.PI * 6 + T * 0.025) * h * 0.12;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = '#c0c0c0';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#c0c0c0';
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Draw palladium wave (bottom) — opposing phase
    ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const y = h * 0.75 - Math.sin((x / w) * Math.PI * 6 + T * 0.025) * h * 0.12;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = '#a8c4e8';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#818cf8';
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Cold spot radial at center
    const cx = w / 2, cy = h / 2;
    const coldR = 25 + 8 * Math.sin(T * 0.04);
    const radGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coldR * 2);
    radGrad.addColorStop(0, 'rgba(56,189,248,.65)');
    radGrad.addColorStop(0.4, 'rgba(99,102,241,.30)');
    radGrad.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(cx, cy, coldR * 2, 0, Math.PI * 2);
    ctx.fillStyle = radGrad;
    ctx.fill();

    // Labels
    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = '#c0c0c0';
    ctx.fillText('Ag-47 (Silver)', 6, 18);
    ctx.fillStyle = '#a8c4e8';
    ctx.fillText('Pd-46 (Palladium)', 6, h - 6);
    ctx.fillStyle = 'rgba(56,189,248,.9)';
    ctx.fillText('Cold Cavity', cx - 30, cy + 4);
  }

  // ---- drawVolume ----
  function drawVolume() {
    const ctx = volumeCTX, c = volumeCanvas;
    if (!ctx) return;
    const w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);
    const mid = w / 2;

    // Left panel — Thallium-81: chaotic waves
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, mid - 10, h);
    ctx.clip();
    for (let k = 1; k <= 5; k++) {
      ctx.beginPath();
      for (let x = 0; x < mid - 10; x += 2) {
        const noise = (Math.random() * 2 - 1) * 5;
        const y = h * 0.5 + Math.sin((x / (mid - 10)) * Math.PI * (3 + k) + T * 0.04 * k) * h * 0.18 + noise;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `hsla(${330 + k * 15},70%,${50 + k * 4}%,.5)`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = '#f87171';
    ctx.fillText('Tl-81 CHAOS', 8, 16);
    ctx.restore();

    // Right panel — Lead-82: stable single wave
    ctx.save();
    ctx.beginPath();
    ctx.rect(mid + 10, 0, mid - 10, h);
    ctx.clip();
    ctx.beginPath();
    for (let x = mid + 10; x <= w; x += 2) {
      const y = h * 0.5 + Math.sin(((x - mid - 10) / (mid - 10)) * Math.PI * 4 + T * 0.015) * h * 0.20;
      x === mid + 10 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = '#818cf8';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#818cf8';
    ctx.shadowBlur = 10;
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = '#818cf8';
    ctx.fillText('Pb-82 STABLE', mid + 14, 16);
    ctx.restore();

    // Arrow between panels
    ctx.save();
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#34d399';
    ctx.shadowBlur = 8;
    const ay = h / 2;
    ctx.beginPath();
    ctx.moveTo(mid - 8, ay);
    ctx.lineTo(mid + 8, ay);
    const headLen = 7;
    ctx.moveTo(mid + 8, ay);
    ctx.lineTo(mid + 8 - headLen, ay - 5);
    ctx.moveTo(mid + 8, ay);
    ctx.lineTo(mid + 8 - headLen, ay + 5);
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.restore();

    // Divider line
    ctx.strokeStyle = 'rgba(255,255,255,.15)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.beginPath();
    ctx.moveTo(mid, 0);
    ctx.lineTo(mid, h);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // ---- drawRegulator ----
  function drawRegulator() {
    const ctx = regulatorCTX, c = regulatorCanvas;
    if (!ctx) return;
    const w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);

    const nodes = [
      { x: w * 0.12, y: h * 0.5, label: 'Static\nInput', color: '#f59e0b' },
      { x: w * 0.37, y: h * 0.5, label: 'Pilot\nShield', color: '#818cf8' },
      { x: w * 0.63, y: h * 0.5, label: 'Gyro\nCore',   color: '#c084fc' },
      { x: w * 0.88, y: h * 0.5, label: 'Output\nField', color: '#34d399' }
    ];

    // Draw connection lines
    for (let i = 0; i < nodes.length - 1; i++) {
      const a = nodes[i], b = nodes[i + 1];
      ctx.strokeStyle = 'rgba(255,255,255,.15)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    // Animated heat pulse along the line
    const totalSegments = nodes.length - 1;
    const progress = (T * 0.012) % totalSegments;
    const seg      = Math.floor(progress);
    const segT     = progress - seg;
    if (seg < totalSegments) {
      const from = nodes[seg], to = nodes[seg + 1];
      const px = lerp(from.x, to.x, segT);
      const py = lerp(from.y, to.y, segT);
      const pGrad = ctx.createRadialGradient(px, py, 0, px, py, 14);
      pGrad.addColorStop(0, 'rgba(255,150,60,.9)');
      pGrad.addColorStop(0.5, 'rgba(248,113,113,.5)');
      pGrad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(px, py, 14, 0, Math.PI * 2);
      ctx.fillStyle = pGrad;
      ctx.fill();
    }

    // Draw nodes
    nodes.forEach((n, i) => {
      // Outer glow ring
      ctx.beginPath();
      ctx.arc(n.x, n.y, 26, 0, Math.PI * 2);
      ctx.strokeStyle = n.color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.35 + 0.15 * Math.sin(T * 0.05 + i);
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Main circle
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 20);
      grad.addColorStop(0, n.color + 'aa');
      grad.addColorStop(1, 'rgba(15,15,35,.8)');
      ctx.beginPath();
      ctx.arc(n.x, n.y, 20, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.strokeStyle = n.color;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Label
      const lines = n.label.split('\n');
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 10px Inter, sans-serif';
      ctx.textAlign = 'center';
      lines.forEach((ln, j) => ctx.fillText(ln, n.x, n.y + h * 0.28 + j * 14));
      ctx.textAlign = 'left';

      // Index number
      ctx.fillStyle = n.color;
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(i + 1, n.x, n.y + 5);
      ctx.textAlign = 'left';
    });
  }

  // ---- drawStatic ----
  function drawStatic() {
    const ctx = staticCTX, c = staticCanvas;
    if (!ctx) return;
    const w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;

    // Neon (Ne-10) outer ring
    const r1 = Math.min(w, h) * 0.38;
    ctx.beginPath();
    ctx.arc(cx, cy, r1 + 6 * Math.sin(T * 0.04), 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(251,146,60,.6)';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#fb923c';
    ctx.shadowBlur = 20;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Fluorine (F-9) inner glow
    const r2 = r1 * 0.55;
    const fGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r2);
    fGrad.addColorStop(0, 'rgba(196,181,253,.25)');
    fGrad.addColorStop(0.6, 'rgba(99,102,241,.12)');
    fGrad.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(cx, cy, r2 * (1 + 0.08 * Math.sin(T * 0.05)), 0, Math.PI * 2);
    ctx.fillStyle = fGrad;
    ctx.fill();

    // Lightning bolt
    const boltPhase = Math.floor(T / 18) % 5;
    if (boltPhase < 3) {
      const boltX = cx + 20 * Math.sin(T * 0.15);
      ctx.beginPath();
      ctx.moveTo(boltX, cy - r2 * 0.8);
      ctx.lineTo(boltX - 14, cy - r2 * 0.2);
      ctx.lineTo(boltX + 4, cy - r2 * 0.1);
      ctx.lineTo(boltX - 10, cy + r2 * 0.8);
      ctx.strokeStyle = '#fde68a';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#fbbf24';
      ctx.shadowBlur = 16;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // Rotating static sparks
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + T * 0.03;
      const sr = r1 * (0.7 + 0.3 * Math.sin(T * 0.06 + i * 0.8));
      const sx = cx + Math.cos(a) * sr;
      const sy = cy + Math.sin(a) * sr;
      ctx.beginPath();
      ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = i % 2 === 0 ? '#fde68a' : '#c084fc';
      ctx.fill();
    }

    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = 'rgba(251,146,60,.8)';
    ctx.fillText('Ne-10 Bottle', 6, 18);
    ctx.fillStyle = 'rgba(196,181,253,.8)';
    ctx.fillText('F-9 Seal', 6, h - 6);
  }

  // ---- drawNucleo ----
  function drawNucleo() {
    const ctx = nucleoCTX, c = nucleoCanvas;
    if (!ctx) return;
    const w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);

    // Stage 1: raw radiation threads (left)
    const x1 = w * 0.15;
    for (let i = 0; i < 5; i++) {
      const angle = (-0.5 + i * 0.25) * Math.PI;
      const len   = w * 0.12;
      ctx.beginPath();
      ctx.moveTo(x1, h / 2);
      const ex = x1 + Math.cos(angle) * len;
      const ey = h / 2 + Math.sin(angle) * len;
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = `hsla(${30 + i * 25},80%,60%,.5)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      const px = x1 + Math.cos(angle) * len * ((T * 0.022 + i * 0.3) % 1.0);
      const py = h / 2 + Math.sin(angle) * len * ((T * 0.022 + i * 0.3) % 1.0);
      ctx.beginPath();
      ctx.arc(px, py, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#fbbf24';
      ctx.fill();
    }

    // Arrow 1
    const ax1 = x1 + w * 0.14;
    ctx.strokeStyle = '#818cf8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(ax1 - 15, h / 2);
    ctx.lineTo(ax1 + 5, h / 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ax1 + 5, h / 2);
    ctx.lineTo(ax1 - 4, h / 2 - 5);
    ctx.moveTo(ax1 + 5, h / 2);
    ctx.lineTo(ax1 - 4, h / 2 + 5);
    ctx.stroke();

    // Stage 2: cold cavity (centre)
    const x2 = w * 0.50;
    const cavR = 28 + 6 * Math.sin(T * 0.04);
    const cavGrad = ctx.createRadialGradient(x2, h / 2, 0, x2, h / 2, cavR * 1.5);
    cavGrad.addColorStop(0, 'rgba(56,189,248,.5)');
    cavGrad.addColorStop(0.6, 'rgba(99,102,241,.2)');
    cavGrad.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(x2, h / 2, cavR * 1.5, 0, Math.PI * 2);
    ctx.fillStyle = cavGrad;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x2, h / 2, cavR * 0.6, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(56,189,248,.25)';
    ctx.fill();

    // Arrow 2
    const ax2 = x2 + w * 0.12;
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(ax2 - 15, h / 2);
    ctx.lineTo(ax2 + 5, h / 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ax2 + 5, h / 2);
    ctx.lineTo(ax2 - 4, h / 2 - 5);
    ctx.moveTo(ax2 + 5, h / 2);
    ctx.lineTo(ax2 - 4, h / 2 + 5);
    ctx.stroke();

    // Stage 3: woven element (right)
    const x3 = w * 0.84;
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + T * 0.02;
      const r = 22;
      ctx.beginPath();
      ctx.arc(x3 + Math.cos(a) * r, h / 2 + Math.sin(a) * r * 0.5, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${260 + i * 20},70%,70%)`;
      ctx.fill();
    }
    const wGrad = ctx.createRadialGradient(x3, h / 2, 0, x3, h / 2, 16);
    wGrad.addColorStop(0, '#a78bfa');
    wGrad.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(x3, h / 2, 10, 0, Math.PI * 2);
    ctx.fillStyle = wGrad;
    ctx.fill();

    // Labels
    ctx.font = '10px Inter, sans-serif';
    ctx.fillStyle = '#fbbf24';
    ctx.textAlign = 'center';
    ctx.fillText('RAW', x1, h - 6);
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('CAVITY', x2, h - 6);
    ctx.fillStyle = '#a78bfa';
    ctx.fillText('WOVEN', x3, h - 6);
    ctx.textAlign = 'left';
  }

  // ---- drawGeology ----
  function drawGeology() {
    const ctx = geologyCTX, c = geologyCanvas;
    if (!ctx) return;
    const w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);

    // Silver (Ag) wave
    ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const y = h * 0.38 + Math.sin((x / w) * Math.PI * 5 + T * 0.022) * h * 0.14;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#cbd5e1';
    ctx.shadowBlur = 6;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Copper (Cu) wave
    ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const y = h * 0.62 + Math.sin((x / w) * Math.PI * 5 - T * 0.022 + Math.PI * 0.6) * h * 0.14;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = '#fb923c';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#f97316';
    ctx.shadowBlur = 6;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Interference zone between the two waves
    ctx.globalAlpha = 0.15;
    ctx.fillStyle = '#818cf8';
    ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const y = h * 0.38 + Math.sin((x / w) * Math.PI * 5 + T * 0.022) * h * 0.14;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    for (let x = w; x >= 0; x -= 2) {
      const y = h * 0.62 + Math.sin((x / w) * Math.PI * 5 - T * 0.022 + Math.PI * 0.6) * h * 0.14;
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;

    // Mineral labels
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.fillStyle = '#e2e8f0';
    ctx.fillText('Ag-47 Silver Vein', 8, 16);
    ctx.fillStyle = '#fb923c';
    ctx.fillText('Cu-29 Copper Vein', 8, h - 6);
    ctx.fillStyle = '#818cf8';
    ctx.fillText('Interference Zone', w / 2 - 55, h / 2 + 4);
  }

  // ---- drawQMic ----
  function drawQMic() {
    const ctx = qMicCTX, c = qMicCanvas;
    if (!ctx) return;
    const w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;

    // Triangle (Alpha, Beta, Gamma)
    const R = Math.min(w, h) * 0.35;
    const verts = [0, 1, 2].map(i => {
      const a = (i / 3) * Math.PI * 2 - Math.PI / 2 + T * 0.008;
      return { x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R };
    });
    ctx.beginPath();
    ctx.moveTo(verts[0].x, verts[0].y);
    verts.forEach(v => ctx.lineTo(v.x, v.y));
    ctx.closePath();
    ctx.strokeStyle = 'rgba(99,102,241,.5)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    const labels = ['α', 'β', 'γ'];
    const lColors = ['#f87171', '#34d399', '#818cf8'];
    verts.forEach((v, i) => {
      ctx.beginPath();
      ctx.arc(v.x, v.y, 7, 0, Math.PI * 2);
      ctx.fillStyle = lColors[i];
      ctx.fill();
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.fillText(labels[i], v.x, v.y + 4);
      ctx.textAlign = 'left';
    });

    // Phonon breadcrumb trail
    const numDots = 24;
    for (let i = 0; i < numDots; i++) {
      const phase = (T * 0.03 + i / numDots) % 1;
      const px = (phase * (w - 20)) + 10;
      const amp = h * 0.12;
      const py = cy + Math.sin(phase * Math.PI * 6) * amp;
      const alpha = Math.sin(phase * Math.PI);
      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56,189,248,${alpha.toFixed(2)})`;
      ctx.fill();
    }

    ctx.font = '10px Inter, sans-serif';
    ctx.fillStyle = 'rgba(148,163,184,.6)';
    ctx.fillText('phonon trail →', 8, h - 6);
  }

  // ---- drawTriangle (interactive) ----
  function drawTriangle() {
    const ctx = triCTX, c = triCanvas;
    if (!ctx) return;
    const w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);

    // Draw the triangle
    ctx.beginPath();
    ctx.moveTo(triVerts[0].x, triVerts[0].y);
    triVerts.forEach(v => ctx.lineTo(v.x, v.y));
    ctx.closePath();
    const triGrad = ctx.createLinearGradient(0, 0, w, h);
    triGrad.addColorStop(0, 'rgba(99,102,241,.15)');
    triGrad.addColorStop(1, 'rgba(192,132,252,.12)');
    ctx.fillStyle = triGrad;
    ctx.fill();
    ctx.strokeStyle = '#818cf8';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#818cf8';
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Draw draggable vertex handles
    const vColors = ['#f87171', '#34d399', '#fbbf24'];
    const vLabels = ['A', 'B', 'C'];
    triVerts.forEach((v, i) => {
      ctx.beginPath();
      ctx.arc(v.x, v.y, 9, 0, Math.PI * 2);
      ctx.fillStyle = vColors[i];
      ctx.fill();
      ctx.font = 'bold 10px Inter, sans-serif';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.fillText(vLabels[i], v.x, v.y + 4);
      ctx.textAlign = 'left';
    });

    // Compute side lengths and update readout
    const [A, B, Cv] = triVerts;
    const AB = Math.sqrt((B.x - A.x) ** 2 + (B.y - A.y) ** 2);
    const BC = Math.sqrt((Cv.x - B.x) ** 2 + (Cv.y - B.y) ** 2);
    const CA = Math.sqrt((A.x - Cv.x) ** 2 + (A.y - Cv.y) ** 2);
    const angA = Math.acos(clamp(((AB * AB + CA * CA - BC * BC) / (2 * AB * CA)), -1, 1)) * 180 / Math.PI;
    const angB = Math.acos(clamp(((AB * AB + BC * BC - CA * CA) / (2 * AB * BC)), -1, 1)) * 180 / Math.PI;
    const angC = 180 - angA - angB;
    const el = document.getElementById('triangleReadout');
    if (el) {
      el.textContent = `A: ${angA.toFixed(1)}°  B: ${angB.toFixed(1)}°  C: ${angC.toFixed(1)}°  |  AB:BC = ${(AB / BC).toFixed(3)}  |  Area = ${(0.5 * Math.abs((B.x - A.x) * (Cv.y - A.y) - (Cv.x - A.x) * (B.y - A.y))).toFixed(0)} px²`;
    }

    ctx.font = '10px Inter, sans-serif';
    ctx.fillStyle = 'rgba(148,163,184,.5)';
    ctx.fillText('drag vertices', 6, h - 6);
  }

  // ---- drawStackCanvas ----
  function drawStackCanvas() {
    const ctx = stackCTX, c = stackCanvas;
    if (!ctx) return;
    const w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);

    if (!stack.length) {
      ctx.font = '14px Inter, sans-serif';
      ctx.fillStyle = 'rgba(148,163,184,.4)';
      ctx.textAlign = 'center';
      ctx.fillText('Add layers to see the stack visualisation', w / 2, h / 2);
      ctx.textAlign = 'left';
      return;
    }

    const layerH = Math.min(h / stack.length - 4, 50);
    const margin = 12;
    stack.forEach((layer, i) => {
      const rev   = stack.length - 1 - i;
      const y     = margin + rev * (layerH + 4);
      const glow  = i === stack.length - 1;
      const hue   = (layer.el * 17) % 360;
      const grad  = ctx.createLinearGradient(margin, y, w - margin, y + layerH);
      grad.addColorStop(0, `hsla(${hue},65%,50%,.25)`);
      grad.addColorStop(1, `hsla(${hue + 30},65%,40%,.15)`);
      ctx.fillStyle = grad;
      ctx.strokeStyle = `hsl(${hue},65%,55%)`;
      ctx.lineWidth   = glow ? 2 : 1;
      if (glow) { ctx.shadowColor = `hsl(${hue},70%,60%)`; ctx.shadowBlur = 12; }
      ctx.beginPath();
      ctx.roundRect
        ? ctx.roundRect(margin, y, w - margin * 2, layerH, 4)
        : ctx.rect(margin, y, w - margin * 2, layerH);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.fillStyle = `hsl(${hue},70%,80%)`;
      ctx.fillText(`${layer.el} ${layer.element} — ${layer.name}  ×${layer.qty}`, margin + 8, y + layerH * 0.58);
    });
  }

  // ---- drawBattery ----
  function drawBattery() {
    const ctx = batteryCTX, c = batteryCanvas;
    if (!ctx) return;
    const w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);
    const cx  = w / 2;
    const numCoins = 7;
    const coinW = w * 0.55, coinH = 18;
    const startY = h * 0.75;

    for (let i = 0; i < numCoins; i++) {
      const y      = startY - i * (coinH + 3);
      const bright = i === numCoins - 1;
      const progress = ((T * 0.015 + i * 0.12) % 1);
      const glowAlpha = Math.sin(progress * Math.PI) * 0.5;

      const grad = ctx.createLinearGradient(cx - coinW / 2, y, cx - coinW / 2, y + coinH);
      grad.addColorStop(0, bright ? '#c0c0c0' : '#888');
      grad.addColorStop(0.5, bright ? '#e8e8e8' : '#aaa');
      grad.addColorStop(1, bright ? '#999' : '#666');

      ctx.beginPath();
      ctx.ellipse(cx, y + coinH * 0.3, coinW / 2, coinH * 0.28, 0, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.shadowColor = `rgba(192,192,192,${glowAlpha})`;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // Ruby glow at apex
    const rubyY = startY - numCoins * (coinH + 3) - 12;
    const rubyR = 12 + 4 * Math.sin(T * 0.05);
    const rubyGrad = ctx.createRadialGradient(cx, rubyY, 0, cx, rubyY, rubyR * 2);
    rubyGrad.addColorStop(0, '#ff6b9d');
    rubyGrad.addColorStop(0.5, '#e11d48aa');
    rubyGrad.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(cx, rubyY, rubyR * 2, 0, Math.PI * 2);
    ctx.fillStyle = rubyGrad;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx, rubyY, rubyR * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = '#fda4af';
    ctx.fill();

    ctx.font = '10px Inter, sans-serif';
    ctx.fillStyle = 'rgba(192,192,192,.7)';
    ctx.textAlign = 'center';
    ctx.fillText('Ni-28 Stack', cx, h - 6);
    ctx.fillStyle = '#fda4af';
    ctx.fillText('Ruby Apex', cx, rubyY - rubyR * 2 - 4);
    ctx.textAlign = 'left';
  }

  // ---- drawGrid ----
  function drawGrid() {
    const ctx = gridCTX, c = gridCanvas;
    if (!ctx) return;
    const w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    const latNodes = [];

    // Generate globe-like nodes
    const rows = 5, cols = 10;
    for (let r = 0; r < rows; r++) {
      for (let cc = 0; cc < cols; cc++) {
        const lat = (r / (rows - 1)) * Math.PI;
        const lon = (cc / cols) * Math.PI * 2 + T * 0.006;
        const x = cx + Math.cos(lon) * Math.sin(lat) * w * 0.38;
        const y = cy + Math.cos(lat) * h * 0.42;
        latNodes.push({ x, y, active: (r * cols + cc + Math.floor(T * 0.02)) % 8 === 0 });
      }
    }

    // Draw edges between nearby nodes
    latNodes.forEach((n, i) => {
      latNodes.forEach((m, j) => {
        if (j <= i) return;
        const d = Math.sqrt((n.x - m.x) ** 2 + (n.y - m.y) ** 2);
        if (d < 80) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.strokeStyle = `rgba(99,102,241,${0.12 + 0.08 * (1 - d / 80)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });
    });

    // Draw sync pulse wave
    const pulseR = ((T * 1.6) % (Math.max(w, h) * 0.8));
    const pulseAlpha = Math.max(0, 0.5 - pulseR / (Math.max(w, h) * 0.8));
    ctx.beginPath();
    ctx.arc(cx, cy, pulseR, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(52,211,153,${pulseAlpha.toFixed(2)})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Draw nodes
    latNodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.active ? 5 : 3, 0, Math.PI * 2);
      ctx.fillStyle = n.active ? '#34d399' : '#6366f1';
      if (n.active) { ctx.shadowColor = '#34d399'; ctx.shadowBlur = 10; }
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    ctx.font = '10px Inter, sans-serif';
    ctx.fillStyle = 'rgba(52,211,153,.6)';
    ctx.fillText('Global Resonance Grid', 6, 16);
  }

  // ---- drawVFDCanvas ----
  function drawVFDCanvas() {
    const ctx = vfdCTX, c = vfdCanvas;
    if (!ctx) return;
    const w = c.width, h = c.height;
    ctx.clearRect(0, 0, w, h);

    // Read voltage from input if available
    const voltInput = document.getElementById('vfdVoltage');
    const voltage   = voltInput ? Math.min(5, Math.max(0.1, parseFloat(voltInput.value) || 1.5)) : 1.5;
    const amplitude = (voltage / 5) * (h * 0.42);
    const freq      = voltage * 2.5;

    ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const y = h / 2 + Math.sin((x / w) * Math.PI * 2 * freq + T * 0.04) * amplitude;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    const wGrad = ctx.createLinearGradient(0, 0, w, 0);
    wGrad.addColorStop(0, '#818cf8');
    wGrad.addColorStop(0.5, '#c084fc');
    wGrad.addColorStop(1, '#34d399');
    ctx.strokeStyle = wGrad;
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#818cf8';
    ctx.shadowBlur = 10;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Baseline
    ctx.strokeStyle = 'rgba(255,255,255,.1)';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 8]);
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.font = '11px Inter, sans-serif';
    ctx.fillStyle = 'rgba(196,181,253,.8)';
    ctx.fillText(`V = ${voltage.toFixed(2)} V  |  amp = ${amplitude.toFixed(0)}px  |  freq = ${freq.toFixed(1)} cyc`, 6, 16);
  }

  // ================================================================
  // SECTION 6 — MASTER ANIMATION LOOP
  // ================================================================

  function animate() {
    T++;
    drawGyro();
    drawScope();
    drawCavity();
    drawVolume();
    drawRegulator();
    drawStatic();
    drawNucleo();
    drawGeology();
    drawQMic();
    drawTriangle();
    drawStackCanvas();
    drawBattery();
    drawGrid();
    drawVFDCanvas();
    requestAnimationFrame(animate);
  }

  // ================================================================
  // SECTION 7 — CONFIDENCE BARS
  // ================================================================

  const barData = [
    { label: 'Static Coherence',      value: 94, color: '#818cf8' },
    { label: 'Pilot Shield Integrity', value: 87, color: '#c084fc' },
    { label: 'Gyro Sync',             value: 91, color: '#34d399' },
    { label: 'Cold Cavity Depth',     value: 76, color: '#38bdf8' },
    { label: 'Volume Key Lock',       value: 83, color: '#fbbf24' },
    { label: 'Lattice Coherence',     value: 79, color: '#fb923c' },
    { label: 'Transmutation Rate',    value: 68, color: '#f87171' },
    { label: 'Nucleosynthesis Yield', value: 72, color: '#a78bfa' }
  ];

  function renderBars() {
    const container = document.getElementById('confidenceBars');
    if (!container) return;
    container.innerHTML = barData.map(b => `
      <div class="bar-row">
        <span class="bar-label">${b.label}</span>
        <div class="bar-track">
          <div class="bar-fill" style="width:${b.value}%;background:${b.color}" title="${b.value}%"></div>
        </div>
        <span class="bar-value">${b.value}%</span>
      </div>`).join('');
  }

  // ================================================================
  // SECTION 8 — RADAR CHART (SVG)
  // ================================================================

  function renderRadar() {
    const svg = document.getElementById('radarSvg');
    if (!svg) return;
    const W = 280, H = 280, cx = W / 2, cy = H / 2, R = 110;
    const data = [
      { label: 'Static',     v: 0.94 },
      { label: 'Gyro',       v: 0.91 },
      { label: 'Pilot',      v: 0.87 },
      { label: 'Lattice',    v: 0.79 },
      { label: 'Cavity',     v: 0.76 },
      { label: 'Transmute',  v: 0.68 }
    ];
    const N = data.length;
    const pts = data.map((d, i) => {
      const a = (i / N) * Math.PI * 2 - Math.PI / 2;
      return { x: cx + Math.cos(a) * R * d.v, y: cy + Math.sin(a) * R * d.v, lx: cx + Math.cos(a) * (R + 22), ly: cy + Math.sin(a) * (R + 22), label: d.label };
    });
    const poly = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    // Grid circles
    let gridCircles = '';
    for (let r = 1; r <= 4; r++) {
      gridCircles += `<circle cx="${cx}" cy="${cy}" r="${R * r * 0.25}" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="1"/>`;
    }
    // Spokes
    const spokes = data.map((_, i) => {
      const a = (i / N) * Math.PI * 2 - Math.PI / 2;
      return `<line x1="${cx}" y1="${cy}" x2="${(cx + Math.cos(a) * R).toFixed(1)}" y2="${(cy + Math.sin(a) * R).toFixed(1)}" stroke="rgba(255,255,255,.08)" stroke-width="1"/>`;
    }).join('');
    const labels = pts.map(p => `<text x="${p.lx.toFixed(1)}" y="${p.ly.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" font-size="11" fill="rgba(199,210,254,.7)">${p.label}</text>`).join('');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.innerHTML = gridCircles + spokes +
      `<polygon points="${poly}" fill="rgba(99,102,241,.25)" stroke="#818cf8" stroke-width="2"/>` +
      pts.map(p => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="#c084fc"/>`).join('') +
      labels;
  }

  // ================================================================
  // SECTION 9 — DOM SETUP
  // ================================================================

  document.addEventListener('DOMContentLoaded', () => {

    // ---- Populate code table ----
    const tbody = document.getElementById('codeTableBody');
    if (tbody) {
      CODES.forEach(c => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="hi">${c.n}</td><td class="hi-sym">${c.element}</td><td class="hi">${c.name}</td><td>${c.role}</td><td class="use-col">${c.use}</td>`;
        tbody.appendChild(tr);
      });
    }

    // ---- Populate stack element select ----
    const stackElSel = document.getElementById('stackEl');
    if (stackElSel) {
      CODES.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.n;
        opt.textContent = `${c.n} — ${c.element} — ${c.name}`;
        stackElSel.appendChild(opt);
      });
    }

    // ---- Init canvases ----
    gyroCanvas      = document.getElementById('gyroCanvas');
    cavityCanvas    = document.getElementById('cavityCanvas');
    volumeCanvas    = document.getElementById('volumeCanvas');
    regulatorCanvas = document.getElementById('regulatorCanvas');
    staticCanvas    = document.getElementById('staticCanvas');
    nucleoCanvas    = document.getElementById('nucleoCanvas');
    geologyCanvas   = document.getElementById('geologyCanvas');
    qMicCanvas      = document.getElementById('qMicCanvas');
    triCanvas       = document.getElementById('triangleCanvas');
    stackCanvas     = document.getElementById('stackCanvas');
    batteryCanvas   = document.getElementById('batteryCanvas');
    gridCanvas      = document.getElementById('gridCanvas');
    vfdCanvas       = document.getElementById('vfdCanvas');

    [gyroCanvas, cavityCanvas, volumeCanvas, regulatorCanvas, staticCanvas,
     nucleoCanvas, geologyCanvas, qMicCanvas, triCanvas, stackCanvas,
     batteryCanvas, gridCanvas, vfdCanvas].forEach(cv => { if (cv) resizeCanvas(cv); });

    gyroCTX      = gyroCanvas      && gyroCanvas.getContext('2d');
    cavityCTX    = cavityCanvas    && cavityCanvas.getContext('2d');
    volumeCTX    = volumeCanvas    && volumeCanvas.getContext('2d');
    regulatorCTX = regulatorCanvas && regulatorCanvas.getContext('2d');
    staticCTX    = staticCanvas    && staticCanvas.getContext('2d');
    nucleoCTX    = nucleoCanvas    && nucleoCanvas.getContext('2d');
    geologyCTX   = geologyCanvas   && geologyCanvas.getContext('2d');
    qMicCTX      = qMicCanvas      && qMicCanvas.getContext('2d');
    triCTX       = triCanvas       && triCanvas.getContext('2d');
    stackCTX     = stackCanvas     && stackCanvas.getContext('2d');
    batteryCTX   = batteryCanvas   && batteryCanvas.getContext('2d');
    gridCTX      = gridCanvas      && gridCanvas.getContext('2d');
    vfdCTX       = vfdCanvas       && vfdCanvas.getContext('2d');

    // ---- Triangle mouse events ----
    if (triCanvas) {
      triVerts = [
        { x: triCanvas.width / 2,           y: 30 },
        { x: triCanvas.width - 30,          y: triCanvas.height - 30 },
        { x: 30,                            y: triCanvas.height - 30 }
      ];
      function hitTestTri(px, py) {
        for (let i = 0; i < triVerts.length; i++) {
          const dx = px - triVerts[i].x, dy = py - triVerts[i].y;
          if (dx * dx + dy * dy < 144) return i;
        }
        return -1;
      }
      triCanvas.addEventListener('mousedown', e => {
        const r = triCanvas.getBoundingClientRect();
        draggingTri = hitTestTri(e.clientX - r.left, e.clientY - r.top);
      });
      triCanvas.addEventListener('mousemove', e => {
        if (draggingTri === -1) return;
        const r = triCanvas.getBoundingClientRect();
        triVerts[draggingTri].x = e.clientX - r.left;
        triVerts[draggingTri].y = e.clientY - r.top;
      });
      triCanvas.addEventListener('mouseup', () => { draggingTri = -1; });
      triCanvas.addEventListener('mouseleave', () => { draggingTri = -1; });

      // Touch support
      triCanvas.addEventListener('touchstart', e => {
        e.preventDefault();
        const r = triCanvas.getBoundingClientRect();
        const t = e.touches[0];
        draggingTri = hitTestTri(t.clientX - r.left, t.clientY - r.top);
      }, { passive: false });
      triCanvas.addEventListener('touchmove', e => {
        e.preventDefault();
        if (draggingTri === -1) return;
        const r = triCanvas.getBoundingClientRect();
        const t = e.touches[0];
        triVerts[draggingTri].x = t.clientX - r.left;
        triVerts[draggingTri].y = t.clientY - r.top;
      }, { passive: false });
      triCanvas.addEventListener('touchend', () => { draggingTri = -1; });
    }

    // ---- Wire calculator buttons ----
    const btn = (id, fn) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('click', fn);
    };

    btn('ratioCalcBtn', () => calcRatio('ratioEl1', 'ratioEl2', 'ratioResult'));
    btn('hubRatioBtn',  () => calcRatio('hubEl1',   'hubEl2',   'hubRatioResult'));
    btn('codeBtn',      () => interpretCodes('codeInput', 'codeResult'));
    btn('hubCodeBtn',   () => interpretCodes('hubCode',   'hubCodeResult'));
    btn('vfdBtn',       () => calcVFD('vfdElement', 'vfdVoltage', 'vfdResult'));
    btn('hubVfdBtn',    () => calcVFD('hubEl',       'hubV',       'hubVfdResult'));
    btn('stackAddBtn',  addLayer);
    btn('stackClearBtn', clearStack);

    // Allow Enter key on calculator inputs
    ['ratioEl1','ratioEl2'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') calcRatio('ratioEl1','ratioEl2','ratioResult'); });
    });
    ['codeInput'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') interpretCodes('codeInput','codeResult'); });
    });
    ['vfdElement','vfdVoltage'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') calcVFD('vfdElement','vfdVoltage','vfdResult'); });
    });

    // ---- Mobile nav toggle ----
    const menuButton = document.getElementById('menuButton');
    const mobileNav  = document.getElementById('mobileNav');
    if (menuButton && mobileNav) {
      menuButton.addEventListener('click', () => {
        const open = mobileNav.classList.toggle('open');
        menuButton.classList.toggle('active', open);
        menuButton.setAttribute('aria-expanded', open);
      });
      mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('open');
          menuButton.classList.remove('active');
          menuButton.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Close mobile nav on outside click
    document.addEventListener('click', e => {
      if (mobileNav && menuButton && !mobileNav.contains(e.target) && !menuButton.contains(e.target)) {
        mobileNav.classList.remove('open');
        menuButton.classList.remove('active');
      }
    });

    // ---- Repo search ----
    const repoSearch = document.getElementById('repoSearch');
    if (repoSearch) {
      repoSearch.addEventListener('input', () => {
        const q = repoSearch.value.toLowerCase().trim();
        document.querySelectorAll('.repo-card').forEach(card => {
          const name = (card.dataset.name || '').toLowerCase();
          const cat  = (card.dataset.cat  || '').toLowerCase();
          card.style.display = (!q || name.includes(q) || cat.includes(q)) ? '' : 'none';
        });
        const visible = Array.from(document.querySelectorAll('.repo-card')).filter(c => c.style.display !== 'none').length;
        const counter = document.getElementById('repoCounter');
        if (counter) counter.textContent = `${visible} repositories`;
      });
    }

    // ---- Calibration checklist ----
    document.querySelectorAll('.check-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const li = btn.closest('li');
        if (!li) return;
        li.classList.toggle('done');
        btn.textContent = li.classList.contains('done') ? '✓' : 'CHECK';
        updateChecklistStatus();
      });
    });

    function updateChecklistStatus() {
      const total = document.querySelectorAll('.check-btn').length;
      const done  = document.querySelectorAll('li.done').length;
      const statusEl = document.getElementById('checklistStatus');
      if (!statusEl) return;
      if (done === total) {
        statusEl.textContent = '✓ ALL SYSTEMS CALIBRATED — Protocol ready for activation';
        statusEl.style.color = '#34d399';
      } else {
        statusEl.textContent = `${done}/${total} systems checked — ${total - done} remaining`;
        statusEl.style.color = done > total / 2 ? '#fbbf24' : '#f87171';
      }
    }

    // ---- Render static elements ----
    renderBars();
    renderRadar();
    renderStack();

    // ---- Start animation loop ----
    animate();

    // ---- Resize handler ----
    window.addEventListener('resize', () => {
      [gyroCanvas, cavityCanvas, volumeCanvas, regulatorCanvas, staticCanvas,
       nucleoCanvas, geologyCanvas, qMicCanvas, triCanvas, stackCanvas,
       batteryCanvas, gridCanvas, vfdCanvas].forEach(cv => { if (cv) resizeCanvas(cv); });
    });

    // ---- Smooth scroll for nav links ----
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });

  }); // end DOMContentLoaded

})();
