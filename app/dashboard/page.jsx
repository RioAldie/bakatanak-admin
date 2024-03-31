import styles from '@/app/ui/dashboard/dashboard.module.css';
import Card from '../ui/dashboard/card/card';
import { cards } from '../lib/data';
import Courses from '../ui/dashboard/course/course';
import Chart from '../ui/dashboard/chart/chart';

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Courses />
        <Chart />
      </div>
      <div className={styles.side}></div>
    </div>
  );
};

export default Page;
