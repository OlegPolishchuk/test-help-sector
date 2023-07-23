import { createSlice } from '@reduxjs/toolkit';
import { Post } from 'models/Post';
import { getPosts } from 'store/thunks/getPosts';

interface InitialState {
  posts: Post[];
  postsCount: number;
  status: 'init' | 'loading' | 'error' | 'success';
}

const initialState: InitialState = {
  posts: [],
  postsCount: 0,
  status: 'init',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.postsCount = payload.length;
      state.status = 'success';
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.status = 'error';
    });
    builder.addCase(getPosts.pending, (state) => {
      state.status = 'loading';
    });
  },
});

export const { reducer: postReducer, actions: postActions } = postSlice;
