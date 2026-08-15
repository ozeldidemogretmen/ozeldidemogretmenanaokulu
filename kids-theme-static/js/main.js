/* ============================================
   KIDS THEME - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ==========================================
  // Header scroll effect
  // ==========================================
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // ==========================================
  // Mobile menu toggle
  // ==========================================
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.overlay');

  function toggleMenu() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  if (overlay) {
    overlay.addEventListener('click', toggleMenu);
  }

  // Close menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // ==========================================
  // Scroll reveal animations
  // ==========================================
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // ==========================================
  // Smooth scroll for anchor links
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================
  // Active nav link on scroll
  // ==========================================
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // ==========================================
  // Gallery lightbox (simple)
  // ==========================================
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      const title = this.querySelector('.gallery-title')?.textContent || '';

      // Create lightbox
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-overlay"></div>
        <div class="lightbox-content">
          <button class="lightbox-close">&times;</button>
          <img src="${img.src}" alt="${img.alt}">
          ${title ? `<p class="lightbox-title">${title}</p>` : ''}
        </div>
      `;

      // Lightbox styles
      const style = document.createElement('style');
      style.textContent = `
        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }
        .lightbox-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.9);
          cursor: pointer;
        }
        .lightbox-content {
          position: relative;
          z-index: 1;
          max-width: 90vw;
          max-height: 90vh;
          text-align: center;
        }
        .lightbox-content img {
          max-width: 100%;
          max-height: 80vh;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .lightbox-close {
          position: absolute;
          top: -50px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 2.5rem;
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lightbox-title {
          color: white;
          margin-top: 1rem;
          font-family: var(--font-heading);
          font-size: 1.2rem;
        }
      `;

      document.head.appendChild(style);
      document.body.appendChild(lightbox);
      document.body.style.overflow = 'hidden';

      // Close handlers
      function closeLightbox() {
        lightbox.remove();
        style.remove();
        document.body.style.overflow = '';
      }

      lightbox.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);
      lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
      document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
          closeLightbox();
          document.removeEventListener('keydown', escHandler);
        }
      });
    });
  });

  // ==========================================
  // Counter animation for stats (if added later)
  // ==========================================
  function animateCounter(el, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function update() {
      start += increment;
      if (start < target) {
        el.textContent = Math.floor(start);
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }
    update();
  }

  // ==========================================
  // Parallax effect for hero shapes
  // ==========================================
  const shapes = document.querySelectorAll('.shape');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    shapes.forEach((shape, index) => {
      const speed = 0.3 + (index * 0.1);
      shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // ==========================================
  // Button ripple effect
  // ==========================================
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255,255,255,0.4);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple keyframes
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(rippleStyle);

  console.log('🎨 Kids Theme initialized successfully!');
});
