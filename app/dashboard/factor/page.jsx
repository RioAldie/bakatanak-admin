import Link from 'next/link';
import styles from '@/app/ui/dashboard/course/course.module.css';

import { getFactors } from '@/app/lib/data';

const FactorPage = async () => {
  // const q = searchParams?.q || '';
  // const page = searchParams?.page || 1;
  //   const { count, products } = await fetchProducts(q, page);
  const factors = await getFactors();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/factor/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>CF Value</td>
            <td>Create At</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {factors?.map((factor) => (
            <tr key={factor._id}>
              <td>{factor.name}</td>
              <td>
                <div className={styles.product}>{factor.value}</div>
              </td>
              <td>{factor.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                  <form>
                    <input
                      type="hidden"
                      name="id"
                      value={factor.id}
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

export default FactorPage;
