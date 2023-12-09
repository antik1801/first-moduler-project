/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TAcademicSemester,  TAcademicSemesterNameCodeMapper } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async( payload: TAcademicSemester ) =>{

    // will match the semester name along with the semester code
    // -> mapper

    const academicSemesterNameCodeMapper : TAcademicSemesterNameCodeMapper ={
        autumn: '01',
        summer: '02',
        fall: '03',
    }

    // const academicSemesterMonthMapper : TAcademicSemesterMonth= {
    //     autumn: ['February', 'April'],
    //     summer : ['May', 'August'],
    //     fall : ['September', 'December']
    // }
    // academicSemesterNameCodeMapper['fall']
    if(academicSemesterNameCodeMapper[payload.name] !== payload.code){
        throw new Error('Academic semester code is not correct with academic semester name');
    }

    // check whether the semester start month is matched with the payload start month
    if(payload.name === 'autumn' && payload.startMonth !== "February" && payload.endMonth !== 'April'){
        throw new Error('Invalid semester month. autumn should be from February to April');
    }
    if(payload.name === 'fall' && payload.startMonth !== "September" && payload.endMonth !== 'December'){
        throw new Error('Invalid semester month. fall should be from September to December');
    }
    if(payload.name === 'summer' && payload.startMonth !== "May" && payload.endMonth !== 'August'){
        throw new Error('Invalid semester month. summer should be from May to August');
    }
    
    
    const result = await AcademicSemester.create(payload);
    return result;
}

const getAcademicSemesterFromDB = async() =>{
    const result = await AcademicSemester.find();
    return result;
}

const getSingleSemesterFromDB = async(id: string) =>{
    const result = await AcademicSemester.findOne({_id: id});
    return result;
}

const updateSingleSemesterFromDB = async(id: string, payload: any) =>{

    const academicSemesterNameCodeMapper : TAcademicSemesterNameCodeMapper ={
        autumn: '01',
        summer: '02',
        fall: '03',
    }

    // const academicSemesterMonthMapper : TAcademicSemesterMonth= {
    //     autumn: ['February', 'April'],
    //     summer : ['May', 'August'],
    //     fall : ['September', 'December']
    // }
    // academicSemesterNameCodeMapper['fall']
    if(academicSemesterNameCodeMapper[payload.name] !== payload.code){
        throw new Error('Academic semester code is not correct with academic semester name');
    }

    // check whether the semester start month is matched with the payload start month
    if(payload.name === 'autumn' && payload.startMonth !== "February" && payload.endMonth !== 'April'){
        throw new Error('Invalid semester month. autumn should be from February to April');
    }
    if(payload.name === 'fall' && payload.startMonth !== "September" && payload.endMonth !== 'December'){
        throw new Error('Invalid semester month. fall should be from September to December');
    }
    if(payload.name === 'summer' && payload.startMonth !== "May" && payload.endMonth !== 'August'){
        throw new Error('Invalid semester month. summer should be from May to August');
    }
    

    const result = await AcademicSemester.findOneAndUpdate({_id: id}, payload, { new: true });
    return result;
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAcademicSemesterFromDB,
    getSingleSemesterFromDB,
    updateSingleSemesterFromDB
}