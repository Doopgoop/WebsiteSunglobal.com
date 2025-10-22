document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.createElement('div');
  const overlay = document.createElement('div');

  // Create mobile navigation
  mobileNav.className = 'mobile-nav';
  mobileNav.innerHTML = `
        <div class="mobile-nav-header">
            <div class="brand">
                <div class="logo">AV</div>
                <span class="brand-name">Arabian Venture</span>
            </div>
            <button class="close-menu" aria-label="Close menu">×</button>
        </div>
        <a href="#services">Services</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact" class="btn-outline">Contact Us</a>
    `;

  // Create overlay
  overlay.className = 'overlay';

  // Append to body
  document.body.appendChild(mobileNav);
  document.body.appendChild(overlay);

  // Mobile menu functionality
  hamburger.addEventListener('click', function () {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  const closeMenu = mobileNav.querySelector('.close-menu');
  closeMenu.addEventListener('click', closeMobileMenu);
  overlay.addEventListener('click', closeMobileMenu);

  function closeMobileMenu() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Close mobile menu when clicking on links
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Header scroll effect
  const header = document.querySelector('.site-header');

  function updateHeader() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader);
  updateHeader(); // Initialize on load

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  
      
