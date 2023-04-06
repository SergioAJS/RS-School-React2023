import { useContext } from 'react';
import { useCards } from '../../hooks/useCards';
import closeIcon from '../../resources/close.svg';
import styles from './CardModal.module.scss';
import { CardContext } from '../../Context/Context';

interface ModalProps {
  onClose: () => void;
}

export const CardModal = ({ onClose }: ModalProps) => {
  const { characters } = useCards();
  const { characterId } = useContext(CardContext);

  if (!characters || !characterId) {
    return <></>;
  }

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <img className={styles.close} src={closeIcon} alt="close" title="Close" onClick={onClose} />
        <h3 className={styles.name}>{characters[characterId - 1].name}</h3>
        <img
          className={styles.image}
          src={characters[characterId - 1].image}
          alt={characters[characterId - 1].name}
        />
        <div className={styles.description}>
          <p className={styles.status}>ID: {characters[characterId - 1].id}</p>
          <p className={styles.status}>Status: {characters[characterId - 1].status}</p>
          <p className={styles.species}>Species: {characters[characterId - 1].species}</p>
          <p className={styles.type}>Type: {characters[characterId - 1].type}</p>
          <p className={styles.gender}>Gender: {characters[characterId - 1].gender}</p>
          <p className={styles.origin}>Origin: {characters[characterId - 1].origin.name}</p>
          <p className={styles.location}>Location: {characters[characterId - 1].location.name}</p>
        </div>
      </div>
    </>
  );
};
