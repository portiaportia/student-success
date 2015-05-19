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
	$.each(data.events, showEvent);
}

		
function showEvent(i, item)
{
	
	$("<li></li>").html(
		 item.date + ": " +
		item.time 
	).appendTo("#event-list");
}
