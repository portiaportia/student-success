$(function(){
	$(".cat-list .details").hide();
	$(".cat-link").click(showDetails);

	//prevents highlighting
	document.addEventListener("touchstart", function(){}, true);
});

document.addEventListener("resume", onResume, false);


function onResume() {
    // Now safe to use device APIs
    $("#event-list").html("");
	loadEvents();
}



//shows/hides details when the carrot is clicked
function showDetails()
{	
	//move to top
	var parent = $(this).parent();
	
	$('html, body').animate({
    	scrollTop: parent.offset().top -80},
        500);
	
	//toggle	
	var id = $(this).attr("href");
	$(id).slideToggle();
	$(this).find("#carrot").toggleClass("fa fa-chevron-down").toggleClass("fa fa-chevron-up");

	return false;
}