// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на
// button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColorEl = document.querySelector("body");
const btnChangeColorEL = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");

const onBtnChangeClick = () => {
  const bodyColor = getRandomHexColor();
  spanColorEl.textContent = bodyColor;
  bodyColorEl.style.backgroundColor = bodyColor;
};

btnChangeColorEL.addEventListener("click", onBtnChangeClick);
