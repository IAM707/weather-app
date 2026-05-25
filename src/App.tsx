import { useState } from "react";
import WeatjerCard from "./components/WeatherCard";
import useWeather from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`,
      );

      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 min-h-screen text-white p-8">
      <div className="max-w-md mx-auto flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Weather App</h1>

        <div className="flex gap-2">
          <input
            className="p-2 rounded-lg bg-zinc-800 flex-1 outline-none"
            placeholder="Enter a City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
            onClick={fetchWeather}
          >
            Get Weather
          </button>
        </div>
        {/* YOU WERE MISSING THIS DASHBOARD SECTION */}
        {isLoading && <p className="text-yellow-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {weather && (
          <div className="bg-zinc-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg mt-6">
            <pre>{JSON.stringify(weather, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
