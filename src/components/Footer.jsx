import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="/pics/logos.webp"
              alt="Grace N Bakes logo"
              className="footer-logo-img"
              id="footer-logo-img"
            />
          </div>
          <p className="footer-tagline">Artisan baking from the heart of Coimbatore.</p>
          <div className="footer-social">
            <a href="#" className="social-link" id="social-instagram" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="social-link" id="social-facebook" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <nav className="footer-links">
            <a href="#daily-cakes" className="footer-link">Our Cakes</a>
            <a href="#celebration" className="footer-link">Pre-order</a>
            <a href="#story" className="footer-link">Our Story</a>
            <a href="#track" className="footer-link">Track Order</a>
          </nav>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Visit Us</h4>
          <address className="footer-address">
            Grace N Bakes<br />
            Kalapatti Road,<br />
            Coimbatore – 641 048<br />
            Tamil Nadu, India
          </address>
          <a href="tel:+914222000000" className="footer-phone" id="footer-phone">
            📞 +91 422 2XX XXXX
          </a>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Bakery Hours</h4>
          <div className="footer-hours">
            <div className="hour-row">
              <span>Mon – Sat</span>
              <strong>7:00 AM – 9:00 PM</strong>
            </div>
            <div className="hour-row">
              <span>Sunday</span>
              <strong>8:00 AM – 7:00 PM</strong>
            </div>
          </div>
          <p className="footer-note">📦 Pre-orders: 48-hr advance booking required</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Grace N Bakes. All rights reserved. Handcrafted with ♥ in Coimbatore.</p>
      </div>
    </footer>
  );
}
