import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63c44b33f0028bf85fa64c21.mockapi.io';

export const fetchQuestions = createAsyncThunk(
  'questions/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response1 = await axios.get('/questions');
      const response2 = await axios.get('/questions2');
      const response = [...response1.data, ...response2.data];
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
