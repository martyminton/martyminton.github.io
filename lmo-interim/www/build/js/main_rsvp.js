function overlayIt(image, x, y){
    $('body').prepend('<div class="bg_overlay" style="display:none; position:absolute; top:0; bottom:0; left:0; right:0; z-index:9998; background:url('+image+') no-repeat '+x+' '+y+'; opacity:.5; height:5000px"></div><a href="#" class="trigger" style="position:fixed; z-index:9999; display:block; text-indent:-9999px; width:50px; height:20px; background:#000;">Trigger</a>');
    $('a.trigger').click(function(){
        if($('.bg_overlay').hasClass('showing')===true){
            $('.bg_overlay').removeClass('showing').css('display', 'none');
        }else{
            $('.bg_overlay').addClass('showing').css('display', 'block');
        }
        return false;
    });
}

var useAjax = false,
	fileLink = false;

$(document).ready(function(){

	//overlayIt('/RSVP/rsvp.jpg','0%','0px');

	assignHeightToSection();

	//changeNavOnScroll();
	modalWindow();
	//showcaseSizing();
	//fixedScrolling();
	contactForm();

	formValidation();
	//ajaxUpload();


	var height2 = $(window).height() - 90;


	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 90
				}, 1000);
			return false;
			}
		}
	});




});// END DOCUMENT READY



$(window).scroll(function(){
	var nav = $('header.default'),
	value = parseInt($(this).scrollTop()),
	windowTop = $(window).scrollTop(),
	resizes = windowSize();

	if (windowTop > resizes[0] - 90) {
		$('header').addClass('secondary');
	} else {
		$('header').removeClass('secondary').addClass('default');
	}
});

function modalWindow() {
	var listItem = $('.bxslider li a');

	var height = $(window).height() - 90;

	listItem.click(function(e){
		e.preventDefault();



		var idName = $(this).parent().attr('id');
		$('.bxslider li.'+idName+' a').colorbox({
			width: 980,
			height: height,
			onOpen:function(){$('body').addClass('cb'); },
			onClosed:function(){ $('body').removeClass('cb');}
		});

	});
}

function contactForm() {
	var staff = $('ul.contacts li a'),
	button = $('button.form');

	staff.click(function(e){
		e.preventDefault();

		staff.removeClass('brush');
		$(this).addClass('brush');


		$('#contact .form-container.closed').slideDown(300, function(){
			$('html,body').animate({
				scrollTop: $('#select_contact').offset().top - 90
			}, 300);
		});

		$('.thankyou').hide();

		setTimeout(function(){
			if( $('.form-container.closed') ) {
				$('.form-container').addClass('open');
				$('.form-container').fadeIn('slow');
			}
		}, 400);

		var name = $(this).find('h6.name').attr('data-name');

		$('button.form span.name').text(name);

		$('input[name="to"]').val(name);
	});

	$('#contact-form').submit(function(e){
		//e.preventDefault();

		//formValidation();

	});
}






function windowSize() {

	var windowHeight = $(window).height(),
	windowWidth = $(window).width();

	var sizes = new Array();
	sizes[0] = windowHeight;
	sizes[1] = windowWidth;
	return sizes;

	_log('Window Height: ' + windowHeight + ' / Window Width: ' + windowWidth);
}

function assignHeightToSection(){
	var resizes = windowSize();


}

function formValidation() {

	var cansubmit = true;

	$( "#contact-form" ).validate({
		rules: {
			attending: {
				required: true
			},
			first_name: {
				required: true
			},
			last_name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			title: {
				required: false
			},
			business_name: {
				required: false
			}
		},
		messages: {
			attending: '',
			first_name: 'Please enter your first name.',
			last_name: 'Please enter your last name.',
			email: {
				required: 'Please enter your email.',
				email: 'Please a valid email.'
			},
			title: 'Please enter your title.',
			business_name: 'Please enter your business name.'
		}
	});

}


// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

function _log(){
	if( typeof(DEBUG) !== 'undefined' && DEBUG == true ){
		console.log( _log.caller.name, arguments );
	}
}
