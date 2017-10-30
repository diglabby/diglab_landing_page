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
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
      $('.buttons').css({'bottom': 300, 'position': 'absolute'})
    } else {
      $('.buttons').css({'bottom': 0, 'position': 'fixed'})
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
