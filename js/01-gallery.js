import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createColorCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createColorCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, discription }) => {
      return `
        <div class = "gallery__item">
            <a class = "gallery__link" href = "${original}">
                <img
                class = "gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${discription}"
                />
            </a>
        </div>`;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const isColorSwatchEl = evt.target.classList.contains("gallery__image");
  if (!isColorSwatchEl) {
    return;
  }
  const swatchEl = evt.target.dataset.source;

  const instance = basicLightbox.create(`
  <div class = "modal">
  <img src = "${swatchEl}" width="800" height="600">
  </div> `);
  instance.show();
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
