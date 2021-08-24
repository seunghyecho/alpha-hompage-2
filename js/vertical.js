$(document).ready(function () {
  if ($(window).width() > 1200) {
    //scroll 위치가 section4 에 있고 slide 가 마지막 일 때만 스크롤이 작동되도록
    $(window).scroll(function (event) {
      var section04_top = document
        .querySelector(".section04")
        .getBoundingClientRect().top;
      var section04_bottom = document
        .querySelector(".section04")
        .getBoundingClientRect().bottom;
      console.log(
        "section04_top : " +
          section04_top +
          " ///// section04_bottom : " +
          section04_bottom
      );
      //slide 영역별 위치 지정

      if (
        section04_top < 100 &&
        section04_bottom < 1020 &&
        section04_top > 0 &&
        section04_bottom > 920
      ) {
        console.log("이벤트 발생 지역");
        //현재 slick slider 가 마지막 페이지인지 체크
        var change_slide_index = $(".slick-current").data("slick-index");
        if (change_slide_index < 4) {
          //scroll event 막기
          $("#abGround").on("scroll touchmove mousewheel", function (e) {
            //scroll event 전파 막기
            e.preventDefault();
            e.stopPropagation();
            //slick slide event 부터 처리하기
            var delta = e.originalEvent.deltaY;
            if (delta > 0) {
              //mouser scroll up
              console.log("scroll going down");
              $slider_pc.slick("slickNext");
              change_slide_index = $(".slick-current").data("slick-index");
              console.log("change_slide_index : " + change_slide_index);
              if (change_slide_index == 3) {
                //mouser wheel event 다시 살리기
                console.log("mouser wheel event 다시 살리기");
                $("#abGround").off("scroll touchmove mousewheel");
              }
            } else {
              console.log("scroll going up");
              $slider_pc.slick("slickPrev");
              change_slide_index = $(".slick-current").data("slick-index");
              if (change_slide_index == 0) {
                //mouser wheel event 다시 살리기
                console.log("mouser wheel event 다시 살리기");
                $("#abGround").off("scroll touchmove mousewheel");
              }
            }
            return false;
          });
        }
      }
    });
  }
});

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
