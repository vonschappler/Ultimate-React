import { useEffect, useState } from 'react';
import useFetchWeather from './hooks/useFetchWeather';
import Input from './components/Input';
import Weather from './components/Weather';

function App() {
  const [location, setLocation] = useState('');
  const { displayLocation, flag, isLoading, weather } =
    useFetchWeather(location);

  useEffect(() => {
    setLocation(localStorage.getItem('location'));
  }, [setLocation]);

  return (
    <div className='app'>
      <h1>Functionally Weather</h1>
      <Input location={location} setLocation={setLocation} />
      {isLoading && <p className='loader'>Loading data...</p>}
      {weather ? (
        <Weather
          location={location}
          weather={weather}
          displayLocation={displayLocation}
          flag={flag}
        />
      ) : (
        <p>No data to be displayed</p>
      )}
    </div>
  );
}

export default App;
