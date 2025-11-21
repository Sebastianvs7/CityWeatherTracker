import * as yup from 'yup';

import { citySchema } from './city';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, 'Phone number must contain only numbers')
    .required('Phone number is required')
    .min(9, 'Phone number must be at least 9 characters'),
  cities: yup
    .array()
    .of(citySchema)
    .required('At least one city is required')
    .min(1, 'At least one city is required'),
});

