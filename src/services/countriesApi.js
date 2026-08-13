import axios from 'axios';
import { FALLBACK_COUNTRIES } from '../utils/mockData';

const BASE_URL = 'https://restcountries.com/v3.1';

// In-memory cache to prevent excessive re-fetching
let countriesCache = null;

export const fetchAllCountries = async () => {
  if (countriesCache) {
    return countriesCache;
  }

  try {
    const fields = 'name,capital,region,subregion,population,flags,cca3,currencies,languages,latlng,borders,timezones';
    const response = await axios.get(`${BASE_URL}/all?fields=${fields}`, { timeout: 10000 });
    if (Array.isArray(response.data) && response.data.length > 0) {
      countriesCache = response.data;
      return response.data;
    }
    return FALLBACK_COUNTRIES;
  } catch (error) {
    console.warn('REST Countries API error/timeout, using fallback datasets:', error.message);
    return FALLBACK_COUNTRIES;
  }
};

export const fetchCountryByCode = async (code) => {
  if (!code) return null;
  const upperCode = code.toUpperCase();

  // Check cache first
  if (countriesCache) {
    const found = countriesCache.find((c) => c.cca3 === upperCode);
    if (found) return found;
  }

  try {
    const response = await axios.get(`${BASE_URL}/alpha/${upperCode}`, { timeout: 8000 });
    const data = Array.isArray(response.data) ? response.data[0] : response.data;
    return data || FALLBACK_COUNTRIES.find((c) => c.cca3 === upperCode) || FALLBACK_COUNTRIES[0];
  } catch (error) {
    console.warn(`REST Countries API failed for code ${code}, searching fallback:`, error.message);
    return FALLBACK_COUNTRIES.find((c) => c.cca3 === upperCode) || FALLBACK_COUNTRIES[0];
  }
};

export const fetchCountriesByCodes = async (codes = []) => {
  if (!codes || codes.length === 0) return [];
  const upperCodes = codes.map(c => c.toUpperCase());

  // Use cached data if available
  if (countriesCache) {
    return countriesCache.filter(c => upperCodes.includes(c.cca3));
  }

  try {
    const response = await axios.get(`${BASE_URL}/alpha?codes=${upperCodes.join(',')}`, { timeout: 8000 });
    return Array.isArray(response.data) ? response.data : FALLBACK_COUNTRIES.filter(c => upperCodes.includes(c.cca3));
  } catch (error) {
    return FALLBACK_COUNTRIES.filter(c => upperCodes.includes(c.cca3));
  }
};
