import { Schema, model } from "mongoose";
import { TAcademicFaculty } from "./academicFaculty.interface";


const academicFacultySchema = new Schema<TAcademicFaculty>({
    name: {
        type: String,
        required:[true, 'Faculty name must be provided'],
        unique: true
    }
},
{
    timestamps: true
}
)

export const AcademicFaculty = model<TAcademicFaculty>("AcademicFaculty", academicFacultySchema)