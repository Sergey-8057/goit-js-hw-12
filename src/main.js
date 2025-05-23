import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  clearGallery();
  const searchInput = event.target.elements['search-text'];
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.show({
      message: 'Please enter a search query!',
      position: 'topRight',
      messageColor: 'white',
      backgroundColor: 'orange',
      close: true,
    });
    return;
  }

  showLoader();

  getImagesByQuery(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.show({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
          messageColor: 'white',
          backgroundColor: 'red',
          close: true,
        });
        return;
      }
      createGallery(images);
    })
    .catch(error => {
      iziToast.show({
        message: `Error loading images: ${error.message}`,
        position: 'topRight',
        messageColor: 'white',
        backgroundColor: 'red',
        close: true,
      });
    })
    .finally(() => {
      hideLoader();
      searchInput.value = '';
    });
}
