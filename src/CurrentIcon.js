import React from "react";
import WeatherIcon from 'react-icons-weather';

export default function CurrentIcon(props) {
    console.log(props.code);
    const codeMapping = {
        "01d" : "800",
        "01n" : "800",
        "02d" : "801",
        "02n" : "801",
        "03d" : "801",
        "03n" : "801",
        "04d" : "801",
        "04n" : "801",
        "09d" : "701",
        "09n" : "701",
        "10d" : "300",
        "10n" : "300",
        "11d" : "200",
        "11n" : "200",
        "13d" : "600",
        "13n" : "600",
        "50d" : "741",
        "50n" : "741",
    }

    return (
        <WeatherIcon name="owm" iconId={codeMapping[props.code]} className="weatherIcon"/>
    )
}