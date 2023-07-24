import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from 'models/Post';
import { getPosts } from 'store/thunks/getPosts';

export type Sort = 'asc' | 'desc';

export interface TableHeadSort {
  id: Sort;
  title: Sort;
  body: Sort;
}

interface InitialState {
  allPosts: Post[];
  filteredPosts: Post[];
  postsCount: number;
  status: 'init' | 'loading' | 'error' | 'success';
  pageNumber: number;
  postLimit: number;
  totalCountOfPages: number;
  sort: TableHeadSort;
}

const initialState: InitialState = {
  allPosts: [],
  filteredPosts: [],
  postsCount: 0,
  status: 'init',
  pageNumber: 1,
  postLimit: 10,
  totalCountOfPages: 1,
  sort: {
    id: 'asc',
    body: 'asc',
    title: 'asc',
  },
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<{ page: number }>) => {
      state.pageNumber = action.payload.page;

      state.filteredPosts = getPaginatesPosts(state.pageNumber, state.postLimit, state.allPosts);
    },

    // setSort: (state, action: PayloadAction<Sort>) => {
    //   state.sort = action.payload;
    // },

    sortTable: (
      state,
      action: PayloadAction<{ columnTitle: keyof TableHeadSort & keyof Post }>,
    ) => {
      const { columnTitle } = action.payload;

      const newSortType: Sort = state.sort[columnTitle] === 'asc' ? 'desc' : 'asc';

      state.sort[columnTitle] = newSortType;

      state.allPosts = state.allPosts.sort((a, b) => {
        if (columnTitle === 'id') {
          return newSortType === 'asc' ? a.id - b.id : b.id - a.id;
        }

        return newSortType === 'asc'
          ? a[columnTitle].toString().localeCompare(b[columnTitle].toString())
          : b[columnTitle].toString().localeCompare(a[columnTitle].toString());
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      const postLength = payload.length;

      state.allPosts = payload;
      state.postsCount = postLength;
      state.status = 'success';

      state.filteredPosts = getPaginatesPosts(state.pageNumber, state.postLimit, payload);
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

export function getPaginatesPosts(pageNumber: number, limit: number, posts: Post[]) {
  const startIndex = (pageNumber - 1) * limit;
  const endIndex = pageNumber * limit;

  return posts.slice(startIndex, endIndex);
}
