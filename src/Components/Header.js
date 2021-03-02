import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <img src="" alt="" />
          <div className="header__title">
            <h3>title</h3>
          </div>
        </div>

        <div className="header__right">
          <div className="header__options">
            <a href="">About Me</a>
          </div>
          <div className="header__options">
            <a href="">Projects</a>
          </div>
          <div className="header__options">
            <a href="">Hobbies</a>
          </div>
          <div className="header__options">
            <a href="">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
