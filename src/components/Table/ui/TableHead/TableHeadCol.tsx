import { clsx } from 'clsx';
import { ArrowIcon } from 'components/icons';
import cls from 'components/Table/ui/Table.module.css';
import { Sort } from 'store/reducers';

interface Props {
  title: string;
  className?: string;
  onSort: () => void;
  sortType: Sort;
}
export const TableHeadCol = ({ title, className, onSort, sortType }: Props) => {
  return (
    <div className={clsx(cls.table_head__col, className)}>
      <button className={clsx('button_raw', cls.table_head_button)} onClick={onSort}>
        <p>{title}</p>

        <ArrowIcon className={sortType === 'desc' ? cls.inverted : ''} />
      </button>
    </div>
  );
};
