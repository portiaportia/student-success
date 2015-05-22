$(function(){
	$(".cat-list .details").hide();
	$(".cat-link").click(showDetails);

	//prevents highlighting
	document.addEventListener("touchstart", function(){}, true);
});

document.addEventListener("resume", onResume, false);

//reload events when you return from pause and on event screen
function onResume() {
    $("#event-list").html("");
	loadEvents();
}

//shows/hides details when the carrot is clicked
function showDetails()
{	
//toggle	
	var id = $(this).attr("href");
	var parent = $(this).parent();
	parent.siblings().find(".details").slideUp();
	parent.siblings().find(".carrot i").removeClass("fa fa-chevron-up");
	parent.siblings().find(".carrot i").addClass("fa fa-chevron-down");
	$(id).slideToggle();
	$(this).find(".carrot i").toggleClass("fa fa-chevron-down").toggleClass("fa fa-chevron-up");


	//move to top
	//var parent = $(this).parent();
	/*
	$('html, body').animate({
    	scrollTop: parent.offset().top -$(".main-header").height()},
        500);
	
	*/
	return false;
}