import styles from './consult.module.css';
import { getConsults } from '@/app/lib/data';
import ConsultItem from './courseItem';

const Consults = async () => {
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
                <ConsultItem
                  key={i}
                  name={consult?.name}
                  prob={consult.prob}
                  talent={consult.talent}
                  date={consult.date}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Consults;
