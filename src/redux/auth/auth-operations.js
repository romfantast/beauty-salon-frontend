import { createAsyncThunk } from '@reduxjs/toolkit';
import API, { checkIsToken, token } from 'services/authAPI';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await API.register(credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await API.login(user);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  checkIsToken(thunkAPI);
  try {
    const { data } = await API.logout();
    token.unset();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const authOperations = { register, login, logout };

export default authOperations;
