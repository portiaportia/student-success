$(document).on("pageshow","#events",function(){ 
  loadEvents();
});
			
function loadEvents()
{	
	//if ($.mobile.activePage.is("#events"))return;
	if($("#event-list").html()!="")return;
	
	loader = $("<div id='loader'><img src='images/loading.gif' alt='loading...'></div>");	
	loader.appendTo("#event-list").hide();

	var today = new Date();
	var startDate = convertDate(today);
	var endDate = convertDate(today + 30);

	var url = "http://apps.winthrop.edu/API/CulturalEvents/events?startDate=" + startDate + "&endDate=" + endDate;
	url = "http://apps.winthrop.edu/API/CulturalEvents/events?startDate=4/10/2015&endDate=5/10/2015";
	
	//url = "js/events-json.js";
	
	$.ajax({
				type:"GET",
				dataType:"json",
				url:url,
				beforeSend:function(){loader.show();},
				complete:function(){loader.hide();},
				success:parseEvents
			});			
}

function convertDate(myDate)
{
	return (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
	
}

function parseEvents(data)
{
	$("#event-list").html("");
	
	$.each(data.events, showEvent);
}

		
function showEvent(i, item)
{
	var eventDetails = item.Title + " portia";
	//var dateDisplay = item.date + " " + item.time;
	//var eventDetails = "<h4>" + item.description + "</h4>";
	//eventDetails += "Location: " + item.location + "<br>";
	//eventDetails += "Time: " + dateDisplay + "";
	/*eventDetails += "<li>Duration: " + item.duration + "</li>";
	eventDetails += "<li>Contact: <a href='tel:+"  + item.contact + "'>" + item.contact + "</a></li>";
	eventDetails += "<li>Price: " + item.admission + "</li>";	
	eventDetails += "<li>GLI : " + item.gli + "</li></ul>";*/
	
	
	$("#event-list").append("<li class='event-details'>" + eventDetails + "</li>");
}
