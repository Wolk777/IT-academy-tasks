function ClockViewSVG(){
	let myModel = null; // с какой моделью работаем
	let myField = null;	// в каком поле
	let clockSvg = null;	
	let textSVG = null;	
	let textClock = null;	
	let hour = null;	
	let minute = null;	
	let seconds = null;	
	
	this.start = function(model,field) {
        myModel = model;
        myField = field;

		clockSvg = myField.querySelector('#clockSvg');
		textSVG = myField.querySelector('#textSVG');
		textClock = myField.querySelector('#textClock');
		hour = clockSvg.querySelector('#hour');
		minute = clockSvg.querySelector('#minute');
		seconds = clockSvg.querySelector('#seconds');
		let angle = 30;
		let radius = 160;

		for (let i = 0; i <= 11; i++) {
	        let clockCenterX=300+radius*Math.sin(angle/180*Math.PI);
	        let clockCenterY=300-radius*Math.cos(angle/180*Math.PI);

			let mark = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			let numbers = document.createElementNS("http://www.w3.org/2000/svg", "text");
			mark.setAttribute('cx',300);
			mark.setAttribute('cy',140);
			mark.setAttribute('r',20);
			mark.setAttribute('class', "marks");
			mark.setAttribute('transform', `rotate( ${angle} )`);
			numbers.setAttribute('x', clockCenterX);
			numbers.setAttribute('y', clockCenterY+5);
			numbers.setAttribute('class', "clockNumbers");
			
			textSVG.before(mark);
			textSVG.before(numbers);

			numbers.textContent=i + 1;
			
			angle += 30;	
		};
	};

	this.update = function(a, b, c, d) {
		hour.style.transform = "rotate(" + a + "deg)";
		minute.style.transform = "rotate(" + b + "deg)";
		seconds.style.transform = "rotate(" + c + "deg)";
		textClock.innerHTML = d;
    }	
};	
