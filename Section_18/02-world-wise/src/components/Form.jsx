import { useEffect, useState } from 'react';
import Button from './Button';
import styles from './Form.module.css';
import BackButton from './BackButton';
import Message from './Message'
import Spinner from './Spinner'
import { useUrlPosition } from '../hooks/useURLPosition';
import Flag from './Flag';

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

function convertToFlag(code) {
  const codePoints = code
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [lat, lng] = useUrlPosition();
  const [emoji, setEmoji] = useState('');
  const [geoDataError, setGeoDataError] = useState('')

  const [isLoadingGeoData, setIsLoadingGeoData] = useState(false);

  useEffect(
    function () {
      async function fetchCityData() {
        try {
          setIsLoadingGeoData(true);
          setGeoDataError('')
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          console.log(data.countryCode)

          
          if (!data.countryCode)
            throw new Error(
              `The selected location does not seem to be a city! Please select a diferent location.`
            );
          
          setCityName(data.city || data.locality || '');
          setCountry(data.countryName);
          setEmoji(data.countryCode);
        } catch (err) {
          console.log(err)
          setGeoDataError(err.message)
        } finally {
          setIsLoadingGeoData(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  if (isLoadingGeoData) return <Spinner />

  if(geoDataError) return <Message message={geoDataError} />

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor='cityName'>{cityName}</label>
        <input
          id='cityName'
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}><Flag code={convertToFlag(emoji) }/></span>
      </div>

      <div className={styles.row}>
        <label htmlFor='date'>When did you go to {cityName}?</label>
        <input
          id='date'
          onChange={(e) => setDate(e.target.value)}
          value={date}
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
