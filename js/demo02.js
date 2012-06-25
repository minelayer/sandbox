adjSpeed = 1;

$(document).ready(function() {

	jQuery.event.add(window, "load", backgroundResize);
	jQuery.event.add(window, "resize", backgroundResize);
	function backgroundResize() {
		var winH = $(window).height();
		var winW = $(window).width();

		$(".container").css("width", winW);
		$(".container").css("height", winH);
		$("#home_menu").css("padding-top", winH / 2 + 70);	
		$(".contents").css("height", winH);
		
	}
	$('#timeline').flickable({friction: 0.5});
	$('#timeline').scrollLeft(365 + 584);
});