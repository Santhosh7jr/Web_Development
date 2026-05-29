import React from "react";
import ReactDOM from "react-dom";

let heading = null;

const currentHour = new Date().getHours();

if (currentHour < 12) {
  heading = <h1 className="morning">Good Morning</h1>;
} else if (currentHour < 18) {
  heading = <h1 className="afternoon">Good Afternoon</h1>;
} else {
  heading = <h1 className="night">Good Night</h1>;
}

ReactDOM.render(heading, document.querySelector("#root"));