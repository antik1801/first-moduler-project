import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstname: Joi.string()
    .required()
    .trim()
    .max(12)
    .pattern(new RegExp('^[A-Z][a-z]*$'))
    .message(
      'First name must start with an uppercase letter and contain only alphabetic characters',
    ),

  middlename: Joi.string().trim(),

  lastname: Joi.string()
    .required()
    .trim()
    .pattern(new RegExp('^[A-Za-z]+$'))
    .message('Last name must contain only alphabetic characters'),
});

const gardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().trim(),
  fatherOccupation: Joi.string().required().trim(),
  fatherContactNo: Joi.string().required(),

  motherName: Joi.string().required().trim(),
  motherOccupation: Joi.string().required().trim(),
  motherContactNo: Joi.string().required(),
});

const localGardianValidationSchema = Joi.object({
  name: Joi.string().required().trim(),
  occupation: Joi.string().required().trim(),
  contactNo: Joi.string().required(),
  address: Joi.string().required().trim(),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'others').required(),
  dob: Joi.string(),
  email: Joi.string().trim().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'AB+',
    'AB-',
    'B+',
    'B-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string().trim().required(),
  parmanentAddress: Joi.string().trim().required(),
  gardian: gardianValidationSchema.required(),
  localGardian: localGardianValidationSchema.required(),
  profileImg: Joi.string(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;
