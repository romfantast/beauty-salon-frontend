import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import servicesOperations from './services-operations';

const initialState = {
  services: [],
  isLoading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(servicesOperations.getAllServices.pending, state => {
        state.isLoading = true;
      })
      .addCase(servicesOperations.getAllServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services = action.payload;
      })
      .addCase(servicesOperations.getAllServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const persistConfigServices = {
  key: 'services',
  storage,
  whitelist: ['services'],
};

export const servicesReducer = persistReducer(
  persistConfigServices,
  servicesSlice.reducer
);
