import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const container = document.querySelector('.gallery');
const loader = document.querySelector('.show-loader');
let lightbox = null;

function imageTamplate({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <ul class="list-description">
    <li>
      <p class="title-description">Likes</p>
      <p class="text-description">${likes}</p>
    </li>
    <li>
      <p class="title-description">Views</p>
      <p class="text-description">${views}</p>
    </li>
    <li>
      <p class="title-description">Comments</p>
      <p class="text-description">${comments}</p>
    </li>
    <li>
      <p class="title-description">Downloads</p>
      <p class="text-description">${downloads}</p>
    </li>
  </ul>
</li>`;
}

function imagesTamplate(images) {
  return images.map(imageTamplate).join('');
}

export function createGallery(images) {
  const markup = imagesTamplate(images);
  container.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  container.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('loader');
}

export function hideLoader() {
  loader.classList.remove('loader');
}
