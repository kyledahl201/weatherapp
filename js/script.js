
//preceeds all jquery code
$(document).ready(function () {


    //form submit option
    // $("form").on("submit", function(){


    // });


    console.log("ready!")


    //click handler for submit button
    $("#myButton").on("click", function (e) {

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
        }).then(function (response) {


            //log your object, make sure it returns properly
            console.log(response)


            //have a place in html to append info

            //unpeel the onion

            console.log(response.main.temp)


            //use the json object to go in and set variables


            var icon = response.weather[0].icon
            var kelvin = response.main.temp
            var temperature = kelvin - 273.15
            var temperature2 = temperature * 9 / 5
            var temperature3 = temperature2 + 32
            var temperatureF = Math.round(temperature3) + "°F"
            var weather = response.weather[0].main
            var windSpeed = response.wind.speed + " MPH"
            var humidity = response.main.humidity + "%"

            //console.log to check if variables are coorect 
            console.log("Temp kelvin: " + kelvin)
            console.log("Temp 1: " + temperature)
            console.log("Temp 2: " + temperature2)
            console.log("Temp 3: " + temperature3)
            console.log("temperature F: " + temperatureF)
            console.log("Icon code: " + icon)
            console.log("Weather: " + weather)
            console.log("wind speed: " + windSpeed)
            console.log("Humidity: " + humidity)

            //declare variables that will create new html elements 
            var thumbnailEl = $("<div>")
            var cityEl = $("<h2>")
            var iconEl = $("<img>")
            var weatherEl = $("<p>")
            var temperatureEl = $("<p>")
            var windSpeedEl = $("<p>")
            var humidityEl = $("<p>")
            var box2buttonEl = $("<div>")
            var buttonEl = $("<button>")

            //fill newly created divs
            cityEl.text(city)
            // iconEl.attr("src" + icon)
            weatherEl.text("Current weather: " + weather)
            temperatureEl.text("Temperature: " + temperatureF)
            windSpeedEl.text("Wind speed: " + windSpeed)
            humidityEl.text("Humidity: " + humidity)
            buttonEl.html("<button id='futureButton' class='btn btn-outline-success my-2 my-sm-0' type='submit'>Future</button>")

            //append elements to thumbnail div

            thumbnailEl.append(cityEl)
            thumbnailEl.append(iconEl)
            thumbnailEl.append(weatherEl)
            thumbnailEl.append(temperatureEl)
            thumbnailEl.append(windSpeedEl)
            thumbnailEl.append(humidityEl)
            box2buttonEl.append(buttonEl)

            //add class for box
            // thumbnailEl.addclass("thumbnail")

            //appened created div to div in html
            $("#box1").html(thumbnailEl);
            $("#box2").html(box2buttonEl)














        }).fail(function (err) { console.log("something went wrong") });






    });

    //click handler for future forecast button
    $("#futureButton").on("click", function () {

        //keeps from reloading page 
        // e.preventDefault();

        //testing button click works
        console.log("future")

        // //set searched value to variable
        // var city = $("#searchbar").val().trim();

        // // log searched value to test
        // console.log(city);

        // //changing html to use value, append add .text to change text
        // //$("#box1").append(myVal)


        // //AJAX CALL FOR DA API

        // //queryURL var, take endpoint from API documentation.  Read parameter instructions.
        // //start with endpoint.  ?key=value&key=value?

        // var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=08e841b83f4fd39dd5c8ffd7237f7393"

        // //AJAX call

        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function (response) {


        //     //log your object, make sure it returns properly
        //     console.log(response)


        //     //have a place in html to append info

        //     //unpeel the onion

        //     console.log(response.main.temp)


        //     //use the json object to go in and set variables


        //     var icon = response.weather[0].icon
        //     var kelvin = response.main.temp
        //     var temperature = kelvin - 273.15
        //     var temperature2 = temperature * 9 / 5
        //     var temperature3 = temperature2 + 32
        //     var temperatureF = Math.round(temperature3) + "°F"
        //     var weather = response.weather[0].main
        //     var windSpeed = response.wind.speed + " MPH"
        //     var humidity = response.main.humidity + "%"

        //     //console.log to check if variables are coorect 
        //     console.log("Temp kelvin: " + kelvin)
        //     console.log("Temp 1: " + temperature)
        //     console.log("Temp 2: " + temperature2)
        //     console.log("Temp 3: " + temperature3)
        //     console.log("temperature F: " + temperatureF)
        //     console.log("Icon code: " + icon)
        //     console.log("Weather: " + weather)
        //     console.log("wind speed: " + windSpeed)
        //     console.log("Humidity: " + humidity)

        //     //declare variables that will create new html elements 
        //     var thumbnailEl = $("<div>")
        //     var cityEl = $("<h2>")
        //     var iconEl = $("<img>")
        //     var weatherEl = $("<p>")
        //     var temperatureEl = $("<p>")
        //     var windSpeedEl = $("<p>")
        //     var humidityEl = $("<p>")
        //     var box2buttonEl = $("<div>")
        //     var buttonEl = $("<button>")

        //     //fill newly created divs
        //     cityEl.text(city)
        //     // iconEl.attr("src" + icon)
        //     weatherEl.text("Current weather: " + weather)
        //     temperatureEl.text("Temperature: " + temperatureF)
        //     windSpeedEl.text("Wind speed: " + windSpeed)
        //     humidityEl.text("Humidity: " + humidity)
        //     buttonEl.html("<button id='futureButton' class='btn btn-outline-success my-2 my-sm-0' id='myButton' type='submit'>Future</button>")

        //     //append elements to thumbnail div

        //     thumbnailEl.append(cityEl)
        //     thumbnailEl.append(iconEl)
        //     thumbnailEl.append(weatherEl)
        //     thumbnailEl.append(temperatureEl)
        //     thumbnailEl.append(windSpeedEl)
        //     thumbnailEl.append(humidityEl)
        //     box2buttonEl.append(buttonEl)

        //     //add class for box
        //     // thumbnailEl.addclass("thumbnail")

        //       //appened created div to div in html
        //       $("#box1").html(thumbnailEl);
        //       $("#box2").html(box2buttonEl)














        // }).fail(function (err) { console.log("something went wrong") });






    });


});
