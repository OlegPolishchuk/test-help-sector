import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from 'models/Post';
import { getPosts } from 'store/thunks/getPosts';

interface InitialState {
  allPosts: Post[];
  paginatedPosts: Post[];
  postsCount: number;
  status: 'init' | 'loading' | 'error' | 'success';
  pageNumber: number;
  postLimit: number;
  totalCountOfPages: number;
}

const initialState: InitialState = {
  allPosts: [],
  paginatedPosts: [],
  postsCount: 0,
  status: 'init',
  pageNumber: 1,
  postLimit: 10,
  totalCountOfPages: 1,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    incrementPageNumber: (state) => {
      state.pageNumber += 1;
    },
    decrementPageNumber: (state) => {
      state.pageNumber -= 1;
    },
    setPageNumber: (state, action: PayloadAction<{ page: number }>) => {
      state.pageNumber = action.payload.page;

      state.paginatedPosts = getPaginatesPosts(state.pageNumber, state.postLimit, state.allPosts);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      const postLength = payload.length;

      state.allPosts = payload;
      state.postsCount = postLength;
      state.status = 'success';

      state.paginatedPosts = getPaginatesPosts(state.pageNumber, state.postLimit, payload);
      state.totalCountOfPages = Math.ceil(postLength / state.postLimit);
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

function getPaginatesPosts(pageNumber: number, limit: number, posts: Post[]) {
  const startIndex = (pageNumber - 1) * limit;
  const endIndex = pageNumber * limit;

  return posts.slice(startIndex, endIndex);
}
