import { useState } from 'react';
import { Form } from '../../components/Form/Form';
import { FormCard } from '../../components/FormCard/FormCard';
import { Header } from '../../components/Header/Header';
import { IFormCardData } from '../../models/IFormCardData';
import styles from './FormPage.module.scss';

export const FormPage = () => {
  const [formData, setFormData] = useState<IFormCardData[]>([]);

  const handleFormSubmit = (newCard: IFormCardData[]) => {
    setFormData([...formData, ...newCard]);
  };

  return (
    <div className={styles.form__page}>
      <Header />
      <Form
        handleFormSubmit={(newCard) => {
          handleFormSubmit(newCard);
        }}
      />
      <div className={styles.user_cards}>
        {formData.map((item, index) => {
          return <FormCard formData={item} key={index} />;
        })}
      </div>
    </div>
  );
};
