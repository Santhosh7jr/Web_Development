import React from "react";
import ReactDOM from "react-dom";

const Card = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} alt="avatar_img" />
      <p>{props.phNumber}</p>
      <p>{props.mailId}</p>
    </div>
  );
};

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Beyonce"
      image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phNumber="+123 456 789"
      mailId="b@beyonce.com"
    />

    <Card
      name="Jack Bauer"
      image="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phNumber="+987 654 321"
      mailId="jack@nowhere.com"
    />

    <Card
      name="Chuck Norris"
      image="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      phNumber="+918 372 574"
      mailId="gmail@chucknorris.com"
    />
  </div>,
  document.getElementById("root"),
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
