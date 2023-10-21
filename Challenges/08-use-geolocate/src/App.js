import { useState, useEffect } from 'react';

function useGeolocation(value) {
  const [position, setPosition] = useState(value)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  if (!value) setPosition({})
  const { lat, lng } = position;
  
  useEffect(function () {
    
  }, [])

  if (!navigator.geolocation)
    return setError('Your browser does not support geolocation');

  return {setPosition, lat, lng, position, error, setError, isLoading, setIsLoading}
}

export default function App() {
  const [countClicks, setCountClicks] = useState(0);
  
  const {setPosition, lat, lng, error, setError, isLoading,setIsLoading} = useGeolocation({})

  function getPosition() {
    setCountClicks((count) => count + 1);

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return (
    <div>
      <button onClick={getPosition} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
