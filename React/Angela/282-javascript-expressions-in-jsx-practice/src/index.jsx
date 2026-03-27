import React from "react";
import ReactDOM from "react-dom";

const name = "Santhosh";
const year = 2026;

ReactDOM.render(
    <div>
        <p>Created by {name}</p>
        <p>Copyright {year}</p>
    </div>,
    document.querySelector("#root")
);
