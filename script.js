  const searchBtn = document.querySelector("button");

searchBtn.addEventListener("click", () => {

    console.log("Button Clicked");

    const city = document.querySelector("input").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    getWeather(city);

});

async function getWeather(city) {

    try {

        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=6fd08f88d1d44f5fbd3110100260706&q=${city}`
        );

        const data = await response.json();

        console.log(data);

        document.querySelector(".temp").innerHTML =
            Math.round(data.current.temp_c) + "°C";

        document.querySelector(".city").innerHTML =
            data.location.name;

        document.querySelector(".condition").innerHTML =
            data.current.condition.text;

        document.querySelector(".humidity").innerHTML =
            data.current.humidity + "%";

        document.querySelector(".wind").innerHTML =
            data.current.wind_kph + " km/h";

    } catch (error) {

        console.error(error);
        alert("City not found!");

    }

}