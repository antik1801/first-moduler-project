
import {z} from 'zod'

const academicValidationSchema = z.object({
    name: z.string({
        invalid_type_error: "Name must be a string",
      }).min(5, { message: "Must be 5 or more characters long" }).max(30, { message: "Must be not more than 30 characters long" })
})


export const academicFacultyValidation = {
    academicValidationSchema
}