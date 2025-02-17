if (typeof numberUserNbElements === 'undefined') {
    const numberUserNbElements = document.querySelectorAll('.number__user-nb');

    numberUserNbElements.forEach(function(numberUserNb) {
        numberUserNb.parentElement.addEventListener('mouseenter', () => {
            console.log('mouseenter triggered');
            numberUserNb.style.transform = 'rotate3d(1, 1, 1, 360deg)';
            numberUserNb.style.color = '#FF553E';
        });

        numberUserNb.parentElement.addEventListener('mouseleave', () => {
            console.log('mouseleave triggered');
            numberUserNb.style.transform = 'rotate3d(1, 1, 1, 0deg)';
            numberUserNb.style.color = '';
        });
    });
}

window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    document.querySelector(".item1").style.transform = `translateY(${scrollPos * 0.3}px)`;
    document.querySelector(".item2").style.transform = `translateY(-${scrollPos * 0.2}px)`;
    document.querySelector(".item3").style.transform = `translateY(${scrollPos * 0.4}px)`;
    document.querySelector(".item5").style.transform = `translateY(${scrollPos * 0.4}px)`;
    document.querySelector(".item6").style.transform = `translateY(${scrollPos * 0.2}px) rotate(${scrollPos * 0.1}deg)`;
    document.querySelector(".item8").style.transform = `translateY(${scrollPos * 0.4}px)`;
});


window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    let blockNumber = document.querySelector(".block-number");
    let blockText = document.querySelector(".block-text");
    let line = document.querySelector(".expanding-line");

    let blockNumberBottom = blockNumber.offsetTop + blockNumber.offsetHeight;
    let blockTextTop = blockText.offsetTop;
    let maxWidth = window.innerWidth * 0.8;

    let lineRect = line.getBoundingClientRect();
    
    if (lineRect.top <= window.innerHeight && lineRect.bottom >= 0) {
        if (scrollPos > blockNumberBottom - window.innerHeight) {
            let newWidth = Math.min((scrollPos - (blockNumberBottom - window.innerHeight)) * 2, maxWidth);
            line.style.width = newWidth + "px";
        }
    }
});
