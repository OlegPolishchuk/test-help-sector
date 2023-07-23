import { clsx } from 'clsx';
import { ReactNode } from 'react';

import cls from '../Table.module.css';

interface Props {
  className?: string;
  children: ReactNode;
}
export const TableCol = ({ children, className }: Props) => {
  return (
    <div className={clsx(cls.col, className)}>
      <p>{children}</p>
    </div>
  );
};
