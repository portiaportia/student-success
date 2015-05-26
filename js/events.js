$(document).on("pageshow","#events",function(){ 
  loadEvents();
});
			
function loadEvents()
{	
	if (!$.mobile.activePage.is("#events"))return;
	if($("#event-list").html()!="")return;
	
	loader = $("<div id='loader'><img src='images/loading.gif' alt='loading...'></div>");	
	loader.appendTo("#event-list");
	var left = $(".page").width()/2-25;
	loader.css("margin-left",left);
	
	var today = new Date();
	var startDate = convertDate(today);
	var endDate = convertDate(today + 30);

	var url = "http://apps.winthrop.edu/API/CulturalEvents/events?startDate=" + startDate + "&endDate=" + endDate;
	url = "http://apps.winthrop.edu/API/CulturalEvents/events?startDate=4/10/2015&endDate=5/10/2015";
	//url = "js/events-none.js";
	
	$.ajax({
				type:"GET",
				dataType:"json",
				url:url,
				beforeSend:function(){loader.removeClass("hide");},
				complete:function(){loader.addClass("hide");},
				success:parseEvents,
				timeout: showError,
				error: showError
			});			
}

function convertDate(myDate)
{
	return (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
	
}

function parseEvents(data)
{
	$("#event-list").html("");
	
	if(data.events.length == 0) showNoEvents();
	
	$.each(data.events, showEvent);
}

function showNoEvents()
{
	$("#event-list").append("<li><div class='event-details'>Sorry, there are no upcoming events listed. Please try again later.</div></li>");
}

function showError()
{
	$("#event-list").append("<li><div class='event-details'>Sorry, events could not be loaded at this time. Please try again later.</div></li>");
}
		
function showEvent(i, item)
{
	var stringDate = item.EventDate;
	var year = stringDate.substring(0,stringDate.indexOf("-"));
	stringDate = stringDate.substring(stringDate.indexOf("-")+1);
	var month = stringDate.substring(0, stringDate.indexOf("-"));
	stringDate = stringDate.substring(stringDate.indexOf("-")+1);
	var day = stringDate.substring(0, stringDate.indexOf("T"));	
	
	eventDetails += dateDisplay;
	var eventDetails = "<h4>" + item.Title + "</h4>";
	//eventDetails += "<ul><li>" + item.Description + "</li>";
	eventDetails += "<ul><li><strong>Time: </strong>" + month + "/" + day + "/" + year;
	eventDetails += " (" + item.StartTime + " - " + item.EndTime + ")</li>";
	
	eventDetails += "<li><strong>Location: </strong>" + item.Location + "</li>";
	eventDetails += "<li><strong>Contact:</strong> <a href='tel:+" + item.ContactPersonPhoneNumber + "'>" + item.ContactPersonPhoneNumber +"</a></li>";

	if(item.PriceDescription != "N/A")
	{
		eventDetails += "<li><strong>Price:</strong> " + item.PriceDescription + "</li>";
	}
	else
	{
		eventDetails += "<li><strong>Price:</strong> Free</li>";
	}
	
	if(item.IsGLI) {
		eventDetails +=	"<li>GLI Event</li>";
	}
	
	eventDetails += "</ul>";
	dateDisplay += "</ul>";

	/*eventDetails += "<li>Duration: " + item.duration + "</li>";
	eventDetails += "<li>Contact: <a href='tel:+"  + item.contact + "'>" + item.contact + "</a></li>";
	eventDetails += "<li>Price: " + item.admission + "</li>";	
	eventDetails += "<li>GLI : " + item.gli + "</li></ul>";*/

	$("#event-list").append("<li><div class='event-details'>" + eventDetails + "</div></li>");
	
	//resize the page to account for header now that events are loaded
	$("#events").height($("#events").height() +80);
}
