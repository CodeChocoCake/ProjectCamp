const countNum = document.querySelector('h1');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');

let num = 0;

minusBtn.addEventListener('click', () => {
    if (num > 0) countNum.innerText = --num;
});

plusBtn.addEventListener('click', () => {
    if (num < 10) countNum.innerText = ++num;
});
