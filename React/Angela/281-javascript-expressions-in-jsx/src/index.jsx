import React from "react";
import ReactDOM from "react-dom";

const name = "Angela"
const luckyNumber = 7;

ReactDOM.render(
    <div>
        <h1>Hello {name}!</h1>
        <p>My Lucky Number is {Math.round(Math.random() * 10)}</p>    
    </div>, 
    
    document.getElementById("root"));

