// window.addEventListener('load', function() {
//     const background = document.querySelector('.backgroung-img');
//     const scrollPosition = window.scrollY; 
//     background.style.backgroundPosition = `10% ${270 + scrollPosition * 0.5}px`; 
// });

// window.addEventListener('scroll', function() {
//     const background = document.querySelector('.backgroung-img');
//     const scrollPosition = window.scrollY; 
//     background.style.backgroundPosition = `10% ${270 + scrollPosition * 0.5}px`; 
// });


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


window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    document.querySelector(".item1").style.transform = `translateY(${scrollPos * 0.3}px)`;
    document.querySelector(".item2").style.transform = `translateY(-${scrollPos * 0.2}px)`;
    document.querySelector(".item3").style.transform = `translateY(${scrollPos * 0.4}px)`;
    document.querySelector(".item5").style.transform = `translateY(${scrollPos * 0.4}px)`;
    document.querySelector(".item6").style.transform = `translateY(${scrollPos * 0.2}px) rotate(${scrollPos * 0.1}deg)`;
    document.querySelector(".item8").style.transform = `translateY(${scrollPos * 0.4}px)`;
});



