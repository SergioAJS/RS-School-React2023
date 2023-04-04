import loader from '../../resources/loading.svg';
import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loader__container}>
      <img className={styles.loader} src={loader} alt="loading" />
    </div>
  );
};
