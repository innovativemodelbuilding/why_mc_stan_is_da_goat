// java/script.js

(function() {
  // 1) On page load, remove the .html suffix from the URL
  if (location.pathname.match(/\.html$/)) {
    const cleanPath = location.pathname.replace(/\.html$/, '/');
    history.replaceState({}, '', cleanPath + location.search + location.hash);
  }

  // 2) Intercept clicks on <a href="... .html"> links
  document.body.addEventListener('click', function(e) {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    // Only rewrite internal .html links
    if (href && href.endsWith('.html')) {
      e.preventDefault();
      // Push clean URL (no .html)
      const clean = href.replace(/\.html$/, '/') + window.location.search;
      history.pushState({}, '', clean);
      // Then actually navigate to the real file
      window.location.href = href;
    }
  });

  // 3) When the user navigates back/forward, re‐clean if needed
  window.addEventListener('popstate', function() {
    if (location.pathname.match(/\.html$/)) {
      const cleanPath = location.pathname.replace(/\.html$/, '/');
      history.replaceState({}, '', cleanPath + location.search + location.hash);
    }
  });
})();
