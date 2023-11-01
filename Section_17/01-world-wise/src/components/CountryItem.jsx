import styles from './CountryItem.module.css';
import Flag from './Flag';

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <Flag code={country.emoji} />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
