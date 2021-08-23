// pc progressbar 높이 540
$(document).ready(function () {
  var $slider_pc = $(".section04 .pc .scroll-slider");
  var $progressBar = $(".section04 .pc .progress");
  var $progressBarLabel = $(".section04 .pc .slider__label");

  $slider_pc.on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      if (event.cancelable) event.preventDefault();

      var calc = 25 + (nextSlide / slick.slideCount) * 100;

      $progressBar.css("height", calc * 540 * 0.01);
      console.log($progressBar);
      $progressBarLabel.text(calc + "% completed");
    }
  );

  $slider_pc.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    cssEase: "linear",
  });
});

// mb progressbar 높이 200
$(document).ready(function () {
  var $slider_mb = $(".section04 .mb .scroll-slider");
  var $progressBar = $(".section04 .mb .progress");
  var $progressBarLabel = $(".section04 .mb .slider__label");

  $slider_mb.on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      if (event.cancelable) event.preventDefault();
      var calc = 25 + (nextSlide / slick.slideCount) * 100;

      $progressBar.css("height", calc * 200 * 0.01);

      $progressBarLabel.text(calc + "% completed");
    }
  );

  $slider_mb.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    cssEase: "linear",
  });
});
