import {createSlice} from "@reduxjs/toolkit";

const initialState = false;

const serviseSlice = createSlice({
	name: "servise",
	initialState,
	reducers: {
		isShowSearch(state, action) {
			return action.payload;
		},
	},
});

export const {isShowSearch} = serviseSlice.actions;
export const serviseReducer = serviseSlice.reducer;
