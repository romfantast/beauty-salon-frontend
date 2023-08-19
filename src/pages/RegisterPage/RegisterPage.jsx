import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'components/Icon/Icon';
import { TitleLarge } from 'components/Texts/TitleLarge';
import { Box } from 'components/Box/Box';

const RegisterPage = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setUserName(value.trimStart());
      case 'password':
        return setPassword(value.trim());
      case 'email':
        return setEmail(value.trim());
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const credentials = { username, email, password };
    console.log(credentials);
  };

  return (
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
        <form onSubmit={onSubmit} className="grid gap-4" autoComplete="off">
          <label className="grid">
            <span className="text-xs text-slate-950 leading-4 pl-2 pb-0.5">
              Name
            </span>
            <input
              className="border-indigo-200 border py-3 px-2 rounded-lg"
              type="text"
              placeholder="John Doe"
              name="name"
              onChange={handleChange}
              value={username}
            />
          </label>
          <label className="grid">
            <span className="text-xs text-slate-950 leading-4 pl-2 pb-0.5">
              Email
            </span>
            <input
              className="border-indigo-200 border py-3 px-2 rounded-lg"
              type="text"
              placeholder="example@gmail.com"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </label>
          <label className="grid mb-8">
            <span className="text-xs text-slate-950 leading-4 pl-2 pb-0.5">
              Password
            </span>
            <input
              className="border-indigo-200 border py-3 px-2 rounded-lg"
              type="password"
              placeholder="Set a password"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </label>
          <button
            className="bg-indigo-500 text-slate-50 font-bold text-base p-4 rounded-lg mb-8"
            type="submit"
          >
            SignUp
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
  );
};

export default RegisterPage;
