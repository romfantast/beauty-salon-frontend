import * as Yup from 'yup';

const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegexp = /^[a-zA-Z ]*$/;

export const regSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'must be at least 3 characters long')
    .max(30, 'must be maximum 30 characters long')
    .matches(nameRegexp, 'must be only a characters')
    .required('name is required'),
  email: Yup.string()
    .matches(emailRegexp, 'please enter a valid email')
    .required('email is required'),
  password: Yup.string()
    .min(6, 'must be at least 6 characters long')
    .required('password is required'),
});
