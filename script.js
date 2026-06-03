// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 60
    ? 'rgba(10,10,15,0.98)'
    : 'rgba(10,10,15,0.85)';
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '72px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'rgba(10,10,15,0.98)';
  navLinks.style.padding = '24px';
  navLinks.style.gap = '20px';
});

// Weapons filter tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const weaponCards = document.querySelectorAll('.weapon-card');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.cat;
    weaponCards.forEach(card => {
      if (cat === 'alle' || card.dataset.cat === cat) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Trailer placeholder click
document.getElementById('trailer-play').addEventListener('click', () => {
  const wrapper = document.querySelector('.trailer-wrapper');
  wrapper.innerHTML = `
    <div style="aspect-ratio:16/9;background:#000;border-radius:12px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,0.08);">
      <p style="color:#888;font-size:1rem;letter-spacing:0.1em;">[ Trailer wird geladen... ]</p>
    </div>`;
});

// Scroll-reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .map-card, .weapon-card, .dl-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s';
  observer.observe(el);
});
