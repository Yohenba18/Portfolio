import React from "react";
import "./About.css";
import think from "../images/think.png"

function About() {
  return (
    <div className="about" id="about_me">
      <div className="about__left">
        <img src={think}></img>
      </div>
      <div className="about__right">
            <h1>Wanna Know Me?</h1>
            <h3>Hi! I am a Computer Science Student with interest in <br/>
                    Blockchain and WEB/APP development<br/>
                    I am a begineer in Solidity language and in App Dev mainly Flutter<br/>
                    I have some experience with project making in ReactJS<br/>
                    I have done some work on UI in Flutter<br/>
            </h3>
      </div>
    </div>
  );
}

export default About;
