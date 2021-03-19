import React, {useState} from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import Forecast from "./Forecast";
import Loader from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
    let [ready, setReady] = useState(false);
    let [weather, setWeather] = useState({});
    let [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeather({
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
        })
        setReady(true);
    }

    function search() {
        let apiKey = "34d9ed3eeaae24ff1bdbb0e4f7d779cd";
        // let city = "London";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange (event) {
        setCity(event.target.value);
    }

    if (ready) {
        return(
            <div className="Weather">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="searchBar">
                                        <input type="search" placeholder="Enter a city" className="form-control" onChange={handleCityChange}/>
                                    </div>
                                    <div className="searchButton">
                                        <input type="submit" value="Search" className="btn btn-outline-secondary"/>
                                    </div>
                                </div>
                            </form>
                            <WeatherDisplay data={weather}/>
                        </div>
                        <hr />
                        <Forecast city={weather.city}/>
                    </div>
                    <p className="credit"><a href="https://github.com/maddylilo/react-weather-project" target="_blank" rel="noreferrer">Open-source code</a> by Madeleine Boyd</p>
                </div>
            </div>
        );
    } else {
        search();
        return (
            <Loader type="TailSpin" color="#e3eeff" className="loader"/>
        )
    }
}