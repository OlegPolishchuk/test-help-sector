import { useCallback } from 'react';

export const usePageParams = () => {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const searchParams = new URLSearchParams(url.search);

  const pageNumber = searchParams.get('page') || 3;

  const setPageParam = useCallback((pageNumber: number) => {
    searchParams.set('page', pageNumber.toString());
    window.history.replaceState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
  }, []);

  return {
    setPageParam,
    currentPage: +pageNumber,
  };
};
