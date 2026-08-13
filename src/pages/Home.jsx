import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import ReviewCard from '../components/ReviewCard';
import { fetchAllCountries } from '../services/countriesApi';
import { TRAVEL_CATEGORIES, CUSTOMER_REVIEWS } from '../utils/mockData';
import { SkeletonCard } from '../components/SkeletonCard';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllCountries().then((data) => {
      setCountries(data);
      setLoading(false);
    });
  }, []);

  const popularCountries = countries.slice(0, 6);
  const trendingCountries = countries.slice(6, 12);

  const regions = [
    { name: 'Europe', count: '50+ Countries', img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=500&q=80' },
    { name: 'Asia', count: '48+ Countries', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=500&q=80' },
    { name: 'Americas', count: '35+ Countries', img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=500&q=80' },
    { name: 'Africa', count: '54+ Countries', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=500&q=80' },
    { name: 'Oceania', count: '14+ Countries', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=500&q=80' }
  ];

  return (
    <div>
      {/* Hero Banner Section */}
      <Hero />

      <div className="container py-4">
        {/* Popular Destinations */}
        <section className="mb-5">
          <div className="d-flex flex-wrap align-items-end justify-content-between mb-4">
            <div>
              <span className="text-primary font-weight-bold text-uppercase small tracking-wider">Top Rated</span>
              <h2 className="display-6 fw-bold font-heading mb-0" style={{ color: 'var(--tv-text-primary)' }}>
                Popular Destinations
              </h2>
            </div>
            <Link to="/destinations" className="btn btn-tv-outline btn-sm">
              View All Destinations <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>

          <div className="row g-4">
            {loading
              ? [...Array(6)].map((_, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                    <SkeletonCard />
                  </div>
                ))
              : popularCountries.map((c) => (
                  <div key={c.cca3} className="col-lg-4 col-md-6">
                    <DestinationCard country={c} />
                  </div>
                ))}
          </div>
        </section>

        {/* Explore by Region */}
        <section className="mb-5 py-4">
          <div className="text-center mb-4">
            <span className="text-primary font-weight-bold text-uppercase small tracking-wider">Continents</span>
            <h2 className="display-6 fw-bold font-heading" style={{ color: 'var(--tv-text-primary)' }}>
              Explore by Region
            </h2>
            <p className="text-muted">Discover unique cultures and landscapes across five continents</p>
          </div>

          <div className="row g-3">
            {regions.map((reg) => (
              <div key={reg.name} className="col-lg-4 col-md-6">
                <Link
                  to={`/destinations?region=${reg.name}`}
                  className="card border-0 rounded-4 overflow-hidden text-white shadow-sm text-decoration-none transition-transform"
                  style={{ height: '200px' }}
                >
                  <img
                    src={reg.img}
                    alt={reg.name}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-end p-4 bg-dark bg-opacity-50">
                    <h4 className="fw-bold font-heading mb-0">{reg.name}</h4>
                    <span className="small text-light">{reg.count}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Destinations */}
        <section className="mb-5">
          <div className="d-flex flex-wrap align-items-end justify-content-between mb-4">
            <div>
              <span className="text-warning font-weight-bold text-uppercase small tracking-wider">🔥 Hot This Season</span>
              <h2 className="display-6 fw-bold font-heading mb-0" style={{ color: 'var(--tv-text-primary)' }}>
                Trending Travel Spots
              </h2>
            </div>
            <Link to="/destinations" className="btn btn-tv-outline btn-sm">
              Explore More <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>

          <div className="row g-4">
            {loading
              ? [...Array(6)].map((_, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                    <SkeletonCard />
                  </div>
                ))
              : trendingCountries.map((c) => (
                  <div key={c.cca3} className="col-lg-4 col-md-6">
                    <DestinationCard country={c} />
                  </div>
                ))}
          </div>
        </section>

        {/* Explore by Travel Type */}
        <section className="mb-5 py-4">
          <div className="text-center mb-4">
            <span className="text-primary font-weight-bold text-uppercase small tracking-wider">Experiences</span>
            <h2 className="display-6 fw-bold font-heading" style={{ color: 'var(--tv-text-primary)' }}>
              Explore by Travel Type
            </h2>
            <p className="text-muted">Whatever your travel style, we have the ideal destination for you.</p>
          </div>

          <div className="row g-3">
            {TRAVEL_CATEGORIES.map((cat) => (
              <div key={cat.id} className="col-lg-3 col-md-4 col-6">
                <Link
                  to={`/destinations?search=${cat.id}`}
                  className="card tv-card border-0 p-3 text-center text-decoration-none shadow-sm h-100"
                >
                  <div className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-circle mx-auto mb-3" style={{ width: '56px', height: '56px' }}>
                    <i className={`bi ${cat.icon} fs-3`}></i>
                  </div>
                  <h6 className="fw-bold font-heading mb-1 text-truncate" style={{ color: 'var(--tv-text-primary)' }}>
                    {cat.name}
                  </h6>
                  <span className="text-muted small">Explore {cat.id}</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose TravelVista */}
        <section className="my-5 p-5 rounded-4 shadow-sm" style={{ backgroundColor: 'var(--tv-bg-surface)', border: '1px solid var(--tv-border)' }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">Why TravelVista</span>
              <h2 className="display-6 fw-bold font-heading mb-3" style={{ color: 'var(--tv-text-primary)' }}>
                Your Ultimate Travel Companion & Planner
              </h2>
              <p className="text-muted mb-4">
                TravelVista combines verified real-world country data, live weather insights, automated currency exchange calculations, and Gemini AI itinerary planning in one seamless modern app.
              </p>

              <div className="row g-3">
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <i className="bi bi-shield-check fs-2 text-primary"></i>
                    <div>
                      <h6 className="fw-bold mb-1 font-heading" style={{ color: 'var(--tv-text-primary)' }}>250+ Countries Data</h6>
                      <p className="text-muted small mb-0">Official demographics, currencies & border insights.</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <i className="bi bi-stars fs-2 text-warning"></i>
                    <div>
                      <h6 className="fw-bold mb-1 font-heading" style={{ color: 'var(--tv-text-primary)' }}>AI Assistant</h6>
                      <p className="text-muted small mb-0">Custom day-by-day trip recommendations.</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <i className="bi bi-map fs-2 text-success"></i>
                    <div>
                      <h6 className="fw-bold mb-1 font-heading" style={{ color: 'var(--tv-text-primary)' }}>Interactive Maps</h6>
                      <p className="text-muted small mb-0">OpenStreetMap integration with Leaflet markers.</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-start gap-3">
                    <i className="bi bi-[#f59e0b] bi-heart-pulse fs-2 text-danger"></i>
                    <div>
                      <h6 className="fw-bold mb-1 font-heading" style={{ color: 'var(--tv-text-primary)' }}>Trip Wishlist</h6>
                      <p className="text-muted small mb-0">Save favorites locally across your browser session.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
                alt="Travel Explorer"
                className="w-100 rounded-4 shadow-lg object-fit-cover"
                style={{ maxHeight: '420px' }}
              />
            </div>
          </div>
        </section>

        {/* Statistics Banner */}
        <section className="my-5 py-5 text-center bg-primary text-white rounded-4 shadow-md">
          <div className="row g-4">
            <div className="col-md-3 col-6">
              <div className="display-5 fw-bold font-heading">250+</div>
              <span className="opacity-75">Global Destinations</span>
            </div>
            <div className="col-md-3 col-6">
              <div className="display-5 fw-bold font-heading">1M+</div>
              <span className="opacity-75">Happy Travelers</span>
            </div>
            <div className="col-md-3 col-6">
              <div className="display-5 fw-bold font-heading">100%</div>
              <span className="opacity-75">Verified Country Data</span>
            </div>
            <div className="col-md-3 col-6">
              <div className="display-5 fw-bold font-heading">24/7</div>
              <span className="opacity-75">AI Smart Itineraries</span>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="mb-5">
          <div className="text-center mb-4">
            <span className="text-primary font-weight-bold text-uppercase small tracking-wider">Testimonials</span>
            <h2 className="display-6 fw-bold font-heading" style={{ color: 'var(--tv-text-primary)' }}>
              Loved by Explorers Worldwide
            </h2>
          </div>

          <div className="row g-4">
            {CUSTOMER_REVIEWS.map((rev) => (
              <div key={rev.id} className="col-lg-4 col-md-6">
                <ReviewCard review={rev} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
