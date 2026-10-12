import './CartDrawer.css';

export default function CartDrawer({ isOpen, items, onClose, onUpdateQty, onRemove }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  function formatPrice(n) {
    return '₹' + n.toLocaleString('en-IN');
  }

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        id="cart-overlay"
        onClick={onClose}
      />
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`} id="cart-drawer" aria-label="Shopping cart">
        <div className="cart-header">
          <h3 className="cart-heading">Your Order</h3>
          <button className="cart-close-btn" id="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty" id="cart-empty-msg">
              <span>🎂</span>
              <p>Your cart is empty.<br />Add a cake to begin!</p>
            </div>
          ) : (
            <ul className="cart-list" id="cart-list">
              {items.map(item => (
                <li className="cart-item" key={item.id} id={`cart-item-${item.id}`}>
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">{formatPrice(item.price)}</p>
                  </div>
                  <div className="cart-item-controls">
                    <button
                      className="qty-btn"
                      id={`qty-dec-${item.id}`}
                      onClick={() => onUpdateQty(item.id, item.qty - 1)}
                      aria-label="Decrease quantity"
                    >−</button>
                    <span className="qty-display" id={`qty-val-${item.id}`}>{item.qty}</span>
                    <button
                      className="qty-btn"
                      id={`qty-inc-${item.id}`}
                      onClick={() => onUpdateQty(item.id, item.qty + 1)}
                      aria-label="Increase quantity"
                    >+</button>
                    <button
                      className="remove-btn"
                      id={`remove-${item.id}`}
                      onClick={() => onRemove(item.id)}
                      aria-label="Remove item"
                    >✕</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer" id="cart-footer">
            <div className="cart-total-row">
              <span className="cart-total-label">Total</span>
              <span className="cart-total-val" id="cart-total">{formatPrice(total)}</span>
            </div>
            <button className="btn btn-primary" id="checkout-btn" style={{ width: '100%' }}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
