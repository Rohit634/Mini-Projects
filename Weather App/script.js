function fetchWeather() {
    var cityInput = document.getElementById("cityInput").value;
    var weatherInfo = document.getElementById("weatherInfo");
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=YOUR_API_KEY&units=metric`)
    .then(response => response.json())
    .then(data => {
        var temperature = data.main.temp;
        var description = data.weather[0].description;
        weatherInfo.innerHTML = `Temperature: ${temperature}°C <br> Description: ${description}`;
    })
    .catch(error => {
        console.error('Error:', error);
        weatherInfo.innerHTML = "City not found";
    });
}
