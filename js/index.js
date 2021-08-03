jQuery(document).ready(function () {
    console.log('hihi')

    // 마우스커서---------------------------------------------------
    const cursor = $('.cursor');
    document.addEventListener('mousemove', function (e) {
        cursor.css("cursor", "url(../assets/cursor/cursor_Hover.svg)");
    });

    //약관, 개인정보, 모바일메뉴 팝업------------------------------
    const popup = $('.popup');
    popup.hide();


    // BTN - open
    const agreementBtn = $('.agreementBtn');
    const privacyBtn = $('.privacyBtn');
    const gnbBtn = $('.gnbBtn');

    // popup
    const agreementPopup = $('#agreement');
    const privacyPopup = $('#privacy');
    const gnbPopup = $('#gnb');

    agreementBtn.on('click', function () {
        agreementPopup.fadeIn();
    });
    privacyBtn.on('click', function () {
        privacyPopup.fadeIn();
    });
    gnbBtn.on('click', function () {
        gnbPopup.fadeIn();
    });


    // BTN - close
    const closeBtn = $('.popup .closeBtn');

    closeBtn.on('click', function () {
        $('#agreement').fadeOut();
        $('#privacy').fadeOut();
        $('#gnb').fadeOut();
    });

    // 모바일 헤더 스크롤-------------------------------------------


    $(window).scroll(function () {
        var height = $(document).scrollTop();

        if (height > $('header').height() || height > $(window).height()) {
            $('header').addClass('fixed');
            $('.mb-main').css({
                'position': 'relative',
                'margin-top': '48px',
            });
        } else {
            $('header').removeClass('fixed');
            $('.mb-main').css({
                'position': 'relative',
                'margin-top': '0',
            });
        }

    });


     // ABground --------------------------
     
     var $abGround_section02 = $('#abGround .section02');
     var $abGround_section05 = $('#abGround .section05');
     var $abGround_section06 = $('#abGround .section06');
     
     // ABground section02 animate--------------------------
     $abGround_section02.one('mouseenter', function(){
         var $arrow = $('#abGround .arrow');
         $arrow.addClass('on');
     });

     // ABground section05 animate--------------------------
     var textAni01 = $('.textAni01');
     var textAni02 = $('.textAni02');
     var textAni03 = $('.textAni03');
     var textAni04 = $('.textAni04');
    $abGround_section05.one('mouseenter', function () {
         textAni02.animate({ opacity: '1' }, 1000);
         // textAni04.animate({ opacity: '0' }, 1000);
         textAni01.animate(
             {
                 opacity: '0',
                 top: '-20px',
             },
             1000,
             function () {
                 textAni02.animate(
                     {
                         left: '125px',
                     },
                     1000,
                     function () {
                         textAni03.animate(
                             {
                                 opacity: '1',
                             },
                             1000
                         );
                         textAni04.animate(
                             {
                                 opacity: '1',
                                 marginTop: '0',
                             },
                             1000
                         );
                     }
                 );
             }
         );
     });

     // ABground section06 animate--------------------------
     $abGround_section06.one('mouseenter', function(){
         var $section06_h1 = $('.section06 h1');
         var $section06_item = $('.section06 .item-container > .item');
         $section06_h1.addClass('animate__fadeInUp');
         $section06_item.addClass('animate__fadeInUp');
     });


     // whyAb --------------------------
     var $whyAb_section02 = $('#whyAb .section02');
     var $whyAb_section03 = $('#whyAb .section03');
     var $whyAb_section04 = $('#whyAb .section04');
     var $whyAb_section05 = $('#whyAb .section05');
     var $whyAb_section06 = $('#whyAb .section06');

     $whyAb_section02.one('mouseenter', function(){
         var $section02_sectionInfo = $('.section02 .sectionInfo');
             $section02_sectionInfo.addClass('animate__fadeInUp');
     });

     $whyAb_section03.one('mouseenter', function(){
         var $section03_sectionInfo = $('.section03 .sectionInfo');
         $section03_sectionInfo.addClass('animate__fadeInUp');
     });

     $whyAb_section04.one('mouseenter', function(){
        var $section04_animate = $('.section04 .animate__animated');
        $section04_animate.addClass('animate__fadeInUp');
    });

    $whyAb_section05.one('mouseenter', function(){
        var $section05_animate = $('.section05 .animate__animated');
        $section05_animate.addClass('animate__fadeInUp');
    });

    $whyAb_section06.one('mouseenter', function(){
        var $section06_h2 = $('.section06 h2');
        $section06_h2.addClass('animate__fadeInUp');
    });

    // portfolio --------------------------
    var $portfolio_section02 = $('#portfolio .section02');
    var $portfolio_section04 = $('#portfolio .section04.pc');


    $portfolio_section02.one('mouseenter', function(){
        var $section02_inner_item_text = $('.section02 .inner-item > *');
        $section02_inner_item_text.addClass('animate__fadeInUp');
    });

    $portfolio_section04.children('.inner01').one('mouseenter', function(){
        console.log($portfolio_section04.children('.inner'));
        var $inner01_arrow = $('.inner01 .arrow');
        $inner01_arrow.addClass('on');
    });
    
    $portfolio_section04.children('.inner02').one('mouseenter', function(){
        console.log($portfolio_section04.children('.inner'));
        var $inner02_arrow = $('.inner02 .arrow');
        $inner02_arrow.addClass('on');
    });















});