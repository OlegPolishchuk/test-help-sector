import { RootState } from 'store/store';

export const selectPageNumber = (state: RootState) => state.postReducer.pageNumber;
