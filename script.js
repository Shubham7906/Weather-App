const weatherIcon = document.querySelector('.weather-icon');

const apiUrl = 'https://weather-api99.p.rapidapi.com/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'private',
		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
	}
};


/*const apiUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?units=metric&q=newyork';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'private access key',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};*/

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function as(city){
	const response = await fetch(apiUrl + city, options);

	if(response.status == 404){
		document.querySelector('.error').style.display = "block";
		document.querySelector('.weather').style.display = "none";
	}
	else{
		let data = await response.json();
	console.log(data);
	let tem = String(data.main.temp).substring(0,2);

	document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
	document.querySelector('.city').innerHTML = data.name;
	document.querySelector('.temp').innerHTML = Number(tem) + "°C";
	document.querySelector('.wind').innerHTML = data.wind.speed + "KM/h";

	if(data.weather[0].main=="Clouds"){
		weatherIcon.src = "images/clouds.png"
	}
	if(data.weather[0].main=="Clear"){
		weatherIcon.src = "images/clear.png"
	}
	if(data.weather[0].main=="Drizzle"){
		weatherIcon.src = "images/drizzle.png"
	}
	if(data.weather[0].main=="Mist"){
		weatherIcon.src = "images/mist.png"
	}
	if(data.weather[0].main=="Rain"){
		weatherIcon.src = "images/rain.png"
	}
	if(data.weather[0].main=="Haze"){
		weatherIcon.src = "images/rain.png"
	}
	if(data.weather[0].main=="Snow"){
		weatherIcon.src = "images/snow.png"
	}
	if(data.weather[0].main=="Wind"){
		weatherIcon.src = "images/wind.png"
	}
	document.querySelector('.weather').style.display = "block";
	document.querySelector('.error').style.display = "none";
	}
}
searchBtn.addEventListener("click",()=>{
	as(searchBox.value);
})
let private = '539a133fffmsh9aa0f58ae9ff104p1042c6jsn6f8dd2e55e86';
