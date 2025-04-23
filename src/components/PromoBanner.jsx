import React from "react";

/**
 * Компонент отображает рекламный баннер на главной странице.
 */
const PromoBanner = ({ banner, promoName, promoLink }) => {
    return (
        <a href={promoLink} className="promo-link">
            <img
                src={banner}
                alt={promoName}
                className="banner"
                style={{ backgroundColor: "#ccc", objectFit: "cover", width: "100%", height: "auto" }}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "";
                    e.target.alt = promoName;
                }}
            />
        </a>
    );
};

export default PromoBanner;