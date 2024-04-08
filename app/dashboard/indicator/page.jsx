import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/dashboard/course/course.module.css';

import { courses, getIndicators, talents } from '@/app/lib/data';
import { deleteIndicator } from '@/app/lib/action';

const IndicatorPage = async ({ searchParams }) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  //   const { count, products } = await fetchProducts(q, page);
  const dataCourse = talents;
  const indicators = await getIndicators();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/indicator/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Code</td>
            <td>Title</td>
            <td>Created At</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {indicators?.map((indicator) => (
            <tr key={indicator._id}>
              <td className={styles.desc}>{indicator.code}</td>
              {/* <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td> */}
              <td>{indicator.title}</td>
              <td>{indicator.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                  <form action={deleteIndicator}>
                    <input
                      type="hidden"
                      name="id"
                      value={indicator.id}
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

export default IndicatorPage;
