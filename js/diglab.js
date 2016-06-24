//smooth scroll to first content block
$(".pointerdown").on('click', function(event) {
  $('html, body').animate({
    scrollTop: $(".scrollhere").offset().top
    }, 800, function(){
  });
});
//CTA buttons panel shown on scroll
$(".buttons").hide();
$(function () {
  $(window).scroll(function(){
    if($(this).scrollTop() > 100) {
      $(".buttons").show();
    }
  });
});
//CTA buttons panel attached to footer
$(window).scroll(function() {
  if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
    $(".buttons").css({"bottom":300, "position":"absolute"});
  } else {
    $(".buttons").css({"bottom":0, "position":"fixed"});
  }
});
