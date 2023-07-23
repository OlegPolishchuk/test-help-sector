import { clsx } from 'clsx';
import { ArrowIcon } from 'components/icons';

import cls from '../Table.module.css';

export const TableHead = () => {
  return (
    <div className={cls.table_head}>
      <div className={cls.row}>
        <div className={clsx(cls.table_head__col, cls.col_id)}>
          <p>ID</p>
          <ArrowIcon />
        </div>

        <div className={clsx(cls.table_head__col, cls.col_title)}>
          <p className={cls.table_head_title}>Заголовок</p>
          <ArrowIcon />
        </div>

        <div className={clsx(cls.table_head__col, cls.col_description)}>
          <p className={cls.table_head_description}>Описание</p>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};
