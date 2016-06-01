$(document).ready(function() {
    $(".buttons").hide();
    $(function () {
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $(".buttons").show();
        } 
    });
    });
});
   
