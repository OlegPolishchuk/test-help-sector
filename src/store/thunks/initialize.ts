import { createAsyncThunk } from '@reduxjs/toolkit';
import { postActions } from 'store/reducers';
import { getPosts } from 'store/thunks/getPosts';

export const initializeApp = createAsyncThunk<void, { page: number; searchValue: string }>(
  'app/initialize',
  async ({ page, searchValue }, { rejectWithValue, dispatch }) => {
    try {
      await dispatch(getPosts({ currentPage: page }));

      dispatch(postActions.setPageNumber({ page }));
      dispatch(postActions.setSearchValue({ value: searchValue }));
    } catch (e) {
      return rejectWithValue('Some error in initializeApp thunk');
    }
  },
);
