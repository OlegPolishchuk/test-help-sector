const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = () => {
  return fetch(BASE_URL);
};
