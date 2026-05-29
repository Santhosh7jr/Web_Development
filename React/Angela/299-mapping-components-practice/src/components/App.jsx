import React from "react";
import emojipedia from "../emojipedia";
import Box from "./Box";

const addBox = (element) => {
  return (
    <Box
      key = {element.id}
      emoji = {element.emoji}
      name = {element.name}
      meaning = {element.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(addBox)}
      </dl>
    </div>
  );
}

export default App;
