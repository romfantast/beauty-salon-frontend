import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import profileOperations from './profile-operations';

const initialState = {
  avatarUrl: '',
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(profileOperations.updateAvatar.pending, state => {
        state.isLoading = true;
      })
      .addCase(profileOperations.updateAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.avatarUrl = action.payload;
      })
      .addCase(profileOperations.updateAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(profileOperations.getAvatar.pending, state => {
        state.isLoading = true;
      })
      .addCase(profileOperations.getAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.avatarUrl = action.payload;
      })
      .addCase(profileOperations.getAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const persistConfigProfile = {
  key: 'profile',
  storage,
  whitelist: ['avatarUrl'],
};

export const profileReducer = persistReducer(
  persistConfigProfile,
  profileSlice.reducer
);
