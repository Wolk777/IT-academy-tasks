function zero (str) {
	if (str) {
		return console.log('0' + str + '=' + calc('0' + str) );
	} else return alert('На ноль делить нельзя!');
}

function one (str) {
	if (str) {
		return console.log('1' + str + '=' + calc('1' + str) );
	} else return '1';
}

function two (str) {
	if (str) {
		return console.log('2' + str + '=' + calc('2' + str) );
	} else return '2';
}

function three (str) {
	if (str) {
		return console.log('3' + str + '=' + calc('3' + str) );
	} else return '3';
}

function four (str) {
	if (str) {
		return console.log('4' + str + '=' + calc('4' + str) );
	} else return '4';
}

function five (str) {
	if (str) {
		return console.log( '5' + str + '=' + calc('5' + str) );
	} else return '5';
}

function six (str) {
	if (str) {
		return console.log('6' + str + '=' + calc('6' + str) );
	} else return '6';
}

function seven (str) {
	if (str) {
		return console.log('7' + str + '=' + calc('7' + str) );
	} else return '7';
}

function eight (str) {
	if (str) {
		return console.log('8' + str + '=' + calc('8' + str) );
	} else return '8';
}

function nine (str) {
	if (str) {
		return console.log('9' + str + '=' + calc('9' + str) );
	} else return '9';
}

function plus (str) {
	return '+' + str;
}

function minus (str) {
	return '-' + str;
}

function times (str) {
	return '*' + str;
}

function dividedBy (str) {
	return '/' + str;
}

function calc (str) {
	console.log(str);
	var result = 0;

	switch (str[1]) {
	case '+':
		result = +str[0] + +str[2];
		break;
	case '-':
		result = +str[0] - +str[2];
		break;
	case '*':
		result = +str[0] * +str[2];
		break;
	case '/':
		result = +str[0] / +str[2];
		break;
	}
	return result;
}

seven(times(five()));
four(plus(nine()));
eight(minus(three()));
six(dividedBy(two()));