// Логика переключения миниатюр
document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // Убираем класс active у всех миниатюр
    document
      .querySelectorAll(".thumbnail")
      .forEach((thumb) => thumb.classList.remove("active"));

    // Добавляем класс active к текущей миниатюре
    thumbnail.classList.add("active");

    // Получаем новый srcset и src для webp и jpg
    const newImageWebp = thumbnail.getAttribute("srcset");
    const newImageJpg = thumbnail.getAttribute("src");

    // Обновляем главное изображение
    const mainImagePicture = document.querySelector(".main-image picture");
    const mainImageSource = mainImagePicture.querySelector("source");
    const mainImageImg = mainImagePicture.querySelector("img");

    if (newImageWebp) mainImageSource.setAttribute("srcset", newImageWebp);
    if (newImageJpg) mainImageImg.setAttribute("src", newImageJpg);
  });
});

document.querySelectorAll(".size").forEach((size) => {
  size.addEventListener("click", () => {
    // Убираем класс active у всех размеров
    document
      .querySelectorAll(".size")
      .forEach((s) => s.classList.remove("active"));

    // Добавляем класс active к текущему размеру
    size.classList.add("active");
  });
});

// Логика модального окна
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modal-image");
const closeModal = document.querySelector(".modal .close");

const mainImagePicture = document.querySelector(".main-image picture");
const mainImageImg = mainImagePicture.querySelector("img");

mainImageImg.addEventListener("click", () => {
  // Получаем текущий src и srcset главного изображения
  const mainImageSrc = mainImageImg.getAttribute("src");
  const mainImageSrcSet = mainImagePicture
    .querySelector("source")
    .getAttribute("srcset");

  // Устанавливаем значения в модальное изображение
  if (mainImageSrc) modalImage.setAttribute("src", mainImageSrc);
  if (mainImageSrcSet) modalImage.setAttribute("srcset", mainImageSrcSet);

  // Показываем модальное окно
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Закрытие модального окна при клике вне содержимого
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
