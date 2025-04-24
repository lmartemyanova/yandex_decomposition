import React from 'react';

/**
 * Блок с расписаниями
 */

const MapItem = ({ link, schedule }) => {
    return (
        <a href={link} className="map-item">
            {schedule}
        </a>
    );
};
  
export default MapItem;