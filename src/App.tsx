import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import useWeather from "./hooks/useWeather";

function App() {
  const { city, setCity, weather, isLoading, error, fetchWeather } =
    useWeather();
  return (
    <div className="min-h-screen bg-zinc-800 flex items-center justify-center p-4">
      <div>
        <input
          className="border border-black bg-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>

        <WeatherCard data={weather} />
      </div>
    </div>
  );
}

export default App;
