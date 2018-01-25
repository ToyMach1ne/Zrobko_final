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

//Contact map
function myMap() {
        var myLatLng = {lat: 49.2334868, lng: 28.4707423};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Skypark'
        });
      }

//Hide contact-card
$( ".contacts__hide--arrow").click(function() {
  $(".contact--card").toggleClass('contact--hidden');
  $(this).toggleClass('contacts__open--arrow');
});

//Modals
$('.add_lot').click(function(e) {
	e.preventDefault();
	$('.add__modal--wrap').fadeIn( 400, function() {});
});
$('.close__new--bid').click(function(e) {
	e.preventDefault();
	$('.add__modal--wrap').fadeOut( 400, function() {});
});

$('.login--button').click(function(e) {
	e.preventDefault();
	$('.login__modal--wrap').fadeIn( 400, function() {});
});
$('.close--login').click(function(e) {
	e.preventDefault();
	$('.login__modal--wrap').fadeOut( 400, function() {});
});

$(".items__grid--wrap .col-md-4").click(function(e) {
	e.preventDefault();
	$(".item__open--container").hide().eq($(this).index()).fadeIn();
  $('.close__opened--item').click(function(e) {
  	e.preventDefault();
  	$(".item__open--container").hide().eq($(this).index()).fadeOut();
  });
});

//Mobile item description 
$('.show--descr').click(function(e) {
	e.preventDefault();
	$(this).toggleClass('hide--descr');
	$('.item--description').toggle( "slow", function() {});
})

//Mobile menu
$( ".open--menu" ).click(function(e) {
	e.preventDefault();
  $( ".header--nav" ).toggle( "slow", function() {});
});
