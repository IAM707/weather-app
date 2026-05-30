import type { WeatherData } from "../type";
const WeatherCard = ({ data }: { data: WeatherData }) => {
  if (!data) return null;

  return (
    <div className="w-full max-w-sm bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-2xl text-white mt-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold ">{data.name}</h2>
        <p className="text-blue-300 capitalize mt-2">
          {data.weather[0].description}
          <img
            className="inline-block ml-2"
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
          />
        </p>
      </div>

      <div className="flex justify-center my-6">
        <span className=" text-7xl font-bold">
          {Math.round(data.main.temp)}°C
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
        <div className="text-center">
          <p className="text-zinc-400 text-sm">Humidity</p>
          <p className="text-xl font-semibold">{data.main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-zinc-400 text-sm">Feels Like</p>
          <p className="text-xl font-semibold">
            {Math.round(data.main.feels_like)}°C
          </p>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
