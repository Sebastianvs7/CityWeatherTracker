import * as yup from 'yup';

export const citySchema = yup.object().shape({
  name: yup
    .string()
    .required('City name is required')
    .min(2, 'City name must be at least 2 characters'),
  address: yup.object().shape({
    postCode: yup
      .string()
      .required('Post code is required')
      .min(3, 'Post code must be at least 3 characters'),
  }),
});

