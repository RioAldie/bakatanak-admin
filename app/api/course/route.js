import { Axios } from 'axios';

export const getData = async () => {
  const res = await fetch(
    'https://bakatanak-server.vercel.app/course',
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const { data } = await res.json();
  return data;
};

export const postNewCourse = async () => {};

export const deleteCourse = async () => {
  const res = await Axios.delete(
    'https://bakatanak-server.vercel.app/course'
  );
  return res;
};
