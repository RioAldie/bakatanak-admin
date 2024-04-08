import { Course, Indicator, Talent } from './models';
import { connectToDb } from './utils';

export const cards = [
  {
    id: 1,
    title: 'Total Users',
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: 'Stock',
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: 'Revenue',
    number: 6.642,
    change: 18,
  },
];
export const courses = [
  {
    _id: '65e9c83addfd9fae4ed990a5',
    name: 'Sepak Bola',
    category: ['1'],
    image:
      'https://images.unsplash.com/photo-1600077063877-22118d6290eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    __v: 0,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    createdAt: '22-Januari-2024',
    category: ['Atletik'],
  },
  {
    _id: '65e9c8bbddfd9fae4ed990a7',
    name: 'Bola Basket',
    category: ['1'],
    image:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    __v: 0,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    createdAt: '22-Januari-2024',
    category: ['Atletik'],
  },
  {
    _id: '65e9c8e3ddfd9fae4ed990a9',
    name: 'Kursus Menyanyi',
    category: ['1'],
    image:
      'https://images.unsplash.com/photo-1531651008558-ed1740375b39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    __v: 0,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    createdAt: '22-Januari-2024',
    category: ['Atletik'],
  },
  {
    _id: '65e9c9f8ddfd9fae4ed990ac',
    name: 'Kursus Gitar',
    category: ['1'],
    image:
      'https://images.unsplash.com/photo-1442819516624-aa7a9bd24b63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3VpdGFyJTIwa2lkfGVufDB8fDB8fHww',
    __v: 0,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    createdAt: '22-Januari-2024',
    category: ['Atletik'],
  },
  {
    _id: '65e9ca24ddfd9fae4ed990ae',
    name: 'Kursus Piano',
    category: ['1'],
    image:
      'https://unsplash.com/photos/a-young-girl-is-playing-a-piano-in-a-room-Wo2x2RXS60A',
    __v: 0,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    createdAt: '22-Januari-2024',
    category: ['Atletik'],
  },
  {
    _id: '65e9cadeddfd9fae4ed990b9',
    name: 'Pelatihan Coding',
    category: ['1'],
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww',
    __v: 0,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    createdAt: '22-Januari-2024',
    category: ['Atletik'],
  },
  {
    _id: '65e9cb1addfd9fae4ed990bb',
    name: 'Kursus Matematika',
    category: ['1'],
    image:
      'https://unsplash.com/photos/a-chalkboard-with-some-writing-on-it-gYrYa37fAKI',
    __v: 0,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    createdAt: '22-Januari-2024',
    category: ['Atletik'],
  },
];
export const talents = [
  {
    _id: '65b309241cbab6450fac2f29',
    code: 'H01',
    name: 'Bakat Akademik Khusus',
  },
  {
    _id: '65b309241cbab6450fac2f2a',
    code: 'H02',
    name: 'Bakat Kreatif Produktif',
  },
  {
    _id: '65b309241cbab6450fac2f2b',
    code: 'H03',
    name: 'Bakat Seni',
  },
  {
    _id: '65b309241cbab6450fac2f2c',
    code: 'H04',
    name: 'Bakat Kinestetik/Psikomotorik',
  },
  {
    _id: '65b309241cbab6450fac2f2d',
    code: 'H05',
    name: 'Bakat Sosial',
  },
  {
    _id: '65b309241cbab6450fac2f2e',
    code: 'H06',
    name: 'Bakat Kepemimpinan',
  },
];

export const getCourses = async () => {
  try {
    connectToDb();
    const courses = await Course.find();
    return courses;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch Courses!');
  }
};
export const getTalents = async () => {
  try {
    connectToDb();
    const talents = await Talent.find();
    return talents;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch talents!');
  }
};
export const getIndicators = async () => {
  try {
    connectToDb();
    const indicators = await Indicator.find();
    return indicators;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch indicators!');
  }
};
