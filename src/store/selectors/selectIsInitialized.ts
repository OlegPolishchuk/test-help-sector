import { RootState } from 'store/store';

export const selectIsInitialized = (state: RootState) => state.appReducer.isInitialized;
