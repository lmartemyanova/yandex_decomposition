import React from "react";

/**
 * Компонент одной валюты в блоке валют
 */
const Currency = ({ name, value, change }) => {
    return (
        <div className="currency-item">
            <span className="currency-name">{name} </span>
            <span className="currency-value">{value} </span>
            <span className="currency-change">{change}</span>
        </div>
    );
};

export default Currency;