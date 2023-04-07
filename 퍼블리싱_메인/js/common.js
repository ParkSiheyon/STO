$(function(){

    /* input 포커스 */

    var placeholderTarget_title = $('.focus');
  
    placeholderTarget_title.on('focus', function(){
      $(this).siblings('label').fadeOut('fast');
    });

    placeholderTarget_title.on('focusout', function(){
      if($(this).val() == ''){
        $(this).siblings('label').fadeIn('fast');
      }
    });

    /* 페이징 활성화 */

    $(".paging li.p_num").click(function(){
      $(".paging li").removeClass('on');
      $(this).addClass('on');
    });

});