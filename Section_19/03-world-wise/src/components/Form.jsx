import styles from './Form.module.css';
import 'react-datepicker/dist/react-datepicker.css';

import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Button from './Button';
import BackButton from './BackButton';
import Message from './Message';
import Spinner from './Spinner';
import { useUrlPosition } from '../hooks/useURLPosition';
import Flag from './Flag';
import { useCities } from '../contexts/CitiesContext';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

function Form() {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [lat, lng] = useUrlPosition();
  const { addCity, isLoading } = useCities();
  const [emoji, setEmoji] = useState('');
  const [geoDataError, setGeoDataError] = useState('');
  const navigate = useNavigate();

  const [isLoadingGeoData, setIsLoadingGeoData] = useState(false);

  useEffect(
    function () {
      if (!lat && !lng) return;
      async function fetchCityData() {
        try {
          setIsLoadingGeoData(true);
          setGeoDataError('');
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          console.log(data.countryCode);

          if (!data.countryCode)
            throw new Error(
              `The selected location does not seem to be a city! Please select a diferent location.`
            );

          setCityName(data.city || data.locality || '');
          setCountry(data.countryName);
          setEmoji(data.countryCode);
        } catch (err) {
          console.log(err);
          setGeoDataError(err.message);
        } finally {
          setIsLoadingGeoData(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
    await addCity(newCity);
    navigate('/app/cities');
  }

  if (isLoadingGeoData) return <Spinner />;

  if (!lat && !lng)
    return <Message message={`Start by clicking on the map!`} />;

  if (geoDataError) return <Message message={geoDataError} />;

  return (
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ''}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor='cityName'>{cityName}</label>
        <input
          id='cityName'
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>
          <Flag code={emoji} />
        </span>
      </div>

      <div className={styles.row}>
        <label htmlFor='date'>When did you go to {cityName}?</label>
        <DatePicker
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat='dd/MM/yyyy'
          id='date'
        />
      </div>

      <div className={styles.row}>
        <label htmlFor='notes'>Notes about your trip to {cityName}</label>
        <textarea
          id='notes'
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type='primary'>Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
