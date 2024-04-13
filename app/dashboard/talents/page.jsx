import Link from 'next/link';
import styles from '@/app/ui/dashboard/course/course.module.css';

import { getTalents } from '@/app/lib/data';

const TalentsPage = async () => {
  //   const { count, products } = await fetchProducts(q, page);
  // const dataTalents = talents;
  const talents = await getTalents();

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
          {talents.map((talent) => (
            <tr key={talent._id}>
              <td>{talent.code}</td>
              <td>
                <div className={styles.product}>{talent.name}</div>
              </td>
              <td>Deskripsi</td>
              <td>
                <div className={styles.buttons}>
                  <form>
                    <input
                      type="hidden"
                      name="id"
                      value={talent.id}
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
    </div>
  );
};

export default TalentsPage;
