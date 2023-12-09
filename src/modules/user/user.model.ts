import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
const userSchema = new Schema<TUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    needPasswordChange:{
        // optional field
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        required: true,
        enum: {
            values: ["admin", "student", "faculty"],
            message: "{VALUE} is not perfect type for role, choose either student , admin or faculty"
        },
        default: "student"
    },
    status: {
        type: String,
        required: true,
        enum:{
            values: ['in-progress', 'block'],
            message: "{VALUE} is not correct status type , it could be either in-progress or block"
        },
        default: "in-progress"
    },
    isDeleted: {
        // optional field
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
)


export const User = model<TUser>("User", userSchema)