import { createSelector } from '@reduxjs/toolkit';
import { Post } from 'models/Post';
import { selectFilteredPosts } from 'store/selectors/selectFilteredPosts';
import { selectPostsLimit } from 'store/selectors/selectPostsLimit';

export const selectTotalCountOfPages = createSelector(
  [selectFilteredPosts, selectPostsLimit],
  (posts: Post[], limit: number) => {
    return Math.ceil(posts.length / limit);
  },
);
