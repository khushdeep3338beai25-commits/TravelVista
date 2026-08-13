import React, { useEffect, useState } from 'react';
import { fetchWeatherByCoords } from '../services/weatherApi';

export default function WeatherCard({ latlng, capitalName }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (latlng && latlng.length >= 2) {
      setLoading(true);
      fetchWeatherByCoords(latlng[0], latlng[1], capitalName).then((data) => {
        if (isMounted) {
          setWeather(data);
          setLoading(false);
        }
      });
    } else {
      setLoading(false);
    }
    return () => {
      isMounted = false;
    };
  }, [latlng, capitalName]);

  if (loading) {
    return (
      <div className="card border-0 shadow-sm p-4 rounded-4" style={{ backgroundColor: 'var(--tv-bg-surface)' }}>
        <div className="d-flex align-items-center gap-3">
          <div className="spinner-border text-primary spinner-border-sm"></div>
          <span className="text-muted small">Loading climate details...</span>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: 'var(--tv-bg-surface)' }}>
      <div className="card-header border-0 bg-primary text-white p-3 d-flex justify-content-between align-items-center">
        <h6 className="mb-0 fw-bold font-heading d-flex align-items-center gap-2">
          <i className="bi bi-cloud-sun-fill"></i> Current Weather – {weather.city}
        </h6>
        <span className={`badge ${weather.isLive ? 'bg-success' : 'bg-warning text-dark'} small`}>
          {weather.isLive ? 'Live API' : 'Estimated Climate'}
        </span>
      </div>

      <div className="card-body p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-3">
            {weather.icon ? (
              <img src={weather.icon} alt={weather.condition} width="64" height="64" />
            ) : (
              <i className={`bi ${weather.iconClass} display-4`}></i>
            )}
            <div>
              <div className="display-5 fw-bold font-heading" style={{ color: 'var(--tv-text-primary)' }}>
                {weather.temp}°C
              </div>
              <span className="text-capitalize text-muted font-weight-semibold">{weather.condition}</span>
            </div>
          </div>
          <div className="text-end small text-muted">
            <div>Feels like: <strong>{weather.feelsLike}°C</strong></div>
            <div>Humidity: <strong>{weather.humidity}%</strong></div>
            <div>Wind: <strong>{weather.windSpeed} km/h</strong></div>
          </div>
        </div>

        {weather.message && (
          <div className="alert alert-info py-2 px-3 small mb-0 rounded-3 border-0 d-flex align-items-center gap-2">
            <i className="bi bi-info-circle-fill"></i>
            <span>{weather.message}</span>
          </div>
        )}
      </div>
    </div>
  );
}
