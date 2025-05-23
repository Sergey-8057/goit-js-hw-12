import Axios from 'axios';

const API_KEY = '50350659-cf939682a4626c4b67d291bd3';
const URL = 'https://pixabay.com/api/';

const axios = Axios.create();

export function getImagesByQuery(query) {
  return axios
    .get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => {
      return res.data.hits.map(image => ({
        largeImageURL: image.largeImageURL,
        webformatURL: image.webformatURL,
        tags: image.tags,
        likes: image.likes,
        views: image.views,
        comments: image.comments,
        downloads: image.downloads,
      }));
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}
