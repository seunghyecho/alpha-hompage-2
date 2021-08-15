jQuery(document).ready(function () {
  console.log("hihi");

  var url = window.location.pathname,

    urlRegExp = new RegExp(url.replace(/\/$/, '') + "");

  $('header .gnb ul li a').each(function () {


    if (urlRegExp.test(this.href.replace(/\/$/, ''))) {

      $(this).addClass('active');

    }
    console.log(url, urlRegExp, urlRegExp.test(this.href.replace(/\/$/, '')))

  });

  //약관, 개인정보, 모바일메뉴 팝업------------------------------
  var popup = $(".popup");
  popup.hide();

  // BTN - open
  var agreementBtn = $(".agreementBtn");
  var privacyBtn = $(".privacyBtn");
  var gnbBtn = $(".gnbBtn");
  var gnb_menu01 = $("#gnb .inner ul li #menu01");
  var gnb_menu02 = $("#gnb .inner ul li #menu02");
  var gnb_menu03 = $("#gnb .inner ul li #menu03");
  var gnb_menu04 = $("#gnb .inner ul li #menu04");

  // popup
  var agreementPopup = $("#agreement");
  var privacyPopup = $("#privacy");
  var gnbPopup = $("#gnb");

  agreementBtn.on("click", function () {
    agreementPopup.fadeIn();
  });
  privacyBtn.on("click", function () {
    privacyPopup.fadeIn();
  });
  gnbBtn.on("click", function () {
    $('#nav-icon3').addClass('open');
    gnbPopup.fadeIn(500);

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
  var closeBtn = $(".popup .closeBtn");

  closeBtn.on("click", function () {
    $("#agreement").fadeOut();
    $("#privacy").fadeOut();
    $("#gnb").fadeOut(500);
    $('#nav-icon3').removeClass('open');

    // 모바일 메뉴 animate reset
    gnb_menu01.removeAttr("style");
    gnb_menu02.removeAttr("style");
    gnb_menu03.removeAttr("style");
    gnb_menu04.removeAttr("style");
  });



  // 헤더 스크롤-------------------------------------------

  $(window).scroll(function () {
    var height = $(document).scrollTop();

    // pc header
    if (height > 100) {
      $('header').addClass("fixed");
    } else {
      $('header').removeClass("fixed");
    }

    // mobile header
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


});
