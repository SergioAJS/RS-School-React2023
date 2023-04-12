import { IFormCardData } from '../../models/IFormCardData';
import styles from './FormCard.module.scss';

interface FormCardProps {
  formData: IFormCardData | null;
}

export const FormCard = ({ formData }: FormCardProps) => {
  if (!formData) {
    return <></>;
  }

  const renderPackage = () =>
    formData.package.map((item, index) => (
      <p className={styles.package} key={index}>
        {item}{' '}
      </p>
    ));

  return (
    <>
      <div className={styles.form_card}>
        <h3 className={styles.name}>Name: {formData.firstName}</h3>
        <img className={styles.image} src={formData.imageFile} alt={'your image'} />
        <div className={styles.description}>
          <p className={styles.description_param}>Country: {formData.country}</p>
          <p className={styles.description_param}>Delivery date: {formData.deliveryDate}</p>
          <div className={styles.description_package}>Package options: {renderPackage()}</div>
          <p className={styles.description_param}>Payment type: {formData.payment}</p>
        </div>
      </div>
    </>
  );
};
