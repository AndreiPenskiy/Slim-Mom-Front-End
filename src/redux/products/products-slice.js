import { createSlice } from '@reduxjs/toolkit';
import { caloriesCalculator } from './products-operation';


const initialState = {
  notRecomendate: [],
  calories: null
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  extraReducers: {
    [caloriesCalculator.fulfilled](state, { payload }) {
      state.notRecomendate = payload.data.notAllowedFood;
      state.calories = payload.data.calories;
    },
  },
});

export default calculatorSlice.reducer;