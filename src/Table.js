import React, { Component } from "react";
import { isSearched } from "./helpers";
import Button from "./Button";

class Table extends Component {
    render() {
        const { users, searchValue, onDismiss } = this.props;
        const usersView = users.filter(isSearched(searchValue)).map(el => {
            return (
                <div key={el.id}>
                    <h4>
                        {el.firstName} - {el.secondName}
                    </h4>
                    <h6>{el.age}</h6>
                    <Button onClick={() => onDismiss(el.id)}>Dismiss</Button>
                </div>
            );
        });
        return usersView;
    }
}

export default Table;
