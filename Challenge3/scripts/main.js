var url = "https://api.openweathermap.org/data/2.5/weather";
var apiKey = "9877cb6b0606cef4c511cf2e27863061";
var apiKey2 = "ub3sU7yyuNUvJ46IZx0pb9DeYqjSR62sgXaSJZpS";
var url2 = "https://api.nasa.gov/planetary/apod?"
var city = "tokyo";


function getAPIdata() {

    var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
    fetch(request)

        .then(function(response) {
        if(!response.ok) throw Error(response.statusText);
        return response.json();
    })
        .then(function(response) {

        var degC = Math.floor(response.main.temp - 273.25);
        document.getElementById('weatherTemprature').innerHTML = degC + ' &#176;C <br>';

        document.getElementById('weatherDescription').innerHTML = response.weather[0].description;

        document.getElementById('weatherWind').innerHTML = response.wind.speed + " km/h";

        document.getElementById('weatherHumidity').innerHTML = response.main.humidity + "%"; 

        document.getElementById('weatherClouds').innerHTML = response.clouds.all + "%";

        document.getElementById('weatherVisibility').innerHTML = response.visibility + " m";
    })
        .catch(function (error) {
        console.log('Request failed', error);
    });
}

document.getElementById('getWeather').onclick = function(){
    getAPIdata();
};

//Nasa API
function getAPINasa() {

    var request2 = url2 + "api_key=" + apiKey2;
    fetch(request2)

        .then(function(response2) {
        if(!response2.ok) throw Error(response2.statusText);
        return response2.json();
    })
        .then(function(response2) {

        //         document.getElementById('earthImage').innerHTML = response2;
        console.log(response2);
        document.getElementById('imageTitle').innerHTML = response2.title;
        document.getElementById('imageDate').innerHTML = response2.date;
        document.getElementById('imageDes').innerHTML = response2.explanation;
        var imageSource = response2.url;
        document.getElementById('earthImage').src = imageSource;


    })
        .catch(function (error) {
        console.log('Request failed', error);
    });
}
document.getElementById('changeImage').onclick = function(){
    getAPINasa();

};
