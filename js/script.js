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
// CTA buttons panel shown on scroll
/*  $('.buttons').hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.buttons').show();
      }
    });
  });*/
// CTA buttons panel attached to footer

  $(window).scroll(function () {
    if ( $(window).scrollTop() + $(window).height() > $(document).height() - ( $('.subscribe').outerHeight() + $('footer').outerHeight() - 75 ) ) {
      $('.buttons').css({'position': 'relative', 'z-index': 1});
    } else if ( $(window).scrollTop() + $(window).height() < $(document).height() - ( $('.subscribe').outerHeight() + $('footer').outerHeight() ) ) {
      $('.buttons').css({'bottom': 0, 'position': 'fixed', 'z-index': 9999});
    }
    $('.buttons').show();
  });

// Volunteers and initiatives pages

  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 225) {
      $('.main-wrapper__button').css({'position': 'relative', 'z-index': 1});
    } else if ($(window).scrollTop() + $(window).height() < $(document).height() - 300) {
      $('.main-wrapper__button').css({'bottom': 0, 'position': 'fixed'});
    }
  });
// Top menu scrolling
  $(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
      $('.header__nav').css('background-color', 'rgba(128, 128, 128, 1)');
    } else {
      $('.header__nav').css('background-color', 'rgba(128, 128, 128, 0.6)');
    }
  });
});

//Slider histories initiatives and volunters
  var currents = {
    curInit: 1,
    curVol: 1
  };
  $('.arrows i').on('click', function(ev) {
    var arr = ev.target.parentNode.parentNode.children;
    var cur, check;
    if ( ~ev.target.parentNode.parentNode.className.indexOf("vol") ) {
      cur = currents.curVol;
      check = "vol";
    } else if ( ~ev.target.parentNode.parentNode.className.indexOf("in") ) {
      cur = currents.curInit;
      check = "init";
    }
    if ( ( ~ev.target.className.indexOf("fa-caret-left") && cur === 1 ) || ( ~ev.target.className.indexOf("fa-caret-right") && cur === arr.length - 2 ) ) {
      return;
    } else if ( ~ev.target.className.indexOf("fa-caret-left") ) {
      arrows("item-nonactive", "item-nonactive", cur, "minus");
    } else if ( ~ev.target.className.indexOf("fa-caret-right") ) {
      arrows("item-nonactive", "item-nonactive", cur, "plus");
    }
     if ( cur === 1 ) {
      arrows("nonblocked-arrow", "blocked-arrow", 0);
     } else if ( cur === arr.length - 2 ) {
      arrows("nonblocked-arrow", "blocked-arrow", arr.length - 1);
     } else {
      arrows("blocked-arrow", "nonblocked-arrow", 0);
      arrows("blocked-arrow", "nonblocked-arrow", arr.length - 1);
     }

  function arrows(remove, add, num, sign) {
    if (!sign) arr[num].classList.remove(remove);
    arr[num].classList.add(add);
    if (sign) {
      if ( sign === "plus" ) {
        cur += 1;
      } else if ( sign === "minus" ) cur -= 1;
      arr[cur].classList.remove(remove);
    }
  }
  if (check === "vol") {
    currents.curVol = cur;
  } else if (check === "init") {
    currents.curInit = cur;
  }
  });

// <!-- Start of Async Drift Code -->
//!(function () {
//  var t
//  if (t = window.driftt = window.drift = window.driftt || [], !t.init) {
//    return t.invoked ? void (window.console && console.error && console.error('Drift snippet included twice.')) : (t.invoked = !0,
//t.methods = [ 'identify', 'track', 'reset', 'debug', 'show', 'ping', 'page', 'hide', 'off', 'on' ],
//t.factory = function (e) {
//  return function () {
//    var n
//    return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t
//  }
//}, t.methods.forEach(function (e) {
//  t[e] = t.factory(e)
//}), t.load = function (t) {
//  var e, n, o, r
//  e = 3e5, r = Math.ceil(new Date() / e) * e, o = document.createElement('script'),
//o.type = 'text/javascript', o.async = !0, o.crossorigin = 'anonymous', o.src = 'https://js.driftt.com/include/' + r + '/' + t + '.js',
//n = document.getElementsByTagName('script')[0], n.parentNode.insertBefore(o, n)
//})
//  }
//}())
//drift.SNIPPET_VERSION = '0.2.0'
//drift.load('ipwzpyyt22rb')
// <!-- End of Async Drift Code -->
