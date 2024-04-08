'use client';

import { addFactor } from '@/app/lib/action';
import styles from './addForm.module.css';
import { useFormState } from 'react-dom';

const AddIndicatorPage = () => {
  const [state, formAction] = useFormState(addFactor, undefined);

  return (
    <div className={styles.section}>
      <form action={formAction} className={styles.container}>
        <h1>Add New Certainty Factor</h1>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="value" placeholder="value" />
        <button>Add</button>
        {state?.error}
      </form>
    </div>
  );
};

export default AddIndicatorPage;
