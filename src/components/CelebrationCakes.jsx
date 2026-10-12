import { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import './CelebrationCakes.css';

const CELEBRATION_CAKES = [
  {
    id: 'tiered',
    name: 'Tiered Truffle Tower',
    desc: 'Three tiers of dark Belgian truffle with hand-piped rosettes, edible gold leaf, and seasonal blooms.',
    img: '/pics/tiered-truffle-1.webp',
    ctaLabel: 'Book This Cake',
    variants: { '3': 2800, '5': 4500 },
  },
  {
    id: 'custom',
    name: 'Custom Theme Cake',
    desc: 'Your vision, our craft. From fondant sculptures to photo prints — every detail tailored to your celebration.',
    img: '/pics/custom-theme-1.webp',
    ctaLabel: 'Request Customization',
    variants: { '3': 3200, '5': 5200 },
  },
];

function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

function CelebCard({ cake, onBook }) {
  const [selected, setSelected] = useState('3');
  const ref = useFadeIn(0.08);

  const price = cake.variants[selected];

  return (
    <div className="celeb-card fade-in" ref={ref} id={`card-${cake.id}`}>
      <div className="celeb-img-wrap">
        <img
          src={cake.img}
          alt={cake.name}
          className="celeb-img"
          loading="lazy"
        />
        <span className="notice-badge" id={`badge-${cake.id}`}>
          ⏱ 48-Hour Notice Required
        </span>
      </div>
      <div className="celeb-info">
        <h3 className="cake-name">{cake.name}</h3>
        <p className="cake-desc">{cake.desc}</p>
        <div className="variant-row" id={`variants-${cake.id}`}>
          {Object.keys(cake.variants).map(v => (
            <button
              key={v}
              className={`variant-pill ${selected === v ? 'active' : ''}`}
              id={`${cake.id}-variant-${v}`}
              onClick={() => setSelected(v)}
            >
              {v} Kg
            </button>
          ))}
        </div>
        <div className="cake-footer">
          <span className="cake-price" id={`price-${cake.id}`}>{formatPrice(price)}</span>
          <button
            className="btn btn-book"
            id={`book-${cake.id}`}
            onClick={() => onBook(cake.name, selected, price)}
          >
            {cake.ctaLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CelebrationCakes({ onBook }) {
  const headerRef = useFadeIn(0.1);

  return (
    <section className="section celeb-section" id="celebration">
      <div className="celeb-bg-accent" aria-hidden="true" />
      <div className="section-header fade-in" ref={headerRef}>
        <p className="section-label">Pre-order</p>
        <h2 className="section-title">Celebration &amp; Long Orders</h2>
        <p className="section-desc">
          Grand cakes for weddings, anniversaries, and milestone moments.
          Crafted to order with 48-hour notice.
        </p>
      </div>
      <div className="celeb-grid">
        {CELEBRATION_CAKES.map(cake => (
          <CelebCard key={cake.id} cake={cake} onBook={onBook} />
        ))}
      </div>
    </section>
  );
}
