import { useSortTable } from 'hooks';

import cls from '../Table.module.css';
import { TableHeadCol } from './TableHeadCol';

export const TableHead = () => {
  const { idSortType, titleSortType, bodySortType, handleSort } = useSortTable();

  return (
    <div className={cls.table_head}>
      <div className={cls.row}>
        <TableHeadCol sortType={idSortType} onSort={() => handleSort('id')} title={'ID'} />

        <TableHeadCol
          sortType={titleSortType}
          onSort={() => handleSort('title')}
          title={'Заголовок'}
        />

        <TableHeadCol
          sortType={bodySortType}
          onSort={() => handleSort('body')}
          title={'Описание'}
        />
      </div>
    </div>
  );
};
