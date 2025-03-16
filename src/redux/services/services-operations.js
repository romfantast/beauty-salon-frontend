import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkIsToken } from 'services/authAPI';
import { servicesAPI } from 'services/servicesAPI';

const getAllServices = createAsyncThunk(
  '/services/getAllServices',
  async (_, thunkAPI) => {
    checkIsToken(thunkAPI);
    try {
      const { data } = await servicesAPI.getAllServices();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const servicesOperations = { getAllServices };

export default servicesOperations;
