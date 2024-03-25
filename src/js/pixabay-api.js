function fetchPhotoFromAPI(search) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '39362116-97c7d5619fee8bb7db7b12f12';
  const imageType = 'photo';
  const photoOrientation = 'horizontal';
  const safeSearch = true;

  const params = new URLSearchParams({
    key: API_KEY,
    q: search,
    image_type: imageType,
    orientation: photoOrientation,
    safesearch: safeSearch,
  });

  return fetch(`${BASE_URL}?${params}`).then((response) => {

    if(!response.ok){
        throw new Error(response.statusText)
    }

    return response.json()
  })
}

export {fetchPhotoFromAPI}