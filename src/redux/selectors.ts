import { IGlobalStore } from '../types/componentTypes/types';

export const selectQuestions = (state: IGlobalStore) => state.questions.items;
export const selectFilter = (state: IGlobalStore) => state.filter;
export const selectServise = (state: IGlobalStore) => state.servise;
export const selectSelector = (state: IGlobalStore) => state.select.categories;
export const selectRandomNumber = (state: IGlobalStore) =>
  state.select.randomNumber;
