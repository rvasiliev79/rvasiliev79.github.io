//  This JQuery functions inits specified classes
$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".fixed-action-btn").floatingActionButton();
  $(".carousel").carousel();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true,
  });
  $(".collapsible").collapsible();
});
