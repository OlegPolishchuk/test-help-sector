import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { useSearchParams } from 'hooks/useSearchParams/useSearchParams';
import { useCallback } from 'react';
import { postActions } from 'store/reducers';
import { selectPageNumber, selectTotalCountOfPages } from 'store/selectors';

export const usePostsPagination = () => {
  const dispatch = useAppDispatch();

  const totalCountOfPages = useAppSelector(selectTotalCountOfPages);
  const currentPage = useAppSelector(selectPageNumber);

  const { setPageNumber } = postActions;

  const { setParam } = useSearchParams();

  const handleChangePage = useCallback((page: number) => {
    dispatch(setPageNumber({ page }));

    setParam('page', `${page}`);
  }, []);

  return {
    totalCountOfPages,
    currentPage,
    handleChangePage,
  };
};
