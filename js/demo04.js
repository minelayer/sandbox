adjSpeed = 2;

function naviFadeIn(){
	$("#navi-home").delay(1000).animate({opacity: "toggle"}, "slow");
	$("#navi-link01").delay(1500).animate({width: "toggle", opacity: "toggle"}, "slow");
	$("#navi-link02").delay(1600).animate({width: "toggle", opacity: "toggle"}, "slow");
	$("#navi-link03").delay(1700).animate({width: "toggle", opacity: "toggle"}, "slow");
	$("#navi-link04").delay(1800).animate({width: "toggle", opacity: "toggle"}, "slow");
	$("#navi-link05").delay(1900).animate({width: "toggle", opacity: "toggle"}, "slow");
}

function smoothScroll(Hash){
	var HashOffset = $(Hash).offset().top;
	$("html,body").animate({scrollTop: HashOffset}, 1000);
}

function naviMove(){
	var winH = $(window).height();
	var winW = $(window).width();
	$("#navi-home").animate({top: "-180", left: (winW - 760) / 2}, "slow");
	$("#navi-link01").delay(500).animate({top: "-70", left: (winW - 760) / 2 + 220}, "slow");
	$("#navi-link02").delay(600).animate({top: "-70", left: (winW - 760) / 2 + 330}, "slow");
	$("#navi-link03").delay(700).animate({top: "-70", left: (winW - 760) / 2 + 440}, "slow");
	$("#navi-link04").delay(800).animate({top: "-70", left: (winW - 760) / 2 + 550}, "slow");
	$("#navi-link05").delay(900).animate({top: "-70", left: (winW - 760) / 2 + 660}, "slow");
}

function naviMoveReset(){
	var winH = $(window).height();
	var winW = $(window).width();
	$("#navi-home").delay(1000).animate({top: (winH - 320) / 2, left: (winW - 320) / 2}, "slow");
	$("#navi-link01").delay(1500).animate({top: (winH - 320) / 2 + 220, left: (winW - 320) / 2}, "slow");
	$("#navi-link02").delay(1600).animate({top: (winH - 320) / 2 + 220, left: (winW - 320) / 2 + 110} , "slow");
	$("#navi-link03").delay(1700).animate({top: (winH - 320) / 2 + 220, left: (winW - 320) / 2 + 220}, "slow");
	$("#navi-link04").delay(1800).animate({top: (winH - 320) / 2 + 110, left: (winW - 320) / 2 + 220}, "slow");
	$("#navi-link05").delay(1900).animate({top: (winH - 320) / 2, left: (winW - 320) / 2 + 220}, "slow");
}

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
	var scrH = $("html,body").scrollTop();

	$(".container").css("width", winW);
	$(".container").css("height", winH);
	if(scrH < 10){
		$("#navi-home").css("top", (winH - 320) / 2).css("left", (winW - 320) / 2);
		$("#navi-link01").css("top", (winH - 320) / 2 + 220).css("left", (winW - 320) / 2);
		$("#navi-link02").css("top", (winH - 320) / 2 + 220).css("left", (winW - 320) / 2 + 110);
		$("#navi-link03").css("top", (winH - 320) / 2 + 220).css("left", (winW - 320) / 2 + 220);
		$("#navi-link04").css("top", (winH - 320) / 2 + 110).css("left", (winW - 320) / 2 + 220);
		$("#navi-link05").css("top", (winH - 320) / 2).css("left", (winW - 320) / 2 + 220);
	}
	$(".background").css("width", setW);
	$(".background").css("height", setH);
	$(".background").css("left", moveX);
	$(".background").css("top", moveY);
	$("#footer").css("bottom", winH / 2 - 40);
	$(".contents").css("height", winH);
}

$(document).ready(function() {
	$(window).bind("load", naviFadeIn());
	jQuery.event.add(window, "load", backgroundResize);
	jQuery.event.add(window, "resize", backgroundResize);
	
	$("div.navi-link").hover(function(){
		var winH = $(window).height();
		var scrH = $("html,body").scrollTop();
		if(scrH >= winH){
			$(this).animate({height: "120px", lineHeight: "225px"}, 100);
			$(this).children("a").animate({height: "120px"}, 100);
		}
		
	}, function(){
				var winH = $(window).height();
		var scrH = $("html,body").scrollTop();
		if(scrH >= winH){
			$(this).animate({height: "100px", lineHeight: "185px"}, 100);
			$(this).children("a").animate({height: "100px"}, 100);
		}
	});

	$("a[href^=#]").click(function(){
		var Hash = $(this.hash);
		if(this.hash != "#home"){
			naviMove();
			smoothScroll(Hash);
		}else{
			smoothScroll(Hash);
			naviMoveReset();
		}
		return false;
	});
});