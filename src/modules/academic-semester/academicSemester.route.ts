import express from 'express'
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../app/middlewares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';

const router = express.Router();

router.post('/create-academic-semester', validateRequest(AcademicSemesterValidations.createAcademicSemesterValidationSchema), AcademicSemesterControllers.createAcademicSemester);
router.get("/", AcademicSemesterControllers.getAllSemesters)
router.get("/:id", AcademicSemesterControllers.getSingleSemester)
router.patch("/:id", validateRequest(AcademicSemesterValidations.updateAcademicSemesterValidationSchema) , AcademicSemesterControllers.updateSingleSemester)


export const AcademicSemesterRoutes = router;