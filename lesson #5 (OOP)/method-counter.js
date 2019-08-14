function getCounter(a){
	
	this.sum = (a || 0);

	this.log = function(){
		console.log(this.sum);
		return this;
	};

	this.count = function(b){
		this.sum += b;
		return this;
	};

	this.reset = function(){
		this.sum = 0;
		return this;
	}
}

var counter = new getCounter(5);

counter.log() // 5
  .count(4)
  .log() // 9
  .count(3)
  .log() // 12
  .reset()
  .log() // 0
  .count(8)
  .log(); // 8
