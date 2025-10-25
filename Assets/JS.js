document.addEventListener('DOMContentLoaded', function () {
  // ... Your existing mobile menu, header scroll, smooth scroll code ...

  // ===========================
  // GSAP Card Stick / Scroll Animation
  // ===========================
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // Animate product/service cards if they exist. The original selector
    // used ".c-card" which doesn't match the markup. Use the
    // .av-ps-card class used in the template and guard against empty lists.
    const cards = gsap.utils.toArray('.av-ps-card');
    if (cards.length > 0) {
      const lastCardIndex = cards.length - 1;

      // Create ScrollTrigger for the last card so other cards can pin until it
      const lastCardST = ScrollTrigger.create({
        trigger: cards[lastCardIndex],
        start: 'center center',
      });

      cards.forEach((card, index) => {
        const targetScale = index === lastCardIndex ? 1 : 0.95;
        // create a paused animation to be driven by ScrollTrigger
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
