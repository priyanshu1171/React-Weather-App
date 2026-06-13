
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";
export default function WeatherApp() {
    const [weatherInfo, setweatherInfo] = useState({
        city: "Delhi",
        feelsLike: 33.98,
        humidity: 26,
        temp: 35.05,
        tempMax: 35.05,
        tempMin: 35.05,
        weather: "haze",
    })

    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
    }
    return (
        <div className="WeatherApp">
            <h3>Weather App</h3>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}