 export const BASE_URL ='https://jsonplaceholder.typicode.com';
 export const POSTS_API_URL = `${BASE_URL}/posts?_limit=11`;
 export const getPostDetailUrl = (id) => `${BASE_URL}/posts/${id}`;