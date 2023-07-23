import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from 'store/reducers';
import { postReducer } from 'store/reducers/postSlice';

const rootReducer = combineReducers({
  appReducer,
  postReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
