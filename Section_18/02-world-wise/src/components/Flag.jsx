import styles from './Flag.module.css';

function Flag({ code }) {
  return <span className={styles.flag}>{code}</span>;
}

export default Flag;
