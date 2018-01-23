// All pages:
$(document).ready(function () {
  $('.main-header__bars').on('click', function () {
    $('.nav__list').toggle('slow');
  });
// Main page
// smooth scroll to first content block
  $('.pointerdown').on('click', function (event) {
    $('html, body').animate({
      scrollTop: $('.scrollhere').offset().top
    }, 800, function () {
    });
  });

// CTA buttons panel attached to footer
  $(window).scroll(function () {
    if ( $(window).scrollTop() + $(window).height() > $(document).height() - ( $('.subscribe').outerHeight() + $('footer').outerHeight() - 75 ) ) {
      $('.main-wrapper__button').css({'position': 'relative', 'z-index': 1});
      $('.buttons').css({'position': 'relative', 'z-index': 1});
    } else if ( $(window).scrollTop() + $(window).height() < $(document).height() - ( $('.subscribe').outerHeight() + $('footer').outerHeight() ) ) {
      $('.buttons').css({'bottom': 0, 'position': 'fixed', 'z-index': 9999});
      $('.main-wrapper__button').css({'bottom': 0, 'position': 'fixed'});
    }
    $('.buttons').show();
  });

// Top menu scrolling
  $(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
      $('.header__nav').css('background-color', 'rgba(128, 128, 128, 1)');
    } else {
      $('.header__nav').css('background-color', 'rgba(128, 128, 128, 0.6)');
    }
  });

// Changing top menu opacity
  $('.header__nav').on('mouseover', function(event) {
    if ( $(window).scrollTop() > 0 ) {
      $('.header__nav').css('background-color', 'rgba(128, 128, 128, 1)');
    }
  });
  $('.header__nav').on('mouseout', function(event) {
    if ( $(window).scrollTop() > 0 ) {
      $('.header__nav').css('background-color', 'rgba(128, 128, 128, 0.6)');
    }
  });

// Validate e-mail on subscribe module
  $('#mc-embedded-subscribe').on('click', function(event) {
    if ( !validateEmail( $('#mce-EMAIL').val() )  ) {
      if ( $('#mce-success-response').length ) $('#mce-success-response').hide();
      $('#mce-error-response').show();
      return false;
    } else {
      if ( $('#mce-error-response').length ) $('#mce-error-response').hide();
      $('#mce-success-response').show();
    }
  });

  function validateEmail(email) {
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    return pattern.test($.trim(email)) ? true : false;
  }

// Adding arrows on community page
  function showArrows() {
    if ( $(".current-projects").length && $(window).width() > 1023 ) {
      $(".arrows").show();
      $(".arrows").css("padding-top", "145px");
    } else if ( $(window).width() < 1024 ) {
      $(".arrows").css("padding-top", "120px");
      $(".arrows").show();
    } else if ( !$(".current-projects").length && $(window).width() >= 1023 ) {
      $(".arrows").hide();
    }
  }

// Compute dynamical height of paragraphs in histories-blocks
  function setHeightOfHistories(selector) {
    var entries = selector + " .item p";
    var arr = [];
    for ( var i = 0; i < $(entries).length; i++ ) {
      document.querySelectorAll(entries)[i].style.height = "initial";
      arr.push( document.querySelectorAll(entries)[i].offsetHeight );
    }
    $(entries).css({ 'height': Math.max(...arr) });
  }
  setHeightOfHistories(".card-vol");
  setHeightOfHistories(".card-init");
  setHeightOfHistories(".card-projects");

    $('.arrows').on('click', function (event) {
      setHeightOfHistories(".card-vol");
      setHeightOfHistories(".card-init");
      setHeightOfHistories(".card-projects");
  });

    $(window).on('resize', function (event) {
      setHeightOfHistories(".card-vol");
      setHeightOfHistories(".card-init");
      setHeightOfHistories(".card-projects");
      setPositionOfArrows();
      showArrows();
      if ( $(window).width() < 1023 ) {
        resetMobile(".card-vol");
        resetMobile(".card-init");
        resetMobile(".card-projects");
      } else {
        resetDesktop(".card-projects");
        resetDesktop(".card-vol");
        resetDesktop(".card-init");
      }
  });
  
  setPositionOfArrows();
  showArrows();

  if ( $(".card-projects").length && $(window).width() > 1023 && $(".card-projects").children().length > 5 ) {
    $(".card-projects").children().each(function(index, item) {
      if ( index > 3 && index !== $(".card-projects").children().length - 1 ) {
        $( this ).hide();
      }
    });
  } else if ( $(".card-projects").length && $(window).width() > 1023 && $(".card-projects").children().length <= 5 ) {
      $(".arrows").each(function() {
        if ( $(this).hasClass("nonblocked-arrow") ) {
          $( this ).removeClass("nonblocked-arrow");
          $( this ).addClass("blocked-arrow");
        }
      });
  }
});

// Functions for reset of carousel on mobile and desktop devices
function resetMobile(sel) {
  if ( !$(sel).length ) {
    return;
  }
  currents.curInit = currents.curVol = currents.curProj = 1;
  $(sel).children().each(function(index, item) {
    if ( index > 1 && index !== $(sel).children().length - 1 ) {
      $( this ).hide();
    } else if ( index === 1 ) {
      $( this ).show();
    } else if ( index === 0 ) {
      $( this ).removeClass("nonblocked-arrow");
      $( this ).addClass("blocked-arrow");
    } else if ( index === $(sel).children().length - 1 ) {
      $( this ).removeClass("blocked-arrow");
      $( this ).addClass("nonblocked-arrow");
    }
  });
 }

 function resetDesktop(sel) {
  if ( !$(sel).length ) {
    return;
  }
  currents.curInit = currents.curVol = currents.curProj = 1;
  $(sel).children().each(function(index, item) {
    if ( index === 0 ) {
      $( this ).removeClass("nonblocked-arrow");
      $( this ).addClass("blocked-arrow");
    } else if ( index > 4 && index === $(sel).children().length - 1 ) {
      $( this ).removeClass("blocked-arrow");
      $( this ).addClass("nonblocked-arrow");
    } else if ( index === 4 && index === $(sel).children().length - 1 ) {
      $( this ).removeClass("nonblocked-arrow");
      $( this ).addClass("blocked-arrow");
    } else if ( index > 0 && index < 4 ) {
      $(this).show();
    } else {
      $(this).hide();
    }
 });
}

// Compute alignment of arrows on mobile devices
function setPositionOfArrows() {
    if ( $(window).width() > 1023 ) return;
    var position = $(".card-img:visible:first").position();
    var left = position.left - 27;
    var right = position.left + $(".card-img:visible:first").width() + 9;
    var top = ( $(".card-img:visible:first").height() - 120 ) / 2.5;
    $(".arrows:eq(0), .arrows:eq(2)").css("left", left + "px");
    $(".arrows:eq(1), .arrows:eq(3)").css("left", right + "px");
    $(".arrows").css("top", top + "px");
}

// Carousel histories initiatives, volunteers and current projects
  var currents = {
    curInit: 1,
    curVol: 1,
    curProj: 1
  };
  $('.arrows i').on('click', function(ev) {
    var arr = ev.target.parentNode.parentNode.children;
    var cur, check, projects;
    if ( ~ev.target.parentNode.parentNode.className.indexOf("card-vol") ) {
      cur = currents.curVol;
      check = "vol";
    } else if ( ~ev.target.parentNode.parentNode.className.indexOf("card-init") ) {
      cur = currents.curInit;
      check = "init";
    } else if ( ~ev.target.parentNode.parentNode.className.indexOf("card-projects") ) {
      cur = currents.curProj;
      check = "proj";
    }

    if ( ~ev.target.parentNode.parentNode.className.indexOf("card-projects") && $(window).width() > 1023 ) {
      projects = true;
    } else projects = false;

    if ( ( ~ev.target.className.indexOf("fa-caret-left") && cur === 1 ) || ( ~ev.target.className.indexOf("fa-caret-right") && ( cur === arr.length - 2 || ( projects === true && cur === arr.length - 4 ) ) ) ) {
      return;
    } else if ( ~ev.target.className.indexOf("fa-caret-left") ) {
      arrows("item-nonactive", "item-nonactive", cur, "minus", projects);
    } else if ( ~ev.target.className.indexOf("fa-caret-right") ) {
      arrows("item-nonactive", "item-nonactive", cur, "plus", projects);
    }
     if ( cur === 1 ) {
      arrows("nonblocked-arrow", "blocked-arrow", 0);
      arrows("blocked-arrow", "nonblocked-arrow", arr.length - 1);
     } else if ( cur === arr.length - 2 || ( projects === true && cur === arr.length - 4 ) ) {
      arrows("nonblocked-arrow", "blocked-arrow", arr.length - 1);
      arrows("blocked-arrow", "nonblocked-arrow", 0);
     } else {
      arrows("blocked-arrow", "nonblocked-arrow", 0);
      arrows("blocked-arrow", "nonblocked-arrow", arr.length - 1);
     }

  function arrows(remove, add, num, sign, projects) {
    var show;
    if (!sign) {
      arr[num].classList.remove(remove);
      arr[num].classList.add(add);
      return;
    }
    if (sign) {
      if ( projects && sign === "plus" ) {
        arr[num].style.display = "none";
        show = cur + 3;
        cur += 1;
      } else if ( sign === "plus" ) {
        arr[num].style.display = "none";
        show = cur + 1;
        cur += 1;
      } else if ( projects && sign === "minus" ) {
        arr[num+2].style.display = "none";
        show = cur - 1;
        cur -= 1;
      } else if ( sign === "minus" ) {
        arr[num].style.display = "none";
        show = cur - 1;
        cur -= 1;
      }
      arr[show].style.display = "inherit";
    }
  }

  if (check === "vol") {
    currents.curVol = cur;
  } else if (check === "init") {
    currents.curInit = cur;
  } else if (check === "proj") {
    currents.curProj = cur;
  }
  });