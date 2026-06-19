const apiKey = "df4ba660db8e08d202c196a0114c6faf";

const searchBtn = document.querySelector("button");

searchBtn.addEventListener("click", () => {
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
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        console.log(data);

        if (data.cod != 200) {
            alert(data.message);
            return;
        }

        document.querySelector(".temp").textContent =
            Math.round(data.main.temp) + "°C";

        document.querySelector(".city").textContent =
            "📍 " + data.name + ", " + data.sys.country;

        document.querySelector(".condition").textContent =
            data.weather[0].main;

        document.querySelector(".humidity").textContent =
            data.main.humidity + "%";

        document.querySelector(".wind").textContent =
            data.wind.speed + " km/h";

    } catch (error) {
        console.error(error);
        alert("Failed to fetch weather data.");
    }
}
 