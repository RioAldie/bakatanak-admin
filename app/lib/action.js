'use server';
import { revalidatePath } from 'next/cache';
import { Course, Factor, Indicator } from './models';
import { connectToDb } from './utils';

export const addCourse = async (prevState, formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { name, desc, image, category } =
    Object.fromEntries(formData);

  try {
    connectToDb();
    const newCousre = new Course({
      name,
      desc,
      image,
      category,
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

export const addIndicator = async (prevState, formData) => {
  const { title, code } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newIndicator = new Indicator({
      title,
      code,
    });

    await newIndicator.save();
    console.log('saved to db');
    revalidatePath('/dashboard');
    revalidatePath('/indicator');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};
export const deleteIndicator = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Indicator.findByIdAndDelete(id);
    console.log('deleted from db');
    revalidatePath('/indicator');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};
export const addFactor = async (prevState, formData) => {
  const { value, name } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newIndicator = new Factor({
      value,
      name,
    });

    await newIndicator.save();
    console.log('saved to db');
    revalidatePath('/dashboard');
    revalidatePath('/factor');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};
