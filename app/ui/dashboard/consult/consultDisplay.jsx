import { getConsults } from '@/app/lib/data';
import styles from './consult.module.css';
import Image from 'next/image';

const ConsultDisplay = async () => {
  const consults = await getConsults();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Konsultasi Terbaru</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Prob</td>
            <td>Date</td>
            <td>Talent</td>
          </tr>
        </thead>
        <tbody>
          {consults
            .slice()
            .reverse()
            .map((consult, i) => {
              return (
                <tr key={i}>
                  <td>
                    <div className={styles.user}>
                      <Image
                        src="/noavatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}
                      />
                      {consult.name}
                    </div>
                  </td>
                  <td>
                    <span
                      className={`${styles.status} ${styles.cancelled}`}>
                      {(consult.prob * 100).toFixed(2) + '%'}
                    </span>
                  </td>
                  <td>{consult.date?.toString().slice(4, 16)}</td>
                  <td>{consult.talent}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultDisplay;
