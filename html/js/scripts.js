$(document).ready(function(){$(".owl-carousel").owlCarousel({autoplay:!0,items:1})}),$("#to--first").on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:$("#first--block").offset().top},1e3)}),$("#to--second").on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:$("#second--block").offset().top},1e3)}),$("#to--third").on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:$("#third--block").offset().top},1e3)}),$("#to--fourth").on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:$("#fourth--block").offset().top},1e3)}),$("#to--fifth").on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:$("#fifth--block").offset().top},1e3)}),$(".items__grid--wrap").not(":first").hide(),$(".items__list--wrap .category__list--item").click(function(){$(".items__list--wrap .category__list--item").removeClass("list__item--active").eq($(this).index()).addClass("list__item--active"),$(".items__grid--wrap").hide().eq($(this).index()).fadeIn()}).eq(0).addClass("list__item--active");function myMap(){var t={lat:49.2334868,lng:28.4707423},e=new google.maps.Map(document.getElementById("map"),{zoom:17,center:t});new google.maps.Marker({position:t,map:e,title:"Skypark"})}$(".contacts__hide--arrow").click(function(){$(".contact--card").toggleClass("contact--hidden"),$(this).toggleClass("contacts__open--arrow")}),$(".add_lot").click(function(t){t.preventDefault(),$(".add__modal--wrap").fadeIn(400,function(){})}),$(".close__new--bid").click(function(t){t.preventDefault(),$(".add__modal--wrap").fadeOut(400,function(){})}),$(".login--button").click(function(t){t.preventDefault(),$(".login__modal--wrap").fadeIn(400,function(){})}),$(".close--login").click(function(t){t.preventDefault(),$(".login__modal--wrap").fadeOut(400,function(){})}),$(".items__grid--wrap .col-md-4").click(function(t){t.preventDefault(),$(".item__open--container").hide().eq($(this).index()).fadeIn(),$(".close__opened--item").click(function(t){t.preventDefault(),$(".item__open--container").hide().eq($(this).index()).fadeOut()})}),$(".show--descr").click(function(t){t.preventDefault(),$(this).toggleClass("hide--descr"),$(".item--description").toggle("slow",function(){})}),$(".open--menu").click(function(t){t.preventDefault(),$(".header--nav").toggle("slow",function(){})});
//# sourceMappingURL=maps/scripts.js.map
