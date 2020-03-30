
//preceeds all jquery code
$(document).ready(function(){


//form submit option
    // $("form").on("submit", function(){


    // });


console.log("ready!")


//click handler for submit button
$("#myButton").on("click", function(e){

    //keeps from reloading page 
e.preventDefault();

//testing button click works
console.log("submitted")

//set searched value to variable
  var city = $("#searchbar").val().trim();

  // log searched value to test
  console.log(city);

  //changing html to use value, append add .text to change text
  //$("#box1").append(myVal)


//AJAX CALL FOR DA API

//queryURL var, take endpoint from API documentation.  Read parameter instructions.
//start with endpoint.  ?key=value&key=value?

var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=08e841b83f4fd39dd5c8ffd7237f7393"

//AJAX call

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){


    //log your object, make sure it returns properly
console.log(response)


    //have a place in html to append info

    //unpeel the onion

    console.log(response.main.temp)


    //use the json object to go in and set variables


var icon = response.weather[0].icon
var kelvin = response.main.temp 
var temperature = kelvin - 273.15
var temperature2 = temperature * 9/5
var temperature3 = temperature2 + 32
var temperatureF =Math.round(temperature3) + "°F"
var weather = response.weather[0].main
var windSpeed = response.wind.speed + " MPH"
var humidity = response.main.humidity + "%"

//console.log to check if variables are coorect 
console.log("Temp kelvin: " + kelvin )
console.log("Temp 1: " + temperature )
console.log("Temp 2: " + temperature2 )
console.log("Temp 3: " + temperature3 )
console.log("temperature F: " + temperatureF)
console.log("Icon code: " + icon)
console.log("Weather: " + weather)
console.log("wind speed: " + windSpeed)
console.log("Humidity: " + humidity)



/*
// console log one at a time to make sure you grab the data properly 
console.log("Temperature: "temperature)

//create elements for new div
var thumbnailEL = $("<div>")
var cityEL = $("<h6>")
var iconEL = $("<img>")
var temperatureEL = $("<p>")

//fill elements that will be inside div
titleEL.text(title)
iconEL.attr("src", icon)
temperatureEL.text(temperature)

//appened elements to thumbnail div in order
thumbnailEL.append(titleEL)
thumbnailEL.append(iconEL)
thumbnailEL.append(temperatureEL)

//add class

thumbnailEL.addclass("thumbnail")


//appened created div to div in html
$("#box1").append(thumbnailEL);





/*

Psuedo code for div creation
<div>
    <h6>city></h6>
    <img>The Icon</img>
    <h6>temperature</h6>
</div>




*/

}).fail(function(err){console.log("something went wrong")});






});


});
