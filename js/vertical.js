$(document).ready(function () {
  var $slider = $(".section04 .scroll-slider");
  var $progressBar = $(".section04 .progress");
  var $progressBarLabel = $(".section04 .slider__label");

  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = 25 + (nextSlide / slick.slideCount) * 100;

    $progressBar.css("height", calc + "%").attr("aria-valuenow", calc);

    $progressBarLabel.text(calc + "% completed");
  });

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    vertical: true,
    verticalSwiping: true,
    arrows:false,
    cssEase: 'linear',
  });
});
