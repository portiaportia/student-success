$(document).on("pageshow","#events",function(){ 
  loadEvents();
});
			
function loadEvents()
{	
	loader = $("<div id='loader'><img src='images/loading.gif' alt='loading...'></div>");	
	loader.appendTo("#event-list").hide();

	url = "http://portiaplante.com/student-success/events.php";
	
	$.ajax({
				type:"GET",
				dataType:"json",
				url:url,
				beforeSend:function(){loader.show();},
				complete:function(){loader.hide();},
				success:parseEvents
			});			
}

function parseEvents(data)
{
	$("#event-list").html("");
	$.each(data.events, showEvent);
}

		
function showEvent(i, item)
{
	var dateDisplay = item.date + " " + item.time;
	var eventDetails = "<h4>" + item.description + "</h4>";
	eventDetails += "<ul><li>Location: " + item.location + "</li>";
	eventDetails += "<li>Time: " + dateDisplay + "</li>";
	eventDetails += "<li>Duration: " + item.duration + "</li>";
	eventDetails += "<li>Contact: <a href='tel:+"  + item.contact + "'>" + item.contact + "</a></li>";
	eventDetails += "<li>Price: " + item.admission + "</li>";	
	eventDetails += "<li>GLI : " + item.gli + "</li></ul>";
	
	
	$("#event-list").append("<li class='event-details'>" + eventDetails + "</li>");
}
