import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { addToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    addToast('Thank you for subscribing to TravelVista newsletter! 📩', 'success');
    setEmail('');
  };

  return (
    <footer className="mt-auto py-5 border-top" style={{ backgroundColor: 'var(--tv-bg-surface)', borderColor: 'var(--tv-border)' }}>
      <div className="container">
        <div className="row g-4">
          {/* Brand Info */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none mb-3">
              <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-compass-fill fs-5"></i>
              </div>
              <span className="fs-4 fw-bold font-heading" style={{ color: 'var(--tv-text-primary)' }}>
                Travel<span className="text-primary">Vista</span>
              </span>
            </Link>
            <p className="text-muted small mb-4">
              Explore the world, one destination at a time. Discover amazing countries, cultures, geography, real-time weather, and smart AI itineraries for your dream journey.
            </p>
            <div className="d-flex gap-3">
              <a href="#facebook" aria-label="Facebook" className="btn btn-sm btn-outline-secondary rounded-circle">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#twitter" aria-label="Twitter" className="btn btn-sm btn-outline-secondary rounded-circle">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#instagram" aria-label="Instagram" className="btn btn-sm btn-outline-secondary rounded-circle">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#youtube" aria-label="YouTube" className="btn btn-sm btn-outline-secondary rounded-circle">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3 font-heading" style={{ color: 'var(--tv-text-primary)' }}>Navigation</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
              <li><Link to="/destinations" className="text-decoration-none text-muted">All Destinations</Link></li>
              <li><Link to="/favorites" className="text-decoration-none text-muted">Wishlist & Saved</Link></li>
              <li><Link to="/planner" className="text-decoration-none text-muted">Trip Planner</Link></li>
              <li><Link to="/compare" className="text-decoration-none text-muted">Compare Countries</Link></li>
              <li><Link to="/ai-assistant" className="text-decoration-none text-warning fw-semibold">AI Assistant</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3 font-heading" style={{ color: 'var(--tv-text-primary)' }}>Travel Categories</h6>
            <div className="row g-2 small">
              <div className="col-6">
                <ul className="list-unstyled d-flex flex-column gap-2">
                  <li><Link to="/destinations?category=Beaches" className="text-decoration-none text-muted">Beaches</Link></li>
                  <li><Link to="/destinations?category=Mountains" className="text-decoration-none text-muted">Mountains</Link></li>
                  <li><Link to="/destinations?category=Adventure" className="text-decoration-none text-muted">Adventure</Link></li>
                  <li><Link to="/destinations?category=Historical" className="text-decoration-none text-muted">Historical</Link></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled d-flex flex-column gap-2">
                  <li><Link to="/destinations?category=Nature" className="text-decoration-none text-muted">Nature</Link></li>
                  <li><Link to="/destinations?category=Cities" className="text-decoration-none text-muted">Cities</Link></li>
                  <li><Link to="/destinations?category=Food" className="text-decoration-none text-muted">Food & Culture</Link></li>
                  <li><Link to="/destinations?category=Islands" className="text-decoration-none text-muted">Islands</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3 font-heading" style={{ color: 'var(--tv-text-primary)' }}>Stay Inspired</h6>
            <p className="text-muted small">Subscribe to receive destination guides, travel tips, and special offers in your inbox.</p>
            <form onSubmit={handleSubscribe} className="d-flex flex-column gap-2">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-tv-primary btn-sm w-100">
                Subscribe <i className="bi bi-arrow-right ms-1"></i>
              </button>
            </form>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: 'var(--tv-border)' }} />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-muted gap-2">
          <div>© {new Date().getFullYear()} TravelVista – Explore the World. Built with React + Vite + Bootstrap 5.</div>
          <div className="d-flex gap-3">
            <Link to="/about" className="text-decoration-none text-muted">About Us</Link>
            <Link to="/contact" className="text-decoration-none text-muted">Contact Support</Link>
            <span className="text-muted">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
