//=================== Dark mode=================
$("#btnDark").on("click", () => {
    $("body").css("backgroundColor", "Black")
    $("body").css("border-radius", "7rem")
    console.log("dark bttn");
    
});



//=================== light mode=================
$("#btnLight").on("click", () => {
    $("body").css("backgroundColor", "White")
    $(".hu-img").css("backgroundColor", "Black")
    
});


// ===================  fetch data   =============

const apiUrl = "https://api.weatherapi.com/v1/";

const searchBox = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#btnSearch");
const whetherIcon1 = document.querySelector("#whether-icon1");

async function checkWhather(city) {
    const respon = await fetch(apiUrl + "forecast.json?key=2e5f0f1456614db99b583418231405&q=" + city+"&days=5");



    if (respon.status == 404) {
        document.querySelector(".error").getElementsByClassName.display = "block";
        document.querySelector(".whether").getElementsByClassName.display = "none";
    } else {

        var data = await respon.json();
    
   
        document.querySelector(".city").innerHTML = data.location.name
        document.querySelector(".region").innerHTML = data.location.region
        document.querySelector(".country").innerHTML = data.location.country
        document.querySelector(".temp").innerHTML = data.current.temp_c + " °C"
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%"
        document.querySelector(".wind").innerHTML = data.current.wind_kph + "Km/h"
        document.querySelector(".text-Whether").innerHTML = data.current.condition.text
        whetherIcon1.src = data.current.condition.icon;

        // 12 am division
        document.querySelector(".tempreture").innerHTML = data.forecast.forecastday[0].hour[0].temp_c + " °C"
        document.querySelector(".img-24").src = data.forecast.forecastday[0].hour[0].condition.icon

         // 4 am division
         document.querySelector(".tempreture04").innerHTML = data.forecast.forecastday[0].hour[4].temp_c + " °C"
         document.querySelector(".img-04").src = data.forecast.forecastday[0].hour[4].condition.icon
         
         // 8 am division
         document.querySelector(".tempreture08").innerHTML = data.forecast.forecastday[0].hour[8].temp_c + " °C"
         document.querySelector(".img-08").src = data.forecast.forecastday[0].hour[8].condition.icon
         
         // 12 am division
         document.querySelector(".tempreture12").innerHTML = data.forecast.forecastday[0].hour[12].temp_c + " °C"
         document.querySelector(".img-12").src = data.forecast.forecastday[0].hour[12].condition.icon
         
         // 4 pm division
         document.querySelector(".tempreture16").innerHTML = data.forecast.forecastday[0].hour[16].temp_c + " °C"
         document.querySelector(".img-16").src = data.forecast.forecastday[0].hour[16].condition.icon
         
         // 8 pm division
         document.querySelector(".tempreture20").innerHTML = data.forecast.forecastday[0].hour[20].temp_c + " °C"
         document.querySelector(".img-20").src = data.forecast.forecastday[0].hour[20].condition.icon
         
        console.log(data);

         document.querySelector(".date1").innerHTML = data.forecast.forecastday[1].date
         document.querySelector(".day1-img").src = data.forecast.forecastday[1].day.condition.icon
         document.querySelector("#day1-temp").innerHTML = data.forecast.forecastday[1].day.avgtemp_c + " °C"
         document.querySelector("#day1-whet").innerHTML = data.forecast.forecastday[1].day.condition.text
         document.querySelector("#day1-wind").innerHTML = data.forecast.forecastday[1].day.maxwind_kph + "KM/h"
         document.querySelector("#day1-hum").innerHTML = data.forecast.forecastday[1].day.avghumidity + "%"
         // document.querySelector(".day1").innerHTML = data.forecast.forecastday[1].date


         document.querySelector(".date2").innerHTML = data.forecast.forecastday[2].date
         document.querySelector(".day2-img").src = data.forecast.forecastday[2].day.condition.icon
         document.querySelector("#day2-temp").innerHTML = data.forecast.forecastday[2].day.avgtemp_c + " °C"
         document.querySelector("#day2-whet").innerHTML = data.forecast.forecastday[2].day.condition.text
         document.querySelector("#day2-wind").innerHTML = data.forecast.forecastday[2].day.maxwind_kph + "KM/h"
         document.querySelector("#day2-hum").innerHTML = data.forecast.forecastday[2].day.avghumidity + "%"
    
    
        
    
        //         document.querySelector(".whether1").style.display = "block";
        //         document.querySelector(".error").style.display = "none";
        //     }
    
    }
}

function searchForeCast(city) {
    var urlc = apiUrl + "forecast.json?key=2e5f0f1456614db99b583418231405&q=" + city+"&days=5";
    fetch(urlc)
        .then(response => response.json())
        .then(data => {
        
            document.querySelector(".date4").innerHTML = data.forecast.forecastday[0].date
                document.querySelector(".day4-img").src = data.forecast.forecastday[0].day.condition.icon
                document.querySelector("#day4-temp").innerHTML = data.forecast.forecastday[0].day.avgtemp_c+ " °C"
                document.querySelector("#day4-whet").innerHTML = data.forecast.forecastday[0].day.condition.text
                document.querySelector("#day4-wind").innerHTML = data.forecast.forecastday[0].day.maxwind_kph + "KM/h"
                document.querySelector("#day4-hum").innerHTML = data.forecast.forecastday[0].day.avghumidity + "%"

                document.querySelector(".date5").innerHTML = data.forecast.forecastday[1].date
                document.querySelector(".day5-img").src = data.forecast.forecastday[1].day.condition.icon
                document.querySelector("#day5-temp").innerHTML = data.forecast.forecastday[1].day.avgtemp_c + " °C"
                document.querySelector("#day5-whet").innerHTML = data.forecast.forecastday[1].day.condition.text
                document.querySelector("#day5-wind").innerHTML = data.forecast.forecastday[1].day.maxwind_kph + "KM/h"
                document.querySelector("#day5-hum").innerHTML = data.forecast.forecastday[1].day.avghumidity + "%"

                document.querySelector(".date6").innerHTML = data.forecast.forecastday[2].date
                document.querySelector(".day6-img").src = data.forecast.forecastday[2].day.condition.icon
                document.querySelector("#day6-temp").innerHTML = data.forecast.forecastday[2].day.avgtemp_c + " °C"
                document.querySelector("#day6-whet").innerHTML = data.forecast.forecastday[2].day.condition.text
                document.querySelector("#day6-wind").innerHTML = data.forecast.forecastday[2].day.maxwind_kph + "KM/h"
                document.querySelector("#day6-hum").innerHTML = data.forecast.forecastday[2].day.avghumidity + "%"
        });
    
}




searchBtn.addEventListener("click", () => {
    checkWhather(searchBox.value);
    searchForeCast(searchBox.value)
    $("#whether-sec1").css("display", "block")
    $("#whether-sec2").css("display", "none")

    
});

function getLocation() {
    // console.log("getLocation is running");
    $(".hu-img").css("backgroundColor", "Black")


    $("#whether-sec1").css("display", "none")
    $(".foreCast-big").css("display", "none")
    // Check if Geolocation is supported.
    if (navigator.geolocation) {
        // Get the user's current location.
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        // Geolocation is not supported.
        alert("Geolocation is not supported by this browser.");
    }


    
  
  
    function showPosition(position) {
        // Create a `GeolocationPosition` object.
        var location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
      
        };
        
        // console.log(location);
  
        // Make a request to the weather API.
        var url = apiUrl+"forecast.json?key=2e5f0f1456614db99b583418231405&q=" + location.latitude + "," + location.longitude + "&days=4";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Parse the JSON response.
          
                // console.log(data);
                var city = data.location.name;
                var weather = data.current.condition.text;
                var current = data.current.temp_c;
                // var forecast = data.forecast.forecastday[0].day.avgtemp_c;

                // Present the weather data to the user.
                document.getElementById("city-live").innerHTML = city;
                document.getElementById("temp-live").innerHTML = current + " °C"
                document.getElementById("text-Whether").innerHTML = weather;
          
                document.querySelector("#region").innerHTML = data.location.region
                document.querySelector("#country").innerHTML = data.location.country
                document.querySelector("#humidity").innerHTML = data.current.humidity + "%"
                document.querySelector("#wind").innerHTML = data.current.wind_kph + "Km/h"
                document.querySelector("#whether-icon2").src = data.current.condition.icon;


                // 12 am division
                document.querySelector(".tempreture").innerHTML = data.forecast.forecastday[0].hour[0].temp_c + " °C"
                document.querySelector(".img-24").src = data.forecast.forecastday[0].hour[0].condition.icon
          
                // 4 am division
                document.querySelector(".tempreture04").innerHTML = data.forecast.forecastday[0].hour[4].temp_c + " °C"
                document.querySelector(".img-04").src = data.forecast.forecastday[0].hour[4].condition.icon
                
                // 8 am division
                document.querySelector(".tempreture08").innerHTML = data.forecast.forecastday[0].hour[8].temp_c + " °C"
                document.querySelector(".img-08").src = data.forecast.forecastday[0].hour[8].condition.icon
                
                // 12 am division
                document.querySelector(".tempreture12").innerHTML = data.forecast.forecastday[0].hour[12].temp_c + " °C"
                document.querySelector(".img-12").src = data.forecast.forecastday[0].hour[12].condition.icon
                
                // 4 pm division
                document.querySelector(".tempreture16").innerHTML = data.forecast.forecastday[0].hour[16].temp_c + " °C"
                document.querySelector(".img-16").src = data.forecast.forecastday[0].hour[16].condition.icon
                
                // 8 pm division
                document.querySelector(".tempreture20").innerHTML = data.forecast.forecastday[0].hour[20].temp_c + " °C"
                document.querySelector(".img-20").src = data.forecast.forecastday[0].hour[20].condition.icon
                

                document.querySelector(".date1").innerHTML = data.forecast.forecastday[1].date
                document.querySelector(".day1-img").src = data.forecast.forecastday[1].day.condition.icon
                document.querySelector("#day1-temp").innerHTML = data.forecast.forecastday[1].day.avgtemp_c + " °C"
                document.querySelector("#day1-whet").innerHTML = data.forecast.forecastday[1].day.condition.text
                document.querySelector("#day1-wind").innerHTML = data.forecast.forecastday[1].day.maxwind_kph + "KM/h"
                document.querySelector("#day1-hum").innerHTML = data.forecast.forecastday[1].day.avghumidity + "%"
                // document.querySelector(".day1").innerHTML = data.forecast.forecastday[1].date


                document.querySelector(".date2").innerHTML = data.forecast.forecastday[2].date
                document.querySelector(".day2-img").src = data.forecast.forecastday[2].day.condition.icon
                document.querySelector("#day2-temp").innerHTML = data.forecast.forecastday[2].day.avgtemp_c + " °C"
                document.querySelector("#day2-whet").innerHTML = data.forecast.forecastday[2].day.condition.text
                document.querySelector("#day2-wind").innerHTML = data.forecast.forecastday[2].day.maxwind_kph + "KM/h"
                document.querySelector("#day2-hum").innerHTML = data.forecast.forecastday[2].day.avghumidity + "%"
                

                // if (data.current.condition.text=="Partly cloudy") {
                //     document.querySelector(".main-whether-sec-img").src = "assets/gif/darkCloud.gif";
                // }
                // else if (data.current.condition.text == "Sunny") {
                //     whetherIcon.src= "assets/images/humidity.png"
                // }
            
                // else if (data.current.condition.text == "Cloudy") {
                //     whetherIcon.src= "assets/images/humidity.png"
                // }
            
                // else if (data.current.condition.text == "Overcast") {
                //     whetherIcon.src= "assets/images/humidity.png"
                // }
            });
        
        
            
    


        //=============================================================


        let today = new Date().toISOString().slice(0, 10)
        // console.log(today)

        var beforeday = new Date();
        beforeday.setDate(beforeday.getDate() - 3);
        // console.log(beforeday.toString());

        function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;
        
            return [year, month, day].join('-');
        }
        
        // console.log(formatDate(beforeday));

        var urlN = apiUrl+"history.json?key=2e5f0f1456614db99b583418231405&q="+ location.latitude + "," + location.longitude + "&end_dt="+today+"&dt="+formatDate(beforeday);

        // console.log(urlN);
        // Make the request to the API
        fetch(urlN)
            .then(response => response.json())
            .then(data => {
                // console.log(data);

                document.querySelector(".date4").innerHTML = data.forecast.forecastday[0].date
                document.querySelector(".day4-img").src = data.forecast.forecastday[0].day.condition.icon
                document.querySelector("#day4-temp").innerHTML = data.forecast.forecastday[0].day.avgtemp_c+ " °C"
                document.querySelector("#day4-whet").innerHTML = data.forecast.forecastday[0].day.condition.text
                document.querySelector("#day4-wind").innerHTML = data.forecast.forecastday[0].day.maxwind_kph + "KM/h"
                document.querySelector("#day4-hum").innerHTML = data.forecast.forecastday[0].day.avghumidity + "%"

                document.querySelector(".date5").innerHTML = data.forecast.forecastday[1].date
                document.querySelector(".day5-img").src = data.forecast.forecastday[1].day.condition.icon
                document.querySelector("#day5-temp").innerHTML = data.forecast.forecastday[1].day.avgtemp_c + " °C"
                document.querySelector("#day5-whet").innerHTML = data.forecast.forecastday[1].day.condition.text
                document.querySelector("#day5-wind").innerHTML = data.forecast.forecastday[1].day.maxwind_kph + "KM/h"
                document.querySelector("#day5-hum").innerHTML = data.forecast.forecastday[1].day.avghumidity + "%"

                document.querySelector(".date6").innerHTML = data.forecast.forecastday[2].date
                document.querySelector(".day6-img").src = data.forecast.forecastday[2].day.condition.icon
                document.querySelector("#day6-temp").innerHTML = data.forecast.forecastday[2].day.avgtemp_c + " °C"
                document.querySelector("#day6-whet").innerHTML = data.forecast.forecastday[2].day.condition.text
                document.querySelector("#day6-wind").innerHTML = data.forecast.forecastday[2].day.maxwind_kph + "KM/h"
                document.querySelector("#day6-hum").innerHTML = data.forecast.forecastday[2].day.avghumidity + "%"
                
               
            });
    }

    }
    
  
    $("#forecast-dwn-btn").on("click", () => {
        $(".foreCast-big").css("display", "flex")
        // console.log("i want forecast whther");
    
    });

    $("#forecast-up-btn").on("click", () => {
        $(".foreCast-big").css("display", "none")
        // console.log("i want close forecast whther");
    
    });

 



       
    

    


     // When the page loads, call the `getLocation` function.
window.onload = getLocation;
// window.onload = fetchWeather;
