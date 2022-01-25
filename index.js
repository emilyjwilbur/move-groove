// document ready function

$(function() {
    // store jquery references in const variables
    const headerNav = $('header nav');
    const hamburgerMenu = $('#hamburger-menu');
    const search = $('#search');
    const searchContainerHide = $('#search-container-hide');
    const searchContainer = $('#search-container');
    const youtubeButton = $('.youtube-button');
    const videoFrame = $('#video-frame');
    const videoFrameHide = $('#video-frame-hide');
    const embedVideo = $('#embed-video');

    // initialize hero slider
    $('#hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows: false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus:false,
        pauseOnHover: false,
        fade:true,
        speed:1000,
        cssEase: 'linear',
    });
    
});