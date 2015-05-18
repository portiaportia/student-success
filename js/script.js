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
	 
	$('#content').animate({
    	top: - parent.offset().top +160},
        500);

	return false;
}