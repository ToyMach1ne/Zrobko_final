//OWL
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    items: 1
  });
});



//Items tabs show
$(".items__grid--wrap").not(":first").hide();
$(".items__list--wrap .category__list--item").click(function() {
  $(".items__list--wrap .category__list--item").removeClass("list__item--active").eq($(this).index()).addClass("list__item--active");
  $(".items__grid--wrap").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("list__item--active");