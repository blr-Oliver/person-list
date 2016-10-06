function createListItems(parent, n){
	parent.innerHTML = '';
	var item;
	for(var i = 0; i < n; ++i){
		item = document.createElement('li');
		item.textContent = (i + 1);
		parent.appendChild(item);
	}
}

function reverseChildren(parent){
	var count = parent.children.length;
	for(var i = 1; i < parent.children.length; ++i)
		parent.appendChild(parent.children[parent.children.length - i - 1]);
}

function reverseChildrenAlternate(parent){
	var count = parent.children.length;
	for(var i = 0; i < count - 1; ++i)
		parent.insertBefore(parent.lastElementChild, parent.children[i]);
}

function handleClick(){
	var string = document.getElementById('input').value;
	if(string){
		var newItem = document.createElement('li');
		newItem.textContent = string;
		document.getElementById('test').appendChild(newItem);
	}
}

function handleAdd$(){
	var string = $('#input').val();
	if(string){
		var li = $('<li/>');
		$('<span>').text(string).appendTo(li);
		$('<button>Удалить</button>').appendTo(li);
		li.appendTo($('#test'));
	}
}

function handleRemove(e){
	var target = $(e.target);
	if(target.is('button'))
		target.closest('li').remove();
}

function addPerson(){
	var surname = $('#surname').val();
	var name = $('#name').val();
	var image = $('#image').val();
	var clone = $('#template .item').clone();

	clone.find('.surname').text(surname);
	clone.find('.name').text(name);
	clone.find('img').attr('src', image);

	clone.appendTo($('#test'));
}