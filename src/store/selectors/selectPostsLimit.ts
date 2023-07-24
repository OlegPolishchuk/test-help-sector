import { RootState } from 'store/store';

export const selectPostsLimit = (state: RootState) => state.postReducer.postLimit;
