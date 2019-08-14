	function ClockViewDOM(){
		let myModel = null; // с какой моделью работаем
    	let myField = null; // внутри какого элемента DOM наша вёрстка
		let clock = null;
		let watch = null;
		let divHour = null;			
		let divMinute = null;;
		let divSecond = null;;

	    this.start = function(model,field) {
	        myModel = model;
	        myField = field;

	        // ищем и запоминаем интересные нам элементы DOM
	        clock = myField.querySelector('div.clock');
			watch = myField.querySelector('div.watch');
			divHour = myField.querySelector('div.hour');
			divMinute = myField.querySelector('div.minute');
			divSecond = myField.querySelector('div.second');
			let radius = 170;
			let angle = 30/180*Math.PI;
			let centerX = 200;
			let centerY = 200;

			for (var i = 1; i <= 12; i++) {

				var numbers = document.createElement('div');
				numbers.className = 'numbers';
				numbers.innerHTML = "<span class=number>" + i + "</span>";
				clock.appendChild(numbers);		

				var numbersX = centerX+radius*Math.sin(angle);
				var numbersY = centerY-radius*Math.cos(angle);

			    numbers.style.left = Math.round(numbersX-numbers.offsetWidth/2)+"px";
			    numbers.style.top = Math.round(numbersY-numbers.offsetHeight/2)+"px";

				angle +=  30/180*Math.PI;	
			};
		};

		this.update = function(a, b, c, d) {
			divHour.style.transform = "rotate(" + a + "deg)";
			divMinute.style.transform = "rotate(" + b + "deg)";
			divSecond.style.transform = "rotate(" + c + "deg)";
			watch.innerHTML = d;
        };
	};