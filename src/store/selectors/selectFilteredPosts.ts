import { createSelector } from '@reduxjs/toolkit';
import { Post } from 'models/Post';
import { selectAllPosts } from 'store/selectors/selectAllPosts';
import { selectSearchValue } from 'store/selectors/selectSearchValue';

export const selectFilteredPosts = createSelector(
  [selectAllPosts, selectSearchValue],
  (allPosts: Post[], searchValue: string) => {
    return allPosts.filter((post) => {
      return (
        `${post.id}`.includes(searchValue) ||
        post.body.includes(searchValue) ||
        post.title.includes(searchValue)
      );
    });
  },
);
