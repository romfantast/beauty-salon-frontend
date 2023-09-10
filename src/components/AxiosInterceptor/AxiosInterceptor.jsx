import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import authOperations from 'redux/auth/auth-operations';

export function AxiosInterceptor({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const responseSuccessFunc = response => {
      return response;
    };

    const responseErrorFunc = error => {
      console.log('error interceptor response', error);
      const status = error?.response?.status;
      const statusText = error?.response?.statusText;
      if (status === 401 || statusText === 'Unauthorized') {
        dispatch(authOperations.logout());
        navigate('/');
      }
      return Promise.reject(error);
    };

    const responseInterceptor = axios.interceptors.response.use(
      responseSuccessFunc,
      responseErrorFunc
    );

    return () => axios.interceptors.response.eject(responseInterceptor);
  }, [dispatch, navigate]);
  return children;
}
