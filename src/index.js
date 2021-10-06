import React from "react";
import ReactDOM from "react-dom";

function Card(prop) {
  return (
    <div>
      <h1>{prop.name}</h1>
      <img src={prop.img} alt="avatar_img" />
      <p>{prop.tel}</p>
      <p>{prop.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
  </div>,
  document.getElementById("root")
);
