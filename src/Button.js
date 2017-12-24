import React, { Component } from "react";

class Button extends Component {
    render() {
        const style = {
            border: "1px solid black",
            background: "transparent",
            cursor: "pointer"
        };
        const { children, onClick, className = "" } = this.props;
        return (
            <button onClick={onClick} className={className} style={style}>
                {children}
            </button>
        );
    }
}

export default Button;
