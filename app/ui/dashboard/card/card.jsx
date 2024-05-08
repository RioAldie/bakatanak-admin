import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';

const Card = ({ length, name }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{name}</span>
        <span className={styles.number}>{length}</span>
      </div>
    </div>
  );
};

export default Card;
