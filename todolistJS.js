$(document).ready(function() {
	$(".items").hide();
	});




var input = $('#first-input');
input.keypress(function (e) {
	if (e.which == 13) { 
	if (input.val() == '') {
			return;
		} else {
		enter_pressed();
		add_mrk_all();
	}
	}
});







function enter_pressed() {

		$(".items").show(); // открывает список "ul"
		var it = $("<li class='first-item'>");
		var item = $(".items");
		var checkbox = $("<input class='toggle' type='checkbox'>");
		var label = $('<label class="todos">');
	    var text_of_item = $("#first-input").val();
	    var line = $("<div class='line'>"); 
	    $(label).text(text_of_item); // передаёт текст с поля ввода в список "ul" в качестве одного элемента "li"
	    line.append(checkbox);
	    line.append(label);
	    it.append(line);
	    item.append(it);
	    $("#first-input").val(''); // очищает содержимое поля ввода
	}


function add_mrk_all () {

		var item = $(".items");
		var mark_all_input = $("<input class='mark_all' type='checkbox'>");
		var mark_all_label = $('<label class="mark_label">');
		var mark_all_line = $("<div class='mark_line'>");
		mark_all_line.append(mark_all_input);
		mark_all_line.append(mark_all_label);
		item.prepend(mark_all_line);
		$(mark_all_label).text('Mark all as complete')


}


/*
*
*   add or remove "line-through" class to item, when checkbox checked or not
*
*/
$(document).on('change', 'input[type="checkbox"]', function () {               
	$(this).parent().toggleClass("line-through");
});