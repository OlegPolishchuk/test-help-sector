import { RootState } from 'store/store';

export const selectStatus = (state: RootState) => state.postReducer.status;
