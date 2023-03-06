import { createSlice } from '@reduxjs/toolkit';
import { ISelectorState } from '../types/componentTypes/types';

const initialState: ISelectorState = {
  categories: [],
  randomNumber: 0,
};

const selectorSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    changeSelect(state, action) {
      return {
        ...state,
        categories: [...action.payload],
      };
    },
    changeNumber(state, action) {
      state.randomNumber = action.payload;
    },
  },
});

export const { changeSelect, changeNumber } = selectorSlice.actions;
export const selectorReducer = selectorSlice.reducer;
