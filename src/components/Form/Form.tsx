import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Countries } from '../../models/Countries';
import { IFormCardData } from '../../models/IFormCardData';
import { IFormData } from '../../models/IFormData';
import { Packages } from '../../models/Packages';
import { Payments } from '../../models/Payments';
import { enumToArray } from '../../utils/enumToArray';
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
        packageOption: data.packageOption,
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
    enumToArray(Countries).map((country, index) => {
      return (
        <option value={country} key={index}>
          {country}
        </option>
      );
    });

  const renderPackaging = () =>
    enumToArray(Packages).map((packageType, index) => {
      return (
        <div key={index} className={styles.multiselect}>
          <label htmlFor={packageType} className={styles.label}>
            {packageType}
          </label>
          <input
            {...register('packageOption', { required: 'Please choose package type' })}
            type="checkbox"
            id={packageType}
            className={styles.input}
            value={packageType}
            data-cy="checkbox"
          />
        </div>
      );
    });

  const renderPayments = () =>
    enumToArray(Payments).map((payment, index) => {
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
            data-cy="radio"
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
            <h3 className={styles.submitted} data-cy="submit-message">
              Submitted successfully
            </h3>
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
                data-cy="name"
              />
              {errors.firstName && (
                <p className={styles.error} data-cy="required">
                  {errors.firstName.message}
                </p>
              )}
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
                data-cy="date"
              />
              {errors.deliveryDate && (
                <p className={styles.error} data-cy="required">
                  {errors.deliveryDate.message}
                </p>
              )}
            </div>

            <div className={styles.input_instance}>
              <label htmlFor="country" className={styles.label}>
                Country
              </label>
              <select
                id="country"
                className={styles.input}
                {...register('country', { required: 'Please choose country' })}
                data-cy="country"
              >
                <option value="" hidden>
                  Select Country
                </option>
                {renderCountries()}
              </select>
              {errors.country && (
                <p className={styles.error} data-cy="required">
                  {errors.country.message}
                </p>
              )}
            </div>
          </div>

          <div className={styles.input_block}>
            <div className={styles.input_instance}>
              <p className={styles.label}>Packaging options</p>
              <div className={styles.payment}>{renderPackaging()}</div>
              {errors.packageOption && (
                <p className={styles.error} data-cy="required">
                  {errors.packageOption.message}
                </p>
              )}
            </div>

            <div className={styles.input_instance}>
              <p className={styles.label}>Payment</p>
              <div className={styles.payment}>{renderPayments()}</div>
              {errors.payment && (
                <p className={styles.error} data-cy="required">
                  {errors.payment.message}
                </p>
              )}
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
                data-cy="image"
              />
              {errors.imageFile && (
                <p className={styles.error} data-cy="required">
                  {errors.imageFile.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <input type="submit" value={'Submit'} className={styles.submit} data-cy="submit" />
      </form>
    </>
  );
};
