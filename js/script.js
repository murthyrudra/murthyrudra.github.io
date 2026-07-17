/* Homepage interactions: mobile navigation, saved theme preference, and gentle reveals. */
(() => {
  // Older pages share this script. Replace their legacy chrome with the same
  // accessible header and footer used by the redesigned homepage.
  const legacyNav = document.querySelector('.navbar');
  const legacyFooter = document.querySelector('footer');
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const links = [
    ['index.html', 'About'], ['projects.html', 'Research'],
    ['publications.html', 'Publications'], ['talks.html', 'Talks'],
    ['blog.html', 'Notes'], ['cv.html', 'CV']
  ];
  const navigation = links.map(([href, label]) =>
    `<a class="${page === href ? 'is-current' : ''} ${href === 'cv.html' ? 'nav-cv' : ''}" href="${href}">${label}${href === 'cv.html' ? ' <span aria-hidden="true">↗</span>' : ''}</a>`
  ).join('');
  if (legacyNav) {
    legacyNav.outerHTML = `<header class="site-header" id="top"><div class="shell nav-shell"><a class="wordmark" href="index.html" aria-label="Rudra V. Murthy home">RM<span>.</span></a><button class="menu-button" type="button" aria-controls="primary-navigation" aria-expanded="false"><span class="visually-hidden">Open navigation</span><i></i><i></i></button><nav id="primary-navigation" class="site-nav" aria-label="Primary navigation">${navigation}</nav><button class="theme-toggle" type="button" aria-label="Switch to dark theme" title="Toggle color theme"><span aria-hidden="true">◐</span></button></div></header>`;
  }
  if (legacyFooter) {
    legacyFooter.outerHTML = `<footer class="site-footer"><div class="shell footer-grid"><div><a class="wordmark" href="index.html">RM<span>.</span></a><p>Building multilingual AI systems that make knowledge more accessible.</p></div><div class="footer-links"><a href="mailto:rudramurthy.iisc@gmail.com">Email</a><a href="https://scholar.google.com/citations?user=5bjj_9cAAAAJ" target="_blank" rel="noopener">Google Scholar</a><a href="https://github.com/murthyrudra" target="_blank" rel="noopener">GitHub</a><a href="https://www.linkedin.com/in/rudra-murthy-96521a45" target="_blank" rel="noopener">LinkedIn</a></div></div><div class="shell footer-bottom"><p>© <span id="year"></span> Rudra V. Murthy</p><a href="#top">Back to top ↑</a></div></footer>`;
  }
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');
  const header = document.querySelector('.site-header');
  const savedTheme = localStorage.getItem('rudra-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem('rudra-theme', theme);
    if (toggle) {
      const dark = theme === 'dark';
      toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
      toggle.setAttribute('title', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  setTheme(savedTheme || (systemDark ? 'dark' : 'light'));
  toggle?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('is-open', !open);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }));

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 8);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('is-visible'));
})();
