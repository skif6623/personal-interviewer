import {IGlobalStore} from "../types/componentTypes/types";

export const selectQuestions = (state: IGlobalStore) => state.questions.items;
export const selectFilter = (state: IGlobalStore) => state.filter;
export const selectServise = (state: IGlobalStore) => state.servise;
