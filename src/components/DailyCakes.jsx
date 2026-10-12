import { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import './DailyCakes.css';

const CAKES = [
  {
    id: 'blackforest',
    name: 'Black Forest',
    desc: 'Dark chocolate sponge, fresh cream & hand-picked cherries.',
    img: '/pics/blackforest-1.webp',
    badge: 'Best Seller',
    variants: { '0.5': 450, '1': 850 },
  },
  {
    id: 'butterscotch',
    name: 'Butterscotch Dream',
    desc: 'Silky caramel layers, praline crunch & butterscotch glaze.',
    img: '/pics/butterscotch-1.webp',
    badge: null,
    variants: { '0.5': 420, '1': 800 },
  },
];

function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

function CakeCard({ cake, onAdd }) {
  const [selected, setSelected] = useState('0.5');
  const [added, setAdded] = useState(false);
  const ref = useFadeIn(0.1);

  const price = cake.variants[selected];

  function handleAdd() {
    onAdd({
      id: `${cake.id}-${selected}`,
      name: `${cake.name} (${selected} Kg)`,
      price,
      qty: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="cake-card fade-in" ref={ref} id={`card-${cake.id}`}>
      <div className="cake-img-wrap">
        <img
          src={cake.img}
          alt={cake.name}
          className="cake-img"
          loading="lazy"
        />
        {cake.badge && (
          <span className="cake-badge-top" id={`badge-${cake.id}`}>{cake.badge}</span>
        )}
      </div>
      <div className="cake-info">
        <h3 className="cake-name">{cake.name}</h3>
        <p className="cake-desc">{cake.desc}</p>
        <div className="variant-row" id={`variants-${cake.id}`}>
          {Object.keys(cake.variants).map(v => (
            <button
              key={v}
              className={`variant-pill ${selected === v ? 'active' : ''}`}
              id={`${cake.id}-variant-${v.replace('.', '')}`}
              onClick={() => setSelected(v)}
            >
              {v} Kg
            </button>
          ))}
        </div>
        <div className="cake-footer">
          <span className="cake-price" id={`price-${cake.id}`}>{formatPrice(price)}</span>
          <button
            className={`btn btn-add ${added ? 'added' : ''}`}
            id={`add-${cake.id}`}
            onClick={handleAdd}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DailyCakes({ onAdd }) {
  const [addonAdded, setAddonAdded] = useState(false);
  const headerRef = useFadeIn(0.1);
  const addonRef = useFadeIn(0.1);

  function handleAddonAdd() {
    onAdd({ id: 'chocoroll', name: 'Choco Swiss Roll', price: 70, qty: 1 });
    setAddonAdded(true);
    setTimeout(() => setAddonAdded(false), 1800);
  }

  return (
    <section className="section daily-section" id="daily-cakes">
      <div className="section-header fade-in" ref={headerRef}>
        <p className="section-label">Our Menu</p>
        <h2 className="section-title">Signature Daily Cakes</h2>
        <p className="section-desc">
          Freshly baked every morning. Available for same-day pickup or next-day delivery.
        </p>
      </div>

      <div className="cake-grid">
        {CAKES.map(cake => (
          <CakeCard key={cake.id} cake={cake} onAdd={onAdd} />
        ))}
      </div>

      {/* Quick Add-on strip */}
      <div className="addon-strip fade-in" ref={addonRef} id="addon-strip">
        <div className="addon-text">
          <p className="section-label" style={{ margin: 0 }}>Quick Add-on</p>
          <h3 className="addon-title">Chocolate Swiss Roll</h3>
          <p className="addon-desc">
            A rolled sponge with velvety chocolate cream — perfect to share. No slice wasted.
          </p>
          <div className="cake-footer" style={{ marginTop: '1.2rem' }}>
            <span className="cake-price">₹70</span>
            <button
              className={`btn btn-add ${addonAdded ? 'added' : ''}`}
              id="add-chocoroll"
              onClick={handleAddonAdd}
            >
              {addonAdded ? '✓ Added' : 'Quick Add'}
            </button>
          </div>
        </div>
        <div className="addon-img-wrap" id="chocoroll-wrap">
          <img
            src="/pics/chocoroll-1.webp"
            alt="Chocolate Swiss Roll quick add-on"
            className="addon-img"
            id="chocoroll-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
