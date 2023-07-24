import { useCallback } from 'react';

export const useSearchParams = () => {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const searchParams = new URLSearchParams(url.search);

  const pageNumber = searchParams.get('page') || 1;
  const searchValue = searchParams.get('search') || '';

  const setParam = useCallback((title: string, value: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(title, value.toString());

    console.log(searchParams);
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}?${newSearchParams.toString()}`,
    );
  }, []);

  return {
    setParam,
    currentPage: +pageNumber,
    searchValue,
  };
};
