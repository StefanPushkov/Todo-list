$(document).ready(function() {
/*	var els = JSON.parse(localStorage.getItem("thingsTODO"));
	for (i in els)
		enter_pressed(els[i]);
*/
	$(".items").hide();
	$('footer').hide();
	});




var input = $('#first-input');
input.keypress(function (e) {
	if (e.which == 13) { 
	if (input.val() == '') {
			return;
		} else {
		enter_pressed();

	}
	}
});

$(".first-input").one("click", create_mrk_all());
$(".first-input").one("click", add_counter());




/*
*
* Add "Done" button when appears first item
*
*/



/*var foo = false;
$("#first-input").on("keypress", function(e) {
	if (e.keyCode == 13 && foo == false) {
		done_button();
		foo = true;
	} else {
		return;
	}
});
*/




function enter_pressed() {

		$(".items").show(); // открывает список "ul"
		var it = $("<li class='first-item'>");
		var item = $(".items");
		var checkbox = $("<input class='toggle' type='checkbox' name='checkbox'>");
		var label = $('<label class="todos">');
	    var text_of_item = $("#first-input").val();
	    var line = $("<div class='line'>"); 
	    $(label).text(text_of_item); // передаёт текст с поля ввода в список "ul" в качестве одного элемента "li"
	    line.append(checkbox);
	    line.append(label);
	    it.append(line);
	    item.append(it);
	    $("#first-input").val(''); // очищает содержимое поля ввода
	    review();
	    $('footer').show();
	    $('.mark_line').show();
	}


function create_mrk_all (e) {

		var item = $(".items");
		var mark_all_input = $("<input class='mark_all' type='checkbox'>");
		var mark_all_label = $('<label class="mark_label">');
		var mark_all_line = $("<div class='mark_line'>");
		mark_all_line.append(mark_all_input);
		mark_all_line.append(mark_all_label);
		item.prepend(mark_all_line);
		$(mark_all_label).text('Mark all as complete');
		
}


/*
*
*   Add or remove "line-through" class to item, when checkbox checked or not
*
*/

$(document).on('change', 'input[type="checkbox"]', function () { 
	$(this).parent().toggleClass("line-through");
	add_counter();
	review();
	add_or_remove_done_button();
});




$(".mark_all").on('change', function () {
	var t = $(this).prop('checked'); // take a boolean value of button "mark all"
	$("input[type='checkbox']").each(function (i) {
		$(this).prop("checked", t); // присваевается булевое значение кнопки "mark all" к каждому чекбоксу пунктов 
		$(this).parent().toggleClass("line-through");
	});
	$("input[type='checkbox']:checked").parent().addClass("line-through");
	review();
});


function create_button() {
	var done_div = $("<div id='done'>")
	var footer = $(".footer");
	var done_button = $("<button id='d'>Done</button>");
	done_div.append(done_button);
	footer.append(done_div);
}


function create_counter() {
	var count_div = $("<div id='counter'>");
	var footer = $(".footer");
	var counter = $("<p id='counter_2'>");
	var counter_text = $("input[name='checkbox']:checked").length;
	$(counter).text(counter_text);
	var str = " items left"
	var counter_text = $.parseHTML( str );
	count_div.append(counter);
	count_div.append(counter_text);
	footer.append(count_div);
}
/*
*
* Review function checks if ".toggle" checkbox was clicked when ".mark_all" checkbox checked  
*
*/

function review() {
	 difference = $("input[name='checkbox']").length - $("input[name='checkbox']:checked").length;
	if(difference == 0 && $("input[name='checkbox']").length > 0) {
		$(".mark_all").prop("checked", true);
	} else {
		$('.mark_all').prop("checked", false);
	}

	 $('#counter_2').text(difference);
}

function add_done_button () {
	console.log($("#d").length);   //
	if(!$('#d').length) {		   // Проверка наличия кнопки "Done" на странице (если нет, то кнопка создаётся)
		create_button();		   //
	}
}

function add_or_remove_done_button () {							// Проврка на наличие отмеченных чекбоксов
	if ($("input[name='checkbox']:checked").length > 0) {		// (если есть отмеченные, то вызывается функция,
		add_done_button();										//  добавляющая кнопку, если нет отмеченных, то кнопка "done" удаляется)
	} else {
		$("#d").parent().remove();

	}
}


function add_counter () {
	console.log($("#counter").length);
	if(!$("#counter").length) {
		create_counter();
	}
}

function add_mrk_all () {
	console.log($(".mark_line").length);
	if(!$('.mark_line').length) {
		create_mrk_all();
	}
}

$(document).on('click', "button", function () {
	$('input[name="checkbox"]:checked').each(function(i) {
		$(this).parent().parent().remove();
	});
		add_or_remove_done_button();

	after_done();
});


$(document).on('dblclick', '.todos', function() {
	$(this).attr("contenteditable", true);
});

/*$(document).dblclick(function () {
	$('.todos').each(function(i) {
		$(this).attr('contenteditable', true);
	});
});
*/

/*function save () {
	var els = $(".todos").toArray();
	for (i in els) {
	 els[i] = els[i].text();
	}
	localStorage.setItem("thingsTODO", JSON.stringify(els));
}*/



/*
*
*
*
* функция, отвечающая за удаление footer (кнопки "done", счётчка событий)
*/

function after_done () {
	console.log($("input[name='checkbox']").length);
	if(!$("input[name='checkbox']").length) {
		
		$('.mark_line').hide();
		$('.footer').hide();
	}
	/*localStorage.removeItem("thingsTODO");*/
}