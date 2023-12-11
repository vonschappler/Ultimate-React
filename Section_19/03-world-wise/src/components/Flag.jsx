import styles from './Flag.module.css';
import { useConvertToFlag } from '../hooks/useConvertToFlag';

function Flag({ code }) {
  const displayFlag = useConvertToFlag(code);
  return <span className={styles.flag}>{displayFlag}</span>;
}

export default Flag;
