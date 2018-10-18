$(document).ready(function() {
	$(".items").hide();
})




var input = $('#first-input');
input.keypress(function (e) {
	if (e.which == 13) {
		enter_pressed();
	}
});



function enter_pressed() {
		$(".items").show();
		var it = $("<li class='first-item'>");
		var item = $(".items");
		item.append(it);
	}
