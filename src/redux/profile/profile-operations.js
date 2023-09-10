import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkIsToken } from 'services/authAPI';
import { profileAPI } from 'services/profileAPI';

const updateAvatar = createAsyncThunk(
  '/profile/updateAvatar',
  async (file, thunkAPI) => {
    checkIsToken(thunkAPI);
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
    checkIsToken(thunkAPI);
    try {
      const { data } = await profileAPI.getImage();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const getProfile = createAsyncThunk(
  '/profile/getProfile',
  async (_, thunkAPI) => {
    checkIsToken(thunkAPI);
    try {
      const { data } = await profileAPI.getProfile();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const profileOperations = { updateAvatar, getAvatar, getProfile };

export default profileOperations;
