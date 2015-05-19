$(document).on("pageshow","#events",function(){ // going to map
  loadEvents();
});
			
function loadEvents()
{	
	url = "http://portiaplante.com/student-success/events.php";
	
	$.ajax({
				type:"GET",
				dataType:"json",
				url:url,
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
	eventDetails += "<li>Price: " + item.admission + "</li>";
	eventDetails += "<li>Duration: " + item.duration + "</li>";
	eventDetails += "<li>GLI: " + item.gli + "</li>";
	eventDetails += "<li>Contact: <a href='tel:+"  + item.contact + "'>" + item.contact + "</a></li></ul>";
	
	$("#event-list").append("<li><div class='event-date'>" + dateDisplay + "</div><div class='event-details'>" + eventDetails + "</div></li>");
}
