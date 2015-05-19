$(function(){
	$(".cat-list .details").hide();
	$(".cat-link").click(showDetails);

	//prevents highlighting
	document.addEventListener("touchstart", function(){}, true);
});

document.addEventListener("pause", onPause, false);

function onPause() {
    $("#event-list").html("");
	alert("bye");
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