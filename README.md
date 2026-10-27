# TravelVista – Explore the World 🌍✈️



## 🌟 Key Features

1. **Home Landing Page (`/`)**:
   - Visually striking hero section with search integration.
   - Popular & Trending Destinations showcase.
   - Continental breakdown (Europe, Asia, Americas, Africa, Oceania).
   - Travel Type category cards (Beaches, Mountains, Adventure, Historical, Nature, Cities, Food & Culture, Islands).
   - Platform statistics, customer reviews, and newsletter subscription.


4.

9. **About & Contact (`/about`, `/contact`)**:
   - Comprehensive company background, mission & vision, developer spotlight, and tech stack overview.
   - Contact form with client-side validation, Toast alert feedback, FAQ accordion, and headquarters office map.

10. **Dark / Light Theme Switcher**:
    - Full application theme toggle synced with Bootstrap 5 `data-bs-theme` and LocalStorage persistence.

11. **Toast Notifications**:
    - Global non-intrusive alert toasts for user actions.

12. **Custom 404 Page (`*`)**:
    - Custom error page ("Wandered off the map") with quick navigation.

---

## 🛠️ Tech Stack

- **Core**: React.js 18, Vite
- **UI & Styling**: Bootstrap 5, Bootstrap Icons, Vanilla CSS3 Custom Properties
- **Routing**: React Router DOM (v6+)
- **HTTP Client**: Axios
- **Maps**: Leaflet, React Leaflet
- **AI Integration**: Google Generative AI (`@google/generative-ai`)
- **State Management**: React Context API & Custom Hooks
- **Storage**: LocalStorage

---


## 🔑 Environment Variables (`.env`)

Copy `.env.example` to `.env` in the project root:

```env
# OpenWeatherMap API Key (Optional)
VITE_WEATHER_API_KEY=your_openweathermap_api_key

# Google Gemini API Key (Optional)
VITE_GEMINI_API_KEY=your_gemini_api_key

# Exchange Rate API Key (Optional - open.er-api.com is free without key)
VITE_CURRENCY_API_KEY=
```

> **Note**: The app runs completely without any API keys out of the box using built-in graceful fallbacks!

---

## 🚀 How to Run Locally

1. **Unzip** `TravelVista-React-Travel-Website.zip` and open the folder in **VS Code**.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start Development Server**:
   ```bash
   npm run dev
   ```
4. Open the displayed local URL in your browser (e.g. `http://localhost:5173`).

---

## 📦 Building for Production

To compile and verify the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
travelvista/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── DestinationCard.jsx
    │   ├── SearchBar.jsx
    │   ├── FilterBar.jsx
    │   ├── LoadingSpinner.jsx
    │   ├── SkeletonCard.jsx
    │   ├── WeatherCard.jsx
    │   ├── MapComponent.jsx
    │   ├── ReviewCard.jsx
    │   ├── FavoriteButton.jsx
    │   ├── Pagination.jsx
    │   ├── Toast.jsx
    │   ├── ThemeToggle.jsx
    │   ├── AITravelAssistant.jsx
    │   └── CurrencyConverter.jsx
    ├── context/
    │   ├── ThemeContext.jsx
    │   ├── FavoritesContext.jsx
    │   ├── CompareContext.jsx
    │   ├── PlannerContext.jsx
    │   └── ToastContext.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── Destinations.jsx
    │   ├── DestinationDetails.jsx
    │   ├── Favorites.jsx
    │   ├── Planner.jsx
    │   ├── Compare.jsx
    │   ├── AIAssistantPage.jsx
    │   ├── CurrencyPage.jsx
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   └── NotFound.jsx
    ├── services/
    │   ├── countriesApi.js
    │   ├── weatherApi.js
    │   ├── exchangeApi.js
    │   └── geminiApi.js
    ├── utils/
    │   ├── formatters.js
    │   └── mockData.js
    └── hooks/
        └── useLocalStorage.js
```

---

## 👨‍💻 Author & License

Developed with ❤️ for global travel enthusiasts. Distributed under the MIT License.
# TravelVista
