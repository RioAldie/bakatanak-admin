import React from 'react';
import styles from './consult.module.css';
import Image from 'next/image';
import Link from 'next/link';

const ConsultItem = (props) => {
  const { name, prob, talent, school, date, id } = props;

  const formattedPercentage = (prob * 100).toFixed(2) + '%';
  return (
    <tr>
      <td>
        <div className={styles.user}>
          <Image
            src="/noavatar.png"
            alt=""
            width={40}
            height={40}
            className={styles.userImage}
          />
          {name}
        </div>
      </td>
      <td>
        <span className={`${styles.status} ${styles.cancelled}`}>
          {formattedPercentage}
        </span>
      </td>
      <td>{date?.toString().slice(4, 16)}</td>
      <td>{talent}</td>
      <td>
        <div className={styles.buttons}>
          <Link href={`#`}>
            <button className={`${styles.button} ${styles.view}`}>
              View
            </button>
          </Link>
          <form>
            <input type="hidden" name="id" value={id} />
            <button className={`${styles.button} ${styles.delete}`}>
              Delete
            </button>
          </form>
        </div>
      </td>
    </tr>
  );
};

export default ConsultItem;
