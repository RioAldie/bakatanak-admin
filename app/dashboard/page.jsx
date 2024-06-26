import styles from '@/app/ui/dashboard/dashboard.module.css';

import CardList from '../ui/dashboard/card/cardList';
import Consults from '../ui/dashboard/consult/consults';
import ConsultDisplay from '../ui/dashboard/consult/consultDisplay';
import { Toaster } from 'sonner';

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Toaster />
        <CardList />
        <ConsultDisplay />
      </div>
      <div className={styles.side}></div>
    </div>
  );
};

export default Page;
