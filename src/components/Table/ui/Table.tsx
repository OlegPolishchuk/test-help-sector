import { clsx } from 'clsx';
import { ArrowIcon } from 'components/icons';

import cls from './Table.module.css';

export const Table = () => {
  return (
    <div className={cls.table}>
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

      <div className={cls.table_body}>
        <div className={cls.row}>
          <div className={clsx(cls.col, cls.col_id)}>
            <p>1</p>
          </div>

          <div className={cls.col}>
            <p>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</p>
          </div>

          <div className={cls.col}>
            <p>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
              molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
            </p>
          </div>
        </div>

        <div className={cls.row}>
          <div className={clsx(cls.col, cls.col_id)}>
            <p>2</p>
          </div>

          <div className={cls.col}>
            <p>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</p>
          </div>

          <div className={cls.col}>
            <p>
              quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
              molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
