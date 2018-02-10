$(document).ready(function() {
            
			/*
			* Plugin intialization
			*/
	    	$('#pagepiling').pagepiling({
	    		menu: '#menu',
	    		 direction: 'horizontal',
				 easing: 'swing',
	    		anchors: ['home', 'about', 'inter-IIT', 'gc','fests','societies','gallery'],
			    sectionsColor: ['black', '#ee005a', '#2C3E50', '#39C','#ee005a', '#2C3E50', '1.png'],
			    navigation: {
			    	'position': 'right',
			   		'tooltips': ['Home', 'About', 'inter-IIT', 'General Championships','Fests','Societies','Gallery']
			   	},
			    afterRender: function(){
			    	$('#pp-nav').addClass('custom');
			    },
			    afterLoad: function(anchorLink, index){
			    	if(index>1){
			    		$('#pp-nav').removeClass('custom');
			    	}else{
			    		$('#pp-nav').addClass('custom');
			    	}
			    }
			});
            $(".typewriter p").hide();
			setInterval(function(){
				$(".typewriter p").show();

			 }, 5000);

			$(document).keydown(function(event) {
	    	    if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        
		event.preventDefault();
		// 107 Num Key  +
		//109 Num Key  -
		//173 Min Key  hyphen/underscor Hey
		// 61 Plus key  +/=
	     }
	});

	$(window).bind('mousewheel DOMMouseScroll', function (event) {
	       if (event.ctrlKey == true) {
          
		   event.preventDefault();
	       }
	});
			

	    });