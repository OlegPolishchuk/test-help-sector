import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isInitialized: boolean;
}

const initialState: InitialState = {
  isInitialized: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInitialize: (state) => {
      state.isInitialized = true;
    },
  },
});

export const { reducer: appReducer, actions: appActions } = appSlice;
