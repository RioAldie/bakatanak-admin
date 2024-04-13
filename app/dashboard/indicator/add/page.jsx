'use client';

import { addIndicator } from '@/app/lib/action';
import styles from './addForm.module.css';
import { useFormState } from 'react-dom';

const AddIndicatorPage = () => {
  const [state, formAction] = useFormState(addIndicator, undefined);

  return (
    <div className={styles.section}>
      <form action={formAction} className={styles.container}>
        <h1>Add New Indicator</h1>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="code" placeholder="code" />
        <button>Add</button>
        {state?.error}
      </form>
    </div>
  );
};

export default AddIndicatorPage;
