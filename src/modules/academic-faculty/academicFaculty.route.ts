import express from 'express'
import { academicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../app/middlewares/validateRequest';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post("/create-academic-faculty", validateRequest(academicFacultyValidation.academicValidationSchema), academicFacultyController.createAcademicFacultyIntoDB)
router.get("/", academicFacultyController.getAllAcademicFacultyFromDB)
router.get("/:id", academicFacultyController.getSingleAcademicFacultyFromDB)
router.patch("/:id", academicFacultyController.updateSingleAcademicFacultyFromDB)


export const academicFacultyRouter = router