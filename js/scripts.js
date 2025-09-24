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
  $("[data-localize]").localize("localization/content", { language: "en" });
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

function SwitchLang() {
  tolang = document.getElementById("langbtn").text;
  $("[data-localize]").localize("localization/content", { language: tolang });
}

//Google Analytics part
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-VD8302NJCM");
