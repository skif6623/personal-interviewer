import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { questionsReducer } from './questionsSlice';
import { filterReducer } from './filterSlice';
import { serviseReducer } from './serviseSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'questions',
  storage,
  whitelist: ['items'],
};

const persistedReducer = persistReducer(persistConfig, questionsReducer);

export const store = configureStore({
  reducer: {
    questions: persistedReducer,
    filter: filterReducer,
    servise: serviseReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
