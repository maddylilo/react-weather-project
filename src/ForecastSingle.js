import React from "react";
import CurrentIcon from './CurrentIcon';

export default function ForecastSingle(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }

    return (
         <div className="ForecastSingle col">
            {hours()}
            <CurrentIcon code={props.data.weather[0].icon} />
            <p className="forecastTemperature">{Math.round(props.data.main.temp)}°C / {Math.round((props.data.main.temp * 9)/5 + 32)}°F</p>
        </div>
    )
}

// {Math.round((props.data.main.temp * 9)/5 + 32)}