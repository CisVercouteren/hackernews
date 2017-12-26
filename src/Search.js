import React from "react";

const Search = ({ onChangeSearch, searchValue, onSubmit, children }) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChangeSearch} value={searchValue} />
            <button type="submit">{children}</button>
        </form>
    );
};

export default Search;
