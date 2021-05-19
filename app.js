// Formatting date to Day, Date, Month, and Year


const dateBuilder = d => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sun","Mon","Tues","Wed","thurs","Fri","Sat"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
}

let now = new Date();
let date = document.getElementById('date');
date.innerText = dateBuilder(now);    


// API KEY & URL

const api = {
    base_url:'https://api.openweathermap.org/data/2.5/',
    api_key: 'f2ddd235ef4603ada009bfeddf9536fa'
}

// Grabbing searchbar element and adding event listener for enter key
const searchbar = document.querySelector('.search-bar');
searchbar.addEventListener('keypress', setQuery);

// Getting the value from searchbar input
function setQuery(event) {
    if (event.keyCode == 13) {
        getResults(searchbar.value);
    }
}
// Getting corresponding JSON from API 
function getResults(query) {
    fetch(`${api.base_url}weather?q=${query}&units=imperial&appid=${api.api_key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);

    
}

// function to display results from API query, updates corresponding HTML in real time
function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector(".location");
    let degrees = document.querySelector(".degrees");
    let description = document.querySelector(".descriptions");
    
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    degrees.innerHTML = `${Math.round(weather.main.temp)}°F`;
    description.innerText = `${weather.weather[0].description}`

    
}







