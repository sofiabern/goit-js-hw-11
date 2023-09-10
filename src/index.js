import { elems } from './js/elements';
import { serviceImages } from './js/axios';
import { createMarkup } from './js/markup';
import { notifyNoImg, notifyEndOfGallery } from './js/notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 0,
  close: true,
  history: true,
  animationSpeed: 250,
  fadeSpeed: 250,
  loop: true,
  docClose: true,
  swipe: true,
  disableScroll: true,
  centered: true,
});

elems.form.addEventListener('submit', submitHandler);
elems.loadMoreBtn.addEventListener('click', loadMoreHandler);

let searchQuery = '';
let page = 1;
let totalImages = [];
let totalHits = 0;

async function submitHandler(evt) {
  evt.preventDefault();
  searchQuery = evt.currentTarget.searchQuery.value;
  try {
    const data = await serviceImages(searchQuery, page);
    const {
      data: { hits, totalHits: newTotalHits },
    } = data;

    totalHits = newTotalHits;
    if (hits.length === 0) {
      notifyNoImg();
      return;
    }

    elems.gallery.innerHTML = createMarkup(hits);
    hits.map(img => totalImages.push(img));
    console.log(totalImages.length);
    elems.loadMoreBtn.classList.remove('visually-hidden');
  } catch (error) {
    console.log(error);
  }
}

async function loadMoreHandler() {
  try {
    const data = await serviceImages(searchQuery, page);
    const {
      data: { hits, totalHits: newTotalHits },
    } = data;

    totalHits = newTotalHits;

    if (hits.length === 0) {
      notifyNoImg();
      return;
    }

    hits.map(img => totalImages.push(img));
    console.log(totalImages.length);

    elems.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
    lightbox.refresh();
    if (totalImages.length >= totalHits) {
      notifyEndOfGallery();
      elems.loadMoreBtn.classList.add('visually-hidden');
    } else {
      elems.loadMoreBtn.classList.remove('visually-hidden');
    }

    page += 1;
  } catch (error) {
    console.log(error);
  }
}
