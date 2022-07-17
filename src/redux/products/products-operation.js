import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const caloriesCalculator = createAsyncThunk('calculator', async credential => {
  try {
    const { data } = await axios.post('/api/products/calculatorPagePublic', credential);
    return data;
  } catch (error) {
    //error
  }
});

export {caloriesCalculator}