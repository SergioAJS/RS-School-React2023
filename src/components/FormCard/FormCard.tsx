import { IFormCardData } from '../../models/IFormCardData';
import { Packages } from '../../models/Packages';
import styles from './FormCard.module.scss';

interface FormCardProps {
  formData: IFormCardData | null;
}

export const FormCard = (props: FormCardProps) => {
  const renderPackage = (packages: Packages[]) =>
    packages.map((packageOption: Packages, index) => (
      <p className={styles.package} key={index}>
        {packageOption}{' '}
      </p>
    ));

  if (!props.formData) {
    return null;
  }

  return (
    <>
      <div className={styles.form_card} data-cy="form-card">
        <h3 className={styles.name}>Name: {props.formData.firstName}</h3>
        <img className={styles.image} src={props.formData.imageFile} alt={'your image'} />
        <div className={styles.description}>
          <p className={styles.description_param}>Country: {props.formData.country}</p>
          <p className={styles.description_param}>Delivery date: {props.formData.deliveryDate}</p>
          <div className={styles.description_package}>
            Package options: {renderPackage(props.formData.packageOption)}
          </div>
          <p className={styles.description_param}>Payment type: {props.formData.payment}</p>
        </div>
      </div>
    </>
  );
};
