var cloudy = [14];
var key = "cee31e4e0a700ed1066486f86f4ae8b4";
var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=" + key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + cloudy
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});