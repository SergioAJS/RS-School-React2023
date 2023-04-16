import { Link } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <div className={styles.about}>
      <Header />
      <h1 className={styles.heading}>About Us</h1>
      <Link className={styles.link__home} to="/">
        <button className={styles.button}>To Home Page</button>
      </Link>
    </div>
  );
};
