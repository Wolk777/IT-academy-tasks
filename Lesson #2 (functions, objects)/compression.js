function compress(str) {
	var pos = 0;
	var newStr = '';
	if (str[1] !== undefined) {
		while (str[pos]) {
			n = 1;
			while (str[pos] == str [pos+1]) {
				pos++;
				n++;
			}
			newStr = newStr + str [pos] + n;
			pos = pos + 1;
		}

	} else {newStr = str[pos];}
	
	return console.log('Результат: ' + newStr);
};


function uncompress (str) {
	var pos = 0;
	newStr = '';

	    while(str[pos]) {

	    	if (str[pos+1] && isNumeric (str[pos+1])) {    		
	        
	            for (var i = 0; i < str[pos+1]; i++) {
		            newStr = newStr + str[pos];
		    	}    
		    	pos = pos + 2;
		    } else {newStr = newStr + str[pos];
              pos = pos + 1;
		    }
	    
	}      
		return console.log('Результат: ' + newStr);
}

function isNumeric (n){
return !isNaN( parseFloat(n) ) && isFinite(n);
}


compress("a");
compress("aaa");
compress("aabbb");
compress("aaabcc");
uncompress("a");
uncompress("a15");
uncompress("a112b3");
uncompress("a2b1c3");