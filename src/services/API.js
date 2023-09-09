import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

const register = async user => {
  return await axios.post('/auth/register', user);
};

const login = async user => {
  return await axios.post('/auth/login', user);
};

const logout = async () => {
  return await instance.post('/auth/logout');
};

const currentUser = async () => {
  const { data } = await axios.get('/user');
  return data;
};

const API = {
  register,
  login,
  logout,
  currentUser,
};

export default API;
