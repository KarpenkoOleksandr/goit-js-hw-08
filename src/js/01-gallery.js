import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const container = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
      <a class="gallery__link" href="${original}"
        ><img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
      /></a>
    </li>`;
    });
}
container.insertAdjacentHTML('beforeend', markup.join(''));
// console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
