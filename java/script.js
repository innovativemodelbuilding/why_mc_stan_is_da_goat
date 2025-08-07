// hide-html.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) On page load, if URL ends in “.html” swap it out in the history
  if (history.replaceState && location.pathname.endsWith('.html')) {
    const clean = location.pathname.replace(/\.html$/, '') + location.search;
    history.replaceState(null, '', clean);
  }

  // 2) Intercept clicks on “pretty” links (no slash, no .html)…
  document.querySelectorAll('a[href^="/"]:not([href$="/"]):not([href$=".html"])').forEach(link => {
    const href = link.getAttribute('href');
    // skip external links or ones you really want to have .html
    if (href.startsWith('/') && !href.match(/\.[a-z]+$/i)) {
      link.addEventListener('click', e => {
        e.preventDefault();
        // try loading the real .html
        window.location.assign(href + '.html' + location.search + location.hash);
      });
    }
  });
});
