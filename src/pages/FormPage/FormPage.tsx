import { useState } from 'react';
import { Form } from '../../components/Form/Form';
import { FormCard } from '../../components/FormCard/FormCard';
import { Header } from '../../components/Header/Header';
import styles from './FormPage.module.scss';

export const FormPage: () => JSX.Element = () => {
  const [data, setData] = useState({
    name: '',
    music: false,
    movie: false,
    sex: '',
  });

  return (
    <div className={styles.form__page}>
      <Header />
      <Form />
      <FormCard name={data.name} music={data.music} movie={data.movie} sex={data.sex} />
    </div>
  );
};
