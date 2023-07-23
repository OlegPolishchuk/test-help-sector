import { RootState } from 'store/store';

export const selectPostsCount = (state: RootState) => state.postReducer.postsCount;
