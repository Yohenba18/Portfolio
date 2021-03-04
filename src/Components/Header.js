import React from "react";
import "./Header.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from '@material-ui/icons/Instagram';

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          {/* <CodeIcon/>*/}
          <div className="header__title">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="header__center">
          <div className="header__options">
              <a href="#">
                <h3>About Me</h3>
              </a>
            </div>
            <div className="header__options">
              <a href="#">
                <h3>Projects</h3>
              </a>
            </div>
            <div className="header__options">
              <a href="#">
               <h3>Hobbies</h3>
              </a>
            </div>
        </div>

        <div className="header__right">
          <div className="header__options">
            <a href="https://github.com/Yohenba18">
              <GitHubIcon />
            </a>
          </div>
          <div className="header__options">
            <a href="https://twitter.com/YohenbaKshetri1">
              <TwitterIcon />
            </a>
          </div>
          <div className="header__options">
            <a href="https://www.facebook.com/yohenba.kshetrimayum/">
              <FacebookIcon />
            </a>
          </div>
          <div className="header__options">
            <a href="https://www.linkedin.com/in/yohenba-kshetrimayum-74164a190/">
              <LinkedInIcon />
            </a>
          </div>
          <div className="header__options">
            <a href="https://www.instagram.com/yohenba_ksh/">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
