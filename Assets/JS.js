document.addEventListener('DOMContentLoaded', function () {
  // ===========================
  // MOBILE MENU TOGGLE FIX (for .hamburger + .main-nav)
  // ===========================
  const menuBtn = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.main-nav');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show'); // toggle visibility
    });

    // Optional: close menu when link is clicked
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });
  }

  // ===========================
  // Floating Hero Video Minimize on Scroll
  // ===========================
  const heroVideo = document.getElementById('heroMedia');
  if (heroVideo) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        heroVideo.classList.add('minimized');
      } else {
        heroVideo.classList.remove('minimized');
      }
    });
  }

  // ===========================
  // GSAP Card Stick / Scroll Animation
  // ===========================
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray('.av-ps-card');
    if (cards.length > 0) {
      const lastCardIndex = cards.length - 1;

      const lastCardST = ScrollTrigger.create({
        trigger: cards[lastCardIndex],
        start: 'center center',
      });

      cards.forEach((card, index) => {
        const targetScale = index === lastCardIndex ? 1 : 0.95;

        const scaleAnim = gsap.to(card, {
          scale: targetScale,
          duration: 0.4,
          paused: true,
        });

        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: () => lastCardST.start,
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
          ease: 'none',
          animation: scaleAnim,
          toggleActions: 'restart none none reverse',
        });
      });
    }
  }
});
