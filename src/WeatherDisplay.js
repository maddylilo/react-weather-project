import React from "react";
import FormattedDate from "./FormattedDate";
import CurrentIcon from "./CurrentIcon";
import CurrentTemperature from "./CurrentTemperature";

export default function WeatherDisplay(props) {
    return (
        <div className="WeatherDisplay">
            <h1>{props.data.city}</h1>
            <span>
                <FormattedDate date={props.data.date} />
            </span>
            <span> • </span>
            <span className="text-capitalize">{props.data.description}</span>
            <div className="row">
                <div className="col-7">
                    <CurrentIcon code={props.data.icon} />
                    <CurrentTemperature celsius={props.data.temperature}/>
                    {/* <span className="currentTemp">{Math.round(props.data.temperature)}</span>
                    <span><button className="btn tempButton">°C</button></span>
                    <span><button className="btn tempButton">°F</button></span> */}
                </div>
                <div className="col-5">
                    <ul className="rainWind">
                        {/* <li>Precipitation: 8%</li> */}
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)} mph</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}