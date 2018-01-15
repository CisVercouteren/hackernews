import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
    componentDidMount = () => {
        this.input.classList.add("customInput");
        this.input.focus();
    };
    render() {
        const { onChangeSearch, searchValue, onSubmit, children } = this.props;
        return (
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    onChange={onChangeSearch}
                    value={searchValue}
                    ref={node => {
                        this.input = node;
                    }}
                />
                <button type="submit">{children}</button>
            </form>
        );
    }
}

export default Search;
