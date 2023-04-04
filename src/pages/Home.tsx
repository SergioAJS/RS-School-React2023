import { SearchInput } from '../components/SearchInput/SearchInput';
import { ClassHeader } from '../components/Header/Header';
import styles from '../pages/Home.module.scss';
import { Cards } from '../components/Cards/Cards';

export const Home: () => JSX.Element = () => {
  return (
    <div className={styles.home}>
      <ClassHeader />
      <SearchInput />
      <Cards />
    </div>
  );
};
