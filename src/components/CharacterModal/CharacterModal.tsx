import { useGetCharacterByIdQuery } from '../../redux/API/charactersApi';
import closeIcon from '../../resources/close.svg';
import { Loader } from '../Loader/Loader';
import styles from './CharacterModal.module.scss';

interface ModalProps {
  onClose: () => void;
  characterId: number | null;
}

export const CardModal = (props: ModalProps) => {
  const { data, isFetching } = useGetCharacterByIdQuery(props.characterId);

  return (
    <>
      <div className={styles.overlay} onClick={props.onClose}></div>
      <div className={styles.modal}>
        {isFetching && <Loader />}
        {!isFetching && (
          <>
            <img
              className={styles.close}
              src={closeIcon}
              alt="close"
              title="Close"
              onClick={props.onClose}
            />
            <h3 className={styles.name}>{data?.name}</h3>
            <img className={styles.image} src={data?.image} alt={data?.name} />
            <div className={styles.description}>
              <p className={styles.description_param}>ID: {data?.id}</p>
              <p className={styles.description_param}>Status: {data?.status}</p>
              <p className={styles.description_param}>Species: {data?.species}</p>
              <p className={styles.description_param}>Type: {data?.type}</p>
              <p className={styles.description_param}>Gender: {data?.gender}</p>
              <p className={styles.description_param}>Origin: {data?.origin.name}</p>
              <p className={styles.description_param}>Location: {data?.location.name}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
