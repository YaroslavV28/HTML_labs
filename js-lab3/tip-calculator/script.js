// Шаг 1. Находим элементы на странице
const billInput = document.getElementById('bill');
const tipSelect = document.getElementById('tip');
const calcBtn = document.getElementById('calcBtn');
const resultBlock = document.getElementById('result');

// Шаг 2. Функция, которая считает чаевые
function calculateTips() {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipSelect.value);

  if (isNaN(bill) || bill <= 0) {
    resultBlock.textContent = 'Пожалуйста, введите корректную сумму.';
    resultBlock.style.borderColor = 'red';
    return;
  }

  const tipAmount = bill * tipPercent / 100;
  const total = bill + tipAmount;

  resultBlock.textContent =
    'Сумма счёта: ' + bill.toFixed(2) + ' ₽\n' +
    'Чаевые (' + tipPercent + '%): ' + tipAmount.toFixed(2) + ' ₽\n' +
    'Итого: ' + total.toFixed(2) + ' ₽';

  if (tipPercent < 10) {
    resultBlock.style.borderColor = 'green';
  } else if (tipPercent <= 15) {
    resultBlock.style.borderColor = 'orange';
  } else {
    resultBlock.style.borderColor = 'red';
  }
}

// Шаг 3. Привязываем функцию к кнопке
calcBtn.addEventListener('click', calculateTips);