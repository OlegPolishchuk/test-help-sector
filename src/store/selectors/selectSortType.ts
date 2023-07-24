import { RootState } from 'store/store';

export const selectIdSortType = (state: RootState) => state.postReducer.sort.id;
export const selectTitleSortType = (state: RootState) => state.postReducer.sort.title;
export const selectBodySortType = (state: RootState) => state.postReducer.sort.body;
