import * as yup from 'yup';

export const searchSchema = yup.object().shape({
  cityName: yup
    .string()
    .required('City name is required')
    .min(2, 'City name must be at least 2 characters'),
});

export const saveCitySchema = yup.object().shape({
  postCode: yup
    .string()
    .required('Post code is required')
    .min(3, 'Post code must be at least 3 characters'),
});

