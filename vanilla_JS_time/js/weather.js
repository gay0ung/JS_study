const weather = document.querySelector(".js-weather");

const API_KEY = "f62408b4a87ada957cac20e4c23107ad"
const COORDS = "coords";

function getWeather(lat, lng) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    // then -> 데이터가 완전히 들어온 다음 호출하는 함수.
    .then(function(response){
        return response.json();   
    })
    .then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude  = position.coords.longitude;
    const coordsObj = { latitude,longitude };

    saveCoords(coordsObj);
    getWeather(latitude,longitude)
}

function handleGeoError(){
    console.log("Can't access GEO Location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if ( loadedCoords === null) {
        askForCoords()
    } else {
        // getWeather
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude)
        
    }
}

function init(){
    loadCoords();
}

init()