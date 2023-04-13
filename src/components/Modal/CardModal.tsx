import { ICharacter } from '../../models/ICharacter';
import closeIcon from '../../resources/close.svg';
import styles from './CardModal.module.scss';

interface ModalProps {
  onClose: () => void;
  modalCharacter: ICharacter | null;
}

export const CardModal = (props: ModalProps) => {
  if (!props.modalCharacter) {
    return null;
  }

  return (
    <>
      <div className={styles.overlay} onClick={props.onClose}></div>
      <div className={styles.modal}>
        <img
          className={styles.close}
          src={closeIcon}
          alt="close"
          title="Close"
          onClick={props.onClose}
        />
        <h3 className={styles.name}>{props.modalCharacter.name}</h3>
        <img
          className={styles.image}
          src={props.modalCharacter.image}
          alt={props.modalCharacter.name}
        />
        <div className={styles.description}>
          <p className={styles.description_param}>ID: {props.modalCharacter.id}</p>
          <p className={styles.description_param}>Status: {props.modalCharacter.status}</p>
          <p className={styles.description_param}>Species: {props.modalCharacter.species}</p>
          <p className={styles.description_param}>Type: {props.modalCharacter.type}</p>
          <p className={styles.description_param}>Gender: {props.modalCharacter.gender}</p>
          <p className={styles.description_param}>Origin: {props.modalCharacter.origin.name}</p>
          <p className={styles.description_param}>Location: {props.modalCharacter.location.name}</p>
        </div>
      </div>
    </>
  );
};
