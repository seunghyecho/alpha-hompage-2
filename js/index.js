jQuery(document).ready(function () {
    console.log("hihi");
  
    // 마우스커서---------------------------------------------------
    const cursor = $(".cursor");
    document.addEventListener("mousemove", function (e) {
      cursor.css("cursor", "url(../assets/cursor/cursor_Hover.svg)");
    });
  
    //약관, 개인정보, 모바일메뉴 팝업------------------------------
    const popup = $(".popup");
    popup.hide();
  
    // BTN - open
    const agreementBtn = $(".agreementBtn");
    const privacyBtn = $(".privacyBtn");
    const gnbBtn = $(".gnbBtn");
    const gnb_menu01 = $("#gnb .inner ul li #menu01");
    const gnb_menu02 = $("#gnb .inner ul li #menu02");
    const gnb_menu03 = $("#gnb .inner ul li #menu03");
    const gnb_menu04 = $("#gnb .inner ul li #menu04");
  
    // popup
    const agreementPopup = $("#agreement");
    const privacyPopup = $("#privacy");
    const gnbPopup = $("#gnb");
  
    agreementBtn.on("click", function () {
      agreementPopup.fadeIn();
    });
    privacyBtn.on("click", function () {
      privacyPopup.fadeIn();
    });
    gnbBtn.on("click", function () {
      gnbPopup.fadeIn();
  
      // 모바일 메뉴 animate
      gnb_menu01.stop().animate(
        {
          opacity: "1",
          top: "0px",
        },
        500,
        function () {
          gnb_menu02.stop().animate(
            {
              opacity: "1",
              top: "0px",
            },
            500,
            function () {
              gnb_menu03.stop().animate(
                {
                  opacity: "1",
                  top: "0px",
                },
                500,
                function () {
                  gnb_menu04.stop().animate(
                    {
                      opacity: "1",
                      top: "0px",
                    },
                    500
                  );
                }
              );
            }
          );
        }
      );
    });
  
    // BTN - close
    const closeBtn = $(".popup .closeBtn");
  
    closeBtn.on("click", function () {
      $("#agreement").fadeOut();
      $("#privacy").fadeOut();
      $("#gnb").fadeOut();
  
      // 모바일 메뉴 animate reset
      gnb_menu01.removeAttr("style");
      gnb_menu02.removeAttr("style");
      gnb_menu03.removeAttr("style");
      gnb_menu04.removeAttr("style");
    });
  
    // 모바일 헤더 스크롤-------------------------------------------
  
    $(window).scroll(function () {
      var height = $(document).scrollTop();
  
      if (height > $("header").height()) {
        $("header").addClass("fixed");
        $(".mb-main").css({
          position: "relative",
        });
      } else {
        $("header").removeClass("fixed");
        $(".mb-main").css({
          position: "relative",
        });
      }
    });
  
    // 모바일 메인 스크롤-------------------------------------------
    var $mb_main_section01_mainText01 = $(".mb-main .section01 .mainText01");
    var $mb_main_section01_mainText02 = $(".mb-main .section01 .mainText02");
  
    $(window).scroll(function () {
      $mb_main_section01_mainText01.animate({ opacity: "0" }, 500, function () {
        $mb_main_section01_mainText02.animate({ opacity: "1" }, 500);
      });
    });
  
    // ABground --------------------------
  
    var $abGround_section02 = $("#abGround .section02");
    var $abGround_section05 = $("#abGround .section05");
    var $abGround_section06 = $("#abGround .section06");
  
    // ABground section02 animate--------------------------
    $abGround_section02.one("mouseenter", function () {
      var $arrow = $("#abGround .arrow");
      $arrow.addClass("on");
    });
  
    // ABground section05 animate--------------------------
    var textAni01 = $(".textAni01");
    var textAni02 = $(".textAni02");
    var textAni03 = $(".textAni03");
    var textAni04 = $(".textAni04");
    $abGround_section05.one("mouseenter", function () {
      textAni02.animate({ opacity: "1" }, 1000);
      // textAni04.animate({ opacity: '0' }, 1000);
      textAni01.animate(
        {
          opacity: "0",
          top: "-20px",
        },
        1000,
        function () {
          textAni02.animate(
            {
              //  left: '125px',
              left: $(".textAni03").width(),
            },
            1000,
            function () {
              textAni03.animate(
                {
                  opacity: "1",
                },
                1000
              );
              textAni04.animate(
                {
                  opacity: "1",
                  marginTop: "0",
                },
                1000
              );
            }
          );
        }
      );
    });
  
    // ABground section06 animate--------------------------
    $abGround_section06.one("mouseenter", function () {
      var $section06_h1 = $(".section06 h1");
      var $section06_item = $(".section06 .item-container > .item");
      $section06_h1.addClass("animate__fadeInUp");
      $section06_item.addClass("animate__fadeInUp");
    });
  
  
  
    // whyAb ----------------------------------------------------------------
  
    $(document).on("scroll", function () {
      var height = $(document).scrollTop();
  
      var _scrollTop = window.scrollY || document.documentElement.scrollTop;
  
      var _whyAb_section02 = $("#whyAb .section02").offset().top;
      var _whyAb_section03 = $("#whyAb .section03").offset().top;
      var _whyAb_section04 = $("#whyAb .section04").offset().top;
      var _whyAb_section05 = $("#whyAb .section05").offset().top;
      var _whyAb_section06 = $("#whyAb .section06").offset().top;
      var _whyAb_section07 = $("#whyAb .section07").offset().top;
  
      if (_scrollTop > _whyAb_section02 - 350) {
        var $section02_sectionInfo = $(".section02 .sectionInfo");
        $section02_sectionInfo.addClass("animate__fadeInUp");
      }
      if (_scrollTop > _whyAb_section03 - 700) {
        var $section03_sectionInfo = $(".section03 .sectionInfo");
        $section03_sectionInfo.addClass("animate__fadeInUp");
      }
  
      if (_scrollTop > _whyAb_section04 - 700) {
        var $section04_animate = $(".section04 .animate__animated");
        $section04_animate.addClass("animate__fadeInUp");
      }
  
      if (_scrollTop > _whyAb_section05 - 700) {
        var $section05_animate = $(".section05 .animate__animated");
        $section05_animate.addClass("animate__fadeInUp");
      }
  
      if (_scrollTop > _whyAb_section06 - 700) {
        var $section06_h2 = $(".section06 h2");
        $section06_h2.addClass("animate__fadeInUp");
      }
    });
  
    $(document).on("scroll", function () {
      // portfolio-------------------------------------------------------
  
      var $portfolio_section02 = $("#portfolio .section02");
      var $portfolio_section04 = $("#portfolio .section04.pc");
  
  
      var height = $(document).scrollTop();
      var _scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  
      var _portfolio_section02 = $("#portfolio .section02").offset().top;
      var _portfolio_section04 = $("#portfolio .section04.pc").offset().top;
      var _portfolio_section04_inner01 = $portfolio_section04.children(".inner01").offset().top;
      var _portfolio_section04_inner02 = $portfolio_section04.children(".inner02").offset().top;
  
  
      if (_scrollTop > _portfolio_section02 - 350) {
        var $section02_inner_item_text = $(
          " #portfolio .section02 .inner-item > * "
        );
        $section02_inner_item_text.addClass("animate__fadeInUp");
      }
  
      if (_scrollTop > _portfolio_section04_inner01 - 350) {
          var $inner01_arrow = $(".inner01 .arrow");
          $inner01_arrow.addClass("on");
      }
      if (_scrollTop > _portfolio_section04_inner02 - 350) {
          var $inner01_arrow = $(".inner02 .arrow");
          $inner01_arrow.addClass("on");
      }
    });
  });
  