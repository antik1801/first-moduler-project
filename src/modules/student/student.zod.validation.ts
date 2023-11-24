import { z } from 'zod';

const UsernameValidationSchema = z.object({
  firstname: z
    .string()
    .min(1)
    .max(12)
    .regex(/^[A-Z][a-z]*$/, {
      message:
        'First name must start with an uppercase letter and contain only alphabetic characters',
    }),

  middlename: z.string().optional(),

  lastname: z
    .string()
    .min(1)
    .regex(/^[A-Za-z]+$/, {
      message: 'Last name must contain only alphabetic characters',
    }),
});

const GardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),

  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactNo: z.string().min(1),
});

const LocalGardianValidationSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

const StudentValidationSchema = z.object({
  id: z.string().min(1),
  name: UsernameValidationSchema,
  gender: z.enum(['male', 'female', 'others']),
  dob: z.string().optional(),
  email: z.string().email(),
  contactNo: z.string().min(1),
  emergencyContactNo: z.string().min(1),
  bloodGroup: z
    .enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1),
  parmanentAddress: z.string().min(1),
  gardian: GardianValidationSchema,
  localGardian: LocalGardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).optional(),
});

export default StudentValidationSchema;
