import React from 'react';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdLogout,
} from 'react-icons/md';
import MenuLink from '../menulink/menulink';
import styles from './sidebar.module.css';
import Image from 'next/image';
import { signOut } from '@/app/auth';

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Certainty Factor',
        path: '/dashboard/factor',
        icon: <MdWork />,
      },
      {
        title: 'Talents',
        path: '/dashboard/talents',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Course',
        path: '/dashboard/courses',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Indicator',
        path: '/dashboard/indicator',
        icon: <MdAttachMoney />,
      },
      {
        title: 'Hipotesis',
        path: '/dashboard/rules',
        icon: <MdAnalytics />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Consult',
        path: '/dashboard/consult',
        icon: <MdAnalytics />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={'/noavatar.png'}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Admin2</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}>
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
