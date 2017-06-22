jQuery(document).ready(function($) {

	var prev_image = $('#prev_image'),
		active_image = $('#active_image'),
		next_image = $('#next_image'),
		controls = $('#controls'),
		prev = $('button.prev'),
		next = $('button.next'),
		control_next = $('button.next', controls),
		h2_text = $('h2', controls),
		p_text = $('p', controls),
		lat_long = $('#lat_long'),
		lat = $('.lat .numb', lat_long),
		longitude = $('.long .numb', lat_long),
		hero = $('#hero'),
		hero_image = $('img', hero),
		hero_name = $('.name', hero),
		hero_location = $('.location', hero),
		hero_text = $('#hero_text'),
		active_slide = $('#active_slide'),
		slide_text = $('#slide_text'),
		fadeUp = $('#fadeUp'),
		data_div = $('#data_div'),
		data_holders = $('div', data_div),
		current_slide = 0,
		max_slides = data_holders.length - 1,
		is_timer = false,
		slideTimer={},
		time_to_switch = 6000,
		changeTimer={},
		time_to_change = 1000,
		imageTimer={},
		time_to_image = 500,
		changeSlides = function(){
			var current_data = data_holders.eq(current_slide),
				src = current_data.data('image'),
				alt = current_data.data('alt'),
				text_h2 = current_data.data('h'),
				text_p = '<p>' + current_data.data('p') + ' <a href="'+current_data.data('link')+'" class="more">' +current_data.data('link-text') + '</a></p>',
				new_lat = current_data.data('lat'),
				new_long = current_data.data('long'),
				name_hero = current_data.data('hero-name'),
				location_hero = current_data.data('hero-location'),
				image_hero = current_data.data('hero-image'),
				alt_hero = current_data.data('hero-alt'),
				text_hero = current_data.html();

			active_slide.addClass('changing');
			slide_text.addClass('changing');
			fadeUp.attr('src',src).fadeIn(500);
			changeTimer = $.timer(time_to_change,function(){
				h2_text.text(text_h2);
				p_text.html(text_p);
				lat.text(new_lat);
				longitude.text(new_long);
				active_slide.removeClass('changing');
			});

			imageTimer = $.timer(time_to_image, function(){
				active_image.attr({'src': src, 'alt':alt});
				hero_image.attr({'src': image_hero, 'alt': alt_hero});
				hero_location.text(location_hero);
				hero_name.text(name_hero);
				hero_text.html(text_hero);
				slide_text.removeClass('changing');
				fadeUp.hide();
			});
		}/*,
		auto_slide = function(){
			slideTimer = $.timer(time_to_switch, function(){
				control_next.trigger('click');
				is_timer = true;
				if(is_timer === true){
					auto_slide();
				}
			});
		}*/;


	// on DOM ready load prev and next slide images
	var prev_src = data_holders.last().data('image'),
		next_src = data_holders.eq(1).data('image');

	prev_image.attr('src', prev_src);
	next_image.attr('src', next_src);


	// start auto slide
	/*
	if($(document).width() >= 768){
		auto_slide();
	}
	*/

	// prevent scrolling while user hovers
	active_slide.hover(function(){
		$.clearTimer(slideTimer);
	},function(){
		if(is_timer === true){
			auto_slide();
		}
	});

	// Button Clicks
	next.click(function(){
		$.clearTimer(slideTimer);
		is_timer = false;
		if(current_slide === max_slides){
			current_slide = 0;
			prev_src = data_holders.last().data('image');
			next_src = data_holders.eq(1).data('image');
		}else{
			prev_src = data_holders.eq(current_slide).data('image');
			current_slide++;
			var next_slide = current_slide+1;
			next_src = data_holders.eq(next_slide).data('image');
		}
		changeSlides();
		prev_image.attr('src', prev_src);
		next_image.attr('src', next_src);
	});

	prev.click(function(){
		var prev_slide;
		$.clearTimer(slideTimer);
		is_timer = false;
		if(current_slide === 0){
			current_slide = max_slides;
			prev_slide = max_slides-1;
			prev_src = data_holders.eq(prev_slide).data('image');
			next_src = data_holders.eq(0).data('image');
		}else{
			next_src = data_holders.eq(current_slide).data('image');
			current_slide--;
			prev_slide = current_slide-1;
			prev_src = data_holders.eq(prev_slide).data('image');
		}

		changeSlides();
		prev_image.attr('src', prev_src);
		next_image.attr('src', next_src);
	});
});



jQuery.timer = function(time, func, callback) {
	var a = { timer: setTimeout(func, time), callback: null };
	if (typeof (callback) === 'function') { a.callback = callback; }
	return a;
};

jQuery.clearTimer = function(a) {
	clearTimeout(a.timer);
	if (typeof (a.callback) === 'function') { a.callback(); }
	return this;
};

