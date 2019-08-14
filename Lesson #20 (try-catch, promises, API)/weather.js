		function WheatherWidget(){
	let self = this;
	this.cityID = "625144";
	this.apiUrl = "https://api.openweathermap.org/data/2.5/";
	this.apiKey = "3ac18af0b9619c77d64c7af4866b698f";
	this.apiQueryWeather = this.apiUrl+"/weather?id=" + this.cityID + "&units=metric&lang=ru&appid=" + this.apiKey;
	this.apiQueryForecast = this.apiUrl+"/forecast?id=" + this.cityID + "&units=metric&lang=ru&appid=" + this.apiKey;
	this.cityWeather = {};
	this.cityForecast = {};
	
	this.getWeather = function(){
        fetch(this.apiQueryWeather, { method: 'get' })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.cityWeather = data;
            this.createWidget();
        })
        .catch(error => console.error("Ошибка получение погоды. Причина: " + error));		
	};

	this.getForecast = function(){
        fetch(this.apiQueryForecast, { method: 'get' })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            this.cityForecast = data;
            this.fillForecast();

        })
        .catch(error => console.error("Ошибка получение погоды. Причина: " + error));		
	};
	
	this.createWidget = function(){
		let layoutWidget = '<div class="boxWidget hidden">'+
			'<div class="header">Прогноз погоды<a href="#" id="modal-close">X</a></div>'+
			'<div class="list oneDay">На сегодня</div>'+
			'<div class="list threeDays">На 3 дня</div>'+
			'<div class="boxWeather"></div>'+
		'</div>';

		document.body.insertAdjacentHTML("beforeEnd", layoutWidget);
		document.querySelector(".start").classList.add('hidden');
		document.querySelector(".boxWidget").classList.remove('hidden');

		this.controller();
		fillWeather();		

	};

	function fillWeather(){
		let boxWeather = document.querySelector('.boxWeather');
		boxWeather.innerHTML = '<div id="location">'+ self.cityWeather.name +'</div>'+
		    '<div id="temp-with-icon">' + `<img src="http://openweathermap.org/img/wn/${self.cityWeather.weather[0].icon}@2x.png" alt=""icon>` + '</div>'+
		    `<div id="temp"> + ${self.cityWeather.main.temp} °C</div>`+
		    `<div id="descr">${self.cityWeather.weather[0].description[0].toUpperCase() + self.cityWeather.weather[0].description.slice(1)}</div>`+
		    `<div id="wind">Ветер: ${self.cityWeather.wind.speed} м/с</div>`
	};

	this.fillForecast = function(){
		let boxWeather =  document.querySelector('.boxWeather');
		var forecastColumn = '';

		this.cityForecast.list.forEach((item,i)=>{
			if(i==1 || item.dt_txt.slice(11,13) == '12' && i < 18 && i > 1) {
			console.log(item);	
				forecastColumn = forecastColumn + '<div class="columnWeather">' + 
					`<div>${item.dt_txt.slice(8,10)}.${item.dt_txt.slice(5,7)}</div>` +
					`<div class="forecastTepm">${Math.floor(item.main.temp)} °C</div>`  +
					`<img src="http://openweathermap.org/img/wn/${item.weather[0].icon}.png" alt=""icon>` +
				`</div>`;		
			};

		});

		boxWeather.innerHTML = forecastColumn;
	}

	function closeWidget(){
		document.querySelector(".boxWidget").classList.add('hidden');
		document.querySelector(".start").classList.remove('hidden');
	};

	this.controller = function(){
		document.querySelector("#modal-close").addEventListener("click", closeWidget );
		document.querySelector(".oneDay").addEventListener("click", function(){
			fillWeather();
		});
		document.querySelector(".threeDays").addEventListener("click", function(){
			widget.getForecast();
		});	
	};
};

let widget = new WheatherWidget();
document.querySelector(".start").addEventListener("click", function(){
	widget.getWeather();
});