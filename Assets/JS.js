document.addEventListener('DOMContentLoaded', function () {
  // ... Your existing mobile menu, header scroll, smooth scroll code ...

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

      // Create ScrollTrigger for the last card
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
