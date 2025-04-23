import React from "react";

/**
 * Компонент отображает одну ссылку в блоке "Посещаемое"
 */
const VisitedLinks = ({ link, title, content }) => {
  return (
    <div className="visited-link-item">
      <a href={link} className="visited-link">
        <span className="visited-title">{title}</span> —{" "}
        <span className="visited-content">{content}</span>
      </a>
    </div>
  );
};

export default VisitedLinks;