

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

window.addEventListener('scroll', function() {
    const background = document.querySelector('.backgroung-img');
    const scrollPosition = window.scrollY; 
    background.style.backgroundPosition = `330px ${250 + scrollPosition * 0.5}px`; 
});



document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".features-text");
 
    text.addEventListener("mousemove", function (e) {
       const { left, top } = text.getBoundingClientRect();
       const x = e.clientX - left;
       const y = e.clientY - top;
       text.style.setProperty("--x", `${x}px`);
       text.style.setProperty("--y", `${y}px`);
    });
 });
 