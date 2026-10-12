import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Our Cakes', href: '#daily-cakes' },
    { label: 'Celebrations', href: '#celebration' },
    { label: 'Our Story', href: '#story' },
    { label: 'Track Order', href: '#track' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="top">
      <nav className="navbar-inner">
        <a href="#top" className="nav-brand" id="nav-brand">
          <img
            src="/pics/logos.webp"
            alt="Grace N Bakes logo"
            className="nav-logo-img"
            id="nav-logo-img"
          />
        </a>

        {/* Desktop links */}
        <ul className="nav-links desktop-links" id="nav-links-desktop">
          {navLinks.map(l => (
            <li key={l.label}>
              <a href={l.href} className="nav-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button
            className="cart-btn"
            id="nav-cart-btn"
            aria-label="View cart"
            onClick={onCartOpen}
          >
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {cartCount > 0 && (
              <span className="cart-count-badge" id="cart-count-badge">{cartCount}</span>
            )}
          </button>
          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            id="hamburger-btn"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
        {navLinks.map(l => (
          <a key={l.label} href={l.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
