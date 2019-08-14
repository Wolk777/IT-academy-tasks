function currentSums(numbers){

	while (numbers.length == 0) {
		return alert('Массив пуст! Введите массив заново!'); //Проверка на пустой массив
	}

	var arr = [numbers[0]];
	var sum = numbers[0];

	var rezult = numbers.reduce(function(sum, current){     //Поэтапное занесение в массив результата сложения
		sum = sum + current;                                // элемента массива и суммы предыдущих элементов массива,
		arr.push(sum);                                      // в типе "number" 
		return sum;
	});

	var arr1 = [numbers[0]];

	var rezult = numbers.reduce(function(sum, current){     // Поэтапное занесение в массив результата сложения  
    	sum = '' + sum + '+' + current;                     // элемента массива и суммы предыдущих элементов массива,
		arr1.push(sum);                                     // в типе "string"
		return sum ;
	});

	return console.log('[' + arr1 + '] = [' + arr + ']');
};


function newArray (){

	if(str.length == 0) {                                     // Проверка на пустую строку
		return alert('Пустая строка! Введите строку заново!');  
	};

	var arr = str.split(' ');                                 //Создаём новый массив из строки, разбитой по разбелителю " "
	
	var Array = arr.map(function(element){                    //Создаём массив из первых букв названий элементов массива 'arr'
		return element.charAt(0);
	});

	return Array;
}


function changeArray (arr){

	if(arr.length == 0) {                                     //Проверка на пустой массив
		return ('Массив пуст! Введите массив заново!');
	};

	if(arr.length % 2 == 0){                                  //Проверка количества элементов массива на чётность
		var arr1 = arr.slice(0, arr.length/2);                //Создаём новый массив из первой половины исходного массива
		var arr2 = arr.slice(arr.length / 2 );                //Создаём новый массив из второй половины исходного массива
		return (arr2.concat(arr1));                           //Создаём новый массив меняя первую и вторую половины массива местами
	} else {
		var arr1 = arr.slice(0, (arr.length - 1) / 2);        //Создаём новый массив из первой половины исходного массива
		var arr2 = arr.slice((arr.length + 1) / 2 );          //Создаём новый массив из второй половины исходного массива
		return (arr2.concat(arr[(arr.length - 1) /2 ], arr1));//Создаём новый массив меняя первую и вторую половины массива местами
	};                                                        //Центральный эллемент массива при этом остаётся на своём месте
	
}