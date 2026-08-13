import axios from 'axios';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherByCoords = async (lat, lon, capitalName = 'Capital') => {
  if (WEATHER_API_KEY) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`,
        { timeout: 5000 }
      );
      const data = response.data;
      return {
        isLive: true,
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        condition: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 3.6), // km/h
        city: data.name || capitalName
      };
    } catch (error) {
      console.warn('Live weather API failed or key invalid, using fallback:', error.message);
    }
  }

  // Graceful Fallback Mode when no API key or network issue occurs
  const seed = (Math.abs(lat || 10) + Math.abs(lon || 10)) % 15;
  const mockTemp = Math.round(18 + seed);
  const conditions = [
    { text: 'Sunny & Clear Skies', icon: 'bi-sun-fill text-warning' },
    { text: 'Partly Cloudy', icon: 'bi-cloud-sun-fill text-info' },
    { text: 'Pleasant Breeze', icon: 'bi-wind text-primary' },
    { text: 'Mild Warmth', icon: 'bi-brightness-high-fill text-warning' }
  ];
  const chosenCond = conditions[Math.floor(seed % conditions.length)];

  return {
    isLive: false,
    temp: mockTemp,
    feelsLike: mockTemp + 2,
    condition: chosenCond.text,
    iconClass: chosenCond.icon,
    humidity: 55 + Math.round(seed),
    windSpeed: 12 + Math.round(seed),
    city: capitalName,
    message: 'Displaying estimated climate metrics (Configure VITE_WEATHER_API_KEY for live data)'
  };
};
