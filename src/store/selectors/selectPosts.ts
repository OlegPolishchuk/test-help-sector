import { RootState } from 'store/store';

export const selectPosts = (state: RootState) => state.postReducer.posts;
