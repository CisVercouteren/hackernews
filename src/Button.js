import React from "react";

const Button = ({ children, onClick, className = "" }) => {
    const style = {
        border: "1px solid black",
        background: "transparent",
        cursor: "pointer"
    };
    return (
        <button onClick={onClick} className={className} style={style}>
            {children}
        </button>
    );
};

export default Button;
