// java/partials.js
document.addEventListener('DOMContentLoaded', () => {
  //
  // 1) BUILD HEADER & FOOTER HTML (all links are clean /about_us style)
  //
  const headerHTML = `
    <header>
      <div class="wrapper">
        <nav>
          <input type="checkbox" id="show-menu">
          <label for="show-menu" class="menu-icon">
            <span></span><span></span><span></span>
          </label>
          <div class="content">
            <div class="logo"><a href="/">MC STAN DA GOAT</a></div>
            <ul class="links">
              <li><a href="/">Home</a></li>
              <li><a href="/about_us">About Us</a></li>
              <li>
                <a href="#" class="desktop-link">Iconic</a>
                <input type="checkbox" id="show-features">
                <label for="show-features">Features</label>
                <ul>
                  <li><a href="#">Insta Lives</a></li>
                  <li><a href="#">Beefs</a></li>
                </ul>
              </li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/discography">Discography</a></li>
              <li><a href="/mehfeel_countdown">MEHFEEL COUNTDOWN</a></li>
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

  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about_us">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/privacy_policy">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="/terms_of_service">Terms of Service</a></li>
              <li><a href="/cookie_policy">Cookie Policy</a></li>
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

  document.getElementById('header-placeholder')?.insertAdjacentHTML('afterbegin', headerHTML);
  document.getElementById('footer-placeholder')?.insertAdjacentHTML('beforeend', footerHTML);

  //
  // 2) IF URL IS /pages/XYZ.html, STRIP IT TO /XYZ
  //
  const htmlMatch = location.pathname.match(/^\/pages\/(.+)\.html$/);
  if (htmlMatch && history.replaceState) {
    const cleanPath = '/' + htmlMatch[1] + location.search + location.hash;
    history.replaceState(null, '', cleanPath);
  }

  //
  // 3) INTERCEPT CLICKS ON CLEAN LINKS AND LOAD /pages/XYZ.html
  //
  document.querySelectorAll('a[href^="/"]').forEach(a => {
    const href = a.getAttribute('href');

    // skip absolute external links or anchors
    if (!href.startsWith('/') || href.startsWith('//') || href.includes('://')) return;

    // skip your home and any trailing-slash dir links
    if (href === '/' || href.endsWith('/')) return;

    // skip if it already ends with a file extension
    if (/\.[a-z0-9]+$/i.test(href)) return;

    // otherwise it's a clean page link, hijack it
    a.addEventListener('click', e => {
      e.preventDefault();
      // navigate to the real file under /pages/
      window.location.href = '/pages' + href + '.html' + location.search + location.hash;
    });
  });
});
