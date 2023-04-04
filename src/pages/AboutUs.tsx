import { Link } from 'react-router-dom';
import { ClassHeader } from '../components/Header/Header';
import styles from '../pages/AboutUs.module.scss';

export const AboutUs: () => JSX.Element = () => {
  return (
    <div className={styles.about}>
      <ClassHeader />
      <h1 className={styles.heading}>About Us</h1>
      <Link className={styles.link__home} to="/">
        <button className={styles.button}>To Home Page</button>
      </Link>
    </div>
  );
};
