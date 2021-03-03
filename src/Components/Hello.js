import React from "react";
import "./Hello.css";
import me from '../images/me.png'

function Hello() {
  return (
    <div className="hello">
      <div className="hello__left">
        <h3>Hey there, I'm </h3>
        <h1>Yohenba Kshetrimayum</h1>
        <footer>just a guy interested in doing everything....</footer>
      </div>
      <div className="hello__right">
            <img src={me}></img>
      </div>
    </div>
  );
}

export default Hello;
