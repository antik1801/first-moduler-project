import { Request, Response } from "express";
import catchAsync from "../../app/utils/catchAsync";
import { academicFacultyServices } from "./academicFaculty.service";
import sendResponse from "../../app/utils/sendResponse";
import httpStatus from "http-status";


const createAcademicFacultyIntoDB = catchAsync(async(req:Request, res:Response) =>{
        const academicFacultyData = req.body;
        const result = await academicFacultyServices.createAcademicFacultyIntoDB(academicFacultyData);
        sendResponse(res,{
            statusCode: httpStatus.OK,
            success: true,
            message: "Academic Faculty created successfully",
            data: result
        }
        )
})

const getAllAcademicFacultyFromDB = catchAsync(async(req:Request,res:Response)=>{
    const result = await academicFacultyServices.getAllAcademicFacultyFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All academic faculty fetched successfull",
        data: result
    })
})

const getSingleAcademicFacultyFromDB = catchAsync(async(req:Request, res:Response)=>{
    const id = req.params.id;
    const result = await academicFacultyServices.getSingleAcademicFacultyFromDB(id);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "single Academic Faculty fetched successfully",
        data: result
    })
})

const updateSingleAcademicFacultyFromDB = catchAsync(async(req:Request, res: Response)=>{
    const id = req.params.id;
    const academicFacultyData = req.body;
    const result = await academicFacultyServices.updateSingleAcademicFacultyFromDB(id,academicFacultyData)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Data fetched successfully",
        data: result
    })
})

export const academicFacultyController = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultyFromDB,
    getSingleAcademicFacultyFromDB,
    updateSingleAcademicFacultyFromDB
}