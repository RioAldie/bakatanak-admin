'use client';

import { addCourse } from '@/app/lib/action';
import styles from './addForm.module.css';
import { useFormState } from 'react-dom';

const AddCoursePage = ({ userId }) => {
  const [state, formAction] = useFormState(addCourse, undefined);

  return (
    <div className={styles.section}>
      <form action={formAction} className={styles.container}>
        <h1>Add New Course</h1>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="image" placeholder="image" />
        <textarea
          type="text"
          name="desc"
          placeholder="desc"
          rows={10}
        />
        <button>Add</button>
        {state?.error}
      </form>
    </div>
  );
};

export default AddCoursePage;
