import React from "react";

function App() {

  let currentTime = new Date().toLocaleTimeString();

  const [time, func] = React.useState(currentTime.substring(0, currentTime.length - 2));

  const getCurrentTime = () => {

    setInterval(() => {
      let currentTime = new Date().toLocaleTimeString();

      func(currentTime.substring(0, currentTime.length - 2));
    }, 1000);

  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
