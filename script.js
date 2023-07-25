const draggableElement = document.getElementById("draggableElement");
const dropZone = document.getElementById("dropZone");

// Обработчик события начала перетаскивания элемента
draggableElement.addEventListener("dragstart", (event) => {
  // Задаем данные для перетаскивания (например, ID элемента)
  event.dataTransfer.setData("text/plain", event.target.id);
});

// Обработчик события входа элемента в область сброса
dropZone.addEventListener("dragenter", (event) => {
  // Предотвращаем стандартное поведение браузера (открытие файла, например)
  event.preventDefault();
});

// Обработчик события перемещения элемента над областью сброса
dropZone.addEventListener("dragover", (event) => {
  // Предотвращаем стандартное поведение браузера (открытие файла, например)
  event.preventDefault();
});

// Обработчик события отпускания элемента в области сброса
dropZone.addEventListener("drop", (event) => {
  // Предотвращаем стандартное поведение браузера (открытие файла, например)
  event.preventDefault();

  // Получаем данные перетаскиваемого элемента (например, ID элемента)
  const draggedElementId = event.dataTransfer.getData("text/plain");

  // Перемещаем элемент в область сброса
  const draggedElement = document.getElementById(draggedElementId);
  dropZone.appendChild(draggedElement);
});