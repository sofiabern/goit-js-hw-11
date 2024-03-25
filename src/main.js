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

formEl.addEventListener('submit', searchHandler);
function searchHandler(evt) {

  if (gallery.innerHTML) gallery.innerHTML = '';

  loaderEl.style.display="block"

  evt.preventDefault();

  if(!inputEl.value.trim()){
    iziToast.error({
      title: 'Error',
      message:
        'Please enter something!',
    });
    return
  }


  fetchPhotoFromAPI(inputEl.value)
    .then(data => {
      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return
      }

      gallery.innerHTML = createMarkup(data.hits);

      simplelightbox.refresh();
    })
    .catch(error => console.log(error))
    .finally(() =>{
      loaderEl.style.display = 'none';
    });
}

let simplelightbox = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: true,
});


