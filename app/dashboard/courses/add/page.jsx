'use client';

import { addCourse } from '@/app/lib/action';
import styles from './addForm.module.css';
import { useFormState } from 'react-dom';

const AddCoursePage = () => {
  const [state, formAction] = useFormState(addCourse, undefined);

  return (
    <div className={styles.section}>
      <form action={formAction} className={styles.container}>
        <h1>Add New Course</h1>
        <input type="text" name="name" placeholder="name" />
        <select name="category" id="cars">
          <option className={styles.option} value="H01">
            Bakat Akademik Khusus
          </option>
          <option className={styles.option} value="H02">
            Bakat Kreatif Produktif
          </option>
          <option className={styles.option} value="H03">
            Bakat Seni
          </option>
          <option className={styles.option} value="H04">
            Bakat Kinestik/Psikomotorik
          </option>
          <option className={styles.option} value="H05">
            Bakat Sosial
          </option>
          <option className={styles.option} value="H06">
            Bakat Kepemimpinan
          </option>
        </select>
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
