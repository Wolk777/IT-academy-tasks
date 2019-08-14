var arr = ['начинаем', 'практиковаться', 'по', 'JavaScript'];

function numberedList (arr) {
	var ol = document.createElement('ol');
	ol.id = 'olList';

	arr.forEach(function(item){
	var li = document.createElement('li');
	li.innerHTML = '<span>' + item + '</span>';
	ol.appendChild(li);
	});

	document.body.appendChild(ol);
};

numberedList(arr);

function addLi () {
	var value = document.getElementById('inputs').value;
	if (value === '') return alert('Строка пуста!');
	li = document.createElement('li');
	li.innerHTML = '<span>' + value + '</span>';
	olList.appendChild(li);
};

function deleteLi () {
	var del = olList.getElementsByTagName('li');
	console.log(del);
	if (del.length == 0) {
		//document.getElementById('buttonDel').hidden =  true;
		console.dir(buttonDel);
		buttonDel.hidden = true;
		return;
		//alert('Список пуст!');
		//buttonDel.hidden = true;
	};
	//console.dir(buttonDel);
	olList.removeChild(del[del.length - 1]);
};

olList.setAttribute("onclick", "func(event)");

function func(event){
	
	var a = event.target;
	if (a.tagName == 'SPAN') {
		var valueSpan = a.innerHTML;
		/*var inputText = document.createElement('input');
		inputText.setAttribute('type', 'text');
		inputText.setAttribute('value', valueSpan);
		a.parentChild.appendChild(inputText);
		a.hidden = true;*/
		a.innerHTML = '<input type="text" id = "inputText" class="input" value = ' + valueSpan +'>'
		console.dir(a);
		console.dir(inputText);

		inputText.focus();
		inputText.onblur = function(){
		a.innerHTML = this.value;
		};

	};
};



