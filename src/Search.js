import React, { Component } from "react";

class Search extends Component {
    submitForm = e => {
        e.preventDefault();
    };
    render() {
        const { onChangeSearch, searchValue } = this.props;
        return (
            <form onSubmit={this.submitForm}>
                <input
                    type="text"
                    onChange={onChangeSearch}
                    value={searchValue}
                />
            </form>
        );
    }
}

export default Search;
