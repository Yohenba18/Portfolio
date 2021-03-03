import React from "react";
import "./Header.css";


function Header() {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          {/* <CodeIcon/>*/}
          <div className="header__title">
            <h2>Porfolio</h2>
          </div>
        </div>

        <div className="header__right">
          <div className="header__options">
            <h4>About Me</h4>
          </div>
          <div className="header__options">
            <h4>Projects</h4>
          </div>
          <div className="header__options">
            <h4>Hobbies</h4>
          </div>
          <div className="header__options">
            <h4>Contact Me</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
