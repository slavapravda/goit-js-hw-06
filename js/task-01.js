// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
//  текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const categoriesOfNumber = document.querySelectorAll("li.item");
console.log("Number of categories: ", categoriesOfNumber.length);

categoriesOfNumber.forEach((el) => {
  const titleOfEl = el.querySelector("h2");
  console.log(`Category: ${titleOfEl.textContent}`);

  const quantityOfEl = el.querySelectorAll("ul > li");
  console.log(`Elements: ${quantityOfEl.length}`);
});
