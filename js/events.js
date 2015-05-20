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
	var eventDate = new Date(item.EventDate);
	var dateDisplay = "<ul><li>" + convertDate(eventDate) + "</li>";
	dateDisplay+= "<li>" + item.StartTime + " - " + item.EndTime + "</li>";
	
	eventDetails += dateDisplay;
	var eventDetails = "<h4>" + item.Title + "</h4>";
	eventDetails += "<ul><li>" + item.Description + "</li>";
	eventDetails += "<li><strong>Location: </strong>" + item.Location + "</li>";
	eventDetails += "<li><strong>Contact:</strong> " + item.ContactPersonName + " <a href='tel:+" + item.ContactPersonPhoneNumber + "'>" + item.ContactPersonPhoneNumber +"</a></li>";

	if(item.IsGLI) {
		dateDisplay +=	"<li>GLI Event</li>";
	}
	
	if(item.PriceDescription != "N/A")
	{
		eventDetails += "<li><strong>Price:</strong> " + item.PriceDescription + "</li>";
	}
	else
	{
		eventDetails += "<li><strong>Price:</strong> free</li>";
	}
	
	eventDetails += "</ul>";
	dateDisplay += "</ul>";

	/*eventDetails += "<li>Duration: " + item.duration + "</li>";
	eventDetails += "<li>Contact: <a href='tel:+"  + item.contact + "'>" + item.contact + "</a></li>";
	eventDetails += "<li>Price: " + item.admission + "</li>";	
	eventDetails += "<li>GLI : " + item.gli + "</li></ul>";*/
	
	
	$("#event-list").append("<li><div class='event-date'>" + dateDisplay + "</div><div class='event-details'>" + eventDetails + "</div></li>");
}
