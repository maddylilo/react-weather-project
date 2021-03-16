import React, {useState} from "react";

export default function CurrentTemperature(props) {
    let [unit, setUnit] = useState('celsius')

    function displayFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function displayCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <span className="CurrentTemperature">
                <span className="currentTemp">{Math.round(props.celsius)}</span>
                <span className="tempButton">°C</span>
                <span className="tempButton"><a href="/" onClick={displayFahrenheit}>°F</a></span>
            </span>
        )
    } else {
        let fahrenheit = (props.celsius * 9)/5 + 32;
        return (
            <span className="CurrentTemperature">
                <span className="currentTemp">{Math.round(fahrenheit)}</span>
                <span className="tempButton"><a href="/" onClick={displayCelsius}>°C</a></span>
                <span className="tempButton">°F</span>
            </span>
        )
    }
}