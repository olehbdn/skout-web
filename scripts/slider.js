$(".slider").slick({
  dots: true,
  arrows: false,
});

$(".slider-responsive").slick({
  // dots: true,
  infinite: false,
  speed: 300,
  swipeToSlide: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".slider-for-companies").slick({
  // это изначально slick слайдер для основного блока изображений
  slidesToShow: 1, // по одному слайдеру
  slidesToScroll: 1, // по одному менять
  arrows: false, // включение стрелок (если не нужны false)
  asNavFor: ".images_dotted", // указываем что навигация для слайдера будет отдельно (указываем класс куда вешаем навигацию)
});

$(".images_dotted").slick({
  slidesToShow: 5, // указываем что нужно показывать 3 навигационных изображения
  asNavFor: ".slider-for-companies", // указываем что это навигация для блока выше
  focusOnSelect: true, // указываем что бы слайделось по клику
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
