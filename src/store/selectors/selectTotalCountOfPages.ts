import { RootState } from 'store/store';

export const selectTotalCountOfPages = (state: RootState) => state.postReducer.totalCountOfPages;
