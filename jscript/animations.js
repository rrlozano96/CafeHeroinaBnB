
/*--- FAQ HIDE FUNCTION ---*/

$(document).ready(function() {
	$("dd").hide();
	$("dt").click(function()
	{
		$(this).next("dd").slideToggle(500);
	});
	
	$(".slideshow > img:gt(0)").hide();
	
	var cln = $("header").clone(true);
	cln.css("position", "fixed")
	.addClass('floating')
	.prependTo(".header_base");
});

/*--- SCROLL DOWN HEADER ---*/

$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $("header").height();             

    if(y_scroll_pos > scroll_pos_test) {
		if (!$('.header').is(':animated')) {
			$('.header').animate({ opacity: 0 }, 100);
		}
		if (!$('.floating').is(':animated')) {
			$('.floating').animate({ opacity: 1 }, 100);
		}
    }else if(y_scroll_pos < scroll_pos_test ){
		$('.header').css("opacity", "1");
		$('.floating').css("opacity", "0");
	}
});

/*--- HOME PAGE IMAGE SLIDESHOW ---*/


setInterval(function() {
 $('.slideshow > img:first')
 .fadeOut(1000)
 .next()
 .fadeIn(1000)
 .end()
 .appendTo('.slideshow');
}, 5000);

/*--- SLOW SPEED OF HREF ---*/

$(function() {
  $("#scroll_down a").click(function(event) {
    event.preventDefault();
	
    var href = this.href;
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 750);
  });        
});