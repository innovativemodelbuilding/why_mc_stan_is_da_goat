// java/partials.js
document.addEventListener('DOMContentLoaded', () => {
  // ── 1. Figure out your repo base path (works on GitHub Pages or localhost)
  const pathParts = window.location.pathname.split('/').filter(p => p);
  const repoName  = pathParts[0] && window.location.hostname !== 'localhost'
                    ? pathParts[0]
                    : '';
  const base = repoName ? `/${repoName}/` : '/';

  // ── 2. Header HTML (use clean, no-.html URLs)
  const headerHTML = `
    <header>
      <div class="wrapper">
        <nav>
          <input type="checkbox" id="show-menu">
          <label for="show-menu" class="menu-icon">
            <span></span><span></span><span></span>
          </label>
          <div class="content">
            <div class="logo"><a href="${base}">MC STAN DA GOAT</a></div>
            <ul class="links">
              <li><a href="${base}">Home</a></li>
              <li><a href="${base}about_us">About Us</a></li>
              <li>
                <a href="#" class="desktop-link">Iconic</a>
                <input type="checkbox" id="show-features">
                <label for="show-features">Features</label>
                <ul>
                  <li><a href="#">Insta Lives</a></li>
                  <li><a href="#">Beefs</a></li>
                </ul>
              </li>
              <li><a href="${base}contact">Contact Us</a></li>
              <li><a href="${base}discography">Discography</a></li>
              <li><a href="${base}mehfeel_countdown">MEHFEEL COUNTDOWN</a></li>
            </ul>
          </div>
          <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
          <form action="#" class="search-box">
            <input type="text" placeholder="Type Something to Search..." required>
            <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
          </form>
        </nav>
      </div>
    </header>
  `;

  // ── 3. Footer HTML (also clean URLs)
  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="${base}about_us">About Us</a></li>
              <li><a href="${base}contact">Contact Us</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li><a href="${base}faqs">FAQs</a></li>
              <li><a href="${base}privacy_policy">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="${base}terms_of_service">Terms of Service</a></li>
              <li><a href="${base}cookie_policy">Cookie Policy</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Follow Us</h4>
            <div class="social-links">
              <a href="#"><i class="bi bi-facebook"></i></a>
              <a href="https://x.com/Arcturus_dhh"><i class="bi bi-twitter"></i></a>
              <a href="https://www.instagram.com/arcturus_dhh/"><i class="bi bi-instagram"></i></a>
              <a href="#"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  // ── 4. Inject
  document.getElementById('header-placeholder')?.insertAdjacentHTML('beforeend', headerHTML);
  document.getElementById('footer-placeholder')?.insertAdjacentHTML('beforeend', footerHTML);

  // ── 5. Hide incoming “.html” in the URL bar
  if (location.pathname.endsWith('.html') && history.replaceState) {
    const cleanPath = location.pathname.replace(/\.html$/, '');
    history.replaceState(null, '', cleanPath + location.search + location.hash);
  }

  // ── 6. Intercept clicks on your generated nav links
  document.querySelectorAll('a[href^="' + base + '"]').forEach(link => {
    const href = link.getAttribute('href');
    const hasExt = href.match(/\.html($|[?#])/i);
    const isDir   = href.endsWith('/');
    // If it’s a “clean” link (no .xxx, no trailing slash)…
    if (!hasExt && !isDir) {
      link.addEventListener('click', e => {
        e.preventDefault();
        // load the real .html file
        window.location.href = href + '.html' + location.search + location.hash;
      });
    }
  });
});
