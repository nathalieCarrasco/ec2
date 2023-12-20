document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.carousel', {
        // Configuración del carrusel
        loop: true,
        autoplay: {
            delay: 2000, // Cambia a la siguiente diapositiva cada 5 segundos
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
