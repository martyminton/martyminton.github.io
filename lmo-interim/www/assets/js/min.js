function modalWindow(){var e=$(".bxslider li a"),t=$(window).height()-90;e.click(function(e){e.preventDefault();var n=$(this).parent().attr("id");$(".bxslider li."+n+" a").colorbox({width:980,height:t,onOpen:function(){$("body").addClass("cb")},onClosed:function(){$("body").removeClass("cb")}})})}function contactForm(){var e=$("ul.contacts li a"),t=$("button.form");e.click(function(t){t.preventDefault();e.removeClass("brush");$(this).addClass("brush");$("#contact .form-container.closed").slideDown(300,function(){$("html,body").animate({scrollTop:$("#select_contact").offset().top-90},300)});$(".thankyou").hide();setTimeout(function(){if($(".form-container.closed")){$(".form-container").addClass("open");$(".form-container").fadeIn("slow")}},400);var n=$(this).find("h6.name").attr("data-name");$("button.form span.name").text(n);$('input[name="to"]').val(n)});$("#contact-form").submit(function(e){})}function fixedScrolling(){$("#family, #work, #clients, #culture, #opportunities, #contact").css({position:"fixed",top:"0"})}function showcaseSizing(){var e=$(window).height()-90;setTimeout(function(){$(".bx-viewport").css({height:e})},500)}function changeNavOnScroll(){var e=$("section"),t=$("section").attr("id"),n=$("nav ul li"),r=$("a",n);e.waypoint(function(e){var t;e==="down"?t=$(this).attr("id"):e==="up"&&(t=$(this).waypoint("prev").attr("id"));r.removeClass("active");$("a[href=#"+t+"]",n).addClass("active")},{offset:90})}function firstImpression(){var e=$("#home"),t=$("header.default");setTimeout(function(){$(".logo",e).addClass("animated fadeIn").delay(500).css({opacity:1})},500);setTimeout(function(){$(".logo-advertising",e).addClass("animated fadeIn").delay(500).css({opacity:1})},900);setTimeout(function(){$("#home h2, #home .cta").addClass("animated fadeIn").delay(500).css({opacity:1})},1300);setTimeout(function(){$("li.purpose",t).addClass("animated bounceInDown").delay(500).css({opacity:1})},1100);setTimeout(function(){$("li.work",t).addClass("animated bounceInDown").delay(500).css({opacity:1})},1200);setTimeout(function(){$("li.clients",t).addClass("animated bounceInDown").delay(500).css({opacity:1})},1300);setTimeout(function(){$("li.culture",t).addClass("animated bounceInDown").delay(500).css({opacity:1})},1400);setTimeout(function(){$("li.opportunities",t).addClass("animated bounceInDown").delay(500).css({opacity:1})},1500);setTimeout(function(){$("li.contact",t).addClass("animated bounceInDown").delay(500).css({opacity:1})},1600);setTimeout(function(){$("a.arrow-down",e).addClass("animated fadeIn").delay(500).css({opacity:1})},2500)}function windowSize(){var e=$(window).height(),t=$(window).width(),n=new Array;n[0]=e;n[1]=t;return n}function assignHeightToSection(){var e=windowSize();$("section#home").css({height:e[0]})}function formValidation(){var e=!0;$("#contact-form").validate({rules:{email:{required:!0,email:!0},name:{required:!0},phone:{required:!0,digits:!0,minlength:10},comments:{required:!0},attachment:{required:!0}},submitHandler:function(t){var n=$("ul.contacts li a"),r=$("button.form"),i=$("#file");n.unbind("click").click(function(e){e.preventDefault()});r.html("Please Wait....").addClass("disabled");i.length&&i.val().length==0&&(useAjax=!0);if(!useAjax){t.submit();return!0}if(e){var s={name:$("#name").val(),phone:$("#phone").val(),email:$("#email").val(),comments:$("#comments").val(),address:$("#address").val(),file:$("#file").val(),to:$("#to").val(),link:fileLink,ajax:useAjax};$.ajax({type:"POST",url:"mailer.php",data:s,success:function(e){if(e.status!==undefined&&e.status){var t=$("ul.contacts li a"),n=$("button.form");t.removeClass("brush");$(".form-container").fadeOut("slow").remove();$("ul#contacts").fadeOut("slow").remove();$(".thankyou").fadeIn("slow")}if(e.errors!==undefined&&e.errors.length){var r="";e.errors.map(function(e){r+="<li>"+e+"</li>"});r="<ul>"+r+"</ul>";$("#server_message").html(r).fadeIn()}}})}return!1}})}function ajaxUpload(){function e(e){return document.getElementById(e)}function t(t){var n=e("messages");n.innerHTML=t+n.innerHTML}function n(e){var t=e.target.files||e.dataTransfer.files;for(var n=0,r;r=t[n];n++)s(r)}function r(e){var t=$("button.form");if(e){cansubmit=!0;t.removeClass("disabled")}else{cansubmit=!1;t.addClass("disabled")}}function i(){$("#file_display").remove();$(".sub-message").fadeIn();$("#file").removeAttr("disable").fadeIn();$("#progress p").remove()}function s(t){$("#progress").on("click","#remove",function(e){e.preventDefault();i()});var n=15e6,s=new XMLHttpRequest;if(s.upload&&t.size<=n){s.onreadystatechange=function(e){if(s.readyState==4){var t=s.status==200?"success":"failure";if(s.status==200){$("#progress p").html('<a href="#" id="remove">remove</a>').css({background:"none",width:"auto"});r(!0);var n=JSON.parse(s.responseText);fileLink=n.file.tmp_name;$(".sub-message").fadeOut();var i='<input id="file_display" type="text" value="'+n.file.name+' has been added.">';$("#file").fadeOut().after(i).attr("disable","disable");useAjax=!0}}};if($("#address").val()!=""){$(".sub-message").fadeOut().html();$("#file").fadeOut().after(t.name+" has been added.").remove();return!1}r(!1);var o=e("progress"),u=o.appendChild(document.createElement("p"));u.appendChild(document.createTextNode("upload "+t.name));s.upload.addEventListener("progress",function(e){var t=parseInt(100-e.loaded/e.total*100);u.style.backgroundPosition=t+"% 0"},!1);s.open("POST",e("contact-form").action,!0);s.setRequestHeader("X_FILENAME",t.name);s.send(t)}}function o(){var t=e("file");if(t.length){t.addEventListener("change",n,!1);var r=new XMLHttpRequest;r.upload||(useAjax=!1);r=!1;delete r}}window.File&&window.FileList&&window.FileReader&&o()}var useAjax=!1,fileLink=!1;$(document).ready(function(){assignHeightToSection();firstImpression();changeNavOnScroll();modalWindow();showcaseSizing();contactForm();formValidation();ajaxUpload();var e=$(window).height()-90;$("#pp").colorbox({width:980,height:e,href:"pp.html",onOpen:function(){$("body").addClass("cb")},onClosed:function(){$("body").removeClass("cb")}});$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=$(this.hash);e=e.length?e:$("[name="+this.hash.slice(1)+"]");if(e.length){$("html,body").animate({scrollTop:e.offset().top-90},1e3);return!1}}});$(".bxslider").bxSlider({infiniteLoop:!1,hideControlOnEnd:!0,onSlideBefore:function(e,t,n){$(".bxslider li").removeClass("active");$(".bxslider li").eq(n).addClass("active")}});$(".culture-slider").bxSlider({infiniteLoop:!0,hideControlOnEnd:!1,nextSelector:"#slider-next",prevSelector:"#slider-prev"});$("html").hasClass("touch")===!0&&$(".culture-slideshow").find(".photo").on("click",function(){var e=$(this);e.hasClass("touched")===!0?e.removeClass("touched"):e.addClass("touched")});$(".sliderEdgeLeft, .sliderEdgeLeftBottom").on("click",function(){$("a.bx-prev").trigger("click")});$(".sliderEdgeRight, .sliderEdgeRightBottom").on("click",function(){$("a.bx-next").trigger("click")});$("#clients, #culture").find("img").unveil(150)});$(window).resize(function(){assignHeightToSection()});$(window).scroll(function(){var e=$("header.default"),t=parseInt($(this).scrollTop()),n=$(window).scrollTop(),r=windowSize();n>r[0]-90?$("header").addClass("secondary"):$("header").removeClass("secondary").addClass("default")});