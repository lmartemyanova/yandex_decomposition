import React from "react";

/**
 * Компонент отображает один эфирный канал с категорией
 */
const TvChannel = ({ icon, channel, link, category }) => {
  return (
    <div className="tv-channel-item">
      <a href={link} className="tv-channel-link">
        <span className="tv-channel-icon">{icon} </span>
        <span className="tv-channel-name">{channel} </span>
        <span className="tv-channel-category">{category}</span>
      </a>
    </div>
  );
};

export default TvChannel;