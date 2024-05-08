import {
  Consult,
  Course,
  Factor,
  Indicator,
  Rule,
  Talent,
} from './models';
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
export const getFactors = async () => {
  try {
    connectToDb();
    const factors = await Factor.find();
    return factors;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch factors!');
  }
};
export const getRules = async () => {
  try {
    connectToDb();
    const rules = await Rule.find();
    return rules;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch rules!');
  }
};
export const getConsults = async () => {
  try {
    connectToDb();
    const consults = await Consult.find();
    return consults;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch Consults!');
  }
};
