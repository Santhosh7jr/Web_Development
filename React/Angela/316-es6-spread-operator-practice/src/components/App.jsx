import React, {useState} from "react";
import { use } from "react";

function App() {

  const [val, updateVal] = useState("");
  const [toDos, setToDos] = useState([]);

  const formFunction = (event) => {
    event.preventDefault();
    setToDos(prev => [...prev, val]);
    updateVal("");
  }

  const inputFunction = (event) => {
    updateVal(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">

        <form onSubmit={formFunction}>
          <input onChange={inputFunction} value={val} type="text" />
          <button type="submit">
            <span>Add</span>
          </button>
        </form>

      </div>
      <div>
        <ul>
          {toDos.map ((value, index) => (<li key = {index}>{value}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default App;
