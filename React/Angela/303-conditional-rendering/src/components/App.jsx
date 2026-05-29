import React from "react";
import Login from "./Login";

let loggedIn = false;

// const Display = () => {
//   if (loggedIn) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />
//   }
// };

function App() {
  return (
    <div className="container">
      {(loggedIn) ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
