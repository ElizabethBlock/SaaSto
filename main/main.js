const numberUserNbElements = document.querySelectorAll('.number__user-nb');

numberUserNbElements.forEach(function(numberUserNb) {
    numberUserNb.parentElement.addEventListener('mouseenter', () => {
        numberUserNb.style.transform = 'rotate3d(1, 1, 1, 360deg)';
        numberUserNb.style.color = '#FF553E';
    });

    numberUserNb.parentElement.addEventListener('mouseleave', () => {
        numberUserNb.style.transform = 'rotate3d(1, 1, 1, 0deg)';
        numberUserNb.style.color = '';
    });
});
