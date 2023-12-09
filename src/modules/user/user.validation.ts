import { z } from 'zod'

const userValidationSchema = z.object({
    // id will be created by server no need to send from user interface
    password: z.string({
        invalid_type_error: "Password must be a string"
    }).min(5,{message: "Password at least 5 charectors"}).optional(),
    // needPasswordChange will be set by the mongoose model default , no need to validate it
    // role will be set by the endpoint / admin / system so no need to send frm the user
    // status will be set by default in-progress by the system server , no need to validate it from here
    // is default value is by default false by the system server, no need to validate from here
})


export const userValidation = {
    userValidationSchema
}