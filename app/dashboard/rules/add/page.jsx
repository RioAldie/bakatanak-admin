'use client';

import { addCourse, addIndicator, addRule } from '@/app/lib/action';
import styles from './addForm.module.css';
import { useFormState } from 'react-dom';

const AddIndicatorPage = ({ userId }) => {
  const [state, formAction] = useFormState(addRule, undefined);

  return (
    <div className={styles.section}>
      <form action={formAction} className={styles.container}>
        <h1>Add New Rule</h1>
        <input
          type="text"
          name="combine"
          placeholder="rule combine"
        />
        <input type="text" name="code" placeholder="code" />
        <input type="text" name="value" placeholder="CF value" />
        <button>Add</button>
        {state?.error}
      </form>
    </div>
  );
};

export default AddIndicatorPage;
