// Отримуємо елемент, який буде обертатись
const numberUserNb = document.querySelector('.number__user-nb');

// Функція для додавання ротації при наведенні
function rotateBlock() {
    numberUserNb.style.transform = 'rotate3d(1, 1, 1, 360deg)';
    numberUserNb.style.color = '#FF553E';  // Змінюємо колір при наведенні
}

// Функція для повернення початкового стану
function resetRotation() {
    numberUserNb.style.transform = 'rotate3d(1, 1, 1, 0deg)';
    numberUserNb.style.color = '';  // Відновлюємо колір
}

// Додаємо події для наведеного та виведеного стану мишки
numberUserNb.addEventListener('mouseenter', rotateBlock);
numberUserNb.addEventListener('mouseleave', resetRotation);
