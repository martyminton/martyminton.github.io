<?php
$randomNum = rand(0,9);
$randomNum2 = rand(0,9);
$randomNumTotal = $randomNum + $randomNum2;
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
		<title>Contact | About | ProSOL Associates</title>
		<meta name="keywords" content="Insert, Keywords, Here, "/>
		<meta name="description" content="Insert Description Here." />
		<link rel="stylesheet" type="text/css" href="css/global.css" />
		<link rel="stylesheet" type="text/css" href="css/secondary.css" />
		<script language="javascript" type="text/javascript" src="scripts/jquery-1.3.2.min.js"></script>
		<script language="javascript" type="text/javascript" src="scripts/jquery.employee.js"></script>
        <script language="javascript" type="text/javascript" src="http://www.cstraight.com/scripts/jquery.validate.min.js"></script>
        
        <script type="text/javascript">
		$.validator.methods.equal = function(value, element, param) {
				return value == param;
			};
			$(document).ready(function(){
				$("#contact").validate({
					rules: {
						name: "required",
						email: {
							required: true,
							email: true
						},
						math: {
							equal: <?php echo $randomNumTotal; ?>	
						}
					},
					messages: {
						name: "Please enter your name.",
						email: "Please enter a valid email.",
						math: "Please solve the equation."
					},
				});
				function resetForm(id) {
					$('#'+id).each(function(){
	        			this.reset();
					});
				}
			});
		</script>       
		<script type="text/javascript">
		function validate(){
   var flag = 0;
   var msg = 'Please complete the following fields:\n\n';
   
   if(document.contact.name.value == ''){
    msg += 'Name\n';
    flag = 1;
   }
   
   
   if(document.contact.email.value == ''){
    msg += 'Email\n';
    flag = 1;
   } else {
    if(!checkEmail(document.contact.email.value)){
     msg += 'Email address not valid\n';
     flag = 1;
    }
   }
            
   if(document.contact.math.value == ''){
    msg += 'Math Equation\n';
    flag = 1;
   }
   

   if(eval($('div.security > span').html().replace('=','')) != $('div.security > input').val()){
    msg += 'Math Equation is Wrong\n';
    flag = 1;
   }

   if(document.contact.phone.value == ''){
    msg += 'Phone\n';
    flag = 1;
   }



   if(flag == 0){
    document.contact.submit();
   } else {
    alert(msg);
   }
  }
		
		function checkEmail(str) {
			var at="@";
			var dot=".";
			var lat=str.indexOf(at);
			var lstr=str.length;
			var ldot=str.indexOf(dot);
			
			if (str.indexOf(at)==-1){
			   return false;
			}
		
			if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
			   return false;
			}
		
			if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
				return false;
			}
		
			if (str.indexOf(at,(lat+1))!=-1){
				return false;
			}
		
			if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
				return false;
			}
		
			if (str.indexOf(dot,(lat+2))==-1){
				return false;
			}
			
			if (str.indexOf(" ")!=-1){
				return false;
			}
		
			return true;				
		}
		</script>
        
        
	</head>
	<body>
		<div id="container">
			<div id="masthead">
				<a href="index.html" id="logo">ProSOL Associates</a>
				<ul id="nav">
					<li><a href="index.html" class="home">Home</a></li>
					<li><a href="about.html" class="about-on">About</a></li>
					<li><a href="solutions.html" class="solutions">Solutions</a></li>
					<li><a href="contracts.html" class="contracts">Contracts</a></li>
					<li><a href="careers.html" class="careers">Careers</a></li>
				</ul>
			</div>
			<div id="feature">
				<img src="images/feature-about_us.jpg" alt="secondary-feature-1" width="980" height="132"/>
			</div>
			<div id="content">
				<div class="left">
					<h1 class="about">About</h1>

					<h3>Our Location</h3>

<p>Our headquarters are located at:</p>
                    
<p><strong>ProSol Associates, LLC</strong><br />
5600 General Washington Drive<br />
B200<br />
Alexandria, VA 22312 - <a href="http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=5600+General+Washington+Drive+Suite+B200+Alexandria,+VA+22312&sll=38.79838,-77.164175&sspn=0.006447,0.013937&ie=UTF8&hq=&hnear=b200,+5600+General+Washington+Dr,+Alexandria,+Fairfax,+Virginia+22312&t=h&z=17&iwloc=A" target="_blank">MAP IT</a><br />
<strong>Phone:</strong>  703-942-5602<br />
<strong>Fax:</strong>  703-942-5614</p>                    
                    
<h3>Contact Us</h3>

<p>Fill out the form below to send us a message and we will respond to your request within one business day.</p>
<p class="line"><strong>Please provide the following information:</strong></p>
<form id="contact" name="contact" method="POST" action="send_mail.php">
<table border="0" cellpadding="10" cellspacing="10">
	<tr>
		<td valign="top" style="width:200px;"><label for="name">Name<span style="color:#FF0000; font-style:italic">*</span> :</label></td>
		<td valign="top"><input style="width:154px" type="text" id="name" name="name" class="textbox required" value="" /></td>
	</tr>

	<tr>
		<td valign="top"><label for="company">Company Name:</label></td>
		<td valign="top"><input style="width:154px" type="text" id="company" name="company" class="textbox required" value="" /></td>
	</tr>

	<tr>
		<td valign="top"><label for="email">Email Address<span style="color:#FF0000; font-style:italic">*</span> :</label></td>
		<td valign="top"><input style="width:154px" type="text" id="email" name="email" class="textbox required" value="" /></td>
	</tr>

	<tr>
		<td valign="top"><label for="phone">Phone Number<span style="color:#FF0000; font-style:italic">*</span> :</label></td>
		<td valign="top"><input style="width:154px" type="text" id="phone" name="phone" class="textbox required" value="" /></td>
	</tr>
	<tr>
		<td valign="top" style="padding:5px 0 20px 0;"><label for="phone">Department:</label></td>
		<td valign="top" style="padding:5px 0 20px 0;">
			<select name="contact" id="contact">

				<option>General Information</option>
				<option>Potential Employment</option>
				<option>Sales Department</option>                
			</select>
		</td>
	</tr>
    <tr>
    	<td colspan="2"><span style="color:#FF0000; font-style:italic">* required fields.</span>
        </td>
    </tr>
</table>
	
	<div class="clear"></div>
	<p><strong>Enter your comments in the space provided below:</strong></p>
	<textarea id="comments" name="comments" class="textarea" style="width:374px; height:125px;"></textarea><br />
    <p>Please solve this equation.</p>
              
              <div class="security"> <span class="spanclass"><?php echo($randomNum); echo(" + "); echo($randomNum2); ?> =</span>
                <input type="text" name="math" id="math" class="equation"/>
                <div class="clear"></div>
                <div class="breaker"></div>
              </div>
	<input type="button" value="submit" class="submit" onclick="validate();" />
</form><br  clear="all" /><br />
            
                    
                    </p>
				</div>
				<div class="right">
					<div class="sidenav">
						<h2 class="about">About</h2>
						<ul>
							<li><a href="about_management.html">Management</a></li>
							<li><a href="about_news.html">News</a></li>
							<li><a href="about_partners.html">Partners</a></li>
							<li><a href="about_contact.php" class="active">Contact Us</a></li>                            
						</ul>
						<div class="footer"></div>
					</div>
										<div class="testimonial">
						<h3>Testimonial</h3>
						<div class="quote">
							&quot;Our relationship with ProSol Associates continues to grow because of their solid commitment to service and delivery.&quot;<br />
							<strong>- Keith Wyttenbach, Program Manager, Lockheed Martin Corporation</strong>
						</div>
					</div>
<!--                    <div class="commitment">
						<h3>Our Commitment</h3>
						<p><a href="#">Vivamus eget ante sed</a><br />Alnon proident, sunt in culpa colmapt dopnec eralt si citae</p>
					</div> -->
				</div>
				<div class="clear"></div> <!-- Clear Content -->
			</div>
		</div>
		<div id="footer-wrap">
		<div id="footer-container">
			<div id="footer">
				<div id="employee">
					<div class="buttons">
						<a href="http://mail.google.com/a/prosolassociates.com" class="webmail" target="_blank">Webmail</a>
						<a href="https://tcg.hostedaccess.com/DeltekTC/welcome.msv" class="deltek" target="_blank">Deltek</a>
						<div class="clear"></div>
					</div>
					<a href="javascript:void(0);" class="employee-access" id="showemployee">Employee Access</a>
				</div>
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="about.html">About</a></li>
					<li><a href="solutions.html">Solutions</a></li>
					<li><a href="contracts.html">Contracts</a></li>
					<li><a href="careers.html">Careers</a></li>
					<li><a href="about_contact.php">Contact Us</a></li>                    
				</ul>
				<p>&copy; Copyright 2009. ProSOL Associates.<br />All rights reserved.</p>
			</div>
		</div>
		</div>
	</body>
</html>
