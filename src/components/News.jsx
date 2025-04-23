import React from "react";
import NewsItem from "./NewsItem";

/**
 * Только список новостей без вкладок
 */
const News = ({ newsItems }) => {
  return (
    <div className="news-list">
      {newsItems.map((item, index) => (
        <NewsItem key={index} {...item} />
      ))}
    </div>
  );
};

export default News;