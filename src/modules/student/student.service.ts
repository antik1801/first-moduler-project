import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  // static method
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User already Exists');
  }

  const result = await Student.create(studentData); // mongoose static method using creating a document

  //** custom instance method logic */

  /*
  const student = new Student(studentData);
  if(await student.isUserExists(studentData.id)){
    throw new Error("User already Exists")
  }
  const result = await student.save(); // mongoose instance method

  */
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
