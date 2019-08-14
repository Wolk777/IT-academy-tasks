var a, b, c, x1, x2;

/*do {a = prompt('Введите значение а','')}
while (!isNumeric(a));

do {b = prompt('Введите значение b','')}
while (!isNumeric(b));

do {c = prompt('Введите значение c','')}
while (!isNumeric(c));*/

function quadraticEquation (a,b,c) {
	var d = b * b - 4 * a * c;

	if (d > 0) {
	    x1 = (-b + Math.sqrt(b*b-4*a*c)) / (2*a);
        x2 = (-b - Math.sqrt(b*b-4*a*c)) / (2*a);
        
        if (b >=0 ) {
            b = '+'+ b;
        }

        if (c >=0) {
            c = '+'+ c;
        }
        return ('уравнение ' + a + 'x^2' + b + 'x' + c + '=0 имеет корни x1=' + x1 +' и x2=' + x2);
    } else if (d === 0) {
	    x1 = -b / (2*a);

                if (b >=0 ) {
            b = '+'+ b;
        }

        if (c >=0) {
            c = '+'+ c;
        }
	    return ('уравнение ' + a + 'x^2' + b + 'x' + c + '=0 имеет один корень x=' + x1);
    } else {
                if (b >=0 ) {
            b = '+'+ b;
        }

        if (c >=0) {
            c = '+'+ c;
        }
    	return ('уравнение ' + a + 'x^2' + b + 'x' + c + '=0 не имеет вещественных корней');
    }
}

console.log(quadraticEquation(1, -8, 72)); 
console.log(quadraticEquation(1, 12, 36)); 
console.log(quadraticEquation(-2, -8, -72)); 
console.log(quadraticEquation()); 

function isNumeric (n){
return !isNaN( parseFloat(n) ) && isFinite(n);
}