

$(document).ready(function(){



	var height2 = $(window).height() - 90;
	$('#pp').colorbox({
			width: 980,
			height: height2,
			href:'pp.html',
			onOpen:function(){$('body').addClass('cb'); },
			onClosed:function(){ $('body').removeClass('cb');}
	});
function firstImpression() {
	var $home = $('#home'),
		$header = $('header.default');
	//First Impression
	setTimeout(function() {
		$('.logo', $home).addClass('animated fadeIn').delay(500).css({opacity: 1});
	},500);

	setTimeout(function() {
		$('.logo-advertising', $home).addClass('animated fadeIn').delay(500).css({opacity: 1});
	},900);

	setTimeout(function(){
		$('#home h2, #home .cta').addClass('animated fadeIn').delay(500).css({opacity: 1});
	},1300);


	setTimeout(function(){
		$('li.purpose',$header).addClass('animated bounceInDown').delay(500).css({opacity: 1});
	},1100);

	setTimeout(function(){
		$('li.work',$header).addClass('animated bounceInDown').delay(500).css({opacity: 1});
	},1200);

	setTimeout(function(){
		$('li.clients',$header).addClass('animated bounceInDown').delay(500).css({opacity: 1});
	},1300);

	setTimeout(function(){
		$('li.culture',$header).addClass('animated bounceInDown').delay(500).css({opacity: 1});
	},1400);

	setTimeout(function(){
		$('li.opportunities',$header).addClass('animated bounceInDown').delay(500).css({opacity: 1});
	},1500);

	setTimeout(function(){
		$('li.contact',$header).addClass('animated bounceInDown').delay(500).css({opacity: 1});
	},1600);

	setTimeout(function(){
		$('a.arrow-down',$home).addClass('animated fadeIn').delay(500).css({opacity: 1});
	},2500);
}

firstImpression();
	});