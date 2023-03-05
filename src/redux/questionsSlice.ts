import { createSlice } from '@reduxjs/toolkit';
import { IQState } from '../types/componentTypes/types';
import { fetchQuestions } from './operations';

const questionsInitialState: IQState = {
  items: [],
  isLoading: false,
  isError: false,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState: questionsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const questionsReducer = questionsSlice.reducer;
