import cls from './Table.module.css';
import { TableBody } from './TableBody/TableBody';
import { TableHead } from './TableHead/TableHead';

export const Table = () => {
  return (
    <div className={cls.table}>
      <TableHead />

      <TableBody />
    </div>
  );
};
