import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { fetchStatus } from 'redux/fetchStatus';

const initialState = {
  isAuth: false,
  token: null,
  status: fetchStatus.idle,
  isLoading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, (state, _) => {
        state.status = fetchStatus.pending;
        state.isLoading = true;
      })
      .addCase(authOperations.register.fulfilled, (state, _) => {
        state.status = fetchStatus.fullfield;
        state.isLoading = false;
      })
      .addCase(authOperations.register.rejected, (state, action) => {
        state.status = fetchStatus.rejected;
        state.token = null;
        state.isLoading = false;
        state.error = action.payload.response.data.message;
      })
      .addCase(authOperations.login.pending, (state, _) => {
        state.status = fetchStatus.pending;
        state.isLoading = true;
      })
      .addCase(authOperations.login.fulfilled, (state, action) => {
        state.status = fetchStatus.fullfield;
        state.token = action.payload.token;
        state.isAuth = true;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(authOperations.login.rejected, (state, _) => {
        state.status = fetchStatus.rejected;
        state.isLoading = false;
        state.token = null;
      })
      .addCase(authOperations.logout.pending, (state, _) => {
        state.status = fetchStatus.pending;
        state.isLoading = true;
      })
      .addCase(authOperations.logout.fulfilled, (state, _) => {
        state.status = fetchStatus.fullfield;
        state.token = '';
        state.isAuth = false;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(authOperations.logout.rejected, (state, _) => {
        state.status = fetchStatus.rejected;
        state.token = '';
        state.isAuth = false;
        state.isLoading = false;
        state.error = '';
      });
  },
});

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['isAuth', 'token'],
};

export const authReducer = persistReducer(persistConfigAuth, authSlice.reducer);
