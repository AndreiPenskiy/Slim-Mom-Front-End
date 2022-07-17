import { createSlice } from '@reduxjs/toolkit';
import { getAllByDate } from './diary-operation';

const initialState = {
  products: [],
  date: new Date().toLocaleDateString('fr-ca'),
};

const dairySlice = createSlice({
  name: 'dairy',
  initialState,
  extraReducers: {
    [getAllByDate.fulfilled](state, { payload }) {
      state.products = payload.data.products;
      state.date = payload.date;
    },
  },
});

export default dairySlice.reducer;
