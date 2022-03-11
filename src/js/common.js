console.log('code from common js');

// slider settings

$(document).ready(function(){
  $('.slider-slick').slick({
    arrows: true,
    prevArrow: $('.controls__left'),
    nextArrow: $('.controls__right'),
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false
  });
});