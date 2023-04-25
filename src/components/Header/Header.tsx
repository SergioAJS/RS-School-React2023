import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.links__list}>
          <li className={styles.link__item}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? styles.link : isActive ? styles.link__active : styles.link
              }
              to="/"
              data-cy="home-link"
            >
              Home
            </NavLink>
          </li>
          <li className={styles.link__item}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? styles.link : isActive ? styles.link__active : styles.link
              }
              to="/Form"
              data-cy="form-link"
            >
              Form
            </NavLink>
          </li>
          <li className={styles.link__item}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? styles.link : isActive ? styles.link__active : styles.link
              }
              to="/AboutUs"
              data-cy="aboutUs-link"
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
