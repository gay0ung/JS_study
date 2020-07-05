const weather = document.querySelector('.js-weather')

const API_KEY = "f62408b4a87ada957cac20e4c23107ad"
const COORDS = 'coords'

function getWeather(lat,lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
  .then((res)=>{
    return res.json()
  }).then(json => {
    console.log(json);
    
    const temperature = json.main.temp;
    const place = json.name;

    weather.innerText = `${temperature}℃
     @${place}`
  })
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj)
  getWeather(latitude, longitude)

  console.log(position);
  
}

function handleGeoError(){
  console.log('Cant access geo location');
  
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS)
  if (loadedCoords === null){
    askForCoords()
  } else {
    //getWeather
    const parsedCoords = JSON.parse(loadedCoords)
    console.log(parsedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude)
  }
}


function init(){
  loadCoords()
}
init()