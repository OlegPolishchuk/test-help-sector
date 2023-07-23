import { Post } from 'models/Post';

import cls from '../Table.module.css';
import { TableCol } from './TableCol';

interface Props {
  data: Post;
}
export const TableRow = ({ data }: Props) => {
  const { id, title, body } = data;

  return (
    <div className={cls.row}>
      <TableCol className={cls.col_id}>{id}</TableCol>
      <TableCol>{title}</TableCol>
      <TableCol>{body}</TableCol>
    </div>
  );
};
