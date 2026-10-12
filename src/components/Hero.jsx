import { useFadeIn } from '../hooks/useFadeIn';
import './Hero.css';

export default function Hero() {
  const leftRef = useFadeIn(0.1);
  const rightRef = useFadeIn(0.1);

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      <div className="hero-left fade-in" ref={leftRef}>
        <p className="hero-eyebrow">Handcrafted with love · Coimbatore</p>
        <h1 className="hero-heading">
          Artisan Cakes<br />
          <em>for Every<br />Celebration.</em>
        </h1>
        <p className="hero-sub">
          Every slice tells a story — baked fresh daily on Kalapatti Road,
          with only the finest ingredients sourced from across the Nilgiris.
        </p>
        <div className="hero-actions">
          <a href="#daily-cakes" className="btn btn-primary" id="hero-order-btn">
            Order Now
          </a>
          <a href="#celebration" className="btn btn-ghost" id="hero-prebook-btn">
            Pre-book a Celebration Cake
          </a>
        </div>
        <div className="hero-badges">
          <span className="hero-badge" id="badge-fresh">🌾 Fresh Daily</span>
          <span className="hero-badge" id="badge-preservatives">🥛 No Preservatives</span>
          <span className="hero-badge" id="badge-location">📍 Kalapatti Rd</span>
        </div>
      </div>

      <div className="hero-right fade-in fade-delay" ref={rightRef}>
        <div className="hero-img-frame">
          <img
            src="/pics/hero-cake-main.webp"
            alt="Grace N Bakes signature celebration cake"
            className="hero-cake-img"
            id="hero-cake-img"
          />
          <div className="hero-img-pill" id="hero-pill">✦ New: Floral Truffle Season</div>
        </div>
        <div className="hero-decorative-ring" aria-hidden="true" />
      </div>
    </section>
  );
}
