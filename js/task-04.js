// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const span = document.querySelector ('#value');

let counterValue = 0;

const decrClick = () => {
    counterValue -= 1
    span.textContent = counterValue;
}

const incrClick = () => {
    counterValue += 1
    span.textContent = counterValue;
}

btnDecrement.addEventListener('click', decrClick)
btnIncrement.addEventListener('click', incrClick)








// btnDecrement.addEventListener('click', () => {
//     counterValue.textContent --;
// })

// btnIncrement.addEventListener('click', () => {
//     counterValue.textContent ++;
// })
