$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('change');
        $('.top-nav').toggleClass('change');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('change');
        $('.top-nav').removeClass('change');
    });

    $('nav a[href*="#"').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
});