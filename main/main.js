// const numberUserNb = document.querySelectorAll('.number__user-nb');

// function rotateBlock() {
//     numberUserNb.style.transform = 'rotate3d(1, 1, 1, 360deg)';
//     numberUserNb.style.color = '#FF553E'; 
// }

// function resetRotation() {
//     numberUserNb.style.transform = 'rotate3d(1, 1, 1, 0deg)';
//     numberUserNb.style.color = ''; 
// }

// numberUserNb.addEventListener('mouseenter', rotateBlock);
// numberUserNb.addEventListener('mouseleave', resetRotation);


/// Отримуємо всі елементи з класом .number__user-nb
const numberUserNbElements = document.querySelectorAll('.number__user-nb');

// Функція для додавання ротації при наведенні
function rotateOnHover(event) {
    const element = event.target;

    // Перевіряємо, чи ще не була застосована ротація (якщо немає класу "rotated")
    if (!element.classList.contains('rotated')) {
        element.classList.add('rotated'); // Додаємо клас для ротації
    }
}

// Функція для скидання ротації при виході мишки
function resetRotation(event) {
    const element = event.target;

    // Встановлюємо затримку перед скиданням класу, щоб уникнути тряски
    setTimeout(function() {
        element.classList.remove('rotated'); // Видаляємо клас після затримки
    }, 200); // Затримка 200 мс перед скиданням
}

// Додаємо події для кожного елемента
numberUserNbElements.forEach(function(numberUserNb) {
    numberUserNb.addEventListener('mouseenter', rotateOnHover);
    numberUserNb.addEventListener('mouseleave', resetRotation);
});
