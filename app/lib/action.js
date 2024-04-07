'use server';
import { revalidatePath } from 'next/cache';
import { Course } from './models';
import { connectToDb } from './utils';

export const deletePost = async (formData) => {
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
