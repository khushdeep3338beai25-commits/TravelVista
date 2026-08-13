import axios from 'axios';

const STATIC_RATES = {
  USD: 1.0,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 154.5,
  AUD: 1.52,
  CAD: 1.36,
  CHF: 0.91,
  CNY: 7.23,
  INR: 83.4,
  BRL: 5.15,
  ZAR: 18.5,
  MXN: 16.8,
  KRW: 1370.0,
  SGD: 1.35,
  NZD: 1.65,
  AED: 3.67,
  EGP: 47.8,
  KES: 131.0
};

export const fetchExchangeRates = async (baseCurrency = 'USD') => {
  try {
    const response = await axios.get(`https://open.er-api.com/v6/latest/${baseCurrency}`, { timeout: 6000 });
    if (response.data && response.data.rates) {
      return {
        rates: response.data.rates,
        base: baseCurrency,
        lastUpdated: new Date().toLocaleDateString()
      };
    }
  } catch (error) {
    console.warn('Live Exchange API failed, using static rates:', error.message);
  }

  return {
    rates: STATIC_RATES,
    base: 'USD',
    lastUpdated: 'Estimated Offline Rates'
  };
};

export const convertCurrency = (amount, fromRate, toRate) => {
  if (!amount || isNaN(amount)) return 0;
  if (!fromRate || !toRate) return amount;
  return ((amount / fromRate) * toRate).toFixed(2);
};
