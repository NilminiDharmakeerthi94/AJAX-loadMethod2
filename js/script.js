$(document).ready(function(){
	// loading the content  of the home page
	$('main').load('content.php #home');

	//checking id of link clicked
	$('a').click(function(){
var clickedLink = $(this).attr('id');
$('main').html('<div class="loading"><img src="img/loading.gif" alt="loading"></div>');
$('main').load('content.php #' +  clickedLink);
	});
});