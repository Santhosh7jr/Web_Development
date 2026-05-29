import React from "react";
import ReactDOM from "react-dom";

const customStyle = { color: "red", fontSize: "30px", border: "1px solid" };

customStyle.fontSize = "20px";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root"),
);
