;function Clock(){
		let myView = null;
		let requestId = null;

		this.start = function(view){
			myView = view;
		};

		this.runClock = function (){
			requestId = requestAnimationFrame(run);
			let self = this;

			// let now = new Date;
			// // let hr = now.getHours();
			// // let min = now.getMinutes();
			// // let sec = now.getSeconds();
			// // let ms = now.getMilliseconds();
			function run(){
				let now = new Date;
				let hr = now.getHours();
				let min = now.getMinutes();
				let sec = now.getSeconds();
				let ms = now.getMilliseconds();

				let hourRotation = 30 * (hr % 12) + 0.5*min;
				let minRotation = 6 * min + 0.1*sec;
				let secRotation = 6 * sec + 0.006*ms;
				
				if (min < 10) {min = '0' + min};
				if (sec < 10) {sec = '0' + sec};

				let time = `${hr}:${min}:${sec}`;			

				self.update(hourRotation,minRotation,secRotation,time);
				requestId = requestAnimationFrame(run);

			}
		};

		this.startAnimation = function(){
			this.runClock();
		};

		this.stopAnimation = function(){
			cancelAnimationFrame(requestId);
		};

		this.update = function(a,b,c,d){
			myView.update(a,b,c,d);
		};
	};