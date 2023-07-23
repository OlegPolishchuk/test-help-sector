import { SearchIcon } from 'components/icons';
import cls from 'components/SearchInput/ui/SearchInput.module.css';
import { forwardRef } from 'react';

export const SearchInput = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <div className={cls.searchInput}>
      <input className={cls.input} type={'text'} ref={ref} placeholder={'Поиск'} />

      <SearchIcon className={cls.icon} />
    </div>
  );
});
