$(document).on("pageshow","#mymoney",function(){ 
  loadVideos();
});

function loadVideos()
{
	var devicePlatform = device.platform;
	
	//make sure you don't need ()
	if(devicePlatform.toLowerCase() == "android")
	{
		$("#video").load("videos-android.html");
	}
	else
	{
		$("#video").load("videos-android.html");
	}
}