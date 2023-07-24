import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { useCallback } from 'react';
import { postActions, TableHeadSort } from 'store/reducers';
import { selectBodySortType, selectIdSortType, selectTitleSortType } from 'store/selectors';

export const useSortTable = () => {
  const dispatch = useAppDispatch();

  const idSortType = useAppSelector(selectIdSortType);
  const titleSortType = useAppSelector(selectTitleSortType);
  const bodySortType = useAppSelector(selectBodySortType);

  const handleSort = useCallback((columnTitle: keyof TableHeadSort) => {
    console.log('sort click');
    dispatch(postActions.sortTable({ columnTitle }));
  }, []);

  return {
    idSortType,
    titleSortType,
    bodySortType,
    handleSort,
  };
};
