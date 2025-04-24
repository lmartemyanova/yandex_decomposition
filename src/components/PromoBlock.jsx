import React from 'react';

/**
 * Промо блок для рекламы Яндекса
 */
const PromoBlock = ({ image, alt, title, subtitle }) => {
  return (
    <div className="promo-block">
      <img src={image} alt={alt} className="promo-img" />
      <div className="promo-text">
        <div className="promo-title">{title}</div>
        <div className="promo-subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default PromoBlock;