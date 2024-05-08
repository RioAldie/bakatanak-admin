import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/dashboard/course/course.module.css';
import { getConsults, getCourses } from '@/app/lib/data';
import { deleteCourse } from '@/app/lib/action';
import ConsultItem from '@/app/ui/dashboard/consult/courseItem';

const ConsultPage = async () => {
  const consults = await getConsults();

  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Prob</td>
            <td>Talent</td>
            <td>Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {consults?.map((consult, i) => (
            <ConsultItem
              key={i}
              name={consult?.name}
              prob={consult.prob}
              talent={consult.talent}
              date={consult.date}
            />
          ))}
        </tbody>
      </table>
      {/* <Pagination count={count} /> */}
    </div>
  );
};

export default ConsultPage;
