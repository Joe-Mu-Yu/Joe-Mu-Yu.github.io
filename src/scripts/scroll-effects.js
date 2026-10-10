/**
 * Site motion runtime.
 *
 * Two jobs, one scroll loop:
 *   1. Parallax for elements carrying data-depth inside a data-scene section.
 *   2. Reveal-on-enter for anything carrying data-reveal.
 *
 * Rules that keep this from feeling cheap:
 *   - No wheel hijacking, no scroll hijacking, no forced horizontal scroll.
 *   - Everything runs from one requestAnimationFrame tick per frame.
 *   - The reveal "hidden" state is added by JS only, so a page with no JS (or
 *     a failed script) still shows all content.
 *   - prefers-reduced-motion disables both systems.
 */

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)');

function initReveal() {
  const targets = Array.from(document.querySelectorAll('[data-reveal]'));
  if (targets.length === 0) return () => {};

  // Stagger siblings so a grid cascades instead of popping in as one block.
  targets.forEach((el) => {
    if (el.dataset.revealDelay) return;
    const siblings = el.parentElement
      ? Array.from(el.parentElement.children).filter((c) => c.hasAttribute('data-reveal'))
      : [];
    const index = siblings.indexOf(el);
    if (index > 0) {
      el.style.setProperty('--reveal-delay', `${Math.min(index, 6) * 70}ms`);
    }
  });

  if (REDUCED_MOTION.matches || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
  );

  targets.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}

function initParallax() {
  if (REDUCED_MOTION.matches) return () => {};
  const scenes = Array.from(document.querySelectorAll('[data-scene]'));
  if (scenes.length === 0) return () => {};

  const layers = scenes.flatMap((scene) =>
    Array.from(scene.querySelectorAll('[data-depth]')).map((el) => ({
      el,
      depth: Number(el.dataset.depth) || 0,
      scene,
    })),
  );
  if (layers.length === 0) return () => {};

  let ticking = false;

  function update() {
    ticking = false;
    const viewport = window.innerHeight;

    for (const layer of layers) {
      const rect = layer.scene.getBoundingClientRect();

      // Only touch layers while their scene is on screen. Off-screen work is
      // wasted layout math and is what makes parallax stutter on long pages.
      if (rect.bottom < -viewport || rect.top > viewport * 2) continue;

      // -1 (near) .. 1 (far), 0 at the moment the scene centre crosses the
      // viewport centre.
      const progress =
        (rect.top + rect.height / 2 - viewport / 2) / (viewport / 2 + rect.height / 2);
      const offset = progress * layer.depth * 60;

      layer.el.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`);
    }
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();

  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}

function initRevealClass() {
  // Only now do hidden reveal states apply, which keeps content visible when
  // scripting is off.
  document.documentElement.classList.add('js-reveal');
}

function start() {
  initRevealClass();
  const teardown = [initReveal(), initParallax()];

  if (REDUCED_MOTION.addEventListener) {
    REDUCED_MOTION.addEventListener('change', () => window.location.reload());
  }

  return () => teardown.forEach((fn) => fn && fn());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start, { once: true });
} else {
  start();
}
