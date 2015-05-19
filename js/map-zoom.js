$(document).on("pageshow","#map",function(){ // going to map
  loadMap();
});
			
	function loadMap()
	{		
			var width = $(window).width();

			var height = $(window).height() - 75;
			
			//enable smoothzoom for pinch zoom
			$('#campus-map').smoothZoom({
				width: width,
				height: height,
				pan_BUTTONS_SHOW: "NO",
				pan_LIMIT_BOUNDARY: "NO",
				zoom_BUTTONS_SHOW: false,
				button_SIZE: 24,
				button_ALIGN: "top right",	
				zoom_MAX: 800,
				border_TRANSPARENCY: 20,
				container: 'zoom_container',
				
				/******************************************
				Enable Responsive settings below if needed.
				Max width and height values are optional.
				******************************************/
				responsive: false,
				responsive_maintain_ratio: true,
				max_WIDTH: '',
				max_HEIGHT: ''
			});
			
			$("#campus-map").removeClass("hide-map");
			
			$('.default_popup').popup();	//make the links popup
	}

