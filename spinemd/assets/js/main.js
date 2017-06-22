
/*
function overlayIt(image, x, y){
	if( window.location.host.indexOf('dan') === -1){ return false; }

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
*/

function scrollIt(where){
	$('html,body').animate(
		{scrollTop: where.offset().top},
		500
	);
}

$(function(){
	/* 
	uncomment overlayIt() up top
	uncomment call to function below(path to overlay image relative to the html file, x, y);
	*/
	//overlayIt('overlay/home.jpg','50%','0');

	/*
		On page load and resize(after resizing stops) sizecheck, gets the window size and fires 
		the appropriate function phone_fun, tablet_fun or desktop_func. Write custom functions and 
		add calls to the needed functions there.
	*/
	var $the_window = $(window),	
		mobile_width_max = 630,
		tablet_width_max = 768,	
		phone_func = function(){
			
		},
		tablet_func = function(){
			
		},
		desktop_func = function(){
			
		},
		mquerie_func = function(device){
			$body.removeClass('mobile tablet desktop').addClass(device);
		},
		sizecheck = function(){
			var window_width = $the_window.width();
			if(window_width < mobile_width_max){
				mquerie_func('mobile');
				phone_func();
			}else if(window_width >= mobile_width_max && window_width <= tablet_width_max){
				mquerie_func('tablet');
				tablet_func();
			}else{
				mquerie_func('desktop');
				desktop_func();
			}
		};



	$the_window.resize(function(){
        if(this.resizeTO){ clearTimeout(this.resizeTO);}
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 500);
    }).bind('resizeEnd', function() {
		sizecheck();
	}).load(function(){
		sizecheck();
		
	});
	
	
});





