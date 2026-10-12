import { useState } from 'react';
import './BookingModal.css';

export default function BookingModal({ isOpen, cakeName, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  function handleClose() {
    setSubmitted(false);
    setForm({ name: '', phone: '', date: '', notes: '' });
    onClose();
  }

  return (
    <div className="modal-overlay" id="booking-overlay" onClick={handleClose}>
      <div
        className="modal-box"
        id="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close-btn" id="modal-close-btn" onClick={handleClose} aria-label="Close booking">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        {!submitted ? (
          <>
            <p className="modal-label">Pre-order Booking</p>
            <h3 className="modal-title" id="modal-title">Reserve Your Cake</h3>
            <p className="modal-cake-name" id="modal-cake-name">{cakeName}</p>

            <form className="booking-form" id="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="b-name">Full Name</label>
                <input
                  type="text"
                  id="b-name"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="b-phone">Mobile Number</label>
                <input
                  type="tel"
                  id="b-phone"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                />
              </div>
              <div className="form-group">
                <label htmlFor="b-date">Event Date</label>
                <input
                  type="date"
                  id="b-date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  min={new Date(Date.now() + 172800000).toISOString().split('T')[0]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="b-notes">Special Instructions / Theme</label>
                <textarea
                  id="b-notes"
                  name="notes"
                  rows="3"
                  placeholder="Describe your theme, flavour preferences, or any special requests…"
                  value={form.notes}
                  onChange={handleChange}
                />
              </div>
              <div className="modal-notice">
                <span>⏱</span>
                <p>Please book at least <strong>48 hours</strong> before your event. Our team will call to confirm.</p>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                id="booking-submit-btn"
                style={{ width: '100%', marginTop: '1rem' }}
                disabled={loading}
              >
                {loading ? 'Submitting…' : 'Confirm Booking Request'}
              </button>
            </form>
          </>
        ) : (
          <div className="booking-success" id="booking-success">
            <div className="success-circle">✓</div>
            <h4>Booking Received!</h4>
            <p>We&apos;ll call you within 2 hours to confirm your order. Thank you for choosing Grace N Bakes. 🎂</p>
            <button className="btn btn-primary" onClick={handleClose} style={{ marginTop: '1.5rem' }}>
              Back to Menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
