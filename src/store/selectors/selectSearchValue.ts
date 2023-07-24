import { RootState } from 'store/store';

export const selectSearchValue = (state: RootState) => state.postReducer.searchValue;
