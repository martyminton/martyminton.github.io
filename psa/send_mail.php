<?php
$name = $_POST["name"];
$company = $_POST["company"];
$mail = $_POST["email"];
$phone = $_POST["phone"];
$contact = $_POST["contact"];
$comments = $_POST["comments"];

define("BASEPATH", dirname($_SERVER["SCRIPT_FILENAME"]));

include("Email.php");
$email = new CI_Email();
$email->from("webform@prosolassociates.com");
$email->set_mailtype("html");

$body = "";
$body .= "<b>Name:</b> ".$name."<br /><br />";
$body .= "<b>Company:</b> ".$company."<br /><br />";
$body .= "<b>Email:</b> <a href='mailto:".$mail."'>".$mail."</a><br /><br />";
$body .= "<b>Phone:</b> ".$phone."<br /><br />";
$body .= "<b>Contact:</b> ".$contact."<br /><br />";
$body .= "<b>Comments:</b><br />".$comments."<br /><br />";

$email->message($body);
$email->to("info@prosolassociates.com");
$email->subject("Contact Form");

if($email->send()){
	header("location: about_contact_thank-you.html");
} else {
	header("location: about_contact.php");
}
exit;
?>