import React from "react";
import "./Weather.css";

export default function Weather() {
    return(
        <div className="Weather">
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-10">
                            <input type="search" placeholder="Enter a city" className="form-control"/>
                        </div>
                        <div className="col-2">
                            <input type="submit" value="Search" className="btn btn-primary"/>
                        </div>
                    </div>
                </form>
                <h1>London</h1>
                <ul>
                    <li>Wednesday 10:00</li>
                    <li>Sunny</li>
                </ul>
                <div className="row">
                    <div className="col-7">
                        <img src="https://icons-for-free.com/download-icon-sunny+temperature+weather+icon-1320196637430890623_512.png" alt="Sunny" />
                        <span>
                            12
                            <button className="btn">°C</button>
                            |
                            <button className="btn">°F</button>
                        </span>
                    </div>
                    <div className="col-5">
                        <ul>
                            <li>
                                Precipitation: 8%
                            </li>
                            <li>
                                Wind: 5mph
                            </li>
                        </ul>
                    </div>
                </div>
                <p><a href="https://github.com/maddylilo/react-weather-project" target="_blank">Open-source code</a> by Madeleine Boyd</p>
            </div>
        </div>
    )
}