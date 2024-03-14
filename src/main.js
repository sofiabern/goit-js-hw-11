import { fetchPhotoFromAPI } from "./js/pixabay-api";

const formEl = document.querySelector('.photosearch-form');
const inputEl = formEl.elements.search;

formEl.addEventListener("submit", searchHandler)

function searchHandler(evt){
    evt.preventDefault()
    fetchPhotoFromAPI(inputEl.value).then((data) =>
    console.log(data))

}


