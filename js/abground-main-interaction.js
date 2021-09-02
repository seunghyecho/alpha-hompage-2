$(document).ready(function () {
  function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
      temp = params[i].split("=");
      if ([temp[0]] == sname) {
        sval = temp[1];
      }
    }
    return sval;
  }
  //ABground 외에 다른 페이지에서 접속했을 때
  if (getParam("type") == 1) {
    //header menu 숨김 처리
    $("header .inner").css("display", "none");
    //기존에 section1 숨김 처리
    $(".section01.normal").css("display", "none");

    //animation 처리
    //폰트 bottom-up 0.5s, 하얀색 -> 검정색 animation 0.5s
    setTimeout(function () {
      $(".section01.highlight .inner h1").animate(
        { marginTop: "0px", color: "#222" },
        500
      );
      $(".section01.highlight .inner h1").css({
        color: "#222",
        transition: "color 0.5s",
      });
    }, 300);

    //배경 bottome-up : 0.5s

    setTimeout(function () {
      //0.5초 후에 슬라이드업하는 class 추가
      $(".section01.highlight .inner").addClass("bottom-top");
    }, 1000);

    //폰트 검정색 -> 하얀색 : 1.2초 후 ( bottom-up 애니메이션 중간에 추가하기 )
    setTimeout(function () {
      $(".section01.highlight .inner h1").css({
        color: "#fff",
        transition: "color 0.5s",
      });
    }, 1200);

    //현재 섹션 숨김 처리 : 2.5초 후
    setTimeout(function () {
      //기존의 section01 노출하기
      $(".section01.normal").fadeIn("slow");
      //header menu 메뉴 노출 처리
      $("header .inner").css("display", "flex");
      $(".section01.highlight").css("display", "none");
    }, 2500);
  } else {
    //현재 페이지에서 새로고침했을 때
    $(".section01.highlight").css("display", "none");
  }

  // 첫 입장시 디폴트 이미지
  $(".normal-image-bg").css(
    "background-image",
    "url(../assets/ABGround/abground_bg_top1.png)"
  );

  $(".normal-image-bg div").mouseenter(function () {
    var image = $(this).data("bg");
    $(".normal-image-bg").css(
      "background-image",
      "url(../assets/ABGround/abground_bg_" + image + ".png)"
    );
  });
});
