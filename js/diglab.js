$(document).ready(function() {

//CTA buttons panel shown on scroll
  $(".buttons").hide();
  $(function () {
    $(window).scroll(function(){
      if($(this).scrollTop() > 100) {
        $(".buttons").show();
      }
    });

    //CTA buttons panel attached to footer
    $(window).scroll(function() {
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - 200) {
        $(".buttons").css({"bottom":300, "position":"absolute"});
      } else {
        $(".buttons").css({"bottom":0, "position":"fixed"});
      }
    });
  });

//smooth scroll to first content block
  $("#scroll").on('click', function(event) {
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
      }, 800, function(){
    });
  });
});
