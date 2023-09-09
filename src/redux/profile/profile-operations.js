import { createAsyncThunk } from '@reduxjs/toolkit';
import { profileAPI } from 'services/profileAPI';

const updateAvatar = createAsyncThunk(
  '/profile/updateAvatar',
  async (file, thunkAPI) => {
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
