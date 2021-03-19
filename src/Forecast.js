import React, {useState} from "react";
import axios from "axios";
import ForecastSingle from "./ForecastSingle";
import "./Forecast.css";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {
        console.log(forecast.list[0]);
        return (
            <div className="Forecast row">
                <ForecastSingle data={forecast.list[0]} />
                <ForecastSingle data={forecast.list[1]} />
                <ForecastSingle data={forecast.list[2]} />
                <ForecastSingle data={forecast.list[3]} />
                <ForecastSingle data={forecast.list[4]} />
            </div>
        )
    } else {
        let apiKey = "34d9ed3eeaae24ff1bdbb0e4f7d779cd";
        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleForecastResponse);
        return (
        <h4>Hello from {props.city}</h4>
        )
    }
}