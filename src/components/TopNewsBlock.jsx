import React, { useState } from "react";
import News from "./News";

/**
 * Контейнер для блока новостей с переключаемыми вкладками
 */
const TopNewsBlock = ({ tabs, allNews }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="news">
      <div className="news-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`news-tab ${tab === activeTab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <News newsItems={allNews[activeTab]} />
    </div>
  );
};

export default TopNewsBlock;