import { useEffect, useState } from 'react';

const useFetchWeather = (location) => {
  const [weather, setWeather] = useState({});
  const [displayLocation, setDisplayLocation] = useState('');
  const [flag, setFlag] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (location < 2) return setWeather({});
    async function fetchWeather() {
      try {
        setIsLoading(true);
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
        );
        const geoData = await geoRes.json();
        if (!geoData.results) throw new Error('Location not found');
        const { latitude, longitude, timezone, name, country_code } =
          geoData.results.at(0);
        setDisplayLocation(name);
        setFlag(country_code);
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
        );
        const weatherData = await weatherRes.json();
        setWeather(weatherData.daily);
      } catch (err) {
        console.error(err);
        return;
      } finally {
        setIsLoading(false);
      }
    }
    fetchWeather();
  }, [location]);
  return { weather, isLoading, displayLocation, flag };
};

export default useFetchWeather;
