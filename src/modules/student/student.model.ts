import { Schema , model } from 'mongoose';
import {
  Gardian,
  Localgardian,
  Student,
  Username,
} from './student.interface';

const userNameSchema = new Schema<Username>({
  firstname: { type: String, required: true },
  middlename: { type: String },
  lastname: { type: String, required: true },
});

const gardianSchema = new Schema<Gardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGardianSchema = new Schema<Localgardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dob: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  gardian: gardianSchema,
  localGardian: localGardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});


export const StudentModel = model<Student>("Student", studentSchema)
