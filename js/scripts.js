//  This JQuery functions inits specified classes
$(document).ready(function () {
  $(".parallax").parallax();
  $(".materialboxed").materialbox();
  $(".fixed-action-btn").floatingActionButton();
  $(".carousel").carousel();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true,
  });
});

/*
$(".head-link").click(function (e) {
  e.preventDefault();

  var goto = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(goto).offset().top,
    },
    800
  );
});
*/
