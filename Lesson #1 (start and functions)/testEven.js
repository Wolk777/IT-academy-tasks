var Namber = prompt('Введите число', '');
var str = '';

for (var i = 0; i < Namber.length; i++) {
	
	if (Namber[i]%2 == 0 && Namber[i+1]%2 == 0) {
		str = str + Namber[i] + '-';
	} else str = str +Namber[i];
	
}

alert(str);




