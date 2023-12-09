// import StudentValidationSchema from "../student/student.zod.validation";
import sendResponse from '../../app/utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../app/utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';


const createAcademicSemester = catchAsync( async (req,res) => {
    const payload = req.body;
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(payload);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semester is created successfully',
        data: result,
      })
});


const getAllSemesters = catchAsync( async(req,res)=>{
  const result = await AcademicSemesterServices.getAcademicSemesterFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All academic semester fetched successfully',
    data: result,
  })
} );


const getSingleSemester = catchAsync( async(req,res)=>{
  const {id} = req.params;
  const result = await AcademicSemesterServices.getSingleSemesterFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Academic Semester fetched successfully',
    data: result,
  })
} )

const updateSingleSemester = catchAsync( async(req,res) =>{
  const {id} = req.params;
  const newAcademicData = req.body;
  const result = await AcademicSemesterServices.updateSingleSemesterFromDB(id, newAcademicData);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Academic Semester fetched successfully',
    data: result,
  })
} )


export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllSemesters,
  getSingleSemester,
  updateSingleSemester
};
