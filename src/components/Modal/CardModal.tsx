import { useContext } from 'react';
import closeIcon from '../../resources/close.svg';
import { CardContext } from '../../Context/Context';
import { ICharacter } from '../../models/ICharacter';
import styles from './CardModal.module.scss';

interface ModalProps {
  onClose: () => void;
  modalCharacter: ICharacter | null;
}

export const CardModal = ({ onClose }: ModalProps) => {
  const { modalCharacter } = useContext(CardContext);

  if (!modalCharacter) {
    return <></>;
  }

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <img className={styles.close} src={closeIcon} alt="close" title="Close" onClick={onClose} />
        <h3 className={styles.name}>{modalCharacter.name}</h3>
        <img className={styles.image} src={modalCharacter.image} alt={modalCharacter.name} />
        <div className={styles.description}>
          <p className={styles.status}>ID: {modalCharacter.id}</p>
          <p className={styles.status}>Status: {modalCharacter.status}</p>
          <p className={styles.species}>Species: {modalCharacter.species}</p>
          <p className={styles.type}>Type: {modalCharacter.type}</p>
          <p className={styles.gender}>Gender: {modalCharacter.gender}</p>
          <p className={styles.origin}>Origin: {modalCharacter.origin.name}</p>
          <p className={styles.location}>Location: {modalCharacter.location.name}</p>
        </div>
      </div>
    </>
  );
};
