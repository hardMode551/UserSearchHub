import { createSlice } from '@reduxjs/toolkit'
import { EmployeesTypes } from '../types/employessTypes';
import { fetchEmployees } from './asyncActions/asyncActions';

interface employeesSliceState {
  data: EmployeesTypes[],
  status: string,
  searchQuery: string,
  error: string | null,
}

const initialState: employeesSliceState = {
  data: [],
  status: 'loading', // loading | success | error
  searchQuery: '',
  error: null,
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setData(state, action){
      state.data = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state) => {
      state.status = 'loading';
      state.data = [];
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchEmployees.rejected, (state, error) => {
      state.status = 'error';
      state.data = [];
      state.error = 'Something went wrong' + error.error.message;
    });
  }
  
})

export const { setData, setSearchQuery } = employeesSlice.actions

export default employeesSlice.reducer