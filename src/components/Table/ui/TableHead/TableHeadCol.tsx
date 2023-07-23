import { clsx } from 'clsx';
import { ArrowIcon } from 'components/icons';
import cls from 'components/Table/ui/Table.module.css';

interface Props {
  title: string;
  className?: string;
}
export const TableHeadCol = ({ title, className }: Props) => {
  return (
    <div className={clsx(cls.table_head__col, className)}>
      <p>{title}</p>
      <ArrowIcon />
    </div>
  );
};
