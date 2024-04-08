import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/dashboard/course/course.module.css';

import { courses, talents } from '@/app/lib/data';

const RulesPage = ({ searchParams }) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  //   const { count, products } = await fetchProducts(q, page);
  const dataTalents = talents;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Code</td>
            <td>Name</td>
            <td>Description</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {dataTalents.map((course) => (
            <tr key={course._id}>
              <td>{course.code}</td>
              <td>
                <div className={styles.product}>{course.name}</div>
              </td>

              <td>
                <div className={styles.buttons}>
                  <form>
                    <input
                      type="hidden"
                      name="id"
                      value={course.id}
                    />
                    <button
                      className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination count={count} /> */}
    </div>
  );
};

export default RulesPage;
