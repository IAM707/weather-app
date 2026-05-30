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
          placeholder="Enter city name"
          onKeyDown={(e) => {
            if (e.key === "Enter") fetchWeather();
          }}
          className="border border-black bg-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-400 m-2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={fetchWeather}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Search
        </button>

        {/* THE LOGIC GATEWAY */}
        {isLoading && (
          <div className="flex justify-center my-6">
            <div className="w-8 h-8 border-4 rounded-full border-gray-500 border-t-transparent animate-spin"></div>
          </div>
        )}

        {error && <p className="text-red-400 mt-4">{error}</p>}

        {/* Only show the card if we have data AND aren't loading */}
        {weather && !isLoading && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}

export default App;
