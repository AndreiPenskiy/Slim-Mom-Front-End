import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-project-team6.herokuapp.com/';

const getAllByDate = createAsyncThunk(
  'dairy/getAllByDate',
  async (date, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await axios.get(`/api/diary/?date=${date}`);
      return {
        data,
        date,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);



export { getAllByDate };