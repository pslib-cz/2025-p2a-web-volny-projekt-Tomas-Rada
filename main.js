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
    if (document.querySelector(".swiper")) {
        new Swiper(".swiper", {
            loop: true,
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
            autoplay: { delay: 5000, disableOnInteraction: false },
        });
    }
});
