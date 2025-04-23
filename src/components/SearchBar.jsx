import React, { useState } from "react";

/**
 * Поисковая строка
 */
const SearchBar = ({ example }) => {
    const [search, setSearch] = useState('');

    const updateSearch = (e) => setSearch(e.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Ищем: ${search}`);
    };

    return (
        <div className="search-bar">
            <form className="search-form" onSubmit={onSubmit}>
                <input className="search-input" onInput={updateSearch} value={search} />
                <button className="search-button">Найти</button>
            </form>    
            <div className="search-example">
                    Найдётся всё. Например, <span>{example}</span>
            </div>
        </div>
    );
};

export default SearchBar;