import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'redux/auth/auth-operations';
import { profileAPI } from 'services/profileAPI';

const updateAvatar = createAsyncThunk(
  '/profile/updateAvatar',
  async (file, thunkAPI) => {
    const persistToken = thunkAPI.getState().auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await profileAPI.updateImage(file);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getAvatar = createAsyncThunk(
  '/profile/getAvatar',
  async (_, thunkAPI) => {
    const persistToken = thunkAPI.getState().auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await profileAPI.getImage();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const profileOperations = { updateAvatar, getAvatar };

export default profileOperations;
