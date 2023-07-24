import { Pagination } from 'components/Pagination';
import { usePostsPagination } from 'hooks';

export const PostsPagination = () => {
  const { totalCountOfPages, currentPage, handleChangePage } = usePostsPagination();

  return (
    <Pagination
      pagesCount={totalCountOfPages}
      currentPage={currentPage}
      onChangePage={handleChangePage}
    />
  );
};
