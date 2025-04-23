import React from "react";

/**
 * Компонент одной новости в блоке "Сейчас в СМИ"
 */
const NewsItem = ({ icon, text, link }) => {
    return (
      <div className="news-item">
        <img src={icon} alt="" className="news-icon" />
        <a href={link} className="news-link">{text}</a>
      </div>
    );
  };
  
  export default NewsItem;