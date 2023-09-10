import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import profileOperations from './profile-operations';

const initialState = {
  avatarUrl: '',
  email: '',
  name: '',
  isLoading: false,
  error: null,
};
// reset to initial state
const handleReset = state => {
  state.avatarUrl = '';
  state.email = '';
  state.name = '';
  state.isLoading = false;
  state.error = null;
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetProfile(state) {
      handleReset(state);
    },
  },
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
      })
      .addCase(profileOperations.getProfile.pending, state => {
        state.isLoading = true;
      })
      .addCase(profileOperations.getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload.user.email;
        state.name = action.payload.user.name;
      })
      .addCase(profileOperations.getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const persistConfigProfile = {
  key: 'profile',
  storage,
  whitelist: ['avatarUrl', 'email', 'name'],
};

export const profileReducer = persistReducer(
  persistConfigProfile,
  profileSlice.reducer
);
export const { resetProfile } = profileSlice.actions;
