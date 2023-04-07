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

    /* 메뉴바 활성화 */

    $(".nav li").click(function(){
      $(".nav li").removeClass('on');
      $(this).addClass('on');
    });

    /* 탭메뉴 활성화 */

    $(".top_tab li").click(function(){
      $(".top_tab li").removeClass('on');
      $(this).addClass('on');
    });

    $(".small_tab li").click(function(){
      $(".small_tab li").removeClass('on');
      $(this).addClass('on');
    });

    /* 탭 누르면 내용 보이게 */

    for (let i=0; i<$('.small_tab li').length; i++){
      $('.small_tab li').eq(i).on('click', function(){
        $(".small_tab li").removeClass('on');
        $(".cont_area .cont").removeClass('on');
        $(".small_tab li").eq(i).addClass('on');
        $(".cont_area .cont").eq(i).addClass('on');
      })
    }

});