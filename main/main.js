document.addEventListener("DOMContentLoaded", function () {
    const numberUserNbElements = document.querySelectorAll(".number__user-nb");

    numberUserNbElements.forEach((numberUserNb) => {
        numberUserNb.parentElement.addEventListener("mouseenter", () => {
            console.log("mouseenter triggered");
            numberUserNb.style.transform = "rotate3d(1, 1, 1, 360deg)";
            numberUserNb.style.color = "#FF553E";
        });

        numberUserNb.parentElement.addEventListener("mouseleave", () => {
            console.log("mouseleave triggered");
            numberUserNb.style.transform = "rotate3d(1, 1, 1, 0deg)";
            numberUserNb.style.color = "";
        });
    });

    
    window.addEventListener("scroll", function () {
        let scrollPos = window.scrollY;

        function animateOnScroll(selector, transformFunc) {
            let element = document.querySelector(selector);
            if (!element) return;

            let rect = element.getBoundingClientRect();
            let windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                element.style.transform = transformFunc(scrollPos);
            }
        }

        animateOnScroll(".item1", (scroll) => `translateY(${scroll * 0.3}px)`);
        animateOnScroll(".item2", (scroll) => `translateY(-${scroll * 0.2}px)`);
        animateOnScroll(".item3", (scroll) => `translateY(${scroll * 0.4}px)`);
        animateOnScroll(".item5", (scroll) => `translateY(${scroll * 0.4}px)`);
        animateOnScroll(".item6", (scroll) => `translateY(${scroll * 0.2}px) rotate(${scroll * 0.1}deg)`);
        animateOnScroll(".item8", (scroll) => `translateY(${scroll * 0.4}px)`);
        animateOnScroll(".im3", (scroll) => `translateY(${scroll * 0.3}px) rotate(${scroll * 0.2}deg)`);
        animateOnScroll(".im2", (scroll) => `translate(${scroll * 0.3}px, ${scroll * -0.1}px) rotate(${scroll * 0.03}deg)`);

        let blockNumber = document.querySelector(".block-number");
        let blockText = document.querySelector(".block-text");
        let line = document.querySelector(".expanding-line");

        if (blockNumber && blockText && line) {
            let blockNumberBottom = blockNumber.offsetTop + blockNumber.offsetHeight;
            let maxWidth = window.innerWidth * 0.8;
            let lineRect = line.getBoundingClientRect();

            if (lineRect.top <= window.innerHeight && lineRect.bottom >= 0) {
                if (scrollPos > blockNumberBottom - window.innerHeight) {
                    let newWidth = Math.min((scrollPos - (blockNumberBottom - window.innerHeight)) * 2, maxWidth);
                    line.style.width = newWidth + "px";
                }
            }
        }
    });
});



window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    function animateOnScroll(selector, transformFunc) {
        let element = document.querySelector(selector);
        if (!element) return;

        let rect = element.getBoundingClientRect();
        let windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            element.style.transform = transformFunc(scrollPos);
        }
    }

    animateOnScroll(".item15", (scroll) => `translate(${scroll * 0.05}px, -${scroll * 0.05}px) rotate(-${scroll * 0.03}deg)`);
    animateOnScroll(".img11", (scroll) => `translate(-${scroll * 0.05}px, ${scroll * 0.05}px)`);
    animateOnScroll(".item12", (scroll) => `translate(${scroll * 0.05}px, -${scroll * 0.05}px)`);
    animateOnScroll(".item13", (scroll) => `translate(${scroll * 0.1}px, ${scroll * 0.06}px)`);
});



window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    function animateOnScroll(selector, speed) {
        let img = document.querySelector(selector);
        if (!img) return;

        let rect = img.getBoundingClientRect();
        let windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            img.style.transform = `translateY(${scrollPos * speed}px)`;
        }
    }

    animateOnScroll(".im__3d", -0.05);
    animateOnScroll(".im__3d2", 0.05);
});




window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    function animateOnScroll(selector, transformFunc) {
        let element = document.querySelector(selector);
        if (!element) return;

        let rect = element.getBoundingClientRect();
        let windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            element.style.transform = transformFunc(scrollPos);
        }
    }

    animateOnScroll(".Stat1", (scroll) => `translate(-${scroll * 0.04}px, -${scroll * 0.01}px)`);
    animateOnScroll(".Stat2", (scroll) => `translate(${scroll * 0.03}px, -${scroll * 0.05}px)`);
    animateOnScroll(".Stat3", (scroll) => `translate(-${scroll * 0.01}px, ${scroll * 0.03}px)`);
});


document.querySelectorAll(".hover-area").forEach(area => {
    let bounce = area.nextElementSibling; // Знаходимо відповідний .bounce

    area.addEventListener("mouseenter", (event) => {
        let rect = area.getBoundingClientRect();
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let centerX = rect.left + rect.width / 2;
        let centerY = rect.top + rect.height / 2;

        // Розрахунок зміщення
        let offsetX = (mouseX - centerX) > 0 ? -16 : 16; // Визначаємо зміщення по X
        let offsetY = (mouseY - centerY) > 0 ? -16 : 16; // Визначаємо зміщення по Y

        // Зміщення по обох осях (X і Y) для відскоку
        bounce.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    area.addEventListener("mouseleave", () => {
        bounce.style.transform = "translate(0, 0)"; // Повертаємо в початкове положення
    });
});
