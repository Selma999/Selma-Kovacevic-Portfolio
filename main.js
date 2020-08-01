/*
const menuToggler = document.querySelector('.menu-toggler');
const topNav = document.querySelector('.top-nav');
menuToggler.addEventListener('click', () => {
    topNav.classList.toggle('change');
})
*/




$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('change');
        $('.top-nav').toggleClass('change');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').toggleClass('change');
        $('.top-nav').toggleClass('change');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
});