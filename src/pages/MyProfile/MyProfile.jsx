import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectIsLoading } from 'redux/auth/auth-selectors';
import { ButtonLoader } from 'components/Loader/ButtonLoader';
import authOperations from 'redux/auth/auth-operations';

const MyProfile = () => {
  const isAuth = useSelector(selectIsAuth);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <p>Hello</p>

      {isAuth && (
        <button
          className="flex justify-center bg-indigo-500 text-slate-50 font-bold text-base p-4 rounded-lg disabled:bg-slate-300 disabled:text-neutral-600"
          type="submit"
          disabled={isLoading}
          onClick={() => dispatch(authOperations.logout())}
        >
          {isLoading ? <ButtonLoader /> : 'Logout'}
        </button>
      )}
    </div>
  );
};

export default MyProfile;
