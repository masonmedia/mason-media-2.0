// Collapse mobile menu after clicking

$(document).ready(function () {
	$('.navbar-collapse a:not(.dropdown-toggle), body, .page-item').click(function () {
		$(".navbar-collapse").collapse('hide');
	});
});

//Change navbar color on scroll

$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});
