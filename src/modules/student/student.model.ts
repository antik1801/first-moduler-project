import { Model, Schema, model } from 'mongoose';
import {
  TGardian,
  TLocalgardian,
  TStudent,
  // StudentMethod,
  // StudentModel,
  TUsername,
} from './student.interface';
import validator from 'validator';

const userNameSchema = new Schema<TUsername>({
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

const gardianSchema = new Schema<TGardian>({
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

const localGardianSchema = new Schema<TLocalgardian>({
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

const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, required: [true,"Id is required"], unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true,"userID is required"],
    unique: true,
    ref: 'User'
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required']
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
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref:'AcademicSemester',
    required: [true, "Admission semester is required"],
  },
  profileImg: { type: String },
});

// pre save middleware/hook
studentSchema.pre('save', function () {
  console.log(this, 'Pre hook : we will save the data');
});

// post middleware
studentSchema.post('save', function () {
  console.log(this, 'We saved our data');
});

// for creating static model
interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

// studentSchema.static.isUserExists = async function(id: string){
//   const existingUser = await Student.findOne({id});
//   return existingUser;
// }

// creating a custom made instance method to check where user exists or not
//** instance method starts */

studentSchema.methods.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

//** instance method ends */

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
