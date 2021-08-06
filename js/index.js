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


});
