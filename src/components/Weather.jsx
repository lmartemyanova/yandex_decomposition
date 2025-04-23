import React from "react";

/**
 * Блок с погодой
 */
const Weather = ({ link, image, currentTemperature, morningTemperature, dayTemperature }) => {
    return (
        <>
        <a href={link} className="weather-title"><h3>Погода</h3></a>
        <div className="weather">
            <div className="weather-info">
                <img
                    src={image}
                    alt="иконка погоды"
                    className="weather-icon"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = "none";
                    }}
                />
                <span className="current-temperature">{currentTemperature}</span>
            </div>
            <div className="forecast">
                <span>Утром {morningTemperature}, </span>
                <span>днём {dayTemperature}</span>
            </div>
        </div>
        </>
    );
};

export default Weather;