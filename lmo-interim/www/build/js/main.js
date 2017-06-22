
var useAjax = false,
	fileLink = false;

$(document).ready(function(){

	assignHeightToSection();
	firstImpression();
	changeNavOnScroll();
	modalWindow();
	showcaseSizing();
	//fixedScrolling();
	contactForm();

	formValidation();
	ajaxUpload();


	var height2 = $(window).height() - 90;
	$('#pp').colorbox({
			width: 980,
			height: height2,
			href:'pp.html',
			onOpen:function(){$('body').addClass('cb'); },
			onClosed:function(){ $('body').removeClass('cb');}
	});


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



	/*CLIENTS SHOWCASE*/
	$('.bxslider').bxSlider({
		infiniteLoop: false,
		hideControlOnEnd: true,
		onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
			//_log(currentSlideHtmlObject);
			$('.bxslider li').removeClass('active');
			$('.bxslider li').eq(currentSlideHtmlObject).addClass('active');
		}
	});

	$('.culture-slider').bxSlider({
		infiniteLoop: true,
		hideControlOnEnd: false,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev'
	});

	if($('html').hasClass('touch') === true){
		$('.culture-slideshow').find('.photo').on('click',function(){
			var $the_photo = $(this);
			if($the_photo.hasClass('touched') === true){
				$the_photo.removeClass('touched');
			}else{
				$the_photo.addClass('touched');
			}
		});
	}

	$('.sliderEdgeLeft, .sliderEdgeLeftBottom').on('click',function(){
		$('a.bx-prev').trigger('click');
	});

	$('.sliderEdgeRight, .sliderEdgeRightBottom').on('click',function(){
		$('a.bx-next').trigger('click');
	});

	$('#clients, #culture').find('img').unveil(150);

});// END DOCUMENT READY

$(window).resize(function(){

	assignHeightToSection();

});

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



function fixedScrolling() {
	$('#family, #work, #clients, #culture, #opportunities, #contact').css({
		'position':'fixed',
		'top':'0'
	});
}

function showcaseSizing() {
	var height = $(window).height() - 90;

	//_log(height);

	setTimeout(function(){
		$('.bx-viewport').css({
			'height': height
		});
	}, 500);
}


function changeNavOnScroll() {
	var sections = $('section'),
	section = $('section').attr('id'),
	mainNav = $('nav ul li'),
	mainNavA = $('a',mainNav);

	sections.waypoint(function(direction){
		var id;
		if(direction === 'down'){
			id = $(this).attr('id');
		}else if(direction === 'up'){
			id = $(this).waypoint('prev').attr('id');
		}
		mainNavA.removeClass('active');
		$('a[href=#'+id+']', mainNav).addClass('active');
	}, {offset: 90});



}

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

function windowSize() {

	var windowHeight = $(window).height(),
	windowWidth = $(window).width();

	var sizes = new Array();
	sizes[0] = windowHeight;
	sizes[1] = windowWidth;
	return sizes;

	//_log('Window Height: ' + windowHeight + ' / Window Width: ' + windowWidth);
}

function assignHeightToSection(){
	var resizes = windowSize();

	$('section#home').css({
		height: resizes[0]
	});
}

function formValidation() {

	var cansubmit = true;

	$( "#contact-form" ).validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			name: {
				required: true
			},
			phone: {
				required: true,
				digits: true,
				minlength: 10
			},
			comments: {
				required: true
			},
			attachment: {
				required: true
			}
		},
		submitHandler: function(form) {

			var staff = $('ul.contacts li a'),
				$button = $('button.form'),
				$file 	= $('#file');


			// disable person select
			staff.unbind('click').click(function(e){ e.preventDefault(); });

			$button.html('Please Wait....').addClass('disabled');

			if( $file.length && $file.val().length == 0 ) {
				useAjax = true;
			}


			// ----------------------------------------------------
			// DEBUG INFO START
			// $('.form-container').fadeOut('slow');
			// $('ul#contacts').fadeOut('slow');

			// $('.thankyou .white').html('useAjax: ' + useAjax);
			// $('.thankyou').fadeIn('slow');

			// return false;
			// DEBUG INFO END
			// ----------------------------------------------------

			// if we can use ajax retun true to submit data normally
			if( !useAjax ) {
				//alert('normal');
				form.submit();
				return true;
			}

			if( cansubmit ){

				var data = {
					name		: $('#name').val(),
					phone		: $('#phone').val(),
					email		: $('#email').val(),
					comments	: $('#comments').val(),
					address		: $('#address').val(),
					file		: $('#file').val(),
					to			: $('#to').val(),
					link		: fileLink,
					ajax		: useAjax
				};

				// debug
				//_log( 'post data: ', data );

				$.ajax({
					type: "POST",
					url: "mailer.php",
					data: data,
					success: function(resp){

						//debug
						//_log( 'status: ',resp.status );
						//_log( 'resp: ', resp );

						// status was ok
						if( resp.status !== undefined && resp.status ) {
							var staff = $('ul.contacts li a'),
							button = $('button.form');

							staff.removeClass('brush');
							$('.form-container').fadeOut('slow').remove();
							$('ul#contacts').fadeOut('slow').remove();
							// $('section#contact').animate({
							// 	'height':'1200px'
							// }, 300);
							$('.thankyou').fadeIn('slow');
						}

						// something happened
						if( resp.errors !== undefined && resp.errors.length ){

							var error_html = '';
							resp.errors.map(function(i){ error_html += '<li>'+i+"</li>"; })
							error_html = "<ul>"+error_html+"</ul>";

							$('#server_message').html(error_html).fadeIn();

						}
					}
				});


			}

			//cansubmit = false;
			return false;
		}
	});
}

function ajaxUpload(){

	// getElementById
	function $id(id) {
		return document.getElementById(id);
	}


	// output information
	function Output(msg) {
		var m = $id("messages");
		m.innerHTML = msg + m.innerHTML;
	}

	// file selection
	function FileSelectHandler(e) {

		//alert('FileSelectHandler');

		// fetch FileList object
		var files = e.target.files || e.dataTransfer.files;

		// process all File objects
		for (var i = 0, f; f = files[i]; i++) {
			UploadFile(f);
		}

	}

	function toggleButton(t){
		var $button = $('button.form');

		if( t ){
			cansubmit = true;
			$button.removeClass('disabled');
		}
		else {
			cansubmit = false;
			$button.addClass('disabled');
		}

	}

	function resetUpload(){
		//_log( 'resetUpload()' );
		$('#file_display').remove();
		$('.sub-message').fadeIn();
		$('#file').removeAttr('disable').fadeIn();
		$('#progress p').remove();
	}


	// upload JPEG files
	function UploadFile(file) {

		$('#progress').on('click','#remove',function(e){
			e.preventDefault();
			resetUpload();
		})

		var MAX_FILE_SIZE = 15 * 1000 * 1000,
			xhr = new XMLHttpRequest();

		if (xhr.upload && file.size <= MAX_FILE_SIZE ) {

			// file received/failed
			xhr.onreadystatechange = function(e) {
				if (xhr.readyState == 4) {
					var code = (xhr.status == 200 ? "success" : "failure");
					if( xhr.status == 200 ){

						$('#progress p').html('<a href="#" id="remove">remove</a>')
							.css({'background':'none','width':'auto'});

						//_log( xhr.responseText );

						toggleButton(true);

						var resp = JSON.parse(xhr.responseText);

						fileLink = resp.file.tmp_name;
						$('.sub-message').fadeOut();
						var input = '<input id="file_display" type="text" value="'+resp.file.name + ' has been added.">';
						$('#file').fadeOut().after(input).attr('disable','disable');

						useAjax = true;
					}

					//_log( xhr );
				}
			};

			// spam filter
			if( $('#address').val() != '' ){
				$('.sub-message').fadeOut().html();
				$('#file').fadeOut().after(file.name + ' has been added.').remove();
				return false;
			}

			toggleButton(false);

			// create progress bar
			var o = $id("progress");
			var progress = o.appendChild(document.createElement("p"));
			progress.appendChild(document.createTextNode("upload " + file.name));


			// progress bar
			xhr.upload.addEventListener("progress", function(e) {
				var pc = parseInt(100 - (e.loaded / e.total * 100));
				progress.style.backgroundPosition = pc + "% 0";
			}, false);

			// start upload
			xhr.open("POST", $id("contact-form").action, true);
			xhr.setRequestHeader("X_FILENAME", file.name);
			xhr.send(file);

		}

	}


	// initialize
	function Init() {

		var fileselect = $id("file");
		if(fileselect.length){
			// file select
			fileselect.addEventListener("change", FileSelectHandler, false);

			// is XHR2 available?
			var xhr = new XMLHttpRequest();
			if (xhr.upload) {

				//_log('xhr.upload works');
				// Turn on ajax call
			}
			else {
				//_log('xhr.upload does not work');
				useAjax = false;
			}

			xhr = false;
			delete xhr;
		}

	}

	// call initialization file
	if (window.File && window.FileList && window.FileReader) {
		Init();
	}
}

/*
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
*/
