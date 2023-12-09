import config from '../../app/config';
import { AcademicSemester } from '../academic-semester/academicSemester.model';
// import { TAcademicSemester } from '../academic-semester/academicSemester.interface';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId} from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.DEFAULT_PASS as string);
  userData.role = 'student';
  // set menual id

  // generate auto id

  // year , semester code, 4 digit number

  // find academicSemesterInfo

  const admissionSemester = await AcademicSemester.findById(payload.admissionSemester);
  if(admissionSemester != null)
  {
  userData.id = await generateStudentId(admissionSemester);
  }


  const newUser = await User.create(userData); // mongoose static method using creating a document
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;
    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
