import { Schema, model } from 'mongoose';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  AcademicSemesterMonth,
} from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';

export const AcademicSemesterModelSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: AcademicSemesterName,
    required: [true, 'Academic name is required'],
  },
  year: {
    type: String,
    required: [true, 'Academic year is needed'],
  },
  code: {
    type: String,
    enum: {
      values: AcademicSemesterCode,
      message: '{VALUE} can only be 01 / 02 / 03',
    },
    required: [true, 'Please provide a valid code'],
  },
  startMonth: {
    type: String,
    enum: {
      values: AcademicSemesterMonth,
      message: '{VALUE} is not a valid month name. hint: January, February ...',
    },
    required: [true, 'Please provide a valid  startMonth'],
  },
  endMonth: {
    type: String,
    enum: {
      values: AcademicSemesterMonth,
      message: '{VALUE} is not a valid month name. hint: January, February ...',
    },
    required: [true, 'Please provide a valid  endMonth'],
  },
});


AcademicSemesterModelSchema.pre('save', async function(next){
  const isSemesterExists = await AcademicSemester.findOne({
    name: this.name,
    year: this.year
  })

  if(isSemesterExists) 
  {
    throw new Error('Semester is already exists!');
  }
  next();
})

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterModelSchema,
);

/**
 * 2030 , autumn , 01 => create
 * 2030 , autumn , 01 => semester already exists XXX
 * 2031 , fall , 02 => create
 * 2031 , autumn, 02 => wrong code XXXXX
 * 
 */