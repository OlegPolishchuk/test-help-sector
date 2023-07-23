import { Pagination } from 'components/Pagination';
import { useAppDispatch, useAppSelector, usePageParams } from 'hooks';
import { postActions } from 'store/reducers';
import { selectPageNumber, selectTotalCountOfPages } from 'store/selectors';

export const PostsPagination = () => {
  const dispatch = useAppDispatch();

  const totalCountOfPages = useAppSelector(selectTotalCountOfPages);
  const currentPage = useAppSelector(selectPageNumber);

  const { setPageNumber } = postActions;

  const { setPageParam } = usePageParams();

  const handleChangePage = (page: number) => {
    dispatch(setPageNumber({ page }));
    setPageParam(page);
  };

  return (
    <Pagination
      pagesCount={totalCountOfPages}
      currentPage={currentPage}
      onChangePage={handleChangePage}
    />
  );
};
