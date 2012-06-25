adjSpeed = 2;

$(document).ready(function() {
	jQuery.event.add(window, "load", backgroundResize);
	jQuery.event.add(window, "resize", backgroundResize);
	function backgroundResize() {
		var imgW = 2048;
		var imgH = 1536;
		var winH = $(window).height();
		var winW = $(window).width();
		var scaleW = winW / imgW;
		var scaleH = winH / imgH;
		var fixScale = Math.max(scaleW, scaleH);
		var setW = imgW * fixScale;
		var setH = imgH * fixScale;
		var moveX = Math.floor((winW - setW) / 2);
		var moveY = Math.floor((winH - setH) / 2);
		

		$(".container").css("width", winW);
		$(".container").css("height", winH);
		$("#home_menu").css("padding-top", winH / 2 + 70);
		$(".background").css("width", setW);
		$(".background").css("height", setH);
		$(".background").css("left", moveX);
		$(".background").css("top", moveY);
		$("#footer").css("bottom", winH / 2 - 40);
		$(".contents").css("height", winH);
		
	}

});