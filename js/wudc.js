$( document ).ready(function() {


	$("#countdown").countdown({
			date: "27 december 2017 12:00:00",
			format: "on"
	});




	var lastScrollTop = 0;

	$(window).scroll(function(event){
	   	var header = $('#fh5co-header'),
			scrlTop = $(this).scrollTop();

		if ( scrlTop > 500 && scrlTop <= 2000 ) {
			header.addClass('navbar-fixed-top fh5co-animated slideInDown');
		} else if ( scrlTop <= 500) {
			if ( header.hasClass('navbar-fixed-top') ) {
				header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
				setTimeout(function(){
					header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
				}, 100 );
			}
		} 
		
	});


	$('a[href*="#"]:not([href="#"])').click(function() {
		  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		    var target = $(this.hash);
		    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		    if (target.length) {
		      $('html, body').animate({
		        scrollTop: target.offset().top
		      }, 1000);
		      return false;
		    }
		  }
	});





});