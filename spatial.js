'use strict';
(() => {
  const frame = document.getElementById('experience-scene');
  if (!frame) return;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let ready = false;
  let anchors = [];
  let lastProgress = -1;
  let lastFrameTime = 0;
  let animationFrame = 0;
  let lastScroll = -1;
  let pointer = null;
  function measure() {
    const top = element => element.getBoundingClientRect().top + window.scrollY;
    const heroWork = document.querySelector('.hero-work');
    anchors = [
      [0, 0],
      [top(heroWork), .025],
      [top(heroWork) + heroWork.offsetHeight * .65, .08],
      [top(document.getElementById('services')), .145],
      [top(document.getElementById('finder')), .245],
      [top(document.getElementById('work')), .30],
      [top(document.getElementById('about')), .445],
      [top(document.getElementById('packages')), .545],
      [top(document.getElementById('concept')), .725],
      [top(document.getElementById('faq')), .80],
      [top(document.getElementById('contact')), .82]
    ];
    lastScroll = -1;
  }
  function progressAt(scroll) {
    for (let i = 1; i < anchors.length; i++) {
      if (scroll <= anchors[i][0]) {
        const [start, from] = anchors[i - 1];
        const [end, to] = anchors[i];
        return from + (to - from) * Math.max(0, Math.min(1, (scroll - start) / Math.max(1, end - start)));
      }
    }
    return .82;
  }
  function sendProgress(progress, paused = false) {
    frame.contentWindow?.postMessage({type: 'teodor-scene', progress, paused}, location.origin);
  }
  function tick(now) {
    animationFrame = 0;
    if (document.hidden || reducedMotion.matches) return;
    if (ready && now - lastFrameTime > 32) {
      lastFrameTime = now;
      if (pointer) {
        frame.contentWindow?.postMessage({type: "teodor-pointer", ...pointer}, location.origin);
        pointer = null;
      }
      const scroll = window.scrollY;
      if (scroll !== lastScroll) {
        lastScroll = scroll;
        document.body.classList.toggle("scene-intro", scroll < anchors[1][0] * .75);
        const progress = progressAt(scroll);
        if (Math.abs(progress - lastProgress) > .00005) {
          sendProgress(progress);
          lastProgress = progress;
        }
      }
    }
    animationFrame = requestAnimationFrame(tick);
  }
  function start() {
    if (reducedMotion.matches) {
      if (ready) sendProgress(lastProgress, true);
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      return;
    }
    if (!frame.getAttribute('src')) frame.src = frame.dataset.src;
    if (ready) sendProgress(progressAt(window.scrollY), false);
    lastScroll = -1;
    if (!animationFrame) animationFrame = requestAnimationFrame(tick);
  }
  window.addEventListener('message', event => {
    if (event.source !== frame.contentWindow || event.data?.type !== 'teodor-scene-ready') return;
    ready = true;
    document.body.classList.add('scene-loaded');
    measure();
    start();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      sendProgress(lastProgress, true);
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    } else start();
  });
  window.addEventListener('resize', measure, {passive: true});
  document.addEventListener('pointermove', event => {
    if (event.pointerType === 'mouse') pointer = {x: event.clientX, y: event.clientY};
  }, {passive: true});
  document.fonts.ready.then(measure);
  new ResizeObserver(measure).observe(document.querySelector('main'));
  reducedMotion.addEventListener('change', start);
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        reveal.unobserve(entry.target);
      }
    });
  }, {threshold: .05});
  document.querySelectorAll('.section-heading,.service-card,.project,.about-grid,.package,.monthly-plan,.concept-banner,.faq-grid,.contact-grid').forEach(element => {
    element.classList.add('reveal');
    reveal.observe(element);
  });
  measure();
  start();
})();
