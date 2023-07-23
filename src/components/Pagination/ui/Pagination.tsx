import cls from './Pagination.module.css';

interface Props {
  pagesCount: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}
export const Pagination = ({ currentPage, pagesCount, onChangePage }: Props) => {
  return (
    <div className={cls.pagination}>
      <button
        className={cls.button}
        onClick={() => onChangePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Назад
      </button>

      <div className={cls.pages}>
        {Array.from({ length: pagesCount }, (_, index) => index + 1).map((pageNumber) => (
          <span key={pageNumber} className={pageNumber === currentPage ? cls.page_active : ''}>
            {pageNumber}
          </span>
        ))}
      </div>

      <button
        className={cls.button}
        onClick={() => onChangePage(currentPage + 1)}
        disabled={currentPage === pagesCount}
      >
        Далее
      </button>
    </div>
  );
};
