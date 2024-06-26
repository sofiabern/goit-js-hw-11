import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotoFromAPI } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

// DOM elements
const formEl = document.querySelector('.search-form');
const inputEl = formEl.elements.search;
const gallery = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const simplelightbox = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
});

function loaderToggle() {
  loaderEl.classList.toggle('hidden');
}

function cleanGallery() {
  if (gallery.innerHTML) gallery.innerHTML = '';
}

function showError(message) {
  iziToast.error({
    title: 'Error',
    message: `${message}`,
  });
}

formEl.addEventListener('submit', searchHandler);
function searchHandler(evt) {
  evt.preventDefault();

  cleanGallery();

  loaderToggle();

  if (!inputEl.value.trim()) {
    loaderToggle();
    showError('Please enter something!');
    return;
  }

  fetchPhotoFromAPI(inputEl.value)
    .then(data => {
      if (!data.hits.length) {
        showError('Sorry, there are no images matching your search query. Please try again!')
        return;
      }

      gallery.innerHTML = createMarkup(data.hits);

      // Executing when simplelightbox is not equal to null
      if (simplelightbox) simplelightbox.refresh();
    })

    .catch(error => {
      showError('Sorry, something wrong happened while fetching.')
  
      console.log(error);
    })

    .finally(() => {
      loaderToggle();
    });
}
