function overlayIt(image, x, y){
	//if( window.location.host.indexOf('dan') === -1){ return false; }

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


function scrollIt(where){
	$('html,body').animate(
		{scrollTop: where.offset().top},
		500
	);
}

jQuery(document).ready(function($) {
	overlayIt('overlay/customer_portal.jpg', '50%', '0px');
	// Window resize functions
	//	The functions here adjust the secondary nav for smaller screen sizes moving it below the portlets.

	var $ol = $('ol'),
		$phone_menu = $('button.phone_menu'),
		$phone_nav = $('nav.main_phone');


	$phone_menu.click(function(){
		$phone_nav.slideToggle();
		return false;
	});

	if($ol.length){
		$ol.each(function(){
			$(this).addClass('color').find('li').wrapInner('<span class="normal"/>');
		});
	}

	$("nav.main_n").accessibleMegaMenu({
            /* prefix for generated unique id attributes, which are required
               to indicate aria-owns, aria-controls and aria-labelledby */
            uuidPrefix: "accessible-megamenu",

            /* css class for the hover state */
            hoverClass: "hover",

            /* css class for the focus state */
            focusClass: "focus",

            /* css class for the open state */
            openClass: "open"
        });

	var $the_window = $(window),
		$side_bar = $('.side_bar'),
		$side_nav = $('.side_nav', $side_bar),
		move_menu = function(){
			$side_bar.addClass('move').append($side_nav);
		},
		move_menu_back = function(){
			$side_bar.removeClass('move').prepend($side_nav);
		},
		check_menu = function(){
			if($the_window.width() <= 767 && $side_bar.hasClass('move') === false){
				move_menu();
			}else if($the_window.width() > 767 && $side_bar.hasClass('move') === true){
				move_menu_back();
			}

			if($the_window.width() > 767){
				$open_menu.removeClass('open');
				$mobile_menu.hide();
			}
		};

	$the_window.resize(function(){
        check_menu();

    }).load(function(){
		check_menu();
    });

// FAQ


	//Tables
	var table = $('.main').find('table');

	if(table.length){
		if($('html').hasClass('lt-ie9') === false){
			table.each(function(){
				var header = [],
					th = $(this).find('th'),
					tbtr = $(this).find('tbody').find('tr');

				for(var i=0; i<th.length; i++){
					header[i] = th.eq(i).text();
				}

				for(var j=0; j<tbtr.length; j++){
					var td = tbtr.eq(j).find('td');
					for(var k=0; k<td.length; k++){
						td.eq(k).prepend('<span class="th">'+header[k]+': ');
					}
				}

			});
		}
	}

	// Table accessibility
	$('thead th').attr("scope","col");
	$('tbody th').attr("scope","row");



});