<?php

	if( isset($_SERVER['PATH_INFO']) && $_SERVER['PATH_INFO'] != '/' )
	{
		header("Location: /",TRUE,307);
	}

	$attending = isset($_GET['attending']) ? $_GET['attending'] : '';

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
			<h1>
				<span class="logo">LMO</span>
				<span class="logo-advertising">Advertising</span>
			</h1>

			<div class="show_me">
				<h2>Thank You</h2>
				<?php if( $attending == 'Attending'): ?>
				<p>Thank you for RSVPing for the LMO Creator in Residence Series. We look forward to seeing you!</p>
				<?php else: ?>
				<p>Thank you for RSVPing for the LMO Creator in Residence Series. We're sorry we'll miss you!</p>
				<?php endif; ?>
			</div>

		</div>


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