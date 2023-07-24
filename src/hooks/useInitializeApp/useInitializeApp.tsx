import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { useSearchParams } from 'hooks/useSearchParams/useSearchParams';
import { useEffect } from 'react';
import { selectIsInitialized } from 'store/selectors';
import { initializeApp } from 'store/thunks';

export const useInitializeApp = () => {
  const dispatch = useAppDispatch();

  const isInitialized = useAppSelector(selectIsInitialized);

  const { currentPage, setParam, searchValue } = useSearchParams();

  useEffect(() => {
    if (!isInitialized) {
      dispatch(initializeApp({ page: +currentPage, searchValue }));

      setParam('page', `${currentPage}`);

      if (searchValue !== '') {
        setParam('search', searchValue);
      }
    }
  }, [isInitialized]);
};
