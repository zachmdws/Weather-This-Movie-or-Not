var cloudy = [14];
var key = "cee31e4e0a700ed1066486f86f4ae8b4";
var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + cloudy
console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
























































































// getLocation();

function getLocation() { 

    if(navigator.geolocation) { 
        
        navigator.geolocation.getCurrentPosition(getWeather);

    }
}
    function getWeather(position) { 

        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        var APIkey = "4971bbf933e132e86212d1bc1c100553";

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+ APIkey;

        $.ajax({
            url:queryURL,
            method: "GET"
        }).then(function(response){ 
            var weather = (response.weather[0].main);
            var icon = (response.weather[0].icon);

            if(response.weather[0].icon) { 
                icon = ("<img id='weatherIcon' src='http://openweathermap.org/img/wn/"+ icon + "@2x.png");
            }

            console.log(response);
            console.log(weather);
        })

    }


