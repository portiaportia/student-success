$(function(){
	$(".cat-list .details").hide();
	$(".cat-list a").click(showDetails);

	//prevents highlighting
	document.addEventListener("touchstart", function(){}, true);
});


//shows/hides details when the carrot is clicked
function showDetails()
{	
	var id = $(this).attr("href");
	$(id).slideToggle();
	$(this).find("#carrot").toggleClass("fa fa-chevron-down").toggleClass("fa fa-chevron-up");

	//scrolls the content to the top
	var parent = $(this).parent();
	 
	$('html, body').animate({
    	scrollTop: parent.offset().top -80},
        500);
		
		alert(parent.offset().top);

	return false;
}