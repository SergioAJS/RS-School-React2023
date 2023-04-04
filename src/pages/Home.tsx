import { Component, ReactNode } from 'react';
import { SearchInput } from '../components/SearchInput/SearchInput';
import { ClassHeader } from '../components/Header/Header';
import styles from '../pages/Home.module.scss';
import { Cards } from '../components/Cards/Cards';

export class Home extends Component {
  render(): ReactNode {
    return (
      <div className={styles.home}>
        <ClassHeader />
        <SearchInput />
        <Cards />
      </div>
    );
  }
}
