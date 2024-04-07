import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlengh: 125,
      required: true,
    },
    category: {
      type: Array,
    },
    image: {
      type: String,
      maxlengh: 25,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Course =
  mongoose.models?.Course || mongoose.model('Course', courseSchema);
