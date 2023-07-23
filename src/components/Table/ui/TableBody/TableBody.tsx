import { useAppSelector } from 'hooks';
import { selectPosts } from 'store/selectors';

import cls from '../Table.module.css';
import { TableRow } from './TableRow';

export const TableBody = () => {
  const posts = useAppSelector(selectPosts);

  return (
    <div className={cls.table_body}>
      {posts.map((post) => (
        <TableRow key={post.id} data={post} />
      ))}
    </div>
  );
};
