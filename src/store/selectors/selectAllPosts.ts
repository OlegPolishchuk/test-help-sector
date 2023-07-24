import { RootState } from 'store/store';

export const selectAllPosts = (state: RootState) => state.postReducer.allPosts;
