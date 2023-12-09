import { TAcademicSemester, TAcademicSemesterNameCodeMapper } from "./academicSemester.interface";

export const academicPayloadChecker = (payload: TAcademicSemester) =>{
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
}