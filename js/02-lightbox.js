import { galleryItems } from './gallery-items.js';
// Change code below this line

const collection = document.querySelector('.gallery');
function createGalerryMarkup(arr){
    return arr.map(({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`).join('')
}

collection.insertAdjacentHTML('afterbegin', createGalerryMarkup(galleryItems));
// collection.addEventListener('click', handlerImg);
let lightbox = new SimpleLightbox('.gallery a',
        { captionsData: 'alt', captionDelay: 250 });
 


//    const instance = basicLightbox.create(
//   `
//     <img width="1300" height="auto" src="">`,
//   {
//     onShow: (instance) => {
//       window.addEventListener('keydown', onEscKeyPress);
//     },
//     onClose: (instance) => {
//       window.removeEventListener('keydown', onEscKeyPress);
//     },
//   }
// );



