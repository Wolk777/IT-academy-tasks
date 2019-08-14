var calculate = function(operand1) {
	return function(operator) {
		return function(operand2) {
			function result() {
				if(isNumeric(operand1) && isNumeric(operand2)){
					
					if (operator == '-') {
						return operand1 - operand2;
					} else if (operator == '+') {
						return operand1 + operand2;
					} else if (operator == '/') {
						if (operand1 == 0 && operand2 == 0) {
							return alert('0 / 0 - ошибка!!!')
						};
						return operand1 / operand2;
					} else if (operator == '*') {
						return operand1 * operand2;
					} else ('оператор введён не верно!')
				} else {
					alert('Введите корректные данные!');
				}

			}

			console.log('Результат '+ operand1 + operator + operand2 + '=' + result());
		}
	}
}

function isNumeric(n) {
	return !isNaN(parseFloat(n) && isFinite(n))
}

calculate(1)('+')(2);
calculate(3)('*')(7);
calculate(15)('/')(3);




function pow(x) {
	return function POW(n) {
		
		if(!isNumeric(x) || !isNumeric(n)) {
			return alert('Некорректные данные!')
		};
		
		function recursion (x, n) {
			
			if (n === 1){
				return x;
			} else if (n === 0) {
				return 1;
			} else {
				return x * recursion(x, n-1);
			}
		};

		var result = recursion (x, n);
		console.log('Результат '+ x + '^' + n + '=' + result);
	}
}


pow(-2)(3);
pow(4)(2);
pow(16)(0);



















