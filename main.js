const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

btn.addEventListener("click", e => {
    e.stopPropagation();
    menu.classList.toggle("otevrene");
});

document.addEventListener("click", () => menu.classList.remove("otevrene"));

menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => menu.classList.remove("otevrene"));
});

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".slider-hlavni")) {
        new Swiper(".slider-hlavni", {
            loop: true,
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
            autoplay: { delay: 5000, disableOnInteraction: false },
        });
    }

    if (document.querySelector(".slider-reference")) {
        new Swiper(".slider-reference", {
            autoHeight: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 24,
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
            breakpoints: {
                700: { slidesPerView: 2, slidesPerGroup: 2 },
                1000: { slidesPerView: 3, slidesPerGroup: 3 },
            },
        });
    }
});