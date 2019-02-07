$(".jumper").on("click", function(e) {
  e.preventDefault();

  $("body, html").animate(
    {
      scrollTop: $($(this).attr("href*=\\#")).offset().top
    },
    600
  );
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});
