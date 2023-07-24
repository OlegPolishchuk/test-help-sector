import { useCallback } from 'react';

export const useSearchParams = () => {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const searchParams = new URLSearchParams(url.search);

  const pageNumber = searchParams.get('page') || 1;
  const searchValue = searchParams.get('search') || '';

  const setParam = useCallback((title: string, value: string) => {
    searchParams.set(title, value.toString());
    window.history.replaceState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
  }, []);

  return {
    setParam,
    currentPage: +pageNumber,
    searchValue,
  };
};
