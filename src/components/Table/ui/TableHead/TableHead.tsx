import cls from '../Table.module.css';
import { TableHeadCol } from './TableHeadCol';

export const TableHead = () => {
  return (
    <div className={cls.table_head}>
      <div className={cls.row}>
        <TableHeadCol title={'ID'} />
        <TableHeadCol title={'Заголовок'} />
        <TableHeadCol title={'Описание'} />
      </div>
    </div>
  );
};
