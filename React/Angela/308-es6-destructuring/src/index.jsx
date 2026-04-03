/*import animals from "./data.js";

const [animal1, animal2] = animals;

console.log(animal1);
console.log(animal2);

// const {name, sound} = animal1;

// console.log(name);
// console.log(sound);

// const {name : Name, sound : Sound} = animal2;
// console.log(Name);
// console.log(Sound);

const {name = "fluffy", sound , age = 20} = animal1;
console.log(name);
console.log(sound);
console.log(age);*/

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const {honda, tesla} = cars;
const {speedStats: {topSpeed : hondaTopSpeed}} = honda;
const {speedStats: {topSpeed : teslaTopSpeed}} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
