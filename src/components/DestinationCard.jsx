import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import { formatPopulation, formatCurrencies, formatCapital } from '../utils/formatters';
import { useCompare } from '../context/CompareContext';

export default function DestinationCard({ country }) {
  const { isComparing, addToCompare, removeFromCompare } = useCompare();

  if (!country) return null;


  const destinationImages = {
  France:
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80',

  Japan:
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',

  Italy:
    'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=900&q=80',

  Australia:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7C0BG3Qcg7mDW5P9133MrEETcyTkzXoHLVYnuUSb5uA&s=10',

  Brazil:
    'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=80',

  Kenya:
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',

  Egypt:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJiv80c_YHJlACcfv_2qXTeZcZUxcsBKsteQRbHOY04Q&s=10',

  Switzerland:
    'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?auto=format&fit=crop&w=900&q=80',
};
  const destinationImage =
  destinationImages[country.name?.common] ||
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80';
  const countryName = country.name?.common || 'Unknown Country';
  const capital = formatCapital(country.capital);
  const region = country.region || 'World';
  const population = formatPopulation(country.population);
  const currency = formatCurrencies(country.currencies);
  const code = country.cca3;

  const comparing = isComparing(code);

  return (
    <div className="card tv-card h-100 position-relative border-0 shadow-sm">
      {/* Flag Image & Overlay Badge */}
      <div className="position-relative overflow-hidden" style={{ height: '190px' }}>
        <img
  src={destinationImage}
  alt={`Beautiful destination in ${countryName}`}
  className="w-100 h-100 object-fit-cover transition-transform"
  loading="lazy"
  style={{ transition: 'transform 0.5s ease' }}
/>
        <div className="position-absolute top-0 start-0 m-3">
          <span className="badge bg-dark bg-opacity-75 text-white px-2 py-1 rounded-pill small">
            <i className="bi bi-geo-alt-fill text-primary me-1"></i> {region}
          </span>
        </div>
        <div className="position-absolute top-0 end-0 m-3">
          <FavoriteButton country={country} />
        </div>
      </div>

      {/* Card Content */}
      <div className="card-body d-flex flex-column p-4">
        <h5 className="card-title fw-bold font-heading mb-1 text-truncate" style={{ color: 'var(--tv-text-primary)' }}>
          {countryName}
        </h5>
        <p className="text-muted small mb-3 text-truncate">
          <i className="bi bi-building me-1 text-primary"></i> Capital: <strong className="text-body">{capital}</strong>
        </p>

        <div className="row g-2 small mb-3 p-2 rounded bg-subtle" style={{ backgroundColor: 'var(--tv-bg-subtle)' }}>
          <div className="col-6">
            <span className="text-muted d-block small">Population</span>
            <strong style={{ color: 'var(--tv-text-primary)' }}>{population}</strong>
          </div>
          <div className="col-6">
            <span className="text-muted d-block small">Currency</span>
            <strong className="text-truncate d-block" style={{ color: 'var(--tv-text-primary)' }} title={currency}>
              {currency}
            </strong>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto d-flex flex-column gap-2">
          <Link to={`/destination/${code}`} className="btn btn-tv-primary w-100 btn-sm font-weight-bold d-flex align-items-center justify-content-center gap-1">
            View Details <i className="bi bi-arrow-right"></i>
          </Link>
          
          <button
            type="button"
            onClick={() => (comparing ? removeFromCompare(code) : addToCompare(country))}
            className={`btn btn-sm w-100 ${comparing ? 'btn-danger' : 'btn-outline-secondary'}`}
            style={{ fontSize: '0.8rem' }}
          >
            <i className={`bi ${comparing ? 'bi-check-circle-fill' : 'bi-plus-circle'} me-1`}></i>
            {comparing ? 'Remove Compare' : 'Add to Compare'}
          </button>
        </div>
      </div>
    </div>
  );
}
