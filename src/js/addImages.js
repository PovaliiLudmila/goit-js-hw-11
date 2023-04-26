import axios from 'axios';
export { addImages };

const API_KEY = '35718400-b14bf30c277e8d6dbbf197fc4';
const API_URL = 'https://pixabay.com/api/';

async function addImages(currentQuery, pageNumber, per_page) {
  const params = {
    key: API_KEY,
    q: currentQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: pageNumber,
    per_page: per_page,
  };

  try {
    const response = await axios.get(API_URL, { params });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}