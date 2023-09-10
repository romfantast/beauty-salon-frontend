import axios from 'axios';

// main instance for all requests
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

// instance for logout (not to loop in interceptor)
export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

// work with token
export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
    instance.defaults.headers.common.Authorization = '';
  },
};

// check in requests if token provided
export const checkIsToken = thunkAPI => {
  const persistToken = thunkAPI.getState().auth.token;
  if (persistToken === null) {
    return thunkAPI.rejectWithValue('No token provided');
  }
  token.set(persistToken);
};

// auth requests
const register = async user => {
  return await axios.post('/auth/register', user);
};

const login = async user => {
  return await axios.post('/auth/login', user);
};

const logout = async () => {
  return await instance.post('/auth/logout');
};

const API = {
  register,
  login,
  logout,
};

export default API;
