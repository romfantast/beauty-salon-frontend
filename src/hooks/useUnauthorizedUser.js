import axios from 'axios';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

export const useUnauthorizedUser = () => {
  const dispatch = useDispatch();
  // unauthorized user interceptor
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        // Handle 401 error
        dispatch(authOperations.logout());
      }
    }
  );
};
