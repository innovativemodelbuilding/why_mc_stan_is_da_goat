// js/partials.js
document.addEventListener('DOMContentLoaded', () => {
  // ── 1. Figure out your repo base path
  const pathParts = window.location.pathname.split('/');
  const repoName  = pathParts[1];                   // e.g. "why_mc_stan_is_da_goat"
  const base      = repoName ? `/${repoName}/` : '/';

  // ── 2. Define your header HTML
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
              <li><a href="${base}pages/about_us">About Us</a></li>
              <li>
                <a href="#" class="desktop-link">Iconic</a>
                <input type="checkbox" id="show-features">
                <label for="show-features">Features</label>
                <ul>
                  <li><a href="#">Insta Lives</a></li>
                  <li><a href="#">Beefs</a></li>
                </ul>
              </li>
              <li><a href="${base}pages/contact">Contact Us</a></li>
              <li><a href="${base}pages/discography">Discography</a></li>
              <li><a href="${base}pages/docs/pages/mehfeel_countdown">MEHFEEL COUNTDOWN</a></li>
            </ul>
          </div>
          <label for="show-search" class="search-icon">
            <i class="fas fa-search"></i>
          </label>
          <form action="#" class="search-box">
            <input type="text" placeholder="Type Something to Search..." required>
            <button type="submit" class="go-icon">
              <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </form>
        </nav>
      </div>
    </header>
  `;

  // ── 3. Define your footer HTML
  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="${base}pages/about_us">About Us</a></li>
              <li><a href="${base}pages/contact">Contact Us</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li><a href="${base}pages/faqs">FAQs</a></li>
              <li><a href="${base}pages/privacy_policy.html">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="${base}pages/terms_of_service.html">Terms of Service</a></li>
              <li><a href="${base}pages/cookie_policy.html">Cookie Policy</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Follow Us</h4>
            <div class="social-links">
              <a href="#"><i class="bi bi-facebook"></i></a>
              <a href="https://x.com/Arcturus_dhh"><i class="bi bi-twitter"></i></a>
              <a href="https://www.instagram.com/arcturus_dhh/profilecard/?igsh=cnlkMDZzMzk5b3Jt">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  // ── 4. Inject into your placeholders
  const hdr = document.getElementById('header-placeholder');
  if (hdr) hdr.innerHTML = headerHTML;

  const ftr = document.getElementById('footer-placeholder');
  if (ftr) ftr.innerHTML = footerHTML;
});
