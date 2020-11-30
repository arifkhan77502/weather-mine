const API = '5e4a1268bc55e807d64fea70f7eb9d5a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const cityInput = document.getElementById("inputValue");
const city = document.getElementById('city').innerText


const information = (city) => {
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => update(data))
}


cityInput.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        if(e.target.value){
            information(e.target.value)
            e.target.value = ""
        }

        else{
            alert("Enter a valid name....")
        }
    }
})


const update = data => {
    document.getElementById("city").innerText = data.name + ", " + data.sys.country;
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("pressure").innerText = data.main.pressure;
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("status").innerText = data.weather[0].description;
    document.getElementById("condition").setAttribute ('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById("inputValue").value = "";
}


document.getElementById("search").addEventListener("click", function(){
    information(cityInput.value);
})


information("Rajshahi")