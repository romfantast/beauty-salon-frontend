import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { Icon } from 'components/Icon/Icon';
import { TitleLarge } from 'components/Texts/TitleLarge';

import { Formik, Form } from 'formik';
import { CustomInput } from 'components/CustomInput/CustomInput';
import { loginSchema } from 'schemas/loginSchema';

const LoginPage = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Box
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{
        width: window.innerWidth,
        transition: {
          duration: 0.5,
        },
      }}
      styles="p-6"
    >
      <TitleLarge styles="text-slate-950 mt-12 mb-4">Welcome Back!</TitleLarge>
      <p className="pb-6 text-base text-neutral-600 mb-24">
        Don’t have an account?
        <Link
          className="text-indigo-500 ml-2 font-semibold underline"
          to="/register"
        >
          SignUp
        </Link>
      </p>
      <div className="mb-8">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
          autocomplete="off"
        >
          {props => (
            <Form className="grid gap-4" autoComplete="off">
              <CustomInput
                label="Email"
                name="email"
                type="text"
                placeholder="example@gmail.com"
              />
              <CustomInput
                label="Password"
                styles="mb-8"
                name="password"
                type="password"
                placeholder="Enter password"
              />
              {/* add isSubmiting from formik when click */}
              <button
                className="bg-indigo-500 text-slate-50 font-bold text-base p-4 rounded-lg"
                type="submit"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="text-center mb-8">
        <span className="text-indigo-500 font-semibold">
          Forgot your Password?
        </span>
      </div>
      <div>
        <div className="relative">
          <hr className="-z-10 absolute top-1/2 w-full h-px m-0 bg-indigo-200 border-0 rounded md:my-10"></hr>
          <p className="text-slate-950 text-center mb-8 py-2 w-max mx-auto px-9 bg-white">
            Or Login using
          </p>
        </div>
        <div className="mx-auto w-max text-center">
          <div>
            <Icon width="91" height="51" id="google" />
            <span className="text-sky-600 font-semibold leading-6">Google</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default LoginPage;
