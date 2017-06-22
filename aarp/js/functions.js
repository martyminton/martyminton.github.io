init();
	
	function init() {
		if (!Array.prototype.indexOf)
		{
		  Array.prototype.indexOf = function(elt /*, from*/)
		  {
			var len = this.length >>> 0;
		
			var from = Number(arguments[1]) || 0;
			from = (from < 0)
				 ? Math.ceil(from)
				 : Math.floor(from);
			if (from < 0)
			  from += len;
		
			for (; from < len; from++)
			{
			  if (from in this &&
				  this[from] === elt)
				return from;
			}
			return -1;
		  };
		}
		
		if(!document.getElementsByClassName){
			document.getElementsByClassName=function(cn){
			var rx=new RegExp('\\b'+cn+'\\b');
			var allT=document.getElementsByTagName('*'), allCN=[], i=0, a;
				while(a=allT[i++]){
				rx.test(a.className)?allCN[allCN.length]=a:null;
				}
			return allCN
			}
		}
				
		
		initTabs();
		
		function initTabs() {
			var curStep = 0;
			var tabLinks = new Array();
			var nextLinks = new Array();
			var steps = new Array();
			var masthead = new Array();
			
			var tabs = document.getElementById('rr-nav').getElementsByTagName('li');
			var mastheadImages = document.getElementById('rr-masthead').getElementsByTagName('li');
			var nextBtns = document.getElementsByClassName('next');
			var stepContent = document.getElementsByClassName('step');
			var tabLength;
			
			
			for(var i = 0; i < mastheadImages.length; i++) {
				var step = stepContent[i];
				var mastheadImage = mastheadImages[i]
				steps.push(step);
				masthead.push(mastheadImage);
			}
			
			for(var i = 0; i < tabs.length; i++) {
				var tab = tabs[i];
				var btn = nextBtns[i];
				
				nextLinks.push(btn);
				tabLinks.push(tab);
				
				tabs[i].onclick = tabStep;
				nextBtns[i].onclick = nextStep;
				var tabLength = tabLinks.length;
			}
			
			function tabStep(z) {
				var idx = tabLinks.indexOf(this);
				curStep = idx +1;
				
				showStep();
				return false;
			}
			
			function nextStep() {
				var idx = nextLinks.indexOf(this);
				curStep = idx +1;
				
				showStep();
				return false;
			}
			
			function showStep() {
				for(var i = 0; i < masthead.length; i++) {
					if(i == curStep) {
						steps[curStep].className = 'step current';
						masthead[curStep].className = 'current';
					} else {
						steps[i].className = 'step';
						masthead[i].className = '';
					}
				}
				for(var i = 0; i < tabLinks.length; i++) {
					if(i == curStep-1) {
						if(tabLinks[curStep-1].className == ('last' || 'last current')) {
							tabLinks[curStep-1].className = 'last current';
						} else {
							tabLinks[curStep-1].className = 'current';
						}
					} else {
						tabLinks[i].className = '';
						tabLinks[tabLength-1].className = 'last';
					}
				}
				
			}
		}
	}