// 1. Smooth scroll for ALL internal links starting with # (including #footer)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Only apply to links like #footer, #home, etc. (not external links)
    if (href !== '#' && href.startsWith('#')) {
      e.preventDefault();

      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// 2. Extra hover lift effect on cards (works with your existing CSS hover)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-15px)';
    card.style.transition = 'transform 0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// 3. Simple alert on big CTA buttons (demo purpose)
document.querySelectorAll('.btn-big, .btn-primary').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Thank you! In a real site, this would open a demo booking form 📅');
  });
});