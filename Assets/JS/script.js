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

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(getWeather);

    }
}
function getWeather(position) {

    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var APIkey = "4971bbf933e132e86212d1bc1c100553";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var weather = (response.weather[0].main);
        var icon = (response.weather[0].icon);

        if (response.weather[0].icon) {
            icon = ("<img id='weatherIcon' src='http://openweathermap.org/img/wn/" + icon + "@2x.png");
        }

        console.log(response);
        console.log(weather);
    })

}

getMovieImages();
function getMovieImages() {

    var test = [14];
    var key = "cee31e4e0a700ed1066486f86f4ae8b4";
    var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + test;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        var carouselSection = $("<section class='section'></section");
        var carouselContainer = $("<container></container");
        var carouselDemoDiv = $("<div id='carousel-demo' class='carousel'></div>");

        $(".h-100").append(carouselSection);
        carouselSection.append(carouselContainer);
        carouselContainer.append(carouselDemoDiv);


        for (var i = 0; i < 12; i++) {
            var posterP = (response.results[i].poster_path);
            var mainL = ("https://image.tmdb.org/t/p/original/");
            var movieImages = [];
            var finishedP = mainL + posterP;

            movieImages.push(finishedP);

            var carouselItems = $("<div class= 'item-" + i + "'></div>");
            var carouselImages = $("<img class='img-" + i + "' src='" + finishedP + "'></img>");

            console.log()

            carouselDemoDiv.append(carouselItems);
            carouselItems.append(carouselImages);


        }
        bulmaCarousel.attach('#carousel-demo', {
            slidesToScroll: 1,
            slidesToShow: 6
        });
    })
};

