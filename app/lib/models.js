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
const indicatorSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      maxlengh: 25,
      required: true,
    },
    title: {
      type: String,
      maxlengh: 125,
      required: true,
    },
  },
  { timestamps: true }
);
const factorSchema = new mongoose.Schema(
  {
    value: {
      type: String,
      maxlengh: 25,
      required: true,
    },
    name: {
      type: String,
      maxlengh: 125,
      required: true,
    },
  },
  { timestamps: true }
);
const ruleSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      maxlengh: 25,
      required: true,
    },
    combine: {
      type: String,
      maxlengh: 125,
      required: true,
    },
    value: {
      type: String,
      maxlengh: 125,
      required: true,
    },
  },
  { timestamps: true }
);
export const Course =
  mongoose.models?.Course || mongoose.model('Course', courseSchema);
export const Talent =
  mongoose.models?.Talent || mongoose.model('Talent', talentSchema);
export const Indicator =
  mongoose.models?.Indicator ||
  mongoose.model('Indicator', indicatorSchema);
export const Factor =
  mongoose.models?.Factor || mongoose.model('Factor', factorSchema);
export const Rule =
  mongoose.models?.Rule || mongoose.model('Rule', ruleSchema);
