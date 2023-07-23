import { SearchInput } from 'components/SearchInput';
import { Table } from 'components/Table';

export const App = () => {
  return (
    <section className={'container'}>
      <SearchInput />

      <Table />
    </section>
  );
};
