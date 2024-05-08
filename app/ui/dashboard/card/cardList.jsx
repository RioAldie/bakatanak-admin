import {
  cards,
  getCourses,
  getFactors,
  getIndicators,
  getTalents,
} from '@/app/lib/data';
import Card from './card';
import styles from '@/app/ui/dashboard/dashboard.module.css';

const CardList = async () => {
  const talent = await getTalents();
  const indicator = await getIndicators();
  const course = await getCourses();
  const factors = await getFactors();
  return (
    <div className={styles.cards}>
      <Card length={talent.length} name={'Minat Bakat'} />
      <Card length={indicator.length} name={'Indikator'} />
      <Card length={course.length} name={'Kursus'} />
      <Card length={factors.length} name={'Hipotesa'} />
    </div>
  );
};

export default CardList;
