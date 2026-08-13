import React, { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchAllCountries } from '../services/countriesApi';
import DestinationCard from '../components/DestinationCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import { SkeletonCard, LoadingSpinner } from '../components/SkeletonCard';

export default function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialRegion = searchParams.get('region') || 'All';

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedRegion, setSelectedRegion] = useState(initialRegion);
  const [sortBy, setSortBy] = useState('name-asc');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const loadData = () => {
    setLoading(true);
    setError(null);
    fetchAllCountries()
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load countries:', err);
        setError('Failed to load destinations. Please check your network connection.');
        setLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  // Update query params when state changes
  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
    setSelectedRegion(searchParams.get('region') || 'All');
  }, [searchParams]);

  // Filter & Sort logic
  const filteredCountries = useMemo(() => {
    return countries
      .filter((country) => {
        // Region filter
        if (selectedRegion !== 'All' && country.region !== selectedRegion) {
          return false;
        }

        // Search query filter
        if (!searchQuery.trim()) return true;

        const q = searchQuery.toLowerCase().trim();
        const commonName = (country.name?.common || '').toLowerCase();
        const officialName = (country.name?.official || '').toLowerCase();
        const capital = (country.capital ? country.capital.join(' ') : '').toLowerCase();
        const region = (country.region || '').toLowerCase();
        
        const currencies = country.currencies
          ? Object.values(country.currencies)
              .map((c) => `${c.name} ${c.symbol || ''}`)
              .join(' ')
              .toLowerCase()
          : '';

        const languages = country.languages ? Object.values(country.languages).join(' ').toLowerCase() : '';

        return (
          commonName.includes(q) ||
          officialName.includes(q) ||
          capital.includes(q) ||
          region.includes(q) ||
          currencies.includes(q) ||
          languages.includes(q)
        );
      })
      .sort((a, b) => {
        if (sortBy === 'name-asc') {
          return (a.name?.common || '').localeCompare(b.name?.common || '');
        }
        if (sortBy === 'name-desc') {
          return (b.name?.common || '').localeCompare(a.name?.common || '');
        }
        if (sortBy === 'pop-desc') {
          return (b.population || 0) - (a.population || 0);
        }
        if (sortBy === 'pop-asc') {
          return (a.population || 0) - (b.population || 0);
        }
        return 0;
      });
  }, [countries, searchQuery, selectedRegion, sortBy]);

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedRegion, sortBy]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSortBy('name-asc');
    setSearchParams({});
  };

  // Pagination calculation
  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const displayedCountries = filteredCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container py-4">
      {/* Header Title */}
      <div className="text-center mb-4">
        <span className="badge bg-primary px-3 py-2 rounded-pill mb-2">REST Countries API</span>
        <h1 className="display-5 fw-bold font-heading" style={{ color: 'var(--tv-text-primary)' }}>
          Explore World Destinations
        </h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '650px' }}>
          Browse, search, and filter through over 250 countries and territories. Check flags, capitals, regions, population statistics, and currencies.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-4 mx-auto" style={{ maxWidth: '750px' }}>
        <SearchBar
          value={searchQuery}
          onChange={(val) => {
            setSearchQuery(val);
            setSearchParams(val ? { search: val } : {});
          }}
        />
      </div>

      {/* Filter & Sort Controls */}
      <FilterBar
        selectedRegion={selectedRegion}
        onRegionChange={(reg) => {
          setSelectedRegion(reg);
          setSearchParams(reg !== 'All' ? { region: reg } : {});
        }}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onReset={handleReset}
        totalResults={filteredCountries.length}
      />

      {/* Loading Skeleton State */}
      {loading && (
        <div className="row g-4 mb-4">
          {[...Array(itemsPerPage)].map((_, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <SkeletonCard />
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="alert alert-danger p-4 text-center rounded-4 shadow-sm my-4">
          <i className="bi bi-exclamation-triangle-fill fs-2 d-block mb-2"></i>
          <h5 className="fw-bold font-heading">{error}</h5>
          <button className="btn btn-danger mt-2 rounded-pill px-4" onClick={loadData}>
            <i className="bi bi-arrow-clockwise me-1"></i> Retry Loading
          </button>
        </div>
      )}

      {/* Empty Search Result State */}
      {!loading && !error && filteredCountries.length === 0 && (
        <div className="text-center py-5 my-4 bg-surface rounded-4 shadow-sm p-4" style={{ backgroundColor: 'var(--tv-bg-surface)' }}>
          <i className="bi bi-compass fs-1 text-muted d-block mb-3"></i>
          <h4 className="fw-bold font-heading" style={{ color: 'var(--tv-text-primary)' }}>
            No destinations found matching "{searchQuery}"
          </h4>
          <p className="text-muted">Try adjusting your keywords, region filter, or clear filters to see more results.</p>
          <button className="btn btn-tv-primary rounded-pill px-4 mt-2" onClick={handleReset}>
            <i className="bi bi-arrow-counterclockwise me-1"></i> Clear Filters
          </button>
        </div>
      )}

      {/* Destination Cards Grid */}
      {!loading && !error && displayedCountries.length > 0 && (
        <>
          <div className="row g-4 mb-4">
            {displayedCountries.map((c) => (
              <div key={c.cca3} className="col-lg-4 col-md-6">
                <DestinationCard country={c} />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
          />
        </>
      )}
    </div>
  );
}
