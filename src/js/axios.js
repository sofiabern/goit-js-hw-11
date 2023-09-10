import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
async function serviceImages(searchQuery, page = 1) {
  const params = new URLSearchParams({
    key: '39362116-97c7d5619fee8bb7db7b12f12',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 40,
  });
  return await axios(`?${params}`);
}
export { serviceImages };
