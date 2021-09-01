// pc progressbar 높이 540
$(document).ready(function () {
  var $slider_pc = $(".section04 .pc .scroll-slider");
  var $progressBar = $(".section04 .pc .progress");
  var $progressBarLabel = $(".section04 .pc .slider__label");

  var _abGround_section04 = $("#abGround .section04").offset().top;
  console.log(_abGround_section04);

  if ($(window).width() > 1200) {
    var scroll_action = "down";
    //scroll 위치가 section4 에 있고 slide 가 마지막 일 때만 스크롤이 작동되도록
    $(window).scroll(function (event) {
      var section03_top = document
        .querySelector(".section03")
        .getBoundingClientRect().top;
      if (section03_top > 100) {
        scroll_action = "down";
      }

      var section04_top = document
        .querySelector(".section04")
        .getBoundingClientRect().top;
      var section04_bottom = document
        .querySelector(".section04")
        .getBoundingClientRect().bottom;
      // console.log( "section04_top : " + section04_top + "/// section04_bottom : " + section04_bottom );

      var section04_offset = document.querySelector(".section04").offsetTop;
      var section05_offset = document.querySelector(".section05").offsetTop;
      // console.log("section04_offset : " + section04_offset);

      //slide 영역별 위치 지정
      if (
        section04_top < 300 &&
        section04_bottom < 1220 &&
        section04_top > 100 &&
        section04_bottom > 1020 &&
        scroll_action == "down"
      ) {
        console.log("이벤트 발생 지역 : " + scroll_action);
        //현재 slick slider 가 마지막 페이지인지 체크
        var change_slide_index = $(".slick-current").data("slick-index");
        if (change_slide_index < 4) {
          //slick slide 이벤트 처리 시점
          window.scrollTo({ top: section04_offset - 100, behavior: "smooth" });

          //scroll event 막기
          $("#abGround").on("scroll touchmove mousewheel", function (e) {
            //scroll event 전파 막기
            e.preventDefault();
            e.stopPropagation();
            //slick slide event 부터 처리하기
            var delta = e.originalEvent.deltaY;
            if (delta > 0) {
              //mouser scroll up
              $slider_pc.slick("slickNext");
              change_slide_index = $(".slick-current").data("slick-index");
              if (change_slide_index == 3) {
                //추가된 부분
                scroll_action = "down";
                window.scrollTo({
                  top: section05_offset - 50,
                  behavior: "smooth",
                });

                //mouser wheel event 다시 살리기
                $("#abGround").off("scroll touchmove mousewheel");
              }
            } else {
              $slider_pc.slick("slickPrev");
              change_slide_index = $(".slick-current").data("slick-index");
              if (change_slide_index == 0) {
                //추가된 부분
                scroll_action = "up";
                //mouser wheel event 다시 살리기
                $("#abGround").off("scroll touchmove mousewheel");
              }
            }
            return false;
          });
        }
      }
    });
  }

  $slider_pc.on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      if (event.cancelable) event.preventDefault();

      var calc = 25 + (nextSlide / slick.slideCount) * 100;

      $progressBar.css("height", calc * 540 * 0.01);
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
