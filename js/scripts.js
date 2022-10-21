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

function CopyToClipboard() {
  navigator.clipboard.writeText("https://rvasiliev79.github.io").then(
    () => {
      alert("Ссылка на этот сайт в буфере обмена");
    },
    () => {
      alert("Не разрешен доступ к буферу обмена");
    }
  );
}
