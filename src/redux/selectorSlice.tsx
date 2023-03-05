import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

const selectorSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    changeSelect(state, action) {
      return [...action.payload];
    },
  },
});

export const { changeSelect } = selectorSlice.actions;
export const selectorReducer = selectorSlice.reducer;
