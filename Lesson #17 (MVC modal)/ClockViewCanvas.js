;function ClockViewCanvas (){
	let myModel = null; // с какой моделью работаем
	let myField = null; // в каком поле
	let canvas = null;	
	let ctx = null;	
	let bufferCanvas = null;	
	let bufferCanvasCtx = null;	

	this.start = function(model,field) {
	    myModel = model;
	    myField = field;

		canvas = null;
		ctx = null;
		bufferCanvas = null;
		bufferCanvasCtx =  null

		canvas = myField.querySelector('#clock');
		ctx = canvas.getContext('2d');

		bufferCanvas = document.createElement('canvas');
		bufferCanvasCtx = bufferCanvas.getContext('2d');
		bufferCanvasCtx.canvas.width = ctx.canvas.width;
		bufferCanvasCtx.canvas.height = ctx.canvas.height;

		bufferCanvasCtx.translate(250,250);
		ctx.translate(250,250);

		this.drawClock();

	};

	this.drawClock = function(){
		let grad;
		let angle;
		let radius = 200;

	    ctx.clearRect(-250, -250, ctx.canvas.width, ctx.canvas.height);
		bufferCanvasCtx.beginPath();
		bufferCanvasCtx.arc(0,0,radius,0,2 * Math.PI);
		bufferCanvasCtx.fillStyle = '#ffffcc';
		bufferCanvasCtx.fill();
		grad = bufferCanvasCtx.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
		grad.addColorStop(0, '#ff9999');
		grad.addColorStop(0.5, '#ffff66');
		grad.addColorStop(1, '#ff9999');
		bufferCanvasCtx.strokeStyle = grad;
		bufferCanvasCtx.lineWidth = radius * 0.1;
		bufferCanvasCtx.stroke();

		bufferCanvasCtx.font = 25 + "px arial";
	    bufferCanvasCtx.textBaseline = "middle";
	    bufferCanvasCtx.textAlign = "center";
	    bufferCanvasCtx.fillStyle = 'red';
	    for (var i = 1; i <= 12; i++) {
	    	bufferCanvasCtx.save();
	    	angle =  30 * Math.PI/180 * i;
		    bufferCanvasCtx.rotate(angle);
		    bufferCanvasCtx.translate(0, - 160);
		    bufferCanvasCtx.rotate(-angle);
		    bufferCanvasCtx.fillText(i.toString(), 0, 0);
		    bufferCanvasCtx.lineWidth = 2;
		    bufferCanvasCtx.beginPath();
		    bufferCanvasCtx.arc(0,0,20,0,2 * Math.PI * 2);
		    bufferCanvasCtx.stroke();
		    bufferCanvasCtx.restore();		    	
	    };
	 	ctx.drawImage(bufferCanvas, -250, -250, bufferCanvas.width, bufferCanvas.height);
		this.drawHand(ctx, 0, 130, 8, 'black');
	    this.drawHand(ctx, 0, 165, 4, 'black');
	    this.drawHand(ctx, 0, 165, 4, 'red');
	};

	this.update = function(a, b, c, d) {
		a = a * Math.PI/180;
		b = b * Math.PI/180;
		c = c * Math.PI/180;

		ctx.clearRect(-250, -250, ctx.canvas.width, ctx.canvas.height);
		ctx.drawImage(bufferCanvas, -250, -250, bufferCanvas.width, bufferCanvas.height);
		
		ctx.fillStyle = '#ff9999';
		ctx.font = 'normal 30px Arial';

	   	ctx.fillText(d,-55, -80);

	    this.drawHand(ctx, a, 130, 8, 'black');
	    this.drawHand(ctx, b, 165, 4, 'black');
	    this.drawHand(ctx, c, 165, 4, 'red');
    };

	this.drawHand =  function(ctx, pos, length, width, color){
		ctx.beginPath();
	    ctx.lineWidth = width;
	    ctx.strokeStyle = color;
	    ctx.moveTo(0,0);
	    ctx.rotate(pos);
	    ctx.lineTo(0, -length);
	    ctx.stroke();
	    ctx.rotate(-pos);

	   	ctx.beginPath();
	    ctx.arc(0,0,10,0,2 * Math.PI);
		ctx.fillStyle = 'yellow';
		ctx.fill()
	};
};