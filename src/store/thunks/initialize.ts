import { createAsyncThunk } from '@reduxjs/toolkit';
import { appActions } from 'store/reducers';
import { getPosts } from 'store/thunks/getPosts';

export const initializeApp = createAsyncThunk<
  { page: number; searchValue: string },
  { page: number; searchValue: string }
>('app/initialize', async ({ page, searchValue }, { rejectWithValue, dispatch }) => {
  try {
    await dispatch(getPosts({ currentPage: page }));

    dispatch(appActions.setInitialize());
    return { page, searchValue };
  } catch (e) {
    return rejectWithValue('Some error in initializeApp thunk');
  }
});
