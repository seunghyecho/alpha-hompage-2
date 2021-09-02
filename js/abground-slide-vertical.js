// pc progressbar 높이 540
$(document).ready(function () {
  var $slider = $(".section04 .scroll-slider");

  var $progressBar_pc = $(".section04 .pc .progress");
  var $progressBar_mb = $(".section04 .mb .progress");

  var $progressBarHeight_pc = $progressBar_pc.children("span").height();
  var $progressBarHeight_mb = $progressBar_mb.children("span").height();

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    cssEase: "linear",
  });

  if ($(window).width() > 1200) {
    // pc
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

      var section04_offset = document.querySelector(".section04").offsetTop;
      var section05_offset = document.querySelector(".section05").offsetTop;

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
              $slider.slick("slickNext");
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
              $slider.slick("slickPrev");
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
    // pc progressBar
    $slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        if (event.cancelable) event.preventDefault();

        var calc = 25 + (nextSlide / slick.slideCount) * 100;
        $progressBar_pc.css("height", calc * $progressBarHeight_pc * 0.01);
      }
    );
  } else if ($(window).width() < 1200) {
    // mb
    // mb progressBar
    $slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        if (event.cancelable) event.preventDefault();

        var calc = 25 + (nextSlide / slick.slideCount) * 100;
        $progressBar_mb.css("height", calc * $progressBarHeight_mb * 0.01);
      }
    );
  }
});
