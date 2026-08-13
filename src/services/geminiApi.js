import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const generateAITravelPlan = async (userPrompt, countryName = '') => {
  if (GEMINI_API_KEY) {
    try {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const systemPrompt = `You are TravelVista AI, an expert travel consultant. Generate a structured travel recommendation for the prompt: "${userPrompt}" ${countryName ? `focusing on ${countryName}` : ''}.
      Format your response with clear markdown headings for:
      - 🌟 Overview & Highlights
      - 📅 Day-by-Day Itinerary (Day 1, Day 2, etc.)
      - 🍜 Food & Dining Recommendations
      - 💡 Essential Travel Tips & Culture
      - 💰 Estimated Budget (Low, Mid, Luxury)
      - 🌤️ Best Time to Visit`;

      const result = await model.generateContent(systemPrompt);
      const text = result.response.text();
      return { isLive: true, content: text };
    } catch (error) {
      console.warn('Gemini API call failed, switching to demo mode:', error.message);
    }
  }

  // Graceful Demo / Offline Fallback Generator
  const target = countryName || userPrompt.replace(/plan a|trip to|days|day/gi, '').trim() || 'Your Destination';
  
  const mockPlan = `### 🌟 TravelVista AI Itinerary for ${target}

> **Mode**: Demo Mode (Add \`VITE_GEMINI_API_KEY\` to your \`.env\` file for live AI responses)

#### 📅 Day-by-Day Itinerary
* **Day 1: Arrival & Historic City Orientation**
  * **Morning**: Arrive at main international airport, check into hotel, and grab local coffee & pastries.
  * **Afternoon**: Guided walking tour of the historical old town and iconic landmarks.
  * **Evening**: Sunset view from scenic hilltop viewpoint followed by traditional welcome dinner.

* **Day 2: Cultural Deep Dive & Museums**
  * **Morning**: Early entrance to national museums and art galleries.
  * **Afternoon**: Explore bustling local markets, craft shops, and street art districts.
  * **Evening**: Culinary food tasting tour through renowned night markets.

* **Day 3: Scenic Nature & Day Excursion**
  * **Morning**: Day trip out to nearby national parks, coastline, or scenic mountains.
  * **Afternoon**: Outdoor adventure (hiking, boat cruise, or coastal cycling).
  * **Evening**: Relax at seaside lounge or traditional thermal bath/spa.

#### 🍜 Food & Dining Recommendations
* **Local Specialties**: Sample signature national dishes and fresh artisanal breads.
* **Top Dining Spots**: Authentic family-run bistros & rooftop sky lounges for sunset views.

#### 💡 Essential Travel Tips
* **Local Transport**: Use regional train passes or official rideshare apps.
* **Etiquette**: A greeting in the local language goes a long way with friendly locals.

#### 💰 Estimated Budget Breakdown
* **Backpacker / Budget**: $45 - $70 USD / day
* **Comfort / Mid-Range**: $120 - $220 USD / day
* **Luxury / Boutique**: $400+ USD / day

#### 🌤️ Best Time to Visit
* **Recommended Months**: Spring (April–May) and Autumn (September–October) for pleasant weather and fewer crowds.`;

  return { isLive: false, content: mockPlan };
};
