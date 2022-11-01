  // hide #back-top first
  $(".top_btn").hide();

  // fade in #back-top

  $(window).scroll(function () {
  	if ($(this).scrollTop() > 100) {
  		$('.top_btn').fadeIn();
  	} else {
  		$('.top_btn').fadeOut();
  	}
  });

  // scroll body to 0px on click
  $('.top_btn').on("click", function(){
  	$('body,html').animate({
  		scrollTop: 0
  	}, 800);
  	return false;
  });