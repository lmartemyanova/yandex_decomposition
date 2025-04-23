import React from "react";

/**
 * Компонент одной навигационной ссылки сверху меню поиска (Видео, Картинки...)"
 */

const HeaderLinks = ({ text, link }) => {
    return (
      <div className="header-item">
        <a href={link} className="header-link">{text}</a>
      </div>
    );
  };
  
  export default HeaderLinks;