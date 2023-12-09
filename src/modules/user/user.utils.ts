
// id : year academicSemesterCode 4 digit number

import { TAcademicSemester } from "../academic-semester/academicSemester.interface"
import { User } from "./user.model";


export const findLastStudentId = async () =>{
    const lastStudent = await User.findOne({
        role: 'student'
    },
    {
        id: 1,
        _id: 0
    })
    .sort({
        createdAt: -1
    })
    .lean()

    return lastStudent?.id ? lastStudent.id : undefined
} 

// 2030-02-0001

export const generateStudentId = async (payload:TAcademicSemester) : Promise<string | undefined> =>{
   
    let currentId =  (0).toString().padStart(4, '0');

    const lastStudentId = await findLastStudentId();
    const lastStudentYear = (lastStudentId?.substring(0,4))
    const lastStudentSemesterCode = lastStudentId?.substring(5,7);

    const currentSemesterCode = payload?.code;
    const currentYear = payload?.year;

    console.log(lastStudentSemesterCode);
    if(lastStudentId && lastStudentSemesterCode == currentSemesterCode && lastStudentYear == currentYear){
        currentId = lastStudentId.substring(8);

    }

    let incrementId = (parseInt(currentId)+1).toString().padStart(4, '0');
    incrementId = (`${(payload.year)}${payload.code}${incrementId}`) ;

    return incrementId
}




