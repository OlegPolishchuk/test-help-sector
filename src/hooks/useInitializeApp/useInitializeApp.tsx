import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { usePageParams } from 'hooks/usePageParams/usePageParams';
import { useEffect } from 'react';
import { selectIsInitialized } from 'store/selectors';
import { initializeApp } from 'store/thunks';

export const useInitializeApp = () => {
  const dispatch = useAppDispatch();

  const isInitialized = useAppSelector(selectIsInitialized);

  const { currentPage, setPageParam } = usePageParams();

  useEffect(() => {
    if (!isInitialized) {
      dispatch(initializeApp(+currentPage));

      setPageParam(currentPage);
    }
  }, [isInitialized]);
};
