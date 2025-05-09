const logo = document.getElementById('logo');
const mobileNav = document.getElementById('mobileNav');

logo.addEventListener('click', function(e) {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    mobileNav.classList.toggle('active');
  }
});

const links = document.querySelectorAll('a[href]');
const loader = document.getElementById('loading-screen');

links.forEach(link => {
  const href = link.getAttribute('href');
  if (href && !href.startsWith('#') && !link.hasAttribute('target')) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      loader.style.display = 'flex';
      setTimeout(() => {
        window.location.href = href;
      }, 300); // slight delay for smooth effect
    });
  }
});

// Optional: show loader on page load then fade it out
window.addEventListener('load', () => {
  loader.style.display = 'none';
});