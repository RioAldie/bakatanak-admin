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
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    maxlengh: 25,
    required: true,
  },
  email: {
    type: String,
    maxlengh: 125,
    required: true,
  },
  password: {
    type: String,
    maxlengh: 125,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  gender: {
    type: String,
    maxlengh: 25,
  },
  age: {
    type: String,
    maxlengh: 25,
  },
});
const consultSchema = new mongoose.Schema({
  prob: {
    type: Number,
  },
  name: {
    type: String,
    maxlengh: 255,
  },
  age: {
    type: Number,
    maxlengh: 2,
  },
  school: {
    type: String,
    maxlengh: 155,
  },
  city: {
    type: String,
    maxlengh: 155,
  },
  date: {
    type: Date,
  },
  userId: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User',
  },
  talent: {
    type: String,
  },
  code: {
    type: String,
  },
});
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    maxlengh: 25,
    required: true,
  },
  password: {
    type: String,
    maxlengh: 125,
    required: true,
  },
  role: {
    type: String,
    maxlengh: 25,
  },
});
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
export const User =
  mongoose.models?.User || mongoose.model('User', userSchema);
export const Consult =
  mongoose.models?.Consult ||
  mongoose.model('Consult', consultSchema);
export const Admin =
  mongoose.models?.Admin || mongoose.model('Admin', adminSchema);
