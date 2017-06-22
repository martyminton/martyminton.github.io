<?php

	if( ! ini_get('date.timezone') )
	{
		// date_default_timezone_set('GMT');
		date_default_timezone_set('America/New_York');
	}

	$p = $_POST;

	if( count($p) )
	{

		// Fix for vimdev.com
		if( $_SERVER['SERVER_ADDR'] == '216.70.81.118' )
		{
			apache_setenv("DOCUMENT_ROOT", $_SERVER['DOCUMENT_ROOT'] = str_replace($_SERVER['SCRIPT_NAME'], '', $_SERVER['SCRIPT_FILENAME']));
		}

		// direct hit to mailer page
		if( !isset($_SERVER['HTTP_REFERER']) )
		{
			header("Location: /" );
			exit;
		}

		// must be from site with lmo.
		if( ! strpos($_SERVER['HTTP_REFERER'], 'lmo.') > 0 )
		{
			header("Location: /" );
			exit;
		}

		// Spam filter
		if( isset($p['address']) && $p['address'] != '' )
		{
			spam_filter();
			exit;
		}



	// --------------------------------------------------------
	//  Config Vars
	// --------------------------------------------------------

		$site 			= 'http://'.$_SERVER['HTTP_HOST'];
		$subject 		= 'Creator in Residence Series RSVP';
		$to 				= 'brittanyhall@lmo.com';
		//$to = 'dan@viminteractive';
		$from_email		= 'rsvp@'.$_SERVER['SERVER_NAME'];

		$dev = false;

	// --------------------------------------------------------
	//  POST Vars
	// --------------------------------------------------------

		// $errors array
		$errors = array();

		// get fields from post
		$attending 		= p('attending');
		$first_name 	= p('first_name');
		$last_name 		= p('last_name');
		$email 			= p('email');
		//$title 			= p('title');
		//$business_name 	= p('business_name');
		$newsletter 	= p('newsletter') === 'yes';

	// --------------------------------------------------------
	//  Validate fields
	// --------------------------------------------------------

		// validate form here
		$requiredFields = array(
			'attending' 	=> 'Please your attending selection.',
			'first_name'	=> 'Please enter your first name.',
			'last_name'		=> 'Please enter your last name.',
			'email'			=> 'Please enter a valid email.'
			//'title'			=> 'Please enter your title.',
			//'business_name' => 'Please enter your business name.'
		);

		//$errors = array(1,2);

		foreach( $requiredFields as $field => $msg )
		{
			//echo $field. ' ' . $$field . '<Br>';
			if( ! isset($$field) || ! $$field )
			{
				$errors[$field] = $msg;
			}
		}

		//echo "<pre>"; var_dump( $errors, $_POST ); exit;


	// --------------------------------------------------------
	//  Build Email
	// --------------------------------------------------------


		if( count($errors) == 0 )
		{

			// html headers
			//$headers  = 'MIME-Version: 1.0';
			//$headers .= "\r\nContent-type: text/html; charset=iso-8859-1";
			$headers = "From: Creator in Residence Series Form <{$from_email}>";
			$headers .= "\r\nReply-To: {$first_name} {$last_name} <{$email}>";

			$message = "
Greetings LMO Staff Member,

$first_name $last_name, is $attending.

Email: $email

			";


			// Attending Subject
			$subject 		= 'I Will Be Attending';

			if( $attending == 'Not Attending' )
			{
				// Not Attending Subject
				$subject 		= 'I Will Not Be Attending';
				$message = "
Greetings LMO Staff Member,

$first_name $last_name, is NOT $attending.

Email: $email

			";
			}


			// dev only
			if( $dev || $_SERVER['REMOTE_ADDR'] == '108.12.181.76' )
			{
				$to = 'dev@viminteractive.com';
				$resp['status'] = true;
			}

			//echo "<pre>"; var_dump( $to, $subject, $message, $headers ); exit;
			if( $newsletter )
			{

				$data = array(
					'first'		=> $first_name,
					'last'		=> $last_name,
					'email'		=> $email,
					//'title'		=> $title,
				//	'business'	=> $business_name,
					'attending'	=> $attending,
				);

				add_email_to_list($data);
			}

			$sent = @mail($to, $subject, $message, $headers);

			if( !$sent )
			{
				die('email error.');
			}

			redirect_thank_you($attending);
			exit;

		}


	}

// --------------------------------------------------------
//  Helpers
// --------------------------------------------------------

	function add_email_to_list($data)
	{

		$file = './newsletter_list.csv';
		//echo "<pre>"; var_dump( $file ); exit;

		$file_error = "can't open file please contact admin.";


		// Headers for CSV File
		$headers = array_keys($data);

		// row
		$row = array_values($data);

		//echo "<pre>"; var_dump( $fields, $headers, $row ); exit;

		if (!file_exists($file)) {

			$fh = fopen($file, 'a') or die($file_error);
			//fwrite($fh, $headers);
			fputcsv($fh, $headers);
			fclose($fh);
		}

		$fh = fopen($file, 'a') or die($file_error);
		//fwrite($fh, $row);
		fputcsv($fh, $row);
		fclose($fh);

	}

	// post var
	function p($var, $default=false)
	{
		return isset($_POST[$var]) ? $_POST[$var] : $default;
	}

	// errors array
	function e($var, $default=false)
	{
		global $errors;
		return isset($errors[$var]) ? $errors[$var] : $default;
	}

	// encode json and die
	function redirect_thank_you($attending=false)
	{
		$url = URL . 'thank-you.php?attending='.$attending;
		header("Location: {$url}");
	}

	function spam_filter()
	{
		$url = URL . 'thank-you.php?';
		header("Location: {$url}");
	}
