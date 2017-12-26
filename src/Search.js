import React from "react";

const submitForm = e => {
    e.preventDefault();
};

const Search = ({ onChangeSearch, searchValue }) => {
    return (
        <form onSubmit={submitForm}>
            <input type="text" onChange={onChangeSearch} value={searchValue} />
        </form>
    );
};

export default Search;
