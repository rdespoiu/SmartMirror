function getWeather() {

    var currentTemp;
    var feelsLike;
    var precipChance;
    var weatherDescription;

    $.ajax({

        url: "https://api.forecast.io/forecast/YOUR_API_KEY_HERE/42.0464,-87.6947",
        dataType: "jsonp",
        success: function(data) {
            console.log(data);
            console.log(data.currently.temperature); 

            currentTemp = data.currently.temperature;
            feelsLike = data.currently.apparentTemperature;
            precipChance = data.currently.precipProbability;
            precipType = data.currently.precipType;
            weatherDescription = data.currently.summary;

            console.log("Current Temperature: ", currentTemp);
            console.log("Feels Like: ", feelsLike);
            console.log("Chance of Precipitation: ", precipChance + "%");
            console.log("Type of precip: ", precipType);
            console.log("Description: ", weatherDescription);

            var line1 = currentTemp + "&deg;" + " <img class = 'weatherIcon' src = 'Images/thermometer.png'/>";
            //var line2 = "Feels Like: " + data.currently.apparentTemperature + "&deg;";

            var line3 = precipChance + "%" + " <img class = 'weatherIcon' src = 'Images/rain.png'/>";

            var line4 = weatherDescription + " <img class = 'weatherIcon' src = 'Images/sun.png'/>";

            document.getElementById("currentTemp").innerHTML = line1;
            document.getElementById("chanceOfPrecip").innerHTML = line3;
            document.getElementById("weatherDescription").innerHTML = line4;

        }

    });

    
}

