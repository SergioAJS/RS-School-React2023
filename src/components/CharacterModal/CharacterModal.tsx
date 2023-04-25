import { useEffect } from 'react';

import { useAppDispatchThunks, useAppSelectorThunks } from '../../hooks/hooks';
import { fetchCharacter } from '../../redux/API/charactersApiThunks';
import closeIcon from '../../resources/close.svg';
import { Loader } from '../Loader/Loader';
import styles from './CharacterModal.module.scss';

interface ModalProps {
  onClose: () => void;
}

export const CardModal = (props: ModalProps) => {
  const dispatch = useAppDispatchThunks();
  const characterId = useAppSelectorThunks((store) => store.searchCharacter.characterId);
  const { character, isLoadingChar } = useAppSelectorThunks((store) => store.characterCards);

  useEffect(() => {
    dispatch(fetchCharacter(characterId));
  }, [characterId, dispatch]);

  return (
    <>
      <div className={styles.overlay} onClick={props.onClose}></div>
      <div className={styles.modal} data-cy="modal">
        {isLoadingChar && <Loader />}
        {!isLoadingChar && (
          <>
            <img
              className={styles.close}
              src={closeIcon}
              alt="close"
              title="Close"
              onClick={props.onClose}
              data-cy="close"
            />
            <h3 className={styles.name}>{character?.name}</h3>
            <img className={styles.image} src={character?.image} alt={character?.name} />
            <div className={styles.description}>
              <p className={styles.description_param}>ID: {character?.id}</p>
              <p className={styles.description_param}>Status: {character?.status}</p>
              <p className={styles.description_param}>Species: {character?.species}</p>
              <p className={styles.description_param}>Type: {character?.type}</p>
              <p className={styles.description_param}>Gender: {character?.gender}</p>
              <p className={styles.description_param}>Origin: {character?.origin.name}</p>
              <p className={styles.description_param}>Location: {character?.location.name}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
