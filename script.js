const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const motionBtn = document.getElementById("motion-btn");
const parallaxTargets = [...document.querySelectorAll("[data-depth]")];

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }),
  );
}

const applyParallax = (x, y) => {
  const clampedX = Math.max(-1, Math.min(1, x));
  const clampedY = Math.max(-1, Math.min(1, y));
  parallaxTargets.forEach((element) => {
    const depth = Number(element.getAttribute("data-depth") || 10);
    const moveX = clampedX * depth;
    const moveY = clampedY * depth;
    element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  });
};

const enableMotion = async () => {
  if (!window.DeviceOrientationEvent) {
    motionBtn.textContent = "Motion Unsupported";
    motionBtn.disabled = true;
    return;
  }

  if (typeof DeviceOrientationEvent.requestPermission === "function") {
    try {
      const permissionState = await DeviceOrientationEvent.requestPermission();
      if (permissionState !== "granted") {
        motionBtn.textContent = "Motion Permission Denied";
        return;
      }
    } catch {
      motionBtn.textContent = "Motion Permission Blocked";
      return;
    }
  }

  window.addEventListener(
    "deviceorientation",
    (event) => {
      const beta = event.beta ?? 0;
      const gamma = event.gamma ?? 0;
      applyParallax(gamma / 45, beta / 45);
    },
    { passive: true },
  );
  motionBtn.textContent = "Motion Enabled";
  motionBtn.disabled = true;
};

motionBtn?.addEventListener("click", enableMotion);

window.addEventListener(
  "pointermove",
  (event) => {
    if ("ontouchstart" in window) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    applyParallax(x, y);
  },
  { passive: true },
);
