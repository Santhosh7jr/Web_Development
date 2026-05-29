import React, {useState} from "react";

function App() {

  /*const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const fNmaeEventListener = (event) => {
    setFName(event.target.value);
  }

  const lNmaeEventListener = (event) => {
    setLName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {fName + " " + lName}</h1>
      <form>
        <input onChange={fNmaeEventListener} name="fName" placeholder="First Name" />
        <input onChange={lNmaeEventListener} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );*/

  const [fullName, setFullName] = useState({
    fName : "",
    lName : ""
  });

  const fullNameEventListener = (event) => {

    const val = event.target.value;
    
    if (event.target.name === "fName") {
      setFullName({fName : val, lName : fullName.lName});
    } else {
      setFullName({fName : fullName.fName, lName : val});
    }

  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName + " " + fullName.lName}</h1>
      <form>
        <input onChange={fullNameEventListener} name="fName" placeholder="First Name" />
        <input onChange={fullNameEventListener} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );

}

export default App;
