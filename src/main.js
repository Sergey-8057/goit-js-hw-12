import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { per_page, getImagesByQuery } from './js/pixabay-api.js';
import {
  loadMoreBtn,
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

let query;
let page;
let maxPage;
const formElem = document.querySelector('.form');

formElem.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', loadMore);

async function onSubmit(event) {
  event.preventDefault();
  clearGallery();
  page = 1;
  const searchInput = event.target.elements['search-text'];
  query = searchInput.value.trim();

  if (!query) {
    iziToast.show({
      message: 'Please enter a search query!',
      position: 'topRight',
      messageColor: 'white',
      backgroundColor: 'orange',
      close: true,
    });
    maxPage = 0;
    updateLoadMoreButton();
    return;
  }

  showLoader();

  try {
    const res = await getImagesByQuery(query, page);

    if (res.images.length === 0) {
      iziToast.show({
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
        messageColor: 'white',
        backgroundColor: 'red',
        close: true,
      });
      maxPage = 0;
      return;
    }

    maxPage = Math.ceil(res.totalHits / per_page);
    createGallery(res.images);
    
  } catch (error) {
    iziToast.show({
      message: `Error loading images: ${error.message}`,
      position: 'topRight',
      messageColor: 'white',
      backgroundColor: 'red',
      close: true,
    });
    query = '';
    page = 0;

  } finally {
    hideLoader();
    lastPage();
    searchInput.value = '';
    updateLoadMoreButton();
  }
}

async function loadMore() {
  showLoader();
  page++;

  try {
    const res = await getImagesByQuery(query, page);
    createGallery(res.images);

    const { height: cardHeight } = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    
  } catch (error) {
    iziToast.show({
      message: `Error loading images: ${error.message}`,
      position: 'topRight',
      messageColor: 'white',
      backgroundColor: 'red',
      close: true,
    });
    
  } finally {
    hideLoader();
    lastPage();
    updateLoadMoreButton();
  }
}

function updateLoadMoreButton() {
  if (page < maxPage) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
  }
}

function lastPage() {
  if (page === maxPage) {
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
      messageColor: 'white',
      backgroundColor: 'blue',
      close: true,
    });
  }
}
