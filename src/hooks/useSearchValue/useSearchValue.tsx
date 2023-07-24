import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { useSearchParams } from 'hooks/useSearchParams/useSearchParams';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { postActions } from 'store/reducers';
import { selectSearchValue } from 'store/selectors';

const DELAY = 500;

export const useSearchValue = () => {
  const dispatch = useAppDispatch();

  const { setParam } = useSearchParams();
  const searchValue = useAppSelector(selectSearchValue);

  const [value, setValue] = useState(searchValue);

  const handleChangeValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      console.log('timeout');
      dispatch(postActions.setSearchValue({ value }));
      setParam('search', value);
    }, DELAY);

    return () => {
      window.clearTimeout(timer);
    };
  }, [value, DELAY]);

  return {
    value,
    handleChangeValue,
  };
};
