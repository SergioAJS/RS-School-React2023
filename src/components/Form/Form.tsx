import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { countries } from '../../models/Countries';
import { IFormCardData } from '../../models/IFormCardData';
import { IFormData } from '../../models/IFormData';
import { packaging } from '../../models/Packages';
import { payments } from '../../models/Payments';
import styles from './Form.module.scss';

interface FormProps {
  handleFormSubmit: (newCard: IFormCardData[]) => void;
}

export const Form = (props: FormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormData>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const onSubmit = (data: IFormData) => {
    props.handleFormSubmit([
      {
        firstName: data.firstName,
        deliveryDate: data.deliveryDate,
        country: data.country,
        package: data.package,
        payment: data.payment,
        imageFile: URL.createObjectURL(data.imageFile![0]),
      },
    ]);
    reset();
  };

  const handleReset = () => {
    setIsSubmitSuccess(true);
    setTimeout(() => {
      setIsSubmitSuccess(false);
    }, 2000);
  };

  const renderCountries = () =>
    countries.map((country, index) => {
      return (
        <option value={country} key={index}>
          {country}
        </option>
      );
    });

  const renderPackaging = () =>
    packaging.map((packageType, index) => {
      return (
        <div key={index} className={styles.multiselect}>
          <label htmlFor={packageType} className={styles.label}>
            {packageType}
          </label>
          <input
            {...register('package', { required: 'Please choose package type' })}
            type="checkbox"
            id={packageType}
            className={styles.input}
            value={packageType}
          />
        </div>
      );
    });

  const renderPayments = () =>
    payments.map((payment, index) => {
      return (
        <div key={index} className={styles.multiselect}>
          <label htmlFor={payment} className={styles.label}>
            {payment}
          </label>
          <input
            type="radio"
            id={payment}
            className={styles.input}
            value={payment}
            {...register('payment', { required: 'Please choose payment method' })}
          />
        </div>
      );
    });

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} onReset={handleReset}>
        {isSubmitSuccess && (
          <>
            <div className={styles.overlay}></div>
            <h3 className={styles.submitted}>Submitted successfully</h3>
          </>
        )}
        <div className={styles.inputs}>
          <div className={styles.input_block}>
            <div className={styles.input_instance}>
              <label htmlFor="firstName" className={styles.label}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className={styles.input}
                placeholder="Name"
                {...register('firstName', {
                  required: 'Required Field',
                  pattern: {
                    value: /^[A-ZА-Я]/,
                    message: 'Name should start from uppercase letter',
                  },
                })}
              />
              {errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}
            </div>

            <div className={styles.input_instance}>
              <label htmlFor="deliveryDate" className={styles.label}>
                Choose delivery date
              </label>
              <input
                type="date"
                id="deliveryDate"
                min={new Date().toISOString().split('T')[0]}
                className={styles.input}
                {...register('deliveryDate', {
                  required: 'Required Field',
                })}
              />
              {errors.deliveryDate && <p className={styles.error}>{errors.deliveryDate.message}</p>}
            </div>

            <div className={styles.input_instance}>
              <label htmlFor="country" className={styles.label}>
                Country
              </label>
              <select
                id="country"
                className={styles.input}
                {...register('country', { required: 'Please choose country' })}
              >
                <option value="" hidden>
                  Select Country
                </option>
                {renderCountries()}
              </select>
              {errors.country && <p className={styles.error}>{errors.country.message}</p>}
            </div>
          </div>

          <div className={styles.input_block}>
            <div className={styles.input_instance}>
              <p className={styles.label}>Packaging options</p>
              <div className={styles.payment}>{renderPackaging()}</div>
              {errors.package && <p className={styles.error}>{errors.package.message}</p>}
            </div>

            <div className={styles.input_instance}>
              <p className={styles.label}>Payment</p>
              <div className={styles.payment}>{renderPayments()}</div>
              {errors.payment && <p className={styles.error}>{errors.payment.message}</p>}
            </div>

            <div className={styles.input_instance}>
              <label htmlFor="imageFile" className={styles.label}>
                Upload an image
              </label>
              <input
                type="file"
                id="imageFile"
                accept="image/png, image/jpg, image/gif, image/jpeg"
                className={styles.input}
                {...register('imageFile', { required: 'Please upload an image' })}
              />
              {errors.imageFile && <p className={styles.error}>{errors.imageFile.message}</p>}
            </div>
          </div>
        </div>

        <input type="submit" value={'Submit'} className={styles.submit} />
      </form>
    </>
  );
};
