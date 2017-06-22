$(document).ready(function(){
	$(".navbar-nav").children().addClass("col-sm-4");
	$(".navbar-header").css("width", "100%");
	$("h2").addClass("text-center");
	$("img").css("width","100%");
	$("img").css("border-radius","20px");
	$("img").css("img-responsive");	
	$(".item").addClass("image-container");
	$(".carousel-control").css("border-radius","20px");
	$(".thumbnail").parent().addClass("col-sm-3","col-xs-12");
	$("input,textarea").addClass("form-control");
	$("input,textarea").css("font-size","20px");
	$("input").prop("placeholder","Type here");
	$("textarea").prop("placeholder","Please leave a comment")
	$('[data-toggle="tooltip"]').tooltip();

})

