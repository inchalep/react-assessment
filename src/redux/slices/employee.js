import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { _get } from '../../utils/api';

const initialState = {
  employees: [],
};

export const fetchEmployee = createAsyncThunk('employee', async () => {
  try {
    const response = await _get('employees');
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
});

export const employeeSlice = createSlice({
  name: 'employee/fetch',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchEmployee.fulfilled, (state, action) => {
      state.employees = action.payload;
    });
  },
});

export default employeeSlice.reducer;
