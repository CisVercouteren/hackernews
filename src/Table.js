import React from "react";
import Button from "./Button";

const Table = ({ list, searchValue, onDismiss }) => {
    return (
        <div className="table">
            {list.map(el => {
                return (
                    <div key={el.objectID} className="table-row">
                        <a target="blank" href={el.url}>
                            <h4>{el.title}</h4>
                        </a>
                        <p>{el.author}</p>
                        <Button onClick={() => onDismiss(el.objectID)}>
                            Dismiss
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};

export default Table;
