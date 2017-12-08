// All pages:
$(document).ready(function () {
  $('.main-header__bars').on('click', function () {
    $('.nav__list').toggle('slow')
  })

// Main page
// smooth scroll to first content block
  $('.pointerdown').on('click', function (event) {
    $('html, body').animate({
      scrollTop: $('.scrollhere').offset().top
    }, 800, function () {
    })
  })
// CTA buttons panel shown on scroll
  $('.buttons').hide()
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.buttons').show()
      }
    })
  })
// CTA buttons panel attached to footer
  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 575) {
      $('.buttons').css({'position': 'relative'});
    } else {
      $('.buttons').css({'bottom': 0, 'position': 'fixed'});
    }
  })

// Volunteers and initiatives pages

  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
      $('.main-wrapper__button').css({'bottom': 300, 'position': 'absolute'})
    } else {
      $('.main-wrapper__button').css({'bottom': 0, 'position': 'fixed'})
    }
  })
// Top menu scrolling
  $(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
      $('.header__nav').css('background-color', 'rgba(128, 128, 128, 1)')
    } else {
      $('.header__nav').css('background-color', 'rgba(128, 128, 128, 0.6)')
    }
  })
})

//Slider histories initiatives and volunters
  var cur = 1;
  $('.arrows i').on('click', function(ev) {
    var arr = ev.target.parentNode.parentNode.children;
    console.log(ev.target.parentNode.parentNode.children);
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
