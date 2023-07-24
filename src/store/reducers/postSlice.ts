import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from 'models/Post';
import { initializeApp } from 'store/thunks';
import { getPosts } from 'store/thunks/getPosts';

export type Sort = 'asc' | 'desc';

export interface TableHeadSort {
  id: Sort;
  title: Sort;
  body: Sort;
}

interface InitialState {
  allPosts: Post[];
  status: 'init' | 'loading' | 'error' | 'success';
  pageNumber: number;
  postLimit: number;
  sort: TableHeadSort;
  searchValue: string;
  isFirst: boolean;
}

const initialState: InitialState = {
  allPosts: [],
  status: 'init',
  pageNumber: 1,
  postLimit: 10,
  sort: {
    id: 'asc',
    body: 'asc',
    title: 'asc',
  },
  searchValue: '',
  isFirst: true,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<{ page: number }>) => {
      state.pageNumber = action.payload.page;
    },
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
    setSearchValue: (state, action: PayloadAction<{ value: string }>) => {
      state.searchValue = action.payload.value;

      if (!state.isFirst) {
        state.pageNumber = 1;
      }

      state.isFirst = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(initializeApp.fulfilled, (state, { payload }) => {
      state.pageNumber = payload.page;
      state.searchValue = payload.searchValue;
    });

    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.allPosts = payload;
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
