'use server';
import { revalidatePath } from 'next/cache';
import { Course } from './models';
import { connectToDb } from './utils';

export const addCourse = async (prevState, formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { name, desc, image } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newCousre = new Course({
      name,
      desc,
      image,
    });

    await newCousre.save();
    console.log('saved to db');
    revalidatePath('/dashboard');
    revalidatePath('/courses');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};
export const deleteCourse = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Course.findByIdAndDelete(id);
    console.log('deleted from db');
    revalidatePath('/course');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};
