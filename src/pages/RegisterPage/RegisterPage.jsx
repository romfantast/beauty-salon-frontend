import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

import { Icon } from 'components/Icon/Icon';
import { TitleLarge } from 'components/Texts/TitleLarge';
import { Box } from 'components/Box/Box';
import { ButtonLoader } from 'components/Loader/ButtonLoader';
import { regSchema } from 'schemas/registerSchema';
import authOperations from 'redux/auth/auth-operations';
import { selectIsLoading } from 'redux/auth/auth-selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const onSubmit = (values, actions) => {
    dispatch(authOperations.register(values))
      .unwrap()
      .then(() => {
        const loginCredentials = {
          email: values.email,
          password: values.password,
        };

        dispatch(authOperations.login(loginCredentials));
        actions.resetForm();
      })
      .catch(error => {
        toast.error(error.response.data.message);
      });
  };
  // here is one variant to use formik
  // in login page is second different variant

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: regSchema,
    onSubmit,
  });

  return (
    <>
      <Toaster />
      <Box styles="pb-6">
        <div className="p-6 mb-24 bg-indigo-500">
          <TitleLarge styles="text-slate-50 pt-12 mb-4">SignUp</TitleLarge>
          <p className="text-base text-slate-50">
            Already have an Account?
            <Link
              className="text-slate-50 ml-2 font-semibold underline"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>

        <div className="px-6">
          <form
            onSubmit={formik.handleSubmit}
            className="grid gap-4"
            autoComplete="off"
          >
            <label className="relative grid">
              <span className="text-xs text-slate-950 leading-4 pl-2 pb-0.5">
                Name
              </span>
              <input
                className={`border-indigo-200 border py-3 px-2 rounded-lg focus:outline-none ${
                  formik.errors.name && formik.touched.name && 'border-red-500'
                }`}
                type="text"
                placeholder="John Doe"
                name="name"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name && (
                <p className="absolute -bottom-4 text-xs text-red-500">
                  {formik.errors.name}
                </p>
              )}
            </label>
            <label className="relative grid">
              <span className="text-xs text-slate-950 leading-4 pl-2 pb-0.5">
                Email
              </span>
              <input
                className={`border-indigo-200 border py-3 px-2 rounded-lg focus:outline-none ${
                  formik.errors.email &&
                  formik.touched.email &&
                  'border-red-500'
                }`}
                type="text"
                placeholder="example@gmail.com"
                name="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="absolute -bottom-4 text-xs text-red-500">
                  {formik.errors.email}
                </p>
              )}
            </label>
            <label className="relative grid mb-8">
              <span className="text-xs text-slate-950 leading-4 pl-2 pb-0.5">
                Password
              </span>
              <input
                className={`border-indigo-200 border py-3 px-2 rounded-lg focus:outline-none
				  ${formik.errors.password && formik.touched.password && 'border-red-500'}`}
                type="password"
                placeholder="Set a password"
                name="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password && (
                <p className="absolute -bottom-4 text-xs text-red-500">
                  {formik.errors.password}
                </p>
              )}
            </label>
            {/* add isSubmiting from formik when click */}
            <button
              className="flex justify-center bg-indigo-500 text-slate-50 font-bold text-base p-4 rounded-lg mb-8 disabled:bg-slate-300 disabled:text-neutral-600"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <ButtonLoader /> : 'SignUp'}
            </button>
          </form>
          <div>
            <div className="relative">
              <hr className="-z-10 absolute top-1/2 w-full h-px m-0 bg-indigo-200 border-0 rounded md:my-10"></hr>
              <p className="text-slate-950 text-center mb-8 py-2 w-max mx-auto px-9 bg-white">
                Or SignUp using
              </p>
            </div>
            <div className="mx-auto w-max text-center">
              <div>
                <Icon width="91" height="51" id="google" />
                <span className="text-sky-600 font-semibold leading-6">
                  Google
                </span>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default RegisterPage;
