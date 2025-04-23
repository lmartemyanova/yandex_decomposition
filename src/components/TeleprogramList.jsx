import React from "react";
import TeleprogramItem from "./TeleprogramItem";

/**
 * Компонент отображает список телепрограмм
 */
const TeleprogramList = ({ broadcastLink }) => {
  const programs = [
    { time: "10:00", program: "Новости", channel: "Первый канал" },
    { time: "10:30", program: "Время покажет", channel: "Россия 1" },
    { time: "11:00", program: "Место встречи", channel: "НТВ" },
  ];

  return (
    <div className="teleprogram-list">
      <a href={broadcastLink} className="teleprogram-title"><h3>Телепрограмма</h3></a>
      {programs.map((item, index) => (
        <TeleprogramItem
          key={index}
          tvLink="#"
          time={item.time}
          program={item.program}
          channel={item.channel}
        />
      ))}
    </div>
  );
};

export default TeleprogramList;