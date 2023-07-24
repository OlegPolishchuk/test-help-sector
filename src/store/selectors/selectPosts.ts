import { createSelector } from '@reduxjs/toolkit';
import { Post } from 'models/Post';
import { selectFilteredPosts } from 'store/selectors/selectFilteredPosts';
import { selectPageNumber } from 'store/selectors/selectPageNumber';
import { selectPostsLimit } from 'store/selectors/selectPostsLimit';
import { selectSearchValue } from 'store/selectors/selectSearchValue';

export const selectPosts = createSelector(
  [selectFilteredPosts, selectPageNumber, selectPostsLimit, selectSearchValue],
  (allPosts: Post[], currentPage: number, postsLimit: number, searchValue: string) => {
    const filteredPosts = allPosts.filter((post) => {
      return (
        `${post.id}`.includes(searchValue) ||
        post.body.includes(searchValue) ||
        post.title.includes(searchValue)
      );
    });

    return getPaginatesPosts(currentPage, postsLimit, filteredPosts);
  },
);

export function getPaginatesPosts(pageNumber: number, limit: number, posts: Post[]) {
  const startIndex = (pageNumber - 1) * limit;
  const endIndex = pageNumber * limit;

  return posts.slice(startIndex, endIndex);
}
