canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame   || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     ||  
		function( callback ){
			return window.setTimeout(callback, 1000 / 60);
		};
})();

window.cancelRequestAnimFrame = ( function() {
	return window.cancelAnimationFrame          ||
		window.webkitCancelRequestAnimationFrame||
		window.mozCancelRequestAnimationFrame   ||
		window.oCancelRequestAnimationFrame     ||
		window.msCancelRequestAnimationFrame    ||
		clearTimeout
} )();

var keys = [];
var timerId;
var racquet1 = new createRacquet(0);
var racquet2 = new createRacquet(590);
var flag = 1;
var ball = {
	x: 300,
	y: 200,
	r: 10,
	vx: Math.floor(Math.random()*12 - 6),
	vy: 4,
	c:'yellow',
	draw: function (){
		ctx.beginPath();
		ctx.fillStyle = this.c;
		ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
		ctx.fill();		
	}
}

function createRacquet(x){
	this.h = 100;
	this.w = 10;
	this.x = x;
	this.y = canvas.height/2 - this.h/2;
	this.c = 'red';
	this.score = 0;
	this.speed = 4;
	this.draw = function(){
		ctx.fillStyle = this.c;
		ctx.fillRect(this.x,this.y,this.w,this.h)
	}
}

function start(){
	if(flag){
	ball.x = canvas.width/2;
	ball.y = canvas.height/2;
	flag = 0;

	startAnimation();	
	}
}


function startAnimation(){
	timerId = requestAnimationFrame(startAnimation);
	uptade();
	draw();
}

function gameOver(){
	ctx.fillStyle = 'red';
	ctx.font = 'normal 30px Arial';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText('Goal!!!',270, 185);
	flag = 1;
	cancelAnimationFrame(timerId);
}

function draw(){
	
	ball.draw();
	racquet1.draw();
	racquet2.draw();
	scoreDraw();
}

function scoreDraw(){
	ctx.fillStyle = 'red';
	ctx.font = '48px Arial';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(`${racquet1.score} : ${racquet2.score}`,320, 155);
}

function uptade(){

	if(keys[87]) {racquet1.y -= racquet1.speed}
	if(keys[83]) {racquet1.y += racquet1.speed}
	if(keys[38]) {racquet2.y -= racquet2.speed}
	if(keys[40]) {racquet2.y += racquet2.speed}

	ball.x += ball.vx;
	ball.y += ball.vy;

	ball.c = 'rgb(' + 255 * Math.random() + ', ' + Math.floor(255 - 0.425 * ball.x) + ', ' + Math.floor(255 - 0.637 * ball.y) + ')';

    if ((ball.x + ball.r) > canvas.width){
    	ball.x = canvas.width - ball.r;
    	racquet1.score++;
    	gameOver();
    }else if((ball.x - ball.r) < 0){
    	ball.x = ball.r;
    	racquet2.score++;
    	gameOver();
    }

    if ((ball.y + ball.r) > canvas.height){
    	ball.vy = - ball.vy;
    	ball.y = canvas.height - ball.r;
    }else if((ball.y - ball.r) < 0){
    	ball.vy = - ball.vy;
    	ball.y = ball.r;
    }

    if (collision(ball, racquet1)) {
    	ball.x = racquet1.w + ball.r;
    	ball.vx = - ball.vx;
    }    

    if (collision(ball, racquet2)) {
    	ball.x = canvas.width - racquet2.w - ball.r;
    	ball.vx = - ball.vx;
    }

	ctx.clearRect(0, 0, 600, 400);
    updateRacquet(racquet1);
    updateRacquet(racquet2);

}

function collision(ball,racquet){
	if((ball.y - ball.r) < (racquet.y + racquet.h) && (ball.y + ball.r) > (racquet.y)){
		if((ball.x - ball.r) < (racquet.x + racquet.w) && racquet.x == 0){
			return true;
		}else if((ball.x + ball.r) > racquet.x && racquet.x > 0){
			return true; 
		}else{
			return false;
		}
	}
}

function updateRacquet(racquet){
	if (racquet.y > 300) {
        racquet.y = 300;
    } else if (racquet.y <= 0) {
        racquet.y = 0;
	}
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

