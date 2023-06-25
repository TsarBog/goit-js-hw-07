
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const collection = document.querySelector('.gallery');
function createGalerryMarkup(arr){
    return arr.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
}

// const galleryItemsMarkup = galleryItems.map(item => createGalerryMarkup(item)).join('');



collection.insertAdjacentHTML('afterbegin', createGalerryMarkup(galleryItems));
collection.addEventListener('click', handlerImg) 

function handlerImg(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('gallery__item')) {
        return;
    }
    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" alt="${evt.target.description}" width="1300" height="900" data-source="${evt.target.dataset.source}">`, {}
    );
    instance.show();   
    document.body.addEventListener('keydown', (evt) => {
  if (evt.key === "Escape") instance.close()
})
};




// function handlerEscModal(evt) {
//     if (evt.code === "Escape") {
//         instance.close(evt)
//     }
// }


// window.addEventListener('keydown', handlerEscModal)
// window.removeEventListener('keydown', handlerEscModal)


