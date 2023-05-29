//=================== Dark mode=================
$("#btnDark").on("click", () => {
    $("body").css("backgroundColor", "Black")
    
});



//=================== light mode=================
$("#btnLight").on("click", () => {
    $("body").css("backgroundColor", "White")
    
});


// ===================  fetch data   =============

const apiUrl = "http://api.weatherapi.com/v1/forecast.json?key=2e5f0f1456614db99b583418231405&q=";

const searchBox = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#btnSearch");
const whetherIcon = document.querySelector(".whether-icon");

async function checkWhather(city) {
    const respon = await fetch(apiUrl+city);
    var data = await respon.json();
    
    console.log(data,"this is data");
    document.querySelector(".city").innerHTML = data.location.name
    document.querySelector(".region").innerHTML = data.location.region
    document.querySelector(".country").innerHTML = data.location.country
    document.querySelector(".temp").innerHTML =data.current.temp_c +" °C"
    document.querySelector(".humidity").innerHTML = data.current.humidity+"%"
    document.querySelector(".wind").innerHTML = data.current.wind_kph + "Km/h"
    document.querySelector(".text-Whether").innerHTML = data.current.condition.text
    // document.querySelector(".whether-icon").innerHTML = data.current.condition.icon
    
    if (data.current.condition.text=="Partly cloudy") {
        whetherIcon.src = "assets/images/clouds.png";
    }
    else if (data.current.condition.text == "Sunny") {
        whetherIcon.src= "assets/images/humidity.png"
    }

    else if (data.current.condition.text == "Cloudy") {
        whetherIcon.src= "assets/images/humidity.png"
    }

    else if (data.current.condition.text == "Overcast") {
        whetherIcon.src= "assets/images/humidity.png"
    }
}

searchBtn.addEventListener("click", () => {
    checkWhather(searchBox.value);
    
});


// $("#btnSearch").on("click", () => {  
//     checkWhather(
//     );
// });

// const getLocation = () => {
//     fetch('http://api.weatherapi.com/v1/forecast.json?key=2e5f0f1456614db99b583418231405&q=colombo')
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data,"this is data");
//             document.querySelector(".city").innerHTML = data.location.name
//             document.querySelector(".region").innerHTML = data.location.region
//             document.querySelector(".country").innerHTML = data.location.country
//         });
// }


// const getTemp = () => {
//     fetch('http://api.weatherapi.com/v1/forecast.json?key=2e5f0f1456614db99b583418231405&q=colombo')
//         .then((response) => response.json())
//         .then((data) => {
//             document.querySelector(".temp").innerHTML =data.current.temp_c +"°C"
//             document.querySelector(".humidity").innerHTML = data.current.humidity+"%"
//             document.querySelector(".wind").innerHTML = data.current.wind_kph+"Km/h"


//         });
// }
