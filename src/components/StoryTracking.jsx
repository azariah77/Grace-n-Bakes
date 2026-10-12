import { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import './StoryTracking.css';

const ORDER_STATUSES = {
  'GNB-2024-001': { status: 'Baking', icon: '🔥', msg: 'Your cake is in the oven! Ready by 5:00 PM today.' },
  'GNB-2024-002': { status: 'Ready for Pickup', icon: '✅', msg: 'Your order is ready! Visit us at Kalapatti Road.' },
  'GNB-2024-003': { status: 'Out for Delivery', icon: '🚗', msg: 'Your cake is on its way. Estimated arrival: 30 mins.' },
};

export default function StoryTracking() {
  const [orderId, setOrderId] = useState('');
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const imgRef = useFadeIn(0.1);
  const textRef = useFadeIn(0.1);

  function handleTrack(e) {
    e.preventDefault();
    const key = orderId.trim().toUpperCase();
    const found = ORDER_STATUSES[key];
    if (found) {
      setResult(found);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  }

  return (
    <section className="section story-section" id="story">
      <div className="story-inner">
        {/* Left: Storefront image */}
        <div className="story-img-col fade-in" ref={imgRef}>
          <div className="story-img-frame">
            <img
              src="/pics/storefront-kalapatti.webp"
              alt="Grace N Bakes storefront on Kalapatti Road, Coimbatore"
              className="story-img"
              id="storefront-img"
              loading="lazy"
            />
            <div className="story-img-caption" id="storefront-caption">
              📍 Kalapatti Road, Coimbatore
            </div>
          </div>
        </div>

        {/* Right: Story + Tracking */}
        <div className="story-text-col fade-in fade-delay" ref={textRef}>
          <p className="section-label">Our Story</p>
          <h2 className="story-title">Baked Fresh,<br />Every Single Day.</h2>
          <p className="story-body">
            Tucked on the quiet stretch of Kalapatti Road, Grace N Bakes was born
            from a simple belief: that a truly great cake can make any moment feel
            like a celebration.
          </p>
          <p className="story-body">
            We rise before the city wakes — mixing, folding, and layering by hand —
            so that by the time you arrive, every cake on the shelf is at its freshest.
            No artificial shortcuts. No overnight batches. Just honest, artisan baking
            rooted in the warmth of Coimbatore.
          </p>

          <div className="story-facts">
            {[
              { num: '8+', label: 'Years Baking' },
              { num: '40+', label: 'Varieties' },
              { num: '5000+', label: 'Happy Customers' },
            ].map(f => (
              <div className="fact-item" key={f.label}>
                <span className="fact-num">{f.num}</span>
                <span className="fact-label">{f.label}</span>
              </div>
            ))}
          </div>

          {/* Track Order */}
          <div className="track-block" id="track">
            <h3 className="track-title">Track Your Order</h3>
            <p className="track-sub">
              Enter your Order ID to check your cake&apos;s preparation status.
            </p>
            <form className="track-form" id="track-form" onSubmit={handleTrack}>
              <input
                type="text"
                className="track-input"
                id="track-input"
                placeholder="e.g. GNB-2024-001"
                value={orderId}
                onChange={e => setOrderId(e.target.value)}
                maxLength={24}
                autoComplete="off"
              />
              <button type="submit" className="btn btn-primary track-btn" id="track-submit-btn">
                Track
              </button>
            </form>

            {result && (
              <div className="track-result success" id="track-result" aria-live="polite">
                <span className="track-icon">{result.icon}</span>
                <div>
                  <p className="track-status">{result.status}</p>
                  <p className="track-msg">{result.msg}</p>
                </div>
              </div>
            )}
            {notFound && (
              <div className="track-result error" id="track-result" aria-live="polite">
                <span className="track-icon">❓</span>
                <div>
                  <p className="track-status">Order Not Found</p>
                  <p className="track-msg">
                    Please double-check your Order ID or call us at +91 422 2XX XXXX.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
