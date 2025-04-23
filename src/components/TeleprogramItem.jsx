import React from "react";

/**
 * Компонент отображает одну программу в телепрограмме
 */
const TeleprogramItem = ({ tvLink, time, program, channel }) => {
  return (
    <div className="teleprogram-item">
      <a href={tvLink} className="teleprogram-link">
        <span className="teleprogram-time">{time} </span>
        <span className="teleprogram-program">{program} </span>
        <span className="teleprogram-channel">{channel} </span>
      </a>
    </div>
  );
};

export default TeleprogramItem;