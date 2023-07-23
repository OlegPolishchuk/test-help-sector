import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postReducer } from 'store/reducers/postSlice';

const rootReducer = combineReducers({
  postReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
