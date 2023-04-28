import { Form } from '../../components/Form/Form';
import { FormCard } from '../../components/FormCard/FormCard';
import { Header } from '../../components/Header/Header';
import { useAppDispatchThunks, useAppSelectorThunks } from '../../hooks/hooks';
import { IFormCardData } from '../../models/IFormCardData';
import { addNewCard } from '../../redux/slices/formPageSlice';
import styles from './FormPage.module.scss';

export const FormPage = () => {
  const dispatch = useAppDispatchThunks();
  const formCards = useAppSelectorThunks((store) => store.formPage.formCards);

  const handleFormSubmit = (newCard: IFormCardData[]) => {
    dispatch(addNewCard([...formCards, ...newCard]));
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
        {formCards.map((item, index) => {
          return <FormCard formData={item} key={index} />;
        })}
      </div>
    </div>
  );
};
