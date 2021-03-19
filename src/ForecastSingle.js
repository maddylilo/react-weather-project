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
            {Math.round(props.data.main.temp)}°C
        </div>
    )
}