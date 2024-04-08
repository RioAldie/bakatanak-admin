import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlengh: 125,
      required: true,
    },
    category: {
      type: String,
      maxlengh: 25,
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

const talentSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      maxlengh: 25,
      required: true,
    },
    name: {
      type: String,
      maxlengh: 125,
      required: true,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Course =
  mongoose.models?.Course || mongoose.model('Course', courseSchema);
