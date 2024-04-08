import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/dashboard/course/course.module.css';

import { courses, getRules, talents } from '@/app/lib/data';

const RulesPage = async ({ searchParams }) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  //   const { count, products } = await fetchProducts(q, page);
  const rules = await getRules();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/rules/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Hipotesa</td>
            <td>Rule Combine</td>
            <td>CF Value</td>
            <td>Create At</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule) => (
            <tr key={rule._id}>
              <td>{rule.code}</td>
              <td>
                <div className={styles.product}>{rule.combine}</div>
              </td>
              <td>{rule.value}</td>
              <td>{rule.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                  <form>
                    <input type="hidden" name="id" value={rule.id} />
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
