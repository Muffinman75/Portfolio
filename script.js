$(".jumper").on("click", function(e) {
  e.preventDefault();

  $("body, html").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    600
  );
});

$(document).ready(function() {
  $(sidenav).sidenav();
});
