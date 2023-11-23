import { Schema, model } from 'mongoose';
import { Gardian, Localgardian, Student, Username } from './student.interface';
import validator from 'validator';

const userNameSchema = new Schema<Username>({
  firstname: {
    type: String,
    required: [true, 'First Name Required'],
    trim: true,
    maxlength: [12, 'Max length of the firstname is 12'],
    validate: {
      validator: function (str: string) {
        const firstNameStr = str.charAt(0).toUpperCase() + str.slice(1);
        return firstNameStr === str;
      },
      message:
        '{VALUE} is not suitable for capitalized in mongodb database insertion',
    },
  },
  middlename: { type: String, trim: true },
  lastname: {
    type: String,
    required: [true, 'Last name required'],
    trim: true,
    validate: {
      validator: function (value: string) {
        return validator.isAlpha(value);
      },
      message: '{VALUE} is not suitable for alpha values',
    },
  },
});

const gardianSchema = new Schema<Gardian>({
  fatherName: {
    type: String,
    required: [true, 'Fathers name required'],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Fathers occupation required'],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Fathers contact number required'],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, "Mother's name required"],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, "Mother's occupation required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number required"],
  },
});

const localGardianSchema = new Schema<Localgardian>({
  name: {
    type: String,
    trim: true,
    required: [true, "Local gardian's name required"],
  },
  occupation: {
    type: String,
    trim: true,
    required: [true, 'Local gardians ocupation required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local gardians contact number required'],
  },
  address: {
    type: String,
    trim: true,
    required: [true, 'Local gardians address required'],
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: [true, 'Name required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'others'],
      message: '{VALUE} can only be the male , female and others',
    },
    required: true,
  },
  dob: { type: String },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    validate: {
      validator: function (value: string) {
        return validator.isEmail(value);
      },
      message:
        '{VALUE} is not a correct email format please provide a correct email',
    },
  },
  contactNo: {
    type: String,
    required: true,
    unique: true,
  },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
  },
  presentAddress: { type: String, trim: true, required: true },
  parmanentAddress: { type: String, trim: true, required: true },
  gardian: {
    type: gardianSchema,
    required: true,
  },
  localGardian: {
    type: localGardianSchema,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
