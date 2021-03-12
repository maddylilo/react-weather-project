import React from "react";
import WeatherIcon from 'react-icons-weather';
import "./Weather.css";

export default function Weather() {
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
                        <h1>London</h1>
                        {/* <ul className="locationStats">
                            <li>Wednesday 10:00</li>
                            <li>Sunny</li>
                        </ul> */}
                        <span>Wednesday 10:00</span>
                        <span> / </span>
                        <span>Sunny</span>
                        <div className="row">
                            <div className="col-7">
                                <WeatherIcon name="owm" iconId="200" className="weatherIcon"/>
                                {/* <img src="https://icons-for-free.com/download-icon-sunny+temperature+weather+icon-1320196637430890623_512.png" alt="Sunny" /> */}
                                <span className="currentTemp">12</span>
                                <span><button className="btn tempButton">°C</button></span>
                                {/* <span> | </span> */}
                                <span><button className="btn tempButton">°F</button></span>
                            </div>
                            <div className="col-5">
                                <ul className="rainWind">
                                    <li>
                                        Precipitation: 8%
                                    </li>
                                    <li>
                                        Wind: 5mph
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="credit"><a href="https://github.com/maddylilo/react-weather-project" target="_blank" rel="noreferrer">Open-source code</a> by Madeleine Boyd</p>
            </div>
        </div>
    )
}