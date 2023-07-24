import { SearchIcon } from 'components/icons';
import cls from 'components/SearchInput/ui/SearchInput.module.css';
import { useSearchValue } from 'hooks/useSearchValue/useSearchValue';
import { forwardRef } from 'react';

export const SearchInput = forwardRef<HTMLInputElement>((_, ref) => {
  const { value, handleChangeValue } = useSearchValue();

  return (
    <div className={cls.searchInput}>
      <input
        className={cls.input}
        type={'text'}
        ref={ref}
        placeholder={'Поиск'}
        value={value}
        onChange={handleChangeValue}
      />

      <SearchIcon className={cls.icon} />
    </div>
  );
});
