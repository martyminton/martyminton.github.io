<?php

	define('SELF', pathinfo(__FILE__, PATHINFO_BASENAME));

	define('PATH', str_replace( SELF, '', 	$_SERVER['PHP_SELF'] ));

	define('URL' , 'http://' . $_SERVER['HTTP_HOST'] . PATH );

	define('ACTION','http://' . $_SERVER['HTTP_HOST'] );

	if( isset($_SERVER['PATH_INFO']) && $_SERVER['PATH_INFO'] != '/' )
	{
		header("Location: /",TRUE,307);
	}

	require_once 'form_action.php';

?><!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta charset="utf-8">
	<meta name="description" content="Based in Arlington, Virginia, LMO Advertising is a full service advertising agency specializing in branding, strategy, interactive and  direct marketing" />
	<meta name="keywords" content="advertising, advertising agency, traditional advertising, traditional marketing, interactive marketing, direct marketing, branding, advertisements, strategy, partnerships, creative" />

	<meta property="og:site_name" content="LMO Advertising - Full Service Advertising Agency in Arlington, Virginia"/>
	<meta property="og:title" content="LMO Advertising - Full Service Advertising Agency in Arlington, Virginia" />
	<meta property="og:description" content="Based in Arlington, Virginia, LMO Advertising is a full service advertising agency specializing in branding, strategy, interactive and  direct marketing" />
	<meta property="og:image" content="http://www.lmo.com/assets/images/logo-lmo.png" />
	<meta property="og:url" content="http://www.lmo.com" />

	<link rel="stylesheet" href="/assets/css/min.css" media="screen">
	<link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/f55835a9-7ef5-4826-89b6-ca6100bcf158.css"/>
	<link rel="stylesheet" type="text/css" href="//cloud.typography.com/7229072/631122/css/fonts.css" />
	<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
	<script src="/assets/js/modernizr.custom.33517.js"></script>
	<link rel="canonical" href="http://www.lmo.com" />
	<title>LMO Advertising - Full Service Advertising Agency in Arlington, Virginia</title>

<?php if($_SERVER['HTTP_HOST'] == "www.lmo.com"){ ?>
	<script type="text/javascript">
		window.analytics||(window.analytics=[]),window.analytics.methods=["identify","track","trackLink","trackForm","trackClick","trackSubmit","page","pageview","ab","alias","ready","group","on","once","off"],window.analytics.factory=function(t){return function(){var a=Array.prototype.slice.call(arguments);return a.unshift(t),window.analytics.push(a),window.analytics}};for(var i=0;i<window.analytics.methods.length;i++){var method=window.analytics.methods[i];window.analytics[method]=window.analytics.factory(method)}window.analytics.load=function(t){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=("https:"===document.location.protocol?"https://":"http://")+"d2dq2ahtl5zl1z.cloudfront.net/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n)},window.analytics.SNIPPET_VERSION="2.0.8",
		window.analytics.load("ejiauv7dl3");
		window.analytics.page();
	</script>
<?php }else{ ?>
	<script type="text/javascript">
		window.analytics||(window.analytics=[]),window.analytics.methods=["identify","track","trackLink","trackForm","trackClick","trackSubmit","page","pageview","ab","alias","ready","group","on","once","off"],window.analytics.factory=function(t){return function(){var a=Array.prototype.slice.call(arguments);return a.unshift(t),window.analytics.push(a),window.analytics}};for(var i=0;i<window.analytics.methods.length;i++){var method=window.analytics.methods[i];window.analytics[method]=window.analytics.factory(method)}window.analytics.load=function(t){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=("https:"===document.location.protocol?"https://":"http://")+"d2dq2ahtl5zl1z.cloudfront.net/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n)},window.analytics.SNIPPET_VERSION="2.0.8",
		window.analytics.load("uj2x3m4k9b");
		window.analytics.page();
	</script>
<?php } ?>

</head>
<body>
	<section id="home" class="rsvp">
		<div class="contain">
			<div class="creator">
				<h1>
					LMO Advertising
				</h1>
				<h2>Creator in Residence Series</h2>
				<h3>92 Skybox Alonzo Mourning Rookie Card</h3>
				<p class="date">May 8, 2014 <br> <span class="time">4:00 - 6:00pm</span></p>
			</div>
			<div class="rsvp_buttons">
				<a href="http://www.google.com/calendar/event?action=TEMPLATE&text=LMO%20Creator%20in%20Residence%20Series%20-%2092%20Skybox%20Alonzo%20Mourning%20Rookie%20Card&location=1776%20Wilson%20Blvd%205th%20Floor%20Arlington%2C%20VA%2022209&dates=20140508T200000Z/20140508T220000Z&trp=true&details=LMO%20is%20located%20on%20the%205th%20floor%20of%201776%20 Wilson%20Boulevard%20on%20the%20corner%20of%20Wilson%20Boulevard%20and%20N.%20Quinn%20St.%20in%20Rosslyn.%20If you're%20taking%20the%20Metro,%20we're%204%20blocks%20west%20of%20the%20Rosslyn%20Metro%20stop%20and%204%20blocks%20east%20of%20the%20Court%20House%20Metro%20stop." class="cta" target="_blank">Add to Google Calendar</a>
				<a href="http://lmo.vimdev.com/RSVP/CIRS.ics" class="cta" target="_blank">Add to Outlook Calendar</a>
		</div>


		<div class="h3">
			<h3>RSVP Today</h3>
		</div>
	</section>




	<section id="contact" class="rsvp">
		<div class="contain">
			<div class="form-container">
				<form id="contact-form" method="post" action="/RSVP/#contact" enctype="multipart/form-data">
					<div class="col-1">
						<div class="inputWrapper radio">
							<input type="radio" name="attending" value="Attending" checked="checked" id="attending">
							<label for="attending">I will be attending</label>

							<input type="radio" name="attending" value="Not Attending" id="not_attending">
							<label for="not_attending">I will not be attending</label>
						</div>

						<div class="inputWrapper">
							<label for="first_name">First Name</label>
							<input type="text" id="first_name" name="first_name" placeholder="Enter your first name here" value="<?php echo p('first_name');?>">
							<?php if(e('first_name')):?><label for="first_name" class="error"><?php echo e('first_name');?></label><?php endif; ?>
						</div>
						<div class="inputWrapper">
							<label for="last_name">Last Name</label>
							<input type="text" id="last_name" name="last_name" placeholder="Enter your last here" value="<?php echo p('last_name');?>">
							<?php if(e('last_name')):?><label for="last_name" class="error"><?php echo e('last_name');?></label><?php endif; ?>
						</div>

						<div class="inputWrapper">
							<label for="email">Email</label>
							<input type="text" id="email" name="email" placeholder="Enter your email here" value="<?php echo p('email');?>">
							<?php if(e('email')):?><label for="email" class="error"><?php echo e('email');?></label><?php endif; ?>
						</div>

					<!--
						<div class="inputWrapper">
							<label for="business_name">Business Name</label>
							<input type="text" id="business_name" name="business_name" placeholder="Enter your business name here" value="<?php echo p('business_name');?>">
							<?php if(e('business_name')):?><label for="business_name" class="error"><?php echo e('business_name');?></label><?php endif; ?>
						</div>


						<div class="inputWrapper">
							<label for="title">Title</label>
							<input type="text" id="title" name="title" placeholder="Enter your title here" value="<?php echo p('title');?>">
							<?php if(e('title')):?><label for="title" class="error"><?php echo e('title');?></label><?php endif; ?>
						</div>
					-->
					<div class="inputWrapper radio">
							<input type="checkbox" id="newsletter" name="newsletter" value="yes" checked="checked">
							<label for="newsletter">Please keep me updated with information and insights from LMO.</label>
						</div>

					</div>


					</div>
					<div class="clear"></div>
					<input type="hidden" id="to" name="to"  value="" />
					<input type="hidden" id="address" name="address"  value="" />
					<div id="server_message" class="server-error" ></div>
					<button class="form" type="submit">Submit RSVP</button>
				</form>
			</div>
			<div class="thankyou">
				<h1 class="white">Thank you.</h1>
				<span class="thanks">We're excited to hear from you.</span>
			</div>
		</div>

			<div class="map">
				<div class="contain">
					<div class="wrapper">
						<p class="phone"><img src="/assets/images/icon-phone.png" alt="" /><a href="tel:7038752193">703.875.2193</a></p>
						<p class="orange">LMO</p>
						<address>1776 Wilson Boulevard<br>5<sup>th</sup> Floor<br>Arlington, VA 22209</address>
						<a class="directions" href="https://goo.gl/maps/7o9q7" target="_blank">View Directions</a>
					</div>
				</div>
			</div>


		<div class="clear"></div>
	</section>

	<footer>
		<div class="contain">
			<a href="http://www.linkedin.com/company/28125?trk=tyah&trkInfo=tas%3Alm%26%2Cidx%3A1-1-1" class="linkedin" target="_blank">
				<img src="/assets/images/social-linkedin.png" alt="LinkedIn" />
			</a>
			<a href="https://www.facebook.com/LMOadvertising" class="facebook" target="_blank">
				<img src="/assets/images/social-facebook.png" alt="Facebook" />
			</a>
			<a href="http://instagram.com/lmoadv" class="instagram" target="_blank">
				<img src="/assets/images/social-instagram.png" alt="Instagram" />
			</a>
			<a href="http://www.pinterest.com/lmoadvertising/" class="pinterest" target="_blank">
				<img src="/assets/images/social-pinterest.png" alt="Pintrest" />
			</a>
			<a href="https://twitter.com/lmoadv" class="twitter" target="_blank">
				<img src="/assets/images/social-twitter.png" alt="Twitter" />
			</a>
		</div>
	</footer>

	<div class="copyright">
		<p>&copy; Copyright 2014 LMO Advertising, All Rights Reserved.  <a href="#" id="pp">Privacy Policy</a></p>
	</div>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<?php if( $_SERVER['REMOTE_ADDR'] == '108.12.181.76' || $_SERVER['REMOTE_ADDR'] == '127.0.0.1' ):?>

	<script>var DEBUG=true;</script>
	<?php endif;?>
	<script src="/assets/js/jquery.unveil.min.js"></script>
	<script src="/build/js/main_rsvp.js"></script>
	<script src="/assets/js/lib/jquery.validate.js"></script>



</body>
</html>