
jQuery(document).ready(function () {

  $(document)
    .mousemove(function (e) {
      var $cursor = $('.cursor').eq(0);
      $cursor.css({
          left: e.clientX,
          top: e.clientY
        })
        if(e.target.nodeName === 'A' || e.target.nodeName === 'BUTTON') {
          $cursor.addClass('on')
        }else {
          $cursor.removeClass('on');
        }
    })

    // a,button 에 위치하면 스타일 변경
});