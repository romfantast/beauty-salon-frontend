import * as Yup from 'yup';

const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, 'please enter a valid email')
    .required('email is required'),
  password: Yup.string()
    .min(6, 'must be at least 6 characters long')
    .required('password is required'),
});
