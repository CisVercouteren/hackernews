import React from "react";
import { isSearched } from "./helpers";
import Button from "./Button";

const Table = ({ users, searchValue, onDismiss }) => {
    return (
        <div className="table">
            {users.filter(isSearched(searchValue)).map(el => {
                return (
                    <div key={el.id} className="table-row">
                        <h4>
                            {el.firstName} - {el.secondName}
                        </h4>
                        <h6>{el.age}</h6>
                        <Button onClick={() => onDismiss(el.id)}>
                            Dismiss
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};

export default Table;
