import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import authOperations from 'redux/auth/auth-operations';

export function AxiosInterceptor({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const resInterceptor = response => {
      return response;
    };

    const errInterceptor = error => {
      console.log('error interceptor response');
      console.log(error);
      const status = error?.response?.status;
      const statusText = error?.response?.statusText;
      if (status === 401 || statusText === 'Unauthorized') {
        dispatch(authOperations.logout());
        navigate('/');
      }

      return Promise.reject(error);
    };

    const interceptor = axios.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => axios.interceptors.response.eject(interceptor);
  }, [dispatch, navigate]);
  return children;
}
