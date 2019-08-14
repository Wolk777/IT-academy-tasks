var surname = prompt('Введите фамилию' , '');
console.log(surname);
console.log(typeof surname);
do surname = prompt('Введите фамилию корректно' , '');
while (!surname || surname.length <= 2 || surname.length > 15);

do var name = prompt('Введите имя' , '');
while (!name || name.length <= 2 || name.length > 15);

do var patronymic = prompt('Введите отчество' , '');
while (!patronymic || patronymic.length <= 2 || patronymic.length > 15);

while(true) {
	var age = +prompt('Введите Ваш возраст' , '');
    if ( age > 5 && isNumeric(age) && age <= 100) break;
	alert('Введите корректный возраст');
}
var period;
(age >= 60) ? (period = 'Вы уже пенсионер') : 
(age > 18) ? (period = 'Вы уже совершеннолетний') :
(period = 'Вы ещё юны');

if (age>=60) { old = 'да' }
	else { old = 'нет' }

var sex = confirm('Ваш пол мужской?');
if(sex) {sex = 'мужской'}
else { sex = 'женский'}

function isNumeric(age) {
return !isNaN(parseFloat(age)) && isFinite(age);
}

alert('Ваше ФИО: ' + surname + ' ' + name + ' ' + patronymic + '\n\
	Ваш возраст в годах: ' + age + '\n\
	Ваш возраст в днях: ' + 365*age + '\n\
	' + period + '\n\
	Ваш пол: ' + sex + '\n\
	Вы на пенсии: ' + old);

function isNumeric (n) {
return !isNaN( parseFloat(n) ) && isFinite(n);
}
