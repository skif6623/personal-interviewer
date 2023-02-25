import { createSlice } from '@reduxjs/toolkit';
import { IQState } from '../types/componentTypes/types';
import { fetchQuestions } from './operations';

const questionsInitialState: IQState = {
  html: [],
  css: [],
  js: [],
  react: [],
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
      state.html = action.payload.filter(item => item.category === 'html');
      state.css = action.payload.filter(item => item.category === 'css');
      state.js = action.payload.filter(item => item.category === 'java-script');
      state.react = action.payload.filter(item => item.category === 'react');
      state.items = action.payload;
    });
  },
});

export const questionsReducer = questionsSlice.reducer;
