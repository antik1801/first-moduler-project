import { Router } from "express";
import { StudentRoutes } from "../../modules/student/student.route";
import { userRoutes } from "../../modules/user/user.route";
import { AcademicSemesterRoutes } from "../../modules/academic-semester/academicSemester.route";
import { academicFacultyRouter } from "../../modules/academic-faculty/academicFaculty.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/students',
        route: StudentRoutes
    },
    {
        path: "/users",
        route: userRoutes
    },
    {
        path: "/academic-semesters",
        route: AcademicSemesterRoutes
    },
    {
        path: "/academic-faculty",
        route: academicFacultyRouter
    }
]

moduleRoutes.forEach(({path,route})=>router.use(path,route))

export default router;