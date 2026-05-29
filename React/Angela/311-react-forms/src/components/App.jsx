import React from "react";
import { useState } from "react";

function App() {
  const [name, updateName] = useState("");
  const [state, updateState] = useState(false);

  const handleOnClick = (event) => {
    updateState(true);

    event.preventDefault();
  };

  const handleChange = (event) => {
    updateName(event.target.value);
    updateState(false);
  };

  return (
    // <div className="container">
    //   <h1>Hello {state && name}</h1>
    //   <input
    //     onChange={handleChange}
    //     type="text"
    //     placeholder="What's your name?"
    //   />
    //   <button onClick={handleOnClick}>Submit</button>
    // </div>

    <div className="container">
      <h1>Hello {state && name}</h1>
      <form onSubmit={handleOnClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>

  );
}

export default App;
