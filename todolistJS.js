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
		$(".items").show(); // открывает список "ul"
		var it = $("<li class='first-item'>");
		var item = $(".items");
	    var text_of_item = $("#first-input").val();
	    $(it).text(text_of_item); // передаёт текст с поля ввода в список "ul" в качестве одного элемента "li"
	    item.append(it);
	    $("#first-input").val(''); // очищает содержимое поля ввода
	}
