	function ClockControllerButtons (){
		let myModel = null;
		let myField = null;
		let flag = 0;

		this.start = function(model, field){
			myModel = model;
			myField = field;

			let btnStart = myField.querySelector('input[value="Старт"]');
			let btnStop = myField.querySelector('input[value="Стоп"]');

  			btnStart.addEventListener('click', this.go);
			btnStop.addEventListener('click', this.stop);
			this.go();
		};

		this.go = function(){
			if (!flag) {
				myModel.startAnimation();
				flag = 1;				
			};
		};

		this.stop = function(){
			if(flag){
				myModel.stopAnimation();	
				flag = 0;			
			};
		};
	}