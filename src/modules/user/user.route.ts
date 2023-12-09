import validateRequest from '../../app/middlewares/validateRequest';
import { StudentValidations } from '../student/student.zod.validation';
import { userController } from './user.controller';
import express from 'express'

const router = express.Router();



router.post("/create-student",validateRequest(StudentValidations.createStudentValidationSchema),userController.createStudent);


export const userRoutes = router; 