$(document).ready(function() {
  $(".buttons").hide();
  $(function () {
    $(window).scroll(function(){
      if($(this).scrollTop() > 100) {
        $(".buttons").show();
      }
    });
    $(window).scroll(function() {
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - 200) {
        $(".buttons").css({"bottom":300, "position":"absolute"});
        
      } else {
        $(".buttons").css({"bottom":0, "position":"fixed"});
      }
    });
  });
});
   
