// import { Model } from 'mongoose';

import { Types } from "mongoose";

export type TGardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TUsername = {
  firstname: string;
  middlename?: string;
  lastname: string;
};

export type TLocalgardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  studentData: import("mongoose").Types.ObjectId;
  id: string;
  user: Types.ObjectId;
  name: TUsername;
  gender: 'male' | 'female' | 'others';
  email: string;
  dob?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  gardian: TGardian;
  localGardian: TLocalgardian;
  admissionSemester: Types.ObjectId;
  profileImg?: string;
};

// for creating static

// types / interface for mongoose instance methods
// mongoose instance method code started
/*
export type StudentMethod = {
  isUserExists(userId: string): Promise<TStudent | null>;
};

// creating a model for mongoose instance

export type StudentModel = Model<
  TStudent,
  Record<string, never>,
  StudentMethod
>;
*/
// mongoose instance method code ended
