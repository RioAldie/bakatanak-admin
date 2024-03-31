import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/dashboard/course/course.module.css';

import { courses } from '@/app/lib/data';

const CoursesPage = ({ searchParams }) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  //   const { count, products } = await fetchProducts(q, page);
  const dataCourse = courses;
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
            <td>Title</td>
            <td>Description</td>
            <td>Category</td>
            <td>Created At</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {dataCourse.map((course) => (
            <tr key={course._id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={course.image || '/noproduct.jpg'}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {course.name}
                </div>
              </td>
              <td className={styles.desc}>{course.desc}</td>
              {/* <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td> */}
              <td>{course.category}</td>
              <td>{course.createdAt}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${course.id}`}>
                    <button
                      className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
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

export default CoursesPage;
