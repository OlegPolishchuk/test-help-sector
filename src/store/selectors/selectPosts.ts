import { createSelector } from '@reduxjs/toolkit';
import { Post } from 'models/Post';
import { getPaginatesPosts } from 'store/reducers';
import { selectAllPosts } from 'store/selectors/selectAllPosts';
import { selectPageNumber } from 'store/selectors/selectPageNumber';
import { selectPostsLimit } from 'store/selectors/selectPostsLimit';

export const selectPosts = createSelector(
  [selectAllPosts, selectPageNumber, selectPostsLimit],
  (allPosts: Post[], currentPage: number, postsLimit: number) => {
    return getPaginatesPosts(currentPage, postsLimit, allPosts);
  },
);
