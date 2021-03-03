import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <img src="" alt="" />
          <div className="header__title">
            <h2>Header</h2>
          </div>
        </div>

        <div className="header__right">
          <div className="header__options">
            <h2>About Me</h2>
          </div>
          <div className="header__options">
            <h2>Projects</h2>
          </div>
          <div className="header__options">
            <h2>Hobbies</h2>
          </div>
          <div className="header__options">
            <h2>Contact Me</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
