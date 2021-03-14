import React, {useState} from "react";
import axios from "axios";
import WeatherIcon from 'react-icons-weather';
import Loader from "react-loader-spinner";
import "./Weather.css";

export default function Weather() {
    let [ready, setReady] = useState(false);
    let [weather, setWeather] = useState({});
    function handleResponse(response) {
        console.log(response.data);
        setWeather({
            city: response.data.name,
            date: "Wednesday 10:00",
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
        })
        setReady(true);
    }

    if (ready) {
        return(
            <div className="Weather">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="searchBar">
                                        <input type="search" placeholder="Enter a city" className="form-control"/>
                                    </div>
                                    <div className="searchButton">
                                        <input type="submit" value="Search" className="btn btn-outline-secondary"/>
                                    </div>
                                </div>
                            </form>
                            <h1>{weather.city}</h1>
                            {/* <ul className="locationStats">
                                <li>Wednesday 10:00</li>
                                <li>Sunny</li>
                            </ul> */}
                            <span>{weather.date}</span>
                            <span> / </span>
                            <span className="text-capitalize">{weather.description}</span>
                            <div className="row">
                                <div className="col-7">
                                    <WeatherIcon name="owm" iconId="200" className="weatherIcon"/>
                                    {/* <img src="https://icons-for-free.com/download-icon-sunny+temperature+weather+icon-1320196637430890623_512.png" alt="Sunny" /> */}
                                    <span className="currentTemp">{Math.round(weather.temperature)}</span>
                                    <span><button className="btn tempButton">°C</button></span>
                                    {/* <span> | </span> */}
                                    <span><button className="btn tempButton">°F</button></span>
                                </div>
                                <div className="col-5">
                                    <ul className="rainWind">
                                        <li>Precipitation: 8%</li>
                                        <li>Humidity: {weather.humidity}%</li>
                                        <li>Wind: {Math.round(weather.wind)} mph</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="credit"><a href="https://github.com/maddylilo/react-weather-project" target="_blank" rel="noreferrer">Open-source code</a> by Madeleine Boyd</p>
                </div>
            </div>
        );
    } else {
        let apiKey = "34d9ed3eeaae24ff1bdbb0e4f7d779cd";
        let city = "London";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleResponse);

        return (
            <Loader type="TailSpin" color="#e3eeff" className="loader"/>
        )
    }
}