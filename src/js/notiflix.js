import Notiflix from 'notiflix';

function notice() {
  Notiflix.Notify.info(
    'Sorry, there are no images matching your search query. Please try again.',
    {
      width: 'auto',
      fontSize: '32px',
      position: 'top-right',
    }
  );
}

export { notice };
