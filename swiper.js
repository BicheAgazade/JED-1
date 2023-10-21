const swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 1000,
    },
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

const swiper1 = new Swiper(".mySwiper1", {
    autoplay: {
        delay: 1000,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});