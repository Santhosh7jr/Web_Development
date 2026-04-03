import React from "react";

function App() {

  const [count, update] = React.useState(0);

  const increment = () => {
    update(count + 1);
  }

  const decrement = () => {
    update(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
