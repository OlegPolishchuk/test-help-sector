import { PostsPagination } from 'components/PostsPagination';
import { SearchInput } from 'components/SearchInput';
import { Table } from 'components/Table';
import { useInitializeApp } from 'hooks';

export const App = () => {
  useInitializeApp();

  return (
    <section className={'container'}>
      <SearchInput />

      <Table />

      <PostsPagination />
    </section>
  );
};
