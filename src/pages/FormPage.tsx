import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { FormCard } from '../components/FormCard/FormCard';
import { Header } from '../components/Header/Header';
import styles from './FormPage.module.scss';

export const FormPage: () => JSX.Element = () => {
  const [data, setData] = useState({
    name: '',
    music: false,
    movie: false,
    sex: '',
  });

  const updateData = (value: string, music: boolean, movie: boolean, sex: string) => {
    setData({ name: value, music: music, movie: movie, sex: sex });
  };

  return (
    <div className={styles.form__page}>
      <Header />
      <Form updateData={updateData} />
      <FormCard name={data.name} music={data.music} movie={data.movie} sex={data.sex} />
    </div>
  );
};
