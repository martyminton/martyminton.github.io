<?php

	if( ! ini_get('date.timezone') )
	{
		// date_default_timezone_set('GMT');
		date_default_timezone_set('America/New_York');
	}

	// Fix for vimdev.com
	if( $_SERVER['SERVER_ADDR'] == '216.70.81.118' )
	{
		apache_setenv("DOCUMENT_ROOT", $_SERVER['DOCUMENT_ROOT'] = str_replace($_SERVER['SCRIPT_NAME'], '', $_SERVER['SCRIPT_FILENAME']));
	}

	$useAjax = false;
	// check if ajax on not
	if( isset($_SERVER['HTTP_X_REQUESTED_WITH']) )
	{
		// older browsers need to do a normal post
		$useAjax = true;
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
	if( isset($_POST['address']) && $_POST['address'] != '' )
	{
		spam_filter();
		exit;
	}

	define('SELF', pathinfo(__FILE__, PATHINFO_BASENAME));

	define('PATH', str_replace( SELF, '', 	$_SERVER['PHP_SELF'] ));

	define('URL' , 'http://' . $_SERVER['HTTP_HOST'] . PATH );


// --------------------------------------------------------
//  Config Vars
// --------------------------------------------------------

	$site 			= 'http://'.$_SERVER['HTTP_HOST'];
	$subject 		= 'LMO Website Query';

	$from_email		= 'webmain@'.$_SERVER['SERVER_NAME'];
	$fileLink		= false;

	$upload_path	= $_SERVER['DOCUMENT_ROOT'] .'/www/upload/';
	$upload_url		= URL . 'upload/';

	$dev = true;

	// hardcode production upload folder
	if( $_SERVER['SERVER_ADDR'] == '205.186.187.223' )
	{
		$upload_path = '/home/87269/domains/lmo.com/html/splash_page/upload/';
		$dev = false;
	}

	// hardcode vimdev upload folder
	if( $_SERVER['SERVER_ADDR'] == '216.70.81.118' )
	{
		$upload_path = '/var/www/vhosts/vimdev.com/sites/lmo/www/upload/';
	}

	// allowed file types
	$allowedTypes = array(
		'image/gif',
		'image/jpeg',
		'image/jpg',
		'image/pjpeg',
		'image/x-png',
		'image/png',
		);

	// allow max file size in bytes
	$allowedSize = 50 * 1000 * 1000; // 50 MB

	// max size of file to attach to email in bytes
	$attachSize = 5 * 1000 * 1000; // 5 MB

// --------------------------------------------------------
//  Ajax file upload
// --------------------------------------------------------

	// fn var only used for ajax file upload
	$fn = (isset($_SERVER['HTTP_X_FILENAME']) ? $_SERVER['HTTP_X_FILENAME'] : false);

	if ($fn) // is there a file?
	{
		$useAjax = true;
		$errors = array();
		$input = file_get_contents('php://input');

		$file['tmp_name']	= time() . '_' . $fn;
		$file['name']		= $fn;

		// tmp file path
		$temp = sys_get_temp_dir() . '/' . $file['tmp_name'];

		$ok = file_put_contents( $temp, $input );

		// any upload errors
		if( !$ok )
		{
			$errors[] = 'File upload error.';
		}

		// check file type
		$file['enctype'] = mime_content_type($temp);
		if( !in_array($file['enctype'], $allowedTypes) )
		{
		//	$errors[] = 'This file type is not allowed';
		}

		// check file size
		$file['size'] = filesize($temp);
		if( $file['size'] > $allowedSize )
		{
			$errors[] = 'The file size is larger then the allowed size. (' . $allowedSize .')';
		}

		$resp = array(
			'status'	=> false,
			'file'		=> $file,
			'errors'	=>$errors
			);


		// if no errros save file and attach if possible
		if( count($errors) === 0 )
		{
			$move_file = rename( $temp, $upload_path . $file['tmp_name'] );
			if( $move_file )
			{
				$resp['status'] = true;
			}
		}

		return_json($resp);
		exit;

	}

// --------------------------------------------------------
//  normal file upload
// --------------------------------------------------------

	// file var used for normal file upload
	$file = isset($_FILES['file']) ? $_FILES['file'] : false;

	if($file) // is there a file?
	{
		$errors = array();

		$fileLink = false;

		// any upload errors
		if( $file['error'] > 0 && $file['error'] != 4 )
		{
			$errors[] = codeToMessage($file['error']);
		}

		// check file type
		if( !in_array($file['type'], $allowedTypes) )
		{
		//	$errors[] = 'This file type is not allowed';
		}

		// check file size
		if( $file['size'] > $allowedSize )
		{
			$errors[] = 'The file size is larger then the allowed size. (' . $allowedSize .')';
		}

		// attach file?
		if( $file['size'] < $attachSize )
		{
			$attachFile = true;
		}

		// if no errros save file and attach if possible
		if( count($errors) === 0 )
		{

			$filename = time() . '_' . $file['name'];

			$fullFilename = 'upload/' . $filename;

			if( file_exists($fullFilename) )
			{
				$errors[] = $filename . " already exists.";
			}
			else
			{
				move_uploaded_file( $file["tmp_name"], $fullFilename);
				$url = $site .'/'. $fullFilename;
				$fileLink = '<a href="/'.$url .'">Attached File ( '. $file['size'].' )</a>';
			}

		}

	}


// --------------------------------------------------------
//  POST Vars
// --------------------------------------------------------

	// $errors array
	$errors = array();

	// get fields from post
	$name 		= isset($_POST['name']) 	? $_POST['name'] 		: '';
	$to 		= isset($_POST['to']) 		? $_POST['to'] 			: 'no one';
	$phone 		= isset($_POST['phone']) 	? $_POST['phone'] 		: '';
	$email 		= isset($_POST['email'])	? $_POST['email'] 		: '';
	$comments 	= isset($_POST['comments']) ? $_POST['comments'] 	: '';

	// is the filelink included
	if( isset($_POST['link']) && $_POST['link'] != 'false' )
	{
		$fileLink	= true;
		$url		= $upload_url . $_POST['link'];
	}

// --------------------------------------------------------
//  Validate fields
// --------------------------------------------------------

	// validate form here
	$requiredFields = array('to','name', 'phone', 'email', 'comments');

	foreach( $requiredFields as $field )
	{
		 if( ! $field )
		{
			$errors[] = ucfirst($field) .' field is required.';
		}
	}

	// Allowed emails
	$emailList = array(
		'Sherri'	=> 'Sherri Green <SherriGreen@lmo.com>',
		'Christi'	=> 'Christi Burnum <ChristiBurnum@lmo.com>',
		'Mike'		=> 'Mike Kapetanovic <MikeKapetanovic@lmo.com>',
		'Jennifer'	=> 'Jennifer Lennon <JenniferLennon@lmo.com>',
		'Horacio'	=> 'Horacio Zamora <HoracioZamora@lmo.com>',
		'Nora'		=> 'Nora Petitt <NoraPetitt@lmo.com>',
	);

	if( ! isset($emailList[$to]) )
	{
		$errors[] = 'Can not send an email to ' .$to;
	}
	else
	{
		$to = $emailList[$to];
	}

// --------------------------------------------------------
//  Build Response - check for any errors
// --------------------------------------------------------

	$resp = array(
		'status' 	=> false,
		'to'		=> $to,
		'from'		=> $email,
		'name' 		=> $name,
		'errors' 	=> $errors
		);

	if( count($errors) > 0 )
	{
		return_json($resp);
		exit;
	}

// --------------------------------------------------------
//  Build Email
// --------------------------------------------------------


	// html headers
	//$headers  = 'MIME-Version: 1.0';
	//$headers .= "\r\nContent-type: text/html; charset=iso-8859-1";
	$headers = "From: LMO Contact Form <{$from_email}>";
	$headers .= "\r\nReply-To: {$name} <{$email}>";


	$message = "
Greetings LMO Staff Member,

$name, is interested in speaking with you at $phone, or $email.

They left the following message for you to read:

$comments
		";

	// Attache file link if there is one
	if( $fileLink )
	{
		$message .= "\n-----------------------------\n";
		$message .= "Attachment: {$url}";
		$message .= "\n-----------------------------\n";
	}

	// dev only
	if( $dev || $_SERVER['REMOTE_ADDR'] == '108.12.181.76' )
	{
		$to = 'dev@viminteractive.com';
		$resp['status'] = true;
	}

	//echo "<pre>"; var_dump( $to, $subject, $message, $headers ); exit;

	$resp['status'] = @mail($to, $subject, $message, $headers);

	if( !$resp['status'] )
	{
		$resp['errors'][] = 'Can not send an email to ' .$to;
	}

	return_json($resp);
	exit;

// --------------------------------------------------------
//  Helpers
// --------------------------------------------------------

	// encode json and die
	function return_json($data)
	{
		global $useAjax;

		// if no ajax use confirmation page
		if( $useAjax == false )
		{
			$url = URL . '/thank-you.php';

			// query ?
			//$url .= '?' . http_build_query($data);

			header("Location: {$url}");
		}

		$json = json_encode($data);
		header('Content-type: application/json');
		die($json);
	}

	function spam_filter()
	{
		$resp = array(
			'status' 	=> true,
			'to'		=> 'To',
			'from'		=> 'From',
			'name' 		=> 'Name',
			'errors' 	=> array()
			);
		return_json($resp);
	}

	// INSTANT FAIL
	function fail($errors=array())
	{
		$resp = array(
			'status' 	=> false,
			'to'		=> 'To',
			'from'		=> 'From',
			'name' 		=> 'Name',
			'errors' 	=> $errors
			);
		return_json($resp);
	}

	// php upload errors
	function codeToMessage($code)
	{
		switch ($code) {
			case UPLOAD_ERR_INI_SIZE:
				$message = "The uploaded file exceeds the upload_max_filesize directive in php.ini";
				break;
			case UPLOAD_ERR_FORM_SIZE:
				$message = "The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form";
				break;
			case UPLOAD_ERR_PARTIAL:
				$message = "The uploaded file was only partially uploaded";
				break;
			case UPLOAD_ERR_NO_FILE:
				$message = "No file was uploaded";
				break;
			case UPLOAD_ERR_NO_TMP_DIR:
				$message = "Missing a temporary folder";
				break;
			case UPLOAD_ERR_CANT_WRITE:
				$message = "Failed to write file to disk";
				break;
			case UPLOAD_ERR_EXTENSION:
				$message = "File upload stopped by extension";
				break;

			default:
				$message = "Unknown upload error";
				break;
		}
		return $message;
	}
