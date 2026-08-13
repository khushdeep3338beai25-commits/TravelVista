// Offline fallback country data & curated travel content
export const FALLBACK_COUNTRIES = [
  {
    cca3: 'FRA',
    name: { common: 'France', official: 'French Republic' },
    capital: ['Paris'],
    region: 'Europe',
    subregion: 'Western Europe',
    population: 67390000,
    flags: {
      png: 'https://flagcdn.com/w320/fr.png',
      svg: 'https://flagcdn.com/fr.svg',
      alt: 'The flag of France'
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    languages: { fra: 'French' },
    timezones: ['UTC+01:00'],
    latlng: [46.0, 2.0],
    borders: ['AND', 'BEL', 'DEU', 'ITA', 'LUX', 'MC', 'ESP', 'CHE'],
    travelType: ['Historical', 'Food & Culture', 'Cities']
  },
  {
    cca3: 'JPN',
    name: { common: 'Japan', official: 'Japan' },
    capital: ['Tokyo'],
    region: 'Asia',
    subregion: 'Eastern Asia',
    population: 125800000,
    flags: {
      png: 'https://flagcdn.com/w320/jp.png',
      svg: 'https://flagcdn.com/jp.svg',
      alt: 'The flag of Japan'
    },
    currencies: { JPY: { name: 'Japanese yen', symbol: '¥' } },
    languages: { jpn: 'Japanese' },
    timezones: ['UTC+09:00'],
    latlng: [36.0, 138.0],
    borders: [],
    travelType: ['Nature', 'Food & Culture', 'Cities']
  },
  {
    cca3: 'ITA',
    name: { common: 'Italy', official: 'Italian Republic' },
    capital: ['Rome'],
    region: 'Europe',
    subregion: 'Southern Europe',
    population: 59550000,
    flags: {
      png: 'https://flagcdn.com/w320/it.png',
      svg: 'https://flagcdn.com/it.svg',
      alt: 'The flag of Italy'
    },
    currencies: { EUR: { name: 'Euro', symbol: '€' } },
    languages: { ita: 'Italian' },
    timezones: ['UTC+01:00'],
    latlng: [42.8, 12.83],
    borders: ['AUT', 'FRA', 'SMR', 'SVN', 'CHE', 'VAT'],
    travelType: ['Historical', 'Food & Culture', 'Beaches']
  },
  {
    cca3: 'AUS',
    name: { common: 'Australia', official: 'Commonwealth of Australia' },
    capital: ['Canberra'],
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    population: 25690000,
    flags: {
      png: 'https://flagcdn.com/w320/au.png',
      svg: 'https://flagcdn.com/au.svg',
      alt: 'The flag of Australia'
    },
    currencies: { AUD: { name: 'Australian dollar', symbol: '$' } },
    languages: { eng: 'English' },
    timezones: ['UTC+08:00', 'UTC+09:30', 'UTC+10:00'],
    latlng: [-27.0, 133.0],
    borders: [],
    travelType: ['Beaches', 'Adventure', 'Nature']
  },
  {
    cca3: 'BRA',
    name: { common: 'Brazil', official: 'Federative Republic of Brazil' },
    capital: ['Brasília'],
    region: 'Americas',
    subregion: 'South America',
    population: 212559417,
    flags: {
      png: 'https://flagcdn.com/w320/br.png',
      svg: 'https://flagcdn.com/br.svg',
      alt: 'The flag of Brazil'
    },
    currencies: { BRL: { name: 'Brazilian real', symbol: 'R$' } },
    languages: { por: 'Portuguese' },
    timezones: ['UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00'],
    latlng: [-10.0, -55.0],
    borders: ['ARG', 'BOL', 'COL', 'GF', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN'],
    travelType: ['Nature', 'Beaches', 'Adventure']
  },
  {
    cca3: 'KEN',
    name: { common: 'Kenya', official: 'Republic of Kenya' },
    capital: ['Nairobi'],
    region: 'Africa',
    subregion: 'Eastern Africa',
    population: 53771296,
    flags: {
      png: 'https://flagcdn.com/w320/ke.png',
      svg: 'https://flagcdn.com/ke.svg',
      alt: 'The flag of Kenya'
    },
    currencies: { KES: { name: 'Kenyan shilling', symbol: 'KSh' } },
    languages: { eng: 'English', swa: 'Swahili' },
    timezones: ['UTC+03:00'],
    latlng: [1.0, 38.0],
    borders: ['ETH', 'SOM', 'SSD', 'TZA', 'UGA'],
    travelType: ['Nature', 'Adventure']
  },
  {
    cca3: 'EGY',
    name: { common: 'Egypt', official: 'Arab Republic of Egypt' },
    capital: ['Cairo'],
    region: 'Africa',
    subregion: 'Northern Africa',
    population: 102334404,
    flags: {
      png: 'https://flagcdn.com/w320/eg.png',
      svg: 'https://flagcdn.com/eg.svg',
      alt: 'The flag of Egypt'
    },
    currencies: { EGP: { name: 'Egyptian pound', symbol: 'E£' } },
    languages: { ara: 'Arabic' },
    timezones: ['UTC+02:00'],
    latlng: [27.0, 30.0],
    borders: ['ISR', 'LBY', 'SDN'],
    travelType: ['Historical', 'Adventure', 'Food & Culture']
  },
  {
    cca3: 'CHE',
    name: { common: 'Switzerland', official: 'Swiss Confederation' },
    capital: ['Bern'],
    region: 'Europe',
    subregion: 'Western Europe',
    population: 8636896,
    flags: {
      png: 'https://flagcdn.com/w320/ch.png',
      svg: 'https://flagcdn.com/ch.svg',
      alt: 'The flag of Switzerland'
    },
    currencies: { CHF: { name: 'Swiss franc', symbol: 'CHF' } },
    languages: { fra: 'French', gsw: 'Swiss German', ita: 'Italian', roh: 'Romansh' },
    timezones: ['UTC+01:00'],
    latlng: [47.0, 8.0],
    borders: ['AUT', 'FRA', 'DEU', 'ITA', 'LIE'],
    travelType: ['Mountains', 'Nature', 'Adventure']
  }
];

export const TRAVEL_CATEGORIES = [
  { id: 'Beaches', name: 'Beaches & Coastal', icon: 'bi-tsunami', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
  { id: 'Mountains', name: 'Mountains & Alps', icon: 'bi-triangle-fill', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80' },
  { id: 'Adventure', name: 'Adventure & Safari', icon: 'bi-compass', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80' },
  { id: 'Historical', name: 'Historical & Heritage', icon: 'bi-bank', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80' },
  { id: 'Nature', name: 'Nature & Wildlife', icon: 'bi-tree', img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80' },
  { id: 'Cities', name: 'Metropolitan & Cities', icon: 'bi-building', img: 'https://images.unsplash.com/photo-1477959858617-67f30ac72604?auto=format&fit=crop&w=600&q=80' },
  { id: 'Food & Culture', name: 'Food & Culinary Arts', icon: 'bi-cup-hot', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80' },
  { id: 'Islands', name: 'Exotic Islands', icon: 'bi-sun', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80' }
];

export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: 'Sophia Martinez',
    role: 'Frequent Traveler',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'TravelVista made planning our 2-week Europe trip completely seamless! The destination comparison tool and interactive maps were invaluable.'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Digital Nomad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'The AI Assistant helped me discover hidden gems in Kyoto that I would have never found in standard guidebooks. Highly recommended!'
  },
  {
    id: 3,
    name: 'Emma Watson',
    role: 'Solo Explorer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    comment: 'I love how clean the UI is, especially in dark mode. The weather widgets and currency converter give me everything I need in one spot.'
  }
];

export const COUNTRY_EXTRA_INFO = {
  FRA: {
    bestTime: 'April to October',
    attractions: ['Eiffel Tower', 'Louvre Museum', 'French Riviera', 'Mont Saint-Michel'],
    culture: 'Rich culinary traditions, world-class art galleries, fashion, and cafe culture.',
    tips: 'Learn basic French greetings (Bonjour, Merci). Validate train tickets before boarding.'
  },
  JPN: {
    bestTime: 'March to May & September to November',
    attractions: ['Mount Fuji', 'Kyoto Shrines', 'Tokyo Shibuya Crossing', 'Osaka Castle'],
    culture: 'Harmonious blend of ancient traditions and futuristic innovation.',
    tips: 'Carry cash as many small shops do not take cards. Bowing is customary.'
  },
  ITA: {
    bestTime: 'May to June & September to October',
    attractions: ['Colosseum in Rome', 'Venice Canals', 'Amalfi Coast', 'Florence Duomo'],
    culture: 'Passionate about food, wine, family, art, and architectural heritage.',
    tips: 'Cappuccino is typically enjoyed only in the morning. Validate bus/train tickets.'
  },
  DEFAULT: {
    bestTime: 'Year-round depending on preferred activities',
    attractions: ['Historic City Center', 'National Parks', 'Local Museums & Landmarks'],
    culture: 'Vibrant local customs, traditional cuisine, and hospitable community.',
    tips: 'Always carry a copy of your passport and check local embassy guidelines.'
  }
};
