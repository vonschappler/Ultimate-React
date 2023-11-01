import { Link } from 'react-router-dom';
import styles from './CityItem.module.css'
import Flag from './Flag';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id } = city

  return (
    <li>
      <Link className={styles.cityItem} to={`${id}`}>
        <Flag code={emoji} />
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem
