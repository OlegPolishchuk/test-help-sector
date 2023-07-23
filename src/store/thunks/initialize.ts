import { createAsyncThunk } from '@reduxjs/toolkit';
import { postActions } from 'store/reducers';
import { getPosts } from 'store/thunks/getPosts';

export const initializeApp = createAsyncThunk(
  'app/initialize',
  async (page: number, { rejectWithValue, dispatch }) => {
    try {
      await dispatch(getPosts({ currentPage: page }));

      dispatch(postActions.setPageNumber({ page }));
    } catch (e) {
      return rejectWithValue('Some error in initializeApp thunk');
    }
  },
);
