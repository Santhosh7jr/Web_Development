import React, {useState} from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [color, colorFunction] = useState('white');

  const handleClicked = () => {
    setHeadingText("Submitted!");
  };

  const mouseOverFunction = () => {
    colorFunction('black')
  }

  const mouseOutFunction = () => {
    colorFunction('white')
  }

  const styling = {
    backgroundColor : color
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={styling} onClick={handleClicked} onMouseOut={mouseOutFunction} onMouseOver={mouseOverFunction}>Submit</button>
    </div>
  );
}

export default App;
