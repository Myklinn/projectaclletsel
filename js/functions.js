$(document).ready(function() {
	$(".button-collapse").sideNav();
});

$(document).ready(function() {
	var slideIndex = 0;
	carousel();

	function carousel() {
		var i;
		var x = document.getElementsByClassName("myFeiten");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > x.length) {slideIndex = 1}
			x[slideIndex-1].style.display = "block";
		setTimeout(carousel, 5000);
	}
});

$(document).ready(function() {
	$('.collapsible').collapsible();
});
