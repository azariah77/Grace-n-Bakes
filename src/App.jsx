import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DailyCakes from './components/DailyCakes';
import CelebrationCakes from './components/CelebrationCakes';
import StoryTracking from './components/StoryTracking';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import BookingModal from './components/BookingModal';
import './App.css';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [booking, setBooking] = useState({ open: false, cakeName: '' });

  const cartCount = cartItems.reduce((n, i) => n + i.qty, 0);

  const addToCart = useCallback((item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: item.qty ?? 1 }];
    });
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty <= 0) {
      setCartItems(prev => prev.filter(i => i.id !== id));
    } else {
      setCartItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
    }
  }, []);

  const removeItem = useCallback((id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const openBooking = useCallback((cakeName) => {
    setBooking({ open: true, cakeName });
  }, []);

  const closeBooking = useCallback(() => {
    setBooking({ open: false, cakeName: '' });
  }, []);

  return (
    <div className="app-root">
      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />

      <main>
        <Hero />

        {/* Wave separator */}
        <div className="wave-divider" aria-hidden="true">
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#F5EDE0"/>
          </svg>
        </div>

        <DailyCakes onAdd={addToCart} />

        {/* Wave separator (flipped) */}
        <div className="wave-divider" aria-hidden="true" style={{ transform: 'scaleY(-1)', marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#F5EDE0"/>
          </svg>
        </div>

        <CelebrationCakes onBook={openBooking} />

        <StoryTracking />
      </main>

      <Footer />

      {/* Cart drawer */}
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQty={updateQty}
        onRemove={removeItem}
      />

      {/* Booking modal */}
      <BookingModal
        isOpen={booking.open}
        cakeName={booking.cakeName}
        onClose={closeBooking}
      />
    </div>
  );
}
