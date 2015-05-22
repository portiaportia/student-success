$(document).on("pageshow","#mymoney",function(){ 
  loadVideos();
});

function loadVideos()
{
	$("#video").load("videos.html");
}