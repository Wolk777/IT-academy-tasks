function HashStorage () {
this.directory = {};
};	

HashStorage.prototype.addValue = function(key,value) {
		this.directory[key] = value;
	};

HashStorage.prototype.getValue = function(key) {
		return this.directory[key];
};

HashStorage.prototype.deleteValue = function(key){
		if (this.directory[key]) { 
			delete this.directory[key];
			return true;
		} else {
			return false;
		}
};

HashStorage.prototype.getKeys = function(){
		var keys = Object.keys(this.directory);
		return keys;
}   

var coctailsStorage = new HashStorage();

function addRecipe() {
	
	while(true){
		var name = prompt('Введите название коктейля', '');
		if (name == null || name.length > 20 || name.length < 2 ) {
			alert('Название коктейля введено не верно!');
		} else break;
	};

	name = name.toUpperCase();
	var alcoholContent = confirm("Коктейль содержит алкоголь?");
	if (alcoholContent) {
		var alcohol = '(алкогольный: да)' + '\n';
	} else{
		var alcohol = '(алкогольный: нет)' + '\n';
	};

	alert('Поочерёдно вводите ингредиенты коктейля и нажимайте \"ОК\"');

	var necessaryIngredients = 'Необходимые ингредиенты:'
	while(true){
		var ingredients = prompt('Введите необходимые ингредиенты и их количество', '');
		if (ingredients != null) {
			necessaryIngredients += '\n' + ingredients;
		} if(necessaryIngredients.length < 29){
			alert('Введите корректные данные');
			continue;
		}else{
			break;
		}
	};

	var recipe = 'Рецепт приготовления:';
	while(true){
		var a = prompt('Введите рецепт', '');
		if (a == null || a.length > 150 || a.length < 5 ) {
			alert('Введите корректный рецепт!')
		}else{
			recipe += a;
			break;
		}
	};

	value = 'Коктейль ' + '\"' + name + '\"' + alcohol + '\n' + necessaryIngredients + '\n' + recipe;
	
	coctailsStorage.addValue(name, value);

};

function getRecipe(){
	while(true){
		var name = prompt('Какой коктейль Вас интересует?', '');
		if (name == null || name.length > 20 || name.length < 2 ) {
			alert('Название коктейля введено не верно!');
		} else break;
	};	

	name = name.toUpperCase();
	if(coctailsStorage.getValue(name)){
	alert(coctailsStorage.getValue(name));
	} else alert('Данного коктейля у нас нет(');
};

function deleteRecipe(){
	while(true){
		var name = prompt('Какой коктейль удалить?', '');
		if (name == null || name.length > 20 || name.length < 2 ) {
			alert('Название коктейля введено не верно!');
		} else break;
	};

	name = name.toUpperCase();
	coctailsStorage.deleteValue(name)?coctailsStorage.deleteValue(name)
	:alert('Данного коктейля у нас нет(');
};

function getCoctails(){
	coctailsStorage.getKeys().length == 0 ? alert('Список коктейлей пуст!') : alert('У нас Вы найдёте следующие коктейли: ' + coctailsStorage.getKeys());
};

coctailsStorage.addValue('МАРГАРИТА','Коктейль "МАРГАРИТА" (алкогольный: да)\n\
Необходимые ингредиенты:\n\
Водка Finlandia 50мл\n\
Кофейный ликер 25мл\n\
Лед в кубиках 120 г\n\
рецепт приготовления:\n\
Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.\n\
');

coctailsStorage.addValue('ПЕЛИКАН','Коктейль "ПЕЛИКАН" (алкогольный: нет)\n\
Необходимые ингредиенты:\n\
Гренадин Monin 10мл\n\
Клубничный сироп Monin 10мл\n\
Персиковый сок 150мл\n\
Лимонный сок 15мл\n\
Банан 110г\n\
Клубника 50г\n\
Дробленый лед 60г\n\
Рецепт приготовления:\n\
Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.\n\
');